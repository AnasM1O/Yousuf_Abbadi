import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  Gem,
  Globe2,
  Landmark,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

type Lang = "ar" | "en";

const copy = {
  ar: {
    nav: { home: "الرئيسية", about: "الخبرة", practice: "مجالات العمل", approach: "منهج العمل", contact: "تواصل" },
    eyebrow: "مستشار قانوني وشريك بمكتب الميدور للمحاماة والاستشارات القانونية — دبي",
    heroTitle: "وضوحٌ قانوني\nلقضايا لا تحتمل الالتباس.",
    heroText: "المستشار يوسف العبادي — محامٍ بمحكمة النقض المصرية والمحكمة الدستورية العليا، وعضو نقابة المحامين المصرية واتحاد المحامين العرب، بخبرة تتجاوز 30 عامًا.",
    explore: "اكتشف مجالات العمل",
    contactCta: "احجز استشارة أولية",
    proof: ["30+", "عامًا من الخبرة"],
    proof2: ["2", "اختصاص قضائي"],
    label: "الخبرة التي تصنع الفارق",
    aboutTitle: "حين تتعقد الوقائع،\nتبدأ قيمة الاستشارة.",
    aboutText: "يقدم المستشار يوسف العبادي الاستشارات القانونية وخدمات إدارة المنازعات والتقاضي والتفاوض والتسويات. يعمل على الملفات التي تتعدد فيها الأطراف أو المستندات أو المصالح، ويحول التعقيد إلى مسار واضح يمكن اتخاذ القرار على أساسه.",
    aboutNote: "الهدف ليس وعودًا بنتائج مضمونة، بل فهم أفضل للموقف القانوني واتخاذ قرارات مدروسة وفقًا للوقائع والمستندات المتاحة.",
    capabilities: ["تحليل الوقائع والعقود والمراسلات", "تقييم الحقوق والالتزامات والمخاطر", "صياغة استراتيجيات التقاضي والدفاع", "التفاوض وإعداد التسويات والاتفاقيات"],
    inheritanceLabel: "قضايا متخصصة",
    inheritanceTitle: "خبير في قضايا التركات والميراث في دولة الإمارات العربية المتحدة",
    inheritanceIntro: "المستشار يوسف عبدالوهاب العبادي محامٍ ومستشار قانوني يتمتع بخبرة قانونية تمتد لأكثر من 30 عاماً، ومتخصص في قضايا التركات والميراث والوصايا في دولة الإمارات العربية المتحدة، وسبق له تولي ومباشرة العديد من قضايا التركات الكبرى والمعقدة أمام محاكم الدولة.",
    inheritanceText: "تشمل خبرته حصر وإدارة وتصفية التركات، إثبات الورثة، تنفيذ الوصايا، قسمة العقارات والأموال والأصول بين الورثة، المنازعات الإرثية، ديون والتزامات التركة، حماية أصول التركة، وتمثيل الورثة والمستفيدين والمنفذين أمام المحاكم والجهات المختصة. كما يتمتع بخبرة في التركات ذات العناصر الدولية التي تضم ورثة أو عقارات أو شركات أو حسابات وأصولاً داخل دولة الإمارات وخارجها، وما يرتبط بها من مسائل الاختصاص وتنفيذ الوصايا والأحكام والمستندات الأجنبية.",
    inheritanceClose: "ويقدم خدماته القانونية في دبي وأبوظبي والشارقة وسائر إمارات الدولة، مع التركيز على حماية حقوق الورثة والمحافظة على أصول التركة والوصول إلى حلول قانونية فعالة، سواء من خلال التسويات الودية أو الإجراءات القضائية.",
    inheritanceAreas: ["قضايا التركات والميراث في الإمارات", "الوصايا", "تصفية وقسمة التركات", "المنازعات بين الورثة", "التركات العقارية والتجارية", "التركات الدولية", "تمثيل الورثة والمنفذين أمام المحاكم"],
    areasLabel: "مجالات العمل",
    areasTitle: "خبرة عملية في الملفات\nالتي تتطلب أكثر من إجابة.",
    areasText: "من المنازعات العقارية إلى عقود الطاقة الدولية، تتكامل الرؤية القانونية والتجارية لتقديم دعم عملي في كل مرحلة من مراحل الملف.",
    viewDetails: "عرض التفاصيل",
    hideDetails: "إخفاء التفاصيل",
    approachLabel: "منهج العمل",
    approachTitle: "خمس خطوات.\nقرار أكثر ثقة.",
    approachText: "كل ملف يبدأ بفهمه قبل التحرك فيه. هذا هو الإطار العملي الذي يوجه دراسة النزاع أو المعاملة.",
    whyLabel: "لماذا المستشار يوسف العبادي؟",
    whyTitle: "خبرة هادئة.\nحضور حاسم.",
    whyText: "في الملفات الكبرى، لا تكفي المعرفة القانونية وحدها. القيمة الحقيقية في القدرة على قراءة الصورة كاملة، وترتيب الأولويات، وبناء الطريق الأنسب للعميل.",
    contactLabel: "الاستشارة الأولية",
    contactTitle: "ابدأ بفهم\nموقفك القانوني.",
    contactText: "أرسل ملخصًا واضحًا للموضوع وأرفق المستندات الأساسية، مع توضيح أي مواعيد أو إجراءات عاجلة.",
    contactButton: "تواصل مع المكتب",
    office: "مكتب الميدور للمحاماة والاستشارات القانونية — دبي، الإمارات العربية المتحدة",
    phone: "هاتف دبي",
    email: "البريد الإلكتروني",
    footer: "المعلومات المنشورة للتعريف بالخدمات القانونية ولا تمثل رأيًا قانونيًا في واقعة محددة.",
    footerName: "المستشار يوسف عبدالوهاب العبادي",
  },
  en: {
    nav: { home: "Home", about: "Experience", practice: "Practice areas", approach: "Approach", contact: "Contact" },
    eyebrow: "Legal Consultant and Partner at Al-Maidoor Law Firm & Legal Consultancy — Dubai",
    heroTitle: "Clarity for matters\nthat cannot afford uncertainty.",
    heroText: "Yousuf Abbadi — more than 30 years of experience in major litigation and complex legal matters across the UAE and Egypt, combining detailed analysis with an integrated legal strategy.",
    explore: "Explore practice areas",
    contactCta: "Book an initial consultation",
    proof: ["30+", "years of experience"],
    proof2: ["2", "jurisdictions"],
    label: "Experience that makes the difference",
    aboutTitle: "When the facts become complex,\nconsultation becomes decisive.",
    aboutText: "Yousuf Abbadi provides legal consultancy, dispute management, litigation, negotiation and settlement services. He works on matters involving multiple parties, substantial documentation or competing interests — translating complexity into a clear path for decision-making.",
    aboutNote: "The objective is not to promise outcomes, but to help clients understand their legal position and make informed decisions based on the facts and documents available.",
    capabilities: ["Reviewing facts, contracts and correspondence", "Assessing rights, obligations and legal risk", "Building litigation and defence strategies", "Negotiating and preparing settlements and agreements"],
    inheritanceLabel: "Specialist practice",
    inheritanceTitle: "Expertise in inheritance and estate matters across the UAE",
    inheritanceIntro: "Yousuf AbdelWahab El-Abadi is a lawyer and legal consultant with more than 30 years of experience, specialising in estates, inheritance and wills in the United Arab Emirates. He has handled major and complex estate matters before the UAE courts.",
    inheritanceText: "His experience covers identifying, managing and liquidating estates, establishing heirship, implementing wills, dividing real estate, funds and assets among heirs, inheritance disputes, estate debts and liabilities, protecting estate assets, and representing heirs, beneficiaries and executors before courts and competent authorities. He also advises on estates with international elements, including heirs, property, companies, accounts or assets inside and outside the UAE, together with jurisdiction, enforcement of wills and judgments, and foreign documents.",
    inheritanceClose: "He advises clients in Dubai, Abu Dhabi, Sharjah and across the UAE, with a focus on protecting heirs’ rights, preserving estate assets and achieving effective solutions through amicable settlements or court proceedings.",
    inheritanceAreas: ["UAE inheritance and estate disputes", "Wills", "Estate liquidation and division", "Disputes between heirs", "Real estate and commercial estates", "International estates", "Representation of heirs and executors before courts"],
    areasLabel: "Practice areas",
    areasTitle: "Practical experience for matters\nthat demand more than an answer.",
    areasText: "From real estate disputes to international energy contracts, legal and commercial insight come together to support each stage of a matter.",
    viewDetails: "View details",
    hideDetails: "Hide details",
    approachLabel: "Approach",
    approachTitle: "Five steps.\nA more confident decision.",
    approachText: "Every matter begins with understanding it before acting on it. This is the practical framework guiding every dispute or transaction review.",
    whyLabel: "Why Yousuf Abbadi",
    whyTitle: "Quiet confidence.\nDecisive presence.",
    whyText: "In major matters, legal knowledge alone is not enough. The real value is the ability to read the full picture, prioritise what matters and build the right path forward.",
    contactLabel: "Initial consultation",
    contactTitle: "Begin with a clear\nunderstanding of your position.",
    contactText: "Send a concise summary of the matter with the essential documents and any urgent deadlines or procedures.",
    contactButton: "Contact the office",
    office: "Al Maidoor Advocates & Legal Consultants — Dubai, United Arab Emirates",
    phone: "Dubai phone",
    email: "Email",
    footer: "Published information is for general service information and does not constitute legal advice on a specific matter.",
    footerName: "Yousef AbdelWahab El-Abadi",
  },
} as const;

