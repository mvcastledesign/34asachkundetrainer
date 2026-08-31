/**
 * @file translationsPart2.ts
 * Statische Fachübersetzungen (Block 2: Fragen 31 bis 60 aus initialQuestions.ts)
 * § 34a GewO Sachkundeprüfung.
 * 
 * Kategorien:
 * - 3. Bürgerliches Gesetzbuch (BGB) (Fragen 31 bis 45: q-bgb-1 bis q-bgb-15)
 * - 4. Straf- und Strafverfahrensrecht (StGB / StPO) (Fragen 46 bis 60: q-st-1 bis q-st-15)
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

export const TRANSLATIONS_PART_2: Record<string, TranslationBlockItem> = {
  // =========================================================================
  // 3. Bürgerliches Gesetzbuch (BGB) (Fragen 31 bis 45)
  // =========================================================================

  // Frage 31 (q-bgb-1)
  "q-bgb-1": {
    frage: {
      fa: "تفاوت میان «مالکیت (Eigentum)» و «تصرف (Besitz)» را با ذکر یک مثال ملموس توضیح دهید.",
      ar: "اشرح الفرق بين «الملكية (Eigentum)» و«الحيازة (Besitz)» من خلال مثال عملي ملموس.",
      ru: "Объясните разницу между «собственностью (Eigentum)» и «владением (Besitz)» на конкретном примере.",
      en: "Explain the difference between ownership (Eigentum) and possession (Besitz) using a concrete example."
    },
    loesung: {
      fa: "شرکت امنیتی یک دستگاه بی‌سیم را خریداری می‌کند (مالک طبق § 903 BGB). هنگام شیفت خدمت، نگهبان از بی‌سیم استفاده می‌کند (متصرف طبق § 854 BGB، زیرا قدرت و کنترل عملی و فیزیکی بر روی شیء را در دست دارد).",
      ar: "تشتري شركة الأمن جهاز اتصال لاسلكي (المالك وفق § 903 BGB). وأثناء نوبة العمل، يستخدم حارس الأمن هذا الجهاز (الحائز وفق § 854 BGB، لأنه يمارس السيطرة الفعلية والمادية على الشيء).",
      ru: "Охранное предприятие покупает рацию (собственник по § 903 BGB). На смене охранник использует эту рацию (владелец по § 854 BGB, так как осуществляет фактический физический контроль над вещью).",
      en: "The security company purchases a two-way radio (owner under § 903 BGB). During duty, the security guard uses the radio (possessor under § 854 BGB, having actual physical control over the item)."
    }
  },

  // Frage 32 (q-bgb-2)
  "q-bgb-2": {
    frage: {
      fa: "منظور قانون مدنی آلمان (BGB) از «زورگویی و تصرف غیرقانونی / خودسری ممنوعه (Verbotene Eigenmacht - § 858 BGB)» چیست؟",
      ar: "ماذا يقصد القانون المدني بمفهوم «الافتئات غير المشروع على الحيازة / التصرف التعسفي المحظور (§ 858 BGB)»؟",
      ru: "Что понимает Гражданский кодекс (BGB) под «самоуправным нарушением владения (§ 858 BGB)»?",
      en: "What does the German Civil Code (BGB) understand by 'unlawful interference with possession (§ 858 BGB)'?"
    },
    loesung: {
      fa: "سلب یا ایجاد مزاحمت و اخلال در تصرف متصرف، بدون رضایت و اراده او و بدون داشتن مجوز قانونی. این عمل غیرقانونی و نامشروع است.",
      ar: "سلب أو انتزاع الحيازة أو إحداث إزعاج وتعطيل لها دون إرادة ورضا الحائز ودون تصريح أو مسوغ قانوني. وهو تصرف غير مشروع ومخالف للقانون.",
      ru: "Лишение владения или воспрепятствование владению против воли владельца и без установленного законом разрешения. Является противоправным деянием.",
      en: "The deprivation of or interference with possession without the will of the possessor and without statutory authorization. It is unlawful."
    }
  },

  // Frage 33 (q-bgb-3)
  "q-bgb-3": {
    frage: {
      fa: "چه زمانی می‌توان از «دفاع از تصرف (Besitzwehr - § 859 Abs. 1 BGB)» استفاده کرد؟",
      ar: "متى يحق قانوناً استخدام «الدفاع عن الحيازة (Besitzwehr - § 859 Abs. 1 BGB)»؟",
      ru: "Когда разрешено применять «защиту владения от посягательства (Besitzwehr - § 859 ч. 1 BGB)»?",
      en: "When is one permitted to exercise 'defense of possession (Besitzwehr - § 859 (1) BGB)'?"
    },
    loesung: {
      fa: "بلافاصله و در همان لحظه، جهت مقابله و ممانعت از یک خودسری و تعرض جاری غیرقانونی (مثلاً زمانی که فردی قصد دارد به زور چراغ‌قوه را از دست شما بقاپد) با استفاده از نیروی فیزیکی متناسب.",
      ar: "فوراً وفي نفس اللحظة، لرد ومنع أي افتئات أو تعدٍ غير مشروع على الحيازة يجري حالياً (مثل محاولة شخص انتزاع المصباح اليدوي من يدك بالقوة) باستخدام القوة الجسدية المتناسبة.",
      ru: "Немедленно, чтобы защититься от текущего самоуправного посягательства на владение (например, кто-то пытается вырвать фонарь из рук) с применением соразмерной силы.",
      en: "Immediately, in order to resist an ongoing unlawful interference with possession (e.g., someone trying to snatch a flashlight from your hands) using proportionate force."
    }
  },

  // Frage 34 (q-bgb-4)
  "q-bgb-4": {
    frage: {
      fa: "چه زمانی می‌توان از «بازپس‌گیری تصرف (Besitzkehr - § 859 Abs. 2 BGB)» استفاده کرد؟",
      ar: "متى يحق قانوناً ممارسة «استرداد الحيازة بالقوة (Besitzkehr - § 859 Abs. 2 BGB)»؟",
      ru: "Когда разрешено применять «возврат владения по горячим следам (Besitzkehr - § 859 ч. 2 BGB)»?",
      en: "When is one permitted to exercise 'recovery of possession (Besitzkehr - § 859 (2) BGB)'?"
    },
    loesung: {
      fa: "هنگامی که یک شیء منقول به صورت غیرقانونی ربوده و سلب تصرف شده باشد، می‌توان آن را در حین ارتکاب جرم (روی صحنه) یا در چارچوب تعقیب و پیگیری فوری و مستقیم از متجاوز بازپس گرفت.",
      ar: "عندما يُسلب أو يُنتزع شيء منقول عن طريق افتئات تعسفي غير مشروع، يحق استرداده من الجاني أثناء ارتكاب الفعل في الحال أو في إطار الملاحقة والمطاردة المباشرة والفورية.",
      ru: "Если движимая вещь была отнята путем самоуправного посягательства, ее разрешается отобрать у нарушителя на месте преступления (с поличным) или в ходе непосредственного преследования.",
      en: "When a movable item has been taken away through unlawful interference, it may be retaken from the perpetrator caught in the act or pursued immediately."
    }
  },

  // Frage 35 (q-bgb-5)
  "q-bgb-5": {
    frage: {
      fa: "حق مقررات مکانی و حریم اماکن (Hausrecht) چه مواردی را تعیین می‌کند و پایه آن در قانون مدنی (BGB) چیست؟",
      ar: "ما الذي ينظمه حق إدارة المكان وحرمة المنشأة (Hausrecht) وعلى ماذا يستند في القانون المدني (BGB)؟",
      ru: "Что регулирует право распоряжения объектом (Hausrecht) и на чем оно основано в Гражданском кодексе (BGB)?",
      en: "What does domiciliary rights (Hausrecht) govern and on what is it based in the German Civil Code (BGB)?"
    },
    loesung: {
      fa: "بر پایه حق مالکیت (§ 903 BGB) و حق تصرف (§ 854 BGB) استوار است و به صاحب حق اجازه می‌دهد تعیین کند چه کسانی مجاز به ورود به ملک/ساختمان هستند و چه کسانی باید فوراً آنجا را ترک کنند.",
      ar: "يستند إلى حق الملكية (§ 903 BGB) وحق الحيازة (§ 854 BGB)، ويمنح صاحب الحق الصلاحية الكاملة لتحديد من يُسمح له بدخول العقار/المبنى ومن يجب عليه مغادرته فوراً.",
      ru: "Оно основано на праве собственности (§ 903 BGB) и праве владения (§ 854 BGB) и позволяет правообладателю определять, кто имеет право входить на территорию/в здание, а кто обязан покинуть объект.",
      en: "It is based on ownership (§ 903 BGB) and possession (§ 854 BGB) rights, allowing the holder to determine who may enter the premises/building and who must leave."
    }
  },

  // Frage 36 (q-bgb-6)
  "q-bgb-6": {
    frage: {
      fa: "«اضطرار تدافعی (Defensiver Notstand - § 228 BGB)» چیست؟",
      ar: "ما هي «حالة الضرورة الدفاعية (Defensiver Notstand - § 228 BGB)»؟",
      ru: "Что такое «Оборонительная крайняя необходимость (Defensiver Notstand - § 228 BGB)»?",
      en: "What is 'defensive state of necessity (Defensiver Notstand - § 228 BGB)'?"
    },
    loesung: {
      fa: "آسیب زدن یا نابود کردن یک شیء یا حیوان متعلق به دیگری جهت دفع خطری که مستقیماً از خود آن شیء یا حیوان ناشی می‌شود (مثلاً کشتن سگ مهاجمی که حمله کرده است). خسارت واردشده نباید به طور نامتناسب و نامعقول بیشتر از خطر باشد.",
      ar: "إتلاف أو تدمير شيء أو حيوان مملوك للغير لدفع خطر وشيك ينبع من هذا الشيء نفسه (مثل قتل كلب شرس يشن هجوماً). ويشترط ألا يكون الضرر الناجم غير متناسب بشكل فاحش مع الخطر.",
      ru: "Повреждение или уничтожение чужой вещи/животного для предотвращения опасности, исходящей от самой этой вещи/животного (например, застрелить нападающую бойцовую собаку). Причиненный вред не должен быть несоразмерен опасности.",
      en: "Damaging or destroying someone else's property to avert a danger originating from that property itself (e.g., shooting an attacking guard dog). The damage must not be disproportionate to the danger."
    }
  },

  // Frage 37 (q-bgb-7)
  "q-bgb-7": {
    frage: {
      fa: "«اضطرار تهاجمی (Aggressiver Notstand - § 904 BGB)» چیست؟",
      ar: "ما هي «حالة الضرورة الهجومية (Aggressiver Notstand - § 904 BGB)»؟",
      ru: "Что такое «Агрессивная крайняя необходимость (Aggressiver Notstand - § 904 BGB)»?",
      en: "What is 'aggressive state of necessity (Aggressiver Notstand - § 904 BGB)'?"
    },
    loesung: {
      fa: "دست‌اندازی، ورود یا آسیب رساندن به یک شیء متعلق به شخص ثالث و بی‌طرف، جهت دفع یک خطر فوری و قریب‌الوقوع (مثلاً شکستن قفل کلبه باغ یک همسایه غریبه برای پناه گرفتن در برابر طوفان و تگرگ مرگبار شدید). مالک ملزم به تحمل است اما حق دریافت خسارت دارد.",
      ar: "التأثير أو استخدام أو إتلاف شيء مملوك لطرف ثالث بريء لا علاقة له بمصدر الخطر، لدفع خطر داهم وحالي (مثل كسر باب كوخ حديقة لشخص غريب للاحتماء من عاصفة برد قاتلة).",
      ru: "Воздействие на чужую, непричастную вещь для предотвращения наличной опасности (например, взломать чужой дачный домик, чтобы укрыться от смертоносного града). Владелец обязан терпеть воздействие, но имеет право на компенсацию.",
      en: "Interfering with or damaging property of an uninvolved third party to avert a present danger (e.g., breaking into someone else's garden shed to seek shelter from a severe, life-threatening hailstorm)."
    }
  },

  // Frage 38 (q-bgb-8)
  "q-bgb-8": {
    frage: {
      fa: "ماده «احقاق حق شخصی عمومی (§ 229 BGB - Allgemeine Selbsthilfe)» چه می‌گوید؟",
      ar: "ماذا تنص المادة الخاصة بـ «المساعدة الذاتية العامة (§ 229 BGB - Allgemeine Selbsthilfe)»؟",
      ru: "Что гласит положение об «Общей самопомощи согласно § 229 BGB»?",
      en: "What does General Self-Help under Section 229 of the German Civil Code (§ 229 BGB) state?"
    },
    loesung: {
      fa: "هرکس به منظور احقاق حق شخصی، شیئی را ضبط، تخریب یا فرد متعهدی را که مظنون به فرار است دستگیر کند، در صورتی که کمک مراجع دولتی به موقع در دسترس نباشد، اقدام وی غیرقانونی تلقی نمی‌شود.",
      ar: "من يقوم بغرض المساعدة الذاتية بأخذ شيء أو إتلافه أو توقيف شخص مدين وملتزم يُشتبه في فراره، لا يعد فعله غير مشروع إذا لم يكن بالإمكان الحصول على مساعدة السلطات الرسمية في الوقت المناسب.",
      ru: "Тот, кто в целях самопомощи изымает, уничтожает вещь либо задерживает обязанное лицо, подозреваемое в побеге, действует правомерно, если помощь органов власти не может быть получена своевременно.",
      en: "Whoever, for the purpose of self-help, seizes or destroys an item, or detains an obligated person suspected of flight, does not act unlawfully if timely official assistance is unavailable."
    }
  },

  // Frage 39 (q-bgb-9)
  "q-bgb-9": {
    frage: {
      fa: "شروط و پیش‌نیازهای قانونی اجرای احقاق حق شخصی (§ 229 BGB) را نام ببرید.",
      ar: "اذكر الشروط والمتطلبات القانونية لممارسة المساعدة الذاتية العامة (§ 229 BGB).",
      ru: "Назовите условия и предпосылки для применения общей самопомощи (§ 229 BGB).",
      en: "Name the prerequisites for exercising General Self-Help (§ 229 BGB)."
    },
    loesung: {
      fa: "وجود یک ادعا و مطالبه معتبر حقوقی مدنی (مثلاً مطالبه غرامت یا استرداد کالا)، عدم امکان دسترسی به موقع به کمک مراجع دولتی و پلیس، ظن به فرار بدهکار، و وجود این خطر که در صورت عدم اقدام، استیفای حق برای همیشه غیرممکن یا بسیار دشوار گردد.",
      ar: "وجود حق أو مطالبة مدنية مشروعة وقائمة (مثل طلب التعويض أو استرداد البضاعة)، تعذر الحصول على مساعدة الشرطة أو السلطات في الوقت المناسب، وجود شبهة قوية لفرار المدين، ووجود خطر حقيقي بضياع الحق وفواته تماماً إن لم يُتخذ الإجراء.",
      ru: "Наличие законного гражданско-правового требования (например, о возмещении ущерба или возврате вещи), невозможность своевременно получить помощь полиции/властей, подозрение должника в побеге и опасность того, что в противном случае реализация права станет невозможной.",
      en: "Existence of a valid civil law claim (e.g., damages or return of goods), official assistance cannot be obtained in time, suspicion of flight by the debtor, and the danger that enforcement of the claim would otherwise be thwarted."
    }
  },

  // Frage 40 (q-bgb-10)
  "q-bgb-10": {
    frage: {
      fa: "تفاوت میان دفاع مشروع در قانون مدنی (§ 227 BGB) و قانون مجازات (§ 32 StGB) چیست؟",
      ar: "ما هو الفرق بين الدفاع الشرعي في القانون المدني (§ 227 BGB) وقانون العقوبات (§ 32 StGB)؟",
      ru: "В чем разница между необходимой обороной в Гражданском кодексе (§ 227 BGB) и в Уголовном кодексе (§ 32 StGB)?",
      en: "What is the difference between self-defense in civil law (§ 227 BGB) and in criminal law (§ 32 StGB)?"
    },
    loesung: {
      fa: "از نظر محتوا و ارکان کاملاً یکسان هستند (دفع حمله جاری و غیرقانونی). ماده 227 قانون مدنی مسئولیت پرداخت خسارت مالی و مدنی را منتفی می‌کند؛ ماده 32 قانون مجازات مجازات کیفری و جرم بودن عمل را منتفی می‌سازد.",
      ar: "من حيث المضمون والشروط هما متطابقان تماماً (دفع اعتداء حالٍ وغير مشروع). المادة § 227 BGB تنفي وتمنع المسؤولية المدنية عن التعويض؛ بينما المادة § 32 StGB تنفي المسؤولية الجنائية والعقوبة عن الفعل.",
      ru: "По содержанию они абсолютно идентичны (отражение наличного противоправного нападения). Статья § 227 BGB исключает гражданско-правовую обязанность возмещения ущерба; статья § 32 StGB исключает уголовную наказуемость.",
      en: "In terms of content, they are identical (averting a present, unlawful attack). Section 227 BGB excludes civil liability for damages; Section 32 StGB excludes criminal liability and punishment."
    }
  },

  // Frage 41 (q-bgb-11)
  "q-bgb-11": {
    frage: {
      fa: "ممنوعیت سوءاستفاده از حق و ایذا (§ 226 BGB - Schikaneverbot) به چه معناست؟",
      ar: "ماذا يعني مبدأ «حظر التعسف في استعمال الحق والكيد (Schikaneverbot - § 226 BGB)»؟",
      ru: "Что означает «Запрет на злоупотребление правом / шикану (Schikaneverbot - § 226 BGB)»?",
      en: "What is meant by the 'prohibition of malicious exercise of rights / ban on chicanery (§ 226 BGB)'?"
    },
    loesung: {
      fa: "اعمال و اجرای یک حق قانونی غیرمجاز و نامشروع است چنانچه تنها هدف آن صرفاً وارد آوردن خسارت، آزار و اذیت به دیگری باشد (مثلاً بازرسی‌های مکرر ورودی بدون هیچ دلیل و فقط برای تحقیر و اذیت فرد).",
      ar: "تعتبر ممارسة الحق غير جائزة وممنوعة قانوناً إذا كان الغرض الوحيد والأساسي منها هو الإضرار بالغير ومضايقته (مثل إجراءات تفتيش تعسفية كيدية متكررة عند الدخول دون مبرر).",
      ru: "Осуществление права недопустимо, если оно имеет исключительной целью причинение вреда другому лицу (например, необоснованный, чисто издевательский досмотр на входе).",
      en: "The exercise of a right is inadmissible if its sole intended purpose can only be to inflict damage or harassment upon another person (e.g., groundless, purely vexatious entry searches)."
    }
  },

  // Frage 42 (q-bgb-12)
  "q-bgb-12": {
    frage: {
      fa: "مسئولیت مدنی و جبران خسارت (Deliktsfähigkeit) از چه سنی آغاز می‌شود؟",
      ar: "من أي سن تبدأ الأهلية القانونية للمسؤولية عن الأضرار والتعويض (Deliktsfähigkeit)؟",
      ru: "С какого возраста наступает деликтоспособность (ответственность за причинение вреда)?",
      en: "From what age is a person liable for damages (tortious capacity / Deliktsfähigkeit)?"
    },
    loesung: {
      fa: "مسئولیت مشروط از ۷ سالگی (در حوادث ترافیک جاده‌ای از ۱۰ سالگی)، و مسئولیت کامل مدنی از سن ۱۸ سالگی تمام (§ 828 BGB).",
      ar: "مسؤولية مشروطة ومقيدة تبدأ من سن 7 سنوات (وفي حوادث السير والمرور من سن 10 سنوات)، وتبدأ الأهلية الكاملة للمسؤولية عن التعويض عند بلوغ سن 18 عاماً (§ 828 BGB).",
      ru: "Частичная с 7 лет (в дорожно-транспортных происшествиях с 10 лет), полная деликтоспособность наступает с 18 лет (§ 828 BGB).",
      en: "Conditional liability starts from age 7 (in motor traffic accidents from age 10); full tort capacity starts at age 18 (§ 828 BGB)."
    }
  },

  // Frage 43 (q-bgb-13)
  "q-bgb-13": {
    frage: {
      fa: "شخص حقوقی (Juristische Person) چیست؟",
      ar: "ما هو «الشخص الاعتباري / القانوني (Juristische Person)»؟",
      ru: "Что такое «Юридическое лицо»?",
      en: "What is a 'legal entity / Juridical person'?"
    },
    loesung: {
      fa: "اجتماعی از اشخاص یا مجموعه‌ای از دارایی‌ها و اموال است که توسط قانون دارای هویت و اهلیت مستقل حقوقی شناخته شده است (مانند شرکت با مسئولیت محدود GmbH، شرکت سهامی AG، یا انجمن ثبت‌شده e.V.).",
      ar: "مجموعة من الأشخاص أو ذمة مالية مستقلة يعترف بها القانون وتتمتع بأهلية قانونية مستقلة لاكتساب الحقوق وتحمل الالتزامات (مثل شركة ذات مسؤولية محدودة GmbH، شركة مساهمة AG، أو جمعية مسجلة e.V.).",
      ru: "Объединение лиц или имущественная масса, признанные законом в качестве самостоятельного субъекта права (например, ООО / GmbH, АО / AG, зарегистрированное общество e.V.).",
      en: "An association of persons or an estate of assets recognized by law as having legal capacity (e.g., GmbH, AG, registered association e.V.)."
    }
  },

  // Frage 44 (q-bgb-14)
  "q-bgb-14": {
    frage: {
      fa: "بر اساس قانون مدنی آلمان (BGB) مفهوم «مال / شیء (Sache)» به چه معناست؟",
      ar: "ما هو مفهوم «الشيء (Sache)» وفقاً للقانون المدني (BGB)؟",
      ru: "Что понимается под «вещью (Sache)» в смысле Гражданского кодекса (BGB)?",
      en: "What is understood by an 'item / thing (Sache)' under the German Civil Code (BGB)?"
    },
    loesung: {
      fa: "طبق ماده ۹۰ قانون مدنی (§ 90 BGB)، اشیاء تنها اجسام و اشیای مادی و فیزیکی هستند. (حیوانات شیء نیستند، اما از نظر حقوقی عمدتاً مقررات اشیاء بر آن‌ها اعمال می‌شود، § 90a BGB).",
      ar: "وفقاً للمادة § 90 BGB، الأشياء هي فقط الأجسام المادية الملموسة. (الحيوانات ليست أشياء، ولكن تسري عليها الأحكام القانونية الخاصة بالأشياء إلى حد كبير، § 90a BGB).",
      ru: "Согласно § 90 BGB вещами признаются только материальные (физические) предметы. (Животные не являются вещами, но к ним применяются соответствующие правовые нормы, § 90a BGB).",
      en: "According to Section 90 BGB, things are only tangible physical objects. (Animals are not things, but are legally treated largely as such, Section 90a BGB)."
    }
  },

  // Frage 45 (q-bgb-15)
  "q-bgb-15": {
    frage: {
      fa: "شما یک سارق فروشگاه را که قصد فرار دارد تا زمان رسیدن پلیس مهار می‌کنید. چنانچه بخواهید از مفقود شدن مال و جبران خسارت سرقت اطمینان حاصل کنید، از کدام حق استفاده می‌نمایید؟",
      ar: "قمت بضبط سارق متجر يحاول الفرار وقمت بتوقيفه حتى وصول الشرطة. ما هو الحق الذي تستند إليه لتأمين استرداد المسروقات والتعويض عن الضرر؟",
      ru: "Вы удерживаете магазинного вора, пытающегося скрыться, до прибытия полиции. Каким правом вы пользуетесь для обеспечения сохранности украденного имущества?",
      en: "You detain a shoplifter attempting to flee until the police arrive. Which legal right do you utilize if you wish to secure recovery of the stolen merchandise?"
    },
    loesung: {
      fa: "حق احقاق حق شخصی عمومی (§ 229 BGB) جهت تضمین ادعای استرداد کالا به همراه حق بازداشت موقت شهروندی طبق ماده ۱۲۷ بند ۱ آیین دادرسی کیفری (§ 127 Abs. 1 StPO).",
      ar: "حق المساعدة الذاتية العامة (§ 229 BGB) لتأمين الحق في استرداد البضاعة والمسروقات، بالإضافة إلى حق التوقيف المؤقت المتاح للكافة وفق المادة § 127 الفقرة 1 من قانون الإجراءات الجنائية StPO.",
      ru: "Общей самопомощью (§ 229 BGB) для обеспечения требования о возврате похищенного товара, а также правом каждого на временное задержание по § 127 ч. 1 УПК StPO.",
      en: "General Self-Help (§ 229 BGB) to secure the claim for return of the goods, alongside the right to provisional citizen's arrest under Section 127 (1) of the Code of Criminal Procedure (StPO)."
    }
  },

  // =========================================================================
  // 4. Straf- und Strafverfahrensrecht (StGB / StPO) (Fragen 46 bis 60)
  // =========================================================================

  // Frage 46 (q-st-1)
  "q-st-1": {
    frage: {
      fa: "تعریف حقوقی «دفاع مشروع (Notwehr - § 32 StGB)» چیست؟",
      ar: "ما هو التعريف القانوني لـ «الدفاع الشرعي (Notwehr - § 32 StGB)»؟",
      ru: "Каково определение «необходимой обороны (§ 32 StGB)»?",
      en: "What is the legal definition of self-defense (§ 32 StGB)?"
    },
    loesung: {
      fa: "دفاع مشروع، دفاع و پاسخی است که برای دفع و رفع یک حمله جاری و غیرقانونی به خود یا به دیگری (دفاع از دیگری / Nothilfe) لازم و ضروری باشد.",
      ar: "الدفاع الشرعي هو الدفاع الضروري واللازم لدفع وإحباط اعتداء حالٍ وغير مشروع يقع على النفس أو على الغير (نجدة الغير / Nothilfe).",
      ru: "Необходимая оборона — это защита, которая требуется для отражения наличного противоправного нападения на себя или на другого человека (помощь при необходимой обороне / Nothilfe).",
      en: "Self-defense is the defense necessary to avert a present, unlawful attack upon oneself or another person (aid in self-defense / Nothilfe)."
    }
  },

  // Frage 47 (q-st-2)
  "q-st-2": {
    frage: {
      fa: "یک حمله چه زمانی «جاری و حاضر (gegenwärtig)» محسوب می‌شود؟",
      ar: "متى يعتبر الاعتداء «حالاً ووشيكاً (gegenwärtig)»؟",
      ru: "Когда нападение признается «наличным (gegenwärtig)»?",
      en: "When is an attack considered 'present / imminent'?"
    },
    loesung: {
      fa: "زمانی که حمله بلافاصله و قریب‌الوقوع در آستانه وقوع باشد، در همان لحظه در حال انجام باشد، یا هنوز خاتمه نیافته و ادامه داشته باشد.",
      ar: "عندما يكون الاعتداء وشيك الوقوع مباشرة، أو يجري تنفيذه في اللحظة الراهنة، أو لا يزال مستمراً ولم ينتهِ بعد.",
      ru: "Когда нападение непосредственно угрожает, происходит в данный момент или все еще продолжается.",
      en: "When it is directly imminent, currently taking place, or still ongoing."
    }
  },

  // Frage 48 (q-st-3)
  "q-st-3": {
    frage: {
      fa: "یک حمله چه زمانی «غیرقانونی و نامشروع (rechtswidrig)» است؟",
      ar: "متى يعتبر الاعتداء «غير مشروع ومخالفاً للقانون (rechtswidrig)»؟",
      ru: "Когда нападение признается «противоправным (rechtswidrig)»?",
      en: "When is an attack considered 'unlawful'?"
    },
    loesung: {
      fa: "زمانی که مهاجم هیچ‌گونه حق یا مجوز قانونی برای انجام آن حمله نداشته باشد (یعنی حمله در تضاد و تعارض آشکار با نظم حقوقی باشد).",
      ar: "عندما لا يمتلك المعتدي أي سند أو مسوغ أو حق قانوني لشن هذا الهجوم (أي أن الاعتداء يتعارض تماماً مع النظام القانوني).",
      ru: "Когда нападающий не имеет законного права на это нападение (то есть нападение противоречит правопорядку).",
      en: "When the attacker has no legal right or justification to commit the attack (i.e., the attack is contrary to the legal order)."
    }
  },

  // Frage 49 (q-st-4)
  "q-st-4": {
    frage: {
      fa: "منظور از حق بازداشت موقت همگانی (§ 127 Abs. 1 StPO - Vorläufige Festnahme) چیست؟",
      ar: "ما هو المقصود بحق «التوقيف المؤقت المتاح للكافة (§ 127 الفقرة 1 StPO)»؟",
      ru: "Что понимается под правом на «временное задержание каждым гражданином (§ 127 ч. 1 УПК StPO)»?",
      en: "What is understood by the right to provisional citizen's arrest (§ 127 (1) StPO)?"
    },
    loesung: {
      fa: "حق همگانی هر شهروند برای بازداشت موقت یک فرد بدون دستور و حکم قاضی، در صورتی که فرد در حین ارتکاب جرم یا در تعقیب دستگیر شود، مظنون به فرار باشد یا هویت او فوراً قابل احراز نباشد.",
      ar: "حق متاح لكل شخص لتوقيف الجاني مؤقتاً دون أمر قضائي، إذا ضُبط متلبساً بالجريمة أو أثناء ملاحقته، وكان يُخشى فراره أو تعذر التحقق من هويته في الحال.",
      ru: "Право любого гражданина временно задержать лицо без судебного ордера, если оно застигнуто на месте преступления или преследуется по горячим следам, подозревается в побеге либо его личность не может быть немедленно установлена.",
      en: "The citizen's right to provisionally detain a person without a judicial warrant if caught in the act or pursued immediately, and suspected of flight or their identity cannot be immediately determined."
    }
  },

  // Frage 50 (q-st-5)
  "q-st-5": {
    frage: {
      fa: "اصطلاح «در حین ارتکاب جرم دستگیر شدن (auf frischer Tat betroffen)» به چه معناست؟",
      ar: "ماذا يعني التعبير القانوني «ضُبط متلبساً بالجرم المشهود (auf frischer Tat betroffen)»؟",
      ru: "Что означает понятие «застигнут на месте преступления с поличным»?",
      en: "What does 'caught in the act (auf frischer Tat betroffen)' mean?"
    },
    loesung: {
      fa: "مرتکب در حین اجرای عمل مجرمانه یا بلافاصله پس از آن در محل وقوع جرم مشاهده و دستگیر شود.",
      ar: "أن يُشاهد الجاني ويُضبط أثناء تنفيذ الفعل الإجرامي أو مباشرة بعده في مسرح الجريمة.",
      ru: "Преступник обнаружен непосредственно в момент совершения преступления либо сразу после этого на месте преступления.",
      en: "The perpetrator is perceived during the commission of the criminal act or immediately afterwards at the crime scene."
    }
  },

  // Frage 51 (q-st-6)
  "q-st-6": {
    frage: {
      fa: "آیا یک نیروی امنیتی مجاز است فرد بازداشت‌شده بر اساس ماده ۱۲۷ بند ۱ آیین دادرسی کیفری را تفتیش بدنی کند؟",
      ar: "هل يحق لموظف الأمن تفتيش الشخص الموقوف وفق المادة § 127 الفقرة 1 StPO؟",
      ru: "Имеет ли право охранник обыскивать задержанного по § 127 ч. 1 УПК StPO?",
      en: "Is a security guard permitted to search a person detained under Section 127 (1) StPO?"
    },
    loesung: {
      fa: "اصولاً خیر، تفتیش وظیفه اختصاصی پلیس است. استثناء: صرفاً برای حفظ جان و ایمنی شخصی نگهبان (جستجوی اشیاء خطرناک، چاقو یا سلاح) در صورتی که ظن عینی و مشخصی وجود داشته باشد.",
      ar: "من حيث المبدأ لا، فالتفتيش من اختصاص الشرطة حصراً. الاستثناء: فقط بغرض التأمين الذاتي وحماية النفس (البحث عن أسلحة أو أدوات خطيرة) عند وجود اشتباه محدد وملموس.",
      ru: "В принципе нет, это обязанность полиции. Исключение: в целях личной безопасности (поиск опасных предметов/оружия) при наличии конкретных обоснованных подозрений.",
      en: "Fundamentally no, that is the task of the police. Exception: Solely for self-protection (searching for weapons or dangerous objects) if concrete suspicion exists."
    }
  },

  // Frage 52 (q-st-7)
  "q-st-7": {
    frage: {
      fa: "تفاوت میان «عامل موجهه جرم / دلیل مشروعیت (Rechtfertigungsgrund)» و «عامل رافع مسئولیت کیفری / عذر معاف‌کننده (Entschuldigungsgrund)» چیست؟",
      ar: "ما هو الفرق بين «سبب الإباحة والتبرير (Rechtfertigungsgrund)» و«عذر الإعفاء من المسؤولية والعقاب (Entschuldigungsgrund)»؟",
      ru: "В чем разница между «основанием оправдания (Rechtfertigungsgrund)» и «основанием извинения / освобождения от вины (Entschuldigungsgrund)»?",
      en: "What is the difference between a justification (Rechtfertigungsgrund) and an excuse (Entschuldigungsgrund)?"
    },
    loesung: {
      fa: "عامل موجهه (مانند دفاع مشروع) عمل را از اساس قانونی و مشروع می‌سازد. عذر معاف‌کننده (مانند تجاوز از حد دفاع مشروع به دلیل وحشت و ترس شدید) عمل را غیرقانونی نگه می‌دارد اما مرتکب فاقد گناه و مسئولیت شناخته شده و مجازات نمی‌شود.",
      ar: "سبب الإباحة والتبرير (مثل الدفاع الشرعي) يجعل الفعل مشروعاً وقانونياً. بينما عذر الإعفاء (مثل تجاوز حدود الدفاع الشرعي بدافع الذعر والخوف الشديد) يبقي الفعل غير مشروع قانوناً، لكن الجاني يُعفى من الذنب ولا يُعاقب.",
      ru: "Основание оправдания (например, необходимая оборона) делает деяние правомерным. Основание извинения (например, превышение пределов обороны из-за сильного страха) оставляет деяние противоправным, но виновный освобождается от вины и наказания.",
      en: "A justification (e.g., self-defense) renders the act lawful. An excuse (e.g., exceeding self-defense due to severe fear) leaves the act unlawful, but the actor acts without culpability and is not punished."
    }
  },

  // Frage 53 (q-st-8)
  "q-st-8": {
    frage: {
      fa: "«اضطرار موجهه / توجیه‌کننده (Rechtfertigender Notstand - § 34 StGB)» چیست؟",
      ar: "ما هي «حالة الضرورة المبررة والمبيحة (Rechtfertigender Notstand - § 34 StGB)»؟",
      ru: "Что такое «Оправдывающая крайняя необходимость (§ 34 StGB)»?",
      en: "What is 'justifying state of necessity (§ 34 StGB)'?"
    },
    loesung: {
      fa: "هرکس در وضعیت خطر جاری و غیرقابل رفع برای جان، جسم، آزادی، آبرو یا مالکیت خود یا دیگری مرتکب عملی شود تا خطر را دفع کند، در صورتی که منفعت و ارزش مصلحت حفاظت‌شده به طور چشمگیری بر مصلحت آسیب‌دیده برتری داشته باشد، اقدام وی غیرقانونی نیست.",
      ar: "من يرتكب فعلاً لدفع خطر حالٍ لا يمكن تجنبه بوسيلة أخرى يهدد الحياة، الجسد، الحرية، الشرف، أو الملكية لنفسه أو للغير، لا يعد فعله غير مشروع إذا كانت المصلحة المحمية تفوق وتزن بشكل جوهري المصلحة المعتدى عليها.",
      ru: "Тот, кто при наличии наличной, неустранимой иначе опасности для жизни, здоровья, свободы, чести или собственности совершает деяние для предотвращения опасности, действует правомерно, если защищаемый интерес существенно преобладает над нарушенным.",
      en: "Whoever commits an act in a present, otherwise unavoidable danger to life, limb, liberty, honor, or property to avert danger from themselves or another acts lawfully if the protected interest substantially outweighs the impaired interest."
    }
  },

  // Frage 54 (q-st-9)
  "q-st-9": {
    frage: {
      fa: "«ایراد ضرب و جرح در حین انجام وظیفه رسمی (§ 340 StGB - Körperverletzung im Amt)» چیست؟ آیا نیروی امنیتی خصوصی می‌تواند مرتکب آن شود؟",
      ar: "ما هي جريمة «الإيذاء الجسدي أثناء ممارسة الوظيفة العامة (§ 340 StGB)»؟ وهل يمكن لحارس الأمن الخاص ارتكابها؟",
      ru: "Что такое «Причинение телесных повреждений при исполнении служебных обязанностей (§ 340 StGB)»? Может ли охранник совершить это преступление?",
      en: "What is 'bodily injury in office / by a public official (§ 340 StGB)'? Can a private security guard commit this offense?"
    },
    loesung: {
      fa: "خیر. این جرم ویژه تنها توسط مأموران و مقامات رسمی دولتی (مانند مأموران پلیس) قابل ارتکاب است. نیروی امنیتی خصوصی در صورت ضرب و جرح بر اساس مواد عمومی ایراد ضرب و جرح ساده یا خطرناک (§ 223, § 224 StGB) مجازات می‌شود.",
      ar: "لا. هذه الجريمة خاصة ولا يمكن أن يرتكبها إلا الموظفون الرسميون وأصحاب السلطة العامة (كالشرطة). أما حارس الأمن الخاص فيُعاقب في حال اعتدائه بتهمة الإيذاء البدني البسيط أو الخطير وفق المواد العامة (§ 223, § 224 StGB).",
      ru: "Нет. Это преступление может быть совершено только должностными лицами (например, полицейскими). Сотрудник службы безопасности наказывается за обычное или опасное причинение вреда здоровью (§ 223, § 224 StGB).",
      en: "No. This offense can only be committed by public officials (e.g., police officers). A private security guard is punished under general provisions for simple or dangerous bodily injury (§ 223, § 224 StGB)."
    }
  },

  // Frage 55 (q-st-10)
  "q-st-10": {
    frage: {
      fa: "تفاوت میان «سرقت ساده (Diebstahl - § 242 StGB)» و «سرقت توأم با زور / راهزنی (Raub - § 249 StGB)» چیست؟",
      ar: "ما هو الفرق بين «السرقة العادية (Diebstahl - § 242 StGB)» و«السرقة بالإكراه والسطو (Raub - § 249 StGB)»؟",
      ru: "В чем различие между «кражей (§ 242 StGB)» и «грабежом / разбоем (§ 249 StGB)»?",
      en: "What distinguishes theft (§ 242 StGB) from robbery (§ 249 StGB)?"
    },
    loesung: {
      fa: "سرقت، ربودن مال منقول متعلق به دیگری به قصد تملک است. سرقت توأم با زور (Raub)، انجام سرقت با به‌کارگیری خشونت و زور فیزیکی علیه شخص یا تهدید با خطر جانی یا بدنی فوری است.",
      ar: "السرقة هي اختلاس وانتزاع مال منقول مملوك للغير بنية التملك. أما السطو والسرقة بالإكراه (Raub) فهو سرقة تقترن باستخدام العنف الجسدي ضد شخص أو التهديد بخطر حالٍ يهدد الحياة أو السلامة الجسدية.",
      ru: "Кража — это тайное или открытое изъятие чужой движимой вещи с целью присвоения. Разбой/грабеж — это кража, совершенная с применением насилия к человеку либо с угрозой применения наличного насилия, опасного для жизни или здоровья.",
      en: "Theft is taking away another's movable property with the intent of unlawful appropriation. Robbery is theft committed by using physical force against a person or using threats of present danger to life or limb."
    }
  },

  // Frage 56 (q-st-11)
  "q-st-11": {
    frage: {
      fa: "«ورود غیرمجاز به حریم خصوصی و ملک محصور (Hausfriedensbruch - § 123 StGB)» چیست؟",
      ar: "ما هي جريمة «انتهاك حرمة المساكن والعقارات المحمية (Hausfriedensbruch - § 123 StGB)»؟",
      ru: "Что такое «Нарушение неприкосновенности жилища / владения (§ 123 StGB)»?",
      en: "What constitutes 'trespassing / breach of the domestic peace (§ 123 StGB)'?"
    },
    loesung: {
      fa: "ورود بدون اجازه و غیرقانونی به منزل، اماکن تجاری، یا املاک محصور و تحت حفاظت دیگری، یا عدم خروج و ماندن در آنجا علیرغم دستور صریح صاحب حق برای ترک مکان.",
      ar: "الدخول غير المصرح به وغير المشروع إلى مسكن أو محل تجاري أو عقار محمي ومسيج للغير، أو البقاء فيه والامتناع عن مغادرته رغم مطالبة صاحب الحق بمغادرة المكان.",
      ru: "Незаконное проникновение в жилище, служебные помещения или на огороженную частную территорию другого лица, либо отказ покинуть помещение вопреки требованию правомочного лица.",
      en: "Unlawfully entering someone's dwelling, business premises, or enclosed property, or lingering there despite being requested by the authorized person to leave."
    }
  },

  // Frage 57 (q-st-12)
  "q-st-12": {
    frage: {
      fa: "«تخریب اموال (Sachbeschädigung - § 303 StGB)» چه زمانی مستوجب مجازات است؟",
      ar: "متى تكون جريمة «إتلاف الممتلكات (Sachbeschädigung - § 303 StGB)» معاقباً عليها قانوناً؟",
      ru: "Когда наказуемо «повреждение чужого имущества (§ 303 StGB)»?",
      en: "When is 'property damage (§ 303 StGB)' punishable?"
    },
    loesung: {
      fa: "هرکس به طور غیرقانونی شیء متعلق به دیگری را تخریب کند، به آن آسیب بزند یا ظاهر آن را بدون اجازه به طور چشمگیر و غیرموقت تغییر دهد (مانند گرافیتی). شروع به این جرم (تلاش برای تخریب) نیز قابل مجازات است.",
      ar: "من يتلف أو يخرب عمداً وبشكل غير مشروع شيئاً مملوكاً للغير. ويشمل ذلك أيضاً التغيير غير المصرح به للمظهر الخارجي (مثل الرسم بالجرافيتي). والشروع في الجريمة معاقب عليه قانوناً.",
      ru: "Каждый, кто противоправно повреждает или уничтожает чужую вещь. Сюда также относится самовольное изменение внешнего вида (например, граффити). Покушение наказуемо.",
      en: "Whoever unlawfully damages or destroys property belonging to another. Unauthorized alteration of the appearance (e.g., graffiti) is also included. The attempt is punishable."
    }
  },

  // Frage 58 (q-st-13)
  "q-st-13": {
    frage: {
      fa: "منظور از «خودداری از کمک‌رسانی (Unterlassene Hilfeleistung - § 323c StGB)» چیست؟",
      ar: "ما المقصود بجريمة «الامتناع عن تقديم المساعدة والإغاثة (§ 323c StGB)»؟",
      ru: "Что понимается под «неоказанием помощи (§ 323c StGB)»?",
      en: "What is understood by 'failure to render assistance (§ 323c StGB)'?"
    },
    loesung: {
      fa: "عدم ارائه کمک در هنگام وقوع حوادث، سوانح، خطر عمومی یا اضطرار، در حالی که کمک‌رسانی لازم بوده و با توجه به شرایط بدون ایجاد خطر جدی برای خود فرد، مقدور و معقول بوده است.",
      ar: "الامتناع عن تقديم المساعدة في حالات الحوادث أو الكوارث أو الخطر العام أو الطوارئ، متى كانت المساعدة ضرورية وممكنة ومتوقعة منه دون تعريض نفسه لخطر جسيم.",
      ru: "Неоказание помощи при несчастных случаях, общей опасности или бедствии, когда помощь была необходима и разумно ожидаема в данных обстоятельствах (в частности, без значительной опасности для себя).",
      en: "Failing to provide assistance in accidents, common danger, or emergencies, even though it was necessary and reasonably expected under the circumstances (particularly without substantial personal risk)."
    }
  },

  // Frage 59 (q-st-14)
  "q-st-14": {
    frage: {
      fa: "«جرم مقید به شکایت شاکی خصوصی (Antragsdelikt)» چیست؟ یک مثال بزنید.",
      ar: "ما هي «الجرائم التي تتطلب شكوى شخصية من المتضرر (Antragsdelikt)»؟ اذكر مثالاً.",
      ru: "Что такое «преступление, преследуемое по жалобе потерпевшего (Antragsdelikt)»? Приведите пример.",
      en: "What is an 'offense prosecuted only upon request (Antragsdelikt)'? Give an example."
    },
    loesung: {
      fa: "جرمی است که تعقیب کیفری آن اصولاً تنها در صورت ثبت شکایت رسمی کیفری توسط فرد متضرر آغاز می‌شود (مانند ورود غیرمجاز ساده به ملک § 123 یا توهین و اهانت § 185 StGB).",
      ar: "جريمة جنائية لا تُلاحق قضائياً كأصل عام إلا إذا تقدم المجني عليه والمتضرر بطلب وشكوى جزائية رسمية (مثل انتهاك حرمة العقار البسيط § 123 أو الإهانة والسب § 185 StGB).",
      ru: "Преступление, уголовное преследование по которому возбуждается в общем порядке только при наличии официального заявления потерпевшего (например, простое нарушение неприкосновенности владения или оскорбление).",
      en: "An offense that is generally prosecuted only if the victim files a formal criminal complaint (e.g., simple trespassing under § 123 or insult under § 185 StGB)."
    }
  },

  // Frage 60 (q-st-15)
  "q-st-15": {
    frage: {
      fa: "تفاوت میان «شراکت در جرم (Mittäterschaft)» و «معاونت در جرم (Beihilfe)» چیست؟",
      ar: "ما هو الفرق بين «المشاركة الأصلية في الجريمة (Mittäterschaft)» و«المعاونة والمساعدة (Beihilfe)»؟",
      ru: "В чем разница между «соисполнительством (Mittäterschaft)» и «пособничеством (Beihilfe)»?",
      en: "What is the difference between co-perpetration (Mittäterschaft) and aiding and abetting (Beihilfe)?"
    },
    loesung: {
      fa: "شرکای جرم (§ 25 Abs. 2 StGB) جرم را با همکاری و به صورت مشترک به اجرا درمی‌آورند. در حالی که معاون جرم (§ 27 StGB) صرفاً با پشتیبانی و تسهیل آگاهانه جرم اصلی دیگری، کمک می‌رساند (مانند دیده‌بانی دادن و زاغ‌سیاه چوب زدن).",
      ar: "الشركاء الأصليون (§ 25 الفقرة 2 StGB) ينفذون الجريمة معاً وبشكل مشترك. بينما المعاون أو المساعد (§ 27 StGB) يقدم مجرد الدعم والتسهيل الواعي للجريمة الرئيسية التي يرتكبها شخص آخر (مثل مراقبة الطريق).",
      ru: "Соисполнители (§ 25 ч. 2 StGB) совершают преступление совместно. Пособник (§ 27 StGB) лишь оказывает содействие, осознанно помогая совершению чужого основного преступления (например, стоит на страже).",
      en: "Co-perpetrators (§ 25 (2) StGB) execute the offense jointly. An accessory / aider (§ 27 StGB) merely provides assistance by deliberately supporting another person's main crime (e.g., acting as a lookout)."
    }
  }
};
