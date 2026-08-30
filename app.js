// 四级自习室 · 应用逻辑
(function () {
  'use strict';

  var READING = (typeof READING_DATA !== 'undefined') ? READING_DATA : [];
  var LISTENING = (typeof LISTENING_DATA !== 'undefined') ? LISTENING_DATA : [];
  var WRITING = (typeof WRITING_DATA !== 'undefined') ? WRITING_DATA : { essays: [], templates: [], connectives: [], topics: [] };
  var TRANSLATION = (typeof TRANSLATION_DATA !== 'undefined') ? TRANSLATION_DATA : [];

  // ---------------- Supabase 云同步 ----------------
  var SUPABASE_URL = 'https://eipjslbvwsrcbzcraxpw.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpcGpzbGJ2d3NyY2J6Y3JheHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxMjA5MzIsImV4cCI6MjEwMjY5NjkzMn0.HqcPwhZZE6lX3vBFve1Q-EjsrrIkJo_7PmHJzIFa--I';
  var sb = null;
  var currentUserId = null;
  var currentUserEmail = '';
  var currentView = 'home';
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  }

  var LS_KEY = 'cet4_progress';
  var $ = function (sel) { return document.querySelector(sel); };
  var app = $('#app');

  // ---------------- 进度存储 ----------------
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) { localStorage.setItem(LS_KEY, JSON.stringify(p)); }
  function markDone(id, score, total, answers) {
    var p = loadProgress();
    var prev = p[id] || {};
    p[id] = {
      done: true,
      score: score,
      total: total,
      answers: (answers !== undefined ? answers : (prev.answers || null))
    };
    if (prev.translation !== undefined) p[id].translation = prev.translation;
    saveProgress(p);
    syncToCloud(p);
  }
  function getProgress(id) { return loadProgress()[id]; }
  function resetProgress(id) {
    var p = loadProgress();
    delete p[id];
    saveProgress(p);
    syncToCloud(p);
    updateStatsMini();
  }

  // ---------------- 错题本 & 生词本 ----------------
  var LS_WRONG = 'cet4_wrong_book';
  var LS_WORDS = 'cet4_word_book';
  function loadWrongBook() { try { return JSON.parse(localStorage.getItem(LS_WRONG)) || {}; } catch (e) { return {}; } }
  function saveWrongBook(wb) { localStorage.setItem(LS_WRONG, JSON.stringify(wb)); }
  function loadWordBook() { try { return JSON.parse(localStorage.getItem(LS_WORDS)) || {}; } catch (e) { return {}; } }
  function saveWordBook(wb) { localStorage.setItem(LS_WORDS, JSON.stringify(wb)); }
  function addWrong(entry) {
    var wb = loadWrongBook();
    entry.time = Date.now();
    wb[entry.key] = entry;
    saveWrongBook(wb);
  }
  function removeWrong(key) {
    var wb = loadWrongBook();
    delete wb[key];
    saveWrongBook(wb);
  }
  function removeWrongBySource(sourceId) {
    var wb = loadWrongBook();
    Object.keys(wb).forEach(function (k) { if (wb[k].sourceId === sourceId) delete wb[k]; });
    saveWrongBook(wb);
  }
  function addWord(word, phonetic, meaning) {
    var key = normalizeWord(word);
    if (!key) return false;
    var wb = loadWordBook();
    if (wb[key]) return false;
    wb[key] = {
      word: word,
      phonetic: String(phonetic || '').replace(/<[^>]*>/g, '').trim(),
      meaning: String(meaning || '').replace(/<[^>]*>/g, '').trim(),
      time: Date.now()
    };
    saveWordBook(wb);
    return true;
  }
  function removeWord(word) {
    var wb = loadWordBook();
    delete wb[normalizeWord(word)];
    saveWordBook(wb);
  }
  function collectChoiceWrongs(item, wrongs) {
    wrongs.forEach(function (w) {
      addWrong({
        key: item.id + '|' + w.qi,
        sourceId: item.id,
        sourceTitle: item.title,
        kind: 'choice',
        qIndex: w.qi,
        q: w.q.q,
        options: w.q.options || [],
        userAnswerRaw: w.user,
        correctAnswerRaw: w.q.answer,
        explanation: w.q.explanation || '',
        word: w.q.targetWord || null
      });
      if (w.q.targetWord) {
        var info = lookupLocal(w.q.targetWord);
        if (info) addWord(w.q.targetWord, info.phonetic, info.meaning);
      }
    });
  }
  function collectClozeWrongs(item, wrongs) {
    wrongs.forEach(function (w) {
      addWrong({
        key: item.id + '|' + w.n,
        sourceId: item.id,
        sourceTitle: item.title,
        kind: 'cloze',
        qIndex: w.n,
        q: '选词填空 · 第 ' + w.n + ' 空',
        options: item.wordBank || [],
        userAnswerRaw: w.user,
        correctAnswerRaw: w.ans,
        explanation: (item.explanations && item.explanations[w.n]) || '',
        word: w.ans || null
      });
      var info = lookupLocal(w.ans);
      if (info) addWord(w.ans, info.phonetic, info.meaning);
    });
  }
  function collectMatchWrongs(item, wrongs) {
    wrongs.forEach(function (w) {
      addWrong({
        key: item.id + '|' + w.qi,
        sourceId: item.id,
        sourceTitle: item.title,
        kind: 'match',
        qIndex: w.qi,
        q: w.q.q,
        options: (item.paragraphs || []).map(function (_, i) { return String.fromCharCode(65 + i); }),
        userAnswerRaw: w.user,
        correctAnswerRaw: w.q.answer,
        explanation: w.q.explanation || '',
        word: null
      });
    });
  }

  // ---------------- 工具 ----------------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // 英文文本 -> 可点击单词；highlights 为需高亮的词/短语数组（短语按空格拆词匹配）
  function wordify(text, highlights) {
    var hlMap = {};
    (highlights || []).forEach(function (h) {
      String(h).toLowerCase().split(/\s+/).forEach(function (w) {
        if (w) hlMap[w] = true;
      });
    });
    return esc(text).replace(/[A-Za-z]+(?:'[A-Za-z]+)?/g, function (m) {
      var cls = hlMap[m.toLowerCase()] ? 'w target' : 'w';
      return '<span class="' + cls + '" data-word="' + m + '">' + m + '</span>';
    });
  }
  function toast(msg) {
    var t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }
  // 选择题判分：给 DOM 上色并返回 {score, wrongs}
  function gradeChoices(questions, selected) {
    var score = 0, wrongs = [];
    questions.forEach(function (q, qi) {
      var qb = document.querySelector('.q-block[data-q="' + qi + '"]');
      var user = selected[qi];
      if (qb) {
        qb.querySelectorAll('.opt').forEach(function (o) {
          var oi = parseInt(o.getAttribute('data-oi'), 10);
          o.classList.add('disabled');
          if (oi === q.answer) o.classList.add('correct');
          else if (oi === user) o.classList.add('wrong');
        });
        var ok = (user === q.answer);
        var expl = qb.querySelector('[data-expl]');
        expl.innerHTML = (ok ? '<span class="correct-ans">✓ 回答正确</span>' : '<span class="wrong-ans">✗ 回答错误</span>，正确答案：<b>' + String.fromCharCode(65 + q.answer) + '</b>') + '<br>' + esc(q.explanation || '');
        expl.classList.add('show');
        qb.classList.add('answered');
      }
      if (user === q.answer) score++;
      else wrongs.push({ qi: qi, q: q, user: user });
    });
    return { score: score, wrongs: wrongs };
  }
  // 打乱数组（返回新数组）
  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  // 从数组随机抽 n 个（返回新数组）
  function sampleArray(arr, n) {
    return shuffleArray(arr).slice(0, n);
  }
  // 解析词典词条 "音标 | 释义" -> {phonetic, meaning}
  function parseDictEntry(val) {
    var s = String(val || '');
    var idx = s.indexOf('|');
    if (idx < 0) return { phonetic: '', meaning: s.trim() };
    return { phonetic: s.slice(0, idx).trim(), meaning: s.slice(idx + 1).trim() };
  }

  // ---------------- 路由 ----------------
  function route(view) {
    currentView = view;
    document.querySelectorAll('.tab').forEach(function (t) {
      t.classList.toggle('active', t.getAttribute('data-view') === view);
    });
    if (view === 'home') renderHome();
    else if (view === 'reading') renderReadingList();
    else if (view === 'listening') renderListeningList();
    else if (view === 'writing') renderWriting();
    else if (view === 'translation') renderTranslationList();
    else if (view === 'vocab') renderVocab();
    else if (view === 'review') renderReview();
    updateStatsMini();
    window.scrollTo({ top: 0 });
  }
  document.querySelectorAll('.tab').forEach(function (t) {
    t.addEventListener('click', function () { route(t.getAttribute('data-view')); });
  });

  // ---------------- 统计 ----------------
  function calcStats() {
    var p = loadProgress();
    var done = 0, total = 0, sumScore = 0, sumTotal = 0;
    Object.keys(p).forEach(function (k) {
      if (k.indexOf('essay-') === 0) return; // 作文是资料板块，不计入练习统计
      if (p[k] && p[k].done) { done++; sumScore += p[k].score || 0; sumTotal += p[k].total || 0; }
    });
    total = READING.length + LISTENING.length + TRANSLATION.length;
    var acc = sumTotal > 0 ? Math.round(sumScore / sumTotal * 100) : 0;
    return { done: done, total: total, acc: acc };
  }
  function updateStatsMini() {
    var s = calcStats();
    $('#statsMini').textContent = '已完成 ' + s.done + '/' + s.total + ' · 正确率 ' + s.acc + '%';
  }

  // ---------------- 首页 ----------------
  function renderHome() {
    var s = calcStats();
    var readDone = READING.filter(function (x) { return getProgress(x.id); }).length;
    var listenDone = LISTENING.filter(function (x) { return getProgress(x.id); }).length;
    function card(icon, title, desc, done, total, view, noProgress, statText) {
      var pct = total ? Math.round(done / total * 100) : 0;
      var bar = noProgress ? '' : '<div class="bar"><i style="width:' + pct + '%"></i></div>';
      var stat = statText || (noProgress ? '<div class="d">📚 资料板块 · 不占练习统计</div>' : '<div class="d">' + done + ' / ' + total + ' 已完成</div>');
      return '<div class="mcard" data-goto="' + view + '">' +
        '<div class="icon">' + icon + '</div>' +
        '<div class="t">' + title + '</div>' +
        '<div class="d">' + desc + '</div>' +
        bar +
        stat +
        '</div>';
    }
    app.innerHTML = '<div class="view">' +
      '<div class="hero">' +
        '<h1>四级<span class="accent">自习室</span></h1>' +
        '<p>阅读 · 听力 · 翻译，一站式练习；作文是资料库，随时查阅。点任意英文单词即可查词，交卷立刻看解析。数据都保存在本地浏览器里喔～</p>' +
        '<div class="hero-cards">' +
          card('📖', '阅读', '仔细阅读 / 选词填空 / 长篇匹配，做完有详细解析', readDone, READING.length, 'reading') +
          card('🎧', '听力', '新闻 / 长对话 / 短文，听完看原文和解析', listenDone, LISTENING.length, 'listening') +
          card('✍️', '作文', '范文 + 模板 + 连接词 + 话题词汇积累', 0, 0, 'writing', true) +
          card('🈶', '翻译', '汉译英练习，输入译文对照参考 + 重点词汇句型', TRANSLATION.filter(function (x) { var p = getProgress(x.id); return p && p.done; }).length, TRANSLATION.length, 'translation') +
          card('🔤', '词汇', '词义匹配练习 + 生词本，边学边记', 0, 0, 'vocab', true, '<div class="d">' + Object.keys(loadWordBook()).length + ' 个生词待复习</div>') +
          card('📒', '错题本', '做错的题和词都在这里，随时复盘', 0, 0, 'review', true, '<div class="d">' + Object.keys(loadWrongBook()).length + ' 道错题待复盘</div>') +
        '</div>' +
      '</div>' +
      '<div class="progress-grid">' +
        '<div class="pstat"><div class="num">' + s.done + '</div><div class="lbl">已完成练习</div></div>' +
        '<div class="pstat"><div class="num">' + s.total + '</div><div class="lbl">全部练习</div></div>' +
        '<div class="pstat"><div class="num">' + s.acc + '%</div><div class="lbl">累计正确率</div></div>' +
      '</div>' +
    '</div>';
    document.querySelectorAll('.mcard').forEach(function (c) {
      c.addEventListener('click', function () { route(c.getAttribute('data-goto')); });
    });
  }

  // ---------------- 阅读 ----------------
  var READ_TYPES = { careful: '仔细阅读', cloze: '选词填空', match: '长篇匹配' };
  var readFilter = 'all';
  function renderReadingList() {
    var head = '<div class="section-head"><h2>阅读练习</h2>' +
      '<div class="filter-group">' +
      '<button class="chip ' + (readFilter === 'all' ? 'active' : '') + '" data-f="all">全部</button>' +
      '<button class="chip ' + (readFilter === 'careful' ? 'active' : '') + '" data-f="careful">仔细阅读</button>' +
      '<button class="chip ' + (readFilter === 'cloze' ? 'active' : '') + '" data-f="cloze">选词填空</button>' +
      '<button class="chip ' + (readFilter === 'match' ? 'active' : '') + '" data-f="match">长篇匹配</button>' +
      '</div></div>';
    var list = READING.filter(function (x) { return readFilter === 'all' || x.type === readFilter; })
      .map(function (x) {
        var p = getProgress(x.id);
        var badge = p ? '<span class="done-badge">✓ ' + p.score + '/' + p.total + '</span>' : '';
        return '<div class="item" data-id="' + x.id + '">' +
          '<span class="tag">' + (READ_TYPES[x.type] || x.type) + '</span>' +
          '<div class="body"><div class="title">' + esc(x.title) + '</div>' +
          '<div class="meta">' + (x.questions ? x.questions.length : (x.answers || []).length) + ' 题 · ' + esc(x.source || '') + '</div></div>' +
          badge + '<span class="arrow">›</span></div>';
      }).join('');
    app.innerHTML = '<div class="view">' + head +
      (list ? '<div class="item-list">' + list + '</div>' : '<div class="empty"><div class="big">📭</div>暂无内容</div>') +
      '</div>';
    document.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () { readFilter = c.getAttribute('data-f'); renderReadingList(); });
    });
    document.querySelectorAll('.item').forEach(function (it) {
      it.addEventListener('click', function () { renderReadingQuiz(it.getAttribute('data-id')); });
    });
  }

  function renderReadingQuiz(id) {
    var item = READING.find(function (x) { return x.id === id; });
    if (!item) { renderReadingList(); return; }
    if (item.type === 'cloze') return renderCloze(item);
    if (item.type === 'match') return renderMatch(item);
    return renderCareful(item);
  }

  // 通用：选择题渲染 + 判分
  function renderQuizShell(item, bodyHtml, submitLabel) {
    return '<div class="view">' +
      '<button class="back-btn" data-back>← 返回列表</button>' +
      '<div class="quiz-title">' + esc(item.title) + '</div>' +
      '<div class="quiz-meta"><span class="tag">' + (READ_TYPES[item.type] || item.type) + '</span>' +
      '<span>' + esc(item.source || '') + '</span></div>' +
      bodyHtml +
      '<div class="submit-bar"><button class="btn btn-primary" data-submit>' + (submitLabel || '交卷') + '</button>' +
      '<button class="btn btn-ghost" data-reset>重做</button>' +
      '<div class="score" data-score></div></div>' +
      '</div>';
  }

  function bindCommon(item) {
    document.querySelector('[data-back]').addEventListener('click', function () { renderReadingList(); });
    document.querySelector('[data-reset]').addEventListener('click', function () {
      resetProgress(item.id);
      removeWrongBySource(item.id);
      renderReadingQuiz(item.id);
    });
  }

  function renderCareful(item) {
    var qhtml = item.questions.map(function (q, qi) {
      return '<div class="q-block" data-q="' + qi + '">' +
        '<div class="q-stem"><span class="qnum">' + (qi + 1) + '.</span>' + wordify(q.q) + '</div>' +
        '<div class="options">' + q.options.map(function (o, oi) {
          return '<div class="opt" data-oi="' + oi + '"><span class="oletter">' + String.fromCharCode(65 + oi) + '.</span><span>' + wordify(o) + '</span></div>';
        }).join('') + '</div>' +
        '<div class="expl" data-expl="' + qi + '"></div></div>';
    }).join('');
    var targets = item.questions.map(function (q) { return q.targetWord; }).filter(Boolean);
    var body = '<div class="passage"><h3>Reading Passage</h3><div class="text">' + wordify(item.passage, targets) + '</div></div>' +
      '<div class="questions">' + qhtml + '</div>';
    app.innerHTML = renderQuizShell(item, body);
    bindCommon(item);

    var saved = getProgress(item.id);
    var selected = {};
    if (saved && saved.answers) {
      Object.keys(saved.answers).forEach(function (k) { selected[k] = saved.answers[k]; });
    }

    document.querySelectorAll('.opt').forEach(function (o) {
      o.addEventListener('click', function () {
        if (o.closest('.q-block').classList.contains('answered')) return;
        var qb = o.closest('.q-block');
        var qi = qb.getAttribute('data-q');
        qb.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('selected'); });
        o.classList.add('selected');
        selected[qi] = parseInt(o.getAttribute('data-oi'), 10);
      });
    });

    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      var r = gradeChoices(item.questions, selected);
      var total = item.questions.length;
      document.querySelector('[data-score]').innerHTML = r.score + ' <small>/ ' + total + '</small>';
      markDone(item.id, r.score, total, selected);
      collectChoiceWrongs(item, r.wrongs);
      updateStatsMini();
      var submit = document.querySelector('[data-submit]');
      submit.textContent = '已完成';
      submit.disabled = true;
      toast('得分 ' + r.score + ' / ' + total);
    }

    document.querySelector('[data-submit]').addEventListener('click', finish);

    if (saved && saved.done && saved.answers) {
      Object.keys(selected).forEach(function (qi) {
        var o = document.querySelector('.q-block[data-q="' + qi + '"] .opt[data-oi="' + selected[qi] + '"]');
        if (o) o.classList.add('selected');
      });
      finish();
    }
    bindVocab(item.vocab);
  }

  // 选词填空
  function renderCloze(item) {
    var saved = getProgress(item.id);
    var cloze = { current: null, answers: {}, used: {} };
    if (saved && saved.answers) {
      Object.keys(saved.answers).forEach(function (n) {
        cloze.answers[n] = saved.answers[n];
        if (saved.answers[n]) cloze.used[saved.answers[n]] = true;
      });
    }
    function renderBank() {
      var html = '<div class="wordbank">';
      item.wordBank.forEach(function (w) {
        var used = cloze.used[w];
        html += '<span class="wb-word' + (used ? ' used' : '') + '" data-w="' + esc(w) + '">' + esc(w) + '</span>';
      });
      return html + '</div>';
    }
    function renderPassage() {
      return item.passage.split(/__(\d+)__/).map(function (part, i) {
        if (i % 2 === 1) {
          var n = part;
          var val = cloze.answers[n] || '?';
          return '<span class="cloze-blank' + (val !== '?' ? ' filled' : '') + '" data-blank="' + n + '">' + esc(val) + '</span>';
        }
        return wordify(part);
      }).join('');
    }
    var body = '<div class="passage"><h3>选词填空（15 选 10）</h3>' +
      '<div class="cloze-passage">' + renderPassage() + '</div>' +
      '<div data-bank>' + renderBank() + '</div>' +
      '<div class="quiz-meta" style="margin-top:14px;color:var(--ink-faint);font-size:13px">提示：先点空位，再点下方单词填入；点已填的空位可清除，填完自动跳下一空位</div></div>';
    app.innerHTML = renderQuizShell(item, body, '交卷');
    bindCommon(item);

    var bankEl = document.querySelector('[data-bank]');
    var passageEl = document.querySelector('.cloze-passage');

    // 只更新视图，不重复绑定事件（关键：避免监听器累积导致卡顿崩溃）
    function refresh() {
      document.querySelectorAll('.cloze-blank').forEach(function (b) {
        var n = b.getAttribute('data-blank');
        var val = cloze.answers[n] || '?';
        b.textContent = val;
        b.classList.toggle('filled', val !== '?');
        b.classList.toggle('current', cloze.current === n);
      });
      bankEl.innerHTML = renderBank();
    }

    // 下一个未填空位编号
    function nextBlank() {
      for (var i = 1; i <= item.answers.length; i++) {
        if (!cloze.answers[String(i)]) return String(i);
      }
      return null;
    }

    // 事件委托：点空位（只在初始绑定一次）
    passageEl.addEventListener('click', function (e) {
      var b = e.target.closest('.cloze-blank');
      if (!b) return;
      var n = b.getAttribute('data-blank');
      if (cloze.answers[n]) { delete cloze.used[cloze.answers[n]]; delete cloze.answers[n]; }
      cloze.current = n;
      refresh();
    });

    // 事件委托：点候选词（只在初始绑定一次）
    bankEl.addEventListener('click', function (e) {
      var w = e.target.closest('.wb-word');
      if (!w) return;
      if (w.classList.contains('used')) return; // 已用词不能重复选
      var word = w.getAttribute('data-w');
      if (!cloze.current) { toast('请先点击要填的空位'); return; }
      if (cloze.answers[cloze.current]) delete cloze.used[cloze.answers[cloze.current]];
      cloze.answers[cloze.current] = word;
      cloze.used[word] = true;
      var next = nextBlank();
      cloze.current = next; // 填完自动跳到下一个空位
      refresh();
      if (!next) toast('全部空位已填，可以交卷啦');
    });

    refresh();

    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      var score = 0;
      var wrongs = [];
      item.answers.forEach(function (ans, i) {
        var n = String(i + 1);
        var user = cloze.answers[n];
        var b = document.querySelector('.cloze-blank[data-blank="' + n + '"]');
        var ok = (user === ans);
        if (b) {
          if (ok) { score++; b.classList.add('correct'); }
          else { b.classList.add('wrong'); wrongs.push({ n: n, user: user, ans: ans }); }
        } else if (!ok) {
          wrongs.push({ n: n, user: user, ans: ans });
        }
      });
      var total = item.answers.length;
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      markDone(item.id, score, total, cloze.answers);
      collectClozeWrongs(item, wrongs);
      updateStatsMini();
      // 解析
      var explHtml = '<div class="passage" style="margin-top:20px"><h3>答案与解析</h3>';
      item.answers.forEach(function (ans, i) {
        var n = String(i + 1);
        explHtml += '<div style="margin-bottom:10px;font-size:14.5px"><b>' + n + '. ' + esc(ans) + '</b>' +
          (cloze.answers[n] === ans ? ' <span class="correct-ans" style="color:var(--green)">✓</span>' : ' <span class="wrong-ans" style="color:var(--coral)">✗ 你填：' + esc(cloze.answers[n] || '空') + '</span>') +
          '<br><span style="color:var(--ink-soft)">' + esc((item.explanations && item.explanations[n]) || '') + '</span></div>';
      });
      explHtml += '</div>';
      var bar = document.querySelector('.submit-bar');
      bar.insertAdjacentHTML('afterend', explHtml);
      var submit = document.querySelector('[data-submit]');
      submit.textContent = '已完成';
      submit.disabled = true;
      passageEl.style.pointerEvents = 'none';
      bankEl.style.pointerEvents = 'none';
      toast('得分 ' + score + ' / ' + total);
    }

    document.querySelector('[data-submit]').addEventListener('click', finish);

    if (saved && saved.done && saved.answers) {
      finish();
    }
    bindVocab(item.vocab);
  }

  // 长篇匹配
  function renderMatch(item) {
    var paras = item.paragraphs.map(function (p, i) {
      var letter = String.fromCharCode(65 + i);
      return '<div class="para"><div class="pletter">' + letter + '</div><div class="ptext">' + wordify(p) + '</div></div>';
    }).join('');
    var letters = item.paragraphs.map(function (_, i) { return String.fromCharCode(65 + i); });
    var qhtml = item.questions.map(function (q, qi) {
      var opts = letters.map(function (L) {
        return '<span class="opt-match" data-l="' + L + '">' + L + '</span>';
      }).join('');
      return '<div class="q-block" data-q="' + qi + '">' +
        '<div class="q-stem"><span class="qnum">' + (qi + 1) + '.</span>' + wordify(q.q) + '</div>' +
        '<div class="match-opts">' + opts + '</div>' +
        '<div class="expl" data-expl="' + qi + '"></div></div>';
    }).join('');
    var body = '<div class="passage"><h3>段落匹配（选出与题干对应的段落）</h3><div>' + paras + '</div></div>' +
      '<div class="questions">' + qhtml + '</div>';
    app.innerHTML = renderQuizShell(item, body);
    // 注入 match-opts 样式
    var st = document.createElement('style');
    st.textContent = '.match-opts{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.opt-match{min-width:38px;text-align:center;padding:8px 0;border:1px solid var(--line);border-radius:8px;cursor:pointer;font-weight:700;color:var(--ink);font-family:var(--serif)}.opt-match:hover{border-color:var(--indigo);color:var(--indigo)}.opt-match.sel{background:var(--indigo);color:#fff;border-color:var(--indigo)}.opt-match.correct{background:var(--green);color:#fff;border-color:var(--green)}.opt-match.wrong{background:var(--coral);color:#fff;border-color:var(--coral)}';
    document.head.appendChild(st);
    bindCommon(item);

    var saved = getProgress(item.id);
    var selected = {};
    if (saved && saved.answers) {
      Object.keys(saved.answers).forEach(function (k) { selected[k] = saved.answers[k]; });
    }
    document.querySelectorAll('.opt-match').forEach(function (o) {
      o.addEventListener('click', function () {
        var qb = o.closest('.q-block');
        if (qb.classList.contains('answered')) return;
        var qi = qb.getAttribute('data-q');
        qb.querySelectorAll('.opt-match').forEach(function (x) { x.classList.remove('sel'); });
        o.classList.add('sel');
        selected[qi] = o.getAttribute('data-l');
      });
    });

    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      var score = 0;
      var wrongs = [];
      item.questions.forEach(function (q, qi) {
        var qb = document.querySelector('.q-block[data-q="' + qi + '"]');
        var user = selected[qi];
        qb.querySelectorAll('.opt-match').forEach(function (o) {
          var L = o.getAttribute('data-l');
          if (L === q.answer) o.classList.add('correct');
          else if (L === user) o.classList.add('wrong');
        });
        var ok = (user === q.answer);
        if (ok) score++;
        else wrongs.push({ qi: qi, q: q, user: user });
        var expl = qb.querySelector('[data-expl]');
        expl.innerHTML = (ok ? '<span class="correct-ans">✓ 正确</span>' : '<span class="wrong-ans">✗ 错误</span>，答案：<b>' + q.answer + ' 段</b>') + '<br>' + esc(q.explanation || '');
        expl.classList.add('show');
        qb.classList.add('answered');
      });
      var total = item.questions.length;
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      markDone(item.id, score, total, selected);
      collectMatchWrongs(item, wrongs);
      updateStatsMini();
      var submit = document.querySelector('[data-submit]');
      submit.textContent = '已完成';
      submit.disabled = true;
      toast('得分 ' + score + ' / ' + total);
    }

    document.querySelector('[data-submit]').addEventListener('click', finish);

    if (saved && saved.done && saved.answers) {
      Object.keys(selected).forEach(function (qi) {
        var o = document.querySelector('.q-block[data-q="' + qi + '"] .opt-match[data-l="' + selected[qi] + '"]');
        if (o) o.classList.add('sel');
      });
      finish();
    }
    bindVocab(item.vocab);
  }

  // ---------------- 听力 ----------------
  var LISTEN_TYPES = { news: '新闻', conversation: '长对话', passage: '短文' };
  var listenFilter = 'all';
  function renderListeningList() {
    var head = '<div class="section-head"><h2>听力练习</h2>' +
      '<div class="filter-group">' +
      '<button class="chip ' + (listenFilter === 'all' ? 'active' : '') + '" data-f="all">全部</button>' +
      '<button class="chip ' + (listenFilter === 'news' ? 'active' : '') + '" data-f="news">新闻</button>' +
      '<button class="chip ' + (listenFilter === 'conversation' ? 'active' : '') + '" data-f="conversation">长对话</button>' +
      '<button class="chip ' + (listenFilter === 'passage' ? 'active' : '') + '" data-f="passage">短文</button>' +
      '</div></div>';
    var list = LISTENING.filter(function (x) { return listenFilter === 'all' || x.type === listenFilter; })
      .map(function (x) {
        var p = getProgress(x.id);
        var badge = p ? '<span class="done-badge">✓ ' + p.score + '/' + p.total + '</span>' : '';
        return '<div class="item" data-id="' + x.id + '">' +
          '<span class="tag">' + (LISTEN_TYPES[x.type] || x.type) + '</span>' +
          '<div class="body"><div class="title">' + esc(x.title) + '</div>' +
          '<div class="meta">' + x.questions.length + ' 题 · ' + esc(x.source || '') + '</div></div>' +
          badge + '<span class="arrow">›</span></div>';
      }).join('');
    app.innerHTML = '<div class="view">' + head +
      (list ? '<div class="item-list">' + list + '</div>' : '<div class="empty"><div class="big">🎧</div>暂无内容</div>') +
      '</div>';
    document.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () { listenFilter = c.getAttribute('data-f'); renderListeningList(); });
    });
    document.querySelectorAll('.item').forEach(function (it) {
      it.addEventListener('click', function () { renderListeningQuiz(it.getAttribute('data-id')); });
    });
  }

  var audio = null;
  function renderListeningQuiz(id) {
    var item = LISTENING.find(function (x) { return x.id === id; });
    if (!item) { renderListeningList(); return; }
    if (audio) { audio.pause(); audio = null; }

    var qhtml = item.questions.map(function (q, qi) {
      return '<div class="q-block" data-q="' + qi + '">' +
        '<div class="q-stem"><span class="qnum">' + (qi + 1) + '.</span>' +
        '<span class="q-hidden" data-qtext="' + qi + '">' + wordify(q.q) + '</span></div>' +
        '<div class="options">' + q.options.map(function (o, oi) {
          return '<div class="opt" data-oi="' + oi + '"><span class="oletter">' + String.fromCharCode(65 + oi) + '.</span><span>' + wordify(o) + '</span></div>';
        }).join('') + '</div>' +
        '<div class="expl" data-expl="' + qi + '"></div></div>';
    }).join('');

    var transcriptHtml = '';
    if (item.transcript) {
      transcriptHtml = '<div class="transcript" data-transcript><h3>听力原文</h3><div class="text">' +
        renderTranscript(item.transcript) + '</div></div>';
    }

    app.innerHTML = '<div class="view">' +
      '<button class="back-btn" data-back>← 返回列表</button>' +
      '<div class="quiz-title">' + esc(item.title) + '</div>' +
      '<div class="quiz-meta"><span class="tag">' + (LISTEN_TYPES[item.type] || item.type) + '</span>' +
      '<span>' + esc(item.source || '') + '</span></div>' +
      '<div class="audio-card">' +
        '<div class="audio-title">🎧 ' + esc(item.title) + '</div>' +
        '<div class="audio-controls">' +
          '<button class="play-btn" data-play>▶</button>' +
          '<div class="audio-progress" data-prog><i></i></div>' +
          '<div class="audio-time" data-time>0:00 / 0:00</div>' +
        '</div>' +
        '<div class="audio-speed" style="margin-top:12px">' +
          '<button class="speed-btn active" data-rate="1">1.0×</button>' +
          '<button class="speed-btn" data-rate="0.75">0.75×</button>' +
          '<button class="speed-btn" data-rate="1.25">1.25×</button>' +
          '<button class="speed-btn" data-rate="1.5">1.5×</button>' +
        '</div>' +
      '</div>' +
      '<div class="listen-hint">🎧 真题听力：卷面无题目，请听音频作答；交卷后显示题目与原文对照</div>' +
      '<div class="questions">' + qhtml + '</div>' +
      transcriptHtml +
      '<div class="submit-bar"><button class="btn btn-primary" data-submit>交卷</button>' +
      '<button class="btn btn-ghost" data-reset>重做</button>' +
      '<div class="score" data-score></div></div>' +
      '</div>';

    document.querySelector('[data-back]').addEventListener('click', function () { if (audio) audio.pause(); renderListeningList(); });
    document.querySelector('[data-reset]').addEventListener('click', function () {
      resetProgress(item.id);
      removeWrongBySource(item.id);
      renderListeningQuiz(item.id);
    });

    // 音频
    var playBtn = document.querySelector('[data-play]');
    var progEl = document.querySelector('[data-prog]');
    var progBar = progEl.querySelector('i');
    var timeEl = document.querySelector('[data-time]');
    audio = new Audio(item.audio);
    function fmt(t) { t = Math.floor(t); return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0'); }
    audio.addEventListener('loadedmetadata', function () { timeEl.textContent = '0:00 / ' + fmt(audio.duration); });
    audio.addEventListener('timeupdate', function () {
      if (audio.duration) { progBar.style.width = (audio.currentTime / audio.duration * 100) + '%'; timeEl.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration); }
    });
    audio.addEventListener('ended', function () { playBtn.textContent = '▶'; });
    playBtn.addEventListener('click', function () {
      if (audio.paused) { audio.play(); playBtn.textContent = '❚❚'; }
      else { audio.pause(); playBtn.textContent = '▶'; }
    });
    progEl.addEventListener('click', function (e) {
      var rect = progEl.getBoundingClientRect();
      var ratio = (e.clientX - rect.left) / rect.width;
      if (audio.duration) audio.currentTime = ratio * audio.duration;
    });
    document.querySelectorAll('.speed-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        audio.playbackRate = parseFloat(b.getAttribute('data-rate'));
        document.querySelectorAll('.speed-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
      });
    });

    // 做题
    var saved = getProgress(item.id);
    var selected = {};
    if (saved && saved.answers) {
      Object.keys(saved.answers).forEach(function (k) { selected[k] = saved.answers[k]; });
    }
    document.querySelectorAll('.opt').forEach(function (o) {
      o.addEventListener('click', function () {
        var qb = o.closest('.q-block');
        if (qb.classList.contains('answered')) return;
        var qi = qb.getAttribute('data-q');
        qb.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('selected'); });
        o.classList.add('selected');
        selected[qi] = parseInt(o.getAttribute('data-oi'), 10);
      });
    });

    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      var r = gradeChoices(item.questions, selected);
      var total = item.questions.length;
      document.querySelector('[data-score]').innerHTML = r.score + ' <small>/ ' + total + '</small>';
      var tr = document.querySelector('[data-transcript]');
      if (tr) tr.classList.add('show');
      // 交卷后显示题干（真题听力卷面无题目，考完对照）
      document.querySelectorAll('[data-qtext]').forEach(function (el) { el.classList.add('show'); });
      markDone(item.id, r.score, total, selected);
      collectChoiceWrongs(item, r.wrongs);
      updateStatsMini();
      var submit = document.querySelector('[data-submit]');
      submit.textContent = '已完成';
      submit.disabled = true;
      toast('得分 ' + r.score + ' / ' + total);
    }

    document.querySelector('[data-submit]').addEventListener('click', finish);

    if (saved && saved.done && saved.answers) {
      Object.keys(selected).forEach(function (qi) {
        var o = document.querySelector('.q-block[data-q="' + qi + '"] .opt[data-oi="' + selected[qi] + '"]');
        if (o) o.classList.add('selected');
      });
      finish();
    }
    bindVocab(item.vocab);
  }

  function renderTranscript(text) {
    var lines = String(text).split(/\n/);
    return lines.map(function (line) {
      var m = line.match(/^(Man|Woman|Speaker\s*A|Speaker\s*B|Interviewer|Reporter|Anchor|Professor)\s*:/i);
      if (m) {
        return '<span class="speaker">' + m[1] + ':</span> ' + wordify(line.slice(m[0].length));
      }
      return wordify(line);
    }).join('<br>');
  }

  // ---------------- 作文 ----------------
  var writeTab = 'essays';
  function renderWriting() {
    var tabs = [
      { k: 'essays', label: '范文' },
      { k: 'templates', label: '模板' },
      { k: 'connectives', label: '连接词' },
      { k: 'topics', label: '话题词汇' },
    ];
    var head = '<div class="section-head"><h2>作文积累</h2>' +
      '<div class="filter-group">' +
      tabs.map(function (t) { return '<button class="chip ' + (writeTab === t.k ? 'active' : '') + '" data-f="' + t.k + '">' + t.label + '</button>'; }).join('') +
      '</div></div>';
    var body = '';
    if (writeTab === 'essays') body = renderEssays();
    else if (writeTab === 'templates') body = renderTemplates();
    else if (writeTab === 'connectives') body = renderConnectives();
    else body = renderTopics();
    app.innerHTML = '<div class="view">' + head + body + '</div>';
    document.querySelectorAll('.chip').forEach(function (c) {
      c.addEventListener('click', function () { writeTab = c.getAttribute('data-f'); renderWriting(); });
    });
    // 绑定范文内的点词
    document.querySelectorAll('.essay-sample, .essay-prompt').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var w = e.target.closest('.w');
        if (w) showDict(w.getAttribute('data-word'));
      });
    });
  }

  function renderEssays() {
    var essays = WRITING.essays || [];
    if (!essays.length) return '<div class="empty"><div class="big">✍️</div>暂无范文</div>';
    return essays.map(function (e) {
      var cat = '<span class="essay-cat">' + esc(e.category || '') + '</span>';
      var hl = (e.highlights || []).map(function (h) { return '<div class="hl-item">✦ ' + esc(h) + '</div>'; }).join('');
      var tpl = e.template ? '<div class="tpl-block"><b>可套用模板：</b>\n' + esc(e.template) + '</div>' : '';
      return '<div class="essay-card">' +
        '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">' + cat +
        '<h3>' + esc(e.title || '') + '</h3></div>' +
        '<div class="essay-prompt">📝 <b>题目：</b>' + esc(e.prompt || '') + '</div>' +
        '<div class="essay-sample">' + wordify(e.sample || '') + '</div>' +
        (e.translation ? '<div class="essay-prompt" style="margin-top:14px">🌐 <b>参考译文：</b>' + esc(e.translation) + '</div>' : '') +
        '<div class="hl-list" style="margin-top:14px"><div style="font-size:13px;color:var(--ink-faint);letter-spacing:1px;margin-bottom:4px">💡 好词好句</div>' + hl + '</div>' +
        tpl +
        '</div>';
    }).join('');
  }
  function renderTemplates() {
    var tpls = WRITING.templates || [];
    if (!tpls.length) return '<div class="empty"><div class="big">🧩</div>暂无模板</div>';
    return tpls.map(function (t) {
      return '<div class="essay-card">' +
        '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">' +
        '<span class="essay-cat">' + esc(t.category || '') + '</span><h3>' + esc(t.name || '') + '</h3></div>' +
        '<div class="tpl-block">' + esc(t.structure || '') + '</div></div>';
    }).join('');
  }
  function renderConnectives() {
    var conns = WRITING.connectives || [];
    if (!conns.length) return '<div class="empty"><div class="big">🔗</div>暂无连接词</div>';
    return '<div class="essay-card"><h3>常用连接词与过渡表达</h3>' +
      '<table class="conn-table"><thead><tr><th>表达</th><th>含义</th><th>用法</th></tr></thead><tbody>' +
      conns.map(function (c) {
        return '<tr><td class="en">' + esc(c.en) + '</td><td>' + esc(c.zh) + '</td><td>' + esc(c.usage || '') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  function renderTopics() {
    var topics = WRITING.topics || [];
    if (!topics.length) return '<div class="empty"><div class="big">🏷️</div>暂无话题词汇</div>';
    return topics.map(function (t) {
      var chips = (t.phrases || []).map(function (p) {
        return '<span class="phrase"><b>' + esc(p.en) + '</b> <span>' + esc(p.zh) + '</span></span>';
      }).join('');
      return '<div class="topic-group"><h4>' + esc(t.topic) + '</h4><div class="phrase-chips">' + chips + '</div></div>';
    }).join('');
  }

  // ---------------- 翻译 ----------------
  function renderTranslationList() {
    var list = TRANSLATION.map(function (x) {
      var p = getProgress(x.id);
      var badge = (p && p.done) ? '<span class="done-badge">✓ 已练习</span>' : '';
      return '<div class="item" data-id="' + x.id + '">' +
        '<span class="tag">汉译英</span>' +
        '<div class="body"><div class="title">' + esc(x.title) + '</div>' +
        '<div class="meta">' + (x.chinese ? x.chinese.length : 0) + ' 字 · ' + esc(x.source || '') + '</div></div>' +
        badge + '<span class="arrow">›</span></div>';
    }).join('');
    app.innerHTML = '<div class="view">' +
      '<div class="section-head"><h2>翻译练习</h2><span style="color:var(--ink-faint);font-size:13px">汉译英 · 先自己译，再对照参考</span></div>' +
      (list ? '<div class="item-list">' + list + '</div>' : '<div class="empty"><div class="big">🈶</div>暂无内容</div>') +
      '</div>';
    document.querySelectorAll('.item').forEach(function (it) {
      it.addEventListener('click', function () { renderTranslationQuiz(it.getAttribute('data-id')); });
    });
  }

  function renderTranslationQuiz(id) {
    var item = TRANSLATION.find(function (x) { return x.id === id; });
    if (!item) { renderTranslationList(); return; }
    var saved = getProgress(item.id);
    var kw = (item.keyWords || []).map(function (k) {
      return '<div class="hl-item"><b>' + esc(k.cn) + '</b> → ' + esc(k.en) + (k.note ? ' <span style="color:var(--ink-faint)">（' + esc(k.note) + '）</span>' : '') + '</div>';
    }).join('');
    var sp = (item.sentencePatterns || []).map(function (s) {
      return '<div class="hl-item">✦ ' + esc(s) + '</div>';
    }).join('');

    app.innerHTML = '<div class="view">' +
      '<button class="back-btn" data-back>← 返回列表</button>' +
      '<div class="quiz-title">' + esc(item.title) + '</div>' +
      '<div class="quiz-meta"><span class="tag">汉译英</span><span>' + esc(item.source || '') + '</span></div>' +
      '<div class="passage"><h3>请把下面这段中文翻译成英文</h3>' +
      '<div class="text" style="font-family:var(--sans);font-size:18px;line-height:2">' + esc(item.chinese) + '</div></div>' +
      '<div class="passage"><h3>你的译文</h3>' +
      '<textarea data-input style="width:100%;min-height:160px;border:1px solid var(--line);border-radius:10px;padding:14px;font-family:var(--serif);font-size:16px;line-height:1.8;resize:vertical" placeholder="在这里输入你的英文翻译…"></textarea>' +
      '<div style="margin-top:12px;display:flex;gap:10px">' +
      '<button class="btn btn-primary" data-show>查看参考译文</button>' +
      '<button class="btn btn-ghost" data-clear>清空</button></div></div>' +
      '<div data-ref style="display:none">' +
      '<div class="passage" style="border-color:var(--green)"><h3>参考译文（点词可查）</h3>' +
      '<div class="text">' + wordify(item.reference || '') + '</div></div>' +
      '<div class="passage"><h3>重点词汇</h3><div class="hl-list">' + kw + '</div></div>' +
      '<div class="passage"><h3>重点句型</h3><div class="hl-list">' + sp + '</div></div>' +
      '<div class="passage"><h3>翻译技巧</h3><div class="text" style="font-family:var(--sans);font-size:15px;line-height:1.9">' + esc(item.tips || '') + '</div></div>' +
      '</div>' +
      '</div>';

    var inputEl = document.querySelector('[data-input]');
    var refEl = document.querySelector('[data-ref]');

    var saveTimer = null;
    function saveTranslation() {
      var p = loadProgress();
      var entry = p[item.id] || {};
      entry.translation = inputEl.value;
      p[item.id] = entry;
      saveProgress(p);
    }
    inputEl.addEventListener('input', function () {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveTranslation, 400);
    });

    if (saved && saved.translation) inputEl.value = saved.translation;
    if (saved && saved.done) refEl.style.display = 'block';

    document.querySelector('[data-back]').addEventListener('click', function () {
      saveTranslation();
      renderTranslationList();
    });
    document.querySelector('[data-show]').addEventListener('click', function () {
      refEl.style.display = 'block';
      saveTranslation();
      markDone(item.id, 0, 0);
      updateStatsMini();
      if (refEl.scrollIntoView) refEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    document.querySelector('[data-clear]').addEventListener('click', function () {
      inputEl.value = '';
      saveTranslation();
    });
    bindVocab(item.vocab);
  }

  // ---------------- 词汇（词义匹配 + 生词本） ----------------
  var vocabTab = 'match';
  var vocabCount = 10;
  var vocabState = null;

  function renderVocab() {
    var head = '<div class="section-head"><h2>词汇练习</h2>' +
      '<div class="filter-group">' +
      '<button class="chip ' + (vocabTab === 'match' ? 'active' : '') + '" data-f="match">词义匹配</button>' +
      '<button class="chip ' + (vocabTab === 'words' ? 'active' : '') + '" data-f="words">生词本</button>' +
      '</div></div>';
    app.innerHTML = '<div class="view">' + head + (vocabTab === 'match' ? renderVocabMatch() : renderWordBook()) + '</div>';
    document.querySelectorAll('.chip[data-f]').forEach(function (c) {
      c.addEventListener('click', function () {
        vocabTab = c.getAttribute('data-f');
        renderVocab();
      });
    });
    if (vocabTab === 'match') bindVocabMatch();
    else bindWordBook();
  }

  function renderVocabMatch() {
    var validKeys = Object.keys(BUILTIN_DICT).filter(function (k) {
      return parseDictEntry(BUILTIN_DICT[k]).meaning.length > 0;
    });
    var words = sampleArray(validKeys, vocabCount).map(function (k) {
      var e = parseDictEntry(BUILTIN_DICT[k]);
      return { word: k, phonetic: e.phonetic, meaning: e.meaning };
    });
    var perm = shuffleArray(words.map(function (_, i) { return i; }));
    vocabState = { words: words, perm: perm, pairs: {}, pairedMi: {}, current: null, finished: false };

    var leftHtml = words.map(function (w, i) {
      return '<div class="vm-word" data-wi="' + i + '">' +
        '<div class="vm-w">' + esc(w.word) + '</div>' +
        '<div class="vm-p">' + esc(w.phonetic) + '</div></div>';
    }).join('');
    var rightHtml = perm.map(function (origIdx, mi) {
      return '<div class="vm-meaning" data-mi="' + mi + '">' + esc(words[origIdx].meaning) + '</div>';
    }).join('');

    return '<p class="vm-hint">点击左侧单词，再点击右侧对应的中文释义完成配对；点已配对的单词可重新选。</p>' +
      '<div class="vm-tools">' +
      [10, 20, 30].map(function (n) {
        return '<button class="chip' + (vocabCount === n ? ' active' : '') + '" data-n="' + n + '">' + n + ' 词</button>';
      }).join('') +
      '</div>' +
      '<div class="vm-grid">' +
      '<div class="vm-col">' + leftHtml + '</div>' +
      '<div class="vm-col">' + rightHtml + '</div>' +
      '</div>' +
      '<div class="submit-bar"><button class="btn btn-primary" data-submit>交卷</button>' +
      '<button class="btn btn-ghost" data-new>换一批</button>' +
      '<div class="score" data-score></div></div>';
  }

  function bindVocabMatch() {
    var st = vocabState;

    function refresh() {
      document.querySelectorAll('.vm-word').forEach(function (el) {
        var wi = parseInt(el.getAttribute('data-wi'), 10);
        var mi = st.pairs[wi];
        el.classList.toggle('paired', mi != null);
        el.classList.toggle('sel', st.current === wi);
      });
      document.querySelectorAll('.vm-meaning').forEach(function (el) {
        var mi = parseInt(el.getAttribute('data-mi'), 10);
        el.classList.toggle('paired', st.pairedMi[mi] != null);
      });
    }

    document.querySelectorAll('.vm-word').forEach(function (el) {
      el.addEventListener('click', function () {
        if (st.finished) return;
        var wi = parseInt(el.getAttribute('data-wi'), 10);
        var oldMi = st.pairs[wi];
        if (oldMi != null) { delete st.pairs[wi]; delete st.pairedMi[oldMi]; }
        st.current = wi;
        refresh();
      });
    });
    document.querySelectorAll('.vm-meaning').forEach(function (el) {
      el.addEventListener('click', function () {
        if (st.finished) return;
        var mi = parseInt(el.getAttribute('data-mi'), 10);
        if (st.current == null) { toast('请先点击左侧单词'); return; }
        if (st.pairedMi[mi] != null) return;
        st.pairs[st.current] = mi;
        st.pairedMi[mi] = st.current;
        st.current = null;
        refresh();
        if (Object.keys(st.pairs).length === st.words.length) toast('全部配对完成，可以交卷啦');
      });
    });

    document.querySelector('[data-submit]').addEventListener('click', function () {
      if (st.finished) return;
      st.finished = true;
      var score = 0, total = st.words.length;
      var wrongWords = [];
      st.words.forEach(function (w, wi) {
        var mi = st.pairs[wi];
        var ok = (mi != null && st.perm[mi] === wi);
        if (ok) score++;
        else wrongWords.push(w.word);
        var wordEl = document.querySelector('.vm-word[data-wi="' + wi + '"]');
        if (wordEl) wordEl.classList.add(ok ? 'correct' : 'wrong');
        if (mi != null) {
          var meaningEl = document.querySelector('.vm-meaning[data-mi="' + mi + '"]');
          if (meaningEl) meaningEl.classList.add(ok ? 'correct' : 'wrong');
        }
      });
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      document.querySelector('[data-submit]').textContent = '已完成';
      document.querySelector('[data-submit]').disabled = true;
      wrongWords.forEach(function (w) {
        var info = lookupLocal(w);
        addWord(w, info ? info.phonetic : '', info ? info.meaning : '');
      });
      var ansHtml = '<div class="passage" style="margin-top:20px"><h3>答案对照</h3>' +
        st.words.map(function (w, wi) {
          return '<div style="margin-bottom:6px;font-size:14.5px"><b>' + esc(w.word) + '</b> <span style="color:var(--ink-soft)">' + esc(w.phonetic) + '</span> → ' + esc(w.meaning) + '</div>';
        }).join('') +
        '</div>';
      document.querySelector('.submit-bar').insertAdjacentHTML('afterend', ansHtml);
      toast('得分 ' + score + ' / ' + total);
    });

    document.querySelector('[data-new]').addEventListener('click', function () { renderVocab(); });
    document.querySelectorAll('.vm-tools [data-n]').forEach(function (b) {
      b.addEventListener('click', function () {
        vocabCount = parseInt(b.getAttribute('data-n'), 10);
        renderVocab();
      });
    });

    refresh();
  }

  function renderWordBook() {
    var wb = loadWordBook();
    var keys = Object.keys(wb);
    if (!keys.length) {
      return '<div class="empty"><div class="big">🌱</div>还没有生词<br><span style="font-size:13px">做错题、或点词查义时点「加入生词本」，都会收集到这里</span></div>';
    }
    keys.sort(function (a, b) { return (wb[b].time || 0) - (wb[a].time || 0); });
    var list = keys.map(function (k) {
      var w = wb[k];
      return '<div class="word-item" data-word="' + esc(w.word) + '">' +
        '<div class="wi-main">' +
        '<div class="wi-word">' + esc(w.word) + '</div>' +
        '<div class="wi-phon">' + esc(w.phonetic) + '</div>' +
        '<div class="wi-meaning">' + esc(w.meaning) + '</div>' +
        '</div>' +
        '<button class="wi-del" data-del="' + esc(w.word) + '" title="删除">✕</button>' +
        '</div>';
    }).join('');
    return '<div class="wordbook-tip">' + keys.length + ' 个生词 · 点击单词可查词典</div><div class="word-list">' + list + '</div>';
  }

  function bindWordBook() {
    document.querySelectorAll('.word-item').forEach(function (el) {
      el.addEventListener('click', function () {
        showDict(el.getAttribute('data-word'));
      });
    });
    document.querySelectorAll('.wi-del').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        removeWord(b.getAttribute('data-del'));
        toast('已删除');
        renderVocab();
      });
    });
  }

  // ---------------- 错题本 ----------------
  function renderReview() {
    var wb = loadWrongBook();
    var keys = Object.keys(wb);
    keys.sort(function (a, b) { return (wb[b].time || 0) - (wb[a].time || 0); });
    var head = '<div class="section-head"><h2>错题本</h2>' +
      (keys.length ? '<button class="chip" data-clear-all>清空全部</button>' : '') +
      '</div>';
    if (!keys.length) {
      app.innerHTML = '<div class="view">' + head + '<div class="empty"><div class="big">🎯</div>还没有错题<br><span style="font-size:13px">做练习交卷后，答错的题会自动收集到这里</span></div></div>';
      return;
    }
    var list = keys.map(function (k) { return renderWrongItem(wb[k]); }).join('');
    app.innerHTML = '<div class="view">' + head + '<div class="wb-list">' + list + '</div></div>';
    var cb = document.querySelector('[data-clear-all]');
    if (cb) cb.addEventListener('click', function () {
      if (!confirm('确定清空全部错题吗？')) return;
      localStorage.removeItem(LS_WRONG);
      toast('已清空错题本');
      renderReview();
    });
    document.querySelectorAll('.wb-item').forEach(function (el) {
      var del = el.querySelector('[data-del]');
      if (del) del.addEventListener('click', function () {
        removeWrong(el.getAttribute('data-key'));
        toast('已移除');
        renderReview();
      });
      var wl = el.querySelector('[data-lookup]');
      if (wl) wl.addEventListener('click', function () {
        showDict(wl.getAttribute('data-lookup'));
      });
    });
  }

  function renderWrongItem(w) {
    var tag = { choice: '选择', cloze: '选词', match: '匹配' }[w.kind] || w.kind;
    var optsHtml = '';
    if (w.kind === 'choice') {
      optsHtml = '<div class="wb-opts">' + (w.options || []).map(function (o, oi) {
        var cls = '';
        if (oi === w.correctAnswerRaw) cls = ' correct';
        else if (oi === w.userAnswerRaw) cls = ' wrong';
        return '<div class="wb-opt' + cls + '"><span class="oletter">' + String.fromCharCode(65 + oi) + '.</span><span>' + esc(o) + '</span></div>';
      }).join('') + '</div>';
    } else {
      optsHtml = '<div class="wb-opts"><span class="wb-ans">你的答案：<b>' + esc(w.userAnswerRaw == null ? '未答' : w.userAnswerRaw) + '</b> · 正确答案：<b>' + esc(w.correctAnswerRaw) + '</b></span></div>';
    }
    var wordHtml = w.word
      ? '<button class="wb-word-link" data-lookup="' + esc(w.word) + '">📖 生词：' + esc(w.word) + '</button>'
      : '';
    return '<div class="wb-item" data-key="' + esc(w.key) + '">' +
      '<div class="wb-head"><span class="wb-tag">' + tag + '</span>' +
      '<span class="wb-title">' + esc(w.sourceTitle) + '</span>' +
      '<button class="wi-del" data-del title="移除">✕</button></div>' +
      '<div class="wb-q">' + esc(w.q) + '</div>' +
      optsHtml +
      '<div class="wb-expl">' + esc(w.explanation || '') + '</div>' +
      wordHtml +
      '</div>';
  }

  // ---------------- 词典 ----------------
  function bindVocab(vocabList) {
    CONTEXT_VOCAB = {};
    (vocabList || []).forEach(function (v) {
      if (v && v.word) CONTEXT_VOCAB[normalizeWord(v.word)] = { phonetic: v.phonetic || '', meaning: v.meaning || '' };
    });
    document.querySelectorAll('.w').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        showDict(el.getAttribute('data-word'));
      });
    });
  }

  function showDict(word) {
    var local = lookupLocal(word);
    if (local) {
      renderDictCard(local, false);
    } else {
      renderDictCard({ word: word, phonetic: '', meaning: '本地词库暂未收录此词', source: '' }, true);
    }
  }
  function renderDictCard(d, pending) {
    $('#dictWord').textContent = d.word;
    $('#dictPhon').textContent = d.phonetic || '';
    $('#dictMeaning').innerHTML = d.meaning || '';
    var bookBtn = '';
    if (!pending) {
      var inBook = !!loadWordBook()[normalizeWord(d.word)];
      bookBtn = inBook
        ? '<button class="btn btn-ghost" style="padding:4px 10px;font-size:12px;margin-left:8px" disabled>已在生词本</button>'
        : '<button class="btn btn-ghost" style="padding:4px 10px;font-size:12px;margin-left:8px" id="dictBook">＋ 加入生词本</button>';
    }
    $('#dictSrc').innerHTML = (d.source ? '来源：' + esc(d.source) : '') + bookBtn +
      (pending ? ' <button class="btn btn-ghost" style="padding:4px 10px;font-size:12px;margin-left:8px" id="dictOnline">联网查询</button>' : '');
    $('#dictPop').classList.remove('hidden');
    var btn = $('#dictOnline');
    if (btn) {
      btn.addEventListener('click', function () {
        btn.textContent = '查询中…';
        lookupOnline(d.word).then(function (r) {
          if (r) { renderDictCard(r, false); }
          else { btn.textContent = '联网查询'; $('#dictMeaning').innerHTML = '联网查询失败（可能网络不通），请稍后再试'; $('#dictSrc').textContent = ''; }
        });
      });
    }
    var bbtn = $('#dictBook');
    if (bbtn) {
      bbtn.addEventListener('click', function () {
        if (addWord(d.word, d.phonetic, d.meaning)) {
          toast('已加入生词本');
          renderDictCard(d, false);
        }
      });
    }
  }
  $('#dictClose').addEventListener('click', function () { $('#dictPop').classList.add('hidden'); });
  $('#dictPop').addEventListener('click', function (e) { if (e.target === $('#dictPop')) $('#dictPop').classList.add('hidden'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') $('#dictPop').classList.add('hidden'); });

  // ---------------- 登录 / 云同步 ----------------
  var authMode = 'login';

  function renderAuthArea() {
    var area = $('#authArea');
    if (!area) return;
    if (!sb) { area.innerHTML = ''; return; }
    if (currentUserId) {
      area.innerHTML = '<span class="auth-user" title="' + esc(currentUserEmail) + '">' + esc(currentUserEmail) + '</span>' +
        '<button class="auth-btn" id="logoutBtn">登出</button>';
      var lo = document.querySelector('#logoutBtn');
      if (lo) lo.addEventListener('click', doLogout);
    } else {
      area.innerHTML = '<button class="auth-btn" id="authBtn">登录 / 注册</button>';
      var lb = document.querySelector('#authBtn');
      if (lb) lb.addEventListener('click', openAuthModal);
    }
  }

  function openAuthModal() {
    if (!sb) { toast('云端服务未加载'); return; }
    authMode = 'login';
    $('#authTitle').textContent = '登录';
    $('#authSubmit').textContent = '登录';
    $('#authToggle').textContent = '没有账号？去注册';
    $('#authEmail').value = '';
    $('#authPassword').value = '';
    var msg = $('#authMsg'); msg.textContent = ''; msg.className = 'auth-msg';
    $('#authSubmit').disabled = false;
    $('#authModal').classList.remove('hidden');
    $('#authEmail').focus();
  }

  function doAuth() {
    if (!sb) return;
    var email = $('#authEmail').value.trim();
    var password = $('#authPassword').value;
    var msg = $('#authMsg');
    msg.className = 'auth-msg';
    if (!email || !password) { msg.textContent = '请填写邮箱和密码'; return; }
    if (password.length < 6) { msg.textContent = '密码至少 6 位'; return; }
    var btn = $('#authSubmit'); btn.disabled = true;
    msg.textContent = authMode === 'login' ? '登录中…' : '注册中…';
    var p = authMode === 'login'
      ? sb.auth.signInWithPassword({ email: email, password: password })
      : sb.auth.signUp({ email: email, password: password });
    p.then(function (res) {
      if (res.error) { msg.textContent = res.error.message || '操作失败'; btn.disabled = false; return; }
      if (authMode === 'signup' && !res.data.session) {
        msg.className = 'auth-msg ok';
        msg.textContent = '注册成功！请去邮箱查收确认邮件，点链接后回来登录。';
        btn.disabled = false;
        return;
      }
      afterAuthSuccess(res.data.session);
    }).catch(function () { msg.textContent = '网络错误，请重试'; btn.disabled = false; });
  }

  function afterAuthSuccess(session) {
    currentUserId = session.user.id;
    currentUserEmail = session.user.email || '';
    $('#authModal').classList.add('hidden');
    renderAuthArea();
    toast('登录成功');
    pullFromCloud();
  }

  function doLogout() {
    if (!sb) return;
    sb.auth.signOut().then(function () {
      currentUserId = null;
      currentUserEmail = '';
      renderAuthArea();
      toast('已退出登录（本机记录仍保留）');
    }).catch(function () {});
  }

  function mergeProgress(local, cloud) {
    var merged = {};
    Object.keys(cloud || {}).forEach(function (k) { merged[k] = cloud[k]; });
    Object.keys(local || {}).forEach(function (k) { merged[k] = local[k]; });
    return merged;
  }

  function syncToCloud(progress) {
    if (!sb || !currentUserId) return;
    sb.from('user_progress').upsert({
      user_id: currentUserId,
      progress: progress,
      updated_at: new Date().toISOString()
    }).then(function () {}).catch(function () {});
  }

  function pullFromCloud() {
    if (!sb || !currentUserId) return;
    sb.from('user_progress').select('progress').eq('user_id', currentUserId).maybeSingle().then(function (res) {
      if (res.error) return;
      var merged;
      if (!res.data) {
        merged = loadProgress();
      } else {
        merged = mergeProgress(loadProgress(), res.data.progress);
      }
      saveProgress(merged);
      syncToCloud(merged);
      updateStatsMini();
      if (currentView) route(currentView);
    }).catch(function () {});
  }

  function initAuth() {
    renderAuthArea();
    $('#authClose').addEventListener('click', function () { $('#authModal').classList.add('hidden'); });
    $('#authSubmit').addEventListener('click', doAuth);
    $('#authToggle').addEventListener('click', function () {
      authMode = authMode === 'login' ? 'signup' : 'login';
      $('#authTitle').textContent = authMode === 'login' ? '登录' : '注册';
      $('#authSubmit').textContent = authMode === 'login' ? '登录' : '注册';
      $('#authToggle').textContent = authMode === 'login' ? '没有账号？去注册' : '已有账号？去登录';
    });
    $('#authPassword').addEventListener('keydown', function (e) { if (e.key === 'Enter') doAuth(); });
    if (sb) {
      sb.auth.getSession().then(function (res) {
        var session = res.data && res.data.session;
        if (session) {
          currentUserId = session.user.id;
          currentUserEmail = session.user.email || '';
          renderAuthArea();
          pullFromCloud();
        }
      }).catch(function () {});
    }
  }

  // ---------------- 启动 ----------------
  initAuth();
  updateStatsMini();
  renderHome();
})();
