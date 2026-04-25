const STORAGE_KEY = "new-warda-cart-v1";
const CHECKOUT_KEY = "new-warda-checkout-v1";
const LANGUAGE_KEY = "warda-language-v1";
const SERVICE_FEE = 75;
const WHATSAPP_NUMBER = "201000000000";

const copy = {
  ar: {
    dir: "rtl",
    locale: "ar-EG",
    currencyPrefix: "ج.م ",
    currencySuffix: "",
    pageTitle: "وردة باي سارة | فن وردي من مصر",
    metaDescription: "وردة باي سارة بتقدم فن وردي مصنوع بإيدين من مصر، مع بوكيهات ورد دايم، هدايا مخصصة، وشحن داخل مصر وللعالم.",
    brandAria: "الرجوع لبداية موقع وردة",
    menuAria: "فتح القائمة",
    cartAria: "فتح السلة",
    cartWord: "سلة",
    langToggle: "English",
    nav: ["الطلب", "تخصيص", "المقارنة", "الحكايات", "الاسئلة"],
    noteBadge: "ورد بيفضل",
    noteTitle: "قطع وردية هاندميد بتتعمل مخصوص حسب الطلب",
    heroEyebrow: "فن وردي بلمسة تدوم",
    heroTitle: "لفتة ورد بتفضل.",
    heroBody: "مستوحاة من الورد الطبيعي ومتشكلة بإيدين، وردة باي سارة بتقدم فن وردي للهدايا اللي تحسها شخصية، شيك، وبتعيش.",
    heroButtons: ["اتفرج على المجموعة", "ليه الورد الدائم"],
    heroCompareAria: "مقارنة بين ورد حقيقي وإصدار هاندميد مصنوع من خامات ناعمة",
    ribbon: [
      "هاندميد بالكامل",
      "بيفضل بعد المناسبة",
      "بيتلف كهدية",
      "يتعمل مخصوص ليك",
    ],
    trust: [
      ["بيتعمل حسب الطلب", "كل بوكيه بيتشكل ويتلف بعد ما الطلب يتأكد."],
      ["مصر وشحن للعالم", "الطلب مبني على إنستجرام وواتساب والشحن خارج من مصر."],
      ["فن شخصي", "الأسماء، الكروت، الألوان، الريبون، والتفاصيل كلها قابلة للتخصيص."],
    ],
    story: {
      eyebrow: "الفكرة",
      title: "مش مجرد ورد. ده فن وردي متعمل بإيدين.",
      body: "الورد الطبيعي بيدي الإحساس، ووردة باي سارة بتحوله لقطعة هاندميد هادية على التسريحة ومؤثرة في عيد ميلاد أو تخرج أو اعتذار أو ذكرى.",
    },
    compare: {
      eyebrow: "ليه الفكرة حلوة",
      title: "رومانسية الورد من غير النهاية.",
      body: "كل قطعة بتبدأ من روح الورد الطبيعي وبعدها تتحول لقطعة فنية ناعمة ورسالة وهدية صغيرة من غير ما تذبل.",
      cards: [
        ["مستوحى من ورد حقيقي", "اللون والشكل والإحساس متاخدين من بوكيهات طبيعية عشان الهدية تفضل وردية في إحساسها."],
        ["تتعمل عشان تفضل", "القطعة تفضل موجودة على المكتب أو الرف أو التسريحة بعد المناسبة بكتير."],
        ["شخصية من غير مبالغة", "الأسماء والألوان والكروت والإضافات الهادية بتخلي الهدية محسوبة بذوق."],
      ],
    },
    shop: {
      eyebrow: "الاختيارات",
      title: "قطع للهدايا اللي فيها ذوق",
      filters: ["الكل", "رومانسي", "مبهج", "هادي"],
    },
    products: {
      rose: { label: "رومانسي", name: "بلشينج روز", desc: "درجات وردي ناعمة متشكلة في بوكيه يدوم، مع ريبون وكارت شخصي." },
      sun: { label: "مبهج", name: "ليتل صن", desc: "ورد أصفر دافي للتخرج والشكر والبدايات اللي فيها طاقة حلوة." },
      pastel: { label: "ناعم", name: "باستيل ليتر", desc: "ألوان بودرية مع نوتة مكتوبة، مناسبة لرومانسية هادية أو اعتذار رقيق." },
      garden: { label: "معبر", name: "جاردن جيستشر", desc: "ألوان أكتر وفرحة أوضح، متعمل عشان يتصور بشكل جميل." },
      cloud: { label: "بريميوم", name: "كلاود بيس", desc: "سيقان بيضاء وبلاش مع تغليف بريميوم وريبون ونوتة بخط اليد." },
      event: { label: "مناسبات", name: "فورإيفر تيبل سيت", desc: "قطع وردية صغيرة للمناسبات والتخرج وترتيبات الهدايا والطاولات." },
      custom: { label: "مخصص", name: "بوكيه مخصص", button: "ضيفي القطعة المخصصة" },
    },
    addButton: "أضيفي",
    custom: {
      eyebrow: "تفصيل",
      title: "قطعة متفصلة على شخص واحد.",
      fields: ["مناسبة الهدية", "حجم البوكيه", "رسالة الكارت"],
      placeholder: "اكتبي الرسالة هنا",
      estimate: "التقدير",
      button: "ضيفي القطعة المخصصة",
    },
    feelings: {
      romance: "رومانسية هادية",
      birthday: "عيد ميلاد مبهج",
      graduation: "مفاجأة تخرج",
      apology: "اعتذار هادي",
      newhome: "بيت جديد وبداية حلوة",
    },
    sizes: {
      1: "وردة واحدة",
      2: "بوكيه صغير",
      3: "بوكيه هدية مخصص",
      4: "مجموعة هدية بريميوم",
    },
    customSummary: {
      withNote: "قطعة فن وردي بطابع {feeling} في شكل {size}، متلفة كهدية ومعاها كارت: \"{note}\"",
      withoutNote: "قطعة فن وردي بطابع {feeling} في شكل {size}، متلفة كهدية.",
    },
    delivery: {
      eyebrow: "طريقة الطلب",
      title: "إزاي تطلبي من وردة باي سارة.",
      steps: [
        ["اختاري التصميم", "اختاري من الصور الموجودة في الصفحة، أو ابعتي أي صورة عجباكي أونلاين، أو حتى احكيلنا فكرتك وإحنا نساعدك نحققها."],
        ["ابعتي بيانات التأكيد", "لتأكيد الأوردر ابعتي اسمك، رقم التليفون، العنوان، وصورة التحويل بعد ما تراجعي التفاصيل."],
        ["استلمي الطلب", "الأوردر بيوصلك خلال ٧ لـ ١٤ يوم من تاريخ تأكيد الأوردر وتحويل العربون أو المبلغ المطلوب."],
      ],
    },
    journal: {
      eyebrow: "الحكايات",
      title: "قصص بتعلي قيمة القطعة الهاندميد",
      titles: [
        "وردة بتفضل بعد المناسبة",
        "جوا أوردر عيد ميلاد متغلف بعناية",
        "تفاصيل شخصية من غير ما يضيع الإحساس الفخم",
      ],
    },
    faq: {
      eyebrow: "الاسئلة",
      title: "كل حاجة محتاجاها قبل ما تطلبي",
      intro: "هتلاقي هنا إجابات عن خطوات الطلب، وقت التوصيل، والتأكيد داخل مصر ولطلبات الشحن.",
      items: [
        ["التوصيل بياخد قد إيه؟", "الأوردر بيوصل خلال ٧ لـ ١٤ يوم من تاريخ تأكيد الأوردر واستلام صورة التحويل."],
        ["ينفع أطلب فكرة من عندي أو صورة من بره؟", "أيوه، تقدري تختاري من الصفحة أو تبعتي أي صورة أونلاين أو توصفيلنا اللي في خيالك وإحنا نساعدك فيه."],
        ["في توصيل جوه مصر أو بره؟", "أيوه، وردة باي سارة شغالة من مصر وبتنسق توصيل داخل مصر وكمان طلبات شحن مختارة للعالم."],
        ["إيه المطلوب لتأكيد الأوردر؟", "الاسم، رقم التليفون، العنوان، وصورة من التحويل. بعدهم الأوردر بيتأكد ويدخل التنفيذ."],
        ["أعمل إيه لو رسائل إنستجرام بطيئة؟", "لو الـ DM متأخر، ابعتي الطلب من هنا أو على واتساب وإحنا نكمل معاك التأكيد وصورة التحويل."],
      ],
    },
    cart: {
      eyebrow: "الدفع",
      title: "السلة",
      close: "قفل",
      empty: "السلة مستنية أول قطعة تدخلها.",
      subtotal: "الإجمالي",
      service: "تجهيز الهدية",
      total: "الإجمالي النهائي",
      remove: "حذف",
      decrease: "قللي العدد",
      increase: "زودي العدد",
      fields: ["الاسم الكامل", "الموبايل / واتساب", "الإيميل", "العنوان", "تاريخ التوصيل", "طريقة الدفع", "ملاحظات الطلب"],
      placeholders: {
        name: "اسمك",
        phone: "+20 1X XXX XXXX",
        email: "إيميل اختياري",
        address: "اكتبي العنوان بالتفصيل",
        notes: "اسم الشخص، لون الريبون، تفاصيل الهدية، وهل صورة التحويل هتتبعت على واتساب",
      },
      paymentOptions: ["اختاري الطريقة", "إنستا باي", "فودافون كاش", "تحويل بنكي"],
      helpEmpty: "ضيفي قطعة واحدة على الأقل عشان تكملي الطلب.",
      helpInvalid: "كملي الاسم، رقم التليفون، العنوان، التاريخ، وطريقة الدفع.",
      helpReady: "ملخص الطلب جاهز. زر الطلب متجهز دلوقتي، وبعد توصيله بفورم جوجل البيانات هتتبعت مباشرة.",
      order: "أكدي الطلب",
      message: {
        greeting: "أهلا وردة، حابة أأكد الطلب ده.",
        items: "تفاصيل الطلب:",
        subtotal: "الإجمالي",
        service: "تجهيز الهدية",
        total: "الإجمالي النهائي",
        name: "الاسم",
        phone: "الموبايل",
        email: "الإيميل",
        noEmail: "مش موجود",
        area: "العنوان",
        date: "تاريخ التوصيل",
        payment: "طريقة الدفع",
        notes: "ملاحظات الطلب",
        noNotes: "مفيش",
      },
    },
    footer: {
      body: "قطع وردية فنية من مصر، مستوحاة من الورد الحقيقي ومصممة للهدايا والذكريات والطلبات المحلية والعالمية.",
      top: "ارجعي لأول الصفحة",
    },
  },
  en: {
    dir: "ltr",
    locale: "en-EG",
    currencyPrefix: "EGP ",
    currencySuffix: "",
    pageTitle: "Warda by Sara | Floral Art from Egypt",
    metaDescription: "Warda by Sara creates handmade floral art in Egypt, with custom forever-flower bouquets, gifting pieces, and worldwide shipping.",
    brandAria: "Warda home",
    menuAria: "Toggle navigation",
    cartAria: "Open cart",
    cartWord: "bag",
    langToggle: "العربية",
    nav: ["Shop", "Custom", "Compare", "Journal", "FAQ"],
    noteBadge: "forever blooms",
    noteTitle: "Limited handmade floral keepsakes, composed to order",
    heroEyebrow: "artful forever florals",
    heroTitle: "A floral gesture that stays.",
    heroBody: "Inspired by fresh bouquets and shaped by hand, Warda by Sara creates floral art for gifts that feel personal, polished, and lasting.",
    heroButtons: ["Shop the edit", "Why forever flowers"],
    heroCompareAria: "Real flower inspiration compared with a handmade version",
    ribbon: [
      "made by hand",
      "kept beyond the occasion",
      "wrapped as a gift",
      "personalized on request",
    ],
    trust: [
      ["Handmade to order", "Every bouquet is shaped and wrapped after you place the order."],
      ["Egypt & worldwide shipping", "Built around Instagram discovery, WhatsApp ordering, and delivery from Egypt."],
      ["Artist-made and personal", "Names, cards, ribbons, colors, chocolates, and gift details can all be customized."],
    ],
    story: {
      eyebrow: "the idea",
      title: "Not just flowers. Floral art shaped by hand.",
      body: "Fresh flowers give the feeling. Warda by Sara turns that feeling into a handmade object: quiet enough for a vanity, meaningful enough for a birthday, graduation, apology, or anniversary.",
    },
    compare: {
      eyebrow: "why it works",
      title: "The romance of flowers, without the ending.",
      body: "Each piece begins with the language of real florals, then becomes something more permanent: a soft sculpture, a message, a piece of floral art that does not wilt.",
      cards: [
        ["Inspired by real blooms", "Color, silhouette, and mood are borrowed from fresh arrangements so the gift still reads floral."],
        ["Made to be kept", "The piece stays on a desk, shelf, or vanity long after the occasion has passed."],
        ["Personal without excess", "Names, colors, cards, chocolates, and subtle add-ons make the gift feel considered."],
      ],
    },
    shop: {
      eyebrow: "the edit",
      title: "Keepsakes for considered gifting",
      filters: ["All", "Romantic", "Bright", "Calm"],
    },
    products: {
      rose: { label: "romantic", name: "Blushing Rose", desc: "Soft rose tones shaped into a lasting bouquet, finished with ribbon and a personal card." },
      sun: { label: "bright", name: "Little Sun", desc: "Warm yellow blooms for graduations, thank-you moments, and cheerful new beginnings." },
      pastel: { label: "soft", name: "Pastel Letter", desc: "Powdery tones with a written note, made for gentle romance or quiet apologies." },
      garden: { label: "expressive", name: "Garden Gesture", desc: "A fuller color story for joyful gifting, styled to photograph beautifully." },
      cloud: { label: "premium", name: "Cloud Piece", desc: "White and blush stems with premium wrapping, ribbon, and a handwritten note." },
      event: { label: "event", name: "Forever Table Set", desc: "Small floral objects for events, graduations, dessert tables, and gift displays." },
      custom: { label: "custom", name: "Custom Forever Bouquet", button: "Add custom bouquet" },
    },
    addButton: "Add",
    custom: {
      eyebrow: "commission",
      title: "A piece composed around one person.",
      fields: ["Gift moment", "Bouquet size", "Card message"],
      placeholder: "Write your note here",
      estimate: "Estimate",
      button: "Add custom bouquet",
    },
    feelings: {
      romance: "gentle romance",
      birthday: "cheerful birthday",
      graduation: "graduation surprise",
      apology: "quiet apology",
      newhome: "fresh new home",
    },
    sizes: {
      1: "single stem",
      2: "small bouquet",
      3: "custom gift bouquet",
      4: "premium gift set",
    },
    customSummary: {
      withNote: "A floral art piece with a {feeling} mood in {size} form, wrapped for gifting and card: \"{note}\"",
      withoutNote: "A floral art piece with a {feeling} mood in {size} form, wrapped for gifting.",
    },
    delivery: {
      eyebrow: "how to order",
      title: "How ordering works with Warda by Sara.",
      steps: [
        ["Choose the design", "Choose from the page, send any online reference you like, or simply tell us your idea and we will help shape it."],
        ["Send confirmation details", "To confirm the order, send your name, phone number, address, and a screenshot of the transfer after reviewing the details."],
        ["Receive the order", "Orders arrive within 7 to 14 days from the order confirmation date and payment proof."],
      ],
    },
    journal: {
      eyebrow: "journal",
      title: "Stories that elevate the handmade piece",
      titles: [
        "The rose that stays after the occasion",
        "Inside a carefully wrapped birthday order",
        "Personal details without losing the luxury feel",
      ],
    },
    faq: {
      eyebrow: "faq",
      title: "Everything needed before you order",
      intro: "Questions about ordering steps, delivery timing, and confirmation are answered here.",
      items: [
        ["How long does delivery take?", "Orders arrive within 7 to 14 days from the order confirmation date and after the transfer proof is sent."],
        ["Can I order from another reference or my own idea?", "Yes. You can choose from the page, send any online reference, or describe your idea and Warda will help create it."],
        ["Do you deliver in Egypt or abroad?", "Yes. Warda by Sara is based in Egypt and can coordinate local delivery across Egypt as well as selected worldwide shipping."],
        ["What is needed to confirm the order?", "Name, phone number, address, and a screenshot of the transfer. Once these are sent, the order is confirmed."],
        ["How should I order if Instagram DMs are slow?", "If Instagram DMs are delayed, send the website summary or WhatsApp message and then send the transfer screenshot there."],
      ],
    },
    cart: {
      eyebrow: "checkout",
      title: "Basket",
      close: "close",
      empty: "Your bag is waiting for its first arrangement.",
      subtotal: "Subtotal",
      service: "Gift prep",
      total: "Total",
      remove: "Remove",
      decrease: "Decrease quantity",
      increase: "Increase quantity",
      fields: ["Full name", "Phone / WhatsApp", "Email", "Address", "Delivery date", "Payment method", "Order notes"],
      placeholders: {
        name: "Your name",
        phone: "+20 1X XXX XXXX",
        email: "Optional email",
        address: "Write the full address",
        notes: "Recipient name, ribbon color, gift details, and whether transfer proof will be sent on WhatsApp",
      },
      paymentOptions: ["Select method", "InstaPay", "Vodafone Cash", "Bank transfer"],
      helpEmpty: "Add at least one piece to continue with checkout.",
      helpInvalid: "Please complete your name, phone number, address, date, and payment method.",
      helpReady: "Your order summary is ready. The order button is now prepared to connect to a Google Form later.",
      order: "Place order",
      message: {
        greeting: "Hello Warda, I would like to place an order.",
        items: "Order items:",
        subtotal: "Subtotal",
        service: "Gift prep",
        total: "Total",
        name: "Name",
        phone: "Phone",
        email: "Email",
        noEmail: "Not provided",
        area: "Delivery area",
        date: "Delivery date",
        payment: "Payment method",
        notes: "Order notes",
        noNotes: "None",
      },
    },
    footer: {
      body: "Artist-made floral pieces from Egypt, inspired by real blooms and composed for gifting, keepsakes, and worldwide orders.",
      top: "Back to top",
    },
  },
};

