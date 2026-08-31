/**
 * @file translationsPart1.ts
 * Statische Übersetzungen (Block 1: Fragen 1 bis 30 aus initialQuestions.ts)
 * § 34a GewO Sachkundeprüfung.
 * 
 * Sprachen:
 * - Farsi (fa)
 * - Arabisch (ar)
 * - Russisch (ru)
 * - Englisch (en)
 */

export interface TranslationBlockItem {
  frage: { fa: string; ar: string; ru: string; en: string };
  loesung?: { fa: string; ar: string; ru: string; en: string };
  optionen?: Record<string, { fa: string; ar: string; ru: string; en: string }>;
}

export const TRANSLATIONS_PART_1: Record<string, TranslationBlockItem> = {
  // =========================================================================
  // 1. Recht der öffentlichen Sicherheit und Ordnung (Fragen 1 bis 15)
  // =========================================================================

  // Frage 1 (q-oeff-1)
  "q-oeff-1": {
    frage: {
      fa: "امنیت عمومی را تعریف کنید.",
      ar: "عرّف مفهوم «السلامة العامة».",
      ru: "Дайте определение понятию «Общественная безопасность».",
      en: "Define the term 'Public Safety'."
    },
    loesung: {
      fa: "حفاظت از نقض‌ناپذیری و تمامیت نظام حقوقی (تمامی قوانین و مقررات)، حفاظت از حقوق و منافع فردی اشخاص (شامل جان، سلامت، آزادی و مالکیت هر فرد) و همچنین حفاظت از نهادها، ارگان‌ها و تأسیسات دولتی.",
      ar: "حماية حرمة وعدم المساس بالنظام القانوني (كافة القوانين والتشريعات)، وحماية الحقوق والمصالح الفردية للأشخاص (الحياة، الصحة، الحرية، وملكية الأفراد)، بالإضافة إلى حماية مؤسسات ومرافق الدولة.",
      ru: "Защита неприкосновенности правопорядка (всех законов и нормативных актов), защита индивидуальных благ и прав граждан (жизнь, здоровье, свобода, собственность каждого человека), а также защита государственных учреждений и объектов.",
      en: "Protection of the inviolability of the legal order (all laws and regulations), protection of individual legal assets (life, health, liberty, and property of individuals), and the protection of state institutions and facilities."
    }
  },

  // Frage 2 (q-oeff-2)
  "q-oeff-2": {
    frage: {
      fa: "نظم عمومی را تعریف کنید.",
      ar: "عرّف مفهوم «النظام العام».",
      ru: "Дайте определение понятию «Общественный порядок».",
      en: "Define the term 'Public Order'."
    },
    loesung: {
      fa: "مجموعه هنجارها و قواعد نانوشته برای رفتار در انظار عمومی که بر اساس دیدگاه غالب و عرف جاری جامعه، پیش‌شرطی ضروری و قطعی برای همزیستی مسالمت‌آمیز و منظم به شمار می‌روند (شامل اخلاق، عرف، ادب و شئونات عمومی).",
      ar: "مجموع القواعد والأعراف غير المكتوبة للسلوك في الأماكن العامة، والتي تُعتبر وفقاً للعرف السائد شرطاً لا غنى عنه للتعايش المنظم بين أفراد المجتمع (الآداب العامة، الأخلاق، اللياقة، والأعراف الاجتماعية).",
      ru: "Совокупность неписаных правил и норм поведения в общественных местах, которые согласно господствующим взглядам в обществе считаются обязательным условием для упорядоченного совместного проживания (мораль, обычаи, приличия).",
      en: "The totality of unwritten rules for behavior in public spaces which, according to prevailing societal views, are considered an indispensable prerequisite for orderly coexistence (customs, morality, decency)."
    }
  },

  // Frage 3 (q-oeff-3)
  "q-oeff-3": {
    frage: {
      fa: "یک نیروی امنیتی خصوصی در مقایسه با یک مأمور پلیس چه حقوق و اختیاراتی دارد؟",
      ar: "ما هي الحقوق والصلاحيات التي يتمتع بها موظف الأمن الخاص مقارنة بضابط الشرطة؟",
      ru: "Какими правами и полномочиями обладает сотрудник частной охраны по сравнению с сотрудником полиции?",
      en: "What rights and powers does a private security officer have compared to a police officer?"
    },
    loesung: {
      fa: "نیروی امنیتی خصوصی هیچ‌گونه اختیارات حاکمیتی ندارد. او دقیقاً همان حقوقی را دارد که هر شهروند عادی داراست (حقوق عامه/همگانی) به انضمام حقوقی که از سوی کارفرما یا مالک به او تفویض شده است (مانند حق اعمال مقررات مکانی / Hausrecht). در مقابل، پلیس دارای اختیارات حاکمیتی و قانونی دولتی است (مانند اعمال اقدامات قهری، جلب و بازداشت رسمی طبق قوانین پلیس).",
      ar: "لا يمتلك موظف الأمن أي سلطات أو صلاحيات سيادية. فهو يتمتع بنفس الحقوق المتاحة لأي مواطن عادي (حقوق الكافة / Jedermannsrechte)، بالإضافة إلى الصلاحيات المفوضة له من العميل أو صاحب المنشأة (مثل حق إدارة المكان / Hausrecht). أما الشرطة فتمتلك سلطات سيادية رسمية (استخدام القوة الجبرية، والتوقيف الرسمي وفق قانون الشرطة).",
      ru: "Сотрудник службы безопасности не имеет суверенных (властных) полномочий. Он обладает теми же правами, что и любой гражданин (общие права каждого / Jedermannsrechte), а также правами, делегированными ему заказчиком (например, правом распоряжения объектом / Hausrecht). Полиция обладает властными полномочиями (применение мер принуждения, задержание согласно закону о полиции).",
      en: "The private security officer has no sovereign powers. They possess the exact same rights as any regular citizen (citizen's rights / Jedermannsrechte) plus the rights delegated to them by the client/property owner (e.g., domiciliary rights / Hausrecht). In contrast, the police possess sovereign statutory powers (enforcement measures, statutory arrest authority under police law)."
    }
  },

  // Frage 4 (q-oeff-4)
  "q-oeff-4": {
    frage: {
      fa: "منظور از اصطلاح «اختیارات حاکمیتی» چیست؟",
      ar: "ماذا يُقصد بمصطلح «الحقوق والسلطات السيادية»؟",
      ru: "Что понимается под термином «Суверенные / властные права»?",
      en: "What is meant by the term 'Sovereign Rights / Sovereign Powers'?"
    },
    loesung: {
      fa: "حقوق و اختیاراتی که منحصراً و به صورت ویژه به دولت و ارگان‌ها و نهادهای اجرایی آن (نظیر پلیس، گمرک، و اداره نظم عمومی / Ordnungsamt) جهت اجرای قوانین و برقراری نظم واگذار شده است.",
      ar: "الحقوق والصلاحيات الممنوحة حصرياً للدولة وهيئاتها وأجهزتها الرسمية (مثل الشرطة، الجمارك، ومكتب النظام العام) بغرض إنفاذ وتطبيق القوانين وتحقيق العدالة.",
      ru: "Права и полномочия, предоставленные исключительно государству и его уполномоченным органам (например, полиции, таможне, ведомству правопорядка) для обеспечения соблюдения законов и правопорядка.",
      en: "Rights and authority exclusively granted to the state and its authorities (e.g., police, customs, public order office) for the enforcement of law and legal order."
    }
  },

  // Frage 5 (q-oeff-5)
  "q-oeff-5": {
    frage: {
      fa: "انحصار قوه قهریه توسط دولت چه چیزی را تعیین می‌کند؟",
      ar: "ماذا يحدد وينظم مبدأ «احتكار الدولة لاستخدام القوة»؟",
      ru: "Что регулирует монополия государства на применение силы?",
      en: "What is governed by the state's monopoly on the use of force?"
    },
    loesung: {
      fa: "این اصل مقرر می‌دارد که اساساً و اصولاً فقط دولت (از طریق ارگان‌ها و مأموران قانونی خود) مجاز به اعمال زور فیزیکی و قهریه برای اجرای حقوق و قوانین است. استثنائات محدود برای اشخاص خصوصی و شهروندان عادی صرفاً شامل حقوق اضطراری (نظیر دفاع مشروع، حالت اضطرار و احقاق حق شخصی) می‌باشد.",
      ar: "ينص هذا المبدأ على أن الدولة وحدها (عبر أجهزتها وهيئاتها الرسمية) هي المخولة والمصرح لها قانوناً بممارسة القوة الجسدية والجبرية لإنفاذ الحقوق والقوانين. وتقتصر الاستثناءات المتاحة للأفراد والمدنيين فقط على حقوق الطوارئ القانونية (الدفاع الشرعي، وحالة الضرورة، والمساعدة الذاتية).",
      ru: "Этот принцип устанавливает, что в целом исключительно государство (через свои органы) вправе применять физическую силу и принуждение для реализации прав и законов. Единственными исключениями для частных лиц являются специальные права крайней необходимости (необходимая оборона, состояние крайней необходимости, право на самопомощь).",
      en: "It governs that, fundamentally, only the state (through its authorized organs) is entitled to use physical force and coercion to enforce laws and rights. The only exceptions for private individuals are statutory emergency rights (self-defense, state of necessity, self-help)."
    }
  },

  // Frage 6 (q-oeff-6)
  "q-oeff-6": {
    frage: {
      fa: "منظور از «فرعی بودن / اصل تابعیت (Subsidiarität)» خدمات امنیتی خصوصی چیست؟",
      ar: "ماذا يعني مبدأ «التبعية والصفة الثانوية (Subsidiarität)» لخدمات الأمن الخاصة؟",
      ru: "Что означает принцип «субсидиарности» частных охранных служб?",
      en: "What does the 'subsidiarity' of private security services mean?"
    },
    loesung: {
      fa: "خدمات امنیتی خصوصی به صورت فرعی و تحت نظارت و تابعیت نسبت به دولت فعالیت می‌کنند. آن‌ها هرگز جایگزین پلیس نمی‌شوند، بلکه صرفاً در چارچوب مأموریت‌های خصوصی و به صورت پیشگیرانه به ارائه خدمات حفاظتی می‌پردازند.",
      ar: "أن أجهزة وشركات الأمن الخاصة تعمل بصفة تابعة ومساندة للدولة ولا تحل محلها. فهي لا تشكل بديلاً عن الشرطة، بل تقدم الدعم والوقاية الاحترازية في إطار التعاقدات والمهام الخاصة.",
      ru: "Частные службы безопасности действуют во второстепенном (субсидиарном) порядке по отношению к государству. Они не заменяют полицию, а оказывают превентивную поддержку на основании частных договоров.",
      en: "Private security services operate subordinate (subsidiary) to the state. They do not replace the police force, but rather provide preventative support under private contracts."
    }
  },

  // Frage 7 (q-oeff-7)
  "q-oeff-7": {
    frage: {
      fa: "چه زمانی یک «خطر برای امنیت عمومی» وجود دارد؟",
      ar: "متى يعتبر هناك «خطر يهدد السلامة العامة»؟",
      ru: "Когда возникает «опасность для общественной безопасности»?",
      en: "When does a 'danger to public safety' exist?"
    },
    loesung: {
      fa: "هنگامی که وضعیتی رخ دهد که در آن با احتمال کافی و منطقی، وقوع خسارت یا آسیب به یکی از حقوق و منافع تحت حفاظت قانونی (مانند تخریب اموال، ایراد صدمه بدنی یا نقض قوانین) قریب‌الوقوع یا محتمل باشد.",
      ar: "عندما ينشأ ظرف أو موقف يؤدي، باحتمالية كافية ومعقولة، إلى وقوع ضرر يهدد أحد المصالح أو الحقوق المحمية قانوناً (مثل إتلاف الممتلكات أو الإيذاء البدني أو خرق النظام القانوني).",
      ru: "Когда возникает ситуация, при которой с достаточной степенью вероятности угрожает причинение ущерба охраняемому законом благу (например, повреждение имущества, причинение телесных повреждений или нарушение закона).",
      en: "When a situation arises in which there is a sufficient likelihood of harm threatening a legally protected interest (e.g., property damage, bodily injury, or legal violation)."
    }
  },

  // Frage 8 (q-oeff-8)
  "q-oeff-8": {
    frage: {
      fa: "آیا یک نیروی امنیتی مجاز است در فضای عمومی دستور اخراج یا منع تردد (Platzverweis) صادر کند؟",
      ar: "هل يحق لموظف الأمن إصدار أمر إخلاء أو حظر تواجد (Platzverweis) لأي شخص في الأماكن العامة؟",
      ru: "Имеет ли право сотрудник службы безопасности выдавать распоряжение покинуть общественное место (Platzverweis)?",
      en: "Is a security guard allowed to issue a ban from the premises/area (Platzverweis) in a public space?"
    },
    loesung: {
      fa: "خیر، صدور دستور اخراج از فضای عمومی منحصراً در صلاحیت مأموران پلیس یا اداره نظم عمومی (Ordnungsamt) است. با این حال، در ملک محصور و خصوصی، نیروی امنیتی می‌تواند به استناد حق مقررات مکانی تفویض‌شده از سوی مالک (Hausrecht / Hausverbot) افراد را اخراج نماید.",
      ar: "لا، إن إصدار أوامر الإبعاد والإخلاء من الأماكن العامة مقتصر حصراً على سلطة الشرطة أو مكتب النظام العام (Ordnungsamt). ومع ذلك، في العقارات والأماكن الخاصة المحمية، يحق لموظف الأمن طرد الأشخاص ومنعهم بموجب حق إدارة المكان المفوض له (Hausrecht / Hausverbot).",
      ru: "Нет, выдавать предписание покинуть общественное место имеет право только полиция или ведомство правопорядка. Однако на огороженной частной территории сотрудник охраны может выдворить нарушителя на основании делегированного права распоряжения объектом (Hausrecht / Hausverbot).",
      en: "No, issuing a dispersal order/area ban in public spaces is strictly reserved for the police or the public order office. However, on enclosed private property, the security officer may do so based on delegated domiciliary rights (Hausrecht / Hausverbot)."
    }
  },

  // Frage 9 (q-oeff-9)
  "q-oeff-9": {
    frage: {
      fa: "منظور از «حق یا مصلحت تحت حفاظت قانونی (Rechtsgut)» چیست؟",
      ar: "ما هو «المصلحة أو الحق المحمي قانوناً (Rechtsgut)»؟",
      ru: "Что такое «Правовое благо (Rechtsgut)»?",
      en: "What is a 'legally protected interest / Legal asset (Rechtsgut)'?"
    },
    loesung: {
      fa: "ارزش، مصلحت یا منفعتی از فرد (نظیر جان، سلامت، آبرو، آزادی و مالکیت) یا از کل جامعه و عموم مردم (نظیر حفاظت از محیط زیست، نظم عمومی و ساختار دولت) که قانون از آن پشتیبانی و صیانت می‌کند.",
      ar: "قيمة أو مصلحة محمية بموجب القانون، سواء كانت تخص الفرد (مثل الحياة، الصحة، الشرف، الحرية، الملكية) أو تخص المجتمع بأسره (مثل حماية البيئة، النظام العام، واستقرار مؤسسات الدولة).",
      ru: "Охраняемый законом интерес или ценность отдельного лица (например, жизнь, честь, свобода, собственность) либо всего общества (например, охрана окружающей среды, основы государственного строя).",
      en: "An interest, value, or asset protected by law, belonging either to an individual (e.g., life, bodily integrity, honor, property, liberty) or to the community as a whole (e.g., environmental protection, state structure)."
    }
  },

  // Frage 10 (q-oeff-10)
  "q-oeff-10": {
    frage: {
      fa: "هنگام وقوع جرم در محل مأموریت، رابطه میان نیروی امنیتی و پلیس چگونه است؟",
      ar: "ما هي طبيعة العلاقة بين خدمة الأمن والشرطة في موقع الحادث عند وقوع جريمة جنائية؟",
      ru: "Каковы взаимоотношения службы безопасности и полиции на месте происшествия при совершении преступления?",
      en: "What is the relationship between the security service and the police at the scene of a crime?"
    },
    loesung: {
      fa: "پلیس بلافاصله پس از حضور، هدایت و فرماندهی کامل صحنه عملیات (اختیار انحصاری تأمین امنیت و تحقیقات قضایی) را بر عهده می‌گیرد. نیروی امنیتی موظف به شهادت و گزارش دقیق مشاهدات بوده و باید به طور کامل از دستورات پلیس پیروی کند.",
      ar: "تتولى الشرطة على الفور قيادة موقع العمليات والسيطرة الكاملة على مسرح الجريمة (صلاحية التحقيق والتأمين). ويكون موظف الأمن ملزماً بتقديم الشهادة والامتثال التام لكافة تعليمات وتوجيهات الشرطة.",
      ru: "Полиция немедленно принимает на себя руководство операцией на месте происшествия (суверенные полномочия по расследованию и фиксации). Охранник выступает в качестве свидетеля и обязан неукоснительно выполнять указания сотрудников полиции.",
      en: "The police immediately assume full command and operational authority at the scene (sovereign investigation and securing powers). The security guard acts as a witness and must strictly follow the instructions of the police."
    }
  },

  // Frage 11 (q-oeff-11)
  "q-oeff-11": {
    frage: {
      fa: "تفاوت بین «حقوق ماهوی (materielles Recht)» و «حقوق شکلی (formelles Recht)» چیست؟",
      ar: "ما هو الفرق بين «القانون الموضوعي (materielles Recht)» و«القانون الإجرائي / الشكلي (formelles Recht)»؟",
      ru: "В чем разница между «материальным правом» и «процессуальным / формальным правом»?",
      en: "What is the difference between substantive law and procedural/formal law?"
    },
    loesung: {
      fa: "حقوق ماهوی محتوا و ماهیت حقوق و تکالیف را تعیین می‌کند (مشخص می‌کند «چه چیزی» مجاز، ممنوع یا مستوجب مجازات است؛ مانند قانون مجازات StGB یا قانون مدنی BGB). حقوق شکلی نحوه و تشریفات اجرای آن حقوق را تنظیم می‌نماید (مشخص می‌کند «چگونه» و از چه فرآیندی قانون اجرا می‌شود؛ مانند آیین دادرسی کیفری StPO).",
      ar: "يحدد القانون الموضوعي المضمون والحقوق والواجبات والعقوبات (يحدد «ما هو» المحظور أو المسموح به، مثل قانون العقوبات StGB والقانون المدني BGB). بينما ينظم القانون الإجرائي آليات وإجراءات تنفيذ وتطبيق هذه القوانين (يحدد «كيفية» إنفاذ الحقوق، مثل قانون الإجراءات الجنائية StPO).",
      ru: "Материальное право регулирует содержание, права, обязанности и меры наказания (определяет «что» разрешено или наказуемо, например Уголовный кодекс StGB, Гражданский кодекс BGB). Процессуальное (формальное) право регулирует порядок и процедуры их реализации (определяет «как» осуществляется правоприменение, например УПК StPO).",
      en: "Substantive law defines rights, duties, offenses, and penalties (the 'what', e.g., Criminal Code StGB, Civil Code BGB). Procedural (formal) law governs the enforcement processes and legal proceedings (the 'how', e.g., Code of Criminal Procedure StPO)."
    }
  },

  // Frage 12 (q-oeff-12)
  "q-oeff-12": {
    frage: {
      fa: "آیا یک نیروی امنیتی مجاز به انجام بازرسی و کنترل ترافیک در خیابان‌های عمومی است؟",
      ar: "هل يحق لموظف الأمن إجراء تفتيش مروري أو تنظيم حركة السير في الشوارع العامة؟",
      ru: "Имеет ли право охранник проводить проверку дорожного движения на улице общего пользования?",
      en: "Is a security officer allowed to conduct traffic checks on a public street?"
    },
    loesung: {
      fa: "خیر، کنترل ترافیک و بازرسی خودروها در معابر عمومی یک وظیفه حاکمیتی دولتی است و منحصراً در اختیار مأموران پلیس قرار دارد.",
      ar: "لا، فهذه مهمة وسلطة سيادية مقتصرة تماماً وحصرياً على أفراد الشرطة في الطرق العامة.",
      ru: "Нет, контроль дорожного движения на дорогах общего пользования является суверенной задачей и закреплен исключительно за полицией.",
      en: "No, this is a sovereign function reserved exclusively for the police on public roads."
    }
  },

  // Frage 13 (q-oeff-13)
  "q-oeff-13": {
    frage: {
      fa: "آیا قانون آیین دادرسی کیفری (StPO) برای نیروهای امنیتی خصوصی نیز اعمال می‌شود؟",
      ar: "هل ينطبق قانون الإجراءات الجنائية (StPO) على حراس الأمن الخاص؟",
      ru: "Распространяется ли Уголовно-процессуальный кодекс (StPO) на сотрудников частной охраны?",
      en: "Does the Code of Criminal Procedure (StPO) apply to private security personnel?"
    },
    loesung: {
      fa: "بله، در رابطه با حقوق همگانی (نظیر حق بازداشت موقت شهروندی طبق § 127 Abs. 1 StPO) برای آنان اعمال می‌شود؛ در غیر این صورت، این قانون در درجه اول ناظر بر اختیارات دادستانی و پلیس است.",
      ar: "نعم، فيما يخص حقوق الكافة العامة المتاحة للجميع (مثل التوقيف المؤقت وفق § 127 الفقرة 1 StPO)، بينما تنظم باقي مواده في المقام الأول صلاحيات الشرطة والادعاء العام.",
      ru: "Да, в части прав каждого гражданина (таких как временное задержание по § 127 ч. 1 УПК StPO); в остальном кодекс регулирует прежде всего деятельность прокуратуры и полиции.",
      en: "Yes, specifically regarding citizen's rights (such as provisional arrest under § 127 (1) StPO); otherwise, it primarily governs the work of the public prosecutor's office and the police."
    }
  },

  // Frage 14 (q-oeff-14)
  "q-oeff-14": {
    frage: {
      fa: "هدف و ماهیت حقوق خصوصی در مقایسه با حقوق عمومی چیست؟",
      ar: "ما هو الغرض من القانون الخاص ومفهومه مقارنة بالقانون العام؟",
      ru: "Какова цель и сущность частного права в отличие от публичного права?",
      en: "What is the purpose of private law in contrast to public law?"
    },
    loesung: {
      fa: "حقوق خصوصی حاکم بر روابط حقوقی بین اشخاص برابر از نظر قانونی است (روابط بین شهروندان با یکدیگر بر پایه برابری). حقوق عمومی تنظیم‌کننده روابط مبتنی بر برتری و تبعیت میان دولت و شهروندان است.",
      ar: "ينظم القانون الخاص العلاقات القانونية بين أطراف متساوين في المركز القانوني (المواطنون فيما بينهم). بينما ينظم القانون العام علاقة السلطة والتبعية بين الدولة وأجهزتها من جهة والمواطنين من جهة أخرى.",
      ru: "Частное право регулирует правоотношения между юридически равными лицами (гражданами между собой). Публичное право регулирует отношения власти и подчинения между государством и гражданами.",
      en: "Private law governs legal relationships between legally equal parties (citizens among themselves). Public law governs the hierarchical relationship of authority and subordination between the state and citizens."
    }
  },

  // Frage 15 (q-oeff-15)
  "q-oeff-15": {
    frage: {
      fa: "چرا تفکیک دقیق میان فضای عمومی و ملک خصوصی برای شما در حرفه نگهبانی بسیار حیاتی است؟",
      ar: "لماذا يعد التمييز الدقيق بين الأماكن العامة والعقارات الخاصة أمراً بالغ الأهمية بالنسبة لك في مهنة الأمن؟",
      ru: "Почему для вас в охранной деятельности столь важно разграничение между общественным пространством и частной территорией?",
      en: "Why is the distinction between public space and private property so essential for you in the security profession?"
    },
    loesung: {
      fa: "زیرا در ملک خصوصی، حق مقررات مکانی مالک (Hausrecht) حاکم است که می‌تواند به نیروی امنیتی تفویض شود (اختیار تفتیش داوطلبانه، ممانعت از ورود و اخراج)، در حالی که در فضای عمومی تنها اختیارات همگانی شهروندی (Jedermannsrechte) معتبر است.",
      ar: "لأنه في الأماكن والعقارات الخاصة يسري حق إدارة المكان الممنوح للمالك (Hausrecht) والذي يمكن تفويضه لحارس الأمن، في حين لا تسري في الأماكن العامة سوى حقوق الكافة المتاحة لأي مواطن عادي.",
      ru: "Потому что на частной территории действует право распоряжения владельца (Hausrecht), которое может быть делегировано охраннику, тогда как в общественных местах действуют исключительно общегражданские права каждого.",
      en: "Because on private property, the owner's domiciliary rights (Hausrecht) apply, which can be delegated to the security officer, whereas in public spaces only citizen's rights (Jedermannsrechte) are available."
    }
  },

  // =========================================================================
  // 2. Gewerberecht (GewO / BewachV) (Fragen 16 bis 30)
  // =========================================================================

  // Frage 16 (q-gew-1)
  "q-gew-1": {
    frage: {
      fa: "کدام بند و ماده از قانون اصناف و تجارت آلمان (GewO) پایه و اساس قانونی حرفه شماست؟",
      ar: "أي مادة من قانون تنظيم المهن والتجارة الألماني (GewO) تعتبر الأساس القانوني لمهنتك؟",
      ru: "Какая статья Закона о регулировании промыслов (GewO) является правовой основой вашей профессии?",
      en: "Which paragraph of the German Trade Regulation Act (GewO) forms the legal foundation of your profession?"
    },
    loesung: {
      fa: "ماده 34a قانون اصناف (بخش مشاغل حراست و نگهبانی خصوصی - § 34a GewO).",
      ar: "المادة § 34a من قانون تنظيم المهن (مهنة الحراسة والأمن الخاص - § 34a GewO).",
      ru: "Параграф 34a Закона о промысле (§ 34a GewO - Частная охранная деятельность).",
      en: "Section 34a of the Trade Regulation Act (§ 34a GewO - Private Security Business)."
    }
  },

  // Frage 17 (q-gew-2)
  "q-gew-2": {
    frage: {
      fa: "تفاوت بین «دوره آموزشی مقدماتی (Unterrichtung)» و «آزمون تخصصی مهارت (Sachkundeprüfung)» چیست؟",
      ar: "ما هو الفرق بين «الدورة الإرشادية والتثقيفية (Unterrichtung)» و«امتحان الكفاءة والخبرة المهنية (Sachkundeprüfung)»؟",
      ru: "В чем разница между «процедурой инструктажа (Unterrichtung)» и «экзаменом на компетентность (Sachkundeprüfung)»?",
      en: "What is the difference between the instruction procedure (Unterrichtung) and the expertise examination (Sachkundeprüfung)?"
    },
    loesung: {
      fa: "دوره آموزشی مقدماتی (§ 34a Abs. 1a Satz 2 GewO) صرفاً شامل حضور در کلاس‌های آموزشی بدون آزمون است (برای وظایف ساده نظیر گشت کارگاهی کافی است). آزمون تخصصی مهارت نیازمند قبولی در آزمون کتبی و شفاهی اتاق بازرگانی IHK است (برای مشاغل پرخطر مانند دربانی کلاب‌ها، کارآگاهان فروشگاهی و سرپرستی کمپ‌های پناهجویان اجباری است).",
      ar: "تتضمن دورة الإرشاد والتثقيف الحضور فقط في الدورة دون خوض اختبار (وتكفي للمهام البسيطة كالحراسة العادية للمنشآت). بينما يتطلب امتحان الكفاءة والخبرة اجتياز اختبار تحريري وشفهي بنجاح لدى غرفة الصناعة والتجارة (وهو إلزامي لحراس الأبواب، ومحققي المتاجر، وإدارة مراكز اللاجئين).",
      ru: "Инструктаж (Unterrichtung) предполагает лишь прослушивание курса без сдачи экзамена (достаточно для простых задач, например постовой службы). Экзамен на компетентность требует успешной сдачи письменной и устной частей в IHK (обязателен для охранников клубов, детективов в магазинах, руководства охраной центров для беженцев).",
      en: "The instruction procedure involves mandatory attendance of a course without an examination (sufficient for basic guarding tasks). The expertise examination requires passing both a written and oral exam at the IHK (mandatory for bouncers, retail detectives, refugee shelter management, etc.)."
    }
  },

  // Frage 18 (q-gew-3)
  "q-gew-3": {
    frage: {
      fa: "برای کدام فعالیت‌های حراستی و نگهبانی قبولی در آزمون تخصصی مهارت (§ 34a GewO) الزامی و اجباری است؟",
      ar: "ما هي أنشطة ومهام الحراسة التي يشترط فيها وجوباً الحصول على شهادة امتحان الكفاءة (§ 34a GewO)؟",
      ru: "Для каких видов охранной деятельности обязательно требуется сдача экзамена на компетентность (§ 34a GewO)?",
      en: "For which security activities is passing the expertise examination (§ 34a GewO) strictly mandatory?"
    },
    loesung: {
      fa: "۱. گشت‌زنی در اماکن عمومی یا معابر با تردد عمومی (نظیر گشت شهری Citystreife)\n۲. حفاظت در برابر سارقین فروشگاهی (کارآگاه فروشگاه Kaufhausdetektiv)\n۳. حفاظت از ورودی اماکن تفریحی شبانه (دربانی دیسکو و کلاب Türsteher)\n۴. فعالیت‌های مدیریتی و نظارتی در مراکز اسکان پناهندگان و پناهجویان\n۵. فعالیت‌های مدیریتی و نظارتی در رویدادها و جشن‌های بزرگ با دسترسی عمومی.",
      ar: "1. الدوريات في الأماكن العامة والمناطق المفتوحة للمرور العام (Citystreife)\n2. مكافحة سرقة المتاجر (مراقب/محقق المتجر Kaufhausdetektiv)\n3. حراسة مداخل ومطاعم النوادي والمراقص الليلية (Türsteher)\n4. المناصب القيادية والإشرافية في مراكز إيواء اللاجئين\n5. المناصب القيادية والإشرافية في الفعاليات والاحتفالات الجماهيرية الكبرى.",
      ru: "1. Патрулирование общественных пешеходных зон и открытых транспортных пространств (Citystreife)\n2. Предотвращение краж в торговых центрах (детектив магазина)\n3. Охрана входов на дискотеках и в клубах (Türsteher)\n4. Руководящие функции в центрах размещения беженцев\n5. Руководящие функции на крупных массовых мероприятиях.",
      en: "1. Patrols in public traffic areas or pedestrian zones (city patrols)\n2. Protection against shoplifters (retail store detectives)\n3. Guarding entrance areas of discotheques/nightclubs (bouncers)\n4. Managerial/supervisory roles in refugee accommodation facilities\n5. Managerial/supervisory roles at major public events."
    }
  },

  // Frage 19 (q-gew-4)
  "q-gew-4": {
    frage: {
      fa: "سامانه سراسری ثبت نگهبانان (Bewacherregister - BWR) چیست؟",
      ar: "ما هو السجل الفيدرالي لبيانات حراس الأمن (Bewacherregister)؟",
      ru: "Что представляет собой Федеральный реестр охранников (Bewacherregister)?",
      en: "What is the Federal Security Guard Register (Bewacherregister)?"
    },
    loesung: {
      fa: "یک سامانه الکترونیکی یکپارچه در سطح فدرال آلمان است که در آن تمام شرکت‌های امنیتی و پرسنل نگهبانی ثبت شده و سوابق، صلاحیت فردی و مدارک آموزشی آنان توسط مراجع نظارتی دولتی بررسی و تأیید می‌شود.",
      ar: "هو سجل إلكتروني مركزي على مستوى ألمانيا، تُسجل فيه كافة شركات الأمن وأفراد الحراسة، حيث يتم فحص أهليتهم الأمنية وموثوقيتهم ومؤهلاتهم من قبل السلطات المختصة.",
      ru: "Это единый электронный федеральный реестр Германии, в котором регистрируются все охранные предприятия и персонал, и где государственные органы проверяют их благонадежность и квалификацию.",
      en: "An electronic nationwide register in Germany in which all security business operators and guarding staff are registered and officially vetted for reliability and qualifications by authorities."
    }
  },

  // Frage 20 (q-gew-5)
  "q-gew-5": {
    frage: {
      fa: "یک نیروی نگهبان از چه زمانی قانوناً مجاز است فعالیت شغلی خود را آغاز کند؟",
      ar: "متى يحق قانوناً لموظف الأمن البدء في ممارسة مهام الحراسة رسمياً؟",
      ru: "С какого момента сотрудник имеет право приступить к охранной деятельности?",
      en: "When is an employee legally permitted to start security duties?"
    },
    loesung: {
      fa: "تنها پس از ثبت رسمی و تأیید و صدور مجوز نهایی (تغییر وضعیت به حالت «فعال / aktiv») توسط اداره ذی‌صلاح دولتی در سامانه ثبت نگهبانان (Bewacherregister).",
      ar: "فقط بعد اكتمال التسجيل والحصول على الموافقة والاعتماد الرسمي (تفعيل الحالة إلى «نشط / aktiv») من قبل السلطة الحكومية المختصة في سجل الحراس.",
      ru: "Только после успешной регистрации и получения официального подтверждения (статус «активен / aktiv») от компетентного государственного органа в реестре охранников.",
      en: "Only after successful registration and official approval (status set to 'active') by the competent authority in the Security Guard Register."
    }
  },

  // Frage 21 (q-gew-6)
  "q-gew-6": {
    frage: {
      fa: "کارت شناسایی خدمت (Dienstausweis) یک نیروی نگهبان باید حاوی چه مشخصاتی باشد؟",
      ar: "ما هي البيانات والمعلومات التي يجب أن تتضمنها بطاقة الهوية المهنية (Dienstausweis) لحارس الأمن؟",
      ru: "Какие сведения должно содержать служебное удостоверение охранника?",
      en: "What information must the security guard service ID card contain?"
    },
    loesung: {
      fa: "نام و نام خانوادگی نگهبان، نام و نشانی شرکت امنیتی کارفرما، عکس پرسنلی نگهبان، امضای کارفرما (یا نماینده مجاز او) و شماره شناسایی اختصاصی فرد در سامانه ثبت نگهبانان (Bewacherregister-ID).",
      ar: "الاسم واللقب لموظف الحراسة، اسم وعنوان شركة الأمن المشغلة، صورة شخصية للموظف، توقيع صاحب العمل (أو المفوض عنه)، والرقم التعريفي الفريد من سجل الحراس الفيدرالي.",
      ru: "Имя и фамилия охранника, наименование и адрес охранного предприятия, фотография охранника, подпись работодателя (или доверенного лица) и идентификационный номер в реестре охранников.",
      en: "First and last name of the guard, name and address of the security firm, photo of the guard, signature of the employer (or authorized representative), and the unique ID number from the Security Guard Register."
    }
  },

  // Frage 22 (q-gew-7)
  "q-gew-7": {
    frage: {
      fa: "چه زمان و در چه مکان‌هایی الصاق و پوشیدن پلاک نام یا کد شناسایی روی لباس نگهبان اجباری است؟",
      ar: "متى وأين يجب على حارس الأمن ارتداء شارة الاسم أو رمز التعريف على الزي الرسمي؟",
      ru: "Когда и где охранник обязан носить бейдж с именем или идентификационным номером?",
      en: "When and where must a name badge or identification tag be worn?"
    },
    loesung: {
      fa: "نگهبانانی که در مشاغل مشمول آزمون تخصصی مهارت فعالیت دارند (مانند گشت‌زنی شهری Citystreife، دربانی دیسکو و کلاب‌ها)، باید یک نشان قابل رؤیت با نام خود یا شماره شناسایی به همراه نام شرکت امنیتی بر روی لباس نصب کنند.",
      ar: "يجب على حراس الأمن الذين يؤدون مهاماً تتطلب اجتياز امتحان الكفاءة (مثل دوريات المدن وحراس أبواب النوادي) ارتداء شارة واضحة ومرئية تحمل اسمهم أو رقمهم التعريفي مع اسم شركة الأمن.",
      ru: "Сотрудники охраны, выполняющие обязанности, для которых обязателен экзамен § 34a (например, патрулирование городских зон, охрана клубов), обязаны носить видимый бейдж с именем или номером и названием предприятия.",
      en: "Security guards performing tasks for which the expertise examination is mandatory (e.g., city patrols, bouncers) must wear a clearly visible badge showing their name or ID number and the security company name."
    }
  },

  // Frage 23 (q-gew-8)
  "q-gew-8": {
    frage: {
      fa: "کارفرمای شرکت امنیتی ملزم به ارائه چه نوع بیمه مسئولیت مدنی است؟",
      ar: "ما هو نوع تأمين المسؤولية المدنية الذي يجب على صاحب شركة الأمن إثبات وجوده؟",
      ru: "Какой договор страхования гражданской ответственности обязан предоставить предприниматель?",
      en: "What type of liability insurance must the security business operator provide proof of?"
    },
    loesung: {
      fa: "یک بیمه مسئولیت مدنی شغلی (Haftpflichtversicherung) با حداقل پوشش‌های مالی تعیین‌شده در قانون برای خسارات جانی، مالی، ضررهای اقتصادی و همچنین مفقود شدن یا به سرقت رفتن اشیاء تحت حفاظت.",
      ar: "تأمين مسؤولية مدنية قانوني يغطي الحدود الدنيا المنصوص عليها قانوناً للأضرار الجسدية والمادية والمالية، بالإضافة إلى فقدان وسرقة الأشياء الموكلة بحراستها.",
      ru: "Договор страхования профессиональной ответственности с установленными законом минимальными суммами покрытия вреда жизни, здоровью, имуществу, финансового ущерба и утраты охраняемых вещей.",
      en: "A professional liability insurance policy with legally mandated minimum coverage limits for personal injury, property damage, financial loss, and loss of guarded property."
    }
  },

  // Frage 24 (q-gew-9)
  "q-gew-9": {
    frage: {
      fa: "منظور از «ممنوعیت به‌کارگیری (Beschäftigungsverbot)» در حقوق اصناف و تجارت چیست؟",
      ar: "ماذا يُقصد بمفهوم «حظر التوظيف والتشغيل (Beschäftigungsverbot)» في قانون المهن؟",
      ru: "Что понимается под «запретом на работу / наем (Beschäftigungsverbot)» в промысловом праве?",
      en: "What is meant by the 'employment ban / prohibition of employment' in trade law?"
    },
    loesung: {
      fa: "کارفرما حق ندارد افرادی را به کار بگمارد که در سامانه ثبت نگهبانان تأیید نشده‌اند، فاقد صلاحیت اخلاقی و پیشینه لازم (عدم سوءپیشینه / Zuverlässigkeit) هستند، یا مدارک مهارتی لازم (آموزش مقدماتی/آزمون مهارت) را ارائه نکرده‌اند.",
      ar: "يُحظر على صاحب العمل تشغيل أي شخص غير معتمد في سجل الحراس، أو يفتقر إلى شرط الأهلية والموثوقية الجنائية، أو لا يمتلك المؤهلات المطلوبة (التدريب الإرشادي أو امتحان الكفاءة).",
      ru: "Работодатель не вправе привлекать к работе лиц, не одобренных в реестре охранников, не обладающих должной благонадежностью либо не подтвердивших требуемую квалификацию (инструктаж или экзамен).",
      en: "The employer is strictly prohibited from employing individuals who are not cleared in the Guard Register, lack personal reliability/background clearance, or cannot prove required qualifications (instruction or expertise exam)."
    }
  },

  // Frage 25 (q-gew-10)
  "q-gew-10": {
    frage: {
      fa: "کارفرما هنگام تعطیلی یا توقف فعالیت شرکت امنیتی چه وظایفی دارد؟",
      ar: "ما هي الواجبات المترتبة على صاحب شركة الأمن عند إنهاء أو إغلاق النشاط التجاري؟",
      ru: "Каковы обязанности предпринимателя при прекращении деятельности предприятия?",
      en: "What are the obligations of the business operator upon cessation of business operations?"
    },
    loesung: {
      fa: "او موظف است لغو ثبت صنف (Gewerbeabmeldung) را رسماً اعلام کرده و فوراً تمامی پرسنل را در سامانه ثبت نگهبانان (Bewacherregister) غیرفعال و از فهرست خارج نماید.",
      ar: "يجب عليه تقديم إخطار رسمي بإلغاء النشاط التجاري وشطب الموظفين والعمال فوراً من السجل الفيدرالي للحراس.",
      ru: "Он обязан подать заявление о снятии с учета предприятия (Gewerbeabmeldung) и незамедлительно снять весь персонал с учета в реестре охранников.",
      en: "He must officially deregister the trade/business and immediately deregister all security personnel in the Security Guard Register."
    }
  },

  // Frage 26 (q-gew-11)
  "q-gew-11": {
    frage: {
      fa: "کدام نهاد دولتی بر رعایت ضوابط ماده 34a قانون اصناف (GewO) نظارت می‌کند؟",
      ar: "ما هي الجهة أو السلطة الحكومية المسؤولة عن مراقبة الالتزام بالمادة § 34a GewO؟",
      ru: "Какой государственный орган контролирует соблюдение статьи § 34a GewO?",
      en: "Which authority monitors compliance with Section 34a of the Trade Regulation Act (GewO)?"
    },
    loesung: {
      fa: "اداره امور نظم عمومی (Ordnungsamt)، بخشداری/فرمانداری (Landratsamt) یا در برخی ایالت‌ها پلیس آگاهی و همچنین اتاق بازرگانی و صنایع (IHK) در رابطه با نظارت بر آزمون‌ها.",
      ar: "مكتب النظام العام المختص (Ordnungsamt)، إدارة المقاطعة (Landratsamt)، أو الشرطة الجنائية في بعض الولايات، ولجنة الاختبارات لدى غرفة الصناعة والتجارة (IHK) فيما يتعلق بالامتحانات.",
      ru: "Компетентное ведомство правопорядка (Ordnungsamt), районное управление (Landratsamt) или в некоторых землях уголовная полиция, а также экзаменационная комиссия IHK в части экзаменов.",
      en: "The competent Public Order Office (Ordnungsamt), District Administration Office (Landratsamt), or criminal police in some federal states, and the IHK examination board regarding exams."
    }
  },

  // Frage 27 (q-gew-12)
  "q-gew-12": {
    frage: {
      fa: "ماده ۴ آیین‌نامه نگهبانی و حراست (Bewachungsverordnung - BewachV) چه مواردی را تعیین می‌کند؟",
      ar: "ما الذي تنظمه المادة § 4 من اللائحة التنفيذية للحراسة (BewachV)؟",
      ru: "Что регулирует параграф 4 Положения об охранной деятельности (BewachV)?",
      en: "What is governed by Section 4 of the Guarding Ordinance (BewachV)?"
    },
    loesung: {
      fa: "الزامات و تکالیف مربوط به صدور، همراه داشتن و ارائه کارت شناسایی خدمت (Dienstausweis) توسط نگهبان.",
      ar: "الالتزامات والشروط القانونية المتعلقة بإصدار وحمل وإبراز بطاقة الهوية المهنية لحارس الأمن أثناء العمل.",
      ru: "Обязанности по оформлению, постоянному ношению при себе и предъявлению служебного удостоверения охранника.",
      en: "The obligations regarding the issuance, carrying, and presenting of the security service ID card."
    }
  },

  // Frage 28 (q-gew-13)
  "q-gew-13": {
    frage: {
      fa: "آیا لباس کار یک نیروی امنیتی می‌تواند مشابه لباس فرم مأموران پلیس باشد؟",
      ar: "هل يجوز أن يكون الزي الميداني لموظف الأمن مشابهاً لزي ضباط ورجال الشرطة؟",
      ru: "Может ли форма сотрудника охраны быть похожей на форму сотрудников полиции?",
      en: "May the uniform of a security officer resemble that of police officers?"
    },
    loesung: {
      fa: "خیر. لباس خدمت نباید به هیچ عنوان موجب اشتباه گرفته شدن با نیروهای دولتی (نظیر پلیس یا گمرک) شود. نشان‌ها، علائم و رنگ لباس باید کاملاً و به وضوح متمایز باشند.",
      ar: "لا، يُحظر أن يؤدي الزي الرسمي إلى أي لبس أو خلط مع أجهزة الدولة (كالشرطة أو الجمارك). ويجب أن تختلف الشارات وأجزاء الزي اختلافاً واضحاً وظاهراً للجميع.",
      ru: "Нет. Служебная форма не должна вводить в заблуждение и вызывать ассоциации с госорганами (полицией, таможней). Знаки отличия и элементы формы должны четко и визуально отличаться.",
      en: "No. The work uniform must not lead to confusion with state authorities (police, customs). Badges, patches, and uniform items must differ distinctly."
    }
  },

  // Frage 29 (q-gew-14)
  "q-gew-14": {
    frage: {
      fa: "اگر نگهبان کارت شناسایی خدمت خود را مفقود کند چه اقدامی باید صورت گیرد؟",
      ar: "ماذا يحدث إذا فقد حارس الأمن بطاقة هويته المهنية؟",
      ru: "Что происходит, если охранник теряет свое служебное удостоверение?",
      en: "What happens if a security guard loses their service ID card?"
    },
    loesung: {
      fa: "مفقودی باید بلافاصله به کارفرما گزارش داده شود تا کارت المثنی صادر گردد و در صورت لزوم مراتب در سامانه ثبت نگهبانان درج شود.",
      ar: "يجب إبلاغ صاحب العمل على الفور بحالة الفقدان حتى يتم إصدار بديل وتوثيق الفقدان في السجل الرسمي إذا لزم الأمر.",
      ru: "Об утрате необходимо незамедлительно сообщить работодателю, чтобы тот оформил дубликат и при необходимости внес отметку об утере в реестр.",
      en: "The loss must be reported immediately to the employer so that a replacement can be issued and recorded in the register if required."
    }
  },

  // Frage 30 (q-gew-15)
  "q-gew-15": {
    frage: {
      fa: "آیا ضبط و نگه داشتن کارت شناسایی ملی افراد به عنوان بیعانه/گرو در ورودی کارخانه از نظر قانون اصناف مجاز است؟",
      ar: "هل يجوز قانوناً التحفظ على بطاقة الهوية الشخصية كضمانة أو رهن عند بوابة دخول منشأة/مصنع؟",
      ru: "Разрешено ли удерживать удостоверение личности (паспорт) в качестве залога на проходной предприятия?",
      en: "Is withholding an official ID card as a deposit at a facility/plant gate permitted under trade law?"
    },
    loesung: {
      fa: "خیر، بر اساس قانون کارت شناسایی ملی، ضبط کارت به عنوان وثیقه یا امانت ممنوع است. ثبت مشخصات یا تحویل کارت ورود در قبال دریافت کارت‌های غیرحساس و معمولی دیگر بلامانع است.",
      ar: "لا، وفقاً لقانون بطاقات الهوية الشخصية لا يجوز أخذ الهوية كرهن أو ضمان. ويُسمح فقط بتسجيل البيانات أو تسليم بطاقة الزائر مقابل بطاقة أخرى غير رسمية.",
      ru: "Нет, согласно Закону об удостоверениях личности паспорт запрещено брать в залог. Разрешается переписать данные либо выдать пропуск в обмен на иную некритичную карту.",
      en: "No, according to the Identity Card Act, official ID cards may not be taken as a deposit. Recording data or issuing a visitor badge in exchange for another non-critical card is permitted."
    }
  }
};
