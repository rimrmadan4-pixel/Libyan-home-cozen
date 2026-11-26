/*
  بيانات «تحدّي المطبخ الليبي»
  ============================
  لإضافة وصفة جديدة (كل فيديو جديد = وصفة جديدة):
    1) أضف مكوّناتها الناقصة في INGREDIENTS (مرة واحدة فقط، وتُستعمل في كل الوصفات).
    2) أضف عنصرًا جديدًا في RECIPES (انسخ أي وصفة موجودة وعدّلها).

  حقول الوصفة:
    id       اسم قصير بالإنجليزية بلا مسافات
    name     اسم الطبق كما يظهر للّاعب
    emoji    رمز يظهر على الصحن إن لم تكن هناك صورة
    section  'حلويات' أو 'مقبلات' أو 'أطباق رئيسية'
    ing      مفاتيح المكوّنات (من INGREDIENTS)
    main     المكوّنات الأساسية فقط (3 إلى 6، بلا ملح وماء وزيت وبهارات) وتُستعمل في لعبة «شن عندك في الثلاجة؟»
    steps    3 إلى 5 خطوات قصيرة بالترتيب الصحيح (تُستعمل في سؤال الترتيب)
    video    مسار الفيديو، مثل 'maqroud.mp4' (اختياري)
    img      صورة الطبق، مثل 'maqroud.jpg' (اختياري)
    url      رابط صفحة الوصفة في موقعك (اختياري، وإلا يُفتح الموقع الرئيسي)

  في INGREDIENTS:
    x:'s'  يعني أن المكوّن لا يدخل أبدًا في الحلويات (يُستعمل «دخيلًا» في وصفات الحلويات)
    x:'v'  يعني أن المكوّن لا يدخل أبدًا في الأطباق المالحة (يُستعمل «دخيلًا» في المالحة)
    ضع x فقط إذا كنت متأكدة 100%، وإلا فاتركه.
*/
window.GAME_DATA = {
  config: {
    siteUrl: 'https://rimrmadan4-pixel.github.io/Libyan-home-cozen/',
    gameUrl: '',          // رابط صفحة اللعبة نفسها للمشاركة. إن تُرك فارغًا يُستعمل رابط الصفحة الحالية
    questions: 5,         // عدد الأسئلة في الجولة
    points: 20,           // نقاط كل سؤال
    fridgeUrl: ''         // رابط أداة «شن عندك في الثلاجة؟» في موقعك (إن تُرك فارغًا يُفتح الموقع الرئيسي)
  },

  /*
    الأصوات: اكتبي اسم ملف التسجيل بين علامتي التنصيص بعد وضعه في مجلد audio.
    ما تُرك فارغًا لا يُشغَّل له صوت. المؤثرات (صح/خطأ) مولّدة تلقائيًا، وتُستبدل بملف إن وضعتِ اسمه في sfx.
  */
  audio: {
    dir: '',               // التسجيلات توضع بجانب index.html مباشرة
    files: {
      q_guess: 'q_guess.mp3', hint_guess: '',
      q_fridge: 'q_fridge.mp3', hint_fridge: '',
      q_intruder: 'q_intruder.mp3',
      q_order: 'q_order.mp3', hint_order: '',
      fb_wrong: '', res_retry: 'res_retry.mp3', fb_partial: ''
    },
    praise: ['praise1.mp3', 'praise2.mp3', 'praise3.mp3'],            // عدة تسجيلات للإجابة الصحيحة، يُختار منها واحد عشوائيًا
    sfx: { correct: '', wrong: '', partial: '', tick: '', nope: '', win: '', trophy: '', soft: '' }
  },

  ingredients: {
    semolina_coarse: { t: 'سميد خشن',          e: '🌾' },
    semolina_med:    { t: 'سميد متوسط',        e: '🌾' },
    flour:           { t: 'دقيق',              e: '🍞' },
    barley_flour:    { t: 'دقيق شعير',         e: '🌾' },
    oil:             { t: 'زيت',               e: '🫒' },
    oil_butter:      { t: 'زيت أو زبدة مذابة', e: '🧈' },
    ghee:            { t: 'سمن',               e: '🧈' },
    dates:           { t: 'عجينة تمر',         e: '🌴' },
    sesame:          { t: 'سمسم محمص',         e: '🟡' },
    sugar:           { t: 'سكر',               e: '🍬' },
    water:           { t: 'ماء',               e: '💧' },
    lemon:           { t: 'ليمون',             e: '🍋' },
    orange_blossom:  { t: 'ماء الزهر',         e: '🌸' },
    eggs:            { t: 'بيض',               e: '🥚' },
    cream:           { t: 'قشطة',              e: '🍦' },
    milk:            { t: 'حليب',              e: '🥛' },
    baking_powder:   { t: 'بيكنج باودر',       e: '🥄' },
    almonds:         { t: 'لوز مجروش',         e: '🌰' },
    yeast:           { t: 'خميرة',             e: '🫧' },
    salt:            { t: 'ملح',               e: '🧂' },
    cinnamon:        { t: 'قرفة',              e: '🪵' },

    coconut:         { t: 'جوز الهند',         e: '🥥', x: 'v' },
    cocoa:           { t: 'كاكاو',             e: '🍫', x: 'v' },
    condensed:       { t: 'حليب مكثف محلى',    e: '🥫', x: 'v' },
    vanilla:         { t: 'فانيلا',            e: '🌼', x: 'v' },
    oreo:            { t: 'بسكويت أوريو',      e: '🍪', x: 'v' },
    biscuit:         { t: 'بسكويت',            e: '🍪', x: 'v' },
    nescafe:         { t: 'نسكافيه',           e: '☕', x: 'v' },
    chantilly:       { t: 'شانتيه',            e: '🍨', x: 'v' },
    caramel_cream:   { t: 'كريمة كراميل',      e: '🍮', x: 'v' },

    onion:           { t: 'بصل',               e: '🧅', x: 's' },
    chickpeas:       { t: 'حمص',               e: '🫘', x: 's' },
    bzar:            { t: 'بزار',              e: '🟤', x: 's' },
    tomato_paste:    { t: 'معجون طماطم',       e: '🍅', x: 's' },
    tomato:          { t: 'طماطم',             e: '🍅', x: 's' },
    red_pepper:      { t: 'فلفل أحمر',         e: '🌶️', x: 's' },
    green_pepper:    { t: 'فلفل أخضر',         e: '🫑', x: 's' },
    smoked_pepper:   { t: 'فلفل مدخّن',        e: '🌶️', x: 's' },
    meat:            { t: 'لحم',               e: '🥩', x: 's' },
    pasta:           { t: 'مكرونة',            e: '🍝', x: 's' },
    cheddar:         { t: 'جبن شيدر',          e: '🧀', x: 's' },
    soup_grains:     { t: 'حبوب الشربة',       e: '🍲', x: 's' },
    parsley:         { t: 'بقدونس',            e: '🌿', x: 's' },
    mint:            { t: 'نعناع ناشف',        e: '🌿', x: 's' },
    potato:          { t: 'بطاطس',             e: '🥔', x: 's' },
    pumpkin:         { t: 'قرع أحمر',          e: '🎃', x: 's' },
    fenugreek:       { t: 'حلبة',              e: '🌱', x: 's' },

    green_onion:     { t: 'بصل أخضر', e: '🌱', x: 's' },
    garlic:          { t: 'ثوم', e: '🧄', x: 's' },
    black_pepper:    { t: 'فلفل أسود', e: '⚫', x: 's' },
    green_tomato:    { t: 'طماطم خضراء', e: '🍏', x: 's' },
    fish:            { t: 'حوت', e: '🐟', x: 's' },
    cumin:           { t: 'كمون', e: '🌿', x: 's' },
    couscous:        { t: 'كسكسي', e: '🥣', x: 's' },
    zucchini:        { t: 'كوسة', e: '🥒', x: 's' },
    eggplant:        { t: 'باذنجان', e: '🍆', x: 's' },
    minced_meat:     { t: 'لحم مفروم', e: '🥩', x: 's' },
    chicken_breast:  { t: 'صدر دجاج', e: '🍗', x: 's' },
    thyme:           { t: 'زعتر', e: '🌿', x: 's' },
    rosemary:        { t: 'إكليل', e: '🌿', x: 's' },
    chicken_spice:   { t: 'توابل الدجاج', e: '🍗', x: 's' },
    liver:           { t: 'كبدة', e: '🥩', x: 's' },
    chard:           { t: 'ورق سلق', e: '🥬', x: 's' },
    dill:            { t: 'بسباس', e: '🌿', x: 's' },
    coriander:       { t: 'كزبرة', e: '🌿', x: 's' },
    rishta:          { t: 'رشدة', e: '🍜', x: 's' },
    qadid: { t: 'قديد', e: '🥓', x: 's' },
    sheep_fat: { t: 'شحمة اللية', e: '🧈', x: 's' },
    beans: { t: 'فاصوليا جافة', e: '🫘', x: 's' },
    tripe: { t: 'كرشة', e: '🥩', x: 's' },
    intestines: { t: 'مصارين', e: '🥩', x: 's' },
    fennel: { t: 'عسلوز', e: '🌿', x: 's' },
    tuna: { t: 'تونة', e: '🐟', x: 's' },
    harissa: { t: 'هريسة', e: '🌶️', x: 's' },
    toast_bread: { t: 'خبز توست', e: '🍞' },
    olives: { t: 'زيتون', e: '🫒', x: 's' },
    cashew: { t: 'كاجو', e: '🥜' },
    nutella: { t: 'نوتيلا', e: '🍫', x: 'v' },
    banana: { t: 'موز', e: '🍌', x: 'v' },
    whip_cream: { t: 'كريمة خفق', e: '🍦', x: 'v' },
    choc: { t: 'شوكولاتة', e: '🍫', x: 'v' },
    dried_veg: { t: 'بصل وفلفل وطماطم مجففة', e: '🌶️', x: 's' },
    arugula: { t: 'جرجير', e: '🥬', x: 's' },
    clove: { t: 'قرنفل', e: '🌰' },
    turmeric: { t: 'كركم', e: '🟡' },
    starch:          { t: 'نشا', e: '⚪' },
    bureek_sheets:   { t: 'ورق بوريك', e: '📄' },
    butter:          { t: 'زبدة مذابة', e: '🧈' },
    cheese:          { t: 'جبنة', e: '🧀' },
    breadcrumbs:     { t: 'بقسماط', e: '🍞' },
    mozzarella:      { t: 'موزاريلا', e: '🧀' },
    kalash_sheets:   { t: 'ورق قلاش', e: '📄' },
    rice:            { t: 'أرز', e: '🍚' },
    olive_oil:       { t: 'زيت زيتون', e: '🫒' },
    orange:          { t: 'برتقال', e: '🍊' }
  },

  recipes: [
    {
      id: 'maqroud', name: 'مقروض ليبي معسل', emoji: '🍯', section: 'حلويات',
      video: '00_libyan_maqroud_with_honey_syrup.mp4', img: 'maqroud.jpg', url: '',
      ing: ['semolina_coarse', 'flour', 'oil_butter', 'dates', 'sesame', 'oil', 'sugar', 'water', 'lemon', 'orange_blossom'],
      main: ['semolina_coarse', 'flour', 'dates', 'sesame', 'sugar'],
      steps: [
        'بشّ السميد والدقيق والزيت جيدًا واتركه 3 ساعات على الأقل ليتشرب النكهات',
        'اعجن المزيج بقليل من الماء فقط حتى تحصل على عجينة متماسكة',
        'شكّل العجين بالحشوة وانقشه ثم اخبزه في فرن بحرارة عالية من فوق وتحت',
        'اغمسه فورًا في العسل (الشربات) البارد وهو ساخن'
      ]
    },
    {
      id: 'galaxy', video: '14_galaxy_basbousa.mp4', name: 'بسبوسة جالكسي', emoji: '🍰', section: 'حلويات', url: '',
      ing: ['eggs', 'cream', 'coconut', 'oil', 'sugar', 'milk', 'semolina_med', 'flour', 'cocoa', 'baking_powder', 'condensed'],
      main: ['semolina_med', 'coconut', 'cream', 'cocoa', 'condensed', 'eggs'],
      steps: [
        'اخلط البيض والقشطة وجوز الهند والزيت والسكر والحليب والسميد والدقيق والكاكاو',
        'افرد الخليط في صينية بسمك رقيق ثم اخبزه',
        'بعد الخبز بنحو 5 دقائق قطّعه وصبّ عليه الحليب المكثف المحلى الدافئ',
        'زيّن كل قطعة بصوص الشوكولاتة أو الكراميل أو الفستق ثم الكرانشي'
      ]
    },
    {
      id: 'ghraiba', name: 'الغريبة', emoji: '🍪', section: 'حلويات', video: '24_ghraiba.mp4', img: 'ghraiba.jpg', url: '',
      ing: ['ghee', 'oil', 'sugar', 'almonds', 'baking_powder', 'flour'],
      main: ['ghee', 'sugar', 'almonds', 'flour'],
      steps: [
        'اخلط السمن والزيت والسكر جيدًا',
        'أضف الدقيق مع البيكنج باودر شيئًا فشيئًا حتى تتشكل كرات ولا يبقى ملمس الدهن في اليد',
        'اترك العجين من نصف ساعة إلى ساعة ثم شكّله وضع عليه اللوز',
        'اخبزها من فوق فقط عند 170 درجة حتى تتشقق، ثم أطفئ النار العلوية وشغّل السفلية'
      ]
    },
    {
      id: 'oreo', video: '33_oreo_cake.mp4', name: 'كيكة الأوريو', emoji: '🍫', section: 'حلويات', url: '',
      ing: ['eggs', 'sugar', 'vanilla', 'milk', 'oil', 'flour', 'cocoa', 'baking_powder', 'oreo', 'cream', 'nescafe'],
      main: ['oreo', 'cocoa', 'eggs', 'cream', 'flour', 'milk'],
      steps: [
        'اخفق البيض والسكر والفانيلا نحو 5 دقائق حتى يبيضّ',
        'أضف الحليب والزيت ثم الدقيق والكاكاو والبيكنج باودر المنخولة',
        'ضع نصف الخليط في الصينية ثم طبقة الأوريو ثم باقي الخليط',
        'اخبزها 35 دقيقة من تحت ثم 5 دقائق من فوق وغطّها بقشطة الشوكولاتة'
      ]
    },
    {
      id: 'latte', video: '40_latte_cake_no_bake.mp4', name: 'كيك لاتيه', emoji: '☕', section: 'حلويات', url: '',
      ing: ['biscuit', 'chantilly', 'caramel_cream', 'cream', 'condensed', 'nescafe', 'milk'],
      main: ['biscuit', 'chantilly', 'caramel_cream', 'condensed', 'nescafe', 'cream'],
      steps: [
        'اخفق الشانتيه وكريمة الكراميل والقشطة والحليب المكثف والنسكافيه 10 دقائق',
        'اغمس البسكويت سريعًا في الحليب والنسكافيه وضعه طبقة أولى',
        'ضع فوقه نحو 1 سم من الكريمة ثم طبقة بسكويت أخرى وكرر',
        'رشّ البسكويت المطحون على الوجه وضعها في الثلاجة 4 ساعات'
      ]
    },
    {
      id: 'khobzat', name: 'خبزة كسكاس', emoji: '🫓', section: 'مقبلات', video: '08_couscous_bread.mp4', img: 'khobzat.jpg', url: '',
      ing: ['flour', 'yeast', 'sugar', 'salt', 'oil', 'water'],
      main: ['flour', 'yeast', 'sugar'],
      steps: [
        'اخلط الماء الدافئ والدقيق والخميرة والسكر والملح واتركه 15 دقيقة',
        'اجمعه مع الدقيق المفروك بالزيت واعجنهما جيدًا',
        'اترك العجين نحو ساعة حتى يتضاعف ثم افرده وقطّعه دوائر',
        'اتركها ترتاح ثم اطبخها على الوجهين'
      ]
    },
    {
      id: 'sfenj', video: '20_libyan_sfenj.mp4', img: 'sfenj.jpg', name: 'السفنز الليبي', emoji: '🍩', section: 'مقبلات', url: '',
      ing: ['flour', 'water', 'yeast', 'sugar', 'salt', 'oil'],
      main: ['flour', 'yeast', 'sugar'],
      steps: [
        'اخلط الماء الدافئ والخميرة والسكر والملح حتى يذوب السكر قليلًا',
        'أضف الدقيق واعجن نحو 10 دقائق ثم اتركه ساعة على الأقل',
        'قسّم العجين وافرد كل قطعة بيديك حتى تصير رقيقة وخفيفة',
        'اقلها في زيت وفير على الوجهين'
      ]
    },
    {
      id: 'basla', video: '22_libyan_onion.mp4', name: 'البصلة الليبية', emoji: '🧅', section: 'أطباق رئيسية', url: '',
      ing: ['onion', 'chickpeas', 'bzar', 'cinnamon', 'salt', 'oil', 'water'],
      main: ['onion', 'chickpeas', 'cinnamon'],
      steps: [
        'قطّع البصل شرائح رقيقة جدًا',
        'افرك البصل بيدك مع البزار والقرفة والملح وقليل من الزيت حتى تنفصل الشرائح',
        'ضع الحمص في القدر ثم البصل فوقه وكوب ماء كبير وغطّه',
        'اتركه على نار قوية 10 دقائق ثم على أقل نار 20 إلى 30 دقيقة'
      ]
    },
    {
      id: 'shorba', video: '26_libyan_soup.mp4', img: 'shorba.jpg', name: 'الشوربة الليبية', emoji: '🍲', section: 'أطباق رئيسية', url: '',
      ing: ['oil', 'tomato_paste', 'red_pepper', 'bzar', 'tomato', 'onion', 'meat', 'soup_grains', 'green_pepper', 'parsley', 'mint', 'water'],
      main: ['meat', 'soup_grains', 'tomato_paste', 'onion', 'tomato', 'mint'],
      steps: [
        'حمّر معجون الطماطم والفلفل الأحمر والبزار والطماطم المبشورة في الزيت',
        'أضف البصلة كاملة وقطع اللحم الصغيرة وقلّبها مع الصلصة',
        'أضف الماء المغلي مرة واحدة واتركها حتى ينضج اللحم',
        'أضف حبوب الشربة والفلفل الأخضر، وفي آخر دقيقة البقدونس، وافرك النعناع الناشف فوقها'
      ]
    },
    {
      id: 'mbakbka', name: 'مكرونة مبكبكة', emoji: '🍝', section: 'أطباق رئيسية', video: '25_mbakbka_macaroni.mp4', url: '',
      ing: ['pasta', 'oil', 'onion', 'green_pepper', 'tomato_paste', 'bzar', 'meat', 'smoked_pepper', 'cheddar', 'salt'],
      main: ['pasta', 'meat', 'onion', 'tomato_paste', 'smoked_pepper', 'cheddar'],
      steps: [
        'حمّر البصل مع الفلفل الأخضر في الزيت ثم أضف معجون الطماطم والبزار والملح',
        'أضف اللحم وقلّبه في الصلصة ثم الماء واتركه حتى ينضج',
        'أضف الماء إلى المرق ثم المكرونة والفلفل المدخن والفلفل الأخضر',
        'غطّها على نار قوية دقيقة أو دقيقتين ثم على أقل نار حتى تنضج، وقدّمها فوق شرائح الشيدر'
      ]
    },
    {
      id: 'bazin', name: 'بازين باللحم', emoji: '🥘', section: 'أطباق رئيسية', video: '30_bazin_with_meat.mp4', img: 'bazin.jpg', url: '',
      ing: ['barley_flour', 'water', 'salt', 'oil', 'onion', 'tomato_paste', 'bzar', 'red_pepper', 'meat', 'fenugreek', 'potato', 'pumpkin', 'green_pepper'],
      main: ['barley_flour', 'meat', 'potato', 'pumpkin', 'tomato_paste', 'fenugreek'],
      steps: [
        'اسكب دقيق الشعير المنخول في الماء المغلي المملّح',
        'اتركه على نار متوسطة نحو ساعة حتى ينضج جيدًا',
        'قلّب العجين بالمغرف حتى يصير متجانسًا',
        'كوّره في الصحن ودهنه بدهن المرق'
      ]
    },
    {
      id: 'marfousa', name: 'المرفوسة', emoji: '🍛', section: 'أطباق رئيسية',
      video: '42_libyan_marfousa.mp4', img: 'marfousa.jpg', url: '',
      ing: ['flour', 'salt', 'water', 'oil', 'tomato_paste', 'green_onion', 'onion', 'garlic', 'green_pepper', 'red_pepper', 'bzar', 'black_pepper', 'green_tomato'],
      main: ['flour', 'tomato_paste', 'green_onion', 'onion', 'garlic', 'green_tomato'],
      steps: [
        'اعجن الدقيق مع الملح والماء واتركه يرتاح قليلًا',
        'اطبخ الخبزة على طاوة ساخنة بلا زيت حتى تتحمر وقلّبها',
        'حمّر الطماطم في كوب الزيت ثم أضف البصل والثوم والفلفل المضروبين ضربة بسيطة مع البهارات وقليل من الماء',
        'فتّت الخبزة قطعًا صغيرة وصبّ عليها الخضرة وحرّك حتى تشرب المرق'
      ]
    },
    {
      id: 'fish_couscous', name: 'كسكسي بالحوت', emoji: '🐟', section: 'أطباق رئيسية',
      video: '41_libyan_fish_couscous.mp4', img: 'fish_couscous.jpg', url: '',
      ing: ['oil', 'green_pepper', 'garlic', 'tomato_paste', 'red_pepper', 'bzar', 'water', 'fish', 'cumin', 'couscous', 'salt', 'potato', 'zucchini', 'eggplant'],
      main: ['fish', 'couscous', 'tomato_paste', 'garlic', 'zucchini', 'eggplant'],
      steps: [
        'سخّن الزيت وقلّب فيه قرني الفلفل الأخضر ثم أخرجهما جانبًا',
        'أبعد القدر عن النار وأضف الثوم ثم الطماطم والفلفل الأحمر والبزار والماء واتركه حتى يثخن',
        'أضف الكمون والحوت واتركه ربع ساعة فقط حتى ينضج',
        'حبّب الكسكسي بالمرق وبخّره عدة مرات ثم زيّنه بالخضرة المقلية وضع الحوت فوقه'
      ]
    },
    {
      id: 'bureek', name: 'البوريك', emoji: '🥟', section: 'مقبلات',
      video: '01_libyan_bureek.mp4', img: 'bureek.jpg', url: '',
      ing: ['flour', 'starch', 'salt', 'oil', 'onion', 'minced_meat', 'bzar', 'red_pepper', 'tomato_paste', 'parsley', 'green_pepper', 'eggs', 'potato'],
      main: ['flour', 'minced_meat', 'onion', 'parsley', 'eggs', 'potato'],
      steps: [
        'اصنع ورق البوريك من الدقيق والماء والنشا والملح والزيت وادهنه بالزيت بين الورقات',
        'حمّر البصل بالزيت ثم أضف اللحم المفروم والبهارات وقليلًا من معجون الطماطم',
        'أضف نحو فنجان ماء حتى يجف ثم أضف البقدونس والبيض والبطاطس',
        'احشِ الورق واطوه ثم اقله'
      ]
    },
    {
      id: 'bureek_jabda', name: 'بوريك الجبدة', emoji: '🥐', section: 'مقبلات',
      video: '02_baked_bureek_jabda.mp4', img: 'bureek_jabda.jpg', url: '',
      ing: ['bureek_sheets', 'butter', 'minced_meat', 'parsley', 'cheese', 'eggs'],
      main: ['bureek_sheets', 'minced_meat', 'butter', 'parsley', 'cheese'],
      steps: [
        'خذ ورقة وورقة أخرى مقطوعة إلى النصف وضعهما فوق بعض',
        'ضع الحشوة وأغلقها على هيئة مثلث',
        'ادهن البوريك بالزبدة المذابة ثم بصفار البيض وانثر السمسم',
        'ادخله الفرن على 180 إلى 200 درجة نحو 25 إلى 30 دقيقة'
      ]
    },
    {
      id: 'scallop', name: 'طاجين سكالوب', emoji: '🍳', section: 'مقبلات',
      video: '04_scallop_tajine_chicken_escalope.mp4', img: 'scallop.jpg', url: '',
      ing: ['chicken_breast', 'eggplant', 'tomato', 'green_pepper', 'potato', 'eggs', 'breadcrumbs', 'mozzarella', 'parsley', 'salt', 'thyme', 'rosemary', 'black_pepper', 'chicken_spice'],
      main: ['chicken_breast', 'potato', 'eggplant', 'mozzarella', 'eggs', 'breadcrumbs'],
      steps: [
        'تبّل شرائح الدجاج بالملح والزعتر والإكليل والفلفل الأسود وتوابل الدجاج وضعها نيئة في الطاجين',
        'أضف طبقة البيض والبقسماط ثم البطاطس المقلية وفوقها بيضة أو اثنتان',
        'أضف الباذنجان المقلي وفوقه بيض نيء ثم الطماطم والفلفل',
        'غطّه بطبقة الموزاريلا المخلوطة بالبيض ثم اخبزه من تحت وحمّره من فوق'
      ]
    },
    {
      id: 'mubattan', name: 'المبطن الليبي', emoji: '🥔', section: 'مقبلات',
      video: '07_libyan_stuffed_potato_mubattan.mp4', img: 'mubattan.jpg', url: '',
      ing: ['potato', 'salt', 'water', 'flour', 'eggs', 'breadcrumbs', 'oil', 'minced_meat', 'parsley', 'onion', 'tomato_paste', 'bzar'],
      main: ['potato', 'minced_meat', 'parsley', 'onion', 'eggs', 'breadcrumbs'],
      steps: [
        'اقطع كل شريحة بطاطس بالسكين حتى النصف تقريبًا وانقعها في ماء وملح',
        'اعجن اللحم المفروم مع البصل والتوابل ومعجون الطماطم والبيض والبقدونس',
        'افتح البطاطس واحشها ثم غطّها بالدقيق فبياض البيض فالبقسماط',
        'اقلها حتى تتحمر فقط ثم انضجها بالبخار أو في الفرن'
      ]
    },
    {
      id: 'shawarma', name: 'شاورما مقلية', emoji: '🌯', section: 'مقبلات',
      video: '11_fried_shawarma.mp4', img: 'shawarma.jpg', url: '',
      ing: ['bureek_sheets', 'cheese', 'eggs', 'milk', 'breadcrumbs', 'oil', 'chicken_breast', 'onion', 'black_pepper', 'salt', 'thyme', 'garlic', 'green_pepper'],
      main: ['bureek_sheets', 'chicken_breast', 'cheese', 'eggs', 'breadcrumbs', 'onion'],
      steps: [
        'حمّر الدجاج مع البصل في الزيت والفلفل الأسود والملح والزعتر ثم أضف الثوم والفلفل الأخضر',
        'ضع الشاورما وشريحة الجبنة على ورقة البوريك',
        'اطوِ الجانبين ولفّها لفًّا',
        'اغمسها في خليط البيض والحليب ثم في البقسماط واقلها'
      ]
    },
    {
      id: 'kalash', name: 'كب القلاش بالكبدة', emoji: '🧁', section: 'مقبلات',
      video: '13_liver_kalash_cups.mp4', url: '',
      ing: ['kalash_sheets', 'ghee', 'liver'],
      main: ['kalash_sheets', 'ghee', 'liver'],
      steps: [
        'قطّع ورق القلاش مربعات وادهنها بالسمن أو الزبدة',
        'ضعها في قالب الكب كيك',
        'ادخلها الفرن نحو 10 دقائق حتى تأخذ اللون الذهبي',
        'احشها بالكبدة المطبوخة وقدّمها'
      ]
    },
    {
      id: 'dolma', name: 'الضولمة (البراك)', emoji: '🥬', section: 'أطباق رئيسية',
      video: '17_dolma_barak_stuffed_chard.mp4', img: 'dolma.jpg', url: '',
      ing: ['chard', 'parsley', 'dill', 'coriander', 'green_pepper', 'garlic', 'rice', 'meat', 'tomato_paste', 'bzar', 'salt', 'black_pepper', 'oil', 'onion'],
      main: ['chard', 'parsley', 'rice', 'meat', 'tomato_paste', 'green_pepper'],
      steps: [
        'اغسل ورق السلق جيدًا وجهّز ماءً مغليًا بلا إضافات',
        'انقع الورق في الماء المغلي 30 ثانية فقط',
        'اخلط مكونات الحشوة واملأ كل ورقة بها ولفّها',
        'رتّبها في الكسكاس وضعه على القدر وأحكم الغطاء واتركها من ساعة إلى ساعة وثلث'
      ]
    },
    {
      id: 'skewers', name: 'أسياخ الدجاج المقلية', emoji: '🍢', section: 'مقبلات',
      video: '19_fried_chicken_skewers.mp4', url: '',
      ing: ['chicken_breast', 'potato', 'green_pepper', 'tomato', 'onion', 'oil', 'olive_oil', 'garlic', 'salt', 'rosemary', 'thyme', 'black_pepper', 'flour', 'eggs', 'milk', 'breadcrumbs'],
      main: ['chicken_breast', 'potato', 'green_pepper', 'tomato', 'onion', 'breadcrumbs'],
      steps: [
        'قطّع البطاطس مكعبات غليظة واسلقها 5 دقائق فقط',
        'قطّع الدجاج بحجم البطاطس وتبّله بزيت الزيتون والثوم والملح والإكليل والزعتر واتركه ساعتين في الثلاجة',
        'ركّب الأسياخ بالترتيب: بطاطس ثم دجاج ثم فلفل وطماطم وبصل ثم بطاطس ودجاج',
        'غطّها بالدقيق ثم بخليط البيض والحليب ثم بالبقسماط واقلها في زيت غزير'
      ]
    },
    {
      id: 'khulasa', name: 'الخلاصة', emoji: '🍗', section: 'مقبلات',
      video: '21_khulasa_potato_wrapped_chicken_rolls.mp4', url: '',
      ing: ['potato', 'chicken_breast', 'salt', 'black_pepper', 'green_pepper', 'tomato', 'eggplant', 'flour', 'eggs', 'milk', 'breadcrumbs', 'oil'],
      main: ['potato', 'chicken_breast', 'green_pepper', 'tomato', 'eggplant', 'breadcrumbs'],
      steps: [
        'قطّع البطاطس شرائح عريضة واقلها',
        'قطّع صدر الدجاج نيئًا شرائح بحجم الإصبع وتبّله بالملح والفلفل الأسود',
        'ضع شرائح البطاطس فوق بعضها وعليها الدجاج والفلفل والباذنجان والطماطم ثم لفّها لفًّا محكمًا',
        'غطّها بالدقيق ثم البيض والحليب ثم البقسماط واقلها في زيت غزير'
      ]
    },
    {
      id: 'basti', name: 'كيكة باسطي', emoji: '🎂', section: 'حلويات',
      video: '15_basti_dry_cake.mp4', img: 'basti.jpg', url: '',
      ing: ['eggs', 'vanilla', 'sugar', 'milk', 'oil', 'flour', 'baking_powder', 'lemon', 'orange'],
      main: ['eggs', 'sugar', 'milk', 'flour', 'vanilla'],
      steps: [
        'اخفق البيض مع الفانيليا والسكر حتى يصير القوام لزجًا واللون أبيض',
        'أضف الحليب والزيت واخفقهما مع الخليط',
        'اغربل الدقيق مع البيكنج باودر مرتين وأضفه إلى الخليط السائل',
        'اسكبها في صينية قياسها 36 سم واخبزها على 230 درجة من تحت نحو 40 دقيقة ثم حمّرها من فوق 10 دقائق'
      ]
    },
    {
      id: 'tabahaj', name: 'طباج', emoji: '🍆', section: 'أطباق رئيسية',
      video: '38_tabahaj_baked_layered_vegetables_and_mea.mp4', url: '',
      ing: ['onion', 'potato', 'eggplant', 'green_tomato', 'green_pepper', 'meat', 'tomato_paste', 'bzar', 'red_pepper', 'garlic', 'oil', 'salt', 'water', 'black_pepper'],
      main: ['onion', 'potato', 'eggplant', 'green_tomato', 'meat', 'tomato_paste'],
      steps: [
        'ضع البصل شرائح رقيقة جدًا في الطاجين ثم البطاطس ثم الباذنجان',
        'ضع فوقها الفلفل الأخضر والطماطم الخضراء ثم اللحم آخر طبقة',
        'اخلط الصلصة من معجون الطماطم والبزار والفلفل الأحمر والثوم والزيت والملح والماء وصبّها على الطاجين',
        'غطّه بورق الألمنيوم وادخله فرنًا ساخنًا 40 دقيقة ثم انزعه وحمّره 20 دقيقة'
      ]
    },
    {
      id: 'zamaniya', name: 'بسبوسة زمنية بجوز الهند', emoji: '🥥', section: 'حلويات',
      video: '35_zamaniya_basbousa_with_coconut.mp4', img: 'zamaniya.jpg', url: '',
      ing: ['semolina_med', 'flour', 'eggs', 'vanilla', 'sugar', 'oil', 'milk', 'coconut', 'cream', 'baking_powder', 'water', 'lemon', 'cinnamon'],
      main: ['semolina_med', 'coconut', 'eggs', 'flour', 'sugar', 'milk'],
      steps: [
        'اخفق البيض والفانيليا والسكر ثم أضف باقي المكونات واخلطها',
        'ضع الخليط في طاجين مدهون بقليل من الزيت واخبزه على 200 درجة من تحت نحو نصف ساعة',
        'حين يثبت وجهها شغّل الفرن من فوق 10 دقائق إلى ربع ساعة حتى تحمرّ',
        'اسقها بالشربات الدافئ وهي ساخنة واتركها تتشرب إلى اليوم التالي ثم رش عليها جوز الهند'
      ]
    },
    {
      id: 'rishta', name: 'رشدة كسكاس', emoji: '🍜', section: 'أطباق رئيسية',
      video: '28_rishta_couscous.mp4', img: 'rishta.jpg', url: '',
      ing: ['rishta', 'oil', 'onion', 'tomato_paste', 'red_pepper', 'bzar', 'salt', 'meat', 'water', 'green_pepper', 'parsley'],
      main: ['rishta', 'meat', 'onion', 'tomato_paste', 'green_pepper'],
      steps: [
        'ضع الزيت في الطنجرة وأضف البصل ثم معجون الطماطم والفلفل الأحمر والبزار والملح وشطشطها',
        'أضف اللحم ثم الماء المغلي حتى يغطيه بنحو سنتيمترين وغطّ الطنجرة',
        'ضع الرشدة في الكسكاس الممسوح بالزيت وبخّرها حتى تنحل',
        'اسقها بزيت المرق وأعدها للكسكاس ثم اسقها بالبصلة وضع اللحم فوقها'
      ]
    }
    ,{
      id: 'cheese_tajine', name: 'طاجين الجبن', emoji: '🍳', section: 'أطباق رئيسية', video: '03_cheese_tajine.mp4', img: 'cheese_tajine.jpg', url: '',
      ing: ['potato', 'eggs', 'parsley', 'minced_meat', 'cheese'],
      main: ['potato', 'eggs', 'minced_meat', 'cheese', 'parsley'],
      steps: [
        'رتّب البطاطس المقلية في الطاجين',
        'أضف حشوة المفروم المطبوخ والبقدونس',
        'اخفق البيض مع جبنة المثلثات وصبّه فوق الطبقات',
        'أدخله الفرن بحرارة عالية من تحت حتى ينضج البيض ثم حمّره من فوق'
      ]
    }
    ,{
      id: 'layered_tajine', name: 'طاجين طبقات', emoji: '🥘', section: 'أطباق رئيسية', video: '05_layered_tajine.mp4', url: '',
      ing: ['potato', 'eggs', 'chicken_breast', 'minced_meat', 'cheese', 'parsley'],
      main: ['potato', 'eggs', 'minced_meat', 'cheese'],
      steps: [
        'ضع الطبقة الأولى من البطاطس المقلية وفوقها بيض مخفوق',
        'ضع الحشوة من المفروم المطبوخ أو الدجاج المطبوخ',
        'ضع جبنة الشرائح ثم طبقة ثانية من البطاطس المقلية وفوقها بيض',
        'زيّنه بالبقدونس أو فلفل الألوان وأدخله الفرن بحرارة عالية من تحت حوالي نصف ساعة ثم من فوق'
      ]
    }
    ,{
      id: 'lafshkiri', name: 'طاجين لافشكيري', emoji: '🍆', section: 'أطباق رئيسية', video: '06_lafshkiri_tajine.mp4', img: 'lafshkiri.jpg', url: '',
      ing: ['potato', 'eggplant', 'parsley', 'cheese', 'black_pepper', 'harissa', 'minced_meat', 'onion', 'eggs', 'mozzarella', 'milk'],
      main: ['potato', 'eggplant', 'minced_meat', 'mozzarella', 'eggs'],
      steps: [
        'اخلط البطاطس والباذنجان المقليين مع البقدونس والجبنة والفلفل والملح والهريسة والبيض للطبقة الأولى',
        'ضع المفروم المطبوخ مع البصل والبهارات وفوقه بيضة واحدة',
        'ضع طبقة البطاطس المطبوخة مع الموزاريلا والبيض وقليل من الحليب',
        'أدخله الفرن بحرارة عالية من تحت حوالي نصف ساعة ثم يحمرّ من فوق عندما ينضج البيض'
      ]
    }
    ,{
      id: 'samurai', name: 'صوص الساموراي المدخّن', emoji: '🌶️', section: 'مقبلات', video: '10_smoked_samurai_sauce.mp4', img: 'samurai.jpg', url: '',
      ing: ['smoked_pepper', 'water', 'cheese', 'milk', 'oil', 'garlic'],
      main: ['smoked_pepper', 'cheese', 'milk', 'garlic', 'oil'],
      steps: [
        'نظّف الفلفل المدخن من الداخل وضعه في ماء ساخن وغطّه حوالي 10 دقائق',
        'ضع في الخلاط الجبنة الشرائح والمثلثات والحليب والزيت والثوم',
        'أضف الفلفل المنقوع ومعه نحو نصف كوب من مائه الساخن بحسب القوام',
        'احفظه في الثلاجة ويمكنك وضع طبقة زيت بسيطة فوقه'
      ]
    }
    ,{
      id: 'fried_toast', name: 'توست مقلي', emoji: '🍞', section: 'مقبلات', video: '12_fried_toast.mp4', img: 'fried_toast.jpg', url: '',
      ing: ['toast_bread', 'eggs', 'milk', 'breadcrumbs', 'tuna', 'arugula', 'green_tomato', 'oil'],
      main: ['toast_bread', 'eggs', 'milk', 'breadcrumbs'],
      steps: [
        'قطّع التوست دوائر',
        'اغمسها في خليط البيض والحليب ثم في الخبزة المرحية (البقسماط)',
        'اقلها فتنتفخ ويصير داخلها مجوفًا',
        'احشها بما تحب'
      ]
    }
    ,{
      id: 'asban', name: 'عصبان', emoji: '🍲', section: 'أطباق رئيسية', video: '16_asban_stuffed_intestines.mp4', url: '',
      ing: ['intestines', 'parsley', 'dill', 'coriander', 'green_onion', 'onion', 'green_pepper', 'garlic', 'rice', 'liver', 'tomato_paste', 'red_pepper', 'bzar', 'salt', 'black_pepper'],
      main: ['intestines', 'rice', 'liver', 'parsley', 'garlic', 'green_pepper'],
      steps: [
        'قطّع الأعشاب والبصل والفلفل والثوم رقيقًا واخلط كل المكونات (عدا المصارين) جيدًا',
        'احشُ المصارين ولا تثقبها وأغلقها بعود الأسنان',
        'ضع العصبان في الماء المغلي على نار متوسطة إلى عالية حوالي 20 دقيقة',
        'اخفض النار إلى أقل درجة وأحكم غطاء الطنجرة حوالي نصف ساعة أخرى'
      ]
    }
    ,{
      id: 'bureek_tajine', name: 'طاجين البوريك', emoji: '🥧', section: 'أطباق رئيسية', video: '18_bureek_tajine.mp4', url: '',
      ing: ['bureek_sheets', 'potato', 'eggs', 'minced_meat', 'tomato_paste', 'parsley', 'breadcrumbs', 'cheese', 'olives'],
      main: ['bureek_sheets', 'potato', 'eggs', 'minced_meat', 'cheese'],
      steps: [
        'ادهن قاعدة الطاجين وضع ورق البوريك وادهنه بخليط الدهن حتى تصير 3 طبقات',
        'ضع البطاطس المقلية وفوقها بيضة نيئة ثم طبقة من ورق البوريك المدهون',
        'ضع البيض المسلوق والزيتون وجبنة الشرائح ثم بيضة نيئة وأغلقها بطبقتين من ورق البوريك',
        'ضع المفروم المطبوخ آخر طبقة وأدخله الفرن من تحت نصف ساعة ثم من فوق 10 دقائق'
      ]
    }
    ,{
      id: 'couscous_onion', name: 'كسكسي بالبصلة', emoji: '🥣', section: 'أطباق رئيسية', video: '23_couscous_with_onion.mp4', url: '',
      ing: ['couscous', 'oil', 'onion', 'green_pepper', 'tomato_paste', 'red_pepper', 'bzar', 'salt', 'meat', 'cinnamon', 'coriander', 'ghee', 'orange_blossom'],
      main: ['couscous', 'meat', 'onion', 'tomato_paste', 'ghee'],
      steps: [
        'ضع الزيت في الطنجرة وأضف البصل وقرن الفلفل الأخضر وشطشطه',
        'أضف معجون الطماطم والفلفل الأحمر والبزار والملح ثم اللحم والماء المغلي',
        'افرك الكسكسي بالزيت والملح وأضف كوب ماء ثم بخّره فوق المرق',
        'أنزله واسقه بالمرق وأضف السمن وماء الزهر ثم ضع اللحم فوقه واسقه بالبصلة'
      ]
    }
    ,{
      id: 'rice_onion', name: 'أرز بالبصلة', emoji: '🍚', section: 'أطباق رئيسية', video: '27_rice_with_onion.mp4', img: 'rice_onion.jpg', url: '',
      ing: ['rice', 'oil', 'onion', 'tomato_paste', 'red_pepper', 'bzar', 'salt', 'meat', 'water', 'cinnamon', 'potato', 'eggs'],
      main: ['rice', 'meat', 'onion', 'tomato_paste', 'oil'],
      steps: [
        'ضع الزيت في الطنجرة وأضف البصل وشطشطه حتى يصير لونه ذهبيًا',
        'أضف معجون الطماطم والفلفل الأحمر والبزار واللحم والماء المغلي',
        'خذ ثلاثة أرباع المرق وضعه في البصلة والربع الباقي ضعه على الأرز وحركه معه',
        'ضع اللحم على الأرز واسقه بالبصلة وزيّنه ببطاطس مقلية وبيض مطبوخ'
      ]
    }
    ,{
      id: 'rishta_barma', name: 'رشدة برمة (مقطّع)', emoji: '🍝', section: 'أطباق رئيسية', video: '29_rishta_barma_maqta.mp4', img: 'rishta_barma.jpg', url: '',
      ing: ['flour', 'water', 'salt', 'qadid', 'onion', 'tomato_paste', 'bzar', 'green_pepper', 'garlic', 'dill', 'oil'],
      main: ['flour', 'qadid', 'onion', 'tomato_paste', 'garlic'],
      steps: [
        'اعجن الماء مع الدقيق والملح جيدًا ويجب أن يكون العجين جافًا وقاسيًا',
        'افرد العجين بماكينة الرشدة وقطّعه شرائح طويلة ثم ضعها في سفرة مبخوخة بالدقيق',
        'ضع الزيت في الطنجرة وأضف القديد بدهنه والبصل ومعجون الطماطم والبزار والماء المغلي',
        'انفض الرشدة من الدقيق وضعها في المرق على نار هادئة جدًا حتى تنضج'
      ]
    }
    ,{
      id: 'rice_pilaf', name: 'أرز بلاو (بالخلطة)', emoji: '🍛', section: 'أطباق رئيسية', video: '31_rice_pilaf_with_liver_and_nuts.mp4', img: 'rice_pilaf.jpg', url: '',
      ing: ['rice', 'liver', 'onion', 'clove', 'green_pepper', 'green_tomato', 'cinnamon', 'black_pepper', 'ghee', 'oil', 'almonds', 'cashew', 'orange_blossom'],
      main: ['rice', 'liver', 'onion', 'ghee', 'almonds'],
      steps: [
        'املأ الطنجرة بأربعة أكواب ماء وضع فيها البصلة المثقوبة بالقرنفل والفلفل الأخضر والطماطم الخضراء وعود القرفة والفلفل الأسود',
        'ضع مكعبات الكبدة في الماء بعد أن يغلي ثم شطشطها مع الفلفل الأسود والقرفة',
        'اطبخ الأرز بالمرق حتى ينضج',
        'أضف الخلطة (الكبدة واللوز والكاجو) وحرّك حتى يتجانس الأرز معها'
      ]
    }
    ,{
      id: 'bounty', name: 'كيكة الباونتي', emoji: '🍫', section: 'حلويات', video: '32_bounty_cake.mp4', img: 'bounty.jpg', url: '',
      ing: ['eggs', 'oil', 'sugar', 'vanilla', 'cocoa', 'flour', 'baking_powder', 'nescafe', 'coconut', 'semolina_med', 'milk', 'choc', 'whip_cream'],
      main: ['eggs', 'cocoa', 'coconut', 'semolina_med', 'whip_cream', 'milk'],
      steps: [
        'اخلط مكونات كيكة الكاكاو وأضف في الآخر الماء المغلي الذي فيه النسكافيه ثم اخبزها',
        'اسق الكيكة بنصف كوب حليب مع النسكافيه',
        'اطبخ طبقة الباونتي (جوز الهند والسميد والحليب والسكر) حتى يصير قوامها مثل العجين وضعها فوق الكيكة',
        'أذب الشوكولاتة مع كريمة الخفق وضعها آخر طبقة ثم ضعها في الثلاجة حوالي ساعتين'
      ]
    }
    ,{
      id: 'veg_bread', name: 'خبازة خضراء', emoji: '🍞', section: 'أطباق رئيسية', video: '34_vegetable_bread_with_liver.mp4', url: '',
      ing: ['flour', 'water', 'sugar', 'salt', 'olive_oil', 'yeast', 'parsley', 'dill', 'coriander', 'green_onion', 'olives', 'thyme', 'mozzarella', 'harissa', 'liver', 'garlic', 'green_pepper', 'black_pepper', 'cumin', 'turmeric', 'sesame'],
      main: ['flour', 'yeast', 'parsley', 'liver', 'mozzarella', 'olive_oil'],
      steps: [
        'اعجن الماء الدافئ مع الدقيق والسكر والملح وزيت الزيتون والخميرة واتركه يتخمر',
        'أضف الأعشاب والبصل الأخضر والزيتون والزعتر والجبنة بعد التخمر الأول',
        'شكّل الكرات وضع في وسطها الحشوة (الكبدة) واتركها تتخمر مرة ثالثة في الطاجين حوالي نصف ساعة',
        'ادهن وجهها بصفار البيض مع قليل من الكركم وضع السمسم وأدخلها الفرن من فوق ومن تحت'
      ]
    }
    ,{
      id: 'burger_tajine', name: 'طاجين البرجر', emoji: '🍔', section: 'أطباق رئيسية', video: '36_burger_tajine.mp4', url: '',
      ing: ['flour', 'minced_meat', 'onion', 'eggs', 'potato', 'harissa', 'cheese', 'black_pepper', 'cinnamon', 'sesame', 'turmeric'],
      main: ['minced_meat', 'onion', 'eggs', 'potato', 'cheese'],
      steps: [
        'افرد العجينة وضعها في الطاجين',
        'ضع البطاطس المقلية والهريسة ثم حشوة المفروم المتبّل وجبنة الشرائح',
        'أضف البيض وغطّه بالعجينة',
        'ادهنه بصفار البيض مع الكركم وضع السمسم وأدخله الفرن'
      ]
    }
    ,{
      id: 'ghazala', name: 'بسبوسة الغزالة', emoji: '🍰', section: 'حلويات', video: '37_ghazala_basbousa.mp4', img: 'ghazala.jpg', url: '',
      ing: ['semolina_med', 'coconut', 'oil', 'vanilla', 'cream', 'starch', 'sugar', 'flour', 'lemon', 'water'],
      main: ['semolina_med', 'coconut', 'cream', 'starch', 'sugar'],
      steps: [
        'اخلط خليط البسبوسة (سميد وجوز هند وزيت وفانيليا)',
        'ضع كريمة القشطة المنزلية في خطوط على الطاجين',
        'أدخله الفرن من فوق فقط حتى يتحمر جيدًا من فوق',
        'أخرج البسبوسة واسقها بالشربات الدافئ وزيّنها بالفستق أو جوز الهند'
      ]
    }
    ,{
      id: 'cocoa_cake', name: 'كيكة شراب الكاكاو', emoji: '🍫', section: 'حلويات', video: '39_cocoa_syrup_cake_hot_chocolate_cake.mp4', img: 'cocoa_cake.jpg', url: '',
      ing: ['eggs', 'vanilla', 'sugar', 'milk', 'oil', 'cocoa', 'nescafe', 'baking_powder', 'flour'],
      main: ['eggs', 'cocoa', 'milk', 'nescafe', 'sugar'],
      steps: [
        'اخلط مكونات الكيكة جيدًا (بيض وسكر وحليب وزيت وكاكاو ونسكافيه ودقيق وبيكنج باودر)',
        'اخبزها في صينية 24 إلى 26 سم',
        'حضّر شراب الكاكاو من الحليب والكاكاو والسكر والزيت وسخّنه حتى يذوب',
        'اترك الكيكة 5 دقائق وهي سخنة ثم قطّعها وصبّ عليها الشراب وقدمها باردة'
      ]
    }
    ,{
      id: 'qadid_eggs', name: 'طبيخة الدحي بالقديد', emoji: '🍳', section: 'أطباق رئيسية', video: '43_eggs_with_qadid_stew.mp4', img: 'qadid_eggs.jpg', url: '',
      ing: ['qadid', 'onion', 'tomato', 'garlic', 'tomato_paste', 'salt', 'red_pepper', 'turmeric', 'cumin', 'eggs', 'oil', 'water'],
      main: ['qadid', 'onion', 'tomato', 'eggs', 'garlic'],
      steps: [
        'نحط الزيت في الطاجين ونحط البصل والطماطم ونقلبهم على نار متوسطة لين تذبل',
        'نضيف الطماطم المعجون والملح والكركم والفلفل ونحرك',
        'نضيف الماء السخون ونغطي ربع ساعة لين يطيب القديد وتطيب الصلصة',
        'نكسر البيض فوق الصلصة ونرش عليه الفلفل الأكحل والكمون ونغطي بدون تحريك'
      ]
    }
    ,{
      id: 'aish_qarqoush', name: 'عيش بالقرقوش', emoji: '🍲', section: 'أطباق رئيسية', video: '44_aish_with_qarqoush.mp4', img: 'aish_qarqoush.jpg', url: '',
      ing: ['qadid', 'olive_oil', 'dried_veg', 'tomato_paste', 'red_pepper', 'bzar', 'flour', 'water', 'salt', 'oil'],
      main: ['qadid', 'olive_oil', 'tomato_paste', 'flour', 'dried_veg'],
      steps: [
        'نحط زيت الزيتون في الطنجرة ونحمص القرقوش',
        'نضيف الفلفل المجفف والبصل المجفف والطماطم المجففة ونحمص مع التحريك',
        'نضيف الطماطم المعجون والفلفل الأحمر والبزار ونقلب لين تطيب',
        'نشكل العيش ونحط عليه من صلصة الطبيخة'
      ]
    }
    ,{
      id: 'beans_tripe', name: 'فاصوليا بالكرشة', emoji: '🫘', section: 'أطباق رئيسية', video: '45_libyan_beans_with_tripe.mp4', img: 'beans_tripe.jpg', url: '',
      ing: ['beans', 'onion', 'oil', 'sheep_fat', 'tomato_paste', 'bzar', 'red_pepper', 'salt', 'water', 'parsley', 'tripe', 'green_pepper'],
      main: ['beans', 'tripe', 'onion', 'tomato_paste', 'sheep_fat'],
      steps: [
        'نضع الزيت وشحمة اللية والبصل ونقلب',
        'نضيف معجون الطماطم والبزار والفلفل الأحمر والملح والماء',
        'نضع حب الفاصوليا في المرقة ونتركه على نار هادئة يتسبك',
        'نضع فلفل أخضر ورشة معدنوس ونقدمها'
      ]
    }
    ,{
      id: 'fennel_couscous', name: 'كسكسي بالعسلوز', emoji: '🥣', section: 'أطباق رئيسية', video: '46_couscous_with_wild_fennel.mp4', img: 'fennel_couscous.jpg', url: '',
      ing: ['couscous', 'fennel', 'oil', 'onion', 'garlic', 'tomato', 'red_pepper', 'green_pepper', 'dried_veg', 'water', 'coriander'],
      main: ['couscous', 'fennel', 'onion', 'garlic', 'tomato'],
      steps: [
        'نظّفي العسلوز جيدًا وانزعي منه الأوراق الصغيرة والزهرة ثم قطّعيه',
        'حطيه في الكسكاس على النار',
        'حضّري الصلصة بالبصل والثوم والطماطم والفلفل ثم حطيها على الكسكسي',
        'نزّلي الكسكسي وحطيه على الصلصة واخلطي واتركي شوية صلصة لوجهه'
      ]
    }
    ,{
      id: 'mathrouda', name: 'مثرودة', emoji: '🍞', section: 'أطباق رئيسية', video: '47_libyan_mathrouda.mp4', img: 'mathrouda.jpg', url: '',
      ing: ['flour', 'salt', 'water', 'ghee', 'almonds'],
      main: ['flour', 'salt', 'water', 'ghee'],
      steps: [
        'اعجني كيلو الدقيق مع الملح والماء جيدًا واتركيها ترتاح حوالي ساعة',
        'قطّعيها كورات وافتحي كل كورة حتى تصير رقيقة',
        'طبّقيها وحطي بين الطبقات السمن وطيّبيها في الطاوة على النار',
        'بعد ما تبرد افتحيها وقطّعيها وقدميها بالمكسرات والعسل'
      ]
    }
    ,{
      id: 'abouda', name: 'عبودة', emoji: '🌿', section: 'أطباق رئيسية', video: '48_libyan_abouda.mp4', img: 'abouda.jpg', url: '',
      ing: ['parsley', 'coriander', 'dill', 'onion', 'sheep_fat', 'meat', 'tomato_paste', 'red_pepper', 'bzar', 'salt'],
      main: ['parsley', 'coriander', 'onion', 'sheep_fat', 'meat', 'tomato_paste'],
      steps: [
        'اغسلي المعدنوس والكسبر والبسباس وخليهم يصفوا من الماء ويجفوا تمامًا',
        'لوثي المكونات كلها باللوسة (معجون الطماطم والفلفل الأحمر والبزار والملح)',
        'كوّري الخليط كورًا واضغطي كل كورة جيدًا وضعيها على الكسكاس والبخار طالع منه',
        'غطّيها وخليها على النار حوالي ساعة وفي آخر 10 دقائق نحّي الغطاء'
      ]
    }
    ,{
      id: 'rice_caramel', name: 'أرز باللحم والبصل المكرمل', emoji: '🍚', section: 'أطباق رئيسية', video: '49_rice_with_meat_and_caramelized_onion.mp4', img: 'rice_caramel.jpg', url: '',
      ing: ['rice', 'oil', 'onion', 'meat', 'sheep_fat', 'tomato_paste', 'bzar', 'red_pepper', 'cumin', 'ghee', 'water', 'parsley', 'potato'],
      main: ['rice', 'meat', 'onion', 'tomato_paste', 'oil'],
      steps: [
        'نحط الزيت والبصل ونكرمله',
        'نضيفوا اللحم وشحمة اللية والطماطم والبهارات والماء',
        'نطبخوا الأرز ونحبّبوه بالسمن والزيت أو الزبدة',
        'نحطوا الرز الأبيض في الطبق والمرقة فوقه ونزينوه ببطاطا مقلية أو رشة بقدونس'
      ]
    }
    ,{
      id: 'qalaya', name: 'القلاية (المصلّي) التراثية', emoji: '🥘', section: 'أطباق رئيسية', video: '50_traditional_libyan_qalaya_musalli.mp4', url: '',
      ing: ['meat', 'sheep_fat', 'liver', 'black_pepper', 'salt', 'oil', 'water'],
      main: ['meat', 'sheep_fat', 'liver', 'black_pepper'],
      steps: [
        'نقطعوا اللحم ونحطوه على النار مع شحمة اللية وفنجان ماء والفلفل الأسود والملح',
        'نخلوها على نار قوية لين تتفاعل ثم نغطوا عليها',
        'نقطعوا الكبدة والرية والكلاوي قطعًا رقيقة',
        'نضيفوا الزيت في النهاية ونحركوا الكبدة والرية والكلاوي ونقدموها مع خبزة سخونة'
      ]
    }
    ,{
      id: 'orange_nutella', name: 'كيكة البرتقال بالنوتيلا', emoji: '🍊', section: 'حلويات', video: '51_orange_nutella_layer_cake.mp4', img: 'orange_nutella.jpg', url: '',
      ing: ['biscuit', 'butter', 'cream', 'nutella', 'orange', 'sugar', 'milk', 'oil', 'flour', 'baking_powder', 'banana', 'eggs'],
      main: ['orange', 'nutella', 'biscuit', 'butter', 'cream'],
      steps: [
        'ضعي طبقة البسكويت مع الزبدة السايلة ومعها قطع موز',
        'اخلطي الكريمة السايلة مع النوتيلا',
        'اخبزي كيكة البرتقال وحدها ولما تبرد سقيها بعصير البرتقال',
        'ضعي الكريمة مع النوتيلا طبقة كبيرة زي التشيز كيك وزيّنيها بالنوتيلا'
      ]
    }
  ]
};
