const TRANSLATION_DATA = [
  {
    id: 'trans-1',
    title: '中国茶文化',
    source: '真题改编',
    chinese: '茶是中国人日常生活中不可或缺的一部分。中国是茶的故乡，也是世界上最早种植和饮用茶的国家，饮茶历史已有四千多年。种茶、制茶的技艺代代相传，形成了独特的茶文化。在中国，茶不仅是饮料，更是待客、联络感情的重要方式，客人来访时，主人会沏上一壶好茶以表敬意。随着时代的发展，茶文化不断焕发新的活力，如今越来越多的年轻人也开始喜欢品茶，并将其传播到世界各地。',
    reference: 'Tea is an indispensable part of Chinese people\'s daily life. China is the homeland of tea and the first country in the world to grow and drink it, with a history of more than four thousand years. The skills of planting and making tea have been passed down from generation to generation, forming a unique tea culture. In China, tea is not only a drink but also an important way of entertaining guests and strengthening relationships. When visitors arrive, the host usually serves a pot of good tea to show respect. As time goes by, tea culture has kept gaining new vitality, and nowadays more and more young people have begun to enjoy tea and spread it around the world.',
    keyWords: [
      { cn: '茶的故乡', en: 'homeland of tea', note: '专有表达，homeland 比 home 更正式' },
      { cn: '不可或缺', en: 'indispensable', note: '形容词，作表语或定语' },
      { cn: '代代相传', en: 'pass down from generation to generation', note: '四字格，用被动语态 has been passed down' },
      { cn: '待人接物', en: 'entertain guests', note: '四字格，意译而非逐字' },
      { cn: '联络感情', en: 'strengthen relationships', note: '动宾搭配' },
      { cn: '沏茶', en: 'make/serve a pot of tea', note: '沏、泡用 make 或 brew' },
      { cn: '品茶', en: 'taste/enjoy tea', note: '不可用 drink tea' },
      { cn: '焕发活力', en: 'gain new vitality', note: 'vitality 表生命力' }
    ],
    sentencePatterns: [
      '无主句「饮茶的历史已有四千多年」——中文缺主语，英译用 with a history of more than four thousand years 这一介词短语依附前句，避免硬补主语。',
      '「不仅……更是……」——对应 not only ... but also ...，当 but also 后接名词短语时，also 常可省略。',
      '「客人来访时」——时间状语从句 when visitors arrive，中文的「来访」用 arrive 比 visit 更自然。',
      '「随着时代的发展」——译作 As time goes by，也可用 with 短语，注意 as 后接从句、with 后接名词。',
      '「代代相传」——用现在完成时被动 have been passed down from generation to generation，强调持续至今的状态。'
    ],
    tips: '本篇是典型的文化主题翻译，难点在于无主句与四字格的转换。中文里「种茶、制茶的技艺代代相传」这类无主句，英译时要补出主语 the skills 或改用被动语态。「茶的故乡」要译成 homeland of tea 而非 home。四字格「待人接物、联络感情」不能逐字硬译，应提炼核心意思 entertaining guests and strengthening relationships。时态上要用现在完成时表达「已有四千多年历史」这种持续到现在的状态。常见失分点是漏译「不仅……更是」的递进语气，以及把「品茶」误译为 drink tea。',
    vocab: [
      { word: 'indispensable', phonetic: '/ˌɪndɪˈspensəbl/', meaning: '不可或缺的；必需的' },
      { word: 'homeland', phonetic: '/ˈhəʊmlænd/', meaning: '故乡；祖国' },
      { word: 'grow', phonetic: '/ɡrəʊ/', meaning: '种植；生长' },
      { word: 'generation', phonetic: '/ˌdʒenəˈreɪʃn/', meaning: '一代人；代' },
      { word: 'unique', phonetic: '/juˈniːk/', meaning: '独特的；独一无二的' },
      { word: 'entertain', phonetic: '/ˌentəˈteɪn/', meaning: '招待；款待' },
      { word: 'guest', phonetic: '/ɡest/', meaning: '客人；来宾' },
      { word: 'respect', phonetic: '/rɪˈspekt/', meaning: '尊敬；敬意' },
      { word: 'vitality', phonetic: '/vaɪˈtæləti/', meaning: '活力；生命力' },
      { word: 'spread', phonetic: '/spred/', meaning: '传播；扩散' }
    ]
  },
  {
    id: 'trans-2',
    title: '中国书法',
    source: '真题改编',
    chinese: '中国书法是一门传统艺术，也是中国文化的瑰宝。它以汉字为载体，通过毛笔将文字的书写升华为独特的艺术形式。中国人常说「字如其人」，认为字迹能反映人的性格和修养。在古代，写一手好字被视为读书人的基本素养；到了今天，书法仍深受人们喜爱，许多人通过练字来修身养性、陶冶情操。如今，书法已被列入联合国教科文组织非物质文化遗产名录，吸引着越来越多的外国人前来学习。',
    reference: 'Chinese calligraphy is a traditional art with a long history and one of the treasures of Chinese culture. Taking Chinese characters as its medium, it uses the brush to turn the writing of characters into a unique art form. The Chinese believe that a person\'s handwriting reflects his or her personality and self-cultivation. In ancient times, beautiful handwriting was regarded as a basic quality of a well-educated person. Today, calligraphy is still deeply loved, and many people practice it to cultivate their minds and refine their tastes. Now it has been included in the UNESCO Representative List of the Intangible Cultural Heritage of Humanity, attracting more and more foreigners to learn it.',
    keyWords: [
      { cn: '书法', en: 'calligraphy', note: '专有名词，不可译为 handwriting' },
      { cn: '瑰宝', en: 'treasure', note: '比喻义，常用 treasure' },
      { cn: '以……为载体', en: 'taking ... as its medium', note: 'medium 比 carrier 更地道' },
      { cn: '毛笔', en: 'brush', note: '书法语境下 brush 即毛笔' },
      { cn: '字如其人', en: 'the handwriting reflects the writer', note: '俗语，意译核心含义' },
      { cn: '修身养性', en: 'cultivate one\'s mind', note: '四字格，意译' },
      { cn: '陶冶情操', en: 'refine one\'s tastes', note: '四字格，refine 表陶冶' },
      { cn: '非物质文化遗产', en: 'intangible cultural heritage', note: '规范术语，注意 intangible' }
    ],
    sentencePatterns: [
      '「以汉字为载体」——中文「以……为……」结构，英译用 taking ... as ... 现在分词短语作状语，或 with ... as ...。',
      '「字如其人」——俗语不能硬译，意译为 the handwriting reflects the writer，并用 believing 分词补充说明含义。',
      '「在古代……到了今天……」——时间对比结构 In ancient times ... Today ...，形成古今对照。',
      '「已被列入……名录」——现在完成时被动语态 has been included in，对应中文「被」字句。',
      '「吸引着越来越多的外国人前来学习」——attract sb. to do sth.，用现在分词 attracting 作结果状语。'
    ],
    tips: '书法篇的核心难点是文化专有名词与四字格。「字如其人」这类俗语不能硬译，要意译出核心含义 handwriting reflects the writer。「修身养性、陶冶情操」是并列四字格，英译时需拆分处理为 cultivate their minds and refine their tastes。「载体」不宜直译成 carrier，用 medium 更地道。机构名称「联合国教科文组织」用规范缩写 UNESCO，名录全称较长，注意介词 in 与大小写。时态上要分清一般现在时（描述现状）与现在完成时（已被列入）的场合。常见失分点是漏译「以汉字为载体」的方式状语，以及把「字如其人」硬译为 word is like the person。',
    vocab: [
      { word: 'calligraphy', phonetic: '/kəˈlɪɡrəfi/', meaning: '书法' },
      { word: 'treasure', phonetic: '/ˈtreʒə(r)/', meaning: '瑰宝；珍宝' },
      { word: 'medium', phonetic: '/ˈmiːdiəm/', meaning: '载体；媒介' },
      { word: 'brush', phonetic: '/brʌʃ/', meaning: '毛笔；刷子' },
      { word: 'reveal', phonetic: '/rɪˈviːl/', meaning: '显露；揭示' },
      { word: 'personality', phonetic: '/ˌpɜːsəˈnæləti/', meaning: '性格；个性' },
      { word: 'self-cultivation', phonetic: '/ˌself kʌltɪˈveɪʃn/', meaning: '修身养性；自我修养' },
      { word: 'refine', phonetic: '/rɪˈfaɪn/', meaning: '使……精炼；陶冶' },
      { word: 'heritage', phonetic: '/ˈherɪtɪdʒ/', meaning: '遗产' },
      { word: 'intangible', phonetic: '/ɪnˈtændʒəbl/', meaning: '无形的；非物质的' }
    ]
  },
  {
    id: 'trans-3',
    title: '春节',
    source: '真题改编',
    chinese: '春节是中国最重要、最隆重的传统节日，也被称为中国的新年。每年农历正月初一，家家户户都会贴春联、挂红灯笼、燃放鞭炮，辞旧迎新。除夕之夜，无论人们身在何处，都会赶回家与亲人团聚，围坐在一起吃一顿丰盛的年夜饭。春节期间，长辈会给晚辈发红包，祝福他们健康成长。近年来，随着中国文化走向世界，春节的影响力越来越大，许多国家都会举行庆祝活动，共同感受这一节日的欢乐气氛。',
    reference: 'The Spring Festival is the most important and grand traditional festival in China, also known as the Chinese New Year. On the first day of the first lunar month, every household puts up red couplets, hangs red lanterns and sets off firecrackers to bid farewell to the old year and welcome the new one. On New Year\'s Eve, no matter where people are, they will rush home to reunite with their families and enjoy a big family dinner together. During the festival, elders give children red envelopes to wish them a healthy growth. In recent years, as Chinese culture spreads worldwide, the festival has become increasingly influential, and many countries hold various celebrations to share its joy.',
    keyWords: [
      { cn: '农历', en: 'lunar calendar', note: '不可用 moon 或 agricultural calendar' },
      { cn: '春联', en: 'Spring Festival couplets', note: '约定俗成的译法' },
      { cn: '辞旧迎新', en: 'bid farewell to the old year and welcome the new one', note: '四字格，拆成两个并列动作' },
      { cn: '除夕', en: 'New Year\'s Eve', note: '专有名词，注意大写' },
      { cn: '团聚', en: 'reunite', note: '动词，也可用 family reunion' },
      { cn: '年夜饭', en: 'family reunion dinner', note: '固定译法' },
      { cn: '红包', en: 'red envelope', note: '中国特有文化词' },
      { cn: '晚辈', en: 'the younger generation', note: '集合名词' }
    ],
    sentencePatterns: [
      '「无论……都会……」——让步状语从句 no matter where people are，主句用 will 表示习惯性行为。',
      '「辞旧迎新」——四字格，拆解为两个并列动作，用不定式 to bid farewell ... and welcome ... 表目的。',
      '「家家户户」——重叠量词，译为 every household，体现中文叠词的强调功能。',
      '「农历正月初一」——日期专有表达 the first day of the first lunar month，用序数词和 lunar。',
      '「随着……影响力越来越大」——as 引导从句，主句用现在完成时 has become increasingly influential。'
    ],
    tips: '春节篇专有名词密集，是翻译失分重灾区。「春联、年夜饭、红包」等词要用约定俗成的译法：Spring Festival couplets、family reunion dinner、red envelope，不可生造。「农历」用 lunar calendar 而非 agricultural calendar。「辞旧迎新」是典型四字格，必须拆成两个动作，用不定式表目的。日期「正月初一」要译成序数词 the first day of the first lunar month。「无论……都」结构务必译出让步关系 no matter where。「给晚辈发红包」中「晚辈」译为 children 或 the younger generation，不能用单数 child。',
    vocab: [
      { word: 'grand', phonetic: '/ɡrænd/', meaning: '盛大的；隆重的' },
      { word: 'lunar', phonetic: '/ˈluːnə(r)/', meaning: '农历的；月亮的' },
      { word: 'couplet', phonetic: '/ˈkʌplət/', meaning: '对联' },
      { word: 'household', phonetic: '/ˈhaʊshəʊld/', meaning: '家庭；户' },
      { word: 'firecracker', phonetic: '/ˈfaɪəkrækə(r)/', meaning: '鞭炮' },
      { word: 'reunite', phonetic: '/ˌriːjuˈnaɪt/', meaning: '团聚；重聚' },
      { word: 'eve', phonetic: '/iːv/', meaning: '前夕' },
      { word: 'envelope', phonetic: '/ˈenvələʊp/', meaning: '信封' },
      { word: 'elder', phonetic: '/ˈeldə(r)/', meaning: '长辈' },
      { word: 'influential', phonetic: '/ˌɪnfluˈenʃl/', meaning: '有影响力的' }
    ]
  },
  {
    id: 'trans-4',
    title: '中国高铁',
    source: '真题改编',
    chinese: '中国高铁是当代中国一张亮丽的名片，也是科技进步的重要象征。自2008年第一条高铁线路投入运营以来，中国高铁网络发展迅速，如今运营里程已超过四万公里，位居世界第一。高铁不仅速度快、准点率高，而且安全舒适，极大缩短了城市之间的距离，方便了人们出行。高铁的建设还带动了沿线地区的经济发展。如今，中国高铁技术已走向世界，正成为中国制造走向全球的一张金名片。',
    reference: 'China\'s high-speed rail is a shining name card of modern China and an important symbol of the country\'s scientific and technological progress. Since the first high-speed railway line was put into operation in 2008, the network has developed rapidly, and its total length has now exceeded 40,000 kilometers, ranking first in the world. It is not only fast and punctual but also safe and comfortable, greatly shortening the distance between cities and making travel more convenient. Its construction has also boosted the economic development of regions along the lines. Today, China\'s high-speed rail technology has gone global, and many countries have introduced it, making it a golden name card for Made-in-China products around the world.',
    keyWords: [
      { cn: '名片', en: 'name card', note: '比喻义，也可用 calling card' },
      { cn: '投入运营', en: 'be put into operation', note: '固定搭配' },
      { cn: '运营里程', en: 'total length (in operation)', note: '不能直译，用 total length' },
      { cn: '位居世界第一', en: 'rank first in the world', note: '现在分词 ranking 表伴随' },
      { cn: '准点率高', en: 'punctual', note: '形容词，注意拼写' },
      { cn: '缩短时空距离', en: 'shorten the distance between cities', note: '动宾搭配' },
      { cn: '带动经济发展', en: 'boost economic development', note: 'boost 比 promote 更有力' },
      { cn: '中国制造', en: 'Made in China', note: '专有表达，首字母大写' }
    ],
    sentencePatterns: [
      '「自……以来」——since 引导时间状语，主句用现在完成时 has developed，since 从句用一般过去时 was put into operation。',
      '「不仅……而且……」——not only ... but also ...，连接两个并列表语 fast and punctual / safe and comfortable。',
      '「极大缩短了……方便了……」——用现在分词 greatly shortening ... and making ... 作结果状语，避免并列从句累赘。',
      '「位居世界第一」——ranking first in the world，数字 40,000 kilometers 注意英文千分位逗号。',
      '「已走向世界」——has gone global，go global 是地道表达，比 go to the world 更自然。'
    ],
    tips: '高铁篇是科技类翻译，数字与专有名词是重点。年份 2008 直接写阿拉伯数字，里程「四万公里」写成 40,000 kilometers 并注意千分位逗号。「运营里程」不能直译，要译成 total length (in operation)。「名片」是比喻义，译作 name card 或 calling card，不可与 business card 混淆。「走向世界」地道说法是 go global，而非 go to the world。「沿线地区」译为 regions along the lines。句式上「不仅……而且」连接成分要对称；「极大缩短了……方便了……」用现在分词作结果状语更符合英语习惯。常见失分点是数字漏写千分位、since 后误用一般现在时。',
    vocab: [
      { word: 'rail', phonetic: '/reɪl/', meaning: '铁路；铁轨' },
      { word: 'symbol', phonetic: '/ˈsɪmbl/', meaning: '象征；标志' },
      { word: 'network', phonetic: '/ˈnetwɜːk/', meaning: '网络；系统' },
      { word: 'kilometer', phonetic: '/ˈkɪləmiːtə(r)/', meaning: '公里；千米' },
      { word: 'punctual', phonetic: '/ˈpʌŋktʃuəl/', meaning: '准时的' },
      { word: 'exceed', phonetic: '/ɪkˈsiːd/', meaning: '超过；超出' },
      { word: 'boost', phonetic: '/buːst/', meaning: '促进；推动' },
      { word: 'region', phonetic: '/ˈriːdʒən/', meaning: '地区；区域' },
      { word: 'introduce', phonetic: '/ˌɪntrəˈdjuːs/', meaning: '引进；介绍' },
      { word: 'global', phonetic: '/ˈɡləʊbl/', meaning: '全球的' }
    ]
  },
  {
    id: 'trans-5',
    title: '移动支付',
    source: '真题改编',
    chinese: '近年来，移动支付在中国发展迅猛，已深入人们日常生活的方方面面。如今，无论是在大型商场购物，还是在路边小摊买菜，只需掏出手机，扫描二维码，几秒内就能完成付款。移动支付不仅方便快捷，还减少了现金的使用，让交易更安全高效。然而，也有人担心它存在安全隐患，尤其是老年人难以掌握其使用方法。尽管如此，移动支付已成为中国数字经济的一张新名片，并正加速向海外推广。',
    reference: 'In recent years, mobile payment has developed rapidly in China and has penetrated into every aspect of people\'s daily life. Nowadays, whether shopping in large malls or buying vegetables at roadside stalls, people only need to take out their phones, scan a QR code, and complete the payment within seconds. Mobile payment is not only convenient and fast but also reduces the use of cash, making transactions safer and more efficient. However, some people worry that it may bring hidden risks, and the elderly in particular often find it hard to use. Even so, mobile payment has become a new name card of China\'s digital economy and is being promoted overseas at an accelerating pace.',
    keyWords: [
      { cn: '移动支付', en: 'mobile payment', note: '核心术语' },
      { cn: '迅猛发展', en: 'develop rapidly', note: '副词修饰动词' },
      { cn: '二维码', en: 'QR code', note: '规范术语，Quick Response 的缩写' },
      { cn: '扫描', en: 'scan', note: '动词' },
      { cn: '现金', en: 'cash', note: '不可数名词' },
      { cn: '交易', en: 'transaction', note: '注意拼写' },
      { cn: '安全隐患', en: 'hidden risks / security risks', note: '意译' },
      { cn: '数字经济', en: 'digital economy', note: '不可译 electronic economy' }
    ],
    sentencePatterns: [
      '「无论……还是……」——whether ... or ... 结构，whether doing A or doing B。',
      '「只需掏出手机……几秒钟内就能完成」——中文连动式，用 and 连接 take out ... scan ... complete，体现动作先后。',
      '「不仅……还……」——not only ... but also ...，连接两个谓语动词。',
      '「让交易更加安全高效」——making transactions safer and more efficient，现在分词表结果，形容词比较级。',
      '「尽管如此」——Even so / Nevertheless，表转折，注意与 However 的位置和语气区别。'
    ],
    tips: '移动支付篇属于科技加社会话题，难点在于口语化表达的书面转换。「掏出手机、扫二维码」这类动作要用并列动词 take out, scan 表达，不要逐字硬译。「二维码」是 QR code，属规范术语。「老年人」译为 the elderly，是集合名词，谓语用复数；「尤其」用 in particular 或 especially 均可。「安全隐患」译为 hidden risks 或 security risks。「正加速向海外推广」用现在进行时被动 is being promoted 表达动态感。常见失分点是漏译「几秒钟内」的时间状语，以及把「数字经济」误译为 electronic economy（应为 digital economy）。',
    vocab: [
      { word: 'payment', phonetic: '/ˈpeɪmənt/', meaning: '支付；付款' },
      { word: 'penetrate', phonetic: '/ˈpenɪtreɪt/', meaning: '渗透；深入' },
      { word: 'aspect', phonetic: '/ˈæspekt/', meaning: '方面' },
      { word: 'scan', phonetic: '/skæn/', meaning: '扫描' },
      { word: 'code', phonetic: '/kəʊd/', meaning: '代码；编码' },
      { word: 'transaction', phonetic: '/trænˈzækʃn/', meaning: '交易' },
      { word: 'cash', phonetic: '/kæʃ/', meaning: '现金' },
      { word: 'risk', phonetic: '/rɪsk/', meaning: '风险' },
      { word: 'elderly', phonetic: '/ˈeldəli/', meaning: '老年人；年长的' },
      { word: 'digital', phonetic: '/ˈdɪdʒɪtl/', meaning: '数字的' }
    ]
  },
  {
    id: 'trans-6',
    title: '长城',
    source: '真题改编',
    chinese: '长城是世界最伟大的建筑之一，也是中华民族的象征。它始建于两千多年前，最初是为抵御北方游牧民族的入侵而修筑的。长城东起山海关，西至嘉峪关，全长超过两万公里，蜿蜒于崇山峻岭之间，雄伟壮观。1987年，它被联合国教科文组织列入《世界遗产名录》。如今，长城已成为中外游客到中国旅游的必游之地，每年吸引着数以百万计的游客。民间流传着「不到长城非好汉」之说，表达了人们对其向往。',
    reference: 'The Great Wall is one of the greatest construction projects in the world and a symbol of the Chinese nation. It was first built more than two thousand years ago, originally to defend against invasions by nomadic tribes in the north. Stretching from Shanhaiguan in the east to Jiayuguan in the west, it has a total length of over 20,000 kilometers and winds through mountains and ridges, magnificent and grand. In 1987, it was listed as a World Heritage Site by UNESCO. Today, it has become a must-see destination for tourists visiting China, attracting millions of visitors every year. As a popular saying goes, he who has never been to the Great Wall is not a true man.',
    keyWords: [
      { cn: '建筑工程', en: 'construction project', note: '固定搭配' },
      { cn: '抵御入侵', en: 'defend against invasions', note: 'defend against 后接名词' },
      { cn: '游牧民族', en: 'nomadic tribes', note: '专有表达' },
      { cn: '崇山峻岭', en: 'mountains and ridges', note: '四字格，意译' },
      { cn: '雄伟壮观', en: 'magnificent and grand', note: '并列形容词作后置定语' },
      { cn: '世界遗产', en: 'World Heritage Site', note: '规范术语' },
      { cn: '必游之地', en: 'must-see destination', note: 'must-see 作定语' },
      { cn: '不到长城非好汉', en: 'he who has never been to the Great Wall is not a true man', note: '谚语意译' }
    ],
    sentencePatterns: [
      '「始建于两千多年前」——无主句，译作 It was first built ...，补出主语 it，用一般过去时被动。',
      '「最初是为了……」——originally to ...，不定式表目的，originally 点明「最初」。',
      '「东起山海关，西至嘉峪关」——Stretching from ... in the east to ... in the west，现在分词短语描述走向。',
      '「蜿蜒于崇山峻岭之间」——winds through mountains and ridges，动词 wind 有「蜿蜒」义。',
      '「不到长城非好汉」——谚语意译，用 he who ... 保留豪迈语气，as a popular saying goes 引出。'
    ],
    tips: '长城篇专有名词多、历史信息密集，翻译时要理清时间线。「始建于」用被动 was first built，「最初是为了」用 originally to 表目的。「东起……西至……」是描述地理走向的固定句式，译作 stretching from ... in the east to ... in the west。「崇山峻岭」四字格译作 mountains and ridges。「不到长城非好汉」是谚语，需意译并保留其豪迈语气。数字「两万多公里」译为 over 20,000 kilometers，注意千分位。「列入《世界遗产名录》」译为 was listed as a World Heritage Site。常见失分点是时态混乱（历史事件用过去时、现状用现在时）和谚语硬译。',
    vocab: [
      { word: 'construction', phonetic: '/kənˈstrʌkʃn/', meaning: '建筑；建造' },
      { word: 'project', phonetic: '/ˈprɒdʒekt/', meaning: '工程；项目' },
      { word: 'invasion', phonetic: '/ɪnˈveɪʒn/', meaning: '入侵' },
      { word: 'nomadic', phonetic: '/nəʊˈmædɪk/', meaning: '游牧的' },
      { word: 'tribe', phonetic: '/traɪb/', meaning: '部落' },
      { word: 'stretch', phonetic: '/stretʃ/', meaning: '延伸；绵延' },
      { word: 'ridge', phonetic: '/rɪdʒ/', meaning: '山脊' },
      { word: 'magnificent', phonetic: '/mæɡˈnɪfɪsnt/', meaning: '雄伟的；壮丽的' },
      { word: 'destination', phonetic: '/ˌdestɪˈneɪʃn/', meaning: '目的地' },
      { word: 'heritage', phonetic: '/ˈherɪtɪdʒ/', meaning: '遗产' }
    ]
  },
  {
    id: 'trans-7',
    title: '京剧',
    source: '真题改编',
    chinese: '京剧是中国最具代表性的传统戏曲，被誉为中国的「国粹」。它形成于两百多年前的清代，融合了唱、念、做、打等多种形式，通过精美的脸谱、华丽的服饰和独特的唱腔讲述故事。京剧的角色分为生、旦、净、丑四大行当，不同颜色的脸谱象征不同性格。虽然现代社会娱乐方式日益丰富，京剧的观众有所减少，但国家正通过多种措施保护这一瑰宝，越来越多的年轻人也开始走进剧场，感受其魅力。',
    reference: 'Peking Opera is one of the most representative forms of traditional Chinese opera and is known as the quintessence of Chinese culture. It took shape more than two hundred years ago during the Qing Dynasty, combining singing, recitation, acting and acrobatic fighting, and telling historical stories through exquisite facial makeup, gorgeous costumes and distinctive singing styles. Its roles are divided into four main types, namely sheng, dan, jing and chou, and face makeup in different colors symbolizes different personalities. Although modern society offers increasingly diverse forms of entertainment and the audience has declined somewhat, the country is taking measures to protect this artistic treasure, and more and more young people are beginning to step into theaters to enjoy its unique charm.',
    keyWords: [
      { cn: '国粹', en: 'quintessence of Chinese culture', note: '不可直译 national essence' },
      { cn: '唱念做打', en: 'singing, recitation, acting and acrobatic fighting', note: '四个术语逐一译出' },
      { cn: '脸谱', en: 'facial makeup', note: '不可译 face painting' },
      { cn: '行当', en: 'role type / category', note: '戏曲术语' },
      { cn: '生旦净丑', en: 'sheng, dan, jing, chou', note: '音译专有名词' },
      { cn: '唱腔', en: 'singing style', note: '固定搭配' },
      { cn: '象征', en: 'symbolize', note: '动词' },
      { cn: '艺术瑰宝', en: 'artistic treasure', note: '比喻义' }
    ],
    sentencePatterns: [
      '「被誉为……」——be known as / be hailed as，被动语态，注意「国粹」的译法。',
      '「融合了唱、念、做、打等多种表演形式」——combining ... 现在分词短语作状语，四个术语用 and 连接。',
      '「通过……来讲述……」——through ... 介词短语表方式，后接 telling historical stories 动名词。',
      '「分为生、旦、净、丑四大行当」——be divided into four main types, namely sheng, dan, jing and chou，用 namely 引出专有名词。',
      '「虽然……但……」——Although 引导让步状语从句，主句不再用 but，中文的「但是」只能省去。'
    ],
    tips: '京剧篇文化术语密集，是翻译高分区也是失分区。「国粹」要译作 quintessence of Chinese culture，不可直译。「唱念做打」是四个专业术语，须逐一译出：singing, recitation, acting and acrobatic fighting。「生旦净丑」是专有名词，直接音译 sheng, dan, jing, chou 并用 namely 引出。「脸谱」译作 facial makeup，而非 face painting。「虽然……但是」在英文中只能用一个连词，用了 Although 就不能再用 but，这是常见语法失分点。时态上「形成于两百多年前」用过去时，「正采取措施」用现在进行时。「日益丰富」译作 increasingly diverse。',
    vocab: [
      { word: 'representative', phonetic: '/ˌreprɪˈzentətɪv/', meaning: '代表性的' },
      { word: 'opera', phonetic: '/ˈɒprə/', meaning: '歌剧；戏曲' },
      { word: 'quintessence', phonetic: '/kwɪnˈtesns/', meaning: '精华；精髓' },
      { word: 'recitation', phonetic: '/ˌresɪˈteɪʃn/', meaning: '念白；朗诵' },
      { word: 'acrobatic', phonetic: '/ˌækrəˈbætɪk/', meaning: '杂技的' },
      { word: 'exquisite', phonetic: '/ɪkˈskwɪzɪt/', meaning: '精美的；精致的' },
      { word: 'makeup', phonetic: '/ˈmeɪkʌp/', meaning: '化妆；脸谱' },
      { word: 'gorgeous', phonetic: '/ˈɡɔːdʒəs/', meaning: '华丽的；绚丽的' },
      { word: 'symbolize', phonetic: '/ˈsɪmbəlaɪz/', meaning: '象征' },
      { word: 'charm', phonetic: '/tʃɑːm/', meaning: '魅力' }
    ]
  },
{
    id: 'trans-8',
    title: '移动支付',
    source: '真题改编',
    chinese: '近年来，移动支付在中国发展迅速，已成为人们日常生活中不可或缺的一部分。无论是大型商场还是街头小摊，人们只需用手机扫一下二维码，就可以完成付款，无需携带现金或银行卡。移动支付不仅方便快捷，还改变了人们的消费习惯，越来越多的人开始在网上购物、订外卖、缴纳水电费。然而，移动支付也带来了一些问题，比如个人信息泄露的风险。专家提醒人们在使用移动支付时要注意保护自己的账户安全，不要随意连接公共无线网络。',
    reference: 'In recent years, mobile payment has developed rapidly in China and has become an indispensable part of people\'s daily life. Whether in large shopping malls or at street stalls, people can complete a payment by simply scanning a QR code with their phones, without carrying cash or bank cards. Mobile payment is not only convenient and fast but also changes people\'s consumption habits; more and more people have begun to shop online, order takeout, and pay their water and electricity bills. However, mobile payment has also brought about some problems, such as the risk of personal information leakage. Experts remind people to protect their account security when using mobile payment and not to connect to public wireless networks at will.',
    keyWords: [
      { cn: '移动支付', en: 'mobile payment', note: '科技类热词，注意 mobile 不可漏译' },
      { cn: '不可或缺', en: 'indispensable', note: '形容词，作定语或表语' },
      { cn: '二维码', en: 'QR code', note: '扫码支付专有名词' },
      { cn: '扫一下', en: 'scan', note: '动词，scan a QR code' },
      { cn: '街头小摊', en: 'street stalls', note: 'stall 表摊点' },
      { cn: '消费习惯', en: 'consumption habits', note: 'consumption 表消费' },
      { cn: '缴纳水电费', en: 'pay water and electricity bills', note: 'bill 表账单' },
      { cn: '信息泄露', en: 'information leakage', note: 'leakage 表泄露' },
      { cn: '公共无线网络', en: 'public wireless network', note: '也可说 public Wi-Fi' },
      { cn: '随意', en: 'at will', note: '固定短语' }
    ],
    sentencePatterns: [
      '「无论是……还是……」——用 whether ... or ... 引导让步状语从句，如 whether in large shopping malls or at street stalls。',
      '「无需携带现金或银行卡」——用介词短语 without carrying cash or bank cards 处理，比补主语从句更简洁。',
      '「不仅……还……」——not only ... but also ... 结构；分号连接两个并列分句，避免句子过长。',
      '「越来越多的人开始……」——more and more people have begun to ...，用现在完成时强调变化已发生。',
      '「比如……」——用 such as 引出例子，比 for example 更适合句中列举。'
    ],
    tips: '本篇是科技生活主题翻译，难点在于中文长句的拆分与语序调整。第一句「已成为……不可或缺的一部分」中「近年来」作时间状语置于句首，主句用现在完成时 has developed rapidly。「无需携带现金或银行卡」要处理成介词短语 without carrying ...，避免生硬地另起一句。注意「扫一下二维码」中「扫」要用 scan，不能译成 sweep。「水电费」要译成 water and electricity bills，不能逐字译。「专家提醒人们……不要随意连接公共无线网络」中「提醒……不要做某事」用 remind sb not to do sth 结构。时态上，「已改变」「开始」等表持续影响的动词用现在完成时。',
    vocab: [
      { word: 'mobile payment', phonetic: '/ˌməʊbaɪl ˈpeɪmənt/', meaning: '移动支付' },
      { word: 'indispensable', phonetic: '/ˌɪndɪˈspensəbl/', meaning: '不可或缺的' },
      { word: 'mall', phonetic: '/mɔːl/', meaning: '购物中心' },
      { word: 'stall', phonetic: '/stɔːl/', meaning: '摊位；货摊' },
      { word: 'scan', phonetic: '/skæn/', meaning: '扫描' },
      { word: 'consumption', phonetic: '/kənˈsʌmpʃn/', meaning: '消费；消耗' },
      { word: 'takeout', phonetic: '/ˈteɪkaʊt/', meaning: '外卖' },
      { word: 'leakage', phonetic: '/ˈliːkɪdʒ/', meaning: '泄露；渗漏' },
      { word: 'security', phonetic: '/sɪˈkjʊərəti/', meaning: '安全；保障' },
      { word: 'wireless', phonetic: '/ˈwaɪələs/', meaning: '无线的' }
    ]
  },
  {
    id: 'trans-9',
    title: '大熊猫',
    source: '真题改编',
    chinese: '大熊猫是中国独有的珍稀动物，被誉为"国宝"，深受全世界人民的喜爱。大熊猫主要生活在四川、陕西和甘肃的高山竹林中，以竹子为主要食物。成年大熊猫每天要花十多个小时进食，以获取足够的营养。由于栖息地的破坏和非法捕猎，大熊猫的数量曾一度急剧下降，一度濒临灭绝。幸运的是，中国政府采取了有效的保护措施，建立了许多自然保护区，大熊猫的数量近年来稳步回升。如今，大熊猫不仅是中国自然保护的象征，也是中外文化交流的友好使者。',
    reference: 'The giant panda is a rare animal unique to China. Known as the "national treasure", it is deeply loved by people all over the world. Giant pandas mainly live in the mountain bamboo forests of Sichuan, Shaanxi and Gansu, feeding mainly on bamboo. An adult panda has to spend more than ten hours a day eating in order to take in enough nutrition. Due to the destruction of their habitats and illegal hunting, the number of giant pandas once declined sharply and the animal was once on the verge of extinction. Fortunately, the Chinese government has taken effective protection measures and established many nature reserves, and the panda population has been increasing steadily in recent years. Today, the giant panda is not only a symbol of China\'s nature protection but also a friendly messenger of cultural exchanges between China and foreign countries.',
    keyWords: [
      { cn: '国宝', en: 'national treasure', note: '专有表达，treasure 表珍宝' },
      { cn: '独有的', en: 'unique to', note: 'be unique to 表"为……所特有"' },
      { cn: '竹林', en: 'bamboo forest', note: 'bamboo 表竹子' },
      { cn: '以……为食', en: 'feed on', note: '动词短语，feed mainly on bamboo' },
      { cn: '栖息地', en: 'habitat', note: '动物栖息地专用词' },
      { cn: '非法捕猎', en: 'illegal hunting', note: 'illegal 表非法的' },
      { cn: '濒临灭绝', en: 'on the verge of extinction', note: 'verge 表边缘，extinction 表灭绝' },
      { cn: '自然保护区', en: 'nature reserves', note: 'reserve 表保护区' },
      { cn: '稳步回升', en: 'increase steadily', note: 'steadily 表稳定地' },
      { cn: '友好使者', en: 'friendly messenger', note: 'messenger 表使者' }
    ],
    sentencePatterns: [
      '「被誉为……」，用过去分词作状语 Known as the "national treasure"，置于主句前，简洁地道。',
      '「……深受……喜爱」——it is deeply loved by ...，被动语态，loved by 表"被喜爱"。',
      '「为了获取足够的营养」——用 in order to take in enough nutrition 表目的，in order to 比 to 更正式。',
      '「数量曾一度急剧下降」——the number of ... once declined sharply，once 表"曾经"。',
      '「不仅……也是……」——not only ... but also ... 连接两个表语，注意 not only 后接 a symbol of，but also 后接 a friendly messenger，结构平行。'
    ],
    tips: '本篇是文化动物主题翻译，难点在于中文专有表达的转换和被动语态的运用。「国宝」不能直译成 national baby，要译成 national treasure；「独有的」用 be unique to 而非 only have。「被誉为」用过去分词 Known as 作伴随状语，这是地道写法。「以竹子为主要食物」用 feed mainly on bamboo 处理，「以……为食」对应 feed on。「一度急剧下降、濒临灭绝」要体现时间层次：once declined sharply, was once on the verge of extinction。「近年来稳步回升」用现在完成进行或现在完成时 has been increasing steadily 表达持续回升。全文时态注意区分：历史事实用一般过去时，政府措施和现状用现在完成时或一般现在时。',
    vocab: [
      { word: 'rare', phonetic: '/reə(r)/', meaning: '稀有的；珍贵的' },
      { word: 'treasure', phonetic: '/ˈtreʒə(r)/', meaning: '珍宝；财富' },
      { word: 'bamboo', phonetic: '/bæmˈbuː/', meaning: '竹子' },
      { word: 'nutrition', phonetic: '/njuˈtrɪʃn/', meaning: '营养' },
      { word: 'habitat', phonetic: '/ˈhæbɪtæt/', meaning: '栖息地' },
      { word: 'illegal', phonetic: '/ɪˈliːɡl/', meaning: '非法的' },
      { word: 'decline', phonetic: '/dɪˈklaɪn/', meaning: '下降；减少' },
      { word: 'extinction', phonetic: '/ɪkˈstɪŋkʃn/', meaning: '灭绝；绝种' },
      { word: 'reserve', phonetic: '/rɪˈzɜːv/', meaning: '保护区；储备' },
      { word: 'messenger', phonetic: '/ˈmesɪndʒə(r)/', meaning: '信使；使者' }
    ]
  }
];