const cartButton = document.querySelector(".cart-button");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const overlay = document.querySelector("#overlay");
const cartCount = document.querySelector("#cartCount");
const cartItems = document.querySelector("#cartItems");
const cartSubtotal = document.querySelector("#cartSubtotal");
const cartService = document.querySelector("#cartService");
const cartTotal = document.querySelector("#cartTotal");
const emptyCart = document.querySelector("#emptyCart");
const filters = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");
const feeling = document.querySelector("#feeling");
const size = document.querySelector("#size");
const message = document.querySelector("#message");
const customPrice = document.querySelector("#customPrice");
const customText = document.querySelector("#customText");
const customButton = document.querySelector(".sketch-card .add-cart");
const customSketch = document.querySelector("#customSketch");
const header = document.querySelector(".site-header");
const revealItems = document.querySelectorAll(".reveal");
const motionButtons = document.querySelectorAll(".nav-links a, .lang-toggle, .cart-button, .button, .filter, .add-cart, #closeCart");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-links a");
const checkoutForm = document.querySelector("#checkoutForm");
const customerName = document.querySelector("#customerName");
const customerPhone = document.querySelector("#customerPhone");
const customerEmail = document.querySelector("#customerEmail");
const deliveryArea = document.querySelector("#deliveryArea");
const deliveryDate = document.querySelector("#deliveryDate");
const paymentMethod = document.querySelector("#paymentMethod");
const orderNotes = document.querySelector("#orderNotes");
const checkoutHelp = document.querySelector("#checkoutHelp");
const orderButton = document.querySelector("#orderButton");
const langToggle = document.querySelector("#langToggle");
const brandText = document.querySelector(".brand span:last-child");
const brandLink = document.querySelector(".brand");
const metaDescription = document.querySelector('meta[name="description"]');
const heroArt = document.querySelector(".hero-art");
const ribbonItems = document.querySelectorAll(".ribbon-track span");
const trustItems = document.querySelectorAll(".trust-item");
const compareCards = document.querySelectorAll(".compare-card");
const deliveryArticles = document.querySelectorAll(".delivery-list article");
const journalTitles = document.querySelectorAll(".journal-grid h3");
const faqItems = document.querySelectorAll(".faq-item");
const checkoutLabels = document.querySelectorAll(".checkout-form label");
const customLabels = document.querySelectorAll(".custom-form label");
const footerTop = document.querySelector("#backToTop");
const footerBrand = document.querySelector("#footerBrand");
const footerBody = document.querySelector("#footerBody");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentLang = window.localStorage.getItem(LANGUAGE_KEY) || "ar";
let cart = loadCart();