const services = [
  { icon: Landmark, ar: { title: "الدعاوى الكبرى والملفات المعقدة", desc: "إدارة النزاعات متعددة الأطراف والمستندات مع تقييم الأدلة والمسؤوليات والمطالبات.", bullets: ["تحليل الوقائع والأدلة", "دراسة المسؤوليات والدفوع", "إعداد المذكرات والاستراتيجيات", "متابعة الإجراءات مع الفريق المختص"] }, en: { title: "Major litigation & complex matters", desc: "Managing disputes with multiple parties, substantial documents and significant legal or financial interests.", bullets: ["Fact and evidence analysis", "Liability and available defences", "Legal memoranda and strategies", "Follow-up with the relevant team"] } },
  { icon: Gem, ar: { title: "المنازعات العقارية", desc: "استشارات وإدارة نزاعات المستثمرين والمطورين والمشترين والملاك والمقاولين.", bullets: ["فسخ عقود البيع والشراء", "استرداد المبالغ والتعويض", "التأخير في التسليم", "مراجعة عقود التطوير والاستثمار"] }, en: { title: "Real estate disputes", desc: "Advice and dispute management for investors, developers, purchasers, owners and contractors.", bullets: ["Termination of sale agreements", "Recovery and compensation claims", "Delayed handover disputes", "Development and investment agreements"] } },
  { icon: BriefcaseBusiness, ar: { title: "المنازعات التجارية والمقاولات", desc: "إدارة النزاعات المرتبطة بتنفيذ المشروعات والتأخير والمستحقات والعيوب.", bullets: ["مراجعة عقود المشروعات", "تحليل الالتزامات التعاقدية", "المطالبات المالية والتعويض", "بناء استراتيجية التقاضي"] }, en: { title: "Commercial & construction disputes", desc: "Managing project and construction claims involving delays, payments, additional works and defective performance.", bullets: ["Reviewing project contracts", "Analysing contractual obligations", "Financial and compensation claims", "Building the litigation strategy"] } },
  { icon: Scale, ar: { title: "الدعاوى البحرية وحجز السفن", desc: "خبرة في المنازعات البحرية والنقل البحري والعقود والمطالبات التجارية والمالية.", bullets: ["دراسة المطالبات البحرية", "تحليل العقود والمستندات", "بحث الالتزامات والمسؤوليات", "متابعة إجراءات الحجز على السفن"] }, en: { title: "Maritime claims & ship arrest", desc: "Experience in maritime disputes, shipping, contracts and related commercial and financial claims.", bullets: ["Reviewing maritime claims", "Contracts and supporting documents", "Liabilities and responsibilities", "Ship arrest procedures"] } },
  { icon: ShieldCheck, ar: { title: "التأمين والقضايا الطبية", desc: "إدارة النزاعات المتعلقة بوثائق التأمين والمسؤولية المهنية والقضايا الطبية المعقدة.", bullets: ["تحليل نطاق التغطية والاستثناءات", "دراسة أسباب رفض المطالبات", "تقييم المسؤولية والأضرار", "إعداد المطالبات والدفوع"] }, en: { title: "Insurance & medical matters", desc: "Managing disputes involving insurance policies, professional liability and complex medical matters.", bullets: ["Coverage and exclusions", "Reasons for claim rejection", "Liability and damages", "Claims and available defences"] } },
  { icon: FileCheck2, ar: { title: "العقود الدولية والطاقة", desc: "صياغة ومراجعة العقود التجارية والاستثمارية وعقود البترول والطاقة الدولية.", bullets: ["عقود البيع والتوريد والاستثمار", "اتفاقيات الخدمات والسرية", "شروط التحكيم وتسوية المنازعات", "توزيع المخاطر والجزاءات"] }, en: { title: "International & energy contracts", desc: "Drafting and reviewing commercial, investment, oil and international energy contracts.", bullets: ["Sale, supply and investment", "Services and confidentiality", "Arbitration and dispute clauses", "Risk allocation and liability"] } },
  { icon: ShieldCheck, ar: { title: "القضايا الجنائية المعقدة", desc: "دراسة الملفات الجنائية الكبرى من خلال تحليل عناصر الاتهام والأدلة والإجراءات.", bullets: ["دراسة الوقائع والأدلة", "تحليل عناصر الاتهام", "بحث الدفوع والطلبات", "إعداد استراتيجية دفاع مناسبة"] }, en: { title: "Complex criminal matters", desc: "Studying major criminal files through analysis of allegations, evidence and related procedures.", bullets: ["Facts and evidence", "Elements of the allegations", "Defences and applications", "Matter-specific defence strategy"] } },
  { icon: Languages, ar: { title: "التفاوض والتسويات", desc: "تقييم التفاوض والتسوية إلى جانب فرص ومخاطر الاستمرار في الإجراءات القضائية.", bullets: ["تحديد أهداف العميل", "تحليل موقف الطرف الآخر", "إعداد مقترحات التسوية", "مراجعة اتفاقيات الصلح"] }, en: { title: "Negotiation & settlements", desc: "Evaluating negotiation and settlement alongside the prospects and risks of continued proceedings.", bullets: ["Defining the client's objectives", "Assessing the other side's position", "Preparing settlement proposals", "Reviewing settlement agreements"] } },
];

