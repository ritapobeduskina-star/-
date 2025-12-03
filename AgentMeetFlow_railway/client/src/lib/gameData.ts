import type { GameChapter, FinancialInstrument } from "@shared/schema";

export const INITIAL_MONEY = 100;
export const INITIAL_EXPERIENCE = 0;

export const financialTerms = [
  { term: "Вексель", description: "Письменное обязательство оплаты в будущем" },
  { term: "Флорин", description: "Золотая монета Флоренции" },
  { term: "Дукат", description: "Золотая монета Венеции" },
  { term: "Дебит", description: "Левая колонка в двойной записи" },
  { term: "Кредит", description: "Правая колонка в двойной записи" },
  { term: "Cambio", description: "Торговля иностранной валютой" },
  { term: "Трата", description: "Переводной вексель для торговцев" },
  { term: "Скудо", description: "Папская серебряная монета" },
  { term: "Гульден", description: "Монета используемая в германских землях" },
  { term: "Полица", description: "Страховое свидетельство на товар" },
  { term: "Консорциум", description: "Объединение купцов для торговли" },
  { term: "Портфель", description: "Набор различных инвестиций" },
  { term: "Дефолт", description: "Невозможность выплатить долг" },
  { term: "Процент", description: "Плата за заём денег" },
  { term: "Балансе", description: "Равновесие дебита и кредита" },
  { term: "Меняла", description: "Торговец, обменивающий валюты" },
];

export function getRandomTerm() {
  return financialTerms[Math.floor(Math.random() * financialTerms.length)];
}

export const financialInstruments: FinancialInstrument[] = [
  {
    id: "double-entry",
    renaissanceName: "Система двойной записи",
    renaissanceDescription: "Метод учёта, при котором каждая транзакция записывается дважды — на дебет и кредит, что позволяет избегать ошибок и контролировать финансы.",
    modernName: "Бухгалтерский учёт",
    modernDescription: "Современная система бухгалтерского учёта основана на принципах двойной записи, введённых Лукой Пачоли в XV веке.",
    icon: "BookOpen",
  },
  {
    id: "bill-of-exchange",
    renaissanceName: "Вексель (Lettera di Cambio)",
    renaissanceDescription: "Письменное обязательство оплаты в будущем, позволявшее торговцам вести дела без физической перевозки монет.",
    modernName: "Банковские переводы и облигации",
    modernDescription: "Современные банковские переводы и долговые обязательства унаследовали принципы средневековых векселей.",
    icon: "ScrollText",
  },
  {
    id: "diversification",
    renaissanceName: "Диверсификация торговли",
    renaissanceDescription: "Распределение капитала между разными товарами и направлениями для снижения рисков.",
    modernName: "Инвестиционный портфель",
    modernDescription: "Принцип диверсификации — основа современного управления инвестициями и портфельной теории.",
    icon: "PieChart",
  },
  {
    id: "credit-line",
    renaissanceName: "Кредитование торговцев",
    renaissanceDescription: "Предоставление денег под проценты для финансирования торговых операций.",
    modernName: "Банковские кредиты",
    modernDescription: "Современная кредитная система основана на практиках ренессансных банкиров.",
    icon: "Coins",
  },
  {
    id: "investment",
    renaissanceName: "Инвестиции в предприятия",
    renaissanceDescription: "Вложение средств в новые торговые предприятия с целью получения части прибыли.",
    modernName: "Венчурные инвестиции",
    modernDescription: "Современные венчурные фонды используют те же принципы рискового инвестирования.",
    icon: "TrendingUp",
  },
  {
    id: "lobbying",
    renaissanceName: "Влияние на власть",
    renaissanceDescription: "Использование богатства для защиты своих коммерческих интересов через связи с правительством.",
    modernName: "Лоббирование и GR",
    modernDescription: "Практика взаимодействия бизнеса с государством существует и сегодня.",
    icon: "Landmark",
  },
  {
    id: "insurance",
    renaissanceName: "Морское страхование",
    renaissanceDescription: "Система защиты торговцев от потерь при кораблекрушениях и пиратских атаках. Цена зависела от сезона и маршрута.",
    modernName: "Страхование (Insurance)",
    modernDescription: "Современное страховое дело зародилось в Ренессансе. Первые полисы были созданы во Флоренции и Генуе.",
    icon: "ShieldCheck",
  },
  {
    id: "bond",
    renaissanceName: "Государственные займы (Monti)",
    renaissanceDescription: "Государства выпускали долговые бумаги, которые приносили проценты. Флоренция и Венеция финансировали войны так же, как современные страны.",
    modernName: "Облигации и Государственные Ценные Бумаги",
    modernDescription: "Система государственных займов, созданная в Ренессансе, остаётся основой международного финансирования.",
    icon: "Banknote",
  },
  {
    id: "partnership",
    renaissanceName: "Торговые товарищества (Compagnia)",
    renaissanceDescription: "Объединение купцов с распределением прибыли по инвестициям. Товарищество могло существовать годы, передаваясь наследникам.",
    modernName: "Партнёрства и Акционерные Общества",
    modernDescription: "Современные компании берут начало от средневековых компаний купцов Ренессанса.",
    icon: "Users",
  },
  {
    id: "futures",
    renaissanceName: "Форвардные контракты",
    renaissanceDescription: "Соглашение купить или продать товар в будущем по зафиксированной цене. Например, контракт на урожай пшеницы.",
    modernName: "Фьючерсы и Форварды",
    modernDescription: "Современные биржи фьючерсов используют механизм, созданный торговцами Ренессанса.",
    icon: "TrendingUp",
  },
  {
    id: "letter-credit",
    renaissanceName: "Аккредитив (Lettera di Credito)",
    renaissanceDescription: "Письмо банка, гарантирующее платёж. Позволяло купцам путешествовать без больших сумм наличных денег.",
    modernName: "Банковские Аккредитивы",
    modernDescription: "Аккредитивы остаются важным инструментом международной торговли и используются во всём мире.",
    icon: "Mail",
  },
  {
    id: "compound-interest",
    renaissanceName: "Сложный процент",
    renaissanceDescription: "Начисление процентов на накопленные проценты. Это позволяло деньгам расти экспоненциально со временем.",
    modernName: "Сложный Процент в Финансах",
    modernDescription: "Сложный процент — основа современного инвестирования, пенсионных фондов и накопления богатства.",
    icon: "BarChart3",
  },
  {
    id: "audit-accounting",
    renaissanceName: "Ревизия и Аудит",
    renaissanceDescription: "Проверка счётов доверенными лицами для предотвращения мошенничества. Необходимо было для верификации двойной записи.",
    modernName: "Аудиторские Проверки",
    modernDescription: "Современный аудит берёт начало от практик ренессансных банкиров, которые проверяли честность друг друга.",
    icon: "CheckSquare",
  },
  {
    id: "currency-exchange",
    renaissanceName: "Таблица Валютных Курсов",
    renaissanceDescription: "Публичная таблица обменных курсов между городами. Позволяла купцам знать справедливую стоимость валют.",
    modernName: "Валютный Рынок (Forex)",
    modernDescription: "Современный рынок Forex стоит на основе системы валютных курсов, созданной в Ренессансе.",
    icon: "Globe",
  },
];

