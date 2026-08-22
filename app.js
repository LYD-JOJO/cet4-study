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
  function markDone(id, score, total) {
    var p = loadProgress();
    p[id] = { done: true, score: score, total: total };
    saveProgress(p);
    syncToCloud(p);
  }
  function getProgress(id) { return loadProgress()[id]; }

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
    function card(icon, title, desc, done, total, view, noProgress) {
      var pct = total ? Math.round(done / total * 100) : 0;
      var bar = noProgress ? '' : '<div class="bar"><i style="width:' + pct + '%"></i></div>';
      var stat = noProgress ? '<div class="d">📚 资料板块 · 不占练习统计</div>' : '<div class="d">' + done + ' / ' + total + ' 已完成</div>';
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
          card('🈶', '翻译', '汉译英练习，输入译文对照参考 + 重点词汇句型', TRANSLATION.filter(function (x) { return getProgress(x.id); }).length, TRANSLATION.length, 'translation') +
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
    document.querySelector('[data-reset]').addEventListener('click', function () { renderReadingQuiz(item.id); });
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

    var selected = {};
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

    document.querySelector('[data-submit]').addEventListener('click', function () {
      var score = 0;
      item.questions.forEach(function (q, qi) {
        var qb = document.querySelector('.q-block[data-q="' + qi + '"]');
        var expl = qb.querySelector('[data-expl]');
        var user = selected[qi];
        var correct = q.answer;
        qb.querySelectorAll('.opt').forEach(function (o) {
          var oi = parseInt(o.getAttribute('data-oi'), 10);
          o.classList.add('disabled');
          if (oi === correct) o.classList.add('correct');
          else if (oi === user) o.classList.add('wrong');
        });
        var ok = (user === correct);
        if (ok) score++;
        expl.innerHTML = (ok
          ? '<span class="correct-ans">✓ 回答正确</span>'
          : '<span class="wrong-ans">✗ 回答错误</span>，正确答案：<b>' + String.fromCharCode(65 + correct) + '</b>') +
          '<br>' + esc(q.explanation || '');
        expl.classList.add('show');
        qb.classList.add('answered');
      });
      var total = item.questions.length;
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      markDone(item.id, score, total);
      updateStatsMini();
      toast('得分 ' + score + ' / ' + total);
      bindVocab(item.vocab);
    });
    bindVocab(item.vocab);
  }

  // 选词填空
  function renderCloze(item) {
    var cloze = { current: null, answers: {}, used: {} };
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

    document.querySelector('[data-submit]').addEventListener('click', function () {
      var score = 0;
      item.answers.forEach(function (ans, i) {
        var n = String(i + 1);
        var user = cloze.answers[n];
        var b = document.querySelector('.cloze-blank[data-blank="' + n + '"]');
        var ok = (user === ans);
        if (b) {
          if (ok) { score++; b.classList.add('correct'); }
          else b.classList.add('wrong');
        }
      });
      var total = item.answers.length;
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      markDone(item.id, score, total);
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
      toast('得分 ' + score + ' / ' + total);
      bindVocab(item.vocab);
    });
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

    var selected = {};
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
    document.querySelector('[data-submit]').addEventListener('click', function () {
      var score = 0;
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
        var expl = qb.querySelector('[data-expl]');
        expl.innerHTML = (ok ? '<span class="correct-ans">✓ 正确</span>' : '<span class="wrong-ans">✗ 错误</span>，答案：<b>' + q.answer + ' 段</b>') + '<br>' + esc(q.explanation || '');
        expl.classList.add('show');
        qb.classList.add('answered');
      });
      var total = item.questions.length;
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      markDone(item.id, score, total);
      updateStatsMini();
      toast('得分 ' + score + ' / ' + total);
      bindVocab(item.vocab);
    });
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
        '<div class="q-stem"><span class="qnum">' + (qi + 1) + '.</span>' + wordify(q.q) + '</div>' +
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
      '<div class="questions">' + qhtml + '</div>' +
      transcriptHtml +
      '<div class="submit-bar"><button class="btn btn-primary" data-submit>交卷</button>' +
      '<button class="btn btn-ghost" data-reset>重做</button>' +
      '<div class="score" data-score></div></div>' +
      '</div>';

    document.querySelector('[data-back]').addEventListener('click', function () { if (audio) audio.pause(); renderListeningList(); });
    document.querySelector('[data-reset]').addEventListener('click', function () { renderListeningQuiz(item.id); });

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
    var selected = {};
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
    document.querySelector('[data-submit]').addEventListener('click', function () {
      var score = 0;
      item.questions.forEach(function (q, qi) {
        var qb = document.querySelector('.q-block[data-q="' + qi + '"]');
        var user = selected[qi];
        qb.querySelectorAll('.opt').forEach(function (o) {
          var oi = parseInt(o.getAttribute('data-oi'), 10);
          o.classList.add('disabled');
          if (oi === q.answer) o.classList.add('correct');
          else if (oi === user) o.classList.add('wrong');
        });
        var ok = (user === q.answer);
        if (ok) score++;
        var expl = qb.querySelector('[data-expl]');
        expl.innerHTML = (ok ? '<span class="correct-ans">✓ 回答正确</span>' : '<span class="wrong-ans">✗ 回答错误</span>，正确答案：<b>' + String.fromCharCode(65 + q.answer) + '</b>') + '<br>' + esc(q.explanation || '');
        expl.classList.add('show');
        qb.classList.add('answered');
      });
      var total = item.questions.length;
      document.querySelector('[data-score]').innerHTML = score + ' <small>/ ' + total + '</small>';
      var tr = document.querySelector('[data-transcript]');
      if (tr) tr.classList.add('show');
      markDone(item.id, score, total);
      updateStatsMini();
      toast('得分 ' + score + ' / ' + total);
      bindVocab(item.vocab);
    });
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
      var badge = p ? '<span class="done-badge">✓ 已练习</span>' : '';
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

    document.querySelector('[data-back]').addEventListener('click', function () { renderTranslationList(); });
    document.querySelector('[data-show]').addEventListener('click', function () {
      var ref = document.querySelector('[data-ref]');
      ref.style.display = 'block';
      markDone(item.id, 0, 0);
      updateStatsMini();
      if (ref.scrollIntoView) ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    document.querySelector('[data-clear]').addEventListener('click', function () {
      document.querySelector('[data-input]').value = '';
    });
    bindVocab(item.vocab);
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
    $('#dictSrc').innerHTML = (d.source ? '来源：' + esc(d.source) : '') +
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
