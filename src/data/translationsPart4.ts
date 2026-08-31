/**
 * @file translationsPart4.ts
 * Statische Fachübersetzungen (Block 4: Fragen 91 bis 120 aus initialQuestions.ts)
 * § 34a GewO Sachkundeprüfung.
 * 
 * Kategorien:
 * - 7. Grundsätze der Sicherheitstechnik (Fragen 91 bis 105: q-tech-1 bis q-tech-15)
 * - 8. Datenschutzrecht (Fragen 106 bis 120: q-dat-1 bis q-dat-15)
 * 
 * Sprachen:
 * - Farsi (fa)
 * - Arabisch (ar)
 * - Russisch (ru)
 * - Englisch (en)
 */

import { TranslationBlockItem } from './translationsPart1.ts';

export const TRANSLATIONS_PART_4: Record<string, TranslationBlockItem> = {
  // =========================================================================
  // 7. Grundsätze der Sicherheitstechnik (Fragen 91 bis 105)
  // =========================================================================

  // Frage 91 (q-tech-1)
  "q-tech-1": {
    frage: {
      fa: "سه رکن اصلی مفهوم کلاسیک امنیت را نام ببرید.",
      ar: "اذكر الركائز الثلاث الأساسية للمفهوم الأمني الكلاسيكي.",
      ru: "Назовите три основных элемента классической концепции безопасности.",
      en: "Name the three pillars of the classic security concept."
    },
    loesung: {
      fa: "تجهیزات و فناوری مکانیکی، تجهیزات و فناوری الکترونیکی و اقدامات سازمانی/انسانی.",
      ar: "التقنيات الميكانيكية، والتقنيات الإلكترونية، والإجراءات التنظيمية والبشرية.",
      ru: "Механические средства безопасности, электронные системы и организационные меры.",
      en: "Mechanical security technology, electronic security systems, and organizational measures."
    }
  },

  // Frage 92 (q-tech-2)
  "q-tech-2": {
    frage: {
      fa: "هدف اصلی سیستم‌های امنیتی مکانیکی چیست؟",
      ar: "ما هو الهدف الرئيسي الذي تسعى إليه تكنولوجيا الأمن الميكانيكي في المقام الأول؟",
      ru: "Какова основная цель механических систем безопасности?",
      en: "What is the primary goal of mechanical security technology?"
    },
    loesung: {
      fa: "افزایش زمان نفوذ (Zeitüberwindungswert): دشوار ساختن ورود غیرمجاز و به تأخیر انداختن مجرم تا زمان رسیدن نیروهای واکنش سریع و پلیس.",
      ar: "زيادة زمن اختراق العقبات (Zeitüberwindungswert): تصعيب عملية الاقتحام وتأخير الجاني قدر الإمكان حتى وصول قوات التدخل السريع أو الشرطة.",
      ru: "Увеличение времени преодоления препятствий (Zeitüberwindungswert): затруднить проникновение и задержать злоумышленника до прибытия группы быстрого реагирования.",
      en: "Increasing resistance time (Zeitüberwindungswert): making intrusion difficult and delaying the perpetrator until intervention forces arrive."
    }
  },

  // Frage 93 (q-tech-3)
  "q-tech-3": {
    frage: {
      fa: "سیستم اعلام سرقت (EMA) چیست و چه وظایفی بر عهده دارد؟",
      ar: "ما هو نظام إنذار الاقتحام (EMA) وما هي مهامه؟",
      ru: "Что такое охранная сигнализация (EMA) и каковы ее функции?",
      en: "What is an intruder alarm system (EMA) and what are its tasks?"
    },
    loesung: {
      fa: "سیستم اعلام سرقت و نفوذ: ایجاد بازدارندگی، تشخیص زودهنگام نفوذ و اعلام هشدار و اعزام نیروهای واکنش سریع (پلیس یا مرکز مانیتورینگ).",
      ar: "نظام إنذار الاقتحام والسرقة: الردع، والكشف المبكر عن محاولات التسلل، وإطلاق الإنذار لتنبيه قوات التدخل (الشرطة أو أمن المنشأة).",
      ru: "Охранная сигнализация: отпугивание, раннее обнаружение проникновения и передача тревоги силам реагирования (полиции или охране).",
      en: "Intruder alarm system: deterrence, early detection of intrusions, and alarming intervention forces (police or security service)."
    }
  },

  // Frage 94 (q-tech-4)
  "q-tech-4": {
    frage: {
      fa: "سه نوع از حسگرها و دتکتورهای سیستم اعلام سرقت را نام ببرید.",
      ar: "اذكر ثلاثة أنواع من كواشف نظام إنذار الاقتحام.",
      ru: "Назовите три типа извещателей охранной сигнализации.",
      en: "Name three types of detectors of an intruder alarm system."
    },
    loesung: {
      fa: "سنسورهای حرکتی (مادون قرمز/راداری)، کنتاکت‌های مگنتی (برای درها و پنجره‌ها)، دتکتورهای شکست شیشه، سنسورهای زبانه قفل (Riegelkontakte).",
      ar: "كواشف الحركة (الأشعة تحت الحمراء/الرادار)، الحساسات المغناطيسية (للأبواب والنوافذ)، كواشف كسر الزجاج، حساسات قفل الأبواب.",
      ru: "Датчики движения (инфракрасные/радарные), магнитные контакты (на окна/двери), датчики разбития стекла, ригельные контакты.",
      en: "Motion detectors (infrared/radar), magnetic contacts (for doors/windows), glass break detectors, bolt contacts."
    }
  },

  // Frage 95 (q-tech-5)
  "q-tech-5": {
    frage: {
      fa: "منظور از «سیستم کنترل دسترسی» (ZKA) چیست؟",
      ar: "ما المقصود بـ «نظام التحكم في الدخول» (ZKA)؟",
      ru: "Что понимается под «системой контроля и управления доступом» (СКУД / ZKA)?",
      en: "What is understood by an 'Access Control System' (ZKA)?"
    },
    loesung: {
      fa: "سیستمی که هویت افراد را از طریق مشخصات شناسایی (مانند کارت RFID، رمز PIN، اثر انگشت) بررسی کرده و ورود به بخش‌های مشخص را مجاز یا ممنوع می‌سازد.",
      ar: "نظام يتحقق من هوية الأشخاص عبر سمات معينة (مثل بطاقات RFID، الرمز السري PIN، بصمة الإصبع) ويسمح بالدخول أو يمنعه في مناطق محددة.",
      ru: "Система, проверяющая личность людей по идентификационным признакам (RFID-карты, PIN-коды, отпечатки пальцев) и разрешающая или запрещающая доступ.",
      en: "A system that verifies persons based on credentials (RFID card, PIN, fingerprint) and grants or denies access to defined areas."
    }
  },

  // Frage 96 (q-tech-6)
  "q-tech-6": {
    frage: {
      fa: "تفاوت بین کنتاکت هشدار نفوذ و کنتاکت خرابکاری (Sabotagekontakt) چیست؟",
      ar: "ما الفرق بين حساس الإنذار وحساس التخريب (Sabotagekontakt)؟",
      ru: "В чем разница между контактом тревоги и контактом саботажа?",
      en: "What is the difference between an alarm contact and a sabotage contact?"
    },
    loesung: {
      fa: "کنتاکت هشدار در زمان نفوذ فعال می‌شود (مثلاً باز شدن در). کنتاکت خرابکاری بلافاصله با باز شدن یا دستکاری بدنه حسگر یا کابل‌ها فعال می‌گردد، حتی اگر کل سیستم خاموش باشد.",
      ar: "حساس الإنذار يعمل عند وقوع محاولة اقتحام (فتح الباب مثلاً). أما حساس التخريب فينطلق فوراً عند محاولة فتح غطاء الكاشف أو قطع الأسلاك حتى لو كان النظام غير مفعل.",
      ru: "Контакт тревоги срабатывает при попытке взлома (открытие двери). Контакт саботажа срабатывает немедленно при вскрытии корпуса или повреждении проводов, даже если система снята с охраны.",
      en: "An alarm contact triggers when an intrusion occurs (e.g. door opened). A sabotage contact triggers immediately when someone tampers with housing or cables, even when disarmed."
    }
  },

  // Frage 97 (q-tech-7)
  "q-tech-7": {
    frage: {
      fa: "سیستم اعلام حریق (BMA) چیست و آلارم‌ها را معمولاً به کجا ارسال می‌کند؟",
      ar: "ما المقصود بنظام إنذار الحريق (BMA) وإلى أين يتم توجيه الإنذارات عادة؟",
      ru: "Что такое система пожарной сигнализации (BMA) и куда она передает сигналы тревоги?",
      en: "What is a fire alarm system (BMA) and where does it usually transmit alarms?"
    },
    loesung: {
      fa: "سیستم اعلام حریق: این سیستم وقوع آتش‌سوزی را از طریق دتکتورهای دود، حرارت یا شعله تشخیص داده و پیام را مستقیماً به مرکز کنترل آتش‌نشانی یا اتاق مانیتورینگ هدایت می‌کند.",
      ar: "نظام إنذار الحريق: يرصد الحرائق عبر كواشف الدخان والحرارة واللهب، ويرسل إشارات الإنذار مباشرة إلى غرفة عمليات الإطفاء أو مركز المراقبة المستمر.",
      ru: "Система пожарной сигнализации: распознает возгорания через дымовые, тепловые или пламенные датчики и передает сигнал напрямую в пожарную службу или на пульт охраны.",
      en: "Fire alarm system: detects fire outbreaks (via smoke, heat, or flame detectors) and transmits alarms directly to the fire department or monitoring center."
    }
  },

  // Frage 98 (q-tech-8)
  "q-tech-8": {
    frage: {
      fa: "«آلارم خاموش» (Stiller Alarm) چیست؟",
      ar: "ما هو «الإنذار الصامت» (Stiller Alarm)؟",
      ru: "Что такое «тихая тревога» (Stiller Alarm)?",
      en: "What is a 'Silent Alarm'?"
    },
    loesung: {
      fa: "هشداری که در محل حادثه برای مجرم قابل مشاهده و شنیدن نیست (بدون آژیر و چراغ)، اما بلافاصله به پلیس یا مرکز کنترل ارسال می‌شود (مثلاً در سرقت‌های مسلحانه بانک).",
      ar: "إنذار لا يشعر به الجاني في مسرح الجريمة (بدون صفارات أو أضواء)، ولكنه يُرسل فوراً إلى الشرطة أو مركز الأمن (كما في حالات السطو على البنوك).",
      ru: "Тревога, незаметная для злоумышленника на месте (без сирены и стробоскопа), но мгновенно передаваемая в полицию или охрану (например, при ограблении банка).",
      en: "An alarm that remains unnoticeable to the perpetrator on site (no siren/strobe), but is sent directly to police or security (e.g. bank robberies)."
    }
  },

  // Frage 99 (q-tech-9)
  "q-tech-9": {
    frage: {
      fa: "مخفف «CCTV» به چه معناست؟",
      ar: "ماذا يعني الاختصار «CCTV»؟",
      ru: "Что означает аббревиатура «CCTV»?",
      en: "What does the abbreviation 'CCTV' stand for?"
    },
    loesung: {
      fa: "سیستم نظارت تصویری مداربسته (Closed Circuit Television).",
      ar: "الدائرة التلفزيونية المغلقة (نظام المراقبة بالكاميرات).",
      ru: "Система замкнутого телевизионного вещания (система видеонаблюдения).",
      en: "Closed Circuit Television (video surveillance system)."
    }
  },

  // Frage 100 (q-tech-10)
  "q-tech-10": {
    frage: {
      fa: "در صورت گم شدن کلید در یک مجتمع بزرگ چه اقدام سازمانی ضروری است؟",
      ar: "ما هو الإجراء التنظيمي المهم عند فقدان مفتاح في منشأة كبيرة؟",
      ru: "Какое организационное действие необходимо при утере ключа на крупном объекте?",
      en: "What organizational measure is important when a key is lost in a large facility?"
    },
    loesung: {
      fa: "مسدودسازی فوری کلید الکترونیکی در سیستم مرکزی و در مورد کلیدهای مکانیکی، گزارش سریع به مدیریت جهت تعویض سیلندرهای قفل.",
      ar: "الحظر الفوري للبطاقة/المفتاح في النظام الإلكتروني، أو إبلاغ مدير الموقع فوراً لتبديل أسطوانات الأقفال الميكانيكية.",
      ru: "Немедленная блокировка электронного ключа в системе или доклад начальнику объекта для замены механических личинок замков.",
      en: "Immediate deactivation of electronic key in system, or reporting to facility manager to initiate cylinder lock replacement."
    }
  },

  // Frage 101 (q-tech-11)
  "q-tech-11": {
    frage: {
      fa: "«کلید اعلام خطر اضطراری / پدال سرقت» (Überfallmelder) چیست؟",
      ar: "ما هو «زر إنذار السطو اليدوي» (Überfallmelder)؟",
      ru: "Что такое «кнопка тревожной сигнализации при нападении» (Überfallmelder)?",
      en: "What is a 'Holdup / Panic Alarm' (Überfallmelder)?"
    },
    loesung: {
      fa: "حسگری با تحریک دستی (مانند پدال پایی زیر پیشخوان یا شستی مخفی) که فرد در معرض خطر می‌تواند با فشردن آن بی سر و صدا کمک فوری بطلبد.",
      ar: "زر تشغيل يدوي (مثل دواسة بالقدم تحت الطاولة أو زر يدوي سري) يمكن للموظف المهدد استخدامه لطلب المساعدة فوراً.",
      ru: "Датчик ручного запуска (ножная педаль под стойкой или кнопка), с помощью которого человек под угрозой может вызвать помощь.",
      en: "A manually triggered detector (e.g. foot pedal or under-counter switch) enabling threatened staff to immediately summon help."
    }
  },

  // Frage 102 (q-tech-12)
  "q-tech-12": {
    frage: {
      fa: "چرا منبع تغذیه اضطراری (UPS / USV) برای سیستم‌های امنیتی ضروری است؟",
      ar: "لماذا يُعتبر مزود الطاقة غير المنقطعة (USV) ضرورياً لتقنيات الأمان؟",
      ru: "Почему для систем безопасности необходим источник бесперебойного питания (ИБП / USV)?",
      en: "Why is an Uninterruptible Power Supply (UPS / USV) necessary for security systems?"
    },
    loesung: {
      fa: "تا در صورت قطع برق عمومی یا قطع عمدی کابل‌ها توسط سارقان، سیستم‌های نظارتی و هشدار برای مدت معین (معمولاً ۱۲ تا ۲۴ ساعت) به کار خود ادامه دهند.",
      ar: "لكي تستمر أنظمة الإنذار والمراقبة في العمل عند انقطاع التيار الكهربائي أو تعرض الأسلاك للتخريب المتعمد لفترة محددة (غالباً 12-24 ساعة).",
      ru: "Чтобы системы наблюдения и сигнализации продолжали работать при отключении электроэнергии или саботаже электросети (обычно 12–24 часа).",
      en: "To ensure that monitoring and alarm systems continue to operate during power outages or intentional sabotage for a defined period (usually 12–24 hours)."
    }
  },

  // Frage 103 (q-tech-13)
  "q-tech-13": {
    frage: {
      fa: "اصل «حفاظت از پوسته خارجی» (Außenhautüberwachung) در ساختمان را توضیح دهید.",
      ar: "اشرح مبدأ «مراقبة الغلاف الخارجي للمبنى» (Außenhautüberwachung).",
      ru: "Объясните принцип «охраны внешнего периметра/оболочки здания» (Außenhautüberwachung).",
      en: "Explain the principle of 'Perimeter / Outer Shell Surveillance' (Außenhautüberwachung)."
    },
    loesung: {
      fa: "نظارت بر تمامی ورودی‌ها و روزنه‌های خارجی یک ساختمان که مجرم می‌تواند از طریق آن‌ها نفوذ کند (درها، پنجره‌ها، دریچه‌های سقف، پنجره‌های زیرزمین).",
      ar: "مراقبة كافة الفتحات والمنافذ الخارجية للمبنى التي يمكن للجاني التسلل منها (الأبواب، النوافذ، فتحات السقف، ونوافذ الأقبية).",
      ru: "Охрана всех проемов и конструкций здания, через которые может проникнуть нарушитель (двери, окна, люки на крыше, окна подвалов).",
      en: "Surveillance of all external openings through which an intruder could enter a building (doors, windows, skylights, basement windows)."
    }
  },

  // Frage 104 (q-tech-14)
  "q-tech-14": {
    frage: {
      fa: "دتکتور دود خطی (نوری) چیست و در کجا کاربرد دارد؟",
      ar: "ما هو كاشف الدخان الخطي البصري وأين يُستخدم؟",
      ru: "Что такое линейный оптический дымовой извещатель и где он применяется?",
      en: "What is a linear optical beam smoke detector and where is it used?"
    },
    loesung: {
      fa: "دتکتور حریقی که بر اساس ارسال پرتو نور کار می‌کند. با عبور دود و تضعیف پرتو نوری آلارم فعال می‌شود. برای سالن‌های مرتفع، انبارها و فضاهای بزرگ ایده‌آل است.",
      ar: "كاشف حريق يعمل بشعاع ضوئي؛ عند اعتراض الدخان للشعاع أو خفوته ينطلق الإنذار، وهو مثالي للقاعات والهنغارات ذات الأسقف العالية.",
      ru: "Пожарный датчик с лучом света. При ослаблении луча из-за дыма срабатывает тревога. Идеален для высоких залов и складов.",
      en: "A fire detector using a light beam. If smoke interrupts or attenuates the beam, an alarm triggers. Ideal for high-ceiling halls."
    }
  },

  // Frage 105 (q-tech-15)
  "q-tech-15": {
    frage: {
      fa: "منظور از اصل «انطباق اجباری / قطعیت» (Zwangsläufigkeit) در سیستم‌های دزدگیر چیست؟",
      ar: "ما المقصود بمبدأ «الترابط الإجباري الحتمي» (Zwangsläufigkeit) في نظام إنذار السرقة؟",
      ru: "Что означает принцип «принудительности/неизбежности» (Zwangsläufigkeit) в охранной сигнализации?",
      en: "What is understood by 'inevitability/interlocking' (Zwangsläufigkeit) in an intruder alarm system?"
    },
    loesung: {
      fa: "سیستم دزدگیر فقط زمانی فعال و مسلح (Scharf) می‌شود که تمام پنجره‌ها و درهای تحت پوشش کاملاً بسته و قفل باشند؛ این امر از آلارم کاذب جلوگیری می‌کند.",
      ar: "المبدأ الذي يمنع تفعيل النظام وتشغيله إلا بعد التأكد من إغلاق كافة الأبواب والنوافذ المراقبة بإحكام لتفادي الإنذارات الكاذبة.",
      ru: "Принцип, по которому система ставится на охрану только тогда, когда все окна и двери закрыты, что исключает ложные тревоги.",
      en: "The principle that an alarm system can only be armed once all monitored windows and doors are firmly shut, preventing accidental false alarms."
    }
  },

  // =========================================================================
  // 8. Datenschutzrecht (Fragen 106 bis 120)
  // =========================================================================

  // Frage 106 (q-dat-1)
  "q-dat-1": {
    frage: {
      fa: "قانون اصلی حاکم بر حفاظت از داده‌ها در آلمان کدام است؟",
      ar: "ما هو القانون الرئيسي الذي يشكل أساس حماية البيانات في ألمانيا؟",
      ru: "Какой закон является основной правовой базой защиты данных в Германии?",
      en: "Which law forms the main legal basis for data protection in Germany?"
    },
    loesung: {
      fa: "مقررات عمومی حفاظت از داده‌های اتحادیه اروپا (DSGVO / GDPR) و قانون فدرال حفاظت از داده‌ها (BDSG).",
      ar: "اللائحة العامة لحماية البيانات للاتحاد الأوروبي (DSGVO) والقانون الاتحادي لحماية البيانات (BDSG).",
      ru: "Общий регламент по защите данных ЕС (DSGVO/GDPR) и Федеральный закон о защите данных Германии (BDSG).",
      en: "The General Data Protection Regulation (GDPR / DSGVO) of the EU and the Federal Data Protection Act (BDSG)."
    }
  },

  // Frage 107 (q-dat-2)
  "q-dat-2": {
    frage: {
      fa: "«داده‌های شخصی» (Personenbezogene Daten) چه هستند؟",
      ar: "ما هي «البيانات الشخصية» (Personenbezogene Daten)؟",
      ru: "Что такое «персональные данные» (Personenbezogene Daten)?",
      en: "What are 'personal data' (Personenbezogene Daten)?"
    },
    loesung: {
      fa: "هرگونه اطلاعات مربوط به یک شخص حقیقی شناسایی‌شده یا قابل شناسایی (مانند نام، آدرس، شماره تلفن، پلاک خودرو، آدرس IP و تصاویر ویدیویی افراد).",
      ar: "كافة المعلومات المتعلقة بشخص طبيعي محدد أو يمكن تحديده (مثل الاسم، العنوان، رقم الهاتف، لوحة السيارة، عنوان IP، وتصوير الفيديو).",
      ru: "Любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу (имя, адрес, телефон, номер авто, IP, видеозаписи).",
      en: "Any information relating to an identified or identifiable natural person (e.g. name, address, phone number, license plate, IP address, video footage)."
    }
  },

  // Frage 108 (q-dat-3)
  "q-dat-3": {
    frage: {
      fa: "پردازش داده‌های شخصی چه زمانی مجاز و قانونی است؟",
      ar: "متى يُسمح قانوناً بمعالجة البيانات الشخصية؟",
      ru: "Когда обработка персональных данных является законной?",
      en: "When is the processing of personal data legally permitted?"
    },
    loesung: {
      fa: "تنها زمانی که مجوز قانونی وجود داشته باشد (مانند اجرای قرارداد یا الزام قانونی) یا رضایت صریح و آگاهانه فرد اخذ شده باشد (اصل ممنوعیت با حق استثنا).",
      ar: "فقط عند وجود مسوغ قانوني (مثل تنفيذ عقد أو التزام قانوني) أو بموافقة صريحة من صاحب البيانات (مبدأ الحظر ما لم يوجد إذن).",
      ru: "Только при наличии законного основания (напр. исполнение договора, правовая обязанность) или прямого согласия лица (запрет с оговоркой разрешения).",
      en: "Only when a legal basis exists (e.g. contract fulfillment, legal duty) or the data subject has given explicit consent."
    }
  },

  // Frage 109 (q-dat-4)
  "q-dat-4": {
    frage: {
      fa: "نیروی امنیتی در خصوص سیستم نظارت تصویری به چه نکاتی باید توجه داشته باشد؟",
      ar: "ما الذي يجب على رجل الأمن مراعاته عند تشغيل نظام المراقبة بالفيديو؟",
      ru: "Что должен соблюдать охранник при видеонаблюдении?",
      en: "What must a security officer observe regarding video surveillance?"
    },
    loesung: {
      fa: "نظارت باید قانونی (منافع مشروع کارفرما) و ضروری باشد و باید با تابلوهای راهنمای کاملاً خوانا (شامل مشخصات مسئول و مسئول حفاظت داده‌ها) اطلاع‌رسانی شود.",
      ar: "يجب أن تكون المراقبة قانونية (مصلحة مشروعة)، وضرورية، ومُعلنة بوضوح عبر لوحات إرشادية تتضمن بيانات المسؤول ومسؤول حماية البيانات.",
      ru: "Видеонаблюдение должно быть законным (законный интерес), необходимым и обозначенным четкими табличками с контактами ответственного лица.",
      en: "It must be lawful (legitimate interest), necessary, and clearly indicated by visible signs including controller and DPO contact details."
    }
  },

  // Frage 110 (q-dat-5)
  "q-dat-5": {
    frage: {
      fa: "آیا نیروی حراست اجازه دارد تصاویر دوربین مداربسته را با گوشی موبایل شخصی ضبط یا فیلم‌برداری کند؟",
      ar: "هل يحق لرجل الأمن تصوير شاشات المراقبة بهاتفه الذكي الشخصي؟",
      ru: "Имеет ли право охранник снимать видео с мониторов наблюдения на личный смартфон?",
      en: "Is a security guard allowed to record surveillance camera footage with a private smartphone?"
    },
    loesung: {
      fa: "خیر، این اقدام نقض شدید قانون حفاظت از داده‌ها و قرارداد کاری بوده و پیامدهای انضباطی (اخراج فوری) و کیفری در پی دارد.",
      ar: "كلا، هذا انتهاك جسيم للائحة حماية البيانات وعقد العمل، ويترتب عليه عواقب جنائية وإنهاء فوري للخدمة.",
      ru: "Нет, это грубейшее нарушение DSGVO и трудового договора, влекущее уголовную ответственность и немедленное увольнение.",
      en: "No, this is a serious breach of GDPR and employment contract, resulting in criminal and labor consequences (termination)."
    }
  },

  // Frage 111 (q-dat-6)
  "q-dat-6": {
    frage: {
      fa: "چه کسی در یک شرکت امنیتی مسئول رعایت قوانین حفاظت از داده‌ها است؟",
      ar: "من المسؤول عن حماية البيانات في شركة الأمن؟",
      ru: "Кто несет ответственность за защиту данных в охранном предприятии?",
      en: "Who is responsible for data protection in a security company?"
    },
    loesung: {
      fa: "مدیرعامل شرکت. در صورت اشتغال حداقل ۲۰ نفر در پردازش خودکار داده‌ها، تعیین یک مسئول حفاظت از داده‌ها (Datenschutzbeauftragter) الزامی است.",
      ar: "المدير التنفيذي والممثل القانوني. وبدءاً من 20 موظفاً يتعاملون مع معالجة البيانات، يجب تعيين مسؤول رسمي لحماية البيانات.",
      ru: "Руководство компании. При штате от 20 сотрудников, занятых обработкой данных, обязательно назначается уполномоченный по защите данных.",
      en: "The company management. From 20+ employees involved in automated data processing, a Data Protection Officer must be appointed."
    }
  },

  // Frage 112 (q-dat-7)
  "q-dat-7": {
    frage: {
      fa: "منظور از «محرمانگی داده‌ها» (Datengeheimnis) چیست؟",
      ar: "ما المقصود بمبدأ «سرية البيانات» (Datengeheimnis)؟",
      ru: "Что понимается под «тайной персональных данных» (Datengeheimnis)?",
      en: "What is meant by 'data confidentiality' (Datengeheimnis)?"
    },
    loesung: {
      fa: "تعهد کارکنان به حفظ محرمانگی کلیه داده‌های شخصی که در حین کار از آن‌ها آگاه می‌شوند و عدم افشای آن‌ها، که حتی پس از پایان قرارداد کاری نیز باقی می‌ماند.",
      ar: "واجب الموظفين بالحفاظ على سرية البيانات الشخصية التي يطلعون عليها أثناء عملهم وعدم إفشائها، ويستمر هذا الواجب حتى بعد انتهاء عقد العمل.",
      ru: "Обязанность сотрудников сохранять в тайне персональные данные, ставшие известными по работе, которая сохраняется и после увольнения.",
      en: "The obligation of employees to keep personal data acquired during work confidential, which continues even after termination of employment."
    }
  },

  // Frage 113 (q-dat-8)
  "q-dat-8": {
    frage: {
      fa: "یک پلیس با لباس شخصی بدون حکم کتبی خواستار رویت دفتر ثبت مراجعین می‌شود. واکنش صحیح چیست؟",
      ar: "جاء ضابط شرطة بملابس مدنية وطلب الاطلاع على سجل الزوار دون أمر قضائي أو إذن رسمي. كيف تتصرف؟",
      ru: "Полицейский в штатском требует журнал посетителей без письменного предписания. Ваши действия?",
      en: "A plainclothes police officer demands access to the visitor log without a warrant. How do you respond?"
    },
    loesung: {
      fa: "محترمانه او را به مدیر شیفت یا مسئول حفاظت از داده‌ها ارجاع دهید. بدون مبنای قانونی شفاف یا خطر فوری (Gefahr im Verzug)، ارائه داده‌ها مجاز نیست.",
      ar: "قم بإحالته بلباقة إلى قائد المناوبة أو مسؤول حماية البيانات؛ فلا يجوز تسليم البيانات دون مسوغ قانوني واضح أو خطر داهم مبرر.",
      ru: "Вежливо направьте его к руководству или уполномоченному по защите данных. Без правового основания или неотложной угрозы выдавать данные запрещено.",
      en: "Politely refer the officer to site management or the DPO. Without legal basis (imminent danger / warrant), data cannot simply be handed over."
    }
  },

  // Frage 114 (q-dat-9)
  "q-dat-9": {
    frage: {
      fa: "منظور از اصل «به حداقل رساندن داده‌ها» (Datenminimierung) چیست؟",
      ar: "ما المقصود بمبدأ «تقليل البيانات والحد الأدنى» (Datenminimierung)؟",
      ru: "Что понимается под принципом «минимизации данных» (Datenminimierung)?",
      en: "What is meant by the principle of 'data minimization' (Datenminimierung)?"
    },
    loesung: {
      fa: "تنها داده‌هایی باید جمع‌آوری و ذخیره شوند که برای هدف مشخص کاملاً ضروری هستند (مثلاً در دفتر مراجعین فقط نام و شرکت، نه تاریخ تولد).",
      ar: "جمع وحفظ القدر الضروري فقط من البيانات لتحقيق الهدف المحدد (مثل تسجيل الاسم والشركة في دفتر الزوار دون طلب تاريخ الميلاد).",
      ru: "Сбор и хранение только того объема данных, который строго необходим для цели (в журнале: имя и фирма, но не дата рождения).",
      en: "Only collecting and storing as much personal data as strictly necessary for the purpose (e.g. name and company in visitor log, not date of birth)."
    }
  },

  // Frage 115 (q-dat-10)
  "q-dat-10": {
    frage: {
      fa: "تصاویر دوربین‌های مداربسته معمولاً تا چه مدت مجاز به ذخیره‌سازی هستند؟",
      ar: "ما هي المدة المسموح بها عادة لحفظ تسجيلات كاميرات المراقبة؟",
      ru: "В течение какого времени обычно разрешено хранить видеозаписи камер наблюдения?",
      en: "How long may CCTV video recordings typically be stored?"
    },
    loesung: {
      fa: "تنها تا زمانی که برای هدف لازم است؛ معمولاً بین ۴۸ تا حداکثر ۷۲ ساعت، و پس از آن باید به صورت خودکار پاک یا بازنویسی شوند.",
      ar: "فقط طالما كان ذلك ضرورياً لتحقيق الهدف؛ وعادة ما تكون المدة بين 48 إلى 72 ساعة كحد أقصى يتم بعدها الحذف تلقائياً.",
      ru: "Только до тех пор, пока это необходимо для цели: обычно от 48 до максимум 72 часов, затем они автоматически перезаписываются.",
      en: "Only as long as necessary for the purpose; typically 48 to a maximum of 72 hours, after which they must be overwritten/deleted."
    }
  },

  // Frage 116 (q-dat-11)
  "q-dat-11": {
    frage: {
      fa: "سه مورد از حقوق اشخاص طبق قانون حفاظت از داده‌ها (DSGVO) را نام ببرید.",
      ar: "اذكر ثلاثة حقوق للأشخاص بموجب لائحة حماية البيانات (DSGVO).",
      ru: "Назовите три права субъектов данных по DSGVO.",
      en: "Name three rights of data subjects under GDPR (DSGVO)."
    },
    loesung: {
      fa: "حق دسترسی و اطلاع (Auskunft)، حق تصحیح اطلاعات، حق حذف اطلاعات («حق فراموش شدن») و حق محدود کردن پردازش.",
      ar: "حق الحصول على المعلومات، وحق التصحيح، وحق الحذف («الحق في النسيان»)، وحق تقييد المعالجة.",
      ru: "Право на получение информации, право на исправление, право на удаление («право на забвение») и ограничение обработки.",
      en: "Right of access, right to rectification, right to erasure ('right to be forgotten'), and right to restriction of processing."
    }
  },

  // Frage 117 (q-dat-12)
  "q-dat-12": {
    frage: {
      fa: "دفاتر ثبت مراجعین یا دفاتر وقایع روزانه کجا باید نگهداری شوند؟",
      ar: "أين يجب حفظ دفاتر الزوار وسجلات الحراسة اليومية المكتملة؟",
      ru: "Где должны храниться заполненные журналы посетителей и книги дежурств?",
      en: "Where must completed visitor logs or guard shift books be stored?"
    },
    loesung: {
      fa: "در محلی قفل‌شده و دور از دید اشخاص متفرقه (مانند کمد قفل‌دار یا فایل دارای رمز عبور). نباید آزادانه روی پیشخوان قرار گیرند.",
      ar: "في مكان مغلق ومحمي من أنظار المتطفلين (مثل خزانة مقفلة أو ملف محمي بكلمة سر) وتجنب تركها مكشوفة على الكاونتر.",
      ru: "В запертом месте, защищенном от посторонних глаз (запираемый шкаф, файл с паролем); запрещено оставлять их открытыми на стойке.",
      en: "Locked away and protected from unauthorized view (e.g. in a locked cabinet or password-protected file), never open on the counter."
    }
  },

  // Frage 118 (q-dat-13)
  "q-dat-13": {
    frage: {
      fa: "«ارزیابی اثرات حفاظت از داده‌ها» (DSFA) چیست؟",
      ar: "ما هو «تقييم أثر حماية البيانات» (DSFA)؟",
      ru: "Что такое «оценка воздействия на защиту данных» (DSFA / DPIA)?",
      en: "What is a 'Data Protection Impact Assessment' (DSFA / DPIA)?"
    },
    loesung: {
      fa: "بررسی نظام‌مند خطرات یک فرآیند پردازش داده (مانند استفاده گسترده از دوربین‌های هوشمند تشخیص چهره) برای حقوق و آزادی‌های افراد.",
      ar: "تقييم منهجي للمخاطر التي قد تنجم عن معالجة جديدة للبيانات (مثل استخدام كاميرات ذكية للتعرف على الوجوه) على حقوق وحريات الأفراد.",
      ru: "Систематическая оценка рисков планируемой обработки данных (напр., видеонаблюдение с распознаванием лиц) для прав и свобод граждан.",
      en: "A systematic assessment of risks of planned data processing (e.g. intelligent CCTV with facial recognition) to individual rights and freedoms."
    }
  },

  // Frage 119 (q-dat-14)
  "q-dat-14": {
    frage: {
      fa: "پیامدهای نقض قوانین حفاظت از داده‌ها (DSGVO) چیست؟",
      ar: "ما هي عواقب مخالفة أحكام لائحة حماية البيانات (DSGVO)؟",
      ru: "Каковы последствия нарушений Общего регламента по защите данных (DSGVO)?",
      en: "What are the consequences of GDPR (DSGVO) violations?"
    },
    loesung: {
      fa: "جریمه‌های مالی سنگین از سوی مراجع نظارتی (تا ۲۰ میلیون یورو یا ۴٪ از کل فروش جهانی شرکت) و پرداخت خسارت به افراد متضرر.",
      ar: "غرامات مالية باهظة من السلطات الرقابية (تصل إلى 20 مليون يورو أو 4% من إجمالي الإيراد السنوي العالمي) والتعويض عن الأضرار.",
      ru: "Огромные штрафы со стороны надзорных органов (до 20 млн евро или 4% от мирового оборота) и иски о возмещении ущерба.",
      en: "Heavy fines by supervisory authorities (up to 20 million EUR or 4% of worldwide annual turnover) and claims for damages."
    }
  },

  // Frage 120 (q-dat-15)
  "q-dat-15": {
    frage: {
      fa: "آیا یادداشت‌های دست‌نویس در دفتر نگهبانی نیز مشمول قانون حفاظت از داده‌ها هستند؟",
      ar: "هل تنطبق لائحة حماية البيانات على الملاحظات المكتوبة بخط اليد في سجل الحراسة؟",
      ru: "Распространяется ли DSGVO на рукописные записи в журнале дежурств?",
      en: "Does GDPR apply to handwritten notes made in the guard logbook?"
    },
    loesung: {
      fa: "بله، به محض اینکه یادداشت‌های دست‌نویس به صورت ساختاریافته (مثلاً طبق تاریخ/ساعت) ثبت شوند و حاوی اطلاعات شخصی باشند، مشمول قانون هستند.",
      ar: "نعم، بمجرد تنظيم الملاحظات اليدوية بشكل منهجي (حسب التاريخ والوقت) واحتوائها على بيانات شخصية، تخضع لأحكام القانون.",
      ru: "Да. Как только рукописные заметки систематизируются (по дате/времени) и содержат персональные данные, они подпадают под действие DSGVO.",
      en: "Yes. As soon as handwritten notes are structured systematically (e.g. by date/time) and contain personal data, GDPR applies."
    }
  }
};
