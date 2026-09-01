import fs from 'fs';
import { makeQuestion } from './questionHelper.js';

const questions = [
  // 1. Recht der öffentlichen Sicherheit und Ordnung
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
        question: "أي من الصلاحيات التالية متاحة لعنصر الأمن الخاص في الأماکن العامة؟",
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

  // 2. Gewerberecht (GewO / BewachV)
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

  // 3. Bürgerliches Gesetzbuch (BGB)
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
        explanation: "ماده ۲۲۸ خطری را که از خود شیء ناشی می‌شود (مانند سگ مهاجم) دفع می‌کند؛ ماده ۹۰4 برای دفع خطر بزرگتر، از مال بی‌طرف شخص ثالث استفاده می‌کند."
      }
    }
  })
];

console.log(`Prepared ${questions.length} questions.`);