function formatPrice(value) {
  const lang = copy[currentLang];
  const formatted = value.toLocaleString(lang.locale);
  return `${lang.currencyPrefix}${formatted}${lang.currencySuffix}`;
}

function getMinimumDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0];
}

function loadCart() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function saveCart() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function saveCheckoutDraft() {
  const payload = {
    customerName: customerName.value.trim(),
    customerPhone: customerPhone.value.trim(),
    customerEmail: customerEmail.value.trim(),
    deliveryArea: deliveryArea.value,
    deliveryDate: deliveryDate.value,
    paymentMethod: paymentMethod.value,
    orderNotes: orderNotes.value.trim(),
  };

  window.localStorage.setItem(CHECKOUT_KEY, JSON.stringify(payload));
}

function loadCheckoutDraft() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(CHECKOUT_KEY) || "{}");
    customerName.value = stored.customerName || "";
    customerPhone.value = stored.customerPhone || "";
    customerEmail.value = stored.customerEmail || "";
    deliveryArea.value = stored.deliveryArea || "";
    deliveryDate.value = stored.deliveryDate || getMinimumDate();
    paymentMethod.value = stored.paymentMethod || "";
    orderNotes.value = stored.orderNotes || "";
  } catch {
    deliveryDate.value = getMinimumDate();
  }
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("open");
}