const steps = [
  { n: "01", ar: { title: "فهم الوقائع والمستندات", text: "جمع المعلومات الأساسية ومراجعة العقود والمراسلات والتقارير والمستندات المؤيدة." }, en: { title: "Understand the facts", text: "Gathering the essentials and reviewing contracts, correspondence, reports and supporting documents." } },
  { n: "02", ar: { title: "تحديد المركز القانوني", text: "تحليل الحقوق والالتزامات والمسؤوليات والدفوع المحتملة والمسائل المؤثرة." }, en: { title: "Define the legal position", text: "Analysing rights, obligations, liabilities, potential defences and the issues that matter." } },
  { n: "03", ar: { title: "تقييم المخاطر والخيارات", text: "توضيح نقاط القوة والضعف والمخاطر الإجرائية والمالية ومقارنة الخيارات." }, en: { title: "Evaluate risks and options", text: "Clarifying strengths, weaknesses, procedural and financial risks, then comparing the available options." } },
  { n: "04", ar: { title: "بناء الاستراتيجية", text: "تحديد المسار الأنسب: دعوى أو دفاع أو تفاوض أو تسوية أو مراجعة عقد." }, en: { title: "Build the strategy", text: "Determining the right route: claim, defence, negotiation, settlement or contract review." } },
  { n: "05", ar: { title: "المتابعة والتواصل", text: "متابعة التطورات وإطلاع العميل على الإجراءات والخيارات والقرارات المهمة." }, en: { title: "Follow through", text: "Tracking developments and keeping the client informed of important steps, options and decisions." } },
];

