import { makeQuestion } from './questionHelper.js';

export const initialWrittenQuestionsData = [
  // 1. Recht der öffentlichen Sicherheit und Ordnung (wq-oeff-1 .. wq-oeff-3)
  makeQuestion({
    id: "wq-oeff-1",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was umfasst der Begriff 'Öffentliche Sicherheit' im deutschen Recht?",
    optionsData: [
      {
        text: "A) Ausschließlich den Schutz der staatlichen Einrichtungen und Gebäude.",
        ru: "Исключительно защиту государственных учреждений и зданий.",
        en: "Exclusively the protection of state institutions and buildings.",
        ar: "فقط حماية مرافق الدولة ومبانيها.",
        fa: "صرفاً حفاظت از تأسیسات و ساختمان‌های دولتی."
      },
      {
        text: "B) Den Schutz der Rechtsordnung, der Individualrechtsgüter (Leben, Gesundheit, Freiheit, Eigentum) und der staatlichen Einrichtungen.",
        ru: "Защиту правопорядка, индивидуальных прав (жизнь, здоровье, свобода, собственность) и госучреждений.",
        en: "The protection of the legal order, individual rights (life, health, freedom, property), and state institutions.",
        ar: "حماية النظام القانوني، وحقوق الأفراد (الحياة، الصحة، الحرية، الملكية) ومؤسسات الدولة.",
        fa: "حفاظت از نظم حقوقی، حقوق فردی (جان، سلامت، آزادی، مالکیت) و نهادهای دولتی."
      },
      {
        text: "C) Nur die ungeschriebenen Regeln für das Verhalten in der Öffentlichkeit (Sitte und Moral).",
        ru: "Только неписаные правила поведения в обществе (обычаи и мораль).",
        en: "Only the unwritten rules for behavior in public (customs and morals).",
        ar: "فقط القواعد غير المكتوبة للسلوك في الأماكن العامة (العرف والأخلاق).",
        fa: "تنها قواعد نانوشته رفتار در اماکن عمومی (عرف و اخلاق)."
      },
      {
        text: "D) Die Wahrung der wirtschaftlichen Interessen privater Unternehmen.",
        ru: "Защиту экономических интересов частных компаний.",
        en: "The safeguarding of economic interests of private companies.",
        ar: "حماية المصالح الاقتصادية للشركات الخاصة.",
        fa: "حفظ منافع اقتصادی شرکت‌های خصوصی."
      }
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: "Erklärung: Die öffentliche Sicherheit umfasst drei Schutzgüter: die geschriebene Rechtsordnung, Individualrechtsgüter und den Staat mit seinen Einrichtungen.",
    translations: {
      ru: {
        question: "Что включает в себя понятие «общественная безопасность» в праве Германии?",
        explanation: "Общественная безопасность включает три объекта защиты: писаный правопорядок, индивидуальные правовые блага и государство с его институтами."
      },
      en: {
        question: "What does the term 'Public Safety' encompass in German law?",
        explanation: "Public safety comprises three protected interests: the written legal order, individual legal rights, and the state with its institutions."
      },
      ar: {
        question: "ماذا يشمل مصطلح «الأمن العام» في القانون الألماني؟",
        explanation: "يشمل الأمن العام ثلاثة مجالات حماية: النظام القانوني المكتوب، وحقوق الأفراد، والدولة ومؤسساتها."
      },
      fa: {
        question: "مفهوم «امنیت عمومی» در حقوق آلمان شامل چه مواردی است؟",
        explanation: "امنیت عمومی شامل سه حوزه حفاظتی است: نظم حقوقی مدون، حقوق فردی و دولت به همراه نهادهایش."
      }
    }
  }),

  makeQuestion({
    id: "wq-oeff-2",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Welche der folgenden Befugnisse stehen einer privaten Sicherheitskraft im öffentlichen Raum zur Verfügung?",
    optionsData: [
      {
        text: "A) Das Aussprechen eines polizeilichen Platzverweises.",
        ru: "Вынесение полицейского предписания покинуть территорию (Platzverweis).",
        en: "Issuing a police ban/expulsion from a public place (Platzverweis).",
        ar: "إصدار أمر إبعاد شرطي (Platzverweis).",
        fa: "صدور دستور اخراج پلیسی از محل (Platzverweis)."
      },
      {
        text: "B) Die vorläufige Festnahme nach § 127 Abs. 1 StPO bei frischer Tat.",
        ru: "Временное задержание по § 127 абз. 1 УПК при совершении преступления на месте.",
        en: "Provisional citizen's arrest under § 127 (1) StPO when caught in the act.",
        ar: "التوقيف المؤقت وفقاً للفقرة 127 بند 1 من قانون الإجراءات الجنائية (StPO) عند التلبس بالجرم.",
        fa: "بازداشت موقت طبق ماده ۱۲۷ بند ۱ آیین دادرسی کیفری هنگام مشاهده جرم در حین ارتکاب."
      },
      {
        text: "C) Die Durchsuchung einer Person zur Feststellung der Identität.",
        ru: "Обыск лица для установления личности.",
        en: "Searching a person to establish their identity.",
        ar: "تفتيش الشخص لتحديد هويته.",
        fa: "بازرسی بدنی فرد برای احراز هویت."
      },
      {
        text: "D) Die Notwehr nach § 32 StGB bei einem gegenwärtigen rechtswidrigen Angriff.",
        ru: "Необходимая оборона по § 32 УК при наличном противоправном нападении.",
        en: "Self-defense under § 32 StGB against an imminent unlawful attack.",
        ar: "الدفاع الشرعي وفقاً للفقرة 32 من قانون العقوبات (StGB) عند وقوع اعتداء حال وغير قانوني.",
        fa: "دفاع مشروع طبق ماده ۳۲ قانون مجازات در برابر حمله غیرقانونی فعلی."
      }
    ],
    korrekteAntworten: [1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Private Sicherheitskräfte besitzen im öffentlichen Raum nur die Jedermannsrechte wie § 127 Abs. 1 StPO (Festnahme) und § 32 StGB (Notwehr). Polizeiliche Zwangsmittel stehen ihnen nicht zu.",
    translations: {
      ru: {
        question: "Какие из следующих полномочий доступны частному охраннику в общественном пространстве?",
        explanation: "В общественных местах охранники обладают только общегражданскими правами (§ 127 УПК, § 32 УК). Полицейские полномочия им не принадлежат."
      },
      en: {
        question: "Which of the following powers are available to a private security guard in public spaces?",
        explanation: "Private security guards only have citizen's rights in public spaces, such as § 127 (1) StPO (arrest) and § 32 StGB (self-defense). They do not possess sovereign police powers."
      },
      ar: {
        question: "أي من الصلاحيات التالية متاحة لعنصر الأمن الخاص في الأماكن العامة؟",
        explanation: "يمتلك عناصر الأمن الخاص في الأماكن العامة حقوق الكافة فقط مثل المادة 127 StPO (التوقيف) والمادة 32 StGB (الدفاع الشرعي)، ولا يملكون صلاحيات الشرطة السيادية."
      },
      fa: {
        question: "کدام یک از اختیارات زیر در اماکن عمومی در دسترس نیروی امنیتی خصوصی است؟",
        explanation: "نیروهای امنیتی در اماکن عمومی فقط از حقوق عامه شهروندی مانند ماده ۱۲۷ آیین دادرسی (بازداشت) و ماده ۳۲ قانون مجازات (دفاع مشروع) برخوردارند و اختیارات حاکمیتی پلیس را ندارند."
      }
    }
  }),

  makeQuestion({
    id: "wq-oeff-3",
    kategorie: "Recht der öffentlichen Sicherheit und Ordnung",
    frage: "Was bedeutet das staatliche Gewaltmonopol für private Sicherheitsdienste?",
    optionsData: [
      {
        text: "A) Sicherheitskräfte dürfen physische Gewalt nur im Rahmen gesetzlicher Notrechte (z.B. Notwehr, Selbsthilfe) anwenden.",
        ru: "Охранники могут применять физическую силу только в рамках законных прав на крайнюю необходимость (например, необходимая оборона, самопомощь).",
        en: "Security guards may only use physical force within the framework of legal emergency rights (e.g., self-defense, self-help).",
        ar: "يجوز لأفراد الأمن استخدام القوة البدنية فقط في إطار حقوق الطوارئ القانونية (مثل الدفاع الشرعي والمساعدة الذاتية).",
        fa: "نیروهای امنیتی تنها در چارچوب حقوق اضطراری قانونی (مانند دفاع مشروع، احقاق حق شخصی) مجاز به استفاده از نیروی فیزیکی هستند."
      },
      {
        text: "B) Sicherheitskräfte übernehmen hoheitliche Aufgaben und handeln wie die Polizei.",
        ru: "Охранники берут на себя суверенные задачи и действуют как полиция.",
        en: "Security guards assume sovereign tasks and act like the police.",
        ar: "يتولى أفراد الأمن مهام سيادية ويتصرفون كالشرطة تماماً.",
        fa: "نیروهای امنیتی وظایف حاکمیتی را بر عهده می‌گیرند و مانند پلیس عمل می‌کنند."
      },
      {
        text: "C) Staatliche Stellen dürfen private Sicherheitsdienste nicht kontrollieren.",
        ru: "Государственные органы не имеют права проверять частные охранные службы.",
        en: "State agencies may not inspect or control private security services.",
        ar: "لا يحق للجهات الحكومية التفتيش على شركات الأمن الخاصة.",
        fa: "مراجع دولتی اجازه نظارت و بازرسی بر شرکت‌های امنیتی خصوصی را ندارند."
      },
      {
        text: "D) Das Gewaltmonopol gilt nur für die Feuerwehr und das Rettungswesen.",
        ru: "Монополия на насилие распространяется только на пожарную службу и спасателей.",
        en: "The monopoly on force applies only to the fire department and rescue services.",
        ar: "احتكار القوة ينطبق فقط على الإطفاء وخدمات الإسعاف.",
        fa: "انحصار قوه قهریه فقط برای آتش‌نشانی و اورژانس اعمال می‌شود."
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Das Gewaltmonopol liegt beim Staat. Private dürfen Gewalt nur ausnahmsweise im Rahmen von Notrechten (z. B. Notwehr/Besitzwehr) einsetzen.",
    translations: {
      ru: {
        question: "Что означает государственная монополия на применение силы для частных охранных служб?",
        explanation: "Монополия на силу принадлежит государству. Частные лица могут применять силу только в порядке исключения в рамках прав на крайнюю необходимость (самооборона, защита владения)."
      },
      en: {
        question: "What does the state monopoly on the use of force mean for private security services?",
        explanation: "The monopoly on force lies with the state. Private individuals may use force only exceptionally within emergency rights (e.g. self-defense/defense of possession)."
      },
      ar: {
        question: "ماذا يعني احتكار الدولة للقوة بالنسبة لخدمات الأمن الخاصة؟",
        explanation: "احتكار القوة محصور بالدولة. ولا يجوز للأفراد استخدام القوة إلا استثناءً في إطار حقوق الطوارئ (مثل الدفاع الشرعي وحماية الحيازة)."
      },
      fa: {
        question: "انحصار دولتی قوه قهریه چه معنایی برای خدمات امنیتی خصوصی دارد؟",
        explanation: "انحصار استفاده از زور متعلق به دولت است. افراد خصوصی فقط به عنوان استثنا در چارچوب حقوق اضطراری (مانند دفاع مشروع و دفاع از تصرف) مجاز به کاربرد زور هستند."
      }
    }
  }),

  // 2. Gewerberecht (GewO / BewachV) (wq-gew-1 .. wq-gew-3)
  makeQuestion({
    id: "wq-gew-1",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Für welche der folgenden Tätigkeiten ist das Bestehen der Sachkundeprüfung nach § 34a GewO gesetzlich zwingend vorgeschrieben?",
    optionsData: [
      {
        text: "A) Einlasskontrollen im Türsteherbereich von Diskotheken.",
        ru: "Контроль на входе в качестве вышибалы (Türsteher) в дискотеках.",
        en: "Bouncer access control at discotheques / nightclubs.",
        ar: "مراقبة الدخول والحراسة عند أبواب النوادي الليلية (Türsteher).",
        fa: "کنترل ورود و خروج به عنوان دربان در دیسکوها و کلوپ‌های شبانه."
      },
      {
        text: "B) Kontrollgänge im öffentlichen Verkehrsraum (z. B. Citystreifen).",
        ru: "Патрулирование в общественном пространстве (например, городские патрули Citystreifen).",
        en: "Patrols in public traffic spaces (e.g. city patrols).",
        ar: "الدوريات التفتيشية في الأماكن العامة المفتوحة (دوريات المدينة Citystreifen).",
        fa: "گشت‌زنی در اماکن عمومی شهری (مانند گشت‌های شهری Citystreifen)."
      },
      {
        text: "C) Einfacher Pfortendienst in einem normalen Verwaltungsgebäude ohne Publikumsverkehr.",
        ru: "Простая вахтенная служба в обычном административном здании без посетителей.",
        en: "Simple gate/reception service in a standard office building with no public access.",
        ar: "خدمة البوابة العادية في مبنى إداري عادي بدون استقبال جمهور.",
        fa: "خدمات ساده دربانی و پذیرش در یک ساختمان اداری معمولی بدون رفت‌وآمد عمومی."
      },
      {
        text: "D) Schutz vor Ladendieben (Kaufhausdetektive).",
        ru: "Защита от магазинных воров (детективы в универмагах Kaufhausdetektive).",
        en: "Protection against shoplifters (department store detectives).",
        ar: "الحماية من لصوص المتاجر (محققي المتاجر Kaufhausdetektive).",
        fa: "محافظت در برابر سارقان فروشگاه‌ها (کارآگاهان فروشگاهی Kaufhausdetektive)."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Laut § 34a Abs. 1a GewO ist die Sachkundeprüfung zwingend für Citystreifen, Türsteher, Kaufhausdetektive sowie leitende Funktionen in Asylunterkünften und Großveranstaltungen.",
    translations: {
      ru: {
        question: "Для каких из следующих видов деятельности сдача экзамена на компетентность (§ 34a GewO) является законодательно обязательной?",
        explanation: "Согласно § 34a абз. 1a GewO экзамен обязателен для городских патрулей, вышибал, магазинных детективов, а также руководителей в приютах для беженцев и на массовых мероприятиях."
      },
      en: {
        question: "For which of the following activities is passing the Sachkundeprüfung under § 34a GewO legally mandatory?",
        explanation: "According to § 34a (1a) GewO, the expertise test is mandatory for city patrols, bouncers, retail detectives, and leadership roles in refugee shelters and large events."
      },
      ar: {
        question: "لأي من الأنشطة التالية يعد اجتياز اختبار الكفاءة § 34a GewO إلزامياً بحكم القانون؟",
        explanation: "وفقاً للفقرة 34a البند 1a من قانون التجارة، يعد اختبار الكفاءة إلزامياً لدوريات الشوارع، وحراس أبواب النوادي، ومحققي المتاجر، والوظائف القيادية في دور اللاجئين والفعاليات الكبرى."
      },
      fa: {
        question: "برای کدام یک از فعالیت‌های زیر، قبولی در آزمون تخصص § 34a GewO قانوناً الزامی است؟",
        explanation: "طبق ماده ۳۴a بند ۱a قانون تجارت، آزمون تخصص برای گشت‌های شهری، دربانان دیسکو، کارآگاهان فروشگاه و سمت‌های مدیریتی در کمپ‌های پناهندگان و رویدادهای بزرگ الزامی است."
      }
    }
  }),

  makeQuestion({
    id: "wq-gew-2",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Voraussetzungen müssen erfüllt sein, bevor ein Sicherheitsmitarbeiter seinen Dienst aufnehmen darf?",
    optionsData: [
      {
        text: "A) Er muss mindestens 25 Jahre alt sein.",
        ru: "Ему должно быть не менее 25 лет.",
        en: "He must be at least 25 years old.",
        ar: "يجب ألا يقل عمره عن 25 عاماً.",
        fa: "باید حداقل ۲۵ سال سن داشته باشد."
      },
      {
        text: "B) Er muss im Bewacherregister eingetragen und durch die Behörde freigegeben (aktiviert) sein.",
        ru: "Он должен быть зарегистрирован в Реестре охранников (Bewacherregister) и одобрен (активирован) ведомством.",
        en: "He must be registered in the Guard Register (Bewacherregister) and approved (activated) by the authority.",
        ar: "يجب أن يكون مسجلاً في سجل الحراس (Bewacherregister) ومعتمداً (مفعلاً) من قبل السلطات المختصة.",
        fa: "باید در سامانه ثبت نگهبانان (Bewacherregister) ثبت شده و توسط مرجع قانونی تایید (فعال) شده باشد."
      },
      {
        text: "C) Er muss den geforderten Qualifikationsnachweis (Unterrichtung oder Sachkunde) besitzen.",
        ru: "Он должен иметь требуемое свидетельство о квалификации (инструктаж или экзамен на компетентность).",
        en: "He must possess the required qualification proof (training certificate or expertise exam).",
        ar: "يجب أن يحمل إثبات التأهيل المهني المطلوب (شهادة الدورة التثقيفية أو امتحان الكفاءة).",
        fa: "باید گواهی صلاحیت حرفه‌ای لازم (دوره آموزشی یا آزمون تخصص) را داشته باشد."
      },
      {
        text: "D) Er muss eine mindestens einjährige Berufserfahrung nachweisen.",
        ru: "Он должен подтвердить наличие стажа работы не менее одного года.",
        en: "He must prove at least one year of professional experience.",
        ar: "يجب أن يثبت خبرة مهنية لا تقل عن سنة واحدة.",
        fa: "باید حداقل یک سال سابقه کار حرفه‌ای ارائه دهد."
      }
    ],
    korrekteAntworten: [1, 2],
    punkte: 2,
    erklaerung: "Erklärung: Vor Dienstantritt muss die Zuverlässigkeit geprüft, die Freigabe im Bewacherregister erteilt und die geforderte Qualifikation vorhanden sein.",
    translations: {
      ru: {
        question: "Какие условия должны быть выполнены до того, как сотрудник службы охраны сможет приступить к работе?",
        explanation: "До начала работы должна быть проверена благонадежность, получено одобрение в реестре охранников и в наличии должна быть требуемая квалификация."
      },
      en: {
        question: "Which requirements must be met before a security employee may begin their duties?",
        explanation: "Prior to deployment, background reliability must be verified, approval in the Guard Register must be active, and required qualifications must exist."
      },
      ar: {
        question: "ما هي الشروط التي يجب استيفاؤها قبل أن يتمكن موظف الأمن من بدء عمله؟",
        explanation: "قبل مباشرة الخدمة، يجب فحص حسن السيرة والسلوك، والحصول على الموافقة والتفعيل في سجل الحراس، وتوافر المؤهل المطلوب."
      },
      fa: {
        question: "پیش از اینکه یک نیروی امنیتی بتواند کار خود را آغاز کند، چه شرایطی باید برآورده شود؟",
        explanation: "پیش از شروع به کار، صلاحیت فردی بررسی، تاییدیه در سامانه ثبت نگهبانان صادر و مدرک صلاحیت مربوطه ارائه شده باشد."
      }
    }
  }),

  makeQuestion({
    id: "wq-gew-3",
    kategorie: "Gewerberecht (GewO / BewachV)",
    frage: "Welche Angaben muss der Dienstausweis einer Wachperson nach der Bewachungsverordnung (BewachV) enthalten?",
    optionsData: [
      {
        text: "A) Name und Vorname der Wachperson sowie Name und Anschrift des Gewerbetreibenden.",
        ru: "Фамилию и имя охранника, а также наименование и адрес работодателя-предпринимателя.",
        en: "First and last name of the guard, as well as the name and address of the security contractor/employer.",
        ar: "اسم ولقب الحارس، وكذلك اسم وعنوان صاحب العمل التجاري.",
        fa: "نام و نام خانوادگی نگهبان و همچنین نام و نشانی کارفرما/شرکت حراست."
      },
      {
        text: "B) Die private Anschrift und Telefonnummer der Wachperson.",
        ru: "Домашний адрес и номер телефона охранника.",
        en: "The private home address and phone number of the guard.",
        ar: "العنوان الشخصي ورقم هاتف الحارس الخاص.",
        fa: "نشانی محل سکونت و شماره تلفن شخصی نگهبان."
      },
      {
        text: "C) Das Lichtbild der Wachperson.",
        ru: "Фотографию охранника.",
        en: "A photograph of the security guard.",
        ar: "صورة شخصية للحارس.",
        fa: "عکس پرسنلی نگهبان."
      },
      {
        text: "D) Die Bewacherregister-Identifikationsnummer (BewR-ID).",
        ru: "Идентификационный номер в реестре охранников (BewR-ID).",
        en: "The Guard Register Identification Number (BewR-ID).",
        ar: "الرقم التعريفي في سجل الحراس (BewR-ID).",
        fa: "شماره شناسایی سامانه ثبت نگهبانان (BewR-ID)."
      }
    ],
    korrekteAntworten: [0, 2, 3],
    punkte: 2,
    erklaerung: "Erklärung: Der Dienstausweis erfordert Name/Vorname, Foto, Ausstellerdaten und die Eindeutige ID aus dem Bewacherregister. Die Privatadresse gehört nicht darauf.",
    translations: {
      ru: {
        question: "Какие сведения должно содержать служебное удостоверение охранника согласно Положению об охране (BewachV)?",
        explanation: "Служебное удостоверение должно содержать ФИО, фото, данные работодателя и номер BewR-ID. Личный адрес указывать запрещено."
      },
      en: {
        question: "Which details must a security guard's service ID badge contain according to the Guarding Ordinance (BewachV)?",
        explanation: "The service badge requires full name, photo, employer data, and the unique BewR-ID. Private home addresses must not be included."
      },
      ar: {
        question: "ما هي البيانات التي يجب أن تتضمنها بطاقة العمل (Dienstausweis) لحارس الأمن بموجب لائحة الحراسة (BewachV)؟",
        explanation: "تتطلب بطاقة الخدمة الاسم واللقب، والصورة، وبيانات الشركة المصدرة، ورقم BewR-ID. ولا يوضع عليها العنوان الخاص."
      },
      fa: {
        question: "طبق آیین‌نامه نگهبانی (BewachV)، کارت شناسایی کاری نگهبان باید شامل چه مشخصاتی باشد؟",
        explanation: "کارت خدمت نیازمند نام/نام خانوادگی، عکس، مشخصات شرکت و کد یکتای BewR-ID است. نشانی شخصی نباید روی آن درج شود."
      }
    }
  }),

  // 3. Bürgerliches Gesetzbuch (BGB) (wq-bgb-1 .. wq-bgb-3)
  makeQuestion({
    id: "wq-bgb-1",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Wie unterscheiden sich Eigentum und Besitz im Bürgerlichen Gesetzbuch?",
    optionsData: [
      {
        text: "A) Eigentum ist die tatsächliche Herrschaft über eine Sache (§ 854 BGB).",
        ru: "Собственность — это фактическое господство над вещью (§ 854 ГК).",
        en: "Ownership is the actual physical control over a thing (§ 854 BGB).",
        ar: "الملكية هي السيطرة الفعلية والمادية على الشيء (§ 854 BGB).",
        fa: "مالکیت عبارت است از تسلط واقعی و فیزیکی بر یک شیء (§ 854 BGB)."
      },
      {
        text: "B) Eigentum ist die rechtliche Herrschaft über eine Sache (§ 903 BGB).",
        ru: "Собственность — это юридическое господство над вещью (§ 903 ГК).",
        en: "Ownership is the legal dominion over a thing (§ 903 BGB).",
        ar: "الملكية هي السلطة القانونية على الشيء (§ 903 BGB).",
        fa: "مالکیت عبارت است از تسلط و حق قانونی بر یک شیء (§ 903 BGB)."
      },
      {
        text: "C) Besitz ist die tatsächliche Herrschaft über eine Sache (§ 854 BGB).",
        ru: "Владение — это фактическое господство над вещью (§ 854 ГК).",
        en: "Possession is the actual physical control over a thing (§ 854 BGB).",
        ar: "الحيازة هي السيطرة المادية والفعلية على الشيء (§ 854 BGB).",
        fa: "تصرف (حیازت) عبارت است از تسلط واقعی و فیزیکی بر یک شیء (§ 854 BGB)."
      },
      {
        text: "D) Besitz und Eigentum sind juristisch vollkommen identisch.",
        ru: "Владение и собственность юридически полностью идентичны.",
        en: "Possession and ownership are legally completely identical.",
        ar: "الحيازة والملكية متطابقتان تماماً من الناحية القانونية.",
        fa: "تصرف و مالکیت از لحاظ حقوقی کاملاً یکسان هستند."
      }
    ],
    korrekteAntworten: [1, 2],
    punkte: 2,
    erklaerung: "Erklärung: Der Eigentümer hat das rechtliche Dürfen (§ 903 BGB), der Besitzer das tatsächliche Können/Körperliche Inhaben (§ 854 BGB).",
    translations: {
      ru: {
        question: "В чем различие между собственностью (Eigentum) и владением (Besitz) в Гражданском кодексе (BGB)?",
        explanation: "Собственник имеет правовое господство (§ 903 BGB), а владелец — фактическое обладание вещью (§ 854 BGB)."
      },
      en: {
        question: "How do ownership (Eigentum) and possession (Besitz) differ in the German Civil Code (BGB)?",
        explanation: "The owner has legal dominion (§ 903 BGB), whereas the possessor exercises actual physical control (§ 854 BGB)."
      },
      ar: {
        question: "كيف يختلف مفهوم الملكية (Eigentum) عن الحيازة (Besitz) في القانون المدني الألماني (BGB)؟",
        explanation: "المالك لديه الحق والسلطة القانونية (§ 903 BGB)، بينما الحائز لديه السيطرة الفعلية والمادية (§ 854 BGB)."
      },
      fa: {
        question: "مالکیت (Eigentum) و تصرف (Besitz) در قانون مدنی آلمان چه تفاوتی با یکدیگر دارند؟",
        explanation: "مالک دارای حق و تسلط قانونی است (§ 903 BGB)، در حالی که متصرف تسلط واقعی و فیزیکی بر شیء دارد (§ 854 BGB)."
      }
    }
  }),

  makeQuestion({
    id: "wq-bgb-2",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Unter welchen Voraussetzungen liegt 'Verbotene Eigenmacht' nach § 858 BGB vor?",
    optionsData: [
      {
        text: "A) Wenn dem Besitzer ohne dessen Willen der Besitz entzogen oder gestört wird.",
        ru: "Если у владельца против его воли изымается владение или создаются помехи владению.",
        en: "When possession is withdrawn from or disturbed against the will of the possessor.",
        ar: "إذا تم سلب الحيازة من الحائز أو تعكيرها رغماً عن إرادته.",
        fa: "هنگامی که تصرف بدون رضایت متصرف سلب یا در آن مزاحمت ایجاد شود."
      },
      {
        text: "B) Wenn die Besitzentziehung ohne gesetzliche Gestattung erfolgt.",
        ru: "Если изъятие владения происходит без законного разрешения.",
        en: "When the deprivation of possession occurs without statutory permission.",
        ar: "إذا تم سلب الحيازة دون تصريح قانوني مسبق.",
        fa: "هنگامی که سلب تصرف بدون مجوز و اجازه قانونی انجام شود."
      },
      {
        text: "C) Wenn der Eigentümer seine eigene Sache vom berechtigten Mieter zurückverlangt.",
        ru: "Если собственник требует вернуть свою вещь у законного арендатора.",
        en: "When the owner demands his own property back from an authorized tenant.",
        ar: "إذا طالب المالك باسترجاع ملكه من المستأجر الشرعي.",
        fa: "هنگامی که مالک مال خود را از مستأجر قانونی مطالبه کند."
      },
      {
        text: "D) Wenn die Polizei einen Beschluss zur Beschlagnahme vorlegt.",
        ru: "Если полиция предъявляет постановление о конфискации.",
        en: "When police present a seizure warrant.",
        ar: "إذا قدمت الشرطة قراراً قضائياً بالمصادرة والتحريز.",
        fa: "هنگامی که پلیس حکم مصادره قانونی ارائه دهد."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Verbotene Eigenmacht ist das widerrechtliche Stören oder Entziehen des Besitzes ohne den Willen des Besitzers.",
    translations: {
      ru: {
        question: "При каких условиях имеет место «самовольное нарушение владения» (Verbotene Eigenmacht) согласно § 858 BGB?",
        explanation: "Самовольное нарушение владения — это противоправное лишение или нарушение владения против воли владельца без законных оснований."
      },
      en: {
        question: "Under which conditions does 'unlawful interference with possession' (§ 858 BGB) occur?",
        explanation: "Unlawful interference is the illicit disturbance or deprivation of possession against the will of the possessor without statutory justification."
      },
      ar: {
        question: "تحت أي شروط يتحقق «التصرف غير المشروع في الحيازة» (Verbotene Eigenmacht) بموجب الفقرة 858 BGB؟",
        explanation: "التصرف غير المشروع هو سلب أو تعكير الحيازة دون رضا الحائز ودون مسوغ قانوني."
      },
      fa: {
        question: "تحت چه شرایطی «تصرف خودسرانه و غیرقانونی» (Verbotene Eigenmacht) طبق ماده ۸۵۸ BGB محقق می‌شود؟",
        explanation: "تصرف خودسرانه عبارت است از سلب یا ایجاد مزاحمت غیرقانونی در تصرف، بدون رضایت متصرف و بدون مجوز قانونی."
      }
    }
  }),

  makeQuestion({
    id: "wq-bgb-3",
    kategorie: "Bürgerliches Gesetzbuch (BGB)",
    frage: "Was unterscheidet den Defensivnotstand (§ 228 BGB) vom Aggressivnotstand (§ 904 BGB)?",
    optionsData: [
      {
        text: "A) Beim Defensivnotstand geht die Gefahr von der Sache aus, die beschädigt oder zerstört wird.",
        ru: "При оборонительной крайней необходимости опасность исходит от самой вещи, которая повреждается или уничтожается.",
        en: "In defensive necessity, the danger originates from the very item that is damaged or destroyed.",
        ar: "في حالة الضرورة الدفاعية ينبع الخطر من الشيء نفسه الذي يتعرض للإتلاف أو التدمير.",
        fa: "در حالت اضطرار تدافعی، خطر از خود همان شیء که تخریب یا آسیب می‌بیند ناشی می‌شود."
      },
      {
        text: "B) Beim Aggressivnotstand wird auf eine fremde Sache eingewirkt, von der selbst KEINE Gefahr ausgeht.",
        ru: "При агрессивной крайней необходимости воздействие оказывается на чужую вещь, от которой САМОЙ опасность НЕ исходит.",
        en: "In aggressive necessity, an uninvolved third party's property is affected, from which NO danger originated.",
        ar: "في حالة الضرورة الهجومية يتم التأثير على ملك للغير لا يصدر منه أي خطر بذاته.",
        fa: "در اضطرار تهاجمی، بر مال شخص دیگری که خودش هیچ خطری ندارد اثر گذاشته می‌شود."
      },
      {
        text: "C) Defensivnotstand gilt nur bei Angriffen durch Menschen.",
        ru: "Оборонительная крайняя необходимость применяется только при нападениях людей.",
        en: "Defensive necessity applies only to attacks by humans.",
        ar: "حالة الضرورة الدفاعية تنطبق فقط على اعتداءات البشر.",
        fa: "اضطرار تدافعی تنها در برابر حملات انسان‌ها اعمال می‌شود."
      },
      {
        text: "D) Aggressivnotstand erfordert eine Abwägung, bei der der drohende Schaden den Schaden an der Sache wesentlich überwiegt.",
        ru: "Агрессивная крайняя необходимость требует соразмерности: угрожающий ущерб должен существенно превышать вред, причиненный вещи.",
        en: "Aggressive necessity requires a proportionality balancing where the averted danger substantially outweighs the damage inflicted.",
        ar: "تتطلب الضرورة الهجومية موازنة بحيث يفوق الخطر المهدد الضرر اللاحق بالشيء بشكل جوهري.",
        fa: "اضطرار تهاجمی نیازمند موازنه‌ای است که در آن خسارت تهدیدکننده به مراتب بیشتر از آسیب وارد شده به مال باشد."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: § 228 BGB wehrt eine Gefahr ab, die von der Sache selbst ausgeht (z. B. beißender Hund). § 904 BGB nutzt eine unbeteiligte fremde Sache zur Abwehr einer fremden Gefahr.",
    translations: {
      ru: {
        question: "В чем разница между оборонительной крайней необходимостью (§ 228 BGB) и агрессивной крайней необходимостью (§ 904 BGB)?",
        explanation: "§ 228 BGB устраняет опасность от самой вещи (например, нападающей собаки). § 904 BGB воздействует на чужую непричастную вещь для предотвращения большей внешней опасности."
      },
      en: {
        question: "What distinguishes defensive necessity (§ 228 BGB) from aggressive necessity (§ 904 BGB)?",
        explanation: "§ 228 BGB averts danger coming from the item itself (e.g. biting dog). § 904 BGB interferes with an uninvolved property to ward off a greater external danger."
      },
      ar: {
        question: "ما الفرق بين حالة الضرورة الدفاعية (§ 228 BGB) والضرورة الهجومية (§ 904 BGB)؟",
        explanation: "الفقرة 228 BGB تدفع خطراً صادراً من الشيء نفسه (مثل كلب مهاجم)، بينما الفقرة 904 BGB تستخدم ملكاً لطرف غير معني لدفع خطر خارجي أعظم."
      },
      fa: {
        question: "چه تفاوتی میان اضطرار تدافعی (§ 228 BGB) و اضطرار تهاجمی (§ 904 BGB) وجود دارد؟",
        explanation: "ماده ۲۲۸ خطری را که از خود شیء ناشی می‌شود (مانند سگ مهاجم) دفع می‌کند؛ ماده ۹۰۴ برای دفع خطر بزرگتر، از مال بی‌طرف شخص ثالث استفاده می‌کند."
      }
    }
  }),

  // 4. Straf- und Strafverfahrensrecht (StGB / StPO) (wq-stgb-1 .. wq-stgb-3)
  makeQuestion({
    id: "wq-stgb-1",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Welche Voraussetzungen müssen für das Vorliegen einer Notwehr nach § 32 StGB erfüllt sein?",
    optionsData: [
      {
        text: "A) Es muss ein gegenwärtiger, rechtswidriger Angriff auf ein rechtlich geschütztes Gut vorliegen.",
        ru: "Должно иметь место наличное противоправное нападение на охраняемое законом благо.",
        en: "There must be an imminent, unlawful attack on a legally protected interest.",
        ar: "يجب أن يكون هناك اعتداء حال وغير قانوني على مصلحة محمية قانوناً.",
        fa: "باید یک حمله فعلی و غیرقانونی به یک حق یا منفعت مورد حمایت قانون وجود داشته باشد."
      },
      {
        text: "B) Die Abwehrhandlung muss erforderlich und geboten sein.",
        ru: "Действие по защите должно быть необходимым и допустимым (соразмерным).",
        en: "The defensive act must be necessary and legally indicated.",
        ar: "يجب أن يكون فعل الدفاع ضرورياً ومناسباً قانوناً.",
        fa: "اقدام دفاعی باید لازم و از نظر قانونی متناسب باشد."
      },
      {
        text: "C) Der Angreifer muss zuvor schriftlich verwarnt worden sein.",
        ru: "Нападающий должен быть предварительно письменно предупрежден.",
        en: "The attacker must have been warned in writing beforehand.",
        ar: "يجب تحذير المعتدي خطياً مسبقاً.",
        fa: "مهاجم باید قبلاً به صورت کتبی اخطار دریافت کرده باشد."
      },
      {
        text: "D) Es darf nur gegen menschliche Angriffe gehandelt werden.",
        ru: "Защита допустима только против нападения со стороны человека.",
        en: "Action may only be taken against human attacks.",
        ar: "يجوز الدفاع فقط ضد اعتداء صادر من إنسان.",
        fa: "اقدام دفاعی فقط در برابر حملات انسانی مجاز است."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Notwehr verlangt einen gegenwärtigen, rechtswidrigen menschlichen Angriff. Die Abwehr muss erforderlich (mildestes wirksames Mittel) und geboten sein.",
    translations: {
      ru: {
        question: "Какие условия должны быть выполнены для наличия необходимой обороны согласно § 32 StGB?",
        explanation: "Необходимая оборона требует наличного противоправного нападения человека. Оборона должна быть необходимой (наиболее мягкое эффективное средство) и социально допустимой."
      },
      en: {
        question: "Which conditions must be met for self-defense under § 32 StGB to apply?",
        explanation: "Self-defense requires an imminent, unlawful human attack. The defensive action must be necessary (mildest effective means) and legally permissible."
      },
      ar: {
        question: "ما هي الشروط التي يجب توافرها لتحقق حالة الدفاع الشرعي بموجب الفقرة 32 StGB؟",
        explanation: "يتطلب الدفاع الشرعي اعتداءً حالاً وغير قانوني صادر من إنسان. ويجب أن يكون الدفاع ضرورياً (أخف وسيلة فعالة) ومقبولاً قانوناً."
      },
      fa: {
        question: "برای تحقق دفاع مشروع طبق ماده ۳۲ StGB چه شرایطی باید وجود داشته باشد؟",
        explanation: "دفاع مشروع نیازمند حمله فعلی، غیرقانونی و انسانی است. عمل دفاعی باید ضروری (خفیف‌ترین وسیله مؤثر) و متناسب باشد."
      }
    }
  }),

  makeQuestion({
    id: "wq-stgb-2",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Wann ist die vorläufige Festnahme nach § 127 Abs. 1 StPO rechtmäßig?",
    optionsData: [
      {
        text: "A) Wenn der Täter bei einer Straftat auf frischer Tat betroffen oder verfolgt wird.",
        ru: "Если правонарушитель застигнут при совершении преступления на месте или преследуется по горячим следам.",
        en: "When the perpetrator is caught in the act of committing a crime or is pursued immediately thereafter.",
        ar: "إذا تم ضبط الجاني متلبساً بارتكاب جريمة جنائية أو تمت ملاحقته فوراً.",
        fa: "هنگامی که مرتکب در حین ارتکاب جرم مشاهده شود یا بلافاصله پس از آن تعقیب گردد."
      },
      {
        text: "B) Wenn der Täter der Flucht verdächtig ist oder seine Identität nicht sofort festgestellt werden kann.",
        ru: "Если есть подозрение в побеге или его личность невозможно установить немедленно.",
        en: "When there is a flight risk or the perpetrator's identity cannot be established immediately.",
        ar: "إذا كان هناك اشتباه في هروبه أو تعذر التحقق من هويته على الفور.",
        fa: "هنگامی که مظنون به فرار باشد یا هویت او فوراً قابل احراز نباشد."
      },
      {
        text: "C) Wenn der Täter eine bloße Ordnungswidrigkeit begangen hat.",
        ru: "Если нарушитель совершил простое административное правонарушение.",
        en: "When the offender has committed a mere administrative misdemeanor.",
        ar: "إذا كان الفاعل قد ارتكب مجرد مخالفة إدارية بسيطة.",
        fa: "هنگامی که مرتکب صرفاً یک تخلف اداری ساده انجام داده باشد."
      },
      {
        text: "D) Jedes Mal, wenn ein Kunde im Laden einen nervösen Eindruck macht.",
        ru: "Каждый раз, когда покупатель в магазине выглядит нервным.",
        en: "Whenever a customer in a store appears nervous.",
        ar: "في كل مرة يبدو فيها الزبون في المتجر متوتراً.",
        fa: "هر زمان که مشتری در فروشگاه مضطرب و عصبی به نظر برسد."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: § 127 Abs. 1 StPO setzt eine frische Tat (Straftat!) sowie Fluchtgefahr oder fehlende Identitätsfeststellbarkeit voraus.",
    translations: {
      ru: {
        question: "Когда временное задержание согласно § 127 абз. 1 StPO является правомерным?",
        explanation: "§ 127 абз. 1 УПК требует наличия свежего преступления (уголовного деяния!), а также опасности побега или невозможности установить личность на месте."
      },
      en: {
        question: "When is a provisional citizen's arrest under § 127 (1) StPO lawful?",
        explanation: "§ 127 (1) StPO requires being caught in the act of a criminal offense, plus either a flight risk or inability to verify identity on the spot."
      },
      ar: {
        question: "متى يكون التوقيف المؤقت قانونياً وفقاً للفقرة 127 بند 1 StPO؟",
        explanation: "تتطلب المادة 127 بند 1 تلبساً بجريمة جنائية، بالإضافة إلى خطر الفرار أو تعذر التحقق الفوري من الهوية."
      },
      fa: {
        question: "چه زمانی بازداشت موقت شهروندی طبق ماده ۱۲۷ بند ۱ آیین دادرسی قانونی است؟",
        explanation: "ماده ۱۲۷ نیازمند جرم مشهود (جنایی) و همچنین خطر فرار یا عدم امکان احراز فوری هویت است."
      }
    }
  }),

  makeQuestion({
    id: "wq-stgb-3",
    kategorie: "Straf- und Strafverfahrensrecht (StGB / StPO)",
    frage: "Worin unterscheidet sich Diebstahl (§ 242 StGB) von Unterschlagung (§ 246 StGB)?",
    optionsData: [
      {
        text: "A) Beim Diebstahl muss fremder Gewahrsam gebrochen werden.",
        ru: "При краже обязательно должно иметь место нарушение (прекращение) чужого владения/хранения.",
        en: "In theft, another person's custody/possession must be broken.",
        ar: "في جريمة السرقة يجب كسر وانتزاع حيازة الغير للمال.",
        fa: "در سرقت، تصرف و نگهداری دیگری بر مال باید شکسته و سلب شود."
      },
      {
        text: "B) Bei der Unterschlagung liegt die Sache bereits im Gewahrsam des Täters oder ist gewahrsamlos (z. B. Fundsache).",
        ru: "При присвоении вещь уже находится во владении виновного или является бесхозяйной (например, находка).",
        en: "In embezzlement/unlawful appropriation, the item is already in the perpetrator's custody or is custody-free (e.g. found property).",
        ar: "في خيانة الأمانة/الاستيلاء يكون الشيء موجوداً مسبقاً في حيازة الجاني أو بدون حائز (مثل اللقطة).",
        fa: "در تصاحب غیرقانونی (خیانت در امانت)، مال قبلاً در تصرف مرتکب بوده یا فاقد متصرف است (مانند شیء پیدا شده)."
      },
      {
        text: "C) Diebstahl ist eine Ordnungswidrigkeit, Unterschlagung ein Verbrechen.",
        ru: "Кража — это административное правонарушение, а присвоение — тяжкое преступление.",
        en: "Theft is an administrative offense, while embezzlement is a felony.",
        ar: "السرقة مخالفة إدارية بينما خيانة الأمانة جناية كبرى.",
        fa: "سرقت یک تخلف اداری است، در حالی که خیانت در امانت یک جنایت بزرگ است."
      },
      {
        text: "D) Unterschlagung erfordert die Anwendung von Gewalt.",
        ru: "Присвоение требует обязательного применения насилия.",
        en: "Embezzlement strictly requires the use of physical force.",
        ar: "تتطلب خيانة الأمانة استخدام العنف البدني حتماً.",
        fa: "خیانت در امانت لزوماً نیازمند اعمال خشونت فیزیکی است."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Diebstahl setzt Gewahrsamsbruch voraus. Unterschlagung erfordert keinen Gewahrsamsbruch (z. B. Einbehalten gefundener Gegenstände).",
    translations: {
      ru: {
        question: "В чем различие между кражей (§ 242 StGB) и присвоением имущества (§ 246 StGB)?",
        explanation: "Кража предполагает нарушение чужого владения (Gewahrsamsbruch). Присвоение не требует нарушения владения (например, удержание найденной вещи)."
      },
      en: {
        question: "What is the difference between theft (§ 242 StGB) and embezzlement / unlawful appropriation (§ 246 StGB)?",
        explanation: "Theft requires breaking another's custody. Embezzlement does not require breaking custody (e.g. retaining found lost property)."
      },
      ar: {
        question: "ما الفرق بين السرقة (§ 242 StGB) وخيانة الأمانة / الاستيلاء غير المشروع (§ 246 StGB)؟",
        explanation: "تتطلب السرقة كسر حيازة الغير للمال، بينما لا يتطلب الاستيلاء كسر الحيازة (مثل الاحتفاظ بالأشياء المعثور عليها)."
      },
      fa: {
        question: "تفاوت سرقت (§ 242 StGB) با تصاحب غیرقانونی/خیانت در امانت (§ 246 StGB) در چیست؟",
        explanation: "سرقت نیازمند سلب و شکستن تصرف دیگری است، اما تصاحب غیرقانونی نیازمند شکستن تصرف نیست (مانند برداشتن شیء گم‌شده)."
      }
    }
  }),

  // 5. Umgang mit Menschen und Deeskalation (wq-mensch-1 .. wq-mensch-2)
  makeQuestion({
    id: "wq-mensch-1",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Welche Verhaltensweisen wirken in einer angespannten Konfliktsituation deeskalierend?",
    optionsData: [
      {
        text: "A) Blickkontakt halten, ohne die Gegenpartei anzustarren.",
        ru: "Поддерживать зрительный контакт, не сверля оппонента пристальным взглядом.",
        en: "Maintain eye contact without staring or glaring down the other party.",
        ar: "الحفاظ على التواصل البصري دون التحديق الاستفزازي في الطرف الآخر.",
        fa: "حفظ ارتباط چشمی بدون خیره شدن تحریک‌آمیز به طرف مقابل."
      },
      {
        text: "B) Ruhige, sachliche Stimme nutzen und angemessene Eigensicherungsdistanz wahren.",
        ru: "Говорить спокойным, деловым тоном и соблюдать безопасную дистанцию самозащиты.",
        en: "Use a calm, objective tone of voice and maintain an appropriate self-protection distance.",
        ar: "استخدام نبرة صوت هادئة وموضوعية والحفاظ على مسافة أمان كافية لحماية النفس.",
        fa: "استفاده از لحن آرام و منطقی و حفظ فاصله ایمنی مناسب جهت خودمراقبتی."
      },
      {
        text: "C) Den Gegenüber laut unterbrechen und mit Verschränkung der Arme dominieren.",
        ru: "Громко перебивать собеседника и доминировать, скрестив руки на груди.",
        en: "Loudly interrupt the counterpart and dominate by crossing arms aggressively.",
        ar: "مقاطعة الطرف الآخر بصوت عالٍ ومحاولة فرض السيطرة بضم الذراعين بصرامة.",
        fa: "قطع صحبت طرف مقابل با صدای بلند و تلاش برای تسلط با دست به سینه ایستادن."
      },
      {
        text: "D) Ich-Botschaften verwenden statt beschuldigender Du-Botschaften.",
        ru: "Использовать «Я-сообщения» вместо обвиняющих «Ты-сообщений».",
        en: "Use 'I-messages' instead of accusing 'You-messages'.",
        ar: "استخدام رسائل الأنا (Ich-Botschaften) بدلاً من رسائل الاتهام (Du-Botschaften).",
        fa: "استفاده از جملات مبتنی بر «من» به جای جملات سرزنش‌گرانه «تو»."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Deeskalation gelingt durch sachliche Kommunikation, wahren des Sicherheitsabstands und Vermeidung von Provokationen.",
    translations: {
      ru: {
        question: "Какие модели поведения способствуют деэскалации в напряженной конфликтной ситуации?",
        explanation: "Деэскалация достигается через спокойное и деловое общение, соблюдение дистанции безопасности и исключение провокаций."
      },
      en: {
        question: "Which behaviors have a de-escalating effect in a tense conflict situation?",
        explanation: "De-escalation succeeds through objective communication, maintaining a safety distance, and avoiding provocations."
      },
      ar: {
        question: "ما هي السلوكيات التي تساهم في تهدئة النزاع (Deeskalation) في المواقف المتوترة؟",
        explanation: "تنجح التهدئة من خلال التواصل الموضوعي، والحفاظ على مسافة الأمان، وتجنب الاستفزازات."
      },
      fa: {
        question: "کدام رفتارها در یک موقعیت بحرانی و متشنج اثر تنش‌زدایی (Deeskalation) دارند؟",
        explanation: "تنش‌زدایی از طریق گفتگوی منطقی، حفظ فاصله ایمنی و پرهیز از رفتارهای تحریک‌آمیز حاصل می‌شود."
      }
    }
  }),

  makeQuestion({
    id: "wq-mensch-2",
    kategorie: "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    frage: "Was versteht man unter dem Begriff 'Eigensicherung' im Bewachungsdienst?",
    optionsData: [
      {
        text: "A) Die ständige Wahrnehmung des Umfelds zur Vorbeugung eigener Gefährdungen.",
        ru: "Постоянное наблюдение за окружающей обстановкой для предотвращения угроз собственной безопасности.",
        en: "Constant environmental awareness to prevent risks to one's own safety.",
        ar: "المراقبة المستمرة للمحيط والبيئة المحيطة لتجنب تعريض النفس للخطر.",
        fa: "آگاهی و پایش مداوم محیط اطراف جهت پیشگیری از خطرات متوجه خود."
      },
      {
        text: "B) Das Einhalten eines Sicherheitsabstandes (mind. Armlänge + Schritt) zu aggressiven Personen.",
        ru: "Соблюдение дистанции безопасности (не менее длины руки плюс шаг) до агрессивных лиц.",
        en: "Maintaining a safety buffer distance (at least an arm's length plus one step) from aggressive individuals.",
        ar: "الحفاظ على مسافة أمان (طول ذراع + خطوة على الأقل) من الأشخاص العدوانيين.",
        fa: "رعایت فاصله ایمنی (حداقل به اندازه طول دست به علاوه یک گام) با افراد پرخاشگر."
      },
      {
        text: "C) Das sofortige körperliche Angreifen mutmaßlicher Störer.",
        ru: "Немедленное физическое нападение на предполагаемых нарушителей порядка.",
        en: "Immediate physical attack on suspected troublemakers.",
        ar: "المهاجمة البدنية الفورية للأشخاص المشتبه بإثارتهم للشغب.",
        fa: "حمله فیزیکی فوری به اخلال‌گران احتمالی نظم."
      },
      {
        text: "D) Die Absicherung von Fluchtwegen und Verstärkungsoptionen.",
        ru: "Обеспечение путей отхода и возможностей вызова подкрепления.",
        en: "Securing escape routes and ensuring backup options.",
        ar: "تأمين مسارات الهروب وضمان خيارات طلب التعزيز والمساعدة.",
        fa: "اطمینان از وجود مسیرهای خروج اضطراری و امکان درخواست نیروهای کمکی."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Eigensicherung umfasst Prävention, Abstand, Umfeldbeobachtung und Eigenschutz, niemals unüberlegte Selbstjustiz.",
    translations: {
      ru: {
        question: "Что понимается под термином «самозащита / собственная безопасность» (Eigensicherung) в охранной службе?",
        explanation: "Собственная безопасность включает профилактику, дистанцию, наблюдение за обстановкой и защиту, но никогда — необдуманное применение силы."
      },
      en: {
        question: "What is meant by 'self-protection / officer safety' (Eigensicherung) in the security service?",
        explanation: "Self-protection encompasses prevention, maintaining distance, situational awareness, and securing escape/backup options."
      },
      ar: {
        question: "ماذا يقصد بمفهوم «حماية النفس / السلامة الشخصية» (Eigensicherung) في خدمة الحراسة؟",
        explanation: "تشمل السلامة الشخصية الوقاية، والحفاظ على المسافة، ومراقبة المحيط، وتأمين طلب المساعدة."
      },
      fa: {
        question: "مفهوم «خودمراقبتی و ایمنی فردی» (Eigensicherung) در خدمت نگهبانی شامل چه مواردی است؟",
        explanation: "ایمنی فردی شامل پیشگیری، حفظ فاصله، پایش محیط اطراف و تأمین مسیرهای خروج و کمک است."
      }
    }
  }),

  // 6. Unfallverhütungsvorschriften (UVV) (wq-uvv-1 .. wq-uvv-2)
  makeQuestion({
    id: "wq-uvv-1",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Welche Pflichten ergeben sich aus der DGUV Vorschrift 23 (Bewachungsgewerbe) für Wachpersonen?",
    optionsData: [
      {
        text: "A) Während des Dienstes dürfen keine berauschenden Mittel (Alkohol, Drogen) konsumiert werden.",
        ru: "Во время несения службы запрещено употреблять одурманивающие вещества (алкоголь, наркотики).",
        en: "No intoxicating substances (alcohol, drugs) may be consumed during duty.",
        ar: "يحظر تماماً تناول المواد المسكرة أو المخدرة (الكحول والمخدرات) أثناء الخدمة.",
        fa: "در طول زمان خدمت، مصرف مواد مست‌کننده (الکل و مواد مخدر) اکیداً ممنوع است."
      },
      {
        text: "B) Festgestellte Mängel an Sicherheitseinrichtungen müssen unverzüglich gemeldet werden.",
        ru: "Об обнаруженных дефектах в устройствах безопасности необходимо немедленно сообщать.",
        en: "Identified defects in safety equipment must be reported immediately.",
        ar: "يجب الإبلاغ الفوري عن أي عيوب أو أعطال في تجهيزات السلامة.",
        fa: "نواقص و خرابی‌های مشاهده شده در تجهیزات ایمنی باید فوراً گزارش داده شود."
      },
      {
        text: "C) Zur Verfügung gestellte persönliche Schutzausrüstung (PSA) ist bestimmungsgemäß zu tragen.",
        ru: "Предоставленные средства индивидуальной защиты (СИЗ) должны использоваться по назначению.",
        en: "Provided Personal Protective Equipment (PPE) must be worn in accordance with instructions.",
        ar: "يجب ارتداء واستخدام معدات الوقاية الشخصية (PSA) الموفرة حسب التعليمات.",
        fa: "تجهیزات حفاظت فردی (PSA) ارائه‌شده باید طبق دستورالعمل استفاده شود."
      },
      {
        text: "D) Dienstwaffen dürfen privat an Dritte verliehen werden.",
        ru: "Служебное оружие разрешается передавать во временное пользование третьим лицам.",
        en: "Service firearms may be loaned privately to third parties.",
        ar: "يجوز إعارة أسلحة الخدمة بشكل شخصي لأشخاص آخرين.",
        fa: "سلاح سازمانی را می‌توان به صورت شخصی به اشخاص ثالث امانت داد."
      }
    ],
    korrekteAntworten: [0, 1, 2],
    punkte: 2,
    erklaerung: "Erklärung: DGUV Vorschrift 23 verlangt Nüchternheit, Nutzung der PSA und unverzügliche Mängelmeldung zur Vermeidung von Arbeitsunfällen.",
    translations: {
      ru: {
        question: "Какие обязанности вытекают из Правила DGUV 23 (Охранная деятельность) для сотрудников охраны?",
        explanation: "Правило DGUV 23 требует трезвости, ношения СИЗ и незамедлительного сообщения о дефектах для предотвращения несчастных случаев на производстве."
      },
      en: {
        question: "Which obligations arise from DGUV Regulation 23 (Security Services) for security personnel?",
        explanation: "DGUV Regulation 23 mandates absolute sobriety, proper wearing of PPE, and immediate reporting of safety defects."
      },
      ar: {
        question: "ما هي الواجبات المترتبة على حراس الأمن بموجب لائحة الوقاية من الحوادث DGUV Vorschrift 23؟",
        explanation: "تتطلب لائحة DGUV 23 الامتناع الكامل عن الكحول، واستخدام معدات الوقاية الشخصية، والإبلاغ الفوري عن العيوب."
      },
      fa: {
        question: "طبق مقررات پیشگیری از حوادث DGUV Vorschrift 23 چه وظایفی برای پرسنل نگهبانی تعیین شده است؟",
        explanation: "مقررات DGUV 23 هشیاری کامل، استفاده از تجهیزات حفاظتی و گزارش فوری نواقص ایمنی را الزامی می‌داند."
      }
    }
  }),

  makeQuestion({
    id: "wq-uvv-2",
    kategorie: "Unfallverhütungsvorschriften (UVV)",
    frage: "Wer trägt laut Unfallverhütungsvorschriften die Verantwortung für die Bereitstellung geeigneter Arbeitsmittel und Schutzausrüstung?",
    optionsData: [
      {
        text: "A) Der Gewerbetreibende (Arbeitgeber).",
        ru: "Предприниматель / работодатель.",
        en: "The security business operator / employer.",
        ar: "صاحب العمل / صاحب المنشأة التجارية.",
        fa: "صاحب کسب‌وکار و کارفرما."
      },
      {
        text: "B) Die Berufsgenossenschaft.",
        ru: "Профсоюзное страховое общество (Berufsgenossenschaft).",
        en: "The Employers' Liability Insurance Association (Berufsgenossenschaft).",
        ar: "النقابة المهنية للتأمين ضد الحوادث (Berufsgenossenschaft).",
        fa: "صندوق بیمه حوادث کار حرفه‌ای (Berufsgenossenschaft)."
      },
      {
        text: "C) Der einzelne Kunde vor Ort.",
        ru: "Отдельный клиент на объекте охраны.",
        en: "The individual on-site client.",
        ar: "العميل المستفيد من الخدمة في الموقع.",
        fa: "مشتری یا کارفرمای حاضر در محل."
      },
      {
        text: "D) Die Polizeibehörde.",
        ru: "Полицейское ведомство.",
        en: "The local police department.",
        ar: "إدارة الشرطة المحلية.",
        fa: "مرجع پلیس."
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Der Arbeitgeber ist verpflichtet, sichere Arbeitsmittel und erforderliche PSA bereitzustellen.",
    translations: {
      ru: {
        question: "Кто согласно правилам техники безопасности несет ответственность за предоставление подходящих средств труда и защитного снаряжения?",
        explanation: "Работодатель обязан предоставить безопасные средства труда и необходимые средства индивидуальной защиты."
      },
      en: {
        question: "Who is responsible for providing suitable work equipment and protective gear under accident prevention regulations?",
        explanation: "The employer is legally obligated to provide safe work tools and necessary PPE."
      },
      ar: {
        question: "من المسؤول بموجب لوائح الوقاية من الحوادث عن توفير معدات العمل المناسبة وأدوات الوقاية؟",
        explanation: "صاحب العمل ملزم قانوناً بتوفير أدوات عمل آمنة ومعدات الوقاية الشخصية المطلوبة."
      },
      fa: {
        question: "بر اساس مقررات پیشگیری از حوادث، مسئولیت تهیه و در اختیار گذاشتن ابزار کار مناسب و تجهیزات حفاظتی بر عهده کیست؟",
        explanation: "کارفرما موظف است ابزارهای ایمن کاری و تجهیزات حفاظت فردی لازم را تأمین کند."
      }
    }
  }),

  // 7. Grundsätze der Sicherheitstechnik (wq-tech-1 .. wq-tech-2)
  makeQuestion({
    id: "wq-tech-1",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche Typen von Einbruchmeldern werden zur Außenhautüberwachung eines Gebäudes eingesetzt?",
    optionsData: [
      {
        text: "A) Magnetkontakte an Fenstern und Türen.",
        ru: "Магнитные контакты (герконы) на окнах и дверях.",
        en: "Magnetic contact sensors on windows and doors.",
        ar: "المجسات المغناطيسية (Magnetkontakte) على النوافذ والأبواب.",
        fa: "حسگرهای تماسی مغناطیسی روی درها و پنجره‌ها."
      },
      {
        text: "B) Glasbruchmelder an Scheiben.",
        ru: "Датчики разбития стекла на оконных витринах и стеклах.",
        en: "Glass break detectors on window panes.",
        ar: "أجهزة استشعار كسر الزجاج (Glasbruchmelder).",
        fa: "حسگرهای شکست شیشه روی پنجره‌ها."
      },
      {
        text: "C) Bewegungsmelder im Flur (Fallenüberwachung).",
        ru: "Датчики движения в коридоре (ловушечное наблюдение / Fallenüberwachung).",
        en: "Motion detectors in the hallway (trap monitoring).",
        ar: "كواشف الحركة في الممرات (مراقبة المصيدة).",
        fa: "حسگرهای حرکتی در راهروها (نظارت تله‌ای)."
      },
      {
        text: "D) Rauchansaugsysteme.",
        ru: "Аспирационные дымовые извещатели.",
        en: "Aspirating smoke detection systems.",
        ar: "أنظمة سحب واكتشاف الدخان.",
        fa: "سیستم‌های مکنده تشخیص دود."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Außenhautüberwachung sichert die Gebäudehülle (Fenster, Türen, Glas). Bewegungsmelder im Innenraum dienen der Schwerpunkt-/Fallenüberwachung.",
    translations: {
      ru: {
        question: "Какие типы охранных извещателей используются для защиты внешнего периметра/оболочки здания (Außenhautüberwachung)?",
        explanation: "Защита периметра оболочки здания охватывает окна, двери и стекла (магнитные контакты, датчики разбития). Датчики движения внутри служат для защиты объема/ловушек."
      },
      en: {
        question: "Which types of intrusion detectors are used for perimeter shell monitoring (Außenhautüberwachung) of a building?",
        explanation: "Perimeter shell monitoring secures entry points (windows, doors, glass panes). Indoor motion detectors serve space/trap monitoring."
      },
      ar: {
        question: "ما هي أنواع أجهزة الإنذار المستخدمة لمراقبة الغلاف الخارجي للمبنى (Außenhautüberwachung)؟",
        explanation: "تؤمن مراقبة الغلاف الخارجي منافذ المبنى (النوافذ، الأبواب، الزجاج). بينما كواشف الحركة الداخلية مخصصة للمراقبة الفراغية والفخية."
      },
      fa: {
        question: "کدام نوع حسگرهای اعلام سرقت برای حفاظت از پوسته خارجی ساختمان (Außenhautüberwachung) به کار می‌روند؟",
        explanation: "حفاظت از پوسته خارجی، منافذ ساختمان (درها، پنجره‌ها و شیشه‌ها) را پوشش می‌دهد. حسگرهای حرکتی داخلی برای نظارت تله‌ای فضای داخلی هستند."
      }
    }
  }),

  makeQuestion({
    id: "wq-tech-2",
    kategorie: "Grundsätze der Sicherheitstechnik",
    frage: "Welche Brandklassen kennzeichnen feste Stoffe (z. B. Holz, Papier) und flüssige Stoffe (z. B. Benzin)?",
    optionsData: [
      {
        text: "A) Brandklasse A für feste Stoffe.",
        ru: "Класс пожара A — для твердых горючих веществ.",
        en: "Fire Class A for solid combustible substances.",
        ar: "فئة الحريق A للمواد الصلبة.",
        fa: "کلاس آتش A برای مواد جامد."
      },
      {
        text: "B) Brandklasse B für flüssige Stoffe.",
        ru: "Класс пожара B — для жидких веществ.",
        en: "Fire Class B for liquid or liquefiable substances.",
        ar: "فئة الحريق B للمواد السائلة.",
        fa: "کلاس آتش B برای مواد مایع."
      },
      {
        text: "C) Brandklasse C für Metalle.",
        ru: "Класс пожара C — для металлов.",
        en: "Fire Class C for combustible metals.",
        ar: "فئة الحريق C للمعادن.",
        fa: "کلاس آتش C برای فلزات."
      },
      {
        text: "D) Brandklasse F für Speiseöle.",
        ru: "Класс пожара F — для пищевых масел и жиров.",
        en: "Fire Class F for cooking oils and fats.",
        ar: "فئة الحريق F لزيوت ودهون الطهي.",
        fa: "کلاس آتش F برای روغن‌ها و چربی‌های خوراکی."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: A = feste Stoffe, B = flüssige/flüssig werdende Stoffe, C = Gase, D = Metalle, F = Speiseöle/-fette.",
    translations: {
      ru: {
        question: "Какие классы пожара обозначают твердые вещества (например, дерево, бумага) и жидкие вещества (например, бензин)?",
        explanation: "Класс A = твердые вещества, B = жидкие, C = газы, D = металлы, F = пищевые жиры и масла."
      },
      en: {
        question: "Which fire classes identify solid substances (e.g. wood, paper) and liquid substances (e.g. gasoline)?",
        explanation: "Class A = solid materials, B = liquid materials, C = gases, D = metals, F = cooking oils and fats."
      },
      ar: {
        question: "ما هي فئات الحرائق التي تصنف المواد الصلبة (كالخشب والورق) والمواد السائلة (كالبنزين)؟",
        explanation: "الفئة A للمواد الصلبة، B للمواد السائلة، C للغازات، D للمعادن، F لزيوت ودهون الطعام."
      },
      fa: {
        question: "کدام کلاس‌های آتش نشان‌دهنده مواد جامد (مانند چوب، کاغذ) و مواد مایع (مانند بنزین) هستند؟",
        explanation: "کلاس A برای جامدات، B برای مایعات، C برای گازها، D برای فلزات و F برای روغن‌های خوراکی است."
      }
    }
  }),

  // 8. Datenschutzrecht (wq-dsgvo-1 .. wq-dsgvo-2)
  makeQuestion({
    id: "wq-dsgvo-1",
    kategorie: "Datenschutzrecht",
    frage: "Welche Grundsätze verlangt die Datenschutz-Grundverordnung (DSGVO) bei der Verarbeitung personenbezogener Daten?",
    optionsData: [
      {
        text: "A) Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz.",
        ru: "Законность, добросовестность и прозрачность обработки.",
        en: "Lawfulness, fairness, and transparency.",
        ar: "المشروعية، والتعامل بحسن نية، والشفافية.",
        fa: "قانونمندی، پردازش با حسن نیت و شفافیت."
      },
      {
        text: "B) Zweckbindung und Datenminimierung.",
        ru: "Ограничение цели и минимизация объема данных.",
        en: "Purpose limitation and data minimization.",
        ar: "تحديد الغرض وتقليل البيانات للحد الأدنى.",
        fa: "محدودیت هدف و به حداقل رساندن داده‌ها."
      },
      {
        text: "C) Unbegrenzte Speicherung aller Besucherdaten ohne Löschfrist.",
        ru: "Бессрочное хранение всех данных посетителей без сроков удаления.",
        en: "Unlimited storage of all visitor data without deletion deadlines.",
        ar: "التخزين غير المحدود لجميع بيانات الزوار دون موعد محدد للحذف.",
        fa: "ذخیره‌سازی نامحدود داده‌های کلیه مراجعان بدون مهلت حذف."
      },
      {
        text: "D) Richtigkeit und Speicherbegrenzung.",
        ru: "Точность данных и ограничение сроков хранения.",
        en: "Accuracy and storage limitation.",
        ar: "دقة البيانات وتحديد فترة التخزين.",
        fa: "صحت اطلاعات و محدودیت زمان نگهداری."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Art. 5 DSGVO nennt u. a. Rechtmäßigkeit, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit und Speicherbegrenzung.",
    translations: {
      ru: {
        question: "Какие принципы требует Общий регламент по защите данных (DSGVO/GDPR) при обработке персональных данных?",
        explanation: "Ст. 5 DSGVO закрепляет законность, прозрачность, целевое ограничение, минимизацию, точность и ограничение хранения."
      },
      en: {
        question: "Which principles does the General Data Protection Regulation (GDPR) require for processing personal data?",
        explanation: "Art. 5 GDPR mandates lawfulness, transparency, purpose limitation, data minimization, accuracy, and storage limitation."
      },
      ar: {
        question: "ما هي المبادئ التي تفرضها اللائحة العامة لحماية البيانات (DSGVO) عند معالجة البيانات الشخصية؟",
        explanation: "تنص المادة 5 من DSGVO على المشروعية والشفافية وتحديد الغرض وتقليل البيانات ودقتها وتحديد مدة حفظها."
      },
      fa: {
        question: "مقررات عمومی حفاظت از داده‌ها (DSGVO) چه اصولی را برای پردازش اطلاعات شخصی الزامی می‌داند؟",
        explanation: "ماده ۵ DSGVO اصول قانونمندی، شفافیت، محدودیت هدف، حداقل‌سازی داده، دقت و محدودیت دوره نگهداری را الزامی می‌کند."
      }
    }
  }),

  makeQuestion({
    id: "wq-dsgvo-2",
    kategorie: "Datenschutzrecht",
    frage: "Welche Anforderungen gelten für den rechtmäßigen Betrieb einer Videoüberwachungsanlage auf privat genutztem Betriebsgelände?",
    optionsData: [
      {
        text: "A) Gut sichtbare Hinweisschilder mit Piktogramm und Kontaktdaten des Verantwortlichen.",
        ru: "Хорошо видимые информационные таблички с пиктограммой и контактами ответственного лица.",
        en: "Clearly visible warning signs with a camera pictogram and contact details of the controller.",
        ar: "لوحات تحذيرية واضحة الرؤية تحتوي على رمز الكاميرا وبيانات المسؤول للاتصال به.",
        fa: "تابلوهای هشدار با دید مناسب شامل نماد دوربین و اطلاعات تماس فرد مسئول."
      },
      {
        text: "B) Berechtigtes Interesse (z. B. Eigentumsschutz) nach Abwägung mit den Interessen der Betroffenen.",
        ru: "Законный интерес (например, защита собственности) после взвешивания прав затронутых лиц.",
        en: "Legitimate interest (e.g. protection of property) balanced against the rights of affected individuals.",
        ar: "وجود مصلحة مشروعة (مثل حماية الممتلكات) بعد الموازنة مع حقوق الأشخاص المتأثرين.",
        fa: "منافع مشروع قانونی (مانند حفاظت از اموال) پس از ارزیابی حقوق و منافع افراد حاضر."
      },
      {
        text: "C) Heimliche Aufzeichnung von öffentlichen Gehwegen rund um die Uhr.",
        ru: "Скрытая круглосуточная видеозапись общественных тротуаров.",
        en: "Covert 24/7 video recording of public sidewalks.",
        ar: "التسجيل السري لأرصفة المشاة العامة على مدار الساعة.",
        fa: "فیلم‌برداری مخفیانه و شبانه‌روزی از پیاده‌روهای عمومی."
      },
      {
        text: "D) Festgelegte Löschfristen für die Videodateien (in der Regel spätestens nach 72 Stunden).",
        ru: "Установленные сроки удаления видеозаписей (как правило, не позднее 72 часов).",
        en: "Defined deletion deadlines for video footage (typically within 72 hours max).",
        ar: "مواعيد محددة لحذف التسجيلات (عادة خلال 72 ساعة كحد أقصى).",
        fa: "مهلت‌های مشخص برای حذف فایل‌های ویدیویی (معمولاً حداکثر ظرف ۷۲ ساعت)."
      }
    ],
    korrekteAntworten: [0, 1, 3],
    punkte: 2,
    erklaerung: "Erklärung: Videoüberwachung erfordert Transparenz (Schilder), Abwägung berechtigter Interessen und zeitnahe Löschung. Heimliche Überwachung öffentlichen Raums ist unzulässig.",
    translations: {
      ru: {
        question: "Какие требования предъявляются к законной эксплуатации системы видеонаблюдения на частной территории предприятия?",
        explanation: "Видеонаблюдение требует прозрачности (таблички), баланса законных интересов и своевременного удаления записей. Скрытая съемка общественных мест запрещена."
      },
      en: {
        question: "Which requirements apply to the lawful operation of a video surveillance system on private commercial property?",
        explanation: "Video surveillance requires transparency (warning signs), balancing of legitimate interests, and prompt deletion. Covert recording of public spaces is impermissible."
      },
      ar: {
        question: "ما هي المتطلبات القانونية لتشغيل نظام المراقبة بالكاميرات في مقر عمل تجاري خاص؟",
        explanation: "تتطلب المراقبة الشفافية (لوحات التحذير)، والموازنة بين المصالح المشروعة، والحذف السريع للبيانات. يمنع التصوير السري للمساحات العامة."
      },
      fa: {
        question: "چه الزاماتی برای راه‌اندازی قانونی سیستم نظارت تصویری در محوطه خصوصی شرکت وجود دارد؟",
        explanation: "نظارت ویدیویی نیازمند شفافیت (تابلو)، توازن منافع مشروع و حذف سریع فیلم‌ها است. تصویربرداری مخفی از فضای عمومی غیرقانونی است."
      }
    }
  }),

  // 9. Umgang mit Waffen (wq-waffen-1 .. wq-waffen-10)
  makeQuestion({
    id: "wq-waffen-1",
    kategorie: "Umgang mit Waffen",
    frage: "Grundsatz des Waffengesetzes (§ 1 WaffG)\nWelchen Hauptzweck verfolgt das Waffengesetz bei der Regulierung von Schusswaffen und Munition?",
    optionsData: [
      {
        text: "A) Den uneingeschränkten Erwerb von Waffen für alle Bürger zu fördern.",
        ru: "Способствовать неограниченному приобретению оружия всеми гражданами.",
        en: "To promote unrestricted acquisition of weapons for all citizens.",
        ar: "تشجيع الشراء غير المقيد للأسلحة لجميع المواطنين.",
        fa: "ترویج خرید بدون محدودیت اسلحه برای تمام شهروندان."
      },
      {
        text: "B) Den Schutz der öffentlichen Sicherheit und Ordnung durch streng reglementierten Umgang mit Waffen zu gewährleisten.",
        ru: "Обеспечить защиту общественной безопасности и порядка посредством строгого регулирования оборота оружия.",
        en: "To safeguard public safety and order through strictly regulated handling of weapons.",
        ar: "ضمان حماية الأمن والنظام العام من خلال التنظيم الصارم لتداول الأسلحة.",
        fa: "تضمین حفاظت از امنیت و نظم عمومی از طریق نظارت و مقررات سخت‌گیرانه بر کاربرد سلاح."
      },
      {
        text: "C) Den Export von Sportwaffen ins Ausland zu verdoppeln.",
        ru: "Удвоить экспорт спортивного оружия за рубеж.",
        en: "To double the export of sporting weapons abroad.",
        ar: "مضاعفة تصدير الأسلحة الرياضية إلى الخارج.",
        fa: "دو برابر کردن صادرات سلاح‌های ورزشی به خارج از کشور."
      },
      {
        text: "D) Die Überwachung von Spielzeugwaffen in Kindertagesstätten.",
        ru: "Контроль игрушечного оружия в детских садах.",
        en: "Monitoring toy weapons in daycares.",
        ar: "مراقبة الأسلحة البلاستيكية وألعاب الأطفال في رياض الأطفال.",
        fa: "نظارت بر اسباب‌بازی‌های طرح سلاح در مهدکودک‌ها."
      }
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: "Erklärung: Das Waffengesetz dient dem Schutz der Allgemeinheit vor den Gefahren durch Waffen.\nPraxistipp für den Dienst: Der Umgang mit Waffen ist grundsätzlich verboten, außer das Gesetz erlaubt es ausdrücklich.",
    translations: {
      ru: {
        question: "Принцип Закона об оружии (§ 1 WaffG): Какую главную цель преследует Закон об оружии при регулировании огнестрельного оружия и боеприпасов?",
        explanation: "Закон об оружии служит защите общества от опасностей, связанных с оружием. Оборот оружия в принципе запрещен, кроме случаев прямого разрешения законом."
      },
      en: {
        question: "Principle of the Weapons Act (§ 1 WaffG): What main purpose does the Weapons Act pursue in regulating firearms and ammunition?",
        explanation: "The Weapons Act serves to protect the general public from dangers posed by weapons. Handling weapons is strictly prohibited unless explicitly permitted by law."
      },
      ar: {
        question: "مبدأ قانون الأسلحة (§ 1 WaffG): ما هو الهدف الرئيسي لقانون الأسلحة في تنظيم الأسلحة النارية والذخائر؟",
        explanation: "يهدف قانون الأسلحة لحماية المجتمع من مخاطر الأسلحة. التعامل مع الأسلحة محظور أساساً إلا إذا سمح القانون بذلك صراحة."
      },
      fa: {
        question: "اصل قانون سلاح (§ 1 WaffG): هدف اصلی قانون سلاح در تنظیم مقررات مربوط به سلاح‌های گرم و مهمات چیست؟",
        explanation: "قانون سلاح برای محافظت از جامعه در برابر خطرات اسلحه وضع شده است. حمل و کار با سلاح اصولاً ممنوع است مگر اینکه قانون صریحاً اجازه داده باشد."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-2",
    kategorie: "Umgang mit Waffen",
    frage: "Begriff des Führens einer Waffe (§ 1 Abs. 4 WaffG)\nWann \"führt\" eine Sicherheitskraft eine Schusswaffe im Sinne des Waffengesetzes?",
    optionsData: [
      {
        text: "A) Wenn sie die tatsächliche Gewalt über die Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des befriedeten Besitztums ausübt.",
        ru: "Когда она осуществляет фактическую власть над оружием вне собственного жилья, служебных помещений или огороженного владения.",
        en: "When exercising actual physical control over the weapon outside one's own home, business premises, or fenced property.",
        ar: "عند ممارسة السيطرة الفعلية على السلاح خارج المسكن الخاص أو مقار العمل أو الملكية المحاطة بسياج.",
        fa: "هنگامی که تسلط فیزیکی و واقعی بر سلاح را در خارج از منزل شخصی، محل کار یا ملک محصور اعمال کند."
      },
      {
        text: "B) Wenn die Waffe zerlegt und gereinigt im betrieblichen Tresor liegt.",
        ru: "Когда оружие в разобранном и почищенном виде лежит в сейфе компании.",
        en: "When the weapon is disassembled and cleaned inside the company safe.",
        ar: "عندما يكون السلاح مفككاً ونظيفاً داخل خزنة الشركة المقفلة.",
        fa: "هنگامی که سلاح به صورت قطعات باز شده در گاوصندوق شرکت قرار دارد."
      },
      {
        text: "C) Wenn die Waffe verpackt im Koffer von der Behörde nach Hause transportiert wird.",
        ru: "Когда оружие в упакованном чемодане перевозится из ведомства домой.",
        en: "When the weapon is transported packaged in a case from the authority to home.",
        ar: "عند نقل السلاح مغلقاً ومغلفاً في حقيبة من الدائرة الحكومية إلى المنزل.",
        fa: "هنگامی که سلاح در چمدان بسته از اداره به خانه حمل می‌شود."
      },
      {
        text: "D) Nur dann, wenn die Waffe abgefeuert wird.",
        ru: "Только тогда, когда из оружия производится выстрел.",
        en: "Only when the weapon is actively fired.",
        ar: "فقط عندما يتم إطلاق النار من السلاح.",
        fa: "تنها زمانی که با اسلحه شلیک شود."
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Führen bedeutet die Ausübung der tatsächlichen Gewalt außerhalb befriedeter eigener Bereiche.\nPraxistipp für den Dienst: Auch das Tragen im Holster am Koppelschloss im Dienst gilt rechtlich als Führen!",
    translations: {
      ru: {
        question: "Понятие «ношение оружия» (§ 1 абз. 4 WaffG): Когда охранник «носит» (führt) огнестрельное оружие по смыслу Закона об оружии?",
        explanation: "Ношение означает фактическое обладание оружием за пределами своего огороженного владения. Ношение в кобуре на ремне юридически считается ношением!"
      },
      en: {
        question: "Concept of 'Carrying a weapon' (§ 1 (4) WaffG): When does a security guard 'carry' (führen) a firearm under the Weapons Act?",
        explanation: "Carrying means exercising physical control outside one's own enclosed property. Holstered carrying on duty legally constitutes carrying!"
      },
      ar: {
        question: "مفهوم «حمل السلاح» (§ 1 بند 4 WaffG): متى يُعتبر حارس الأمن «حاملاً» (führt) للسلاح الناري بموجب قانون الأسلحة؟",
        explanation: "الحمل يعني السيطرة المادية على السلاح خارج الأماكن المحصورة الخاصة. ووضع السلاح في الجراب بالخدمة يعتبر حملاً قانونياً!"
      },
      fa: {
        question: "مفهوم «حمل سلاح» (§ 1 بند 4 WaffG): چه زمانی یک نیروی امنیتی از نظر قانون اسلحه اقدام به «حمل» (Führen) سلاح گرم می‌کند؟",
        explanation: "حمل سلاح یعنی اعمال تسلط فیزیکی خارج از املاک محصور شخصی. قرار دادن سلاح در غلاف کمری در حین خدمت قانوناً حمل سلاح محسوب می‌شود!"
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-3",
    kategorie: "Umgang mit Waffen",
    frage: "Erwerb und Besitz von Dienstwaffen (§ 19 WaffG)\nWer ist bei bewaffneten Bewachungsaufgaben rechtlich der Inhaber der Waffenbesitzkarte (WBK) für die Dienstwaffen?",
    optionsData: [
      {
        text: "A) Der einzelne Sicherheitsmitarbeiter persönlich.",
        ru: "Отдельный сотрудник охраны лично.",
        en: "The individual security employee personally.",
        ar: "موظف الأمن الفردي بصفته الشخصية.",
        fa: "شخص نیروی امنیتی به صورت انفرادی."
      },
      {
        text: "B) Das Bewachungsunternehmen (Arbeitgeber).",
        ru: "Охранное предприятие (работодатель).",
        en: "The security guarding enterprise (employer).",
        ar: "شركة الحراسة والأمن (صاحب العمل).",
        fa: "شرکت خدمات امنیتی و حراست (کارفرما)."
      },
      {
        text: "C) Der Auftraggeber des Schutzobjekts.",
        ru: "Заказчик охраны объекта.",
        en: "The client owning the protected site.",
        ar: "العميل صاحب الموقع المحروس.",
        fa: "کارفرما و سفارش‌دهنده حفاظت از محل."
      },
      {
        text: "D) Die örtliche Polizei.",
        ru: "Местное отделение полиции.",
        en: "The local police department.",
        ar: "جهاز الشرطة المحلي.",
        fa: "پلیس محلی."
      }
    ],
    korrekteAntworten: [1],
    punkte: 1,
    erklaerung: "Erklärung: Das Unternehmen erhält die waffenrechtliche Erlaubnis zur Anschaffung und Überlassung an Mitarbeiter.\nPraxistipp für den Dienst: Du nutzt die Dienstwaffe nur im Rahmen des konkreten Dienstauftrags deines Arbeitgebers!",
    translations: {
      ru: {
        question: "Приобретение и владение служебным оружием (§ 19 WaffG): Кто юридически является владельцем карты владения оружием (WBK) для служебного оружия?",
        explanation: "Предприятие получает разрешение на приобретение оружия и выдает его сотрудникам на время выполнения служебных обязанностей."
      },
      en: {
        question: "Acquisition and possession of service weapons (§ 19 WaffG): Who is legally the holder of the Weapons Possession Card (WBK) for service firearms in armed guarding duties?",
        explanation: "The company holds the weapons permit to purchase and assign weapons to qualified guards for specific duty assignments."
      },
      ar: {
        question: "اقتناء وحيازة أسلحة الخدمة (§ 19 WaffG): من هو صاحب بطاقة حيازة السلاح (WBK) قانوناً لأسلحة الخدمة في الحراسة المسلحة؟",
        explanation: "تحصل الشركة على التصريح لاقتناء السلاح وتسليمه للموظفين أثناء أداء مهام الخدمة المحددة فقط."
      },
      fa: {
        question: "خرید و تملک سلاح سازمانی (§ 19 WaffG): در مأموریت‌های حراست مسلحانه، چه کسی قانوناً دارنده کارت مالکیت سلاح (WBK) است؟",
        explanation: "شرکت امنیتی مجوز قانونی خرید و واگذاری سلاح به کارمندان را برای مأموریت کاری دریافت می‌کند."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-4",
    kategorie: "Umgang mit Waffen",
    frage: "Erforderliche Eignung und Zuverlässigkeit (§§ 5, 6 WaffG)\nWelche Personen besitzen in der Regel NICHT die erforderliche Zuverlässigkeit oder Eignung zum Führen einer Waffe?",
    optionsData: [
      {
        text: "A) Personen, die wegen einer vorsätzlichen Straftat zu einer Strafe von mindestens 60 Tagessätzen verurteilt wurden.",
        ru: "Лица, осужденные за умышленное преступление к наказанию не менее 60 дневных ставок (Tagessätze).",
        en: "Persons convicted of an intentional crime with a penalty of at least 60 daily fine rates (Tagessätze).",
        ar: "الأشخاص المحكوم عليهم في جريمة عمدية بعقوبة لا تقل عن 60 غرامة يومية (Tagessätze).",
        fa: "افرادی که به دلیل جرم عمدی به حداقل ۶۰ نرخ جریمه روزانه (Tagessätze) محکوم شده‌اند."
      },
      {
        text: "B) Personen, die alkohol- oder drogenabhängig sind.",
        ru: "Лица с алкогольной или наркотической зависимостью.",
        en: "Persons who are alcohol- or drug-dependent.",
        ar: "الأشخاص المدمنون على الكحول أو المخدرات.",
        fa: "افرادی که به الکل یا مواد مخدر اعتیاد دارند."
      },
      {
        text: "C) Personen, die noch nie einen Führerschein besessen haben.",
        ru: "Лица, которые никогда не имели водительских прав.",
        en: "Persons who have never held a driver's license.",
        ar: "الأشخاص الذين لم يحصلوا على رخصة قيادة سيارة من قبل.",
        fa: "افرادی که هرگز گواهینامه رانندگی نداشته‌اند."
      },
      {
        text: "D) Personen, die im Schützenverein Mitglied sind.",
        ru: "Лица, являющиеся членами стрелкового клуба.",
        en: "Persons who are members of a shooting club.",
        ar: "الأشخاص الأعضاء في نوادي الرماية الرياضية.",
        fa: "افرادی که در باشگاه تیراندازی عضویت دارند."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Vorstrafen ab 60 Tagessätzen sowie Suchterkrankungen schließen die waffenrechtliche Eignung/Zuverlässigkeit aus.\nPraxistipp für den Dienst: Alkoholeinfluss im Dienst führt zum sofortigen Verlust der waffenrechtlichen Zuverlässigkeit.",
    translations: {
      ru: {
        question: "Необходимая пригодность и благонадежность (§§ 5, 6 WaffG): Какие лица, как правило, НЕ обладают необходимой благонадежностью или пригодностью для ношения оружия?",
        explanation: "Судимости от 60 ставок и зависимости исключают пригодность/благонадежность для владения и ношения оружия."
      },
      en: {
        question: "Required suitability and reliability (§§ 5, 6 WaffG): Which persons generally do NOT possess the required reliability or personal suitability to carry a weapon?",
        explanation: "Criminal convictions of 60+ day-fines and addiction disorders negate weapons law reliability and suitability."
      },
      ar: {
        question: "الأهلية والموثوقية المطلوبة (§§ 5, 6 WaffG): أي الأشخاص يعتبرون عادة غير مستوفين لشرط الموثوقية أو الأهلية لحمل السلاح؟",
        explanation: "الأحكام الجنائية من 60 غرامة يومية فأكثر وحالات الإدمان تسقط الأهلية والموثوقية لحمل السلاح فوراً."
      },
      fa: {
        question: "صلاحیت فردی و حسن سابقه لازم (§§ 5, 6 WaffG): کدام افراد اصولاً فاقد صلاحیت یا حسن سابقه لازم برای حمل سلاح هستند؟",
        explanation: "محکومیت‌های کیفری بیش از ۶۰ روز جریمه و بیماری‌های اعتیاد، صلاحیت و حسن سابقه قانونی را سلب می‌کنند."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-5",
    kategorie: "Umgang mit Waffen",
    frage: "Schusswaffengebrauch nach DGUV Vorschrift 23\nWelche Vorgabe macht die DGUV Vorschrift 23 bezüglich der Bereitstellung von Dienstwaffen durch den Arbeitgeber?",
    optionsData: [
      {
        text: "A) Schusswaffen und Munition müssen vom Bewachungsunternehmen gestellt werden.",
        ru: "Огнестрельное оружие и боеприпасы должны предоставляться охранным предприятием.",
        en: "Firearms and ammunition must be provided by the security guarding enterprise.",
        ar: "يجب توفير الأسلحة النارية والذخيرة من قبل شركة الحراسة المشغلة.",
        fa: "سلاح گرم و مهمات باید توسط شرکت حراست تأمین و ارائه شود."
      },
      {
        text: "B) Der Mitarbeiter muss vom Arbeitgeber schriftlich für den bewaffneten Dienst angewiesen und unterwiesen sein.",
        ru: "Сотрудник должен получить письменное распоряжение и пройти инструктаж работодателя для вооруженной службы.",
        en: "The employee must be instructed and assigned in writing by the employer for armed duty.",
        ar: "يجب تكليف الموظف خطياً وتدريبه وإرشاده من قبل صاحب العمل للخدمة المسلحة.",
        fa: "کارمند باید به صورت کتبی توسط کارفرما برای خدمت مسلحانه مأمور و آموزش دیده باشد."
      },
      {
        text: "C) Der Mitarbeiter darf seine private Jagdwaffe im Dienst tragen.",
        ru: "Сотрудник имеет право носить на службе личное охотничье оружие.",
        en: "The employee may carry their private hunting weapon on duty.",
        ar: "يجوز للموظف حمل سلاح الصيد الخاص به أثناء الخدمة.",
        fa: "کارمند می‌تواند از اسلحه شکاری شخصی خود در حین خدمت استفاده کند."
      },
      {
        text: "D) Eine mündliche Absprache auf der Baustelle reicht aus.",
        ru: "Достаточно устной договоренности на стройплощадке.",
        en: "A verbal agreement on the construction site is sufficient.",
        ar: "يكفي الاتفاق الشفهي البسيط في موقع العمل.",
        fa: "یک توافق شفاهی در محل کار کفایت می‌کند."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Private Waffen sind im Dienst verboten. Waffe, Munition und schriftliche Unterweisung müssen vom Betrieb stammen.\nPraxistipp für den Dienst: Trage niemals eine private Waffe im Dienst – das verstößt gegen UVV und Waffengesetz!",
    translations: {
      ru: {
        question: "Применение огнестрельного оружия согласно Правилу DGUV 23: Какое требование устанавливает DGUV 23 в отношении предоставления служебного оружия работодателем?",
        explanation: "Личное оружие на службе запрещено. Оружие, патроны и письменный инструктаж должны исходить от предприятия."
      },
      en: {
        question: "Use of firearms under DGUV Regulation 23: What stipulation does DGUV Regulation 23 make regarding the provision of service weapons by the employer?",
        explanation: "Private weapons are prohibited on duty. Weapon, ammunition, and written instructions must be provided by the company."
      },
      ar: {
        question: "استخدام الأسلحة النارية بموجب لائحة DGUV Vorschrift 23: ما هي الشروط التي تفرضها اللائحة بشأن توفير أسلحة الخدمة من صاحب العمل؟",
        explanation: "يمنع استخدام الأسلحة الخاصة بالخدمة. يجب توفير السلاح والذخيرة والتعليمات الخطية من قبل الشركة حصراً."
      },
      fa: {
        question: "کاربرد سلاح گرم طبق مقررات DGUV Vorschrift 23: این مقررات چه الزامی در خصوص ارائه سلاح سازمانی توسط کارفرما تعیین می‌کند؟",
        explanation: "استفاده از اسلحه شخصی در خدمت ممنوع است. اسلحه، مهمات و آموزش کتبی باید توسط شرکت کارفرما ارائه شود."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-6",
    kategorie: "Umgang mit Waffen",
    frage: "Aufbewahrung von Waffen und Munition (§ 36 WaffG)\nWie müssen Dienstwaffen und Munition nach Dienstende im Betrieb aufbewahrt werden?",
    optionsData: [
      {
        text: "A) In zertifizierten Waffenschränken nach den gesetzlichen Normen (z. B. DIN/EN 1143-1).",
        ru: "В сертифицированных оружейных сейфах согласно установленным законом стандартам (например, DIN/EN 1143-1).",
        en: "In certified gun safes complying with statutory standards (e.g. DIN/EN 1143-1).",
        ar: "في خزائن أسلحة معتمدة ومطابقة للمواصفات القانونية (مثل DIN/EN 1143-1).",
        fa: "در گاوصندوق‌های استاندارد اسلحه مطابق با استانداردهای قانونی (مانند DIN/EN 1143-1)."
      },
      {
        text: "B) So, dass unbefugte Dritte (z. B. Reinigungskräfte, Besucher) keinen Zugriff darauf haben.",
        ru: "Таким образом, чтобы посторонние лица (например, уборщики, посетители) не имели к ним доступа.",
        en: "In a manner ensuring unauthorized third parties (e.g. cleaning staff, visitors) have no access.",
        ar: "بحيث لا يمكن لأي طرف ثالث غير مصرح له (مثل عمال النظافة أو الزوار) الوصول إليها.",
        fa: "به نحوی که اشخاص ثالث غیرمجاز (مانند پرسنل نظافت، مراجعان) به آن دسترسی نداشته باشند."
      },
      {
        text: "C) Ungeladen in einer unverschlossenen Schreibtischschublade.",
        ru: "В незаряженном виде в незапертом ящике письменного стола.",
        en: "Unloaded in an unlocked desk drawer.",
        ar: "غير محشوة بالرصاص في درج مكتب مفتوح بدون قفل.",
        fa: "بدون فشنگ در کشوی قفل‌نشده میز تحریر."
      },
      {
        text: "D) Im Handschuhfach des unverschlossenen Streifenwagens.",
        ru: "В бардачке незапертого патрульного автомобиля.",
        en: "In the glove compartment of an unlocked patrol car.",
        ar: "في درج السيارة غير المقفلة لدورية الحراسة.",
        fa: "در داشبورد خودروی گشت قفل‌نشده."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Gesetz und UVV verlangen die gesicherte Trennung und Aufbewahrung in zertifizierten Behältnissen.\nPraxistipp für den Dienst: Nach Dienstende gehört die Waffe sofort in den Tresor der Dienststelle.",
    translations: {
      ru: {
        question: "Хранение оружия и боеприпасов (§ 36 WaffG): Как должны храниться служебное оружие и боеприпасы на предприятии после окончания смены?",
        explanation: "Закон и нормы техники безопасности требуют раздельного и надежного хранения в сертифицированных оружейных сейфах."
      },
      en: {
        question: "Storage of weapons and ammunition (§ 36 WaffG): How must service weapons and ammunition be stored at the enterprise after shift end?",
        explanation: "Law and accident prevention rules mandate secure storage in certified gun safes inaccessible to unauthorized persons."
      },
      ar: {
        question: "حفظ الأسلحة والذخائر (§ 36 WaffG): كيف يجب حفظ أسلحة الخدمة والذخيرة في مقر العمل بعد انتهاء نوبة الحراسة؟",
        explanation: "يفرض القانون ولوائح السلامة حفظ الأسلحة في خزائن معتمدة مقفلة لمنع وصول أي طرف غير مصرح له."
      },
      fa: {
        question: "نگهداری سلاح و مهمات (§ 36 WaffG): سلاح سازمانی و مهمات پس از پایان نوبت کاری چگونه باید در شرکت نگهداری شوند؟",
        explanation: "قانون و مقررات ایمنی نگهداری امن در گاوصندوق‌های ضدسرقت استاندارد و غیرقابل دسترس برای افراد متفرقه را الزامی می‌دانند."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-7",
    kategorie: "Umgang mit Waffen",
    frage: "Notwehr mit der Schusswaffe (§ 32 StGB)\nWelche Anforderung gilt für den Einsatz der Schusswaffe zur Abwehr eines Angriffs im Rahmen der Notwehr?",
    optionsData: [
      {
        text: "A) Der Schusswaffengebrauch muss das erforderlich mildeste Mittel zur Abwehr eines lebensgefährlichen Angriffs sein.",
        ru: "Применение огнестрельного оружия должно быть наименее жестким из эффективных средств отражения опасного для жизни нападения.",
        en: "The use of firearms must be the mildest effective means to repel a life-threatening attack.",
        ar: "يجب أن يكون استخدام السلاح الناري أخف وسيلة فعالة ممكنة لصد اعتداء مهدد للحياة.",
        fa: "استفاده از اسلحه گرم باید خفیف‌ترین وسیله مؤثر برای دفع حمله تهدیدکننده جان باشد."
      },
      {
        text: "B) Die Schusswaffe darf bei jeder einfachen Sachbeschädigung sofort eingesetzt werden.",
        ru: "Огнестрельное оружие разрешено применять немедленно при любом простом повреждении имущества.",
        en: "The firearm may be used immediately upon any simple damage to property.",
        ar: "يجوز استخدام السلاح الناري فوراً عند حدوث أي إتلاف بسيط للممتلكات.",
        fa: "اسلحه گرم را می‌توان در هر آسیب ساده به اموال فوراً شلیک کرد."
      },
      {
        text: "C) Ein Warnschuss ist gesetzlich unter allen Umständen verboten.",
        ru: "Предупредительный выстрел запрещен законом при любых обстоятельствах.",
        en: "A warning shot is legally prohibited under all circumstances.",
        ar: "طلقة التحذير ممنوعة قانوناً تحت أي ظرف كان.",
        fa: "شلیک تیر هوایی هشداردهنده در هر شرایطی قانوناً ممنوع است."
      },
      {
        text: "D) Schusswaffen dürfen nur gegen Sachen gerichtet werden.",
        ru: "Огнестрельное оружие разрешено направлять только против неодушевленных предметов.",
        en: "Firearms may only be directed against inanimate objects.",
        ar: "يجوز توجيه السلاح الناري نحو الأشياء والممتلكات فقط.",
        fa: "اسلحه گرم فقط مجاز است به سمت اشیاء نشانه گرفته شود."
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Der Schusswaffengebrauch ist das letzte Mittel (Ultima Ratio) bei lebensbedrohlichen Angriffen.\nPraxistipp für den Dienst: Wenn Androhung oder mildere Mittel ausreichen, ist der Schusswaffengebrauch rechtswidrig!",
    translations: {
      ru: {
        question: "Необходимая оборона с огнестрельным оружием (§ 32 StGB): Какое требование предъявляется к применению огнестрельного оружия для отражения нападения в рамках самообороны?",
        explanation: "Применение оружия — крайняя мера (Ultima Ratio) при смертельной угрозе. Если достаточно предупреждения или более мягких мер, стрельба противоправна."
      },
      en: {
        question: "Self-defense with a firearm (§ 32 StGB): What requirement applies to using a firearm to repel an attack within self-defense?",
        explanation: "Firearm use is the absolute last resort (Ultima Ratio) in life-threatening attacks. If milder means suffice, shooting is unlawful."
      },
      ar: {
        question: "الدفاع الشرعي بالسلاح الناري (§ 32 StGB): ما هو الشرط الواجب لتطبيق استخدام السلاح الناري لصد اعتداء في إطار الدفاع الشرعي؟",
        explanation: "استخدام السلاح هو الملاذ الأخير (Ultima Ratio) في الاعتداءات المهددة للحياة. وإذا كفت الوسائل الأخف، فإن إطلاق النار يعد غير قانوني."
      },
      fa: {
        question: "دفاع مشروع با سلاح گرم (§ 32 StGB): چه شرطی برای کاربرد اسلحه گرم جهت دفع حمله در چارچوب دفاع مشروع اعمال می‌شود؟",
        explanation: "استفاده از اسلحه گرم آخرین راهکار (Ultima Ratio) در حملات تهدیدکننده حیات است. اگر هشدار یا ابزار خفیف‌تری کافی باشد، شلیک غیرقانونی است."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-8",
    kategorie: "Umgang mit Waffen",
    frage: "Kleiner Waffenschein\nFür welche Waffenarten wird zum Führen in der Öffentlichkeit der \"Kleine Waffenschein\" benötigt?",
    optionsData: [
      {
        text: "A) Schreckschusswaffen mit PTB-Zeichen im Kreis.",
        ru: "Шумовое / холостое сигнальное оружие со знаком PTB в круге.",
        en: "Blank-firing / alarm weapons bearing the PTB mark in a circle.",
        ar: "أسلحة الصوت والإنذار (Schreckschusswaffen) التي تحمل علامة PTB داخل دائرة.",
        fa: "سلاح‌های صوتی و ترقه‌ای هشداردهنده دارای علامت PTB داخل دایره."
      },
      {
        text: "B) Reizstoffwaffen mit PTB-Zeichen im Kreis.",
        ru: "Газовое оружие раздражающего действия со знаком PTB в круге.",
        en: "Gas/irritant weapons bearing the PTB mark in a circle.",
        ar: "أسلحة الغاز المهيج الحاملة لرمز PTB داخل دائرة.",
        fa: "سلاح‌های پرتاب‌کننده گاز اشک‌آور و تحریک‌کننده دارای علامت PTB داخل دایره."
      },
      {
        text: "C) Scharfe Dienstpistolen im Geldtransport.",
        ru: "Боевые служебные пистолеты при инкассации.",
        en: "Live-ammunition service handguns in cash-in-transit.",
        ar: "المسدسات الحية المعبأة بالرصاص الحي في نقل الأموال.",
        fa: "تپانچه‌های جنگی حامل تیر جنگی در خودروهای حمل پول."
      },
      {
        text: "D) Tierabwehrsprays.",
        ru: "Спреи для защиты от животных.",
        en: "Animal deterrent sprays.",
        ar: "بخاخات صد الحيوانات المفترسة.",
        fa: "اسپری‌های دفاع در برابر حیوانات."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Das Führen von PTB-Gas- und Schreckschusswaffen erfordert den Kleinen Waffenschein.\nPraxistipp für den Dienst: Ohne Kleinen Waffenschein ist das Führen von Schreckschusswaffen eine Straftat.",
    translations: {
      ru: {
        question: "Малое разрешение на ношение оружия (Kleiner Waffenschein): Для каких видов оружия требуется «Kleiner Waffenschein» для ношения в общественных местах?",
        explanation: "Для открытого ношения газового и сигнального оружия со знаком PTB в общественных местах обязательно требуется Малое разрешение на оружие."
      },
      en: {
        question: "Small Weapons Permit (Kleiner Waffenschein): For which weapon types is the 'Kleiner Waffenschein' required to carry in public?",
        explanation: "Carrying PTB gas and alarm guns in public requires the Small Weapons Permit. Carrying without it constitutes a criminal offense."
      },
      ar: {
        question: "رخصة السلاح الصغيرة (Kleiner Waffenschein): لأي أنواع الأسلحة يلزم الحصول على هذه الرخصة لحملها في الأماكن العامة؟",
        explanation: "حمل أسلحة الصوت والغاز الحاملة لعلامة PTB يتطلب رخصة السلاح الصغيرة. حملها بدون ترخيص جريمة يعاقب عليها القانون."
      },
      fa: {
        question: "مجوز کوچک حمل سلاح (Kleiner Waffenschein): برای حمل کدام نوع سلاح‌ها در اماکن عمومی نیاز به این مجوز است؟",
        explanation: "حمل سلاح‌های صوتی و گازی دارای نشان PTB در ملأ عام نیازمند مجوز کوچک سلاح است و بدون آن جرم کیفری محسوب می‌شود."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-9",
    kategorie: "Umgang mit Waffen",
    frage: "Verbotene Waffen nach Anlage 2 WaffG\nWelche der folgenden Gegenstände sind nach dem Waffengesetz in Deutschland absolut verboten?",
    optionsData: [
      {
        text: "A) Schlagringe.",
        ru: "Кастеты.",
        en: "Brass knuckles.",
        ar: "القبضات الحديدية (Schlagringe).",
        fa: "پنجه‌بکس‌های فلزی."
      },
      {
        text: "B) Butterflymesser.",
        ru: "Ножи-бабочки (балисонги).",
        en: "Butterfly knives (balisongs).",
        ar: "سكاكين الفراشة (Butterflymesser).",
        fa: "چاقوهای پروانه‌ای (Butterfly)."
      },
      {
        text: "C) Pfeffersprays mit Kennzeichnung \"Tierabwehrspray\".",
        ru: "Перцовые баллончики с маркировкой «Tierabwehrspray» (средство защиты от животных).",
        en: "Pepper sprays labeled specifically as 'Animal Deterrent Spray' (Tierabwehrspray).",
        ar: "بخاخات الفلفل المصنفة رسمياً كـ «بخاخ لصد الحيوانات».",
        fa: "اسپری‌های فلفل با برچسب مشخص «اسپری دفاع در برابر حیوانات»."
      },
      {
        text: "D) Taschenlampen mit Metallgehäuse.",
        ru: "Фонари с металлическим корпусом.",
        en: "Flashlights with metallic casing.",
        ar: "المصابيح اليدوية ذات الهيكل المعدني.",
        fa: "چراغ‌قوه‌های دستی با بدنه فلزی."
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: "Erklärung: Schlagringe und Butterflymesser sind verbotene Gegenstände laut WaffG.\nPraxistipp für den Dienst: Der Besitz verbotener Waffen ist eine Straftat, keine bloße Ordnungswidrigkeit.",
    translations: {
      ru: {
        question: "Запрещенное оружие согласно Приложению 2 Закона об оружии: Какие из следующих предметов абсолютно запрещены законом об оружии в Германии?",
        explanation: "Кастеты и ножи-бабочки являются абсолютно запрещенными предметами по Приложению 2 WaffG. Владение ими является уголовным преступлением."
      },
      en: {
        question: "Prohibited weapons under Annex 2 Weapons Act: Which of the following items are strictly prohibited by weapons law in Germany?",
        explanation: "Brass knuckles and butterfly knives are strictly prohibited weapons. Possession constitutes a criminal offense."
      },
      ar: {
        question: "الأسلحة المحظورة بموجب الملحق 2 لقانون الأسلحة: أي من الأدوات التالية محظورة تماماً بحكم القانون في ألمانيا؟",
        explanation: "القبضات الحديدية وسكاكين الفراشة أسلحة محظورة قطعياً. حيازتها تعتبر جريمة جنائية وليست مجرد مخالفة."
      },
      fa: {
        question: "سلاح‌های ممنوعه بر اساس پیوست ۲ قانون سلاح: کدام یک از موارد زیر بر اساس قانون سلاح در آلمان کاملاً ممنوع هستند؟",
        explanation: "پنجه‌بکس و چاقوی پروانه‌ای بر اساس قانون اسلحه کاملاً ممنوع هستند و نگهداری آن‌ها جرم کیفری است."
      }
    }
  }),

  makeQuestion({
    id: "wq-waffen-10",
    kategorie: "Umgang mit Waffen",
    frage: "Transport von Waffen\nWie wird eine Schusswaffe ordnungsgemäß transportiert, ohne dass dies als \"Führen\" gilt?",
    optionsData: [
      {
        text: "A) Ungeladen und in einem verschlossenen Behältnis (z. B. verschlossener Koffer).",
        ru: "В незаряженном виде и в закрытом на замок контейнере (например, чемодане с замком).",
        en: "Unloaded and in a locked container (e.g. locked case).",
        ar: "غير محشوة بالرصاص وداخل حقيبة أو حاوية مقفلة بقفل محكم.",
        fa: "بدون فشنگ و در یک محفظه قفل‌شده (مانند چمدان یا کیف قفل‌دار)."
      },
      {
        text: "B) Geladen auf dem Beifahrersitz.",
        ru: "В заряженном виде на переднем пассажирском сиденье.",
        en: "Loaded on the passenger seat.",
        ar: "محشوة بالرصاص على مقعد الراكب الأمامي.",
        fa: "پر از فشنگ روی صندلی شاگرد خودرو."
      },
      {
        text: "C) Griffbereit in der Jackentasche.",
        ru: "Наготове в кармане куртки.",
        en: "Ready to grab in a jacket pocket.",
        ar: "في متناول اليد بسهولة داخل جيب السترة.",
        fa: "در دسترس سریع داخل جیب کاپشن."
      },
      {
        text: "D) Ungeladen im Handschuhfach ohne Schloss.",
        ru: "В незаряженном виде в незапираемом бардачке автомобиля.",
        en: "Unloaded in an unlocked glove compartment.",
        ar: "غير محشوة بالرصاص في درج السيارة غير المقفل.",
        fa: "بدون فشنگ داخل داشبورد بدون قفل."
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: "Erklärung: Nicht zugriffsbereit (verschlossen) und ungeladen gilt die Beförderung als Transport.\nPraxistipp für den Dienst: \"Nicht zugriffsbereit\" bedeutet, dass die Waffe nicht mit wenigen Handgriffen einsatzbereit ist.",
    translations: {
      ru: {
        question: "Транспортировка оружия: Как правильно транспортировать огнестрельное оружие, чтобы это не считалось «ношением» (Führen)?",
        explanation: "Оружие должно быть незаряженным и в запертом футляре/чемодане (не готовым к мгновенному извлечению)."
      },
      en: {
        question: "Transport of weapons: How is a firearm properly transported so that it is not legally considered 'carrying' (Führen)?",
        explanation: "The firearm must be unloaded and inside a locked container, ensuring it is not readily accessible in a few quick steps."
      },
      ar: {
        question: "نقل الأسلحة: كيف يتم نقل السلاح الناري بشكل نظامي دون أن يُعتبر ذلك «حملاً» (Führen) للسلاح؟",
        explanation: "يجب أن يكون السلاح غير ملقم ومحفوظاً داخل حقيبة مقفلة بقفل بحيث لا يكون في متناول اليد فوراً."
      },
      fa: {
        question: "حمل و نقل سلاح: چگونه یک سلاح گرم به صورت قانونی جا‌به‌جا می‌شود بدون اینکه مشمول «حمل سلاح» (Führen) گردد؟",
        explanation: "سلاح باید خالی از فشنگ و در یک کیف قفل‌شده باشد تا با چند حرکت سریع در دسترس نباشد."
      }
    }
  })
];
