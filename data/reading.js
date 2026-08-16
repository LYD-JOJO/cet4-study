const READING_DATA = [
  {
    id: 'read-careful-1',
    type: 'careful',
    title: 'The Hidden Costs of Being Always Online',
    source: '真题改编',
    passage: 'We live in an age of constant connection. Smartphones, once a luxury, have become an extension of the human hand. A recent survey of university students found that the average young adult checks a phone more than 80 times a day and spends nearly five hours staring at its screen. While few of us would willingly give up these devices, researchers are increasingly asking a simple but uncomfortable question: what are we giving up in return? The most obvious cost is attention. Psychologists describe a phenomenon known as continuous partial attention, in which the brain is never fully focused on any single task. Every buzz, beep, or notification pulls our minds away, and studies show that it can take up to 23 minutes to fully recover concentration after an interruption. Over the course of a day, these small breaks add up to hours of lost productivity. Sleep is another casualty. The blue light emitted by screens suppresses the production of melatonin, the hormone that tells the body when to sleep. Many young people report checking their phones in bed, a habit linked to difficulty falling asleep and poorer sleep quality. Even the presence of a phone on the bedside table, turned off, has been shown to reduce the restorative value of rest. Perhaps most worrying, however, is the effect on relationships. Researchers who observe families in restaurants have coined the term phubbing, meaning snubbing someone in favor of your phone. In experiments, the mere sight of a phone placed on a table between two strangers reduced the depth and trust of their conversation. None of this means we should abandon technology. But experts argue that we should use it deliberately rather than by default. Simple steps, such as turning off non-essential notifications, keeping phones out of the bedroom, and setting aside phone-free hours, can restore a sense of control. The goal is not to reject the digital world but to decide, consciously, when to enter it.',
    questions: [
      {
        q: 'What does the passage mainly discuss?',
        options: [
          'A. The advantages of smartphones in daily life.',
          'B. The negative effects of constant phone use.',
          'C. The history of mobile phone development.',
          'D. The best apps for improving productivity.'
        ],
        answer: 1,
        explanation: '主旨题。全文围绕“总是在线”带来的三大代价展开——注意力分散（第二段）、睡眠受损（第三段）、人际关系受影响（第四段），最后给出“有意识地使用”的建议，核心是过度使用手机的负面影响，故选 B。A 项只讲好处，与文章主旨相反；C 项讲手机发展历史，文中未涉及；D 项讲最佳应用推荐，文中没有相关内容。'
      },
      {
        q: 'According to the passage, how long can it take to fully recover concentration after an interruption?',
        options: [
          'A. About five minutes.',
          'B. About fifteen minutes.',
          'C. Up to 23 minutes.',
          'D. More than an hour.'
        ],
        answer: 2,
        explanation: '细节题。定位第二段“it can take up to 23 minutes to fully recover concentration after an interruption”，即被打断后最多需要 23 分钟才能完全恢复专注，故选 C。A、B 的数字文中未出现；D 项“超过一小时”与原文不符。'
      },
      {
        q: 'What does the word “phubbing” refer to?',
        targetWord: 'phubbing',
        options: [
          'A. Ignoring the person you are with to look at your phone.',
          'B. Taking photos of food before eating.',
          'C. Playing games together on separate phones.',
          'D. Sending messages during a meal.'
        ],
        answer: 0,
        explanation: '词义题。定位第四段“have coined the term phubbing, meaning snubbing someone in favor of your phone”，phubbing 的意思是“为了看手机而冷落身边的人”，故选 A。B、C、D 均与原文对 phubbing 的解释无关。'
      },
      {
        q: 'Why is the blue light from screens harmful to sleep?',
        options: [
          'A. It makes the eyes tired and painful.',
          'B. It suppresses the production of melatonin.',
          'C. It raises body temperature at night.',
          'D. It increases the frequency of dreams.'
        ],
        answer: 1,
        explanation: '细节题。定位第三段“The blue light emitted by screens suppresses the production of melatonin, the hormone that tells the body when to sleep”，蓝光会抑制褪黑激素的分泌，从而影响睡眠，故选 B。A 讲眼睛疲劳、C 讲体温升高、D 讲做梦频繁，文中均未提及。'
      },
      {
        q: 'What is the author’s suggested attitude toward technology?',
        options: [
          'A. We should stop using smartphones altogether.',
          'B. We should use technology deliberately and with control.',
          'C. Technology is harmful and should be regulated by law.',
          'D. Only young people need to change their habits.'
        ],
        answer: 1,
        explanation: '态度题。定位末段“use it deliberately rather than by default”和“The goal is not to reject the digital world but to decide, consciously, when to enter it”，作者主张有意识地、有控制地使用技术，而非彻底抛弃，故选 B。A 项“完全停止使用”与原文相反；C 项“立法管制”属于过度引申；D 项“只有年轻人需要改变”以偏概全。'
      }
    ],
    vocab: [
      { word: 'extension', phonetic: '/ɪkˈstenʃn/', meaning: '延伸；扩展；延长；分机' },
      { word: 'phenomenon', phonetic: '/fəˈnɒmɪnən/', meaning: '现象；非凡的人或事物' },
      { word: 'notification', phonetic: '/ˌnəʊtɪfɪˈkeɪʃn/', meaning: '通知；告知' },
      { word: 'interruption', phonetic: '/ˌɪntəˈrʌpʃn/', meaning: '中断；打断' },
      { word: 'suppress', phonetic: '/səˈpres/', meaning: '抑制；压制；镇压' },
      { word: 'melatonin', phonetic: '/ˌmeləˈtəʊnɪn/', meaning: '褪黑激素' },
      { word: 'hormone', phonetic: '/ˈhɔːməʊn/', meaning: '激素；荷尔蒙' },
      { word: 'restorative', phonetic: '/rɪˈstɒrətɪv/', meaning: '恢复精力的；滋补的' },
      { word: 'snub', phonetic: '/snʌb/', meaning: '冷落；怠慢' },
      { word: 'deliberately', phonetic: '/dɪˈlɪbərətli/', meaning: '故意地；审慎地' },
      { word: 'essential', phonetic: '/ɪˈsenʃl/', meaning: '必不可少的；本质的' },
      { word: 'conscious', phonetic: '/ˈkɒnʃəs/', meaning: '意识到的；有意识的；神志清醒的' }
    ]
  },
  {
    id: 'read-careful-2',
    type: 'careful',
    title: 'The Growing Appeal of a Gap Year',
    source: '真题改编',
    passage: 'For generations, the path from high school to university was straightforward: finish exams, apply, and start college the following autumn. Today, however, a growing number of students are choosing a different route. Instead of rushing straight into lectures and textbooks, they are taking a gap year, a structured period usually between school and higher education spent traveling, working, or volunteering. The reasons for this trend are easy to understand. Many students leave school exhausted after years of intense exam preparation. A year away offers a chance to recover, to earn some money, and to think carefully about what they actually want to study. College is expensive, and beginning it without a clear sense of purpose can be costly in more than financial terms. Employers and universities have noticed the benefits. Admissions officers often report that gap-year students arrive with greater maturity, clearer goals, and stronger time-management skills. A student who has spent months working in a hospital or teaching English overseas is likely to participate more actively in seminars than one who has never left home. For employers, a well-planned gap year can demonstrate independence and initiative, qualities that grades alone cannot reveal. The year is not without risks, of course. Critics point out that a gap year requires money, which not every family can afford, and that some students find it hard to return to the discipline of study. There is also the danger that an unstructured year drifts into a wasted one. The key, experts agree, is planning: the most valuable gap years are those with clear goals, a budget, and some form of work or learning at their center. For students who can manage it, a gap year is increasingly seen not as an escape from education but as a preparation for it. It offers what a classroom cannot: time, perspective, and a first taste of adult responsibility.',
    questions: [
      {
        q: 'What is a “gap year” according to the passage?',
        targetWord: 'gap year',
        options: [
          'A. A year of rest after graduating from college.',
          'B. A structured period between school and university.',
          'C. A year spent working full-time in a company.',
          'D. A break taken in the middle of university.'
        ],
        answer: 1,
        explanation: '细节题。定位第一段“a gap year, a structured period usually between school and higher education spent traveling, working, or volunteering”，gap year 指中学与大学之间的、用于旅行、工作或志愿服务的结构化阶段，故选 B。A 错在“大学毕业之后”；C 只提到全职工作，不够全面；D 错在“大学中途”。'
      },
      {
        q: 'Why do many students choose to take a gap year?',
        options: [
          'A. Because college entrance is becoming more difficult.',
          'B. Because they are exhausted and unsure what to study.',
          'C. Because their parents force them to work first.',
          'D. Because universities require work experience.'
        ],
        answer: 1,
        explanation: '细节题。定位第二段“Many students leave school exhausted after years of intense exam preparation... to think carefully about what they actually want to study”，学生选择 gap year 是因为长期备考后身心俱疲，且想弄清楚自己真正想学什么，故选 B。A、C、D 文中均未提及。'
      },
      {
        q: 'According to admissions officers, gap-year students tend to be ______.',
        options: [
          'A. richer and better dressed',
          'B. more mature and better organized',
          'C. less willing to participate in class',
          'D. more likely to change their major'
        ],
        answer: 1,
        explanation: '细节题。定位第三段“Admissions officers often report that gap-year students arrive with greater maturity, clearer goals, and stronger time-management skills”，即更成熟、目标更清晰、时间管理更强，故选 B（more mature and better organized）。A、C、D 均与原文相反或无中生有。'
      },
      {
        q: 'What do critics say about the gap year?',
        options: [
          'A. It is too short to be useful.',
          'B. It can be costly and hard to recover from.',
          'C. It makes students forget their studies forever.',
          'D. It is only suitable for students in cities.'
        ],
        answer: 1,
        explanation: '细节题。定位第四段“a gap year requires money, which not every family can afford, and that some students find it hard to return to the discipline of study”，批评者认为 gap year 需要花钱（并非家家负担得起），且部分学生难以重拾学习纪律，故选 B。A、C、D 说法过于绝对或文中未提。'
      },
      {
        q: 'What is the author’s overall view of the gap year?',
        options: [
          'A. It is a waste of time for most students.',
          'B. It is only useful for wealthy families.',
          'C. It is a form of preparation rather than escape.',
          'D. It should be made compulsory by universities.'
        ],
        answer: 2,
        explanation: '态度题。定位末段“a gap year is increasingly seen not as an escape from education but as a preparation for it”，作者认为 gap year 是对教育的准备而非逃避，故选 C。A、B 与作者观点相反；D 项“强制推行”文中未提。'
      }
    ],
    vocab: [
      { word: 'straightforward', phonetic: '/ˌstreɪtˈfɔːwəd/', meaning: '简单的；直接的；坦率的' },
      { word: 'route', phonetic: '/ruːt/', meaning: '路线；途径；方法' },
      { word: 'structured', phonetic: '/ˈstrʌktʃəd/', meaning: '有组织的；结构化的' },
      { word: 'exhausted', phonetic: '/ɪɡˈzɔːstɪd/', meaning: '疲惫不堪的；耗尽的' },
      { word: 'intense', phonetic: '/ɪnˈtens/', meaning: '强烈的；紧张的；剧烈的' },
      { word: 'maturity', phonetic: '/məˈtʃʊərəti/', meaning: '成熟；到期' },
      { word: 'seminar', phonetic: '/ˈsemɪnɑː(r)/', meaning: '研讨会；研讨班' },
      { word: 'initiative', phonetic: '/ɪˈnɪʃətɪv/', meaning: '主动性；倡议；主动权' },
      { word: 'afford', phonetic: '/əˈfɔːd/', meaning: '负担得起；提供' },
      { word: 'discipline', phonetic: '/ˈdɪsəplɪn/', meaning: '纪律；训练；学科' },
      { word: 'drift', phonetic: '/drɪft/', meaning: '漂流；逐渐偏离' },
      { word: 'perspective', phonetic: '/pəˈspektɪv/', meaning: '视角；观点；透视法' }
    ]
  },
  {
    id: 'read-careful-3',
    type: 'careful',
    title: 'The Forgotten Cost of Food Waste',
    source: '真题改编',
    passage: 'Every year, roughly one-third of all food produced for human consumption is thrown away, about 1.3 billion tons worldwide. In wealthy countries, most of this waste happens at the end of the chain, in shops and in our kitchens, while in poorer regions food is lost earlier, in fields and during transport. Whatever the stage, the result is the same: valuable resources are spent on food that no one ever eats. The environmental price is enormous. Producing food requires land, water, energy, and fertilizer. When food is wasted, all of these inputs are wasted too. Researchers estimate that if food waste were a country, it would be the third-largest emitter of greenhouse gases in the world, behind only China and the United States. Rotting food in landfills also releases methane, a gas far more powerful than carbon dioxide in trapping heat. The economic cost is just as striking. The average household in a developed nation throws away food worth several hundred dollars a year. For supermarkets, the pressure to keep shelves perfectly full leads to mountains of unsold bread and vegetables, much of which is still safe to eat. Some governments have responded with laws that require shops to donate surplus food to charities rather than destroy it. Yet experts argue that the biggest changes must happen at home. Many of us buy more than we need, misread best before dates, and confuse them with use by dates, which actually signal safety. Simple habits, such as planning meals, writing shopping lists, storing food properly, and learning to cook with leftovers, can cut household waste dramatically. Food waste is unusual among environmental problems because ordinary people can do something about it every single day. Unlike building a wind farm or redesigning a city, reducing what we throw away requires no new technology, only a change in habit.',
    questions: [
      {
        q: 'What is the main idea of the passage?',
        options: [
          'A. How to produce food more efficiently on farms.',
          'B. The causes and costs of food waste and how to reduce it.',
          'C. The history of farming in wealthy countries.',
          'D. Why supermarkets always keep their shelves full.'
        ],
        answer: 1,
        explanation: '主旨题。全文先讲食物浪费的规模（第一段），再讲环境代价（第二段）与经济代价（第三段），最后落到个人如何减少浪费（第四、五段），故选 B。A 讲农场如何高效生产、C 讲农业历史、D 只讲超市，均以偏概全。'
      },
      {
        q: 'According to the passage, most food waste in rich countries happens ______.',
        options: [
          'A. in the fields during harvest',
          'B. during transport and storage',
          'C. in shops and at home',
          'D. in restaurants only'
        ],
        answer: 2,
        explanation: '细节题。定位第一段“In wealthy countries, most of this waste happens at the end of the chain, in shops and in our kitchens”，富裕国家的浪费主要发生在商店和家庭厨房，故选 C。A、B 是贫困地区食物损失的主要环节；D 项“只在餐馆”过于绝对。'
      },
      {
        q: 'Why does the author compare food waste to a country?',
        options: [
          'A. Because it could feed an entire nation.',
          'B. Because its greenhouse-gas emissions would rank third worldwide.',
          'C. Because every country produces the same amount of waste.',
          'D. Because only rich countries waste food.'
        ],
        answer: 1,
        explanation: '细节题。定位第二段“if food waste were a country, it would be the third-largest emitter of greenhouse gases in the world”，作者把食物浪费比作国家，是因为其温室气体排放量将居世界第三，故选 B。A、C、D 均与原文不符。'
      },
      {
        q: 'What is the difference between “best before” and “use by” dates?',
        targetWord: 'best before use by',
        options: [
          'A. “Best before” means the food is unsafe after that date.',
          'B. “Use by” dates indicate safety, not just quality.',
          'C. They mean exactly the same thing.',
          'D. “Use by” dates are always wrong.'
        ],
        answer: 1,
        explanation: '细节题。定位第四段“misread best before dates, and confuse them with use by dates, which actually signal safety”，best before 表示最佳食用（关乎质量），而 use by 才是安全的标志，人们常把两者混淆，故选 B。A 与原文相反；C 说两者相同，错误；D 说 use by 总是错的，无依据。'
      },
      {
        q: 'Why does the author think food waste is unusual among environmental problems?',
        options: [
          'A. It is the easiest problem to measure.',
          'B. Ordinary people can reduce it daily with simple habits.',
          'C. It only affects developed countries.',
          'D. It requires expensive new technology to solve.'
        ],
        answer: 1,
        explanation: '细节题。定位末段“ordinary people can do something about it every single day... requires no new technology, only a change in habit”，作者认为食物浪费的特殊之处在于普通人每天都能通过简单习惯加以改善、无需新技术，故选 B。A、C、D 均与原文不符。'
      }
    ],
    vocab: [
      { word: 'consumption', phonetic: '/kənˈsʌmpʃn/', meaning: '消耗；消费；食用' },
      { word: 'enormous', phonetic: '/ɪˈnɔːməs/', meaning: '巨大的；庞大的' },
      { word: 'fertilizer', phonetic: '/ˈfɜːtəlaɪzə(r)/', meaning: '肥料；化肥' },
      { word: 'greenhouse', phonetic: '/ˈɡriːnhaʊs/', meaning: '温室；花房' },
      { word: 'methane', phonetic: '/ˈmiːθeɪn/', meaning: '甲烷；沼气' },
      { word: 'landfill', phonetic: '/ˈlændfɪl/', meaning: '垃圾填埋场；填埋' },
      { word: 'surplus', phonetic: '/ˈsɜːpləs/', meaning: '过剩的；多余的；剩余' },
      { word: 'charity', phonetic: '/ˈtʃærəti/', meaning: '慈善机构；慈善；施舍' },
      { word: 'misread', phonetic: '/ˌmɪsˈriːd/', meaning: '误解；误读' },
      { word: 'leftover', phonetic: '/ˈleftəʊvə(r)/', meaning: '剩菜；残余物' },
      { word: 'dramatically', phonetic: '/drəˈmætɪkli/', meaning: '显著地；戏剧性地' },
      { word: 'emission', phonetic: '/ɪˈmɪʃn/', meaning: '排放；排放物' }
    ]
  },
  {
    id: 'read-cloze-1',
    type: 'cloze',
    title: 'Making Exercise a Habit',
    source: '真题改编',
    passage: 'Regular physical activity is one of the most effective ways to improve both physical and mental health, yet a large number of people still find it hard to make exercise a habit. Experts say the problem is often not that people fail to put in the __1__, but that they lack a realistic plan. Many beginners set goals that are far too __2__ and give up within a few weeks. The key is to start small. Even a short daily walk can produce noticeable __3__ in mood and energy levels. Research shows that exercise __4__ chemicals in the brain, such as endorphins, that help reduce stress and anxiety. Over time, this can lead to better sleep and greater __5__ in daily life. Another common mistake is __6__ exercise as a punishment for eating too much. When physical activity feels like a chore, people tend to avoid it. Instead, experts __7__ that you choose activities you genuinely enjoy, whether it is dancing, swimming, or cycling, because you are far more likely to __8__ with them. Social support also matters. Joining a class or finding a workout partner can make exercise feel less like an __9__ and more like a social event. Friends and family can also __10__ you to keep going on days when your motivation is low. In the end, the most important step is simply to begin, and to remember that consistency beats perfection every time.',
    wordBank: ['ambition', 'ambitious', 'benefits', 'challenge', 'confidence', 'effort', 'encourage', 'maintain', 'obligation', 'recommend', 'releases', 'steady', 'stick', 'treating', 'weakness'],
    answers: ['effort', 'ambitious', 'benefits', 'releases', 'confidence', 'treating', 'recommend', 'stick', 'obligation', 'encourage'],
    explanations: {
      '1': '考查固定搭配。句意：问题往往不是人们没有付出努力，而是缺少切实可行的计划。put in the effort（付出努力）为固定搭配，故选 effort。ambition（雄心）不与 put in the 连用，语义也不符。',
      '2': '考查形容词。句意：许多初学者定的目标过高，几周内就放弃。too ambitious（过于雄心勃勃、目标过高）符合语义，故选 ambitious。steady（平稳的）不能与“几周内放弃”形成因果，语义不符。',
      '3': '考查名词。句意：即使每天短距离散步也能在情绪和精力上带来明显的益处。noticeable benefits（明显的益处）语义通顺，故选 benefits。challenge 与 weakness 与“情绪和精力改善”的积极语义不符。',
      '4': '考查动词。句意：运动会使大脑释放内啡肽等化学物质。exercise 作主语为单数，谓语用 releases（释放），故选 releases。maintain（保持）语义不符。',
      '5': '考查名词。句意：久而久之，这会带来更好的睡眠和在日常生活中更大的自信。greater confidence（更大的自信）是积极结果，与上下文一致，故选 confidence。',
      '6': '考查固定搭配 treat...as...。句意：另一个常见错误是把运动当作吃多了的惩罚。treating exercise as a punishment（把运动当作惩罚）符合搭配，故选 treating。',
      '7': '考查动词。句意：专家建议你选择真正喜欢的活动。recommend that sb (should) do sth 为固定用法，故选 recommend。encourage 不能接 that 从句，语义上也不合适。',
      '8': '考查固定搭配 stick with。句意：因为你更有可能坚持下去。stick with（坚持）为固定短语，故选 stick。maintain 不与 with 搭配。',
      '9': '考查名词。句意：让运动感觉不像一项义务，而更像社交活动。an obligation（一项义务、负担）符合语境，且冠词 an 提示需以元音开头的词，故选 obligation。',
      '10': '考查动词。句意：朋友和家人也能鼓励你在动力不足时坚持下去。encourage sb to do sth（鼓励某人做某事）为固定用法，故选 encourage。'
    },
    vocab: [
      { word: 'ambitious', phonetic: '/æmˈbɪʃəs/', meaning: '有雄心的；宏大的' },
      { word: 'endorphin', phonetic: '/enˈdɔːfɪn/', meaning: '内啡肽' },
      { word: 'chore', phonetic: '/tʃɔː(r)/', meaning: '家务活；令人厌烦的事' },
      { word: 'consistency', phonetic: '/kənˈsɪstənsi/', meaning: '一致性；连贯性' },
      { word: 'obligation', phonetic: '/ˌɒblɪˈɡeɪʃn/', meaning: '义务；责任' },
      { word: 'motivation', phonetic: '/ˌməʊtɪˈveɪʃn/', meaning: '动机；积极性' },
      { word: 'anxiety', phonetic: '/æŋˈzaɪəti/', meaning: '焦虑；担忧' },
      { word: 'genuinely', phonetic: '/ˈdʒenjuɪnli/', meaning: '真诚地；真正地' },
      { word: 'noticeable', phonetic: '/ˈnəʊtɪsəbl/', meaning: '明显的；显著的' },
      { word: 'realistic', phonetic: '/ˌriːəˈlɪstɪk/', meaning: '现实的；逼真的' }
    ]
  },
  {
    id: 'read-cloze-2',
    type: 'cloze',
    title: 'Why Reading Still Matters',
    source: '真题改编',
    passage: 'In a world of short videos and endless notifications, many people find it hard to sit down and read a book. Yet reading offers rewards that no screen can easily match. Studies suggest that fiction helps us understand other people, because a story asks us to imagine the thoughts and feelings of its characters. In this way, books build our __1__, the ability to share and understand the emotions of others. Reading also gives the brain a valuable workout. Unlike watching television, which is largely passive, reading __2__ us to picture scenes, follow arguments, and remember details. Regular readers tend to have a larger __3__ and better verbal skills, an advantage that lasts into old age. For students, the benefits are even more direct. Reading widely __4__ the range of ideas and expressions they can draw on when writing. It also helps them __5__ their attention span, since a chapter demands focus that scrolling never does. Of course, not all reading is equal. Experts __6__ that we choose books that genuinely interest us rather than those we feel we should read. When reading feels like an __7__, it quickly becomes a habit people abandon. Instead, we should treat it as a pleasure, a quiet escape that happens to __8__ the mind and calm the nerves at the same time. The good news is that it is never too late to begin. Even fifteen minutes a day, if done __9__, can transform the way we think and speak. The only requirement is a little __10__ and a willingness to turn off the phone.',
    wordBank: ['concentrate', 'empathy', 'enrich', 'expands', 'imagination', 'improve', 'knowledge', 'obligation', 'patience', 'recommend', 'reduce', 'regularly', 'requires', 'suppose', 'vocabulary'],
    answers: ['empathy', 'requires', 'vocabulary', 'expands', 'improve', 'recommend', 'obligation', 'enrich', 'regularly', 'patience'],
    explanations: {
      '1': '考查名词。破折号后 the ability to share and understand the emotions of others（分享并理解他人情感的能力）正是 empathy（同理心）的定义，故选 empathy。imagination 指想象力，与“理解他人情感”不符。',
      '2': '考查动词。句意：阅读要求我们想象场景、跟随论证、记住细节。requires us to do sth（要求我们做某事）语义通顺，故选 requires。concentrate 与 suppose 后不能接“sb to do”，语义也不符。',
      '3': '考查名词。句意：经常阅读的人词汇量更大、语言能力更强。a larger vocabulary（更大的词汇量）与 better verbal skills 并列，故选 vocabulary。knowledge 为不可数名词，不用于 a larger knowledge。',
      '4': '考查动词。句意：广泛阅读能扩大他们写作时可用的思想和表达的范围。expand the range of（扩大……的范围）为常见搭配，故选 expands。improve 强调“改善质量”而非“扩大范围”。',
      '5': '考查动词。句意：阅读还能帮助他们提高注意力持续时间。improve one’s attention span（提高注意力持续时间）语义通顺，故选 improve。reduce 与文意相反。',
      '6': '考查动词。句意：专家建议我们选择真正感兴趣的书。recommend that sb (should) do sth 为固定用法，故选 recommend。suppose（假设）语义不符。',
      '7': '考查名词。句意：当阅读感觉像一项义务时，很快就会成为被抛弃的习惯。an obligation（一项义务、负担）符合语境，且冠词 an 提示需以元音开头的词，故选 obligation。',
      '8': '考查动词。句意：阅读恰好能充实头脑、安定神经。enrich the mind（充实头脑）与 calm the nerves（安定神经）并列，故选 enrich。',
      '9': '考查副词。句意：只要坚持规律地进行，每天十五分钟的阅读也能改变我们思考和表达的方式。if done regularly（如果规律地做）语义通顺，故选 regularly。',
      '10': '考查名词。句意：唯一的要求是一点耐心和关掉手机的意愿。a little patience（一点耐心）与 willingness 并列，语义通顺，故选 patience。'
    },
    vocab: [
      { word: 'empathy', phonetic: '/ˈempəθi/', meaning: '同理心；共情' },
      { word: 'verbal', phonetic: '/ˈvɜːbl/', meaning: '言语的；口头的' },
      { word: 'fiction', phonetic: '/ˈfɪkʃn/', meaning: '小说；虚构' },
      { word: 'passive', phonetic: '/ˈpæsɪv/', meaning: '被动的；消极的' },
      { word: 'enrich', phonetic: '/ɪnˈrɪtʃ/', meaning: '充实；使丰富' },
      { word: 'abandon', phonetic: '/əˈbændən/', meaning: '放弃；抛弃' },
      { word: 'willingness', phonetic: '/ˈwɪlɪŋnəs/', meaning: '意愿；乐意' },
      { word: 'chapter', phonetic: '/ˈtʃæptə(r)/', meaning: '章节；时期' },
      { word: 'scroll', phonetic: '/skrəʊl/', meaning: '滚动；卷轴' },
      { word: 'attention span', phonetic: '/əˈtenʃn spæn/', meaning: '注意力持续时间' }
    ]
  },
  {
    id: 'read-match-1',
    type: 'match',
    title: 'The Quiet Power of a Good Night’s Sleep',
    source: '真题改编',
    paragraphs: [
      'Sleep is something most of us take for granted. We push it aside to finish work, to watch one more episode, or to scroll through social media. Yet scientists increasingly warn that sleep is not a luxury or a sign of laziness; it is a biological necessity as important as food and water. Cutting back on sleep, even by an hour a night, has consequences that reach into almost every corner of our health and our minds. In many cultures, working late is still admired as proof of dedication, yet doctors warn that this admiration is dangerously misplaced.',
      'One of the most important jobs of sleep is to strengthen memory. During the night, the brain replays the events of the day and transfers important information from short-term storage into long-term memory. Students who sleep well after studying remember far more than those who stay up late, which is why pulling an all-nighter before an exam is usually a poor strategy.',
      'Sleep is also a time of physical repair. While we rest, the body releases growth hormone, repairs damaged cells, and strengthens the immune system. People who regularly sleep less than seven hours are more likely to catch colds and other infections, and they recover more slowly from illness and injury. Athletes know that a full night of rest after hard training is just as important as the training itself.',
      'The link between sleep and body weight is another surprise for many people. When we are tired, the body produces more of a hormone called ghrelin, which increases appetite, and less of the hormone that tells us we are full. As a result, sleep-deprived people tend to crave sugary and high-calorie foods and eat more than they need. Researchers believe this response is a leftover from our distant past, when staying awake to hunt for more food could mean the difference between life and death.',
      'Our emotions depend on sleep as well. The part of the brain that keeps fear and anger in check becomes far less effective when we are exhausted. This is why a poor night’s sleep can leave us short-tempered, anxious, and unable to see problems clearly. Over time, chronic sleep loss is closely linked to depression and anxiety disorders.',
      'Surprisingly, sleep also fuels creativity and problem solving. During dreaming, the brain makes unusual connections between ideas that it would not normally link while we are awake. Many people report waking up with the solution to a problem that had defeated them the night before, a phenomenon scientists attribute to the reorganizing power of sleep. Writers, musicians, and inventors have long described waking with fresh ideas, and modern brain scans now help explain why.',
      'The problem is especially serious for teenagers and young adults. Their biological clocks naturally shift later, making them want to stay up and sleep in. But early school start times force them to wake before their bodies are ready, leaving many students chronically sleep-deprived. Some school districts have responded by pushing start times later, with measurable improvements in grades and attendance. Studies suggest that many teenagers are getting fewer than seven hours a night, far below what their developing brains require.',
      'So what can we do to sleep better? Experts recommend keeping a regular schedule, going to bed and waking at the same time every day, even on weekends. A cool, dark, and quiet bedroom helps, as does avoiding screens for at least an hour before bed, since their blue light delays the release of the sleep hormone melatonin.',
      'The message from the research is clear: sleep is not time wasted but time invested. It is the foundation on which memory, health, mood, and creativity all rest. In a culture that celebrates busyness and late nights, learning to protect our sleep may be one of the most productive habits we can adopt.'
    ],
    questions: [
      {
        q: 'Some students perform worse in exams because they choose to stay up all night instead of sleeping.',
        answer: 'B',
        explanation: '定位 B 段“Students who sleep well after studying remember far more than those who stay up late, which is why pulling an all-nighter before an exam is usually a poor strategy.”该段指出考前通宵复习是不明智的策略，与题干“熬夜不睡导致考试表现差”对应，故选 B。'
      },
      {
        q: 'A person who sleeps too little is more likely to catch a cold or another infection.',
        answer: 'C',
        explanation: '定位 C 段“People who regularly sleep less than seven hours are more likely to catch colds and other infections.”该段讲睡眠与免疫系统的关系，睡眠不足者更易感冒或感染，与题干对应，故选 C。'
      },
      {
        q: 'Lack of sleep makes people crave sweet and high-calorie food.',
        answer: 'D',
        explanation: '定位 D 段“sleep-deprived people tend to crave sugary and high-calorie foods and eat more than they need.”该段讲睡眠与体重、食欲的关系，缺觉者渴望甜食和高热量食物，故选 D。'
      },
      {
        q: 'Feeling angry or anxious for no clear reason can be caused by a bad night’s sleep.',
        answer: 'E',
        explanation: '定位 E 段“a poor night’s sleep can leave us short-tempered, anxious, and unable to see problems clearly.”该段讲睡眠与情绪，睡不好会让人易怒、焦虑，与题干对应，故选 E。'
      },
      {
        q: 'The solution to a difficult problem may come to us after a night of sleep.',
        answer: 'F',
        explanation: '定位 F 段“Many people report waking up with the solution to a problem that had defeated them the night before.”该段讲睡眠激发创造力与解决问题，睡一觉后难题可能迎刃而解，故选 F。'
      },
      {
        q: 'Young people naturally fall asleep later and struggle with early school start times.',
        answer: 'G',
        explanation: '定位 G 段“Their biological clocks naturally shift later, making them want to stay up and sleep in. But early school start times force them to wake before their bodies are ready.”该段讲青少年生物钟偏晚、与早起上学冲突，故选 G。'
      },
      {
        q: 'Blue light from screens delays the release of the hormone that helps us fall asleep.',
        answer: 'H',
        explanation: '定位 H 段“avoiding screens for at least an hour before bed, since their blue light delays the release of the sleep hormone melatonin.”该段讲屏幕蓝光会延迟褪黑激素的释放，故选 H。'
      },
      {
        q: 'Sleep should be regarded as a biological necessity rather than a luxury.',
        answer: 'A',
        explanation: '定位 A 段“sleep is not a luxury or a sign of laziness; it is a biological necessity as important as food and water.”该段指出睡眠是生理必需而非奢侈，故选 A。'
      },
      {
        q: 'School districts that delay their start time have seen better grades and attendance.',
        answer: 'G',
        explanation: '定位 G 段“Some school districts have responded by pushing start times later, with measurable improvements in grades and attendance.”该段提到推迟上课时间的学区在成绩和出勤上取得可测量的改善，故选 G。'
      },
      {
        q: 'The author concludes that sleep is the base on which memory, health and mood depend.',
        answer: 'I',
        explanation: '定位 I 段“It is the foundation on which memory, health, mood, and creativity all rest.”该段总结睡眠是记忆、健康、情绪与创造力的基础，故选 I。'
      }
    ],
    vocab: [
      { word: 'biological', phonetic: '/ˌbaɪəˈlɒdʒɪkl/', meaning: '生物的；生物学的' },
      { word: 'consolidate', phonetic: '/kənˈsɒlɪdeɪt/', meaning: '巩固；合并' },
      { word: 'immune', phonetic: '/ɪˈmjuːn/', meaning: '免疫的；不受影响的' },
      { word: 'ghrelin', phonetic: '/ˈɡrelɪn/', meaning: '胃饥饿素；生长素' },
      { word: 'appetite', phonetic: '/ˈæpɪtaɪt/', meaning: '食欲；胃口' },
      { word: 'deprive', phonetic: '/dɪˈpraɪv/', meaning: '剥夺；使丧失' },
      { word: 'chronic', phonetic: '/ˈkrɒnɪk/', meaning: '慢性的；长期的' },
      { word: 'depression', phonetic: '/dɪˈpreʃn/', meaning: '抑郁；沮丧；萧条' },
      { word: 'creativity', phonetic: '/ˌkriːeɪˈtɪvəti/', meaning: '创造力；创造性' },
      { word: 'attribute', phonetic: '/əˈtrɪbjuːt/', meaning: '把……归因于；属性' },
      { word: 'melatonin', phonetic: '/ˌmeləˈtəʊnɪn/', meaning: '褪黑激素' },
      { word: 'measurable', phonetic: '/ˈmeʒərəbl/', meaning: '显著的；可测量的' },
      { word: 'foundation', phonetic: '/faʊnˈdeɪʃn/', meaning: '基础；地基；基金会' }
    ]
  },
  {
    id: 'read-match-2',
    type: 'match',
    title: 'The Sharing Economy: Why Owning Is No Longer Everything',
    source: '真题改编',
    paragraphs: [
      'For most of the last century, owning things was a sign of success. A house, a car, and a garage full of tools all seemed to promise freedom and status. In recent years, however, a very different idea has been spreading around the world: that we do not always need to own something in order to enjoy it. This shift in thinking lies at the heart of what is now called the sharing economy. The change has been so rapid that a person raised to expect a home and a car of their own may now feel perfectly comfortable with neither.',
      'The sharing economy is built on a simple principle. Instead of buying an item that we use only occasionally, we can borrow, rent, or share it with others, usually through a website or a mobile app. A drill, a bicycle, a spare room, even a car can be turned into a service that is available when we need it and gone when we do not.',
      'The roots of this movement go back to small experiments in the 1990s, such as car-sharing clubs in a few European cities. But it was the spread of smartphones and the internet that turned sharing into a global industry. With a few taps on a screen, anyone can now find a ride, a bed, or a tool within minutes, and pay for it instantly. Early members once had to meet in person and hand over keys, but ratings and digital payments have now removed almost all of the friction.',
      'Transport was one of the first areas to be transformed. Ride-hailing services allow ordinary car owners to offer rides to strangers, while bike-sharing schemes have appeared in hundreds of cities. Supporters say these services reduce traffic and make it easier for people to live without owning a car, especially in crowded city centers. In a growing number of cities, shared bicycles now outnumber privately owned ones.',
      'Travel and accommodation changed almost as quickly. Platforms that let homeowners rent out spare rooms or whole apartments have grown into some of the largest companies in the world. For many hosts, this extra income helps pay the mortgage or fund a holiday; for guests, it often offers a cheaper and more personal alternative to a hotel.',
      'The benefits, however, are not only financial. By making better use of goods that already exist, sharing can reduce waste and the pressure to keep producing new things. A power drill, for example, may be used for only a few minutes in its entire life; if a street of neighbors shares one, far fewer drills need to be manufactured, packaged, and shipped. The same logic applies to cars, which sit parked for most of the day, and to guest rooms that stand empty all year.',
      'The sharing economy has also created new ways to earn a living. Many people now make money by driving, hosting, or renting out equipment, often fitting this work around study or another job. This flexibility appeals especially to students, retirees, and parents who need to choose their own working hours. A student can drive for a couple of hours between lectures, and a retiree can rent out a spare bicycle from the garage.',
      'Yet the new model has raised difficult questions. Critics point out that many sharing-economy workers are treated as independent contractors, which means they miss out on benefits such as paid leave and health insurance. There are also worries about safety, insurance, and the effect of short-term rentals on housing prices in popular neighborhoods.',
      'Whatever the outcome of these debates, the sharing economy has already changed our habits. It has taught a generation to value access over ownership, and to ask, before every purchase, whether buying is really necessary. The question is no longer what we own, but what we need, and for how long.'
    ],
    questions: [
      {
        q: 'The spread of smartphones and the internet turned sharing into a global industry.',
        answer: 'C',
        explanation: '定位 C 段“it was the spread of smartphones and the internet that turned sharing into a global industry.”该段讲智能手机和互联网的普及使共享成为全球产业，与题干完全对应，故选 C。'
      },
      {
        q: 'Sharing can reduce waste because goods that already exist are used more fully.',
        answer: 'F',
        explanation: '定位 F 段“By making better use of goods that already exist, sharing can reduce waste and the pressure to keep producing new things.”该段讲共享通过更充分地利用已有物品来减少浪费，与题干对应，故选 F。'
      },
      {
        q: 'Many workers in the sharing economy are not given paid leave or health insurance.',
        answer: 'H',
        explanation: '定位 H 段“many sharing-economy workers are treated as independent contractors, which means they miss out on benefits such as paid leave and health insurance.”该段讲共享经济从业者没有带薪假和医保，与题干对应，故选 H。'
      },
      {
        q: 'Bike-sharing and ride-hailing services make it possible to live in a city without owning a car.',
        answer: 'D',
        explanation: '定位 D 段“Ride-hailing services allow ordinary car owners to offer rides to strangers, while bike-sharing schemes... make it easier for people to live without owning a car.”该段讲网约车和共享单车使人们不必拥有私家车，故选 D。'
      },
      {
        q: 'Renting out spare rooms provides hosts with extra income to help pay the mortgage.',
        answer: 'E',
        explanation: '定位 E 段“For many hosts, this extra income helps pay the mortgage or fund a holiday.”该段讲出租闲置房间为房主带来额外收入、可偿还房贷，与题干对应，故选 E。'
      },
      {
        q: 'The core idea of the sharing economy is borrowing or renting things we use only occasionally.',
        answer: 'B',
        explanation: '定位 B 段“Instead of buying an item that we use only occasionally, we can borrow, rent, or share it with others.”该段阐述共享经济的核心理念：借用、租用偶尔使用的物品，故选 B。'
      },
      {
        q: 'The flexibility of sharing-economy work appeals to students, retirees, and parents.',
        answer: 'G',
        explanation: '定位 G 段“This flexibility appeals especially to students, retirees, and parents who need to choose their own working hours.”该段讲共享经济工作的灵活性吸引学生、退休者和家长，与题干对应，故选 G。'
      },
      {
        q: 'The author says the sharing economy has taught people to value access over ownership.',
        answer: 'I',
        explanation: '定位 I 段“It has taught a generation to value access over ownership.”该段总结共享经济教会一代人重使用权而非所有权，与题干对应，故选 I。'
      },
      {
        q: 'Owning things was once regarded as a sign of success and status.',
        answer: 'A',
        explanation: '定位 A 段“owning things was a sign of success. A house, a car, and a garage full of tools all seemed to promise freedom and status.”该段开篇讲拥有曾被视为成功和地位的象征，与题干对应，故选 A。'
      },
      {
        q: 'A power drill is given as an example of an item used for only a few minutes in its whole life.',
        answer: 'F',
        explanation: '定位 F 段“A power drill, for example, may be used for only a few minutes in its entire life.”该段以电钻为例，说明某些物品一生中真正被使用的时间极短，与题干对应，故选 F。'
      }
    ],
    vocab: [
      { word: 'status', phonetic: '/ˈsteɪtəs/', meaning: '地位；身份；状况' },
      { word: 'principle', phonetic: '/ˈprɪnsəpl/', meaning: '原则；原理' },
      { word: 'platform', phonetic: '/ˈplætfɔːm/', meaning: '平台；站台' },
      { word: 'accommodation', phonetic: '/əˌkɒməˈdeɪʃn/', meaning: '住宿；住处' },
      { word: 'mortgage', phonetic: '/ˈmɔːɡɪdʒ/', meaning: '抵押贷款；按揭' },
      { word: 'alternative', phonetic: '/ɔːlˈtɜːnətɪv/', meaning: '供替代的；替代方案' },
      { word: 'manufacture', phonetic: '/ˌmænjuˈfæktʃə(r)/', meaning: '制造；生产' },
      { word: 'flexibility', phonetic: '/ˌfleksəˈbɪləti/', meaning: '灵活性；弹性' },
      { word: 'retiree', phonetic: '/rɪˌtaɪəˈriː/', meaning: '退休人员' },
      { word: 'contractor', phonetic: '/kənˈtræktə(r)/', meaning: '承包人；承包商' },
      { word: 'insurance', phonetic: '/ɪnˈʃʊərəns/', meaning: '保险；保险费' },
      { word: 'access', phonetic: '/ˈækses/', meaning: '使用权；通道；获取' }
    ]
  }
];