export const gameChapters: GameChapter[] = [
  {
    id: "intro",
    title: "Начало Пути",
    location: "Флоренция, Площадь Синьории",
    narrative: [
      "Звуки оживлённой торговли наполняют улицы Флоренции. Вокруг вас — цветные палатки с товарами, звуки торговли и смеха. Лавры и мраморные здания создают атмосферу процветания.",
      "Вы — меняла, мастер обмена валют и финансовых операций эпохи Ренессанса. Это время, когда деньги и идеи переплетаются, а банкиры становятся новыми аристократами. Ваша лавка стоит на Площади Синьории, где собираются купцы со всей Италии.",
      "Здесь вы каждый день обмениваете золотые флорины, венецианские дукаты, папские скудо. Ваш взгляд натренирован замечать малейшие подделки, а память хранит курсы валют всех крупных торговых центров.",
      "Но этого уже недостаточно. Конкуренция растёт, молодые банкиры вводят новые инструменты, и вы чувствуете, что мир финансов стремительно меняется.",
      "Сегодня вам предстоит принять важные решения, которые определят вашу судьбу и судьбу вашей семьи..."
    ],
    speaker: "Торговец",
    dialogue: [
      "Эй, меняла! Ты слышал о новой системе учёта, которую ввели банки? Говорят, это изменит всё! Медичи и их люди уже используют эту чёрную магию в своих расчётах."
    ],
    choices: [
      {
        id: "learn-double-entry",
        text: "Узнать больше о системе двойной записи",
        consequence: "Путь к финансовой грамотности",
        experienceChange: 0,
        moneyChange: 0,
        nextChapterId: "double-entry",
        usedInstrument: "double-entry",
      },
      {
        id: "ignore-continue",
        text: "Игнорировать и продолжать торговать",
        consequence: "Традиционный подход",
        experienceChange: 0,
        moneyChange: 0,
        nextChapterId: "trade-start",
      },
      {
        id: "apprentice-bank",
        text: "Предложить себя в ученики банку",
        consequence: "Путь в большой бизнес",
        experienceChange: 1,
        moneyChange: -10,
        nextChapterId: "financial-instruments",
        usedInstrument: "double-entry",
      },
    ],
  },
  {
    id: "double-entry",
    title: "Двойная Запись",
    location: "Банк Медичи",
    narrative: [
      "Вы решаетесь и направляетесь в величественное здание банка Медичи. Внутри всё сверкает роскошью: мраморные полы, резные потолки, витрины с драгоценностями. Вас встречает группа банкиров в дорогой одежде, обсуждающих новую систему учёта.",
      "Их речь быстра и полна непонятных терминов. Один из них, видимо старший, замечает ваш интерес и улыбается. Это человек лет пятидесяти с пронзительным взглядом, очевидно видевший многое в жизни.",
      "Комната пахнет чернилами и восковыми печатями. На столах — огромные кожаные книги с аккуратными записями. Каждая строка отражает движение денег в этой сложной сети торговли, кредитов и финансов."
    ],
    speaker: "Банкир",
    dialogue: [
      "Двойная запись позволяет избегать ошибок и отслеживать все транзакции. Это как магия для финансов! Каждый денарий мы можем проследить от источника к назначению.",
      "Видишь, каждая транзакция записывается дважды — на дебет и кредит. Это помогает контролировать деньги и видеть полную картину финансов. Если где-то не сходится — значит, где-то ошибка или воровство!"
    ],
    choices: [
      {
        id: "study-system",
        text: "Решить изучить систему и применить её в бизнесе",
        consequence: "+2 опыта — мудрое решение!",
        experienceChange: 2,
        moneyChange: -5,
        nextChapterId: "financial-instruments",
        usedInstrument: "double-entry",
      },
      {
        id: "doubt-system",
        text: "Усомниться в эффективности и отказаться от изучения",
        consequence: "-1 опыта — упущенная возможность",
        experienceChange: -1,
        moneyChange: 0,
        nextChapterId: "trade-start",
      },
      {
        id: "teach-others",
        text: "Предложить себя учителем этой системы",
        consequence: "+3 опыта, репутация растёт!",
        experienceChange: 3,
        moneyChange: 10,
        nextChapterId: "market-risks",
        usedInstrument: "double-entry",
      },
    ],
  },
  {
    id: "trade-start",
    title: "Торговля",
    location: "Mercato Vecchio",
    narrative: [
      "Вы возвращаетесь на Старый рынок, где кипит торговля. Здесь, среди запахов специй, шума торговцев и рева животных, вам кажется, что вы дома. Эта жизнь вам знакома и понятна.",
      "Рынок полон возможностей — ткани из Фландрии яркой красоты, специи с Востока, чей аромат разносится на километры, шёлк из Китая, белый как облако. Каждый товар — это потенциал для прибыли.",
      "Вокруг вас суетятся другие торговцы, торгуются с купцами, проверяют качество товаров. Многие уже давно знают вас и приветствуют. Ваша репутация честного менялы создала вам прочную клиентуру."
    ],
    speaker: "Вы",
    dialogue: [
      "Я знаю эти рынки, знаю спрос и предложение. Смогу ли я конкурировать с этими новыми методами? Пожалуй, рискну и попробую расширить бизнес..."
    ],
    choices: [
      {
        id: "invest-all",
        text: "Инвестировать все средства в ткани",
        consequence: "Высокий риск, высокая прибыль",
        experienceChange: 1,
        moneyChange: 30,
        nextChapterId: "financial-instruments",
      },
      {
        id: "diversify",
        text: "Диверсифицировать — купить также специи",
        consequence: "Безопасный вариант",
        experienceChange: 2,
        moneyChange: 15,
        nextChapterId: "financial-instruments",
        usedInstrument: "diversification",
      },
      {
        id: "slow-growth",
        text: "Начать с малого, постепенно растить бизнес",
        consequence: "Осторожный путь стабильности",
        experienceChange: 1,
        moneyChange: 5,
        nextChapterId: "financial-instruments",
      },
      {
        id: "partner-trade",
        text: "Найти партнёра и разделить риск и прибыль",
        consequence: "+2 опыта, нужны связи",
        experienceChange: 2,
        moneyChange: 8,
        nextChapterId: "market-risks",
      },
    ],
  },
  {
    id: "financial-instruments",
    title: "Финансовые Инструменты",
    location: "Контора менялы",
    narrative: [
      "Ваш бизнес растёт. Прошли месяцы, и вы уже видите первые плоды своих усилий. К вам в лавку приходит богатый венецианский купец, явно человек опытный и состоятельный.",
      "Его шелковистый плащ тёмно-синего цвета, украшенный золотыми нитями, и золотые кольца на пальцах говорят о его достатке. Он внимательно смотрит на ваши весы и записи.",
      "Купец достаёт красиво оформленный документ, написанный на пергаменте. Его печать выглядит очень официально и внушает доверие. Он улыбается и начинает рассказывать о новом способе ведения торговли."
    ],
    speaker: "Купец",
    dialogue: [
      "Этот вексель — не простой кусок бумаги. Это обещание, скреплённое честью и печатью нашего торгового консорциума. Он гарантирует вам выплату в будущем. С ним вы сможете торговать, не перевозя золото через опасные дороги.",
      "Представьте себе — бандиты могут ограбить вашего человека, корабль может утонуть в бурях. Но этот документ защищён нашей репутацией. Вы можете спокойно спать по ночам!",
      "Но как это работает? Очень просто — я подпишу обязательство выплатить вам указанную сумму в Венеции, а вы заплатите мне здесь, во Флоренции. Разница в курсах — это ваша прибыль."
    ],
    choices: [
      {
        id: "accept-bill",
        text: "Принять вексель и использовать его в сделках",
        consequence: "+3 опыта — инновационный подход!",
        experienceChange: 3,
        moneyChange: 20,
        nextChapterId: "market-risks",
        usedInstrument: "bill-of-exchange",
      },
      {
        id: "reject-bill",
        text: "Отказаться и продолжать работать с наличными",
        consequence: "-1 опыта — консервативный выбор",
        experienceChange: -1,
        moneyChange: 5,
        nextChapterId: "market-risks",
      },
      {
        id: "negotiate-bill",
        text: "Договориться о лучших условиях векселя",
        consequence: "+2 опыта, ловкое торговое решение",
        experienceChange: 2,
        moneyChange: 25,
        nextChapterId: "market-risks",
        usedInstrument: "bill-of-exchange",
      },
      {
        id: "create-network",
        text: "Предложить создать систему взаимных векселей",
        consequence: "+4 опыта, инновация!",
        experienceChange: 4,
        moneyChange: 15,
        nextChapterId: "competition",
        usedInstrument: "bill-of-exchange",
      },
    ],
  },
  {
    id: "market-risks",
    title: "Рынок Рисков",
    location: "Порт Ливорно",
    narrative: [
      "Месяцы спустя вы получаете письмо от молодого венецианца по имени Марко. Письмо написано горячей рукой, полно энтузиазма и больших планов. Марко приглашает вас на встречу в портовом городе Ливорно.",
      "В гавани вас встречает молодой человек лет двадцати пяти с горящим взглядом и энергией молодости. Его чёрные волосы развеваются на ветру, а улыбка светит даже в пасмурный день.",
      "Он почти бегом тащит вас на причал, где выгружаются корабли с невиданными прежде товарами. Ароматы какао, табака, гвоздики наполняют воздух. Марко жестикулирует, указывая на груды экзотического добра."
    ],
    speaker: "Предприниматель",
    dialogue: [
      "Видишь это? Это только начало! Я собираюсь открыть новый рынок для экзотических товаров из Нового Света! Шоколад, табак, невиданные специи — вещи, которые аристократы платят золотом!",
      "Новый Свет откроет новую эру торговли. Те, кто инвестирует рано, станут богаче, чем Медичи! Ты можешь быть частью этого. Ты можешь вложить деньги! Риск есть, конечно, но и прибыль может быть огромной, поверь мне!",
      "Я уже переговорился с несколькими капитанами. Нужно ещё денег для подготовки экспедиции. Если вложишь теперь, будешь получать процент с каждого груза!"
    ],
    choices: [
      {
        id: "invest-market",
        text: "Инвестировать в новый рынок",
        consequence: "Высокий риск, возможная высокая прибыль",
        experienceChange: 2,
        moneyChange: 50,
        nextChapterId: "success-failure",
        usedInstrument: "investment",
      },
      {
        id: "save-money",
        text: "Сохранить свои деньги и подождать",
        consequence: "Безопасный, но консервативный вариант",
        experienceChange: 0,
        moneyChange: 10,
        nextChapterId: "success-failure",
      },
      {
        id: "partial-invest",
        text: "Инвестировать половину средств в проект",
        consequence: "+1 опыта, смешанная стратегия",
        experienceChange: 1,
        moneyChange: 25,
        nextChapterId: "success-failure",
        usedInstrument: "investment",
      },
      {
        id: "become-partner",
        text: "Стать полноценным партнёром в венчуре",
        consequence: "+3 опыта, большие перспективы",
        experienceChange: 3,
        moneyChange: 35,
        nextChapterId: "bank-strategy",
        usedInstrument: "investment",
      },
      {
        id: "invest-reckless",
        text: "Вложить все деньги несмотря на сомнения",
        consequence: "Отчаянный ход — либо богатство, либо нищета",
        experienceChange: -2,
        moneyChange: 80,
        nextChapterId: "disaster-or-fortune",
      },
      {
        id: "inform-authorities",
        text: "Пожаловаться властям на подозрительного партнёра",
        consequence: "-3 опыта, но избежите мошенничества",
        experienceChange: -3,
        moneyChange: 5,
        nextChapterId: "competition",
      },
    ],
  },
  {
    id: "disaster-or-fortune",
    title: "Судьба Испытывает",
    location: "Порт Ливорно",
    narrative: [
      "Вы вложили всё. Корабли отплыли в Новый Свет с вашим капиталом на борту. Теперь остаётся только ждать. Ждать вестей, ждать возврата инвестиций, ждать судьбы.",
      "Месяцы проходят в томительном ожидании. Каждое поступившее письмо из портов может быть либо вестью о небывалом богатстве, либо сообщением о крушении корабля, потерявшегося в бурях."
    ],
    speaker: "Марко",
    dialogue: [
      "Новости! Наконец-то пришли новости! Дожди закончились, путь свободен... Но я боюсь открыть это письмо. Мой суд уже здесь..."
    ],
    choices: [
      {
        id: "fortune-wins",
        text: "Открыть письмо с верой в удачу",
        consequence: "Суперудача! +70 флоринов!",
        experienceChange: 5,
        moneyChange: 70,
        nextChapterId: "success-failure",
        usedInstrument: "investment",
      },
      {
        id: "tragedy-strikes",
        text: "Письмо содержит ужасные новости...",
        consequence: "Катастрофа! Корабль затонул!",
        experienceChange: -5,
        moneyChange: -90,
        nextChapterId: "recovery-attempt",
      },
    ],
  },
  {
    id: "recovery-attempt",
    title: "Попытка Восстановления",
    location: "Флоренция",
    narrative: [
      "Всё потеряно. Ваш капитал ушёл на дно Атлантики. Вы стоите на краю пропасти. Должны заимствовать или занимаются грабежом? Нет, вы честный человек.",
      "Но у вас остаются связи, ум и упорство. Есть ещё шанс восстановиться, если вы найдёте правильный путь."
    ],
    speaker: "Советник",
    dialogue: [
      "Я слышал о вашем несчастье. Но не всё потеряно. У меня есть три предложения, если вас это интересует..."
    ],
    choices: [
      {
        id: "work-for-medici",
        text: "Устроиться работать в банк Медичи",
        consequence: "+2 опыта, зарплата спасает",
        experienceChange: 2,
        moneyChange: 40,
        nextChapterId: "competition",
      },
      {
        id: "usury-temptation",
        text: "Заняться ростовщичеством и быстрым обогащением",
        consequence: "-4 опыта, опасный путь",
        experienceChange: -4,
        moneyChange: 60,
        nextChapterId: "criminal-path",
      },
      {
        id: "rebuild-slowly",
        text: "Медленно восстанавливать бизнес честным путём",
        consequence: "+1 опыта, долгий, но честный путь",
        experienceChange: 1,
        moneyChange: 15,
        nextChapterId: "competition",
      },
    ],
  },
  {
    id: "criminal-path",
    title: "Путь Греха",
    location: "Тёмные Переулки Флоренции",
    narrative: [
      "Вы скатились в мир ростовщичества. Деньги текут рекой, но цена высока. Крестьяне разоряются, семьи рушатся, и всё это ради вашего обогащения.",
      "Но грех никогда не проходит незамеченным. Церковь взывает к вам, люди проклинают ваше имя, а власти смотрят на вас с подозрением."
    ],
    speaker: "Священник",
    dialogue: [
      "Я знаю, что ты делаешь. Клеймо греховника уже на твоей душе. Раскайся перед тем, как уже слишком поздно..."
    ],
    choices: [
      {
        id: "continue-crime",
        text: "Продолжить и не слушать морализм",
        consequence: "-10 опыта, путь к полному разорению",
        experienceChange: -10,
        moneyChange: 50,
        nextChapterId: "ending",
      },
      {
        id: "seek-redemption",
        text: "Раскаяться и вернуться к честной торговле",
        consequence: "+3 опыта, но репутация повреждена",
        experienceChange: 3,
        moneyChange: -20,
        nextChapterId: "competition",
      },
    ],
  },
  {
    id: "success-failure",
    title: "Успех или Провал?",
    location: "Флоренция",
    narrative: [
      "Прошло несколько месяцев. Ваши корабли давно вернулись. Письма приходят в спешке, принесённые быстрыми курьерами. Новости либо радостны, либо ужасны.",
      "Вы сидите в своей лавке и пересчитываете прибыль или убытки. Ваши решения определили, богатеете ли вы или беднеете. Пришло время оценить результаты и выбрать следующий путь.",
      "Флоренция меняется вокруг вас. Старые способы ведения торговли отходят в прошлое. Новые финансовые инструменты и методы захватывают город. Вы должны решить — следовать ли новым веяниям или остаться верным проверенным путям."
    ],
    speaker: "Вы",
    dialogue: [
      "Пришло время оценить результаты и принять следующее важное решение. Смогу ли я конкурировать с великими банками? Или моя судьба — остаться простым торговцем? Может быть, пришла пора создавать собственный банк?"
    ],
    choices: [
      {
        id: "open-bank",
        text: "Открыть собственный банк",
        consequence: "Амбициозный шаг к величию",
        experienceChange: 3,
        moneyChange: -30,
        nextChapterId: "bank-strategy",
        usedInstrument: "credit-line",
      },
      {
        id: "continue-trade",
        text: "Продолжить как меняла и торговец",
        consequence: "Стабильность превыше всего",
        experienceChange: 1,
        moneyChange: 20,
        nextChapterId: "competition",
      },
      {
        id: "expand-trade",
        text: "Расширить торговую сеть в других городах",
        consequence: "+2 опыта, сетевой эффект",
        experienceChange: 2,
        moneyChange: 30,
        nextChapterId: "political-change",
      },
      {
        id: "retire-rich",
        text: "Уйти на пенсию с достаточным состоянием",
        consequence: "Золотой парашют",
        experienceChange: -1,
        moneyChange: -10,
        nextChapterId: "ending",
      },
    ],
  },
  {
    id: "bank-strategy",
    title: "Стратегия Развития",
    location: "Ваш новый банк",
    narrative: [
      "Вы открыли собственный банк! Это был отважный шаг — вы арендовали прекрасное здание недалеко от Палаццо Веккьо. Интерьер украшен гербами торговых гильдий и портретами могущественных торговцев.",
      "Первые клиенты с интересом присматриваются к новому учреждению. Некоторые приносят свои сбережения, другие наблюдают издалека. Ваша репутация честного человека привлекает людей, но конкуренция жестока.",
      "День открытия банка — это событие в жизни города. Вы видите в глазах людей смесь надежды и сомнения. Будете ли вы так же надёжны, как Медичи или Строцци? Или обанкротитесь, как многие авантюристы?"
    ],
    speaker: "Клиент",
    dialogue: [
      "Добрый день. Я готов доверить вам свои сбережения, но скажите честно — почему я должен доверять вашему банку? Что отличает вас от других? Почему я не должен отнести свои деньги в банк Медичи, где всё известно и проверено?"
    ],
    choices: [
      {
        id: "low-rates",
        text: "Привлечь клиентов низкими ставками по вкладам",
        consequence: "+5 опыта — клиентоориентированный подход",
        experienceChange: 5,
        moneyChange: -20,
        nextChapterId: "competition",
        usedInstrument: "credit-line",
      },
      {
        id: "high-rates",
        text: "Установить высокие проценты для избранных клиентов",
        consequence: "+2 опыта, но риск потерять клиентов",
        experienceChange: 2,
        moneyChange: 30,
        nextChapterId: "competition",
      },
      {
        id: "service-focus",
        text: "Сосредоточиться на сервисе и удобстве",
        consequence: "+4 опыта, лояльные клиенты",
        experienceChange: 4,
        moneyChange: 15,
        nextChapterId: "competition",
        usedInstrument: "credit-line",
      },
      {
        id: "niche-market",
        text: "Специализироваться на торговцах и путешественниках",
        consequence: "+3 опыта, нишевой подход",
        experienceChange: 3,
        moneyChange: 20,
        nextChapterId: "political-change",
        usedInstrument: "credit-line",
      },
      {
        id: "aggressive-expansion",
        text: "Агрессивно захватывать долю рынка",
        consequence: "+4 опыта, но враги повсюду",
        experienceChange: 4,
        moneyChange: 40,
        nextChapterId: "enemy-emerges",
      },
      {
        id: "fraud-risky",
        text: "Заняться финансовым мошенничеством",
        consequence: "-8 опыта, большие деньги, большой риск",
        experienceChange: -8,
        moneyChange: 100,
        nextChapterId: "caught-or-escape",
      },
    ],
  },
  {
    id: "enemy-emerges",
    title: "Враг Появляется",
    location: "Via de' Bardi",
    narrative: [
      "Ваша агрессивная тактика создала врага. Один из могущественных банкирских домов решил вас уничтожить. Они готовы использовать все доступные средства.",
      "На вас давит финансовый вес огромного противника. Вопрос лишь в том, выживете ли вы в этой борьбе."
    ],
    speaker: "Враг",
    dialogue: [
      "Ты зашёл слишком далеко, мелкий менша. Теперь я разорю тебя. Мои деньги говорят громче твоего высокомерия."
    ],
    choices: [
      {
        id: "fight-back",
        text: "Дать отпор всеми средствами",
        consequence: "+5 опыта или полный крах",
        experienceChange: 5,
        moneyChange: -50,
        nextChapterId: "victory-or-ruin",
      },
      {
        id: "seek-truce",
        text: "Предложить перемирие и разделение рынка",
        consequence: "+2 опыта, мир дороже войны",
        experienceChange: 2,
        moneyChange: 20,
        nextChapterId: "political-change",
      },
    ],
  },
  {
    id: "victory-or-ruin",
    title: "Финальное Противостояние",
    location: "Палаццо Веккьо",
    narrative: [
      "Вы совершили последний ход. Либо вы восторжествуете, либо падёте окончательно. Правительство Флоренции наблюдает. Они решат, кто из вас достоин остаться."
    ],
    speaker: "Магистрат",
    dialogue: [
      "Тот, кто сможет доказать свою честность и умение — получит мою поддержку. Кто из вас достоин?"
    ],
    choices: [
      {
        id: "victory-triumph",
        text: "Убедить магистрата в своей победе",
        consequence: "+20 опыта! Великая победа!",
        experienceChange: 20,
        moneyChange: 80,
        nextChapterId: "ending",
      },
      {
        id: "ruin-complete",
        text: "Магистрат выбирает вашего врага...",
        consequence: "Полное разорение",
        experienceChange: -15,
        moneyChange: -100,
        nextChapterId: "ending",
      },
    ],
  },
  {
    id: "caught-or-escape",
    title: "Поймут или Скроются?",
    location: "Флоренция",
    narrative: [
      "Ваше мошенничество наконец обнаружено. Инквизиция и государевы люди ищут вас. Есть только два пути: сбежать из города или повернуться лицом к правосудию."
    ],
    speaker: "Дозорный",
    dialogue: [
      "Во имя папы и государства, я ищу вас. Приготовьте свои дела."
    ],
    choices: [
      {
        id: "escape-city",
        text: "Бежать из Флоренции",
        consequence: "-20 опыта, изгнание",
        experienceChange: -20,
        moneyChange: 40,
        nextChapterId: "ending",
      },
      {
        id: "face-justice",
        text: "Предстать перед судом честно",
        consequence: "-15 опыта, но может быть помощь",
        experienceChange: -15,
        moneyChange: -80,
        nextChapterId: "ending",
      },
    ],
  },
  {
    id: "competition",
    title: "Конкуренция",
    location: "Via de' Bardi",
    narrative: [
      "Слава о вашем успехе распространилась по Флоренции быстро. Но успех привлекает внимание конкурентов. На улице Via de' Bardi, где находятся офисы крупнейших банкиров города, вам случайно встретиться с молодым амбициозным финансистом.",
      "Его зовут Алессандро, и он работает на одного из растущих банкирских домов. Его взгляд острый, почти враждебный. Он явно видит в вас угрозу, а может быть, просто интересного соперника.",
      "Вокруг вас всё ещё оживление торговцев и звон металла на весах. Вы стоите на одной из главных артерий финансовой жизни Флоренции, и здесь каждое слово имеет вес."
    ],
    speaker: "Конкурент",
    dialogue: [
      "Ваши методы устарели! Я предлагаю новые финансовые инструменты, которые затмят всё, что вы делаете! Буквально вчера я подписал соглашение с венецианской торговой галереей. Они предпочли моё предложение вашему.",
      "Посмотрим, кто выживет в этой борьбе. Флоренция большой город, но места на вершине немного. И я уверен, что это место принадлежит мне, а не вам!"
    ],
    choices: [
      {
        id: "invest-tech",
        text: "Инвестировать в новые методы и технологии",
        consequence: "+4 опыта, возможность расширения",
        experienceChange: 4,
        moneyChange: -15,
        nextChapterId: "political-change",
      },
      {
        id: "stay-course",
        text: "Остаться верным своим методам",
        consequence: "-2 опыта — опасный консерватизм",
        experienceChange: -2,
        moneyChange: 10,
        nextChapterId: "political-change",
      },
      {
        id: "ally-competitor",
        text: "Предложить конкуренту объединиться",
        consequence: "+3 опыта, монополия на двоих",
        experienceChange: 3,
        moneyChange: 25,
        nextChapterId: "political-change",
      },
      {
        id: "undercut",
        text: "Снизить цены и вытеснить конкурента",
        consequence: "-1 опыта, агрессивный подход",
        experienceChange: -1,
        moneyChange: 40,
        nextChapterId: "political-change",
      },
    ],
  },
  {
    id: "political-change",
    title: "Эпоха Перемен",
    location: "Палаццо Веккьо",
    narrative: [
      "Политическая ситуация в Флоренции меняется. Новое правительство пришло к власти совсем недавно, и уже объявляет о кардинальных изменениях. В городе слышны разговоры о новой налоговой системе.",
      "Вас срочно вызывают в Палаццо Веккьо, правительственный дворец. Вместе с другими банкирами и торговцами вы находитесь в большом зале с фресками, изображающими триумф флорентийской республики.",
      "Советник правительства, человек средних лет с суровым взглядом, объясняет новый план. Его слова словно удары молотка — четкие, решительные, неумолимые. Банкиры вокруг вас бледнеют, считая потенциальные убытки."
    ],
    speaker: "Советник",
    dialogue: [
      "Правительство планирует новые налоги на богатых торговцев и банкиров. Это может серьёзно повлиять на ваш бизнес! Налоговый сбор будет увеличен на треть, начиная со следующего месяца.",
      "Мы понимаем, что это тяжело. Но государство нуждается в деньгах для защиты города и поддержания общественного порядка. Вам нужно действовать быстро, пока не стало слишком поздно. Некоторые из вас могут даже выиграть от этих перемен, если правильно рассчитают свой ход."
    ],
    choices: [
      {
        id: "lobby",
        text: "Начать лоббировать интересы своего дела",
        consequence: "+5 опыта, но есть риски",
        experienceChange: 5,
        moneyChange: -25,
        nextChapterId: "ending",
        usedInstrument: "lobbying",
      },
      {
        id: "cut-costs",
        text: "Сократить расходы и создать резервы",
        consequence: "Безопасный, мудрый вариант",
        experienceChange: 2,
        moneyChange: 15,
        nextChapterId: "ending",
        usedInstrument: "diversification",
      },
      {
        id: "relocate",
        text: "Перенести бизнес в другой город",
        consequence: "+2 опыта, но теряете влияние",
        experienceChange: 2,
        moneyChange: 10,
        nextChapterId: "ending",
      },
      {
        id: "donate-influence",
        text: "Пожертвовать церкви и завоевать влияние",
        consequence: "+4 опыта, политическая защита",
        experienceChange: 4,
        moneyChange: -20,
        nextChapterId: "ending",
      },
    ],
  },
  {
    id: "ending",
    title: "Конец Пути",
    location: "Флоренция, много лет спустя",
    narrative: [
      "Прошли годы. Ваши решения определили вашу судьбу в мире финансов эпохи Ренессанса. От простого менялы вы прошли через испытания, риски, триумфы и, возможно, разочарования.",
      "Вы сидите в своей конторе и смотрите на записи ваших достижений. Каждое число рассказывает историю выбора, который вы когда-то сделали. Вы кардинально изменили мир финансов, или остались верны старым методам? Вы стали учителем новых поколений финансистов, или были забыты историей?",
      "Ваш путь завершён, но его влияние остаётся. Финансовые инструменты, которые вы использовали или отвергли, станут кирпичами в фундаменте современной банковской системы. Ренессансные методы торговли и кредитования благодаря людям, подобным вам, превратились в систему, которую мы используем сегодня."
    ],
    choices: [],
    isEnding: true,
  },
];

