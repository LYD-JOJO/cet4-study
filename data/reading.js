const READING_DATA = [
  {
    id: 'read-careful-1',
    type: 'careful',
    title: 'The Housing Crisis and "Living Big"',
    source: '真题 · 2023年6月第一套',
    passage: 'The United States is facing a housing crisis: Affordable housing is inadequate, while luxury homes abound, and homelessness remains a persistent problem. Despite this, popular culture and the housing industry market happiness as living with both more space and more amenities. Big houses are advertised as a reward for hard work and diligence, turning housing from a basic necessity into a luxury.\nThis is reflected in our homes. The average single-family home built in the United States before 1970 was less than 1,500 square feet in size. By 2016, the average size of a new, single-family home was 2,422 square feet. What\'s more, homes built in the 2000s were more likely than earlier models to have more of all types of spaces: bedrooms, bathrooms, living rooms, dining rooms, recreation rooms and garages.\nThere are consequences of living big. As middle-class houses have grown larger, two things have happened. First, large houses take time to maintain, so cleaners and other low-wage service workers are required to keep these houses in order. Second, once-public spaces, where people from diverse backgrounds used to come together, have increasingly become privatized, leading to a reduction in the number of public facilities available to all, and a reduced quality of life for many. Take swimming pools. While in 1950, only 2,500 U.S. families owned pools, by 1999 this number was 4 million. At the same time, public municipal pools were often closed, leaving low-income people nowhere to swim.\nThe trend for bigger housing thus poses ethical questions. Should Americans accept a system in which the middle and upper classes enjoy a luxurious lifestyle, using the low-wage labor of others? Are we willing to accept a system in which an increase in amenities purchased by the affluent means a reduction in amenities for the poor?\nI believe neither is acceptable. We must change the way we think: living well does not need to mean having more private spaces; instead, it could mean having more public spaces. A better goal than building bigger houses for some is to create more publicly accessible spaces and amenities for all.',
    questions: [
      {
        q: 'What are big houses promoted to be in the United States?',
        options: ['A luxury for the homeless.', 'A reward for industriousness.', 'An abundant source of comforts.', 'An absolute necessity for happiness.'],        answer: 1,
        explanation: '细节题。定位第一段“Big houses are advertised as a reward for hard work and diligence”，即大房子被宣传为勤劳努力的回报，故选 B 项“A reward for industriousness”。A 说无家可归者的奢侈品、C 说舒适之源、D 说幸福的绝对必需品，均与原文不符。'
      },
      {
        q: 'What is one of the consequences of living big?',
        options: ['Many Americans\' quality of life has become lower.', 'People from diverse backgrounds no longer socialize.', 'People no longer have access to public swimming pools.', 'Many Americans\' private life has been negatively affected.'],        answer: 0,
        explanation: '细节题。定位第三段“once-public spaces... have increasingly become privatized, leading to a reduction in the number of public facilities available to all, and a reduced quality of life for many”，公共空间私有化导致公共设施减少、许多人生活质量下降，故选 A。B 说不同背景的人不再交往，过于绝对；C 说人们无法使用公共泳池，原文只举了低收人群体的例子；D 说私人生活受负面影响，与原文方向相反。'
      },
      {
        q: 'What questions arise from living big?',
        options: ['Questions related to moral principles.', 'Questions having to do with labor cost.', 'Questions about what lifestyle to promote.', 'Questions concerning housing development.'],        answer: 0,
        explanation: '细节题。定位第四段“The trend for bigger housing thus poses ethical questions”，即大房趋势引发了伦理（道德）问题，故选 A 项“Questions related to moral principles”。B、C、D 均与原文的“ethical”不符。'
      },
      {
        q: 'What kind of social system does the author think is unacceptable?',
        options: ['One in which the wealthy exploit the low-wage laborers building their houses.', 'One in which the rich purchase amenities at an increasingly unjustifiable price.', 'One in which the upper classes deprive the lower classes of affordable housing.', 'One in which the affluent enjoy a more comfortable life at the expense of the poor.'],        answer: 3,
        explanation: '细节题。定位第四段作者的反问“Are we willing to accept a system in which an increase in amenities purchased by the affluent means a reduction in amenities for the poor?”，即富人享受更多便利是以穷人的便利减少为代价，作者认为这种制度不可接受，故选 D。A 说压榨建造房屋的低薪劳工，B 说以越来越不合理的高价购买便利，C 说剥夺下层阶级的廉价住房，都不如 D 准确对应原文。'
      },
      {
        q: 'What does the author advocate for people to live well?',
        options: ['Finding ways to turn private spaces into public ones.', 'Building more houses affordable to those less affluent.', 'More public spaces created for everyone to enjoy.', 'All amenities made accessible to the rich and the poor alike.'],        answer: 2,
        explanation: '观点态度题。定位末段“living well does not need to mean having more private spaces; instead, it could mean having more public spaces... to create more publicly accessible spaces and amenities for all”，作者主张为所有人创造更多公共空间和设施，故选 C。A 说把私人空间转为公共空间，B 说建更多廉价房，D 说所有便利对贫富一视同仁，均非作者明确主张。'
      }
    ],
    vocab: [
      { word: 'inadequate', phonetic: '/ɪnˈædɪkwət/', meaning: '不足的；不充分的' },
      { word: 'abound', phonetic: '/əˈbaʊnd/', meaning: '大量存在；充裕' },
      { word: 'persistent', phonetic: '/pəˈsɪstənt/', meaning: '持续的；顽固的' },
      { word: 'amenity', phonetic: '/əˈmiːnəti/', meaning: '便利设施；生活设施' },
      { word: 'diligence', phonetic: '/ˈdɪlɪdʒəns/', meaning: '勤奋；勤勉' },
      { word: 'square feet', phonetic: '/ˌskweə ˈfiːt/', meaning: '平方英尺' },
      { word: 'diverse', phonetic: '/daɪˈvɜːs/', meaning: '多样的；不同的' },
      { word: 'privatize', phonetic: '/ˈpraɪvətaɪz/', meaning: '使私有化' },
      { word: 'municipal', phonetic: '/mjuːˈnɪsɪpl/', meaning: '市政的；市立的' },
      { word: 'ethical', phonetic: '/ˈeθɪkl/', meaning: '伦理的；道德的' },
      { word: 'affluent', phonetic: '/ˈæfluənt/', meaning: '富裕的' },
      { word: 'accessible', phonetic: '/əkˈsesəbl/', meaning: '可到达的；可使用的' }
    ]
  },
  {
    id: 'read-careful-2',
    type: 'careful',
    title: 'The Double-Edged Sword of Ambition',
    source: '真题 · 2023年6月第一套',
    passage: 'Most of us in the entrepreneurial community are blessed — or cursed — with higher-than-average ambition. Ambitious people strongly desire accomplishments and are willing to take more risks and spend more effort to get them.\nOverall, this is a positive quality, especially for people trying to build their own businesses. Apparently, if you\'re more naturally driven to set goals, you are more likely to succeed.\nActually, this isn\'t always the case. In fact, in some cases, extreme ambition may end up doing more harm than good.\nOne major side effect of excessive ambition is the tendency to focus too determinedly on one particular vision or end goal. This is problematic because it hinders your ability to adapt to new circumstances, which is vital if you want to be a successful entrepreneur. If a new competitor emerges to threaten your business, you may need to change direction, even if that means straying from your original vision. If you have too much ambition, you\'ll find this hard, if not impossible.\nFew people are successful when they try to build their first brand. Unfortunately, for the most ambitious entrepreneurs, a failure is seen as disastrous, and impossible to recover from. It\'s a clear departure from the intended plan toward the intended goal. For people with limited ambition, however, failure is viewed as something closer to reality. Remember, failure is inevitable, and every failure you survive is a learning experience.\nAmbitious people tend to be more materialistically successful than their non-ambitious counterparts. However, they\'re only slightly happier than their less-ambitious counterparts, and tend to live significantly shorter lives. This implies that even though ambitious people are more likely to achieve conventional "success," such success means nothing for their health and happiness — and if you don\'t have health and happiness, what else could possibly matter?\nClearly, some amount of ambition is good for your motivation. Without any ambition, you wouldn\'t start your own business, set or achieve goals and get far in life. But an excess of ambition can also be dangerous, putting you at risk of burnout, stubbornness and even a shorter life.',
    questions: [
      {
        q: 'What does the author think of most entrepreneurs?',
        options: ['They are more willing to risk their own lives.', 'They are more ambitious than ordinary people.', 'They achieve greater nonconventional success.', 'They have more positive qualities than most of us.'],        answer: 1,
        explanation: '细节题。定位第一段“Most of us in the entrepreneurial community are blessed — or cursed — with higher-than-average ambition”，即创业者群体大多拥有高于常人的雄心，故选 B 项“They are more ambitious than ordinary people”。A 说更愿冒生命危险、C 说取得更大的非传统成功、D 说比我们大多数人拥有更多优点，均不准确。'
      },
      {
        q: 'What does the author imply by saying "this isn\'t always the case" (Line 1, Para. 3)?',
        options: ['Ambitious people may not have a greater chance of success.', 'Ambitious people may not have more positive qualities.', 'Entrepreneurs\' ambition does as much good as harm.', 'Entrepreneurs are more naturally driven to success.'],        answer: 0,
        explanation: '指代题。第二段末说“if you\'re more naturally driven to set goals, you are more likely to succeed”（越有内驱力越可能成功），第三段开头“this isn\'t always the case”即否定这一假设——有雄心的人未必更容易成功，故选 A。B、C、D 均与原文不符。'
      },
      {
        q: 'What does the author say is of extreme importance for one to become a successful entrepreneur?',
        options: ['Holding on to one\'s original vision.', 'Being able to adapt to new situations.', 'Focusing determinedly on one particular goal.', 'Avoiding radical change in one\'s career direction.'],        answer: 1,
        explanation: '细节题。定位第四段“it hinders your ability to adapt to new circumstances, which is vital if you want to be a successful entrepreneur”，即适应新环境的能力对成功创业者至关重要，故选 B 项“Being able to adapt to new situations”。A 说坚持最初愿景、C 说专注于单一目标，恰好是作者批评的过度雄心的表现；D 说避免事业方向的根本改变，与原文相反。'
      },
      {
        q: 'How do the most ambitious entrepreneurs regard failure in their endeavor?',
        options: ['It will awaken them to reality.', 'It is a lesson they have to learn.', 'It means the end of their career.', 'It will result in a slow recovery.'],        answer: 2,
        explanation: '细节题。定位第五段“for the most ambitious entrepreneurs, a failure is seen as disastrous, and impossible to recover from”，即最有雄心的创业者把失败视为灾难性、无法恢复的事件，故选 C 项“It means the end of their career”。A 说唤醒现实、B 说必须学习的教训，是“limited ambition”人群的看法；D 未提及。'
      },
      {
        q: 'What does the author advise us to do concerning ambition?',
        options: ['Distinguish between conventional success and our life goal.', 'Follow the example of the most ambitious entrepreneurs.', 'Avoid taking unnecessary risks when starting a business.', 'Prioritize health and happiness over material success.'],        answer: 3,
        explanation: '观点态度题。定位第六段“such success means nothing for their health and happiness — and if you don\'t have health and happiness, what else could possibly matter?”，作者强调健康与幸福比物质成功更重要，故选 D 项“Prioritize health and happiness over material success”。A、B、C 均不是作者的核心建议。'
      }
    ],
    vocab: [
      { word: 'entrepreneurial', phonetic: '/ˌɒntrəprəˈnɜːriəl/', meaning: '创业的；企业家的' },
      { word: 'ambition', phonetic: '/æmˈbɪʃn/', meaning: '雄心；抱负' },
      { word: 'accomplishment', phonetic: '/əˈkʌmplɪʃmənt/', meaning: '成就；完成' },
      { word: 'excessive', phonetic: '/ɪkˈsesɪv/', meaning: '过度的；过分的' },
      { word: 'determinedly', phonetic: '/dɪˈtɜːmɪndli/', meaning: '坚决地；坚定地' },
      { word: 'hinder', phonetic: '/ˈhɪndə(r)/', meaning: '阻碍；妨碍' },
      { word: 'adapt', phonetic: '/əˈdæpt/', meaning: '适应' },
      { word: 'stray', phonetic: '/streɪ/', meaning: '偏离；走神' },
      { word: 'disastrous', phonetic: '/dɪˈzɑːstrəs/', meaning: '灾难性的' },
      { word: 'inevitable', phonetic: '/ɪnˈevɪtəbl/', meaning: '不可避免的' },
      { word: 'materialistically', phonetic: '/məˌtɪəriəˈlɪstɪkli/', meaning: '物质上' },
      { word: 'burnout', phonetic: '/ˈbɜːnaʊt/', meaning: '倦怠；精疲力竭' }
    ]
  },
  {
    id: 'read-cloze-1',
    type: 'cloze',
    title: 'The Hidden Water Cost of Your Shirt',
    source: '真题 · 2023年6月第一套',
    passage: 'You probably haven\'t taken the time to think of all the work that went into creating the shirt on your back. I mean, how hard it could be to create fabric and __1__ it into a shirt shape. Don\'t machines do all that? Well, creating fabric from cotton, which is the most __2__ clothing material, is actually a process that involves a lot of water, 2,700 liters per shirt to be __3__. Take a look at the video below from National Geographic for some more mind-blowing __4__ about cotton clothing production.\nClean water is __5__ becoming one of the most sought-after resources in the world. Given how large the __6__ and cotton industries are, they take up a lot of our fresh water demands across the world, according to The Huffington Post. The video from National Geographic was created to spread __7__ of how environmentally harmful cotton is. But the situation can be made better. Through better water management and farming practices, water usage in cotton production can be cut down by __8__ 40 percent.\nCalled "Better Cotton", this environmentally conscious product will save millions of liters of water by __9__ the demands of cotton production. Cotton doesn\'t have to go, since it is after all one of the most useful cash crops across the globe. However, as water supplies __10__, farmers and consumers need to be more conscious of the effect that these products have on the environment as a whole.',
    wordBank: ['abstracts', 'abundant', 'awareness', 'conscience', 'exact', 'increasingly', 'intense', 'mend', 'nearly', 'reckoning', 'reducing', 'sew', 'shrink', 'statistics', 'textile'],
    answers: ['sew', 'abundant', 'exact', 'statistics', 'increasingly', 'textile', 'awareness', 'nearly', 'reducing', 'shrink'],
    explanations: {
      '1': '考查动词。句意：把布料“缝”成衬衫的形状。sew（缝）与 fabric、shirt shape 搭配最自然，故选 sew。干扰项 mend 指“修补（破损物）”，与“制成衬衫”语境不符；abstracts、reckoning 语义不通。',
      '2': '考查形容词。句意：棉花是最“丰富的”服装材料。abundant（丰富的、大量的）修饰 clothing material 语义通顺，故选 abundant。intense（强烈的）不能修饰材料数量；exact 语义不通。',
      '3': '考查固定表达。句意：确切地说，每件衬衫要消耗 2,700 升水。to be exact（确切地说）是固定插入语，故选 exact。',
      '4': '考查名词。句意：再看一下《国家地理》下面这个关于棉服生产的令人震惊的“数据/统计”。mind-blowing statistics（惊人的数据）搭配合理，故选 statistics。',
      '5': '考查副词。句意：净水正“日益”成为世界上最抢手的资源之一。increasingly（越来越、日益）修饰 becoming，故选 increasingly。',
      '6': '考查名词。句意：纺织业和棉花产业规模庞大。the textile and cotton industries 是固定搭配（纺织业），故选 textile。',
      '7': '考查名词。句意：制作这个视频是为了传播人们对棉花环境危害性的“认识”。spread awareness of（传播……的认识）为固定搭配，故选 awareness。注意区分 conscience（良心）。',
      '8': '考查副词。句意：棉花生产中的用水量可“几乎”减少 40%。nearly（将近、几乎）修饰 40 percent，故选 nearly。',
      '9': '考查动词 -ing。句意：通过“减少”棉花生产的需求，节约数百万升水。by reducing（通过减少）语义通顺，故选 reducing。注意后接 the demands，语义为“降低需求”。',
      '10': '考查动词。句意：随着供水“减少/萎缩”。as water supplies shrink（随着供水减少）搭配合理，故选 shrink。'
    },
    vocab: [
      { word: 'fabric', phonetic: '/ˈfæbrɪk/', meaning: '布料；织物' },
      { word: 'sew', phonetic: '/səʊ/', meaning: '缝；缝制' },
      { word: 'abundant', phonetic: '/əˈbʌndənt/', meaning: '丰富的；充足的' },
      { word: 'mind-blowing', phonetic: '/ˌmaɪnd ˈbləʊɪŋ/', meaning: '令人震惊的' },
      { word: 'statistics', phonetic: '/stəˈtɪstɪks/', meaning: '统计数据' },
      { word: 'sought-after', phonetic: '/ˈsɔːt ɑːftə(r)/', meaning: '抢手的；广受欢迎的' },
      { word: 'textile', phonetic: '/ˈtekstaɪl/', meaning: '纺织品；纺织业' },
      { word: 'spread awareness', phonetic: '/ˌspred əˈweənəs/', meaning: '传播认识；提高意识' },
      { word: 'cash crop', phonetic: '/ˈkæʃ krɒp/', meaning: '经济作物' },
      { word: 'shrink', phonetic: '/ʃrɪŋk/', meaning: '减少；收缩' }
    ]
  },
  {
    id: 'read-match-1',
    type: 'match',
    title: 'The Spoken Web: Talking to Your Devices',
    source: '真题 · 2023年6月第一套',
    paragraphs: [
      'We\'re growing more used to chatting to our computers, phones and smart speakers through voice assistants like Amazon\'s Alexa, Apple\'s Siri and Microsoft\'s Cortana. Blind and partially sighted people have been using text-to-speech converters for decades.',
      'Out of these assistants, Siri is the most well-known. The assistant uses voice inquiries and a natural-language user interface to answer questions. The software adapts to users\' individual language usages, searches, and preferences, with continuing use.',
      'Some think voice could soon take over from typing and clicking as the main way to interact online. But what are the challenges of moving to "the spoken web"?',
      'What use is written online content if you can\'t read? That is the situation facing illiterate African farmers. They are often denied crucial information the web offers many others. With a literacy rate in some parts of Africa at only 22.6%, farmers are often "underpaid for their produce because they might be unaware of the prevailing prices," says Francis Dittoh, a researcher behind Mr Meteo, a speech-based weather information service.',
      '"The most frequently heard complaint is about rainfall predictions," says Mr Dittoh, who lives in Tamale, northern Ghana. "They tell us the methods their forefathers used to predict the weather don\'t seem to work as well these days." This is down to climate change, he believes. Yet knowing when it\'s going to rain is vital for farmers wanting to sow seeds, irrigate crops or take their animals out to the fields to feed on grass.',
      'Mr Dittoh says the idea of converting online weather reports into speech came from the farmers themselves, after a workshop in the village of Guabuligah. "They came up with this," he says. Mr Meteo takes the online weather forecast, converts it to a short recording in the appropriate language and makes it available on a basic phone. Farmers ring up to receive the information. The local language Dagbani is spoken by 1.2 million people but is not served by any online translation applications. The service was designed to be cheap and easy to run, says Mr Dittoh. He plans to begin field tests this month, working with Tamale\'s Savanna Agricultural Research Institute.',
      'The spoken web could also help the one-in-five adults in Europe and the U.S. with poor reading skills. But building the spoken web — web-to-voice and voice-to-web — isn\'t straightforward. For software to understand "pizza is served at Italian restaurants" is easy. To cover multiple domains and to be able to have a conversation with users on every single topic is still a long way off.',
      'So although many computer assistants can answer simple questions about the weather and play music for us, anything resembling a wide-ranging human conversation is decades away. Artificial intelligence just isn\'t smart enough yet. Even turning your voice into text — automatic speech recognition — is one of the hardest problems to solve, as there are as many ways to pronounce things as there are people on the planet.',
      'Siri has often been praised for its ability to interpret our casual language and deliver very specific and accurate results, sometimes even providing additional information. But it is still somewhat restricted, particularly when the language moves away from stiffer commands into more human interactions. In one example, the phrase "Send a text to Jason, Clint, Sam, and Lee saying we\'re having dinner at Silver Cloud restaurant" was interpreted as sending a message to Jason only, containing the text "Clint Sam and Lee saying we\'re having dinner at Silver Cloud restaurant". It has also been noted that Siri lacks a proper editing function.',
      'Using voice interaction feels far more intimate than surfing the net the old-fashioned way. This is intentional, as the informal tone of the assistant helps create an emotional attachment. But if something speaks, it must also listen. Our phones are always near us and they are collecting data about us all the time. This has already raised privacy concerns. The American Civil Liberties Union has stated that digital assistants create a threat to privacy from hackers. Some people have other concerns. They worry assistants will one day be used to deliver advertising directly to us.',
      'But digital voices need more personality to make them popular. Robots are not yet witty; Siri is boring. The benefits of using voice instead of tapping fingers obviously depend on the context. Doctors completing online forms about their patients by speech, for example, can dictate 150 words a minute, three times faster than typing on a keyboard. This enables them to spend less time on administration and more time with patients.',
      'Last year, speech recognition company Nuance helped a doctors\' surgery in Dukinfield, near Manchester, set up a speech system for the practice\'s six doctors. Now they can dictate notes on a patient\'s health condition and treatment and a smart assistant automatically enters the information into the right fields of a web form. Previously, the doctors made voice recordings that were then transcribed by secretaries — a process that was costly and likely to cause delays. The new system means letters to patients now have more detail.',
      'Using voice also makes sense when you\'re doing other things with your hands. Think about when you\'re cooking, and you just want to know what the next step in the recipe is. Your hands are covered with oil; you\'re not going to get on the iPad, so it\'s a lot more natural to talk. And speech obviously makes sense when you\'re driving. In the U.S., 29% of drivers admit they surf behind the wheel, according to insurance firm State Farm. This is up from 13% in 2009. No wonder using mobile phones while driving causes more crashes a year than drink driving, says the U.S. National Safety Council.'
    ],
    questions: [
      {
        q: 'According to Francis Dittoh, their speech-based weather information service was meant to be inexpensive and easy to use.',
        answer: 'F',
        explanation: '定位 F 段“The service was designed to be cheap and easy to run, says Mr Dittoh”，即该服务的设计初衷是廉价且易于运行，与题干“inexpensive and easy to use”对应，故选 F。'
      },
      {
        q: 'Using voice instead of typing enables doctors to spend more time taking care of patients.',
        answer: 'K',
        explanation: '定位 K 段“This enables them to spend less time on administration and more time with patients”，即医生用语音录入能减少行政时间、把更多时间留给患者，与题干对应，故选 K。'
      },
      {
        q: 'It is extremely difficult to convert voice into text because of different pronunciations.',
        answer: 'H',
        explanation: '定位 H 段“turning your voice into text — automatic speech recognition — is one of the hardest problems to solve, as there are as many ways to pronounce things as there are people”，即把语音转文字极难，因为发音因人而异，与题干对应，故选 H。'
      },
      {
        q: 'African farmers unable to read often don\'t have access to important information conveyed online.',
        answer: 'D',
        explanation: '定位 D 段“What use is written online content if you can\'t read? ... They are often denied crucial information the web offers many others”，即不识字的非洲农民无法获取网上重要信息，与题干对应，故选 D。'
      },
      {
        q: 'Some phone users worry advertisers will take advantage of voice assistants to send ads directly to them.',
        answer: 'J',
        explanation: '定位 J 段“They worry assistants will one day be used to deliver advertising directly to us”，即有人担心语音助手将来被用来直接向用户推送广告，与题干对应，故选 J。'
      },
      {
        q: 'The spoken web is helpful when one\'s hands are occupied.',
        answer: 'M',
        explanation: '定位 M 段“Using voice also makes sense when you\'re doing other things with your hands”，即双手被占用时用语音很合理，与题干“hands are occupied”对应，故选 M。'
      },
      {
        q: 'Some people believe online interaction would soon depend mainly on voice.',
        answer: 'C',
        explanation: '定位 C 段“Some think voice could soon take over from typing and clicking as the main way to interact online”，即有人认为语音很快会取代打字和点击成为主要的网络交互方式，与题干对应，故选 C。'
      },
      {
        q: 'Setting up a spoken web is by no means an easy task.',
        answer: 'G',
        explanation: '定位 G 段“building the spoken web — web-to-voice and voice-to-web — isn\'t straightforward”，即构建语音网络绝非易事，与题干“by no means an easy task”对应，故选 G。'
      },
      {
        q: 'Weather information is extremely important to farmers.',
        answer: 'E',
        explanation: '定位 E 段“Yet knowing when it\'s going to rain is vital for farmers wanting to sow seeds, irrigate crops or take their animals out to the fields”，即对要播种、灌溉、放牧的农民来说，天气信息至关重要，与题干对应，故选 E。'
      },
      {
        q: 'Some people are concerned about privacy because their phones are constantly collecting their personal information.',
        answer: 'J',
        explanation: '定位 J 段“Our phones are always near us and they are collecting data about us all the time. This has already raised privacy concerns”，即手机不断收集用户数据引发了隐私担忧，与题干对应，故选 J。'
      }
    ],
    vocab: [
      { word: 'voice assistant', phonetic: '/ˌvɔɪs əˈsɪstənt/', meaning: '语音助手' },
      { word: 'illiterate', phonetic: '/ɪˈlɪtərət/', meaning: '不识字的；文盲的' },
      { word: 'literacy rate', phonetic: '/ˈlɪtərəsi reɪt/', meaning: '识字率' },
      { word: 'prevailing', phonetic: '/prɪˈveɪlɪŋ/', meaning: '现行的；普遍的' },
      { word: 'forecast', phonetic: '/ˈfɔːkɑːst/', meaning: '预报；预测' },
      { word: 'irrigate', phonetic: '/ˈɪrɪɡeɪt/', meaning: '灌溉' },
      { word: 'straightforward', phonetic: '/ˌstreɪtˈfɔːwəd/', meaning: '简单的；直接的' },
      { word: 'intimate', phonetic: '/ˈɪntɪmət/', meaning: '亲密的；私密的' },
      { word: 'privacy', phonetic: '/ˈprɪvəsi/', meaning: '隐私' },
      { word: 'dictate', phonetic: '/dɪkˈteɪt/', meaning: '口述；听写' },
      { word: 'transcribe', phonetic: '/trænˈskraɪb/', meaning: '转录；誊写' },
      { word: 'recipe', phonetic: '/ˈresəpi/', meaning: '食谱；配方' }
    ]
  },
  {
    id: 'read-careful-3',
    type: 'careful',
    title: 'The Soda Tax in Philadelphia',
    source: '真题 · 2019年12月第三套',
    passage: 'The fifth largest city in the US passed a significant soda tax proposal that will levy 1.5 cents per liquid ounce on distributors.\nPhiladelphia\'s new measure was approved by a 13 to 4 city council vote. It sets a new bar for similar initiatives across the country. It is proof that taxes on sugary drinks can win substantial support outside super-liberal areas. Until now, the only city to successfully pass and implement a soda tax was Berkeley, California, in 2014.\nThe tax will apply to regular and diet sodas, as well as other drinks with added sugar, such as Gatorade and iced teas. It\'s expected to raise $410 million over the next five years, most of which will go toward funding a universal pre-kindergarten program for the city.\nWhile the city council vote was met with applause inside the council room, opponents to the measure, including soda lobbyists, made sharp criticisms and a promise to challenge the tax in court.\n"The tax passed today unfairly singles out beverages — including low- and no-calorie choices," said Lauren Kane, spokeswoman for the American Beverage Association. "But most importantly, it is against the law. So we will side with the majority of the people of Philadelphia who oppose this tax and take legal action to stop it."\nAn industry-backed anti-tax campaign has spent at least $4 million on advertisements. The ads criticized the measure, characterizing it as a "grocery tax".\nPublic health groups applauded the approved tax as a step toward fixing certain lasting health issues that plague Americans. "The move to recapture a small part of the profits from an industry that pushed a product that contributes to diabetes, obesity and heart disease in poorer communities in order to reinvest in those communities will sure be inspirational to many other places," said Jim Krieger, executive director of Healthy Food America. "Indeed, we are already hearing from some of them. It\'s not \'just Berkeley\' anymore."\nSimilar measures in California\'s Albany, Oakland, San Francisco and Colorado\'s Boulder are becoming hot-button issues. Health advocacy groups have hinted that even more might be coming.',
    questions: [
      {
        q: 'What does the passage say about the newly-approved soda tax in Philadelphia?',
        options: ['It will change the lifestyle of many consumers.', 'It may encourage other US cities to follow suit.', 'It will cut soda consumption among low-income communities.', 'It may influence the marketing strategies of the soda business.'],        answer: 1,
        explanation: '细节题。定位第二段“It sets a new bar for similar initiatives across the country... It is proof that taxes on sugary drinks can win substantial support outside super-liberal areas”，即费城的汽水税为全国类似举措树立了新标杆、可能带动其他城市效仿，故选 B 项“It may encourage other US cities to follow suit”。A、C、D 文中均未提及。'
      },
      {
        q: 'What will the opponents probably do to respond to the soda tax proposal?',
        options: ['Bargain with the city council.', 'Refuse to pay additional tax.', 'Take legal action against it.', 'Try to win public support.'],        answer: 2,
        explanation: '细节题。定位第四段“opponents... made sharp criticisms and a promise to challenge the tax in court”，以及第五段“we will side with... and take legal action to stop it”，即反对者将通过法律途径提起诉讼，故选 C 项“Take legal action against it”。A、B、D 均不准确。'
      },
      {
        q: 'What did the industry-backed anti-tax campaign do about the soda tax proposal?',
        options: ['It tried to arouse hostile feelings among consumers.', 'It tried to win grocers\' support against the measure.', 'It kept sending letters of protest to the media.', 'It criticized the measure through advertising.'],        answer: 3,
        explanation: '细节题。定位第六段“An industry-backed anti-tax campaign has spent at least $4 million on advertisements. The ads criticized the measure, characterizing it as a \'grocery tax\'”，即行业支持的反税运动斥巨资投放广告批评该税，故选 D 项“It criticized the measure through advertising”。A、B、C 均未提及。'
      },
      {
        q: 'What did public health groups think the soda tax would do?',
        options: ['Alert people to the risk of sugar-induced diseases.', 'Help people to fix certain long-time health issues.', 'Add to the fund for their research on diseases.', 'Benefit low-income people across the country.'],        answer: 1,
        explanation: '细节题。定位第七段“Public health groups applauded the approved tax as a step toward fixing certain lasting health issues that plague Americans”，即公共卫生组织认为该税有助于解决困扰美国人已久的健康问题，故选 B 项“Help people to fix certain long-time health issues”。A 说提醒人们注意糖诱发疾病的风险，C 说增加研究资金，D 说让全国低收入人群受益，均不准确。'
      },
      {
        q: 'What do we learn about similar measures concerning the soda tax in some other cities?',
        options: ['They are becoming rather sensitive issues.', 'They are spreading panic in the soda industry.', 'They are reducing the incidence of sugar-induced diseases.', 'They are taking away a lot of profit from the soda industry.'],        answer: 0,
        explanation: '细节题。定位末段“Similar measures in California\'s Albany, Oakland, San Francisco and Colorado\'s Boulder are becoming hot-button issues”，即其他城市类似的举措正成为热点敏感话题，故选 A 项“They are becoming rather sensitive issues”。B、C、D 文中均未提及。'
      }
    ],
    vocab: [
      { word: 'levy', phonetic: '/ˈlevi/', meaning: '征收（税）' },
      { word: 'ounce', phonetic: '/aʊns/', meaning: '盎司' },
      { word: 'distributor', phonetic: '/dɪˈstrɪbjətə(r)/', meaning: '经销商；分销商' },
      { word: 'initiative', phonetic: '/ɪˈnɪʃətɪv/', meaning: '倡议；举措' },
      { word: 'substantial', phonetic: '/səbˈstænʃl/', meaning: '大量的；实质的' },
      { word: 'implement', phonetic: '/ˈɪmplɪment/', meaning: '实施；执行' },
      { word: 'lobbyist', phonetic: '/ˈlɒbiɪst/', meaning: '说客；游说者' },
      { word: 'single out', phonetic: '/ˌsɪŋɡl ˈaʊt/', meaning: '单独挑出；特别指出' },
      { word: 'applaud', phonetic: '/əˈplɔːd/', meaning: '称赞；鼓掌' },
      { word: 'plague', phonetic: '/pleɪɡ/', meaning: '折磨；困扰' },
      { word: 'inspirational', phonetic: '/ˌɪnspəˈreɪʃənl/', meaning: '鼓舞人心的' },
      { word: 'hot-button', phonetic: '/ˌhɒt ˈbʌtn/', meaning: '热点敏感的' },
      { word: 'advocacy', phonetic: '/ˈædvəkəsi/', meaning: '倡导；支持' }
    ]
  },
  {
    id: 'read-careful-4',
    type: 'careful',
    title: 'The Hidden Carbon Cost of Microwaves',
    source: '真题 · 2019年12月第三套',
    passage: 'Popping food into the microwave for a couple of minutes may seem utterly harmless, and Europe\'s stock of these quick-cooking ovens emit as much carbon as nearly 7 million cars, a new study has found, and the problem is growing. With costs falling and kitchen appliances becoming "status" symbols, owners are throwing many microwaves away after an average of eight years. This is pushing sales of new microwaves which are expected to reach 135 million annually in the EU by the end of the decade.\nA study by the University of Manchester worked out the emissions of carbon dioxide — the main greenhouse gas responsible for climate change — at every stage of microwaves, from manufacture to waste disposal. "It is electricity consumption by microwaves that has the biggest impact on the environment," say the authors, who also calculate that the emissions from using 19 microwaves over a year are the same as those from a car. According to the same study, efforts to reduce consumption should focus on improving consumer awareness and behaviour to use appliances more efficiently. For example, electricity consumption by microwaves can be reduced by adjusting the time of cooking to the type of food.\nHowever, David Reay, professor of carbon management, argues that, although microwaves use a great deal of energy, their emissions are minor compared to those from cars. In the UK alone, these emit way more than all the emissions from microwaves in the EU. Backing this up, recent data show that passenger cars in the UK emitted 69 million tonnes of CO2 in 2015. This is 10 times the amount this new microwave oven study estimates for annual emissions for all the microwave ovens in the whole of the EU. Further, the energy used by microwaves is lower than any other form of cooking. Among common kitchen appliances used for cooking, microwaves are the most energy efficient, followed by a stove and finally a standard oven. Thus, rising microwave sales could be seen as a positive thing.',
    questions: [
      {
        q: 'What is the finding of the new study?',
        options: ['Quick-cooking microwave ovens have become more popular.', 'The frequent use of microwaves may do harm to our health.', 'CO2 emissions constitute a major threat to the environment.', 'The use of microwaves emits more CO2 than people think.'],        answer: 3,
        explanation: '细节题。定位第一段“Europe\'s stock of these quick-cooking ovens emit as much carbon as nearly 7 million cars... and the problem is growing”，即欧洲微波炉的碳排放相当于近 700 万辆汽车，远超人们想象，故选 D 项“The use of microwaves emits more CO2 than people think”。A 说微波炉更流行、B 说危害健康、C 泛泛说二氧化碳威胁环境，都不是该研究的具体发现。'
      },
      {
        q: 'Why are the sales of microwaves expected to rise?',
        options: ['They are becoming more affordable.', 'They have a shorter life cycle than other appliances.', 'They are getting much easier to operate.', 'They take less time to cook than other appliances.'],        answer: 0,
        explanation: '细节题。定位第一段“With costs falling and kitchen appliances becoming \'status\' symbols, owners are throwing many microwaves away after an average of eight years. This is pushing sales of new microwaves”，即成本下降使微波炉更便宜，同时旧机淘汰推动新机销售，故选 A 项“They are becoming more affordable”。B 说寿命周期更短（这只是现象之一）、C 说更易操作、D 说更省时间，均不是销售上升的主要原因。'
      },
      {
        q: 'What recommendation does the study by the University of Manchester make?',
        options: ['Cooking food of different varieties.', 'Improving microwave users\' habits.', 'Eating less to cut energy consumption.', 'Using microwave ovens less frequently.'],        answer: 1,
        explanation: '细节题。定位第二段“efforts to reduce consumption should focus on improving consumer awareness and behaviour to use appliances more efficiently”，即应改进用户的节能意识与使用行为，故选 B 项“Improving microwave users\' habits”。A 说烹饪不同食物、C 说少吃、D 说减少使用频率，均与原文建议不符。'
      },
      {
        q: 'What does Professor David Reay try to argue?',
        options: ['There are far more emissions from cars than from microwaves.', 'People should be persuaded into using passenger cars less often.', 'The UK produces less CO2 than many other countries in the EU.', 'More data are needed to show whether microwaves are harmful.'],        answer: 0,
        explanation: '细节题。定位第三段“he argues that, although microwaves use a great deal of energy, their emissions are minor compared to those from cars”，即汽车排放远多于微波炉，故选 A 项“There are far more emissions from cars than from microwaves”。B 说应劝说人们少开私家车、C 说英国排放比欧盟其他国家少、D 说需要更多数据，均不准确。'
      },
      {
        q: 'What does Professor David Reay think of the use of microwaves?',
        options: ['It will become less popular in the coming decades.', 'It makes everyday cooking much more convenient.', 'It plays a positive role in environmental protection.', 'It consumes more power than conventional cooking.'],        answer: 2,
        explanation: '观点态度题。定位第三段“the energy used by microwaves is lower than any other form of cooking... microwaves are the most energy efficient... Thus, rising microwave sales could be seen as a positive thing”，即雷教授认为微波炉比其它烹饪方式更节能、其销量上升是积极的事，故选 C 项“It plays a positive role in environmental protection”。A 说会越来越不流行、D 说比传统烹饪更耗电，与原文相反；B 未提及。'
      }
    ],
    vocab: [
      { word: 'microwave', phonetic: '/ˈmaɪkrəweɪv/', meaning: '微波炉；微波' },
      { word: 'utterly', phonetic: '/ˈʌtəli/', meaning: '完全地；十足地' },
      { word: 'appliance', phonetic: '/əˈplaɪəns/', meaning: '家用电器；器具' },
      { word: 'emission', phonetic: '/ɪˈmɪʃn/', meaning: '排放；排放物' },
      { word: 'greenhouse gas', phonetic: '/ˌɡriːnhaʊs ˈɡæs/', meaning: '温室气体' },
      { word: 'manufacture', phonetic: '/ˌmænjuˈfæktʃə(r)/', meaning: '制造；生产' },
      { word: 'disposal', phonetic: '/dɪˈspəʊzl/', meaning: '处理；处置' },
      { word: 'efficient', phonetic: '/ɪˈfɪʃnt/', meaning: '高效的' },
      { word: 'minor', phonetic: '/ˈmaɪnə(r)/', meaning: '较小的；次要的' },
      { word: 'tonne', phonetic: '/tʌn/', meaning: '公吨' }
    ]
  },
  {
    id: 'read-cloze-2',
    type: 'cloze',
    title: 'Why Air Travel Can Make You Feel Unwell',
    source: '真题 · 2019年12月第三套',
    passage: 'Millions of people travel by plane every single day. If you\'re planning on being one of them soon, you might not be looking forward to the __1__ feeling air travel often leaves you with. Besides the airport crowds and stress, travelling at a high altitude has real effects on the body. Although the pressure of the cabin is __2__ to prevent altitude sickness, you could still __3__ sleepiness or a headache. The lower oxygen pressure found in an aircraft cabin is __4__ to that at 6,000-8,000 feet of altitude. A drop in oxygen pressure can cause headaches in certain __5__. To help prevent headaches, drink plenty of water, and avoid alcohol and coffee.\nAirplane food might not really be as tasteless as you __6__ thought. The air you breathe in a plane dries out your mouth and nose, which can affect your sense of taste. Perception of sweet and salty foods dropped by almost 30 percent in a simulation of air travel. However, you can make your taste buds active again by drinking water. A dry mouth may __7__ taste sensitivity, but taste is restored by drinking fluids.\nAlthough in-flight infections __8__ in dry environments like airplanes, your risk of getting sick from an airplane is actually low because of the air __9__ used. Unless you\'re sitting next to someone who is coughing or sneezing, you shouldn\'t worry too much about getting sick. However, bacteria have been shown to live on cabin surfaces, so wash your hands __10__.',
    wordBank: ['adjusted', 'channels', 'equivalent', 'experience', 'filters', 'frequently', 'individuals', 'originally', 'particular', 'primarily', 'reduce', 'renovated', 'smooth', 'thrive', 'unpleasant'],
    answers: ['unpleasant', 'adjusted', 'experience', 'equivalent', 'individuals', 'originally', 'reduce', 'thrive', 'filters', 'frequently'],
    explanations: {
      '1': '考查形容词。句意：你可能并不期待坐飞机后常有的那种“不舒服”的感觉。unpleasant（令人不快的）修饰 feeling，语义通顺，故选 unpleasant。smooth（平滑的）语义不符。',
      '2': '考查动词过去分词。句意：虽然舱内压力经过“调节”以防止高空病。the pressure of the cabin is adjusted to...（舱压被调节到……）为被动语态，故选 adjusted。renovated（翻新）语义不符。',
      '3': '考查动词。句意：你仍可能“经历/出现”困倦或头痛。experience sleepiness or a headache（经历困倦或头痛）搭配合理，故选 experience。',
      '4': '考查形容词。句意：机舱内较低的氧气压力“相当于”6000-8000 英尺高处的压力。be equivalent to（等同于）为固定搭配，故选 equivalent。',
      '5': '考查名词。句意：氧压下降会在某些“人/个体”身上引起头痛。in certain individuals（在某些人身上）语义通顺，故选 individuals。',
      '6': '考查副词。句意：飞机餐可能并不像你“原本”以为的那么无味。as you originally thought（如你最初所想）搭配合理，故选 originally。primarily（主要地）语义不符。',
      '7': '考查动词。句意：口干可能“降低”味觉敏感度。reduce taste sensitivity（降低味觉敏感度）语义通顺，故选 reduce。',
      '8': '考查动词。句意：虽然飞行中的感染在飞机这样的干燥环境中会“滋生/繁殖”。infections thrive（感染滋生）搭配合理，故选 thrive。',
      '9': '考查名词。句意：因为使用了空气“过滤器”。the air filters used（使用的空气过滤器）语义通顺，故选 filters。channels（通道）语义不符。',
      '10': '考查副词。句意：因此要“经常”洗手。wash your hands frequently（经常洗手）搭配合理，故选 frequently。'
    },
    vocab: [
      { word: 'altitude', phonetic: '/ˈæltɪtjuːd/', meaning: '海拔；高度' },
      { word: 'cabin', phonetic: '/ˈkæbɪn/', meaning: '机舱；客舱' },
      { word: 'altitude sickness', phonetic: '/ˌæltɪtjuːd ˈsɪknəs/', meaning: '高原反应；高空病' },
      { word: 'oxygen', phonetic: '/ˈɒksɪdʒən/', meaning: '氧气' },
      { word: 'equivalent', phonetic: '/ɪˈkwɪvələnt/', meaning: '等同的；相当的' },
      { word: 'tasteless', phonetic: '/ˈteɪstləs/', meaning: '无味的；乏味的' },
      { word: 'perception', phonetic: '/pəˈsepʃn/', meaning: '感知；感觉' },
      { word: 'simulation', phonetic: '/ˌsɪmjuˈleɪʃn/', meaning: '模拟；仿真' },
      { word: 'taste bud', phonetic: '/ˈteɪst bʌd/', meaning: '味蕾' },
      { word: 'infection', phonetic: '/ɪnˈfekʃn/', meaning: '感染；传染' },
      { word: 'thrive', phonetic: '/θraɪv/', meaning: '繁殖；茁壮成长' },
      { word: 'bacteria', phonetic: '/bækˈtɪəriə/', meaning: '细菌' },
      { word: 'sneeze', phonetic: '/sniːz/', meaning: '打喷嚏' }
    ]
  },
  {
    id: 'read-match-2',
    type: 'match',
    title: 'A South Korean City Designed for the Future',
    source: '真题 · 2019年12月第三套',
    paragraphs: [
      'Getting around a city is one thing — and then there\'s the matter of getting from one city to another. One vision of the perfect city of the future: a place that offers easy access to air travel. In 2011, a University of North Carolina business professor named John Kasarda published a book called Aerotropolis: The Way We\'ll Live Next. Kasarda says future cities should be built intentionally around or near airports. The idea, as he has put it, is to offer businesses "rapid, long-distance connectivity on a massive scale."',
      '"The 18th century really was a waterborne century, the 19th century a rail century, the 20th century a highway, car, truck century — and the 21st century will increasingly be an aviation century, as the globe becomes increasingly connected by air," Kasarda says. Songdo, a city built from scratch in South Korea, is one of Kasarda\'s prime examples. It has existed for just a few years. "From the get-go, it was designed on the basis of connectivity and competitiveness," says Kasada. "The government built the bridge directly from the airport to the Songdo International Business District. And the surface infrastructure was built in tandem with the new airport."',
      'Songdo is a stone\'s throw from South Korea\'s Incheon Airport, its main international hub. But it takes a lot more than a nearby airport to be a city of the future. Just building a place as an "international business district" doesn\'t mean it will become one. Park Yeon Soo conceived this city of the future back in 1986. He considers Songdo his baby. "I am a visionary," he says. Thirty years after he imagined the city, Park\'s baby is close to 70 percent built, with 36,000 people living in the business district and 90,000 residents in greater Songdo. It\'s about an hour outside Seoul, built on reclaimed tidal flats along the Yellow Sea. There\'s a Coast Guard building and a tall trade tower, as well as a park, golf course and university.',
      'Chances are you\'ve actually seen this place. Songdo appears in the most famous music video ever to come out of South Korea. "Gangnam Style" refers to the fashionable Gangnam district in Seoul. But some of the video was filmed in Songdo. "I don\'t know if you remember, there was a scene in a subway station. That was not Gangnam. That was actually Songdo," says Jung Won Son, a professor of urban development at London\'s Bartlett School of Planning. "Part of the reason to shoot there is that it\'s new and nice."',
      'The city was supposed to be a hub for global companies, with employees from all over the world. But that\'s not how it has turned out. Songdo\'s reputation is as a futuristic ghost town. But the reality is more complicated. A bridge with big, light-blue loops leads into the business district. In the center of the main road, there\'s a long line of flags of the world. On the corner, there\'s a Starbucks and a 7-Eleven — all of the international brands that you see all over the world nowadays.',
      'The city is not empty. There are mothers pushing strollers, old women with walkers — even in the middle of the day, when it\'s 90 degrees out. Byun Young-Jin chairs the Songdo real estate association and started selling property here when the first phase of the city opened in 2005. He says demand has boomed in the past couple of years. Most of his clients are Korean. In fact, the developer says, 99 percent of the homes here are sold to Koreans. Young families move here because the schools are great. And that\'s the problem: Songdo has become a popular Korean city — more popular as a residential area than a business one. It\'s not yet the futuristic international business hub that planners imagined. "It\'s a great place to live. And it\'s becoming a great place to work," says Scott Summers, the vice president of Gale International, the developer of the city. The floor-to-ceiling windows of his company\'s offices overlook Songdo Central Park, with a canal full of kayaks and paddle boats.',
      '"What\'s happened is, because we focused on creating that quality of life first, which enabled the residents to live here, what has probably missed the mark is for companies to locate here," he says. "There needs to be strong economic incentives." The city is still unfinished, and it feels a bit like a theme park. It doesn\'t feel all that futuristic. There\'s a high-tech underground trash disposal system. Buildings are environmentally friendly. Everybody\'s television set is connected to a system that streams personalized language or exercise classes.',
      'But Star Trek this is not. And to some of the residents, Songdo feels hollow. "I\'m, like, in prison for weekdays. That\'s what we call it in the workplace," says a woman in her 20s. She doesn\'t want to use her name for fear of being fired from her job. She goes back to Seoul every weekend. "I say I\'m prison-breaking on Friday nights." But she has to make the prison break in her own car. There\'s no high-speed train connecting Songdo to Seoul, just over 20 miles away.',
      'The man who first imagined Songdo feels frustrated, too. Park says he built South Korea a luxury vehicle, "like Mercedes or BMW. It\'s a good car now. But we\'re waiting for a good driver to accelerate." But there are lots of other good cars out there, too. The world is dotted with futuristic, high-tech cities trying to attract the biggest international companies.',
      'Songdo\'s backers contend that it\'s still early, and business space is filling up — about 70 percent of finished offices are now occupied. Brent Ryan, who teaches urban design at MIT, says Songdo proves a universal principle. "There have been a lot of utopian cities in history. And the reason we don\'t know about a lot of them is that a lot of them have vanished entirely." In other words, when it comes to cities — or anything else — it is hard to predict the future.'
    ],
    questions: [
      {
        q: 'Songdo\'s popularity lies more in its quality of life than its business attraction.',
        answer: 'F',
        explanation: '定位 F 段“Songdo has become a popular Korean city — more popular as a residential area than a business one”，即松岛作为居住区比作为商务区更受欢迎，与题干“更在于生活质量而非商务吸引力”对应，故选 F。'
      },
      {
        q: 'The man who conceived Songdo feels disappointed because it has fallen short of his expectations.',
        answer: 'I',
        explanation: '定位 I 段“The man who first imagined Songdo feels frustrated, too... We\'re waiting for a good driver to accelerate”，即设想松岛的人因城市未达预期而失望，与题干对应，故选 I。'
      },
      {
        q: 'A scene in a popular South Korean music video was shot in Songdo.',
        answer: 'D',
        explanation: '定位 D 段“Some of the video was filmed in Songdo... there was a scene in a subway station. That was actually Songdo”，即热门韩国音乐视频《江南style》部分场景在松岛拍摄，与题干对应，故选 D。'
      },
      {
        q: 'Songdo still lacks the financial stimulus for businesses to set up shop there.',
        answer: 'G',
        explanation: '定位 G 段“what has probably missed the mark is for companies to locate here... There needs to be strong economic incentives”，即松岛缺乏吸引企业入驻的经济激励，与题干对应，故选 G。'
      },
      {
        q: 'Airplanes will increasingly become the chief means of transportation, according to a professor.',
        answer: 'B',
        explanation: '定位 B 段“the 21st century will increasingly be an aviation century, as the globe becomes increasingly connected by air”，即卡斯达教授认为 21 世纪将日益成为航空世纪，与题干对应，故选 B。'
      },
      {
        q: 'Songdo has ended up different from the city it was supposed to be.',
        answer: 'E',
        explanation: '定位 E 段“The city was supposed to be a hub for global companies... But that\'s not how it has turned out”，即松岛最终并未成为设想中的全球企业中心，与题干对应，故选 E。'
      },
      {
        q: 'Some of the people who work in Songdo complain about boredom in the workplace.',
        answer: 'H',
        explanation: '定位 H 段一位女士说“I\'m, like, in prison for weekdays. That\'s what we call it in the workplace”，即在松岛工作让人感觉像坐牢、单调乏味，与题干对应，故选 H。'
      },
      {
        q: 'A business professor says that a future city should have easy access to international transportation.',
        answer: 'A',
        explanation: '定位 A 段“One vision of the perfect city of the future: a place that offers easy access to air travel... future cities should be built intentionally around or near airports”，即商学院教授卡斯达认为未来城市应便利通达国际交通，与题干对应，故选 A。'
      },
      {
        q: 'According to an urban design professor, it is difficult for city designers to foresee what will happen in the future.',
        answer: 'J',
        explanation: '定位 J 段“Brent Ryan, who teaches urban design at MIT... it is hard to predict the future”，即城市规划教授布伦特·瑞安认为预测未来很难，与题干对应，故选 J。'
      },
      {
        q: 'Park Yeon Soo, who envisioned Songdo, feels a parental connection with the city.',
        answer: 'C',
        explanation: '定位 C 段“Park Yeon Soo conceived this city of the future back in 1986. He considers Songdo his baby”，即构想松岛的朴连洙视它为“自己的孩子”，怀有父辈般的感情，与题干“feels a parental connection”对应，故选 C。'
      }
    ],
    vocab: [
      { word: 'connectivity', phonetic: '/ˌkənekˈtɪvəti/', meaning: '连通性；连接' },
      { word: 'waterborne', phonetic: '/ˈwɔːtəbɔːn/', meaning: '水运的；水传播的' },
      { word: 'aviation', phonetic: '/ˌeɪviˈeɪʃn/', meaning: '航空；飞行' },
      { word: 'from scratch', phonetic: '/frəm skrætʃ/', meaning: '从零开始' },
      { word: 'infrastructure', phonetic: '/ˈɪnfrəstrʌktʃə(r)/', meaning: '基础设施' },
      { word: 'in tandem with', phonetic: '/ɪn ˈtændəm wɪð/', meaning: '与……同步；协同' },
      { word: 'conceive', phonetic: '/kənˈsiːv/', meaning: '构想；设想' },
      { word: 'visionary', phonetic: '/ˈvɪʒənri/', meaning: '有远见的人' },
      { word: 'reclaimed', phonetic: '/rɪˈkleɪmd/', meaning: '填海造地的；回收的' },
      { word: 'tidal flat', phonetic: '/ˈtaɪdl flæt/', meaning: '滩涂；潮间带' },
      { word: 'hollow', phonetic: '/ˈhɒləʊ/', meaning: '空洞的；空虚的' },
      { word: 'utopian', phonetic: '/juːˈtəʊpiən/', meaning: '乌托邦式的；空想的' },
      { word: 'foresee', phonetic: '/fɔːˈsiː/', meaning: '预见；预知' }
    ]
  },
  {
    id: 'read-careful-5',
    type: 'careful',
    title: 'The $11 Billion Textbook Industry',
    source: '真题 · 2019年12月第二套',
    passage: 'Textbooks represent an $11 billion industry, up from $8 billion in 2014. Textbook publisher Pearson is the largest publisher — of any kind — in the world.\nIt costs about $1 million to create a new textbook. A freshman textbook will have dozens of contributors, from subject-matter experts through graphic and layout artists to expert reviewers and classroom testers. Textbook publishers connect professors, instructors and students in ways that alternatives, such as open e-textbooks and open educational resources, simply do not. This connection happens not only by means of collaborative development, review and testing, but also at conferences where faculty regularly decide on their textbooks and curricula for the coming year.\nIt is true that textbook publishers have recently reported losses, largely due to students renting or buying used print textbooks. But this can be chalked up to the excessively high cost of their books — which has increased over 1,000 percent since 1977. A restructuring of the textbook industry may well be in order. But this does not mean the end of the textbook itself.\nWhile they may not be as dynamic as an iPad, textbooks are not passive or lifeless. For example, over the centuries, they have simulated dialogues in a number of ways. From 1800 to the present day, textbooks have done this by posing questions for students to answer inductively. That means students are asked to use their individual experience to come up with answers to general questions. Today\'s psychology texts, for example, ask: "How much of your personality do you think you inherited?" while ones in physics say: "How can you predict where the ball you tossed will land?"\nExperts observe that "textbooks come in layers, something like an onion." For an active learner, engaging with a textbook can be an interactive experience. Readers proceed at their own pace. They "customize" their books by engaging with different layers and linkages. Highlighting, Post-It notes, dog-ears and other techniques allow for further customization that students value in print books over digital forms of books.',
    questions: [
      {
        q: 'What does the passage say about open educational resources?',
        options: ['They contribute to teaching as much as to learning.', 'They don\'t profit as much as traditional textbooks do.', 'They can\'t connect professors and students as textbooks do.', 'They compete fiercely for customers with textbook producers.'],
        answer: 2,
        explanation: '细节题。定位第二段“Textbook publishers connect professors, instructors and students in ways that alternatives, such as open e-textbooks and open educational resources, simply do not”，即开放教育资源无法像传统教材那样把教授、教师和学生联系起来，故选 C 项。A、B、D 均未提及。'
      },
      {
        q: 'What is the main cause of the publishers\' losses?',
        options: ['Failure to meet student need.', 'Industry restructuring.', 'Emergence of e-books.', 'Falling sales.'],
        answer: 3,
        explanation: '细节题。定位第三段“textbook publishers have recently reported losses, largely due to students renting or buying used print textbooks”，即出版社亏损主要因为学生租书或买二手书，导致销量下降，故选 D 项“Falling sales”。A 说未满足学生需求、B 说行业重组（是结果而非原因）、C 说电子书出现，均不准确。'
      },
      {
        q: 'What does the textbook industry need to do?',
        options: ['Reform its structures.', 'Cut its retail prices.', 'Find replacements for printed textbooks.', 'Change its business strategy periodically.'],
        answer: 0,
        explanation: '细节题。定位第三段“A restructuring of the textbook industry may well be in order”，即教材行业或许需要进行结构调整，故选 A 项“Reform its structures”。B 说降价、C 说找替代品、D 说周期性改变策略，均与原文不符。'
      },
      {
        q: 'What are students expected to do in the learning process?',
        options: ['Think carefully before answering each question.', 'Ask questions based on their own understanding.', 'Answer questions using their personal experience.', 'Give answers showing their respective personality.'],
        answer: 2,
        explanation: '细节题。定位第四段“students are asked to use their individual experience to come up with answers to general questions”，即要求学生运用个人经验回答一般性问题，故选 C 项“Answer questions using their personal experience”。A、B、D 均不准确。'
      },
      {
        q: 'What do experts say about students using textbooks?',
        options: ['They can digitalize the prints easily.', 'They can learn in an interactive way.', 'They can purchase customized versions.', 'They can adapt the material themselves.'],
        answer: 1,
        explanation: '细节题。定位末段“For an active learner, engaging with a textbook can be an interactive experience”，即主动学习者在与教材互动时可以收获交互式体验，故选 B 项“They can learn in an interactive way”。A 说轻松数字化、C 说购买定制版、D 说自己改编材料，均不准确。'
      }
    ],
    vocab: [
      { word: 'textbook', phonetic: '/ˈtekstbʊk/', meaning: '教科书；教材' },
      { word: 'contributor', phonetic: '/kənˈtrɪbjətə(r)/', meaning: '撰稿人；贡献者' },
      { word: 'graphic', phonetic: '/ˈɡræfɪk/', meaning: '图表的；绘图的' },
      { word: 'layout', phonetic: '/ˈleɪaʊt/', meaning: '版面；布局' },
      { word: 'collaborative', phonetic: '/kəˈlæbərətɪv/', meaning: '合作的；协作的' },
      { word: 'faculty', phonetic: '/ˈfæklti/', meaning: '教职人员' },
      { word: 'curriculum', phonetic: '/kəˈrɪkjələm/', meaning: '课程' },
      { word: 'chalk up', phonetic: '/ˌtʃɔːk ˈʌp/', meaning: '归因于；把……记在账上' },
      { word: 'excessively', phonetic: '/ɪkˈsesɪvli/', meaning: '过度地；过分地' },
      { word: 'restructure', phonetic: '/ˌriːˈstrʌktʃə(r)/', meaning: '重组；调整结构' },
      { word: 'simulate', phonetic: '/ˈsɪmjuleɪt/', meaning: '模拟；模仿' },
      { word: 'inductively', phonetic: '/ɪnˈdʌktɪvli/', meaning: '归纳地' },
      { word: 'customize', phonetic: '/ˈkʌstəmaɪz/', meaning: '定制；按需调整' }
    ]
  },
  {
    id: 'read-careful-6',
    type: 'careful',
    title: 'The Half-Plant Half-Animal Sea Slug',
    source: '真题 · 2019年12月第二套',
    passage: 'When we think of animals and plants, we have a pretty good way of dividing them into two distinct groups: one converts sunlight into energy and the other has to eat food to make its energy. Well, those dividing lines come crashing down with the discovery of a sea slug that\'s truly half animal and half plant. It\'s pretty incredible how it has managed to hijack the genes of the algae on which it feeds.\nThe slugs can manufacture chlorophyll, the green pigment in plants that captures energy from sunlight, and hold these genes within their body. The term kleptoplasty is used to describe the practice of using hijacked genes to create nutrients from sunlight. And so far, this green sea slug is the only known animal that can be truly considered solar-powered, although some animals do exhibit some plant-like behaviors. Many scientists have studied the green sea slugs to confirm that they are actually able to create energy from sunlight.\nIn fact, the slugs use the genetic material so well that they pass it on to their future generations. Their babies retain the ability to produce their own chlorophyll, though they can\'t generate energy from sunlight until they\'ve eaten enough algae to steal the necessary genes, which they can\'t yet produce on their own.\n"There\'s no way on earth that genes from an alga should work inside an animal cell," says Sidney Pierce from the University of South Florida. "And yet here, they do. They allow the animal to rely on sunshine for its nutrition. So if something happens to their food source, they have a way of not starving to death until they find more algae to eat."\nThe sea slugs are so good at gathering energy from the sun that they can live up to nine months without having to eat any food. They get all their nutritional needs met by the genes that they\'ve hijacked from the algae.',
    questions: [
      {
        q: 'What is the distinctive feature of a sea slug?',
        options: ['It looks like both a plant and an animal.', 'It converts some sea animals into plants.', 'It lives half on animals and half on plants.', 'It gets energy from both food and sunlight.'],
        answer: 3,
        explanation: '细节题。定位第一段“a sea slug that\'s truly half animal and half plant... managed to hijack the genes of the algae on which it feeds”，即海蛞蝓既能靠吃食物也能靠阳光获取能量（既有动物性又具备植物性），故选 D 项“It gets energy from both food and sunlight”。A 说它看起来像植物又像动物，C 说一半靠动物一半靠植物，均不准确；B 说把海生动物变成植物，无中生有。'
      },
      {
        q: 'What enables the sea slug to live like a plant?',
        options: ['The genes it captures from the sea plant algae.', 'The mechanism by which it conserves energy.', 'The nutrients it hijacks from other species.', 'The green pigment it inherits from its ancestors.'],
        answer: 0,
        explanation: '细节题。定位第二段“The slugs can manufacture chlorophyll... and hold these genes within their body”，即海蛞蝓从藻类那里窃取了基因、得以制造叶绿素像植物一样生活，故选 A 项“The genes it captures from the sea plant algae”。B 说节能机制、C 说从其他物种窃取的营养（是基因而非营养）、D 说从祖先继承的绿色色素，均不准确。'
      },
      {
        q: 'What does the author say about baby sea slugs?',
        options: ['They can live without sunlight for a long time.', 'They can absorb sunlight right after their birth.', 'They can survive without algae for quite some time.', 'They can produce chlorophyll on their own.'],
        answer: 3,
        explanation: '细节题。定位第三段“Their babies retain the ability to produce their own chlorophyll”，即幼崽保留了自己制造叶绿素的能力，故选 D 项“They can produce chlorophyll on their own”。A 说能长时间不晒太阳、B 说出生后立即吸收阳光（原文说吃了足够藻类后才能利用阳光）、C 说能长时间不吃藻类，均不准确。'
      },
      {
        q: 'What does Sidney Pierce say about genes from an alga?',
        options: ['They are stolen from animals like the sea slug.', 'They can\'t function unless exposed to sunlight.', 'They don\'t usually function inside animal cells.', 'They can readily be converted to sea slug genes.'],
        answer: 2,
        explanation: '细节题。定位第四段“There\'s no way on earth that genes from an alga should work inside an animal cell”，即藻类的基因按理说不应该在动物细胞里起作用，故选 C 项“They don\'t usually function inside animal cells”。A 说被海蛞蝓偷走（是海蛞蝓窃取藻类基因，方向反了）、B 说需晒太阳才起作用、D 说能轻易转化为海蛞蝓基因，均不准确。'
      },
      {
        q: 'What do we learn about sea slugs from the passage?',
        options: ['They behave the way most plant species do.', 'They can survive for months without eating.', 'They will turn into plants when they mature.', 'They will starve to death without sunlight.'],
        answer: 1,
        explanation: '细节题。定位末段“they can live up to nine months without having to eat any food”，即海蛞蝓可以长达九个月不吃东西，故选 B 项“They can survive for months without eating”。A 说行为与多数植物一样、C 说成熟后会变成植物、D 说没阳光会饿死，均不准确。'
      }
    ],
    vocab: [
      { word: 'sea slug', phonetic: '/ˈsiː slʌɡ/', meaning: '海蛞蝓' },
      { word: 'distinct', phonetic: '/dɪˈstɪŋkt/', meaning: '不同的；明显的' },
      { word: 'convert', phonetic: '/kənˈvɜːt/', meaning: '转化；转变' },
      { word: 'hijack', phonetic: '/ˈhaɪdʒæk/', meaning: '窃取；劫持' },
      { word: 'algae', phonetic: '/ˈældʒiː/', meaning: '藻类' },
      { word: 'chlorophyll', phonetic: '/ˈklɒrəfɪl/', meaning: '叶绿素' },
      { word: 'pigment', phonetic: '/ˈpɪɡmənt/', meaning: '色素' },
      { word: 'kleptoplasty', phonetic: '/ˈkleptəʊplæsti/', meaning: '盗食质体（偷取基因制造营养）' },
      { word: 'solar-powered', phonetic: '/ˌsəʊlə ˈpaʊəd/', meaning: '太阳能的；靠太阳能运行的' },
      { word: 'retain', phonetic: '/rɪˈteɪn/', meaning: '保留；保持' },
      { word: 'nutrition', phonetic: '/njuˈtrɪʃn/', meaning: '营养' },
      { word: 'starve', phonetic: '/stɑːv/', meaning: '挨饿；饿死' }
    ]
  },
  {
    id: 'read-cloze-3',
    type: 'cloze',
    title: 'Flying With a Sick Passenger',
    source: '真题 · 2019年12月第二套',
    passage: 'Finally, some good news about airplane travel. If you are on a plane with a sick passenger, you are unlikely to get sick. That is the __1__ of a new study that looked at how respiratory viruses __2__ on airplanes. Researchers found that only people who were seated in the same row as a passenger with the flu, for example — or one row in front of or behind that individual — had a high risk of catching the illness. All other passengers had only a very __3__ chance of getting sick, according to the findings. Media reports have not necessarily presented __4__ information about the risk of getting infected on an airplane in the past. Therefore, these new findings should help airplane passengers to feel less __5__ to catching respiratory infections while traveling by air.\nPrior to the new study, little was known about the risks of getting __6__ infected by common respiratory viruses, such as the flu or common cold, on an airplane, the researchers said. So, to __7__ the risks of infection, the study team flew on 10 different __8__ in the U.S. during the flu season. The researchers found that passengers sitting within two seats on __9__ side of a person infected with the flu, as well as those sitting one row in front of or behind this individual, had about an 80 percent chance of getting sick. But other passengers were __10__ safe from infection. They had a less than 3 percent chance of catching the flu.',
    wordBank: ['accurate', 'conclusion', 'directly', 'either', 'evaluate', 'explorations', 'flights', 'largely', 'nearby', 'respond', 'slim', 'spread', 'summit', 'vividly', 'vulnerable'],
    answers: ['conclusion', 'spread', 'slim', 'accurate', 'vulnerable', 'directly', 'evaluate', 'flights', 'either', 'largely'],
    explanations: {
      '1': '考查名词。句意：这是研究得出的“结论”。That is the conclusion of a new study（这是一项新研究的结论），故选 conclusion。干扰项 summit（峰会）、explorations（探索）语义不通。',
      '2': '考查动词。句意：该研究考察呼吸道病毒如何在飞机上“传播”。viruses spread on airplanes（病毒在飞机上传播），故选 spread。respond（回应）语义不符。',
      '3': '考查形容词。句意：其他乘客被感染的几率非常“小”。a very slim chance（很小的几率）为常见搭配，故选 slim。',
      '4': '考查形容词。句意：过去的媒体报道未必提供了“准确”的信息。accurate information（准确的信息）搭配合理，故选 accurate。',
      '5': '考查形容词。句意：这些新发现应帮助乘客在乘机时感觉不那么“容易受感染”。be vulnerable to（易受……伤害）为固定搭配，故选 vulnerable。',
      '6': '考查副词。句意：此前对在飞机上“直接”被常见呼吸道病毒感染的风险知之甚少。getting directly infected（直接被感染）语义通顺，故选 directly。vividly（生动地）语义不符。',
      '7': '考查动词。句意：为了“评估”感染风险。evaluate the risks of infection（评估感染风险）搭配合理，故选 evaluate。',
      '8': '考查名词。句意：研究团队在流感季节乘坐了美国 10 个不同的“航班”。flew on 10 different flights（乘坐 10 个不同的航班）语义通顺，故选 flights。',
      '9': '考查限定词。句意：坐在感染者两侧两个座位以内的乘客。on either side（在任一侧）为固定搭配，故选 either。',
      '10': '考查副词。句意：但其他乘客“大体上”免受感染。largely safe from infection（大体上安全）语义通顺，故选 largely。'
    },
    vocab: [
      { word: 'respiratory', phonetic: '/rəˈspɪrətri/', meaning: '呼吸的' },
      { word: 'virus', phonetic: '/ˈvaɪrəs/', meaning: '病毒' },
      { word: 'conclusion', phonetic: '/kənˈkluːʒn/', meaning: '结论' },
      { word: 'slim', phonetic: '/slɪm/', meaning: '微小的；苗条的' },
      { word: 'accurate', phonetic: '/ˈækjərət/', meaning: '准确的' },
      { word: 'vulnerable', phonetic: '/ˈvʌlnərəbl/', meaning: '易受伤害的；脆弱的' },
      { word: 'respiratory infection', phonetic: '/rəˈspɪrətri ɪnˈfekʃn/', meaning: '呼吸道感染' },
      { word: 'evaluate', phonetic: '/ɪˈvæljueɪt/', meaning: '评估；评价' },
      { word: 'flu season', phonetic: '/ˈfluː siːzn/', meaning: '流感季节' },
      { word: 'largely', phonetic: '/ˈlɑːdʒli/', meaning: '大体上；主要地' }
    ]
  },
  {
    id: 'read-match-3',
    type: 'match',
    title: 'Is Breakfast Really the Most Important Meal of the Day?',
    source: '真题 · 2019年12月第二套',
    paragraphs: [
      'Along with old classics like "carrots give you night vision" and "Santa doesn\'t bring toys to misbehaving children", one of the most well-worn phrases of tired parents everywhere is that breakfast is the most important meal of the day. Many of us grow up believing that skipping breakfast is a serious mistake, even if only two thirds of adults in the UK eat breakfast regularly, according to the British Dietetic Association, and around three-quarters of Americans.',
      '"The body uses a lot of energy stores for growth and repair through the night," explains diet specialist Sarah Elder. "Eating a balanced breakfast helps to up our energy, as well as make up for protein and calcium used throughout the night." But there\'s widespread disagreement over whether breakfast should keep its top spot in the hierarchy of meals. There have been concerns around the sugar content of cereal and the food industry\'s involvement in pro-breakfast research — and even one claim from an academic that breakfast is "dangerous".',
      'What\'s the reality? Is breakfast a necessary start to the day or a marketing tactic by cereal companies? The most researched aspect of breakfast (and breakfast-skipping) has been its links to obesity. Scientists have different theories as to why there\'s a relationship between the two. In one US study that analysed the health data of 50,000 people over seven years, researchers found that those who made breakfast the largest meal of the day were more likely to have a lower body mass index (BMI) than those who ate a large lunch or dinner. The researchers argued that breakfast helps reduce daily calorie intake and improve the quality of our diet — since breakfast foods are often higher in fibre and nutrients.',
      'But as with any study of this kind, it was unclear if that was the cause — or if breakfast-skippers were just more likely to be overweight to begin with. To find out, researchers designed a study in which 52 obese women took part in a 12-week weight loss programme. All had the same number of calories over the day, but half had breakfast, while the other half did not. What they found was that it wasn\'t breakfast itself that caused the participants to lose weight: it was changing their normal routine.',
      'If breakfast alone isn\'t a guarantee of weight loss, why is there a link between obesity and breakfast-skipping? Alexandra Johnstone, professor of appetite research at the University of Aberdeen, argues that it may simply be because breakfast-skippers have been found to be less knowledgeable about nutrition and health. "There are a lot of studies on the relationship between breakfast eating and possible health outcomes, but this may be because those who eat breakfast choose to habitually have health-enhancing behaviours such as regular exercise and not smoking," she says.',
      'A 2016 review of 10 studies looking into the relationship between breakfast and weight management concluded there is "limited evidence" supporting or refuting the argument that breakfast influences weight or food intake, and more evidence is required before breakfast recommendations can be used to help prevent obesity.',
      'Researches from the University of Surrey and University of Aberdeen are halfway through research looking into the mechanisms behind how the time we eat influences body weight. Early findings suggest that a bigger breakfast is beneficial to weight control. Breakfast has been found to affect more than just weight. Skipping breakfast has been associated with a 27% increased risk of heart disease, a 21% higher risk of type 2 diabetes in men, and a 20% higher risk of type 2 diabetes in women. One reason may be breakfast\'s nutritional value — partly because cereal is fortified with vitamins. In one study on the breakfast habits of 1,600 young people in the UK, researchers found that the fibre and micronutrient intake was better in those who had breakfast regularly. There have been similar findings in Australia, Brazil, Canada and the US.',
      'Breakfast is also associated with improved brain function, including concentration and language use. A review of 54 studies found that eating breakfast can improve memory, though the effects on other brain functions were inconclusive. However, one of the review\'s researchers, Mary Beth Spitznagel, says there is "reasonable" evidence breakfast does improve concentration — there just needs to be more research. "Looking at studies that tested concentration, the number of studies showing a benefit was exactly the same as the number that found no benefit," she says. "And no studies found that eating breakfast was bad for concentration."',
      'What\'s most important, some argue, is what we eat for breakfast. High-protein breakfasts have been found particularly effective in reducing the longing for food and consumption later in the day, according to research by the Australian Commonwealth Scientific and Industrial Research Organisation. While cereal remains a firm favourite among breakfast consumers in the UK and US, a recent investigation into the sugar content of "adult" breakfast cereals found that some cereals contain more than three-quarters of the recommended daily amount of free sugars in each portion, and sugar was the second or third highest ingredient in cereals.',
      'But some research suggests if we\'re going to eat sugary foods, it\'s best to do it early. One study recruited 200 obese adults to take part in a 16-week-long diet, where half added dessert to their breakfast, and half didn\'t. Those who added dessert lost an average of 40 pounds more — however, the study was unable to show the long-term effects. A review of 54 studies found that there is no consensus yet on what type of breakfast is healthier, and concluded that the type of breakfast doesn\'t matter as much as simply eating something.',
      'While there\'s no conclusive evidence on exactly what we should be eating and when, the consensus is that we should listen to our own bodies and eat when we\'re hungry. "Breakfast is most important for people who are hungry when they wake up," Johnstone says. "Each body starts the day differently — and those individual differences need to be researched more closely," Spitznagel says. "A balanced breakfast is really helpful, but getting regular meals throughout the day is more important to leave blood sugar stable through the day, which helps control weight and hunger levels," says Elder. "Breakfast isn\'t the only meal we should be getting right."'
    ],
    questions: [
      {
        q: 'According to one professor, obesity is related to a lack of basic awareness of nutrition and health.',
        answer: 'E',
        explanation: '定位 E 段“it may simply be because breakfast-skippers have been found to be less knowledgeable about nutrition and health”，即约翰斯通教授认为肥胖与不吃早餐者缺乏营养健康知识有关，与题干对应，故选 E。'
      },
      {
        q: 'Some scientists claim that people should consume the right kind of food at breakfast.',
        answer: 'I',
        explanation: '定位 I 段“What\'s most important, some argue, is what we eat for breakfast”，即有些人认为早餐吃什么最重要，与题干对应，故选 I。'
      },
      {
        q: 'Opinions differ as to whether breakfast is the most important meal of the day.',
        answer: 'B',
        explanation: '定位 B 段“there\'s widespread disagreement over whether breakfast should keep its top spot in the hierarchy of meals”，即人们对早餐是否应保持“最重要一餐”的地位存在广泛分歧，与题干对应，故选 B。'
      },
      {
        q: 'It has been found that not eating breakfast is related to the incidence of certain diseases in some countries.',
        answer: 'G',
        explanation: '定位 G 段“Skipping breakfast has been associated with a 27% increased risk of heart disease... There have been similar findings in Australia, Brazil, Canada and the US”，即不吃早餐与心脏病、糖尿病等疾病风险增加相关，且多国有类似发现，与题干对应，故选 G。'
      },
      {
        q: 'Researchers found it was a change in eating habits rather than breakfast itself that induced weight loss.',
        answer: 'D',
        explanation: '定位 D 段“it wasn\'t breakfast itself that caused the participants to lose weight: it was changing their normal routine”，即导致减重的是改变日常习惯而非早餐本身，与题干对应，故选 D。'
      },
      {
        q: 'To keep oneself healthy, eating breakfast is more important than choosing what to eat.',
        answer: 'J',
        explanation: '定位 J 段“the type of breakfast doesn\'t matter as much as simply eating something”，即吃什么早餐不如吃早餐本身重要，与题干对应，故选 J。'
      },
      {
        q: 'It is widely considered wrong not to eat breakfast.',
        answer: 'A',
        explanation: '定位 A 段“Many of us grow up believing that skipping breakfast is a serious mistake”，即很多人从小认为不吃早餐是严重错误，与题干对应，故选 A。'
      },
      {
        q: 'More research is needed to prove that breakfast is related to weight loss or food intake.',
        answer: 'F',
        explanation: '定位 F 段“there is \'limited evidence\' supporting or refuting the argument that breakfast influences weight or food intake, and more evidence is required”，即现有证据有限、还需更多研究，与题干对应，故选 F。'
      },
      {
        q: 'People who prioritise breakfasts tend to have lower calorie but higher nutritional intake.',
        answer: 'C',
        explanation: '定位 C 段“those who made breakfast the largest meal of the day were more likely to have a lower body mass index... breakfast helps reduce daily calorie intake and improve the quality of our diet”，即把早餐作为主餐的人热量摄入更低、饮食质量更高，与题干对应，故选 C。'
      },
      {
        q: 'Many studies reveal that eating breakfast helps people memorise and concentrate.',
        answer: 'H',
        explanation: '定位 H 段“A review of 54 studies found that eating breakfast can improve memory... breakfast does improve concentration”，即多项研究表明吃早餐有助记忆和集中注意力，与题干对应，故选 H。'
      }
    ],
    vocab: [
      { word: 'well-worn', phonetic: '/ˌwel ˈwɔːn/', meaning: '陈腐的；用旧了的' },
      { word: 'skip', phonetic: '/skɪp/', meaning: '跳过；不吃' },
      { word: 'hierarchy', phonetic: '/ˈhaɪərɑːki/', meaning: '等级；层次' },
      { word: 'obesity', phonetic: '/əʊˈbiːsəti/', meaning: '肥胖' },
      { word: 'body mass index', phonetic: '/ˌbɒdi mæs ˈɪndeks/', meaning: '身体质量指数（BMI）' },
      { word: 'calorie', phonetic: '/ˈkæləri/', meaning: '卡路里' },
      { word: 'fibre', phonetic: '/ˈfaɪbə(r)/', meaning: '纤维' },
      { word: 'obese', phonetic: '/əʊˈbiːs/', meaning: '肥胖的' },
      { word: 'refute', phonetic: '/rɪˈfjuːt/', meaning: '反驳；驳斥' },
      { word: 'diabetes', phonetic: '/ˌdaɪəˈbiːtiːz/', meaning: '糖尿病' },
      { word: 'fortify', phonetic: '/ˈfɔːtɪfaɪ/', meaning: '强化；增强' },
      { word: 'micronutrient', phonetic: '/ˌmaɪkrəʊˈnjuːtriənt/', meaning: '微量营养素' },
      { word: 'inconclusive', phonetic: '/ˌɪnkənˈkluːsɪv/', meaning: '非决定性的；无定论的' },
      { word: 'consensus', phonetic: '/kənˈsensəs/', meaning: '共识；一致意见' }
    ]
  }
];
