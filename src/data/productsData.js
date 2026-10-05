// Flatlay Hoodie Color Variants (with M&S Vibes chest logo)
import flatlaySky from '../assets/hoodie-sky-flatlay.jpg';
import flatlayCamel from '../assets/hoodie-camel-flatlay.jpg';
import flatlayOlive from '../assets/hoodie-olive-flatlay.jpg';
import flatlayCream from '../assets/hoodie-cream-flatlay.jpg';
import flatlayDusty from '../assets/hoodie-dusty-flatlay.jpg';
import flatlayChocolate from '../assets/hoodie-chocolate-flatlay.jpg';

// Street Model Hoodie Color Variants (with M&S Vibes chest logo)
import modelSky from '../assets/hoodie-sky-model.jpg';
import modelCamel from '../assets/hoodie-camel-model.jpg';
import modelOlive from '../assets/hoodie-olive-model.jpg';
import modelCream from '../assets/hoodie-cream-model.jpg';
import modelDusty from '../assets/hoodie-dusty-model.jpg';
import modelChocolate from '../assets/hoodie-chocolate-model.jpg';

// Standalone Distinct Pieces (with M&S Vibes chest logo)
import pieceHangerCamel from '../assets/piece-hanger-hoodie-camel.jpg';
import piecePufferSky from '../assets/piece-puffer-set-sky.jpg';
import piecePufferOlive from '../assets/piece-puffer-set-olive.jpg';
import pieceCrewneckDusty from '../assets/piece-crewneck-set-dusty.jpg';
import pieceCrewneckSky from '../assets/piece-crewneck-sky.jpg';
import pieceCoatOlive from '../assets/piece-coat-set-olive.jpg';

// Styled Outfit & Collage Pieces (with M&S Vibes chest logo)
import prodImg3 from '../assets/mood-board-cyan.jpg';
import prodImg4 from '../assets/outfit-collage-cyan.jpg';
import outfitOliveCream from '../assets/2a5863f0-971b-40ff-b2e5-31ba557f3b80.jpg';
import outfitCamelBlue from '../assets/2ce9fbef-fa22-41b5-8002-9db9fa369036.jpg';
import outfitChocoBlue from '../assets/77991165-e37e-4f9e-8716-52b60b353e2f.jpg';
import outfitStreet4 from '../assets/27999424-c909-4e17-b39f-8c1bb58fc557.jpg';

// Exact Color Palette extracted from the reference clothing pieces
export const COLOR_PALETTE = [
  { id: 'sky', name: 'سماوي هادي', hex: '#7CC0E3', flatlay: flatlaySky, model: modelSky },
  { id: 'camel', name: 'بيج كامل', hex: '#C8A47E', flatlay: flatlayCamel, model: modelCamel },
  { id: 'olive', name: 'زيتي شتوي', hex: '#4B5335', flatlay: flatlayOlive, model: modelOlive },
  { id: 'cream', name: 'أوف وايت كريمي', hex: '#F2ECE1', flatlay: flatlayCream, model: modelCream },
  { id: 'dusty', name: 'أزرق داستي', hex: '#667F99', flatlay: flatlayDusty, model: modelDusty },
  { id: 'chocolate', name: 'بني شوكولاتة', hex: '#4A3529', flatlay: flatlayChocolate, model: modelChocolate },
];