// Short game: intro -> trade-start -> competition -> ending
const shortGameChapters: GameChapter[] = [
  {
    id: "intro",
    title: "Начало Пути",
    location: "Флоренция, Площадь Синьории",
    narrative: [
      "Звуки оживлённой торговли наполняют улицы Флоренции. Вокруг вас — цветные палатки с товарами. Вы — меняла эпохи Ренессанса. Пришло время решить, как развивать свой бизнес."
    ],
    speaker: "Торговец",
    dialogue: [
      "Эй, меняла! Ты слышал о новой системе учёта? Это изменит всё!"
    ],
    choices: [
      {
        id: "learn-short",
        text: "Узнать больше о новых финансовых методах",
        consequence: "Путь к инновациям",
        experienceChange: 1,
        moneyChange: 5,
        nextChapterId: "trade-start",
        usedInstrument: "double-entry",
      },
      {
        id: "ignore-short",
        text: "Полагаться на традиционные методы",
        consequence: "Классический подход",
        experienceChange: 0,
        moneyChange: 0,
        nextChapterId: "trade-start",
      },
    ],
  },
  {
    id: "trade-start",
    title: "Торговля",
    location: "Mercato Vecchio",
    narrative: [
      "Вы на Старом рынке. Здесь полно возможностей для торговли. Пришло время рискнуть или остаться консервативным."
    ],
    speaker: "Вы",
    dialogue: [
      "Какую стратегию выбрать? Риск может принести большую прибыль или привести к краху."
    ],
    choices: [
      {
        id: "invest-all-short",
        text: "Инвестировать всё в дорогие ткани",
        consequence: "Высокий риск, высокая прибыль",
        experienceChange: 2,
        moneyChange: 40,
        nextChapterId: "competition",
      },
      {
        id: "diversify-short",
        text: "Диверсифицировать инвестиции",
        consequence: "Сбалансированный подход",
        experienceChange: 1,
        moneyChange: 15,
        nextChapterId: "competition",
        usedInstrument: "diversification",
      },
      {
        id: "safe-short",
        text: "Избежать рисков и остаться консервативным",
        consequence: "Безопасность превыше всего",
        experienceChange: 0,
        moneyChange: 5,
        nextChapterId: "competition",
      },
    ],
  },
  {
    id: "competition",
    title: "Конкуренция",
    location: "Via de' Bardi",
    narrative: [
      "Молодые банкиры конкурируют с вами на рынке. Конкуренция растёт, и вы должны решить, как ответить."
    ],
    speaker: "Конкурент",
    dialogue: [
      "Я вижу, что ты неплохо делаешь деньги. Но я буду лучше. Жди меня!"
    ],
    choices: [
      {
        id: "compete-aggressively",
        text: "Ответить агрессивной конкуренцией",
        consequence: "+2 опыта, рискованно",
        experienceChange: 2,
        moneyChange: 20,
        nextChapterId: "ending",
      },
      {
        id: "seek-peace",
        text: "Предложить сотрудничество вместо войны",
        consequence: "+1 опыта, мудрый выход",
        experienceChange: 1,
        moneyChange: 10,
        nextChapterId: "ending",
      },
      {
        id: "focus-niche",
        text: "Сосредоточиться на своей нише",
        consequence: "Стабильность вместо конфликта",
        experienceChange: 0,
        moneyChange: 5,
        nextChapterId: "ending",
      },
    ],
  },
  {
    id: "ending",
    title: "Конец Пути",
    location: "Флоренция",
    narrative: [
      "Ваш путь завершён. Вы сделали свой выбор в мире финансов Ренессанса. Теперь видны результаты ваших решений."
    ],
    choices: [],
    isEnding: true,
  },
];

