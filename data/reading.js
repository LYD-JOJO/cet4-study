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
  }
];