type Review = { id: string; name: string; text: string; rating: number };

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const t = copy[lang];
  const isAr = lang === "ar";

  const serviceList = useMemo(() => services, []);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("yousuf-abbadi-reviews");
      if (saved) setReviews(JSON.parse(saved));
    } catch { /* Ignore unavailable local storage. */ }
  }, []);

  const submitReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = reviewName.trim();
    const text = reviewText.trim();
    if (!name || !text) return;
    const nextReviews = [{ id: `${Date.now()}`, name, text, rating: reviewRating }, ...reviews];
    setReviews(nextReviews);
    setReviewName("");
    setReviewText("");
    setReviewRating(5);
    try { window.localStorage.setItem("yousuf-abbadi-reviews", JSON.stringify(nextReviews)); } catch { /* Ignore unavailable local storage. */ }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.title = isAr ? "المستشار يوسف العبادي | مستشار قانوني" : "Yousuf Abbadi | Legal Counsel";
  }, [isAr, lang]);

  useEffect(() => {
    if (activeService === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveService(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [activeService]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [lang]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`site-shell ${isAr ? "is-ar" : "is-en"}`}>
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Yousef AbdelWahab El-Abadi home">
            <span className="brand-mark"><Scale size={19} strokeWidth={1.5} /></span>
            <span className="brand-copy"><strong>{isAr ? "المستشار يوسف عبدالوهاب" : "Yousef AbdelWahab"}</strong><span>{isAr ? "العبادي" : "El-Abadi"}</span></span>
          </button>
          <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>{t.nav.home}</button>
            <button onClick={() => scrollTo("about")}>{t.nav.about}</button>
            <button onClick={() => scrollTo("practice")}>{t.nav.practice}</button>
            <button onClick={() => scrollTo("approach")}>{t.nav.approach}</button>
            <button className="nav-contact" onClick={() => scrollTo("contact")}>{t.nav.contact}<ArrowUpRight size={15} /></button>
          </nav>
          <div className="header-actions">
            <button className="language-switch" onClick={() => setLang(isAr ? "en" : "ar")} aria-label="Switch language">
              <Globe2 size={16} /> <span>{isAr ? "EN" : "عربي"}</span>
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy reveal is-visible">
              <div className="eyebrow light"><span className="eyebrow-line" />{t.eyebrow}</div>
              <h1>{t.heroTitle.split("\n").map((line, i) => <span key={line} className={i === 1 ? "accent-line" : ""}>{line}</span>)}</h1>
              <p>{t.heroText}</p>
              <div className="hero-actions">
                <button className="button button-gold" onClick={() => scrollTo("practice")}>{t.explore}<ArrowUpRight size={17} /></button>
                <a className="text-link light-link" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>{t.contactCta}<span className="link-arrow">{isAr ? <ArrowUpLeft size={18} /> : <ArrowUpRight size={18} />}</span></a>
              </div>
            </div>
            <div className="hero-foot reveal is-visible">
              <div className="hero-note" style={{ fontWeight: 100, opacity: '0' }}><Sparkles size={16} style={{opacity: '0'}} /><span style={{opacity: '0'}} /></div>
              <div className="proofs">
                <div className="proof"><strong>{t.proof[0]}</strong><span>{t.proof[1]}</span></div>
                <div className="proof"><strong>{t.proof2[0]}</strong><span>{t.proof2[1]}</span></div>
              </div>
            </div>
          </div>
          <div className="scroll-cue"><span>{isAr ? "اكتشف" : "Discover"}</span><div className="scroll-line" /></div>
        </section>

        <section id="about" className="about-section section-light">
          <div className="container about-layout">
            <div className="section-aside reveal"><span className="vertical-number">01</span><span className="vertical-label">{t.label}</span></div>
            <div className="about-main">
              <div className="eyebrow reveal"><span className="eyebrow-line" />{t.label}</div>
              <h2 className="display-title reveal">{t.aboutTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
              <div className="about-copy-grid reveal">
                <p className="lead-copy">{t.aboutText}</p>
                <div className="about-note"><span className="gold-bar" /><p>{t.aboutNote}</p></div>
              </div>
              <div className="capability-list reveal">
                {t.capabilities.map((item, i) => <div className="capability" key={item}><span>0{i + 1}</span><p>{item}</p><ChevronRight size={16} /></div>)}
              </div>
            </div>
            <figure className="section-photo about-photo reveal"><img src="/assets/yousuf-office.jpeg" alt={isAr ? "المستشار يوسف العبادي في مكتبه" : "Yousuf Abbadi in his office"} /><figcaption>{isAr ? "خبرة وممارسة عملية" : "Practical experience"}</figcaption></figure>
          </div>
        </section>

        <section className="inheritance-section">
          <div className="container inheritance-layout">
            <div className="inheritance-aside reveal">
              <div className="eyebrow"><span className="eyebrow-line" />{t.inheritanceLabel}</div>
              <p>{t.inheritanceIntro}</p>
            </div>
            <div className="inheritance-copy reveal">
              <h2>{t.inheritanceTitle}</h2>
              <p>{t.inheritanceText}</p>
              <p>{t.inheritanceClose}</p>
              <div className="inheritance-areas-label">{isAr ? "مجالات التخصص" : "Specialist areas"}</div>
              <div className="inheritance-areas">
                {t.inheritanceAreas.map((area, i) => { const AreaIcon = [Scale, FileCheck2, Landmark, ShieldCheck, BriefcaseBusiness, Globe2, Scale][i]; return <div className="inheritance-area" key={area}><AreaIcon size={16} strokeWidth={1.5} /><span>{area}</span></div>; })}
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="practice-section section-paper">
          <div className="container">
            <div className="section-heading split-heading reveal">
              <div><div className="eyebrow"><span className="eyebrow-line" />{t.areasLabel}</div><h2 className="display-title">{t.areasTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
              <p>{t.areasText}</p>
            </div>
            <div className="services-grid">
              {serviceList.map((service, i) => {
                const details = service[lang];
                const Icon = service.icon;
                const active = activeService === i;
                return <article className={`service-card ${active ? "active" : ""}`} key={details.title}>
                  <button className="service-trigger" onClick={() => setActiveService(active ? null : i)} aria-expanded={active}>
                    <span className="service-icon"><Icon size={22} strokeWidth={1.4} /></span>
                    <span className="service-number">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{details.title}</h3>
                    <span className="service-toggle">{active ? <ChevronDown size={19} /> : (isAr ? <ChevronLeft size={19} /> : <ChevronRight size={19} />)}</span>
                  </button>
                    <div className={`service-body ${active ? "is-open" : ""}`}>
                      <p>{details.desc}</p>
                      <button type="button" className="detail-label" onClick={(event) => { event.stopPropagation(); setActiveService(active ? null : i); }} aria-expanded={active}>{active ? t.hideDetails : t.viewDetails}<span className="detail-pulse" /></button>
                    </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section section-navy">
          <div className="approach-decoration"><span>CASE</span><span>METHOD</span></div>
          <div className="container approach-layout">
            <div className="approach-intro reveal"><div className="eyebrow light"><span className="eyebrow-line" />{t.approachLabel}</div><h2 className="display-title light-title">{t.approachTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{t.approachText}</p></div>
            <div className="steps-list">
              {steps.map((step, i) => { const detail = step[lang]; return <div className="step reveal" key={step.n} style={{ transitionDelay: `${i * 80}ms` }}><span className="step-number">{step.n}</span><div><h3>{detail.title}</h3><p>{detail.text}</p></div><ArrowUpRight size={17} /></div>; })}
            </div>
          </div>
        </section>

        <section className="why-section section-light">
          <div className="container why-layout">
            <div className="why-visual portrait-visual reveal"><figure className="portrait-card portrait-card-main"><img src="/assets/yousuf-portrait.jpeg" alt={isAr ? "المستشار يوسف العبادي بزي المحاماة" : "Yousuf Abbadi in legal robes"} /><figcaption>{isAr ? "المرافعة والعدالة" : "Advocacy & justice"}</figcaption></figure><div className="portrait-badge"><Scale size={21} strokeWidth={1.2} /><span>{isAr ? "عدالة • وضوح • ثقة" : "Justice • Clarity • Trust"}</span></div><div className="portrait-years"><strong>30<span>+</span></strong><small>{isAr ? "عامًا من الحضور القانوني" : "years of legal presence"}</small></div></div>
            <div className="why-copy"><div className="eyebrow reveal"><span className="eyebrow-line" />{t.whyLabel}</div><h2 className="display-title reveal">{t.whyTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p className="lead-copy reveal">{t.whyText}</p><div className="why-points reveal"><span><ShieldCheck size={17} />{isAr ? "خبرة في الإمارات ومصر" : "Experience in the UAE & Egypt"}</span><span><Globe2 size={17} />{isAr ? "رؤية عابرة للحدود" : "Cross-border perspective"}</span><span><Scale size={17} />{isAr ? "تقاضٍ وتفاوض وتسوية" : "Litigation, negotiation & settlement"}</span></div></div>
          </div>
        </section>

        <section id="reviews" className="reviews-section section-paper">
          <div className="container reviews-layout">
            <div className="reviews-intro reveal"><div className="eyebrow"><span className="eyebrow-line" />{isAr ? "آراء العملاء" : "Client reviews"}</div><h2 className="display-title">{isAr ? <>تجارب تُبنى عليها<br /><span>الثقة.</span></> : <>Experiences that build<br /><span>confidence.</span></>}</h2><p>{isAr ? "شاركنا تجربتك مع المستشار يوسف العبادي، وساعد الآخرين على اتخاذ قرارهم بثقة." : "Share your experience with Yousuf Abbadi and help others make their decision with confidence."}</p></div>
            <div className="review-form-wrap reveal"><form className="review-form" onSubmit={submitReview}><div className="review-form-head"><h3>{isAr ? "اكتب تقييمك" : "Write a review"}</h3><div className="rating-picker" aria-label={isAr ? "اختر التقييم من خمس نجوم" : "Choose a rating out of five stars"}>{[1, 2, 3, 4, 5].map((star) => <button type="button" key={star} className={star <= reviewRating ? "selected" : ""} onClick={() => setReviewRating(star)} aria-label={`${star} ${isAr ? "نجوم" : "stars"}`}><Star size={19} fill="currentColor" /></button>)}</div></div><label>{isAr ? "الاسم" : "Name"}<input value={reviewName} onChange={(event) => setReviewName(event.target.value)} required placeholder={isAr ? "اكتب اسمك" : "Your name"} /></label><label>{isAr ? "التقييم" : "Review"}<textarea value={reviewText} onChange={(event) => setReviewText(event.target.value)} required rows={4} placeholder={isAr ? "كيف كانت تجربتك؟" : "How was your experience?"} /></label><button className="button button-gold review-submit" type="submit">{isAr ? "نشر التقييم" : "Post review"}<Star size={16} fill="currentColor" /></button></form></div>
            <div className="reviews-list reveal">{reviews.length === 0 ? <div className="reviews-empty"><Star size={22} /><p>{isAr ? "كن أول من يشارك تجربته." : "Be the first to share your experience."}</p></div> : reviews.map((review) => <article className="review-card" key={review.id}><div className="review-card-top"><strong>{review.name}</strong><div className="review-stars" aria-label={`${review.rating}/5`}><span>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill={star <= review.rating ? "currentColor" : "none"} />)}</span><small>{review.rating}/5</small></div></div><p>{review.text}</p></article>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" /><div className="container contact-layout"><div className="contact-copy reveal"><div className="eyebrow light"><span className="eyebrow-line" />{t.contactLabel}</div><h2 className="display-title light-title">{t.contactTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{t.contactText}</p><a className="button button-gold" href="mailto:lawyer_yousuf@yahoo.com">{t.contactButton}<Mail size={17} /></a></div><div className="contact-details reveal"><div className="contact-detail"><span>{t.office}</span></div><a className="contact-detail" href="tel:+971505374564"><small>{t.phone}</small><strong className="contact-phone" dir="ltr">+971 50 537 4564</strong></a><a className="contact-detail" href="mailto:lawyer_yousuf@yahoo.com"><small>{t.email}</small><strong>lawyer_yousuf@yahoo.com</strong></a></div></div>
        </section>
      </main>

      {activeService !== null && <div className="service-modal-backdrop" role="presentation" onClick={() => setActiveService(null)}>
        <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="service-modal-close" onClick={() => setActiveService(null)} aria-label={isAr ? "إغلاق التفاصيل" : "Close details"}><X size={20} /></button>
          <span className="service-modal-number">{String(activeService + 1).padStart(2, "0")}</span>
          <span className="service-details-heading">{isAr ? "تفاصيل مجال العمل" : "Practice area details"}</span>
          <h2 id="service-modal-title">{serviceList[activeService][lang].title}</h2>
          <p>{serviceList[activeService][lang].desc}</p>
          <div className="service-modal-rule" />
          <span className="service-details-heading">{isAr ? "تشمل الخدمة" : "Services include"}</span>
          <ul>{serviceList[activeService][lang].bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          <a className="modal-whatsapp" href={`https://wa.me/971505374564?text=${encodeURIComponent(isAr ? `مرحبًا، أود الاستفسار عن ${serviceList[activeService].ar.title}` : `Hello, I would like to enquire about ${serviceList[activeService].en.title}`)}`} target="_blank" rel="noreferrer"><MessageCircle size={17} />{isAr ? "استفسر عبر واتساب" : "Enquire on WhatsApp"}</a>
        </section>
      </div>}

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark"><Scale size={18} strokeWidth={1.5} /></span><strong>{t.footerName}</strong></div><p>{t.footer}</p><span className="footer-year">© {new Date().getFullYear()}</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/971505374564" target="_blank" rel="noreferrer" aria-label={isAr ? "تواصل عبر واتساب" : "Contact on WhatsApp"}><MessageCircle size={22} /><span>{isAr ? "واتساب" : "WhatsApp"}</span></a>
    </div>
  );
}