function closeDrawer() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("open");
}

function getCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const service = subtotal > 0 ? SERVICE_FEE : 0;
  return { subtotal, service, total: subtotal + service };
}

function getTranslatedName(item) {
  if (item.productKey && copy[currentLang].products[item.productKey]) {
    return copy[currentLang].products[item.productKey].name;
  }
  return item.name;
}

function getTranslatedMeta(item) {
  if (!item.metaData) {
    return item.meta || "";
  }

  const feelingLabel = copy[currentLang].feelings[item.metaData.feelingKey] || item.metaData.feelingKey;
  const sizeLabel = copy[currentLang].sizes[item.metaData.sizeKey] || item.metaData.sizeKey;
  const template = item.metaData.note ? copy[currentLang].customSummary.withNote : copy[currentLang].customSummary.withoutNote;

  return template
    .replace("{feeling}", feelingLabel)
    .replace("{size}", sizeLabel)
    .replace("{note}", item.metaData.note || "");
}

function buildCartItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="cart-item-top">
      <div>
        <strong class="cart-item-name">${getTranslatedName(item)}</strong>
        ${getTranslatedMeta(item) ? `<div class="cart-item-meta">${getTranslatedMeta(item)}</div>` : ""}
      </div>
      <button class="remove-item" type="button" data-remove="${item.id}">${copy[currentLang].cart.remove}</button>
    </div>
    <div class="cart-item-bottom">
      <strong>${formatPrice(item.price * item.quantity)}</strong>
      <div class="qty-controls">
        <button class="qty-button" type="button" data-qty="${item.id}" data-change="-1" aria-label="${copy[currentLang].cart.decrease}">-</button>
        <span class="qty-value">${item.quantity}</span>
        <button class="qty-button" type="button" data-qty="${item.id}" data-change="1" aria-label="${copy[currentLang].cart.increase}">+</button>
      </div>
    </div>
  `;
  return li;
}

function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item) => cartItems.append(buildCartItem(item)));

  const { subtotal, service, total } = getCartTotals();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartCount.textContent = count.toLocaleString(copy[currentLang].locale);
  cartSubtotal.textContent = formatPrice(subtotal);
  cartService.textContent = formatPrice(service);
  cartTotal.textContent = formatPrice(total);
  emptyCart.hidden = cart.length > 0;
  cartItems.hidden = cart.length === 0;

  cartButton.classList.remove("cart-pulse");
  requestAnimationFrame(() => cartButton.classList.add("cart-pulse"));

  updateOrderLinks();
}

function addToCart({ name, price, meta = "", productKey = "", metaData = null }) {
  const existing = cart.find((item) => item.productKey === productKey && JSON.stringify(item.metaData || null) === JSON.stringify(metaData || null));

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: `${Date.now()}-${Math.random().toString(16).slice(2, 7)}`,
      name,
      productKey,
      price,
      quantity: 1,
      meta,
      metaData,
    });
  }

  saveCart();
  renderCart();
  openCart();
}

function updateQuantity(id, change) {
  cart = cart
    .map((item) => (item.id !== id ? item : { ...item, quantity: item.quantity + change }))
    .filter((item) => item.quantity > 0);

  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

function renderCustomSketch(level) {
  const bouquets = {
    1: `
      <path class="stem" d="M112 154 C108 126 109 97 112 61" />
      <path class="leaf" d="M108 112 C79 96 67 118 86 129 C99 136 108 112 108 112Z" />
      <path class="leaf" d="M116 104 C145 88 159 112 139 124 C126 132 116 104 116 104Z" />
      <circle cx="112" cy="49" r="19" />
      <path class="wrap" d="M73 122 L151 112 L136 171 L88 170Z" />
    `,
    2: `
      <path class="stem" d="M102 154 C98 126 99 93 105 58" />
      <path class="stem" d="M118 156 C121 123 128 90 139 58" />
      <path class="leaf" d="M102 112 C73 94 58 118 80 129 C95 137 102 112 102 112Z" />
      <path class="leaf" d="M122 104 C151 86 169 112 144 125 C128 134 122 104 122 104Z" />
      <circle cx="104" cy="51" r="18" />
      <circle cx="140" cy="47" r="16" />
      <path class="wrap" d="M67 122 L156 110 L140 172 L84 170Z" />
    `,
    3: `
      <path class="stem" d="M105 155 C101 125 103 91 111 56" />
      <path class="stem" d="M118 156 C120 121 127 89 140 55" />
      <path class="leaf" d="M105 111 C75 93 61 116 83 128 C98 137 105 111 105 111Z" />
      <path class="leaf" d="M124 103 C154 84 170 111 146 124 C130 133 124 103 124 103Z" />
      <circle cx="111" cy="48" r="18" />
      <circle cx="143" cy="45" r="16" />
      <circle cx="88" cy="64" r="15" />
      <path class="wrap" d="M63 122 L158 110 L139 172 L82 170Z" />
    `,
    4: `
      <path class="stem" d="M93 157 C90 130 91 104 96 70" />
      <path class="stem" d="M106 157 C103 126 107 95 113 58" />
      <path class="stem" d="M119 158 C121 126 127 94 138 61" />
      <path class="stem" d="M132 157 C137 128 145 100 154 69" />
      <path class="leaf" d="M99 117 C71 99 56 122 79 133 C93 141 99 117 99 117Z" />
      <path class="leaf" d="M124 111 C151 92 168 116 145 128 C129 136 124 111 124 111Z" />
      <path class="leaf" d="M113 130 C89 121 84 144 104 147 C117 149 113 130 113 130Z" />
      <circle cx="96" cy="61" r="15" />
      <circle cx="112" cy="47" r="18" />
      <circle cx="138" cy="50" r="17" />
      <circle cx="154" cy="64" r="14" />
      <circle cx="78" cy="76" r="13" />
      <path class="wrap" d="M58 124 L164 111 L144 174 L78 172Z" />
    `,
  };

  customSketch.innerHTML = bouquets[level] || bouquets[2];
}

function updateCustom() {
  const selected = copy[currentLang].sizes[size.value];
  const note = message.value.trim();
  const feelingLabel = copy[currentLang].feelings[feeling.value];
  const metaData = { feelingKey: feeling.value, sizeKey: size.value, note };
  const selectedPrice = { 1: 220, 2: 580, 3: 920, 4: 1450 }[size.value];

  customButton.dataset.price = String(selectedPrice);
  customPrice.textContent = formatPrice(selectedPrice);
  customText.textContent = (note ? copy[currentLang].customSummary.withNote : copy[currentLang].customSummary.withoutNote)
    .replace("{feeling}", feelingLabel)
    .replace("{size}", selected)
    .replace("{note}", note);
  customButton.dataset.name = copy[currentLang].products.custom.name;
  customButton.dataset.meta = customText.textContent;
  customButton.dataset.metaData = JSON.stringify(metaData);
  renderCustomSketch(size.value);
}

function validateCheckout() {
  const hasItems = cart.length > 0;
  const nameValid = customerName.value.trim().length >= 2;
  const phoneValid = customerPhone.value.trim().length >= 8;
  const areaValid = deliveryArea.value !== "";
  const dateValid = deliveryDate.value !== "";
  const paymentValid = paymentMethod.value !== "";

  return {
    valid: hasItems && nameValid && phoneValid && areaValid && dateValid && paymentValid,
    hasItems,
  };
}

function getAreaLabel() {
  return deliveryArea.value;
}

function getPaymentLabel() {
  const index = paymentMethod.selectedIndex;
  return index >= 0 ? copy[currentLang].cart.paymentOptions[index] : paymentMethod.value;
}

function buildOrderMessage() {
  const { subtotal, service, total } = getCartTotals();
  const lines = cart.map((item) => `- ${getTranslatedName(item)} x${item.quantity} (${formatPrice(item.price * item.quantity)})${getTranslatedMeta(item) ? ` | ${getTranslatedMeta(item)}` : ""}`);
  const labels = copy[currentLang].cart.message;
  const orderMessage = orderNotes.value.trim();

  return [
    labels.greeting,
    "",
    labels.items,
    ...lines,
    "",
    `${labels.subtotal}: ${formatPrice(subtotal)}`,
    `${labels.service}: ${formatPrice(service)}`,
    `${labels.total}: ${formatPrice(total)}`,
    "",
    `${labels.name}: ${customerName.value.trim()}`,
    `${labels.phone}: ${customerPhone.value.trim()}`,
    `${labels.email}: ${customerEmail.value.trim() || labels.noEmail}`,
    `${labels.area}: ${getAreaLabel()}`,
    `${labels.date}: ${deliveryDate.value}`,
    `${labels.payment}: ${getPaymentLabel()}`,
    `${labels.notes}: ${orderMessage || labels.noNotes}`,
  ].join("\n");
}

function updateOrderLinks() {
  const status = validateCheckout();
  const encodedMessage = encodeURIComponent(buildOrderMessage());
  orderButton.dataset.orderPayload = buildOrderMessage();
  orderButton.dataset.orderEncoded = encodedMessage;
  orderButton.setAttribute("aria-disabled", String(!status.valid));

  if (!status.hasItems) {
    checkoutHelp.textContent = copy[currentLang].cart.helpEmpty;
  } else if (!status.valid) {
    checkoutHelp.textContent = copy[currentLang].cart.helpInvalid;
  } else {
    checkoutHelp.textContent = copy[currentLang].cart.helpReady;
  }
}

function handleFilterClick(filter) {
  filters.forEach((item) => item.classList.remove("active"));
  filter.classList.add("active");

  productCards.forEach((card) => {
    const visible = filter.dataset.filter === "all" || card.dataset.category === filter.dataset.filter;
    if (visible) {
      card.hidden = false;
      card.classList.remove("is-filtering-out");
      card.classList.add("is-filtering-in");
      window.setTimeout(() => card.classList.remove("is-filtering-in"), 560);
    } else if (prefersReducedMotion) {
      card.hidden = true;
    } else {
      card.classList.add("is-filtering-out");
      window.setTimeout(() => {
        if (card.classList.contains("is-filtering-out")) {
          card.hidden = true;
        }
      }, 280);
    }
  });
}

function updateScrollMotion() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function applyLanguage(lang) {
  currentLang = lang;
  window.localStorage.setItem(LANGUAGE_KEY, lang);

  const langCopy = copy[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = langCopy.dir;
  document.title = langCopy.pageTitle;
  metaDescription.setAttribute("content", langCopy.metaDescription);
  brandLink.setAttribute("aria-label", langCopy.brandAria);
  menuButton.setAttribute("aria-label", langCopy.menuAria);
  cartButton.setAttribute("aria-label", langCopy.cartAria);
  langToggle.textContent = langCopy.langToggle;
  cartButton.querySelector("span").textContent = langCopy.cartWord;
  brandText.textContent = lang === "ar" ? "وردة" : "Warda";

  navLinks.forEach((link, index) => {
    link.textContent = langCopy.nav[index];
  });

  document.querySelector(".paper-note span").textContent = langCopy.noteBadge;
  document.querySelector(".paper-note strong").textContent = langCopy.noteTitle;
  document.querySelector(".hero-copy .eyebrow").textContent = langCopy.heroEyebrow;
  document.querySelector("#hero-title").textContent = langCopy.heroTitle;
  document.querySelector(".hero-copy > p:not(.eyebrow)").textContent = langCopy.heroBody;
  document.querySelector(".hero-actions .button-primary").textContent = langCopy.heroButtons[0];
  document.querySelector(".hero-actions .button-ghost").textContent = langCopy.heroButtons[1];
  heroArt.setAttribute("aria-label", langCopy.heroCompareAria);
  ribbonItems.forEach((item, index) => {
    item.textContent = langCopy.ribbon[index];
  });

  trustItems.forEach((item, index) => {
    item.querySelector("strong").textContent = langCopy.trust[index][0];
    item.querySelector("p").textContent = langCopy.trust[index][1];
  });

  document.querySelector(".story .eyebrow").textContent = langCopy.story.eyebrow;
  document.querySelector(".story h2").textContent = langCopy.story.title;
  document.querySelector(".story > p").textContent = langCopy.story.body;

  document.querySelector("#compare .eyebrow").textContent = langCopy.compare.eyebrow;
  document.querySelector("#compare-title").textContent = langCopy.compare.title;
  document.querySelector("#compare .section-head > p").textContent = langCopy.compare.body;
  compareCards.forEach((card, index) => {
    card.querySelector("h3").textContent = langCopy.compare.cards[index][0];
    card.querySelector("p").textContent = langCopy.compare.cards[index][1];
  });

  document.querySelector("#shop .eyebrow").textContent = langCopy.shop.eyebrow;
  document.querySelector("#shop-title").textContent = langCopy.shop.title;
  filters.forEach((filter, index) => {
    filter.textContent = langCopy.shop.filters[index];
  });

  productCards.forEach((card) => {
    const key = card.querySelector(".add-cart").dataset.productKey;
    const product = langCopy.products[key];
    card.querySelector(".label").textContent = product.label;
    card.querySelector("h3").textContent = product.name;
    card.querySelector(".product-body p:not(.label)").textContent = product.desc;
    card.querySelector(".add-cart").textContent = langCopy.addButton;
    card.querySelector(".add-cart").dataset.name = product.name;
  });

  document.querySelector("#custom .eyebrow").textContent = langCopy.custom.eyebrow;
  document.querySelector("#custom-title").textContent = langCopy.custom.title;
  customLabels[0].childNodes[0].textContent = `${langCopy.custom.fields[0]}\n            `;
  customLabels[1].childNodes[0].textContent = `${langCopy.custom.fields[1]}\n            `;
  customLabels[2].childNodes[0].textContent = `${langCopy.custom.fields[2]}\n            `;
  [...feeling.options].forEach((option) => {
    option.textContent = langCopy.feelings[option.value];
  });
  message.placeholder = langCopy.custom.placeholder;
  document.querySelector(".sketch-card span").textContent = langCopy.custom.estimate;
  customButton.textContent = langCopy.custom.button;
  customButton.dataset.price = String({ 1: 220, 2: 580, 3: 920, 4: 1450 }[size.value]);

  document.querySelector("#delivery .eyebrow").textContent = langCopy.delivery.eyebrow;
  document.querySelector("#delivery-title").textContent = langCopy.delivery.title;
  deliveryArticles.forEach((article, index) => {
    article.querySelector("h3").textContent = langCopy.delivery.steps[index][0];
    article.querySelector("p").textContent = langCopy.delivery.steps[index][1];
  });

  document.querySelector("#journal .eyebrow").textContent = langCopy.journal.eyebrow;
  document.querySelector("#journal-title").textContent = langCopy.journal.title;
  journalTitles.forEach((title, index) => {
    title.textContent = langCopy.journal.titles[index];
  });

  document.querySelector("#faq .eyebrow").textContent = langCopy.faq.eyebrow;
  document.querySelector("#faq-title").textContent = langCopy.faq.title;
  document.querySelector("#faq .section-head > p").textContent = langCopy.faq.intro;
  faqItems.forEach((item, index) => {
    item.querySelector("summary").textContent = langCopy.faq.items[index][0];
    item.querySelector("p").textContent = langCopy.faq.items[index][1];
  });

  document.querySelector(".cart-head .eyebrow").textContent = langCopy.cart.eyebrow;
  document.querySelector(".cart-head h2").textContent = langCopy.cart.title;
  closeCart.textContent = langCopy.cart.close;
  emptyCart.textContent = langCopy.cart.empty;
  document.querySelector(".cart-meta .cart-line:first-child span").textContent = langCopy.cart.subtotal;
  document.querySelector(".cart-meta .cart-line:last-child span").textContent = langCopy.cart.service;
  checkoutLabels[0].childNodes[0].textContent = `${langCopy.cart.fields[0]}\n        `;
  checkoutLabels[1].childNodes[0].textContent = `${langCopy.cart.fields[1]}\n        `;
  checkoutLabels[2].childNodes[0].textContent = `${langCopy.cart.fields[2]}\n        `;
  checkoutLabels[3].childNodes[0].textContent = `${langCopy.cart.fields[3]}\n        `;
  checkoutLabels[4].childNodes[0].textContent = `${langCopy.cart.fields[4]}\n        `;
  checkoutLabels[5].childNodes[0].textContent = `${langCopy.cart.fields[5]}\n        `;
  checkoutLabels[6].childNodes[0].textContent = `${langCopy.cart.fields[6]}\n        `;
  customerName.placeholder = langCopy.cart.placeholders.name;
  customerPhone.placeholder = langCopy.cart.placeholders.phone;
  customerEmail.placeholder = langCopy.cart.placeholders.email;
  orderNotes.placeholder = langCopy.cart.placeholders.notes;
  deliveryArea.placeholder = langCopy.cart.placeholders.address;
  [...paymentMethod.options].forEach((option, index) => {
    option.textContent = langCopy.cart.paymentOptions[index];
  });
  document.querySelector(".cart-total span").textContent = langCopy.cart.total;
  orderButton.textContent = langCopy.cart.order;
  footerBrand.textContent = lang === "ar" ? "وردة" : "Warda";
  footerBody.textContent = langCopy.footer.body;
  footerTop.textContent = langCopy.footer.top;

  updateCustom();
  renderCart();
  updateOrderLinks();
}

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const isCustom = button === customButton;
    const metaData = isCustom ? JSON.parse(button.dataset.metaData || "{}") : null;
    addToCart({
      name: button.dataset.name,
      productKey: button.dataset.productKey || "",
      price: isCustom ? Number({ 1: 220, 2: 580, 3: 920, 4: 1450 }[size.value]) : Number(button.dataset.price),
      meta: isCustom ? customText.textContent : "",
      metaData,
    });
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => handleFilterClick(filter));
});

[feeling, size, message].forEach((control) => {
  control.addEventListener("input", updateCustom);
});

[customerName, customerPhone, customerEmail, deliveryArea, deliveryDate, paymentMethod, orderNotes].forEach((field) => {
  field.addEventListener("input", () => {
    saveCheckoutDraft();
    updateOrderLinks();
  });
});

cartItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  const qtyButton = event.target.closest("[data-qty]");

  if (removeButton) {
    removeItem(removeButton.dataset.remove);
  }

  if (qtyButton) {
    updateQuantity(qtyButton.dataset.qty, Number(qtyButton.dataset.change));
  }
});

checkoutForm.addEventListener("submit", (event) => event.preventDefault());

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDrawer();
    header.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

motionButtons.forEach((button) => {
  button.addEventListener("pointerdown", (event) => {
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
    button.classList.remove("ripple");
    requestAnimationFrame(() => button.classList.add("ripple"));
  });

  button.addEventListener("animationend", (event) => {
    if (event.animationName === "ripple") {
      button.classList.remove("ripple");
    }
  });
});

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("nav-open", !expanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

orderButton.addEventListener("click", () => {
  if (orderButton.getAttribute("aria-disabled") === "true") {
    return;
  }

  const target = orderButton.dataset.orderTarget;
  if (!target) {
    return;
  }

  const separator = target.includes("?") ? "&" : "?";
  window.open(`${target}${separator}entry.order=${orderButton.dataset.orderEncoded}`, "_blank", "noopener");
});

footerTop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo(0, 0);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

deliveryDate.min = getMinimumDate();
loadCheckoutDraft();
if (!deliveryDate.value) {
  deliveryDate.value = getMinimumDate();
}

window.addEventListener("scroll", updateScrollMotion, { passive: true });
window.addEventListener("resize", updateScrollMotion);

applyLanguage(currentLang);
updateScrollMotion();