// Medium game: intro -> double-entry -> market-risks -> success-failure -> bank-strategy -> competition -> ending
const mediumGameChapters: GameChapter[] = gameChapters
  .filter(ch => ["intro", "double-entry", "market-risks", "success-failure", "bank-strategy", "competition", "ending"].includes(ch.id))
  .map(ch => {
    // Fix nextChapterId to stay within medium mode chapters
    if (ch.id === "intro") {
      return {
        ...ch,
        choices: ch.choices.map(choice => ({
          ...choice,
          nextChapterId: choice.nextChapterId === "financial-instruments" ? "double-entry" : choice.nextChapterId === "trade-start" ? "double-entry" : choice.nextChapterId
        }))
      };
    }
    if (ch.id === "double-entry") {
      return {
        ...ch,
        choices: ch.choices.map(choice => ({
          ...choice,
          nextChapterId: choice.nextChapterId === "financial-instruments" ? "market-risks" : choice.nextChapterId
        }))
      };
    }
    if (ch.id === "market-risks") {
      return {
        ...ch,
        choices: ch.choices.map(choice => ({
          ...choice,
          nextChapterId: choice.nextChapterId === "bank-strategy" || choice.nextChapterId === "investment" || choice.nextChapterId === "credit-line" ? "success-failure" : choice.nextChapterId
        }))
      };
    }
    if (ch.id === "success-failure") {
      return {
        ...ch,
        choices: ch.choices.map(choice => ({
          ...choice,
          nextChapterId: choice.nextChapterId === "lobbying" || choice.nextChapterId === "criminal-path" || choice.nextChapterId === "political-change" ? "bank-strategy" : choice.nextChapterId
        }))
      };
    }
    if (ch.id === "bank-strategy") {
      return {
        ...ch,
        choices: ch.choices.map(choice => ({
          ...choice,
          nextChapterId: choice.nextChapterId === "open-bank" || choice.nextChapterId === "work-for-medici" ? "competition" : choice.nextChapterId
        }))
      };
    }
    if (ch.id === "competition") {
      return {
        ...ch,
        choices: ch.choices.map(choice => ({
          ...choice,
          nextChapterId: "ending"
        }))
      };
    }
    return ch;
  });