export const products = [
  {
    id: 1,
    nameAr: 'هودي أوفرسايز ثقيل 340gsm — Classic Hoodie',
    category: 'Hoodies',
    titleEn: 'Signature Heavyweight Oversized Hoodie',
    price: 599,
    oldPrice: 750,
    tag: '🔥 BESTSELLER',
    tagColor: 'bg-[#FFD166] text-[#001428] border-[#001428]',
    defaultColor: 'sky',
    viewType: 'flatlay',
    img: flatlaySky,
    remaining: 42,
    rating: '4.9',
    reviewsCount: 184,
    description: 'قطعة الشتاء الأساسية من أرشيف M&S VIBES. هودي بقصة أوفرسايز مدروسة تمنحك إطلالة ستريت وير مريحة ومميزة. تم تطريز شعار الماركة الشهير يدويًا بدقة متناهية على الصدر الأيمن. مصنوع من أجود أقطان الميلتون الممشطة الثقيلة بوزن 340gsm، ومبطن من الداخل بطبقة وبرية ناعمة جداً على البشرة لتحميك من أشد برودة الشتاء دون أي وزن زائد.',
    material: '100% قطن مصري ميلتون ممشط ثقيل (340gsm) مع بطانة داخلية ناعمة معالجة ضد التحبب والانكماش.',
    features: [
      'تطريز شعار M&S Vibes الأصلي على الصدر من اليمين بخيوط يابانية عالية اللمعان والمتانة',
      'كابيشو مزدوج القماش يحافظ على شكله ولا يرتخي عند الارتداء',
      'جيب كانغرو أمامي عريض بأطراف معززة بخياطة بارتاك ضد التمزق',
      'أساور وكمر مرن من نفس الخامة المضلعة (Ribbed Cotton) لمنع دخول الهواء البارد',
      'قصة دروب شولدر (Drop-Shoulder) أوفرسايز عصرية تناسب الجنسين'
    ],
    care: [
      'غسيل بماء بارد أو فاتر على درجة حرارة 30° مئوية مقلوباً للحفاظ على التطريز',
      'تجنب استخدام المبيضات أو التنظيف الجاف القاسي',
      'الكي من الداخل على درجة حرارة متوسطة مع تجنب الكي المباشر على التطريز'
    ]
  },
  {
    id: 2,
    nameAr: 'جاكيت بافر مبطن + سويت بانتس — Puffer Set',
    category: 'Outerwear Sets',
    titleEn: 'Winter Shield Puffer Jacket & Fleece Pants Set',
    price: 749,
    oldPrice: 950,
    tag: '⚡ WINTER PUFFER',
    tagColor: 'bg-[#90E0EF] text-[#001428] border-[#001428]',
    defaultColor: 'sky',
    viewType: 'outfit',
    outfitImages: {
      sky: piecePufferSky,
      olive: piecePufferOlive,
      camel: piecePufferOlive,
      cream: piecePufferSky,
      dusty: outfitStreet4,
      chocolate: outfitChocoBlue,
    },
    img: piecePufferSky,
    remaining: 24,
    rating: '5.0',
    reviewsCount: 96,
    description: 'إطلالة شتوية متكاملة تجمع بين الدفء القصوى والأناقة العصرية. جاكيت بافر شتوي مقاوم للهواء والرياح مع عزل حراري فائق الخفة، مصحوب بسويت بانتس قطني مريح بلون كريمي هادئ. مطرز بشعار M&S Vibes على صدر الجاكيت الأيمن لإضفاء لمسة فاخرة.',
    material: 'الجاكيت: نسيج تقني عازل للرياح مع حشو مايكروفايبر خفيف الوزن وعالي التدفئة. البنطلون: قطن مصري ميلتون 340gsm.',
    features: [
      'ياقة مرتفعة مبطنة تحمي الرقبة من تيارات الهواء الباردة',
      'سوستة متينة بالكامل مع درع حماية قماشي داخلي',
      'بنطلون بحزام خصر مطاطي برباط تضييق وجيوب عميقة',
      'تطريز شعار M&S Vibes على صدر الجاكيت الأيمن',
      'مقاوم للماء الخفيف ورذاذ المطر السريع'
    ],
    care: [
      'غسيل يدوي أو دورة أقمشة حساسة في الغسالة',
      'التجفيف بالتعليق في الظل بعيداً عن مصادر الحرارة المباشرة'
    ]
  },
  {
    id: 3,
    nameAr: 'هودي هانجر ثقيل قطن مصري — Hanger Edition',
    category: 'Hoodies',
    titleEn: 'Sunlight Studio Heavyweight Hoodie Edition',
    price: 599,
    oldPrice: 750,
    tag: '✦ SUNLIGHT DROP',
    tagColor: 'bg-[#F4D6A6] text-[#001428] border-[#001428]',
    defaultColor: 'camel',
    viewType: 'outfit',
    outfitImages: {
      camel: pieceHangerCamel,
      sky: flatlaySky,
      olive: flatlayOlive,
      cream: flatlayCream,
      dusty: flatlayDusty,
      chocolate: flatlayChocolate,
    },
    img: pieceHangerCamel,
    remaining: 29,
    rating: '4.8',
    reviewsCount: 142,
    description: 'إصدار استوديو صن لايت بلون بيج كامل هادئ وراقي. تم تصميمه ليكون القطعة الأكثر تميزاً في خزانتك الشتوية مع لمسة كلاسيكية خالدة. اللوجو المطرّز باللون الكحلي الداكن يضفي توازناً بصرياً جذاباً على القماش البيج الناعم.',
    material: '100% قطن مصري عالي الجودة معالج بملمس خوخي ناعم (Peach Skin Finish) لا يسبب حساسية.',
    features: [
      'لون بيج شتوي دافئ معتمد ومطابق لأحدث صيحات الموضة العالمية',
      'تطريز كحلي داكن على الصدر الأيمن يبرز تفاصيل اللوجو الدقيقة',
      'خياطة متينة ومزدوجة في مناطق الضغط والأكتاف',
      'نسيج لا يلتصق به الغبار أو الخيوط الزائدة بسهولة'
    ],
    care: [
      'غسيل بماء بارد مقلوباً مع ألوان متطابقة',
      'الكي بدرجة حرارة معتدلة'
    ]
  },
  {
    id: 4,
    nameAr: 'سويت شيرت راوند أوفرسايز — Crewneck Drop',
    category: 'Sweatshirts',
    titleEn: 'Drop-Shoulder Round Neck Heavy Crewneck',
    price: 529,
    oldPrice: 680,
    tag: '✨ CREWNECK',
    tagColor: 'bg-[#FFF7E6] text-[#001428] border-[#001428]',
    defaultColor: 'sky',
    viewType: 'outfit',
    outfitImages: {
      sky: pieceCrewneckSky,
      dusty: pieceCrewneckDusty,
      camel: outfitCamelBlue,
      olive: pieceCoatOlive,
      cream: prodImg4,
      chocolate: outfitChocoBlue,
    },
    img: pieceCrewneckSky,
    remaining: 31,
    rating: '4.9',
    reviewsCount: 88,
    description: 'سويت شيرت راوند كرو نيك بدون كابيشو بقصة دروب شولدر واسعة وعصرية. مثالي للطبقات الشتوية (Layering) تحت الجواكت والبالطوهات، أو بمفرده لإطلالة ستريت وير نظيفة وخاطفة للأنظار. مزين بلوجو M&S Vibes المطرّز على الصدر الأيمن.',
    material: 'قطن ميلتون مصري فائق النعومة 340gsm، تقفيل نظيف وأطراف مرنة لا تتمدد.',
    features: [
      'ياقة دائرية كلاسيكية معززة بريب قطني مقاوم للتمدد أو الارتخاء',
      'تطريز بارز على الصدر من اليمين بتقنية التطريز عالي الكثافة',
      'أكمام طويلة واسعة مع نهاية مضلعة مريحة عند المعصم',
      'مناسب جداً للارتداء اليومي والجامعة والخروجات السريعة'
    ],
    care: [
      'غسيل بدرجة 30° مئوية، لا يعصر بقوة للحفاظ على نعومة القماش'
    ]
  },
  {
    id: 5,
    nameAr: 'هودي ستريت فِت ع الموديل — Street Fit',
    category: 'Hoodies',
    titleEn: 'Street-Tested Oversized Hoodie Fit',
    price: 549,
    oldPrice: 680,
    tag: '🔥 STREET FIT',
    tagColor: 'bg-[#90E0EF] text-[#001428] border-[#001428]',
    defaultColor: 'olive',
    viewType: 'model',
    img: modelOlive,
    remaining: 35,
    rating: '5.0',
    reviewsCount: 165,
    description: 'صورة حية للقطعة على الموديل لإظهار تفاصيل المقاس والقصة بدقة 100%. تم تصميم هذا الفِت ليعطيك الطول والعرض المثالي في حركة الكتف دون أن يبدو واسعاً بزيادة أو غير منسق. متوفر بجميع الألوان المميزة.',
    material: '100% قطن مصري فاخر 340gsm، مقاوم للغسيل المتكرر ولا يبهت لونه نهائياً.',
    features: [
      'تناسق حقيقي للأطوال والأكتاف مجرب على موديلز حقيقيين',
      'تطريز ناصع على الصدر الأيمن واضح وجذاب',
      'قماش ثقيل يعطي انسيابية وثبات ملحوظ في الهيكل الخارجي للهودي'
    ],
    care: [
      'غسيل بماء بارد، قلب الهودي على الوجه الداخلي قبل وضعه في الغسالة'
    ]
  },
  {
    id: 6,
    nameAr: 'طقم جاكيت بافر زيتي + هودي بيج — Olive Puffer',
    category: 'Outerwear Sets',
    titleEn: 'Urban Olive Puffer & Camel Fleece Sweat Set',
    price: 799,
    oldPrice: 990,
    tag: '✦ FULL OUTFIT',
    tagColor: 'bg-[#A5D6A7] text-[#001428] border-[#001428]',
    defaultColor: 'olive',
    viewType: 'outfit',
    outfitImages: {
      olive: piecePufferOlive,
      sky: piecePufferSky,
      camel: pieceHangerCamel,
      cream: prodImg3,
      dusty: pieceCrewneckDusty,
      chocolate: outfitChocoBlue,
    },
    img: piecePufferOlive,
    remaining: 19,
    rating: '4.9',
    reviewsCount: 73,
    description: 'تنسيق متكامل لا يحتاج لتفكير! بافر جاكيت زيتي عازل للحرارة والرياح مع هودي وبنطلون قطني بيج كامل بتناغم ألوان ترابية مستوحاة من الطبيعة. اللوجو مطرز على الجاكيت والهودي ليضمن وحدة الهوية.',
    material: 'مزيج فاخر من الأقمشة التقنية العازلة مع القطن المصري عالي الكثافة.',
    features: [
      'تنسيق ألوان شتوي راقي ومثبت في لوكات الخريف والشتاء العالمية',
      'شعار M&S مطرز على كلتا القطعتين لضمان الفخامة',
      'دفء فائق يتحمل أصعب درجات البرودة في السفر والخروجات الليلية'
    ],
    care: [
      'غسيل القطع القطنية على حدة والجاكيت بدورة أقمشة خاصة'
    ]
  },
  {
    id: 7,
    nameAr: 'طقم بالطو شتوي زيتي + سويتر بيج — Coat Set',
    category: 'Luxury Layers',
    titleEn: 'Heavyweight Wool Overcoat & Knit Layering Set',
    price: 849,
    oldPrice: 1050,
    tag: '💥 LUXE LAYER',
    tagColor: 'bg-[#FFD166] text-[#001428] border-[#001428]',
    defaultColor: 'olive',
    viewType: 'outfit',
    outfitImages: {
      olive: pieceCoatOlive,
      camel: outfitOliveCream,
      sky: prodImg3,
      cream: prodImg4,
      dusty: pieceCrewneckDusty,
      chocolate: outfitChocoBlue,
    },
    img: pieceCoatOlive,
    remaining: 22,
    rating: '5.0',
    reviewsCount: 110,
    description: 'إطلالة فاخرة تليق بالمناسبات الرسمية والخروجات المسائية الأنيقة. بالطو طويل بلون زيتي هادئ مصنوع من الجوخ المخلوط بالصوف الناعم، مصحوب بسويتر بيج محبوك وبنطلون بكسرات كلاسيكية. كل قطعة مطرزة بشعار M&S Vibes.',
    material: 'بالطو جوخ صوف ثقيل مع سويتر تريكو قطني محبوك وبنطلون كلاسيكي راقي.',
    features: [
      'قصة معطف كلاسيكية طويلة بياقة عريضة أنيقة',
      'تطريز دقيق جداً لشعار M&S Vibes على صدر البالطو والسويتر',
      'إطلالة Old Money راقية تناسب عشاق الهدوء والفخامة'
    ],
    care: [
      'تنظيف جاف (Dry Clean) للبالطو للحفاظ على بنية الصوف وقوامه'
    ]
  },
  {
    id: 8,
    nameAr: 'طقم سويتر داستي بلو + بنطلون وايد — Dusty Set',
    category: 'Casual Sets',
    titleEn: 'Dusty Blue Knit Sweater & Wide Pants Set',
    price: 679,
    oldPrice: 850,
    tag: '💥 HOT DEAL',
    tagColor: 'bg-[#FFB0BA] text-[#001428] border-[#001428]',
    defaultColor: 'dusty',
    viewType: 'outfit',
    outfitImages: {
      dusty: pieceCrewneckDusty,
      chocolate: outfitChocoBlue,
      camel: outfitCamelBlue,
      olive: outfitStreet4,
      sky: pieceCrewneckSky,
      cream: prodImg4,
    },
    img: pieceCrewneckDusty,
    remaining: 28,
    rating: '4.8',
    reviewsCount: 92,
    description: 'تنسيق شبابي مريح ومرح يتضمن سويتر كرو نيك محبوك بدرجة الأزرق الداستي مع بنطلون وايد ليج كريمي وكوفية كاروهات صوف دافئة. الشعار مطرز على الصدر الأيمن بأناقة لافتة.',
    material: 'تريكو ناعم مع قطن ممشط وبنطلون بجيوب جانبية مريحة.',
    features: [
      'لون أزرق داستي مميز ونادر في السوق المحلي',
      'تطريز كريمي أنيق على الصدر الأيمن',
      'بنطلون واسع برباط مطاطي لراحة فائقة طوال اليوم'
    ],
    care: [
      'غسيل بماء بارد، يفضل التجفيف المسطح للحفاظ على قياسات التريكو'
    ]
  },
];