export function getChapterById(id: string, mode: "short" | "medium" | "full" = "full"): GameChapter | undefined {
  let chapters: GameChapter[];
  
  if (mode === "short") {
    chapters = shortGameChapters;
  } else if (mode === "medium") {
    chapters = mediumGameChapters;
  } else {
    chapters = gameChapters;
  }
  
  return chapters.find((chapter) => chapter.id === id);
}

export function calculateEnding(experience: number, money: number, mode: "short" | "medium" | "full" = "full"): {
  type: "success" | "failure" | "neutral";
  title: string;
  description: string;
} {
  // Adjust thresholds based on game mode
  let thresholds: { legendary: number; great: number; upperMiddle: number; middle: number; struggle: number };
  
  if (mode === "short") {
    thresholds = { legendary: 10, great: 6, upperMiddle: 4, middle: 2, struggle: 0 };
  } else if (mode === "medium") {
    thresholds = { legendary: 20, great: 14, upperMiddle: 10, middle: 6, struggle: 2 };
  } else {
    thresholds = { legendary: 30, great: 20, upperMiddle: 15, middle: 10, struggle: 5 };
  }
  
  const totalScore = experience + Math.floor(money / 20);
  const randomFactor = Math.random();

  // Legendary Outcomes
  if (totalScore >= thresholds.legendary) {
    return {
      type: "success",
      title: "Легенда Ренессанса",
      description: "Вы не просто банкир — вы стали легендой! Ваши достижения превосходят даже Медичи. Школы финансов учат по вашим методам, торговцы ссылаются на ваши решения, а папа приглашает вас в советники. Ваше имя будет помнить история, а ваша семья будет одной из самых влиятельных в Европе на столетия вперёд.",
    };
  }

  // Great Banker
  if (totalScore >= thresholds.great) {
    if (randomFactor < 0.5) {
      return {
        type: "success",
        title: "Великий Банкир Флоренции",
        description: "Вы достигли вершин финансового мира! Ваше имя стоит в одном ряду с Медичи и другими великими банкирами эпохи. Ваши методы станут основой для будущих поколений финансистов. Вы не только разбогатели, но и создали инновации, которые изменили весь финансовый мир.",
      };
    } else {
      return {
        type: "success",
        title: "Архитектор Современного Банкинга",
        description: "Вы переделали всю систему финансов Флоренции! Молодые банкиры изучают ваши инновации, конкуренты копируют ваши методы, а государство просит вашего совета. Вы стали не просто богатым человеком — вы стали творцом новой эпохи финансов.",
      };
    }
  }

  // Upper-Middle Success
  if (totalScore >= thresholds.upperMiddle) {
    if (randomFactor < 0.33) {
      return {
        type: "neutral",
        title: "Уважаемый Банкир",
        description: "Вы создали процветающий банк, который известен по всей Флоренции. Другие банкиры уважают вас за честность и деловую хватку. Вы приглашаетесь на важные встречи с богатыми купцами. Ваш статус в обществе значительно возрос, и ваша семья пользуется уважением.",
      };
    } else if (randomFactor < 0.66) {
      return {
        type: "neutral",
        title: "Успешный Торговец и Меняла",
        description: "Вы умело совмещали торговлю и финансовые операции, создав солидный капитал. Ваши торговые пути известны своей надёжностью, а вексели — своей честностью. Вы стали одним из самых надёжных деловых партнёров в городе, хотя и не достигли величия Медичи.",
      };
    } else {
      return {
        type: "neutral",
        title: "Герой Честного Бизнеса",
        description: "В мире, полном лжи и обмана, вы остались честны. Люди доверяют вам свои деньги и тайны. Вы становитесь символом честности в финансовых кругах. Может быть, вы не самый богатый, но вы самый уважаемый.",
      };
    }
  }

  // Middle Success
  if (totalScore >= thresholds.middle) {
    if (randomFactor < 0.33) {
      return {
        type: "neutral",
        title: "Успешный Торговец",
        description: "Вы построили прибыльный бизнес и заслужили уважение в торговых кругах Флоренции. Ваша семья будет обеспечена на поколения вперёд. Ваше имя известно среди купцов как честного и надёжного человека. Это не величие Медичи, но это достойная карьера.",
      };
    } else if (randomFactor < 0.66) {
      return {
        type: "neutral",
        title: "Процветающий Меняла",
        description: "Вы расширили свою лавку на площади, наняли помощников, и теперь обмен валют — процветающий бизнес. Иностранные купцы спешат именно к вам. Вы живёте комфортно, ваши дети не знают бедности, и это для вас достаточно.",
      };
    } else {
      return {
        type: "neutral",
        title: "Надёжный Партнёр",
        description: "Хотя вы не стали легендой, в финансовых кругах вас считают надёжным партнёром. Люди знают, что вас не обманешь и не кинешь. В Ренессансе такая репутация стоит золота. Вы живёте хорошо и спите спокойно.",
      };
    }
  }

  // Lower-Middle (Score 5-9)
  if (totalScore >= 5) {
    if (randomFactor < 0.5) {
      return {
        type: "neutral",
        title: "Скромный Меняла",
        description: "Ваш путь был непростым, но вы выжили и даже преуспели. Вы продолжаете работать на площади Синьории, но теперь у вас есть немного капитала. Жизнь научила вас осторожности. Вы живёте без роскоши, но и без забот о хлебе насущном.",
      };
    } else {
      return {
        type: "neutral",
        title: "Повезло Избежать Краха",
        description: "Вы совершили ошибки и потеряли деньги, но сумели восстановиться. Теперь вы ведёте консервативный бизнес, стараясь больше не рисковать. Люди считают вас человеком, которому повезло второй раз. Это урок, который вы запомнили навсегда.",
      };
    }
  }

  // Struggling (Score 0-4)
  if (totalScore >= 0) {
    if (randomFactor < 0.5) {
      return {
        type: "neutral",
        title: "Выживший",
        description: "Вы едва выжили в жестоком мире финансов. Ваша лавка всё ещё стоит на площади, но её будущее неясно. Каждый день — борьба. Вы мечтаете о том, чтобы когда-нибудь преуспеть, но пока просто пытаетесь остаться на плаву.",
      };
    } else {
      return {
        type: "neutral",
        title: "На Грани",
        description: "Вы находитесь на грани как успеха, так и разорения. Одно неправильное решение — и всё рухнет. Вы каждый день ходите по лезвию. Это изматывает, но вы не сдаётесь. Может быть, удача повернётся в вашу сторону?",
      };
    }
  }

  // Failure (Score < 0)
  if (totalScore < -10) {
    return {
      type: "failure",
      title: "Полное Разорение",
      description: "Ваши ошибки привели к катастрофическому краху. Вы потеряли всё: деньги, бизнес, дом. Теперь вы нищий на улицах Флоренции. Вас помнят как человека, который совершил серьёзные ошибки. Но даже в этом невезении, вы надеетесь на то, что когда-нибудь сможете начать сначала.",
    };
  } else {
    return {
      type: "failure",
      title: "Банкротство",
      description: "Неудачные решения привели вас к краху. Вы потеряли свой бизнес и большую часть капитала. Но помните — даже великие Барди и Перуцци однажды обанкротились, и всё же их имена остались в истории. Это не конец вашей истории, а новое начало. Может быть, вам повезёт больше в следующий раз.",
    };
  }
}

export function getUsedInstruments(usedInstrumentIds: string[]): FinancialInstrument[] {
  const uniqueIds = [...new Set(usedInstrumentIds)];
  return uniqueIds
    .map((id) => financialInstruments.find((inst) => inst.id === id))
    .filter((inst): inst is FinancialInstrument => inst !== undefined);
}
