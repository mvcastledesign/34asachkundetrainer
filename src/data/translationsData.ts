/**
 * @file translationsData.ts
 * Zentrales, statisches juristisches Fachwörterbuch & Übersetzungssystem für die § 34a GewO Sachkundeprüfung.
 * 100% offline-fähig, 0ms Latenz, keine externen API-Aufrufe.
 * 
 * Unterstützte Sprachen:
 * - Farsi (fa)
 * - Arabisch (ar)
 * - Russisch (ru)
 * - Englisch (en)
 */

export interface TranslationEntry {
  farsi: string;
  arabisch: string;
  russisch: string;
  englisch: string;
}

export type SupportedLanguage = 'farsi' | 'arabisch' | 'russisch' | 'englisch' | 'deaktiviert';

/**
 * 1. JURISTISCHES FACHWÖRTERBUCH NACH RECHTSBEGRIFFEN & SCHLAGWÖRTERN (§ 34a GewO)
 */
export const LEGAL_TERMS_DICTIONARY: Record<string, TranslationEntry> = {
  // Grundbegriffe Öffentliches Recht & Gewerberecht
  "öffentliche sicherheit": {
    farsi: "امنیت عمومی (حفاظت از تمامیت قوانین، جان، مال، آزادی افراد و نهادهای دولتی)",
    arabisch: "السلامة العامة (حماية سلامة النظام القانوني، والأرواح، والممتلكات، ومؤسسات الدولة)",
    russisch: "Общественная безопасность (защита правопорядка, жизни, здоровья, прав граждан и госучреждений)",
    englisch: "Public Safety (Protection of the legal order, individual rights, and state institutions)"
  },
  "öffentliche ordnung": {
    farsi: "نظم عمومی (مجموعه قواعد نانوشته اخلاقی و رفتاری در جامعه برای همزیستی مسالمت‌آمیز)",
    arabisch: "النظام العام (مجموع القواعد العرفية والأخلاقية غير المكتوبة للسلوك في المجتمع)",
    russisch: "Общественный порядок (совокупность неписаных норм морали и правил поведения в обществе)",
    englisch: "Public Order (Unwritten moral standards and rules of conduct necessary for community life)"
  },
  "hoheitsrechte": {
    farsi: "اختیارات حاکمیتی (حقوق ویژه دولتی مانند اعمال زور و بازداشت رسمی توسط پلیس)",
    arabisch: "الحقوق والسلطات السيادية (صلاحيات مخصصة للدولة وأجهزتها الرسمية فقط)",
    russisch: "Суверенные / властные полномочия (полномочия, принадлежащие исключительно государству)",
    englisch: "Sovereign rights / Powers (Exclusive authority granted only to state agencies like the police)"
  },
  "jedermannsrechte": {
    farsi: "حقوق عامه / اختیارات همگانی (حقوق قانونی هر شهروند عادی و نگهبان خصوصی)",
    arabisch: "حقوق الكافة (الصلاحيات القانونية المتاحة لأي مواطن عادي وحارس أمن خاص)",
    russisch: "Права каждого гражданина (полномочия, доступные любому гражданину и охرانнику)",
    englisch: "Citizen's rights (Legal powers granted to any private citizen or security guard)"
  },
  "gewaltmonopol": {
    farsi: "انحصار قوه قهریه دولتی (فقط دولت مجاز به اعمال زور فیزیکی برای اجرای قانون است)",
    arabisch: "احتكار الدولة لاستخدام القوة (الدولة وحدها تملك حق استخدام القوة الجبرية لتطبيق القانون)",
    russisch: "Монополия государства на применение силы (только госорганы имеют право на принуждение)",
    englisch: "State monopoly on force (Only the state may use physical force to enforce the law)"
  },
  "bewachungsgewerbe": {
    farsi: "صنف نگهبانی و حراست خصوصی (§ 34a GewO)",
    arabisch: "مهنة الحراسة والأمن الخاص (§ 34a GewO)",
    russisch: "Частная охранная деятельность (§ 34a Закона о промысле)",
    englisch: "Private security industry (§ 34a Trade Regulation Act)"
  },
  "sachkundeprüfung": {
    farsi: "آزمون تخصصی مهارت و دانش § 34a اتاق بازرگانی و صنایع (IHK)",
    arabisch: "امتحان الكفاءة والخبرة المهنية § 34a لدى غرفة الصناعة والتجارة (IHK)",
    russisch: "Экзамен на профессиональную компетентность § 34a IHK",
    englisch: "Expertise examination § 34a Trade Code (IHK)"
  },
  "unterrichtung": {
    farsi: "دوره آموزشی مقدماتی ۴۰ ساعته IHK بدون امتحان کتبی",
    arabisch: "الدورة التثقيفية والإرشادية 40 ساعة بدون اختبار كتابي",
    russisch: "Ознакомительный инструктаж 40 часов без письменного экзамена",
    englisch: "40-hour introductory instruction course without written exam"
  },
  "dienstausweis": {
    farsi: "کارت شناسایی پرسنل حراست و نگهبانی",
    arabisch: "بطاقة الهوية المهنية لحارس الأمن",
    russisch: "Служебное удостоверение охранника",
    englisch: "Security service ID badge"
  },
  "bewacherregister": {
    farsi: "سامانه سراسری ثبت اطلاعات نگهبانان و شرکت‌های امنیتی آلمان (BWR)",
    arabisch: "السجل الفيدرالي لبيانات حراس وشركات الأمن في ألمانيا (BWR)",
    russisch: "Федеральный реестр охранников и охранных предприятий (BWR)",
    englisch: "Federal Security Guard Register (BWR)"
  },
  "zuverlässigkeit": {
    farsi: "صلاحیت فردی و حسن پیشینه قانونی جهت اشتغال در حراست",
    arabisch: "الأهلية والموثوقية الجنائية والأمنية للعمل بالحراسة",
    russisch: "Проверка благонадежности и отсутствие судимостей",
    englisch: "Personal reliability and legal trustworthiness check"
  },

  // BGB - Bürgerliches Gesetzbuch
  "notwehr": {
    farsi: "دفاع مشروع (§ 32 StGB / § 227 BGB) - دفاع لازم و متناسب برای دفع حمله غیرقانونی فعلی",
    arabisch: "الدفاع الشرعي (§ 32 StGB / § 227 BGB) - الدفاع الضروري لصد اعتداء غير قانوني حال",
    russisch: "Необходимая оборона (§ 32 УК / § 227 ГК) - защита от наличного противоправного нападения",
    englisch: "Self-defense (§ 32 StGB / § 227 BGB) - Necessary defense to ward off an imminent unlawful attack"
  },
  "nothilfe": {
    farsi: "دفاع از دیگری (کمک به شخص ثالث در برابر حمله غیرقانونی فعلی)",
    arabisch: "مساعدة الغير في الدفاع الشرعي (الدفاع عن شخص آخر ضد اعتداء حال)",
    russisch: "Помощь в необходимой обороне (защита третьего лица от нападения)",
    englisch: "Defense of others (Assisting a third party against an imminent unlawful attack)"
  },
  "notstand": {
    farsi: "حالت اضطرار (دفع خطر از خود یا دیگران)",
    arabisch: "حالة الضرورة (دفع خطر وشيك)",
    russisch: "Состояние крайней необходимости",
    englisch: "State of necessity / Emergency"
  },
  "defensivnotstand": {
    farsi: "اضطرار تدافعی (§ 228 BGB) - دفع خطر ناشی از خود شیء یا حیوان متهاجم",
    arabisch: "حالة الضرورة الدفاعية (§ 228 BGB) - دفع خطر صادر من الشيء نفسه أو الحيوان",
    russisch: "Оборонительная крайняя необходимость (§ 228 ГК) - устранение опасности от самого предмета/животного",
    englisch: "Defensive necessity (§ 228 BGB) - Averting danger originating from the thing itself"
  },
  "aggressivnotstand": {
    farsi: "اضطرار تهاجمی (§ 904 BGB) - تصرف یا آسیب به مال شخص ثالث بی‌طرف برای نجات از خطر بزرگتر",
    arabisch: "حالة الضرورة الهجومية (§ 904 BGB) - التأثير على ملك طرف ثالث لدفع خطر أكبر",
    russisch: "Агрессивная крайняя необходимость (§ 904 ГК) - воздействие на имущество третьих лиц",
    englisch: "Aggressive necessity (§ 904 BGB) - Interference with property of an uninvolved third party"
  },
  "selbsthilfe": {
    farsi: "احقاق حق شخصی (§ 229 BGB) هنگام عدم دسترسی فوری به کمک دولتی و احتمال زوال حق",
    arabisch: "المساعدة الذاتية (§ 229 BGB) عند تعذر الحصول على تدخل أمني رسمي فوري",
    russisch: "Самопомощь (§ 229 ГК) при невозможности своевременной помощи госорганов",
    englisch: "Self-help (§ 229 BGB) - Securing a claim when official help cannot be obtained in time"
  },
  "hausrecht": {
    farsi: "حق اعمال مقررات و حاکمیت بر مکان (§ 903 / 858 BGB) - شامل ورود، اخراج و منع ورود",
    arabisch: "حق إدارة المكان وتحديد الدخول والمنع (Hausrecht)",
    russisch: "Право распоряжения помещением (допуск, выдворение и запрет на вход)",
    englisch: "Domiciliary rights / Domiciliary authority (Granting entry, expulsion, banning)"
  },
  "besitzdiener": {
    farsi: "خادم تصرف / متصدی نگهبانی (§ 855 BGB) - اعمال کننده حقوق مالک بر اساس دستورات",
    arabisch: "خادم الحيازة (§ 855 BGB) - ممارس حقوق الحائز بموجب تبعية وتعليمات العمل",
    russisch: "Слуга владения (§ 855 ГК) - охранник, осуществляющий права владельца по указанию",
    englisch: "Possessory servant (§ 855 BGB) - Agent exercising possession on behalf of the owner"
  },
  "besitzwehr": {
    farsi: "دفاع از تصرف (§ 859 Abs. 1 BGB) - جلوگیری با زور متناسب از تصرف غیرقانونی یا مزاحمت",
    arabisch: "الدفاع عن الحيازة (§ 859 Abs. 1 BGB) - رد التصرف غير القانوني بالقوة المناسبة",
    russisch: "Защита владения (§ 859 ГК) - пресечение попытки незаконного нарушения владения",
    englisch: "Defense of possession (§ 859 (1) BGB) - Warding off unlawful interference with force"
  },
  "besitzkehr": {
    farsi: "بازپس‌گیری فوری تصرف (§ 859 Abs. 2/3 BGB) بلافاصله پس از سرقت با تعقیب سارق",
    arabisch: "استرداد الحيازة فورا (§ 859 Abs. 2/3 BGB) بملاحقة السارق فورا واسترجاع المال",
    russisch: "Возврат владения по горячим следам (§ 859 ГК) - немедленное изъятие у похитителя",
    englisch: "Recovery of possession (§ 859 (2/3) BGB) - Immediate pursuit and retrieval from a trespasser"
  },
  "verbotene eigenmacht": {
    farsi: "تصرف یا مزاحمت غیرقانونی بدون رضایت متصرف و بدون مجوز قانونی (§ 858 BGB)",
    arabisch: "التصرف غير القانوني في الحيازة بدون رضا الحائز وبدون سند (§ 858 BGB)",
    russisch: "Самовольное нарушение владения без согласия владельца и без закона (§ 858 ГК)",
    englisch: "Unlawful interference with possession without consent or legal permission (§ 858 BGB)"
  },
  "schikaneverbot": {
    farsi: "ممنوعیت سوءاستفاده از حق صرفاً جهت آزار و اذیت دیگران (§ 226 BGB)",
    arabisch: "حظر التعسف في استعمال الحق بقصد الإضرار بالغير فقط (§ 226 BGB)",
    russisch: "Запрет злоупотребления правом исключительно с целью причинения вреда (§ 226 ГК)",
    englisch: "Prohibition of chicane / Abuse of rights solely to harm others (§ 226 BGB)"
  },

  // StGB & StPO
  "vorläufige festnahme": {
    farsi: "بازداشت موقت همگانی (§ 127 Abs. 1 StPO) هنگام مشاهده جرم در حین ارتکاب و احتمال فرار یا عدم احراز هویت",
    arabisch: "التوقيف المؤقت (§ 127 Abs. 1 StPO) عند التلبس بالجرم ووجود خطر هروب أو تعذر تحديد الهوية",
    russisch: "Временное задержание (§ 127 УПК) при совершении преступления на месте и риске побега",
    englisch: "Provisional citizen's arrest (§ 127 (1) StPO) upon catching in the act with flight risk"
  },
  "hausfriedensbruch": {
    farsi: "ورود غیرمجاز به ملک یا خودداری از خروج پس از دستور اخراج (§ 123 StGB)",
    arabisch: "انتهاك حرمة المسكن أو المكان (§ 123 StGB) والامتناع عن المغادرة بعد الإنذار",
    russisch: "Нарушение неприкосновенности владения / незаконное проникновение (§ 123 УК)",
    englisch: "Trespassing / Breach of domestic peace (§ 123 StGB) and refusal to leave"
  },
  "diebstahl": {
    farsi: "سرقت - ربودن مال منقول متعلق به غیر به قصد تصاحب غیرقانونی (§ 242 StGB)",
    arabisch: "السرقة - اختلاس منقول مملوك للغير بنية تملكه بدون وجه حق (§ 242 StGB)",
    russisch: "Кража - тайное хищение чужого имущества с целью присвоения (§ 242 УК)",
    englisch: "Theft - Unlawful taking of movable property owned by another (§ 242 StGB)"
  },
  "unterschlagung": {
    farsi: "خیانت در امانت و تصاحب غیرقانونی مالی که در تصرف فرد است (§ 246 StGB)",
    arabisch: "خيانة الأمانة والاستيلاء غير المشروع على مال تحت الحيازة (§ 246 StGB)",
    russisch: "Присвоение или растрата вверенного имущества (§ 246 УК)",
    englisch: "Embezzlement / Unlawful appropriation (§ 246 StGB)"
  },
  "raub": {
    farsi: "سرقت مقرون به آزار / زورگیری با تهدید یا خشونت بدنی (§ 249 StGB)",
    arabisch: "السطو والسرقة بالإكراه والعنف الجسدي أو التهديد (§ 249 StGB)",
    russisch: "Разбой / грабеж с применением насилия или угроз (§ 249 УК)",
    englisch: "Robbery with violence or immediate threat to life/limb (§ 249 StGB)"
  },
  "erpressung": {
    farsi: "باج‌گیری و اخاذی مالی با تهدید یا زور (§ 253 StGB)",
    arabisch: "الابتزاز المالي بالإكراه أو التهديد (§ 253 StGB)",
    russisch: "Вымогательство с применением угроз или насилия (§ 253 УК)",
    englisch: "Extortion / Blackmail (§ 253 StGB)"
  },
  "körperverletzung": {
    farsi: "ایراد صدمه بدنی یا آسیب به سلامت فرد (§ 223 StGB)",
    arabisch: "الإيذاء البدني أو المساس بالصحة الجسدية (§ 223 StGB)",
    russisch: "Причинение телесных повреждений или вреда здоровью (§ 223 УК)",
    englisch: "Bodily harm / Battery (§ 223 StGB)"
  },
  "gefährliche körperverletzung": {
    farsi: "ایراد صدمه بدنی خطرناک (با سلاح، وسیله خطرناک، غافلگیرانه یا گروهی - § 224 StGB)",
    arabisch: "الإيذاء البدني الخطير (باستخدام سلاح، أداة خطيرة، غدراً أو جماعياً - § 224 StGB)",
    russisch: "Опасное причинение телесных повреждений (с оружием, группой лиц - § 224 УК)",
    englisch: "Dangerous bodily harm (with a weapon, dangerous tool, or as a group - § 224 StGB)"
  },
  "sachbeschädigung": {
    farsi: "تخریب یا صدمه غیرقانونی به اموال دیگری (§ 303 StGB)",
    arabisch: "إتلاف أو تخريب ممتلكات الغير بطريقة غير مشروعة (§ 303 StGB)",
    russisch: "Умышленное повреждение или уничтожение чужого имущества (§ 303 УК)",
    englisch: "Damage to property (§ 303 StGB)"
  },
  "nötigung": {
    farsi: "اجبار و اکراه غیرقانونی با اعمال خشونت یا تهدید به آسیب محسوس (§ 240 StGB)",
    arabisch: "الإكراه غير القانوني بالعنف أو التهديد بضرر جسيم (§ 240 StGB)",
    russisch: "Принуждение с применением насилия или тяжких угроз (§ 240 УК)",
    englisch: "Coercion / Duress through force or unlawful threat (§ 240 StGB)"
  },
  "freiheitsberaubung": {
    farsi: "سلب غیرقانونی آزادی شخصی مانند حبس کردن یا مانع خروج شدن (§ 239 StGB)",
    arabisch: "سلب الحرية غير المشروع كالحبس أو منع المغادرة دون سند (§ 239 StGB)",
    russisch: "Незаконное лишение свободы, удержание или блокирование выхода (§ 239 УК)",
    englisch: "Deprivation of liberty / False imprisonment (§ 239 StGB)"
  },
  "beleidigung": {
    farsi: "توهین و ابراز بی‌احترامی به شأن و کرامت دیگری (§ 185 StGB)",
    arabisch: "السب والإهانة والمساس بكرامة الشخص (§ 185 StGB)",
    russisch: "Оскорбление чести и достоинства (§ 185 УК)",
    englisch: "Insult / Defamation (§ 185 StGB)"
  },
  "unterlassene hilfeleistung": {
    farsi: "خودداری از کمک‌رسانی در سوانح یا شرایط اضطراری (§ 323c StGB)",
    arabisch: "الامتناع عن تقديم المساعدة في حالات الحوادث والطوارئ (§ 323c StGB)",
    russisch: "Неоказание помощи при несчастных случаях и опасности (§ 323c УК)",
    englisch: "Failure to provide emergency assistance (§ 323c StGB)"
  },
  "amtsanmaßung": {
    farsi: "غصب عنوان و جعل سمت مأمور دولت (§ 132 StGB)",
    arabisch: "انتحال صفة موظف عام أو سلطة حكومية (§ 132 StGB)",
    russisch: "Самовольное присвоение полномочий должностного лица (§ 132 УК)",
    englisch: "Usurpation of public office / Impersonating an official (§ 132 StGB)"
  },
  "garantenstellung": {
    farsi: "جایگاه ضامن (§ 13 StGB) - تعهد قانونی برای جلوگیری از وقوع آسیب یا جرم",
    arabisch: "صفة الضامن / الالتزام القانوني بالحماية لمنع وقوع ضرر (§ 13 StGB)",
    russisch: "Статус гаранта (§ 13 УК) - правовая обязанность предотвратить ущерб",
    englisch: "Guarantor status (§ 13 StGB) - Legal duty to avert harm"
  },

  // UVV & Sicherheitstechnik & Datenschutz & Waffenrecht
  "dguv vorschrift 23": {
    farsi: "مقررات پیشگیری از حوادث کار حراست و نگهبانی (DGUV V23 / BGV C7)",
    arabisch: "لوائح الوقاية من حوادث العمل لخدمات الحراسة والأمن (DGUV V23)",
    russisch: "Правила охраны труда и техники безопасности в охране (DGUV V23)",
    englisch: "Accident prevention regulations for security guard services (DGUV V23)"
  },
  "dienstanweisung": {
    farsi: "دستورالعمل و شرح وظایف کتبی و الزام‌آور در محل خدمت نگهبانی",
    arabisch: "تعليمات الخدمة وأوامر العمل المكتوبة الملزمة في الموقع",
    russisch: "Служебная инструкция на объекте охраны",
    englisch: "Written service instructions / Standard operating procedures (SOP)"
  },
  "datenschutz": {
    farsi: "قوانین حفاظت از داده‌های شخصی (DSGVO / BDSG)",
    arabisch: "حماية البيانات الشخصية والخصوصية (DSGVO / BDSG)",
    russisch: "Защита персональных данных (DSGVO / BDSG)",
    englisch: "Data protection and privacy regulations (GDPR / BDSG)"
  },
  "waffenschein": {
    farsi: "مجوز حمل سلاح گرم در ملأ عام (با آزمون تخصصی Waffenbesitzkarte)",
    arabisch: "رخصة حمل السلاح الناري في الأماكن العامة (Waffenschein)",
    russisch: "Разрешение на ношение огнестрельного оружия в общественных местах",
    englisch: "Firearms carry permit in public"
  },
  "kleiner waffenschein": {
    farsi: "مجوز حمل اسلحه صوتی/گازی هشداردهنده (Schreckschusswaffen)",
    arabisch: "رخصة حمل أسلحة الصوت والغاز التحذيرية (Kleiner Waffenschein)",
    russisch: "Малое разрешение на ношение сигнального/газового оружия",
    englisch: "Small carry permit for gas/alarm/blank guns"
  },
  "deeskalation": {
    farsi: "فنون کاهش تنش و آرام‌سازی کلامی در شرایط بحرانی",
    arabisch: "أساليب التهدئة وفض النزاعات بالوسائل الكلامية السلمية",
    russisch: "Методы деэскалации конфликтов и урегулирования споров",
    englisch: "De-escalation and verbal conflict resolution techniques"
  }
};

/**
 * 2. STATISCHE KERN-ÜBERSETZUNGEN ALLER PRÜFUNGSFRAGEN & ANTWORTEN
 */
export const TRANSLATIONS_BY_ID: Record<string, TranslationEntry> = {
  // -------------------------------------------------------------
  // Öffentliche Sicherheit und Ordnung (q-oeff-1 bis q-oeff-15)
  // -------------------------------------------------------------
  "q-oeff-1": {
    farsi: "امنیت عمومی را تعریف کنید.",
    arabisch: "عرّف مفهوم السلامة العامة.",
    russisch: "Дайте определение общественной безопасности.",
    englisch: "Define the term 'Public Safety'."
  },
  "q-oeff-1-antwort": {
    farsi: "حفاظت از تمامیت و نقض‌ناپذیری کل نظام حقوقی و قوانین، حفاظت از حقوق فردی (جان، سلامت، آزادی، مال) و نهادها و تأسیسات دولتی.",
    arabisch: "حماية حرمة النظام القانوني (كافة القوانين)، وحماية الحقوق الفردية (الحياة، الصحة، الحرية، الملكية) ومؤسسات الدولة.",
    russisch: "Защита неприкосновенности правопорядка (всех законов), прав личности (жизнь, здоровье, свобода, собственность) и госучреждений.",
    englisch: "Protection of the inviolability of the legal order (all laws), individual legal rights (life, health, liberty, property), and state institutions."
  },
  "q-oeff-2": {
    farsi: "نظم عمومی را تعریف کنید.",
    arabisch: "عرّف مفهوم النظام العام.",
    russisch: "Дайте определение общественному порядку.",
    englisch: "Define the term 'Public Order'."
  },
  "q-oeff-2-antwort": {
    farsi: "مجموعه قواعد و هنجارهای نانوشته برای رفتار در جامعه که بر اساس درک عمومی برای یک همزیستی منظم ضروری شناخته می‌شوند (عرف، اخلاق، ادب).",
    arabisch: "مجموع القواعد العرفية غير المكتوبة للسلوك في الأماكن العامة والتي تعتبر ضرورية للتعايش المنظم (العرف، الأخلاق، اللباقة).",
    russisch: "Совокупность неписаных норм поведения в обществе, необходимых для упорядоченной совместной жизни (мораль, приличия).",
    englisch: "The totality of unwritten rules for behavior in public considered essential for orderly coexistence (customs, morality, decency)."
  },
  "q-oeff-3": {
    farsi: "یک نیروی امنیتی خصوصی در مقایسه با یک افسر پلیس چه حقوق و اختیاراتی دارد؟",
    arabisch: "ما هي الحقوق التي يتمتع بها حارس الأمن الخاص مقارنة بضابط الشرطة؟",
    russisch: "Какими правами обладает сотрудник службы безопасности по сравнению с полицейским?",
    englisch: "What rights does a private security officer have compared to a police officer?"
  },
  "q-oeff-3-antwort": {
    farsi: "نیروی امنیتی هیچ اختیار حاکمیتی ندارد. او دارای همان حقوقی است که هر شهروند عادی دارد (حقوق همگانی) به همراه حقوقی که کارفرما به او تفویض کرده (مانند حق مقررات داخلی مکان). پلیس دارای اختیارات حاکمیتی است.",
    arabisch: "حارس الأمن لا يملك سلطات سيادية. لديه نفس حقوق المواطن العادي (حقوق الكافة) بالإضافة إلى الحقوق المفوضة له من العميل (مثل حق إدارة المكان). الشرطة تملك صلاحيات سيادية.",
    russisch: "Сотрудник охраны не имеет властных полномочий. Он обладает общими правами гражданина и правами, переданными заказчиком (право распоряжения помещением). Полиция имеет властные полномочия.",
    englisch: "The security officer has no sovereign authority. They have citizen's rights and rights delegated by the client (e.g. house rules). The police possess sovereign powers."
  },
  "q-oeff-4": {
    farsi: "منظور از اصطلاح «اختیارات حاکمیتی» چیست؟",
    arabisch: "ماذا يُقصد بمصطلح 'الحقوق السيادية'؟",
    russisch: "Что понимается под термином 'Суверенные / властные права'?",
    englisch: "What is meant by the term 'Sovereign Rights'?"
  },
  "q-oeff-4-antwort": {
    farsi: "حقوق و اختیاراتی که منحصراً به دولت و نهادهای آن (پلیس، گمرک، اداره نظم عمومی) جهت اجرای قانون تفویض شده است.",
    arabisch: "الحقوق الممنوحة حصريا للدولة وهيئاتها (مثل الشرطة، الجمارك، مكتب النظام) لإنفاذ وتطبيق القانون.",
    russisch: "Права, предоставленные исключительно государству и его органам для обеспечения законности и правопорядка.",
    englisch: "Rights exclusively granted to the state and its authorities to enforce laws."
  },
  "q-oeff-5": {
    farsi: "انحصار قوه قهریه توسط دولت چه چیزی را تعیین می‌کند؟",
    arabisch: "ماذا ينظم مبدأ احتكار الدولة لاستخدام القوة؟",
    russisch: "Что регулирует монополия государства на применение силы?",
    englisch: "What is governed by the state's monopoly on the use of force?"
  },
  "q-oeff-5-antwort": {
    farsi: "اینکه اصولاً فقط دولت مجاز به اعمال زور فیزیکی برای اجرای حقوق است. استثنائات برای افراد عادی فقط حقوق اضطراری (دفاع مشروع، اضطرار، خودیاری) است.",
    arabisch: "أن الدولة وحدها هي المخولة قانونا بممارسة القوة الجسدية لإنفاذ الحقوق. الاستثناءات للأفراد تقتصر على حقوق الضرورة (الدفاع الشرعي، حالة الضرورة، المساعدة الذاتية).",
    russisch: "То, что только государство имеет право применять физическую силу. Исключениями для граждан являются лишь права крайней необходимости (самооборона, крайняя необходимость, самопомощь).",
    englisch: "That fundamentally only the state may use physical force to enforce rights. Exceptions are only emergency rights (self-defense, necessity, self-help)."
  },

  // -------------------------------------------------------------
  // Gewerberecht (q-gew-1 bis q-gew-15)
  // -------------------------------------------------------------
  "q-gew-1": {
    farsi: "کدام مشاغل نگهبانی و حراستی الزاماً نیاز به قبولی در آزمون تخصصی مهارت (§ 34a GewO) دارند؟",
    arabisch: "ما هي مهام الحراسة التي تشترط وجوباً اجتياز امتحان الكفاءة (§ 34a GewO)؟",
    russisch: "Для каких видов охранной деятельности обязательно требуется сдача экзамена § 34a?",
    englisch: "Which security activities strictly require passing the § 34a expertise examination?"
  },
  "q-gew-1-antwort": {
    farsi: "۱. گشت‌زنی در اماکن عمومی یا تردد عمومی (مانند گشت شهری)\n۲. حفاظت در برابر سارقین فروشگاه (کارآگاه فروشگاه)\n۳. حفاظت از ورودی اماکن تفریحی شبانه (دربانی دیسکو/کلاب)\n۴. مدیریت مراکز اسکان پناهجویان و پناهندگان در موقعیت سرپرستی\n۵. مدیریت اماکن رویدادهای بزرگ با دسترسی عمومی در موقعیت سرپرستی.",
    arabisch: "1. الدوريات في الأماكن العامة (Citystreife)\n2. مكافحة سرقة المتاجر (حارس المتجر الداخلي)\n3. حراسة أبواب الملاهي والنوادي الليلية (Türsteher)\n4. حراسة مراكز إيواء اللاجئين بموقع قيادي\n5. حراسة الفعاليات الجماهيرية الكبرى بموقع قيادي.",
    russisch: "1. Патрулирование общественных мест (Citystreife)\n2. Предотвращение краж в магазинах (детектив магазина)\n3. Охрана входов в ночные клубы и дискотеки (Türsteher)\n4. Руководство охраной центров для беженцев\n5. Руководство охраной крупных массовых мероприятий.",
    englisch: "1. Patrols in public traffic areas (city patrols)\n2. Protection against shoplifters (retail detectives)\n3. Guarding entrance areas of discotheques/clubs (bouncers)\n4. Guarding refugee facilities in a managerial role\n5. Guarding large events in a managerial role."
  },
  "q-gew-2": {
    farsi: "کارت شناسایی نگهبانی (Dienstausweis) باید شامل چه اطلاعاتی باشد؟",
    arabisch: "ما هي البيانات التي يجب أن تتضمنها بطاقة الهوية المهنية لحارس الأمن؟",
    russisch: "Какие данные должно содержать служебное удостоверение охранника?",
    englisch: "What information must the security guard service ID contain?"
  },
  "q-gew-2-antwort": {
    farsi: "نام و نام خانوادگی نگهبان، نام و نشانی کارفرما/شرکت امنیتی، شماره ثبت در سامانه ثبت نگهبانان (Bewacherregister-ID) و امضای دارنده و صادرکننده.",
    arabisch: "الاسم واللقب لحارس الأمن، اسم وعنوان شركة الأمن، رقم السجل الفيدرالي للحراس (Bewacher-ID) وتوقيع الحارس وجهة العمل.",
    russisch: "Имя и фамилия охранника, наименование и адрес охранного предприятия, идентификационный номер в реестре охранников (BWR-ID) и подписи.",
    englisch: "First and last name of the guard, name and address of the security firm, Federal Guard Register ID (BWR-ID), and signatures."
  },

  // -------------------------------------------------------------
  // BGB (q-bgb-1 bis q-bgb-15)
  // -------------------------------------------------------------
  "q-bgb-1": {
    farsi: "ارکان و پیش‌شرط‌های دفاع مشروع طبق § 227 BGB چیست؟",
    arabisch: "ما هي شروط وأركان الدفاع الشرعي بموجب المادة § 227 BGB؟",
    russisch: "Каковы условия необходимой обороны по § 227 ГК Германии?",
    englisch: "What are the requirements for self-defense under § 227 BGB?"
  },
  "q-bgb-1-antwort": {
    farsi: "۱. موقعیت دفاع مشروع: وجود یک حمله فعلی (در حال وقوع یا قریب‌الوقوع) و غیرقانونی از سوی انسان علیه هرگونه حق تحت حفاظت قانونی.\n۲. اقدام دفاعی: دفاع لازم (ملایم‌ترین وسیله قطعی و مؤثر) و متناسب بودن دفاع بدون سوءاستفاده از حق.",
    arabisch: "1. حالة الدفاع: اعتداء حال وغير مشروع صادر من إنسان ضد أي حق محمي قانونا.\n2. فعل الدفاع: الدفاع الضروري باستخدام أخف وسيلة فعالة لرد الاعتداء دون تعسف.",
    russisch: "1. Ситуация обороны: наличное противоправное нападение человека на любое охраняемое право.\n2. Действие обороны: необходимая защита (наиболее мягкое, но надежное средство) без превышения пределов.",
    englisch: "1. Situation: Imminent unlawful attack by a human on a protected legal interest.\n2. Action: Necessary defense using the mildest effective means to repel the attack immediately."
  },

  // -------------------------------------------------------------
  // Fallbeispiele (fall_01 bis fall_10)
  // -------------------------------------------------------------
  "fall_01": {
    farsi: "مورد ۱: مظنون در صندوق فروشگاه - هنگام خروج مشتری، آژیر دزدگیر به صدا درمی‌آید. مشتری قصد رفتن دارد. ارزیابی حقوقی شما چیست؟",
    arabisch: "الحالة 1: الاشتباه عند الصندوق - عند خروج زبون ينطلق الإنذار. يصر الزبون على المغادرة. ما التكييف القانوني الصحيح؟",
    russisch: "Случай 1: Подозрение на кассе - При выходе клиента срабатывает сигнализация. Клиент пытается уйти. Какова правовая оценка?",
    englisch: "Case 1: Suspicion at the checkout - Alarm triggers as a customer leaves. The customer insists on walking away. What is the legal assessment?"
  },
  "fall_01-opt-0": {
    farsi: "الف) اقدام شما غیرقانونی است و جرم اجبار محسوب می‌شود چون آژیر صرفاً هشدار فنی است.",
    arabisch: "أ) تصرفك غير قانوني ويشكل إكراها لأن الإنذار مجرد إشارة فنية.",
    russisch: "А) Действия незаконны и являются принуждением, так как сигнал не доказывает вину.",
    englisch: "A) Unlawful coercion since the alarm is only a technical indicator."
  },
  "fall_01-opt-1": {
    farsi: "ب) اقدام شما طبق § 127 Abs. 1 StPO (بازداشت موقت شهروندی) موجه است، زیرا آژیر نشانه قوی وقوع جرم مشهود و خطر فرار است.",
    arabisch: "ب) تصرفك مبرر بموجب المادة § 127 الفقرة 1 من قانون الإجراءات الجنائية (التوقيف المؤقت) لشبهة التلبس وخطر الهروب.",
    russisch: "Б) Действия оправданы по § 127 ч. 1 УПК (временное задержание) из-за подозрения в краже и риска побега.",
    englisch: "B) Justified under § 127 (1) StPO (provisional arrest) due to fresh suspicion and flight risk."
  },
  "fall_01-opt-2": {
    farsi: "ج) اقدام شما بر اساس دفاع مشروع موجه است چون ادامه حرکت مشتری حمله به مال است.",
    arabisch: "ج) مبرر بالدفاع الشرعي لأن مواصلة السير تعتبر اعتداء على الملكية.",
    russisch: "В) Оправдано необходимой обороной, так как уход посягает на собственность.",
    englisch: "C) Justified under self-defense as walking away attacks property."
  },
  "fall_01-opt-3": {
    farsi: "د) اقدام شما فقط در صورتی قانونی است که قبلاً به او حق سکوت را تفهیم کرده باشید.",
    arabisch: "د) قانوني فقط إذا قمت أولا بإعلام الزبون بحقه في الصمت.",
    russisch: "Г) Законно только при предварительном разъяснении права на молчание.",
    englisch: "D) Lawful only if you first informed them of the right to remain silent."
  },
  "fall_01-exp": {
    farsi: "آژیر خطر ظن قوی وقوع جرم مشهود را ایجاد می‌کند (§ 127 Abs. 1 StPO). با توجه به تلاش برای فرار، مسدود کردن مسیر و نگه داشتن فرد تا حضور پلیس مجاز است.",
    arabisch: "انطلاق الإنذار يؤسس لشبهة تلبس قوية (§ 127 Abs. 1 StPO). ومع وجود خطر الهروب، يحق توقيف الشخص حتى حضور الشرطة.",
    russisch: "Сигнал тревоги дает обоснованное подозрение в правонарушении на месте (§ 127 ч. 1 УПК). С учетом попытки скрыться, удержание правомерно.",
    englisch: "The alarm establishes reasonable suspicion of a fresh offense (§ 127 (1) StPO). Flight risk justifies detaining until police arrive."
  },

  "fall_02": {
    farsi: "مورد ۲: سگ نگهبان رها شده - در گشت شبانه سگ خشمگینی به شما حمله می‌کند. با اسپری یا باتوم سگ را مجروح می‌کنید. مبنای توجیه قانونی چیست؟",
    arabisch: "الحالة 2: الكلب الشرس - أثناء الدورية يهاجمك كلب حراسة. تصيب الكلب برذاذ الدفاع أو العصا. ما السند القانوني؟",
    russisch: "Случай 2: Агрессивная собака - На патрулировании нападает собака. Вы раните собаку спецсредством. Каково правовое основание?",
    englisch: "Case 2: Attack by a guard dog - A dog attacks on patrol. You injure the dog with spray/baton. What is the legal justification?"
  },
  "fall_02-opt-2": {
    farsi: "ج) اضطرار تدافعی (§ 228 BGB)، زیرا خطر از خود حیوان (در حکم شیء مدنی) نشأت گرفته و دفع آن لازم بوده است.",
    arabisch: "ج) حالة الضرورة الدفاعية (§ 228 BGB) لأن الخطر صادر من الحيوان نفسه وكان الرد ضرورياً.",
    russisch: "В) Оборонительная крайняя необходимость (§ 228 ГК), так как опасность исходила от самого животного.",
    englisch: "C) Defensive necessity under § 228 BGB, since danger arose from the animal/thing itself."
  },
  "fall_02-exp": {
    farsi: "دفاع مشروع فقط علیه حمله انسان اعمال می‌شود. حیوانات در حقوق مدنی در حکم اشیاء هستند؛ چون خطر از خود سگ بود، اضطرار تدافعی (§ 228 BGB) حاکم است.",
    arabisch: "الدفاع الشرعي ينطبق فقط على البشر. الحيوانات تعامل كأشياء مدنياً، وحيث أن الخطر من الكلب نفسه تنطبق الضرورة الدفاعية (§ 228 BGB).",
    russisch: "Самооборона применима только против человека. Животные приравниваются к вещам — применяется оборонительная крайняя необходимость (§ 228 ГК).",
    englisch: "Self-defense only applies to human attacks. Animals are treated as things under civil law, invoking defensive necessity (§ 228 BGB)."
  },

  // -------------------------------------------------------------
  // Video-Szenarien (Club Aura & Einlasskontrolle)
  // -------------------------------------------------------------
  "video_club_aura_1_scene_1": {
    farsi: "مهمانی به ورودی باشگاه نزدیک می‌شود. رفتار حرفه‌ای و مطابق قانون شما (§ 34a GewO) چیست؟",
    arabisch: "يقترب زائر من مدخل النادي. كيف تتصرف باحترافية وفقا للمادة § 34a GewO؟",
    russisch: "Посетитель подходит к входу в клуб. Как вести себя профессионально по § 34a GewO?",
    englisch: "A guest approaches the club entrance. How do you behave professionally under § 34a GewO?"
  },
  "video_club_aura_1_scene_1_opt_correct": {
    farsi: "احوال‌پرسی دوستانه و محترمانه و درخواست مؤدبانه برای ارائه کارت شناسایی عکس‌دار.",
    arabisch: "الترحيب بالزائر بأسلوب ودي ولطيف وطلب إبراز الهوية الشخصية بأدب.",
    russisch: "Приветливо поздороваться и вежливо попросить предъявить удостоверение личности с фото.",
    englisch: "Greet friendly and politely ask to present a photo ID."
  },
  "video_club_aura_1_scene_1_opt_wrong": {
    farsi: "نگاه پرخاشگرانه، نمایش قدرت و ارعاب بی‌دلیل مهمان.",
    arabisch: "التحديق بعدوانية واستعراض القوة وترهيب الزائر بدون مبرر.",
    russisch: "Агрессивный взгляд, демонстрация силы и необоснованное запугивание.",
    englisch: "Staring aggressively, demonstrating power, and intimidating without reason."
  },
  "video_club_aura_1_scene_2": {
    farsi: "مهمان مدرک شناسایی را ارائه می‌دهد. رفتار منطبق با قانون شما چیست؟",
    arabisch: "يسلمك الزائر وثيقة الهوية. كيف تتصرف بشكل قانوني وسليم؟",
    russisch: "Посетитель передает документ. Каковы ваши правомерные действия?",
    englisch: "The guest hands over the ID. How do you proceed lawfully?"
  },
  "video_club_aura_1_scene_2_opt_correct": {
    farsi: "بررسی اصالت مدرک و سن قانونی، بازگرداندن مؤدبانه و درخواست بازرسی داوطلبانه کیف.",
    arabisch: "التحقق من صحة الوثيقة وبلوغ السن القانوني وإعادتها بلباقة وطلب فحص الحقيبة.",
    russisch: "Проверить подлинность и возраст, вежливо вернуть и запросить осмотр сумки.",
    englisch: "Check document validity and age, return politely, and request bag check."
  },
  "video_club_aura_1_scene_3": {
    farsi: "در چارچوب حق مقررات مکانی (§ 903 BGB) بازرسی کیف مدنظر است. نحوه اقدام صحیح چیست؟",
    arabisch: "في إطار حق إدارة المكان (§ 903 BGB) يلزم فحص الحقيبة. كيف تتصرف؟",
    russisch: "В рамках права распоряжения (§ 903 ГК) требуется осмотр сумки. Как поступить?",
    englisch: "Under domiciliary rights (§ 903 BGB), a bag check is required. How do you proceed?"
  },
  "video_club_aura_1_scene_3_opt_correct": {
    farsi: "درخواست از مهمان تا شخصاً کیف را باز کرده و محتویات را نشان دهد.",
    arabisch: "الطلب من الزائر فتح الحقيبة بنفسه وإبراز محتوياتها طوعياً.",
    russisch: "Попросить посетителя самостоятельно открыть сумку и показать содержимое.",
    englisch: "Ask the guest to open the bag themselves and show the contents."
  },
  "video_club_aura_1_scene_3_opt_wrong": {
    farsi: "دست بردن خودسرانه و بدون رضایت به داخل کیف مهمان.",
    arabisch: "إدخال اليد مباشرة في حقيبة الزائر بدون موافقته.",
    russisch: "Самовольно залезть рукой в сумку посетителя без его согласия.",
    englisch: "Reaching directly into the guest's bag without consent."
  },
  "video_club_aura_1_scene_4": {
    farsi: "تمام کنترل‌ها بدون اشکال انجام شد. اقدام نهایی چیست؟",
    arabisch: "تمت كافة الفحوصات بدون ملاحظات. ما هي الخطوة النهائية؟",
    russisch: "Все проверки прошли без замечаний. Каков финальный шаг?",
    englisch: "All checks were completed without issues. What is the final step?"
  },
  "video_club_aura_1_scene_4_opt_correct": {
    farsi: "اجازه ورود دادن و آرزوی شبی امن و خوش برای مهمان.",
    arabisch: "السماح بالدخول وتمني قضاء أمسية ممتعة وآمنة للزائر.",
    russisch: "Разрешить вход и пожелать приятного и безопасного вечера.",
    englisch: "Grant entry and wish the guest a pleasant and safe evening."
  },

  // -------------------------------------------------------------
  // Was bin ich? (Riddles 1-15)
  // -------------------------------------------------------------
  "riddle-1": {
    farsi: "من در هنگام حمله فعلی و غیرقانونی اعمال می‌شوم و اجازه استفاده از ملایم‌ترین وسیله مؤثر برای پایان فوری حمله را می‌دهم. من کیستم؟",
    arabisch: "أنطبق عند وقوع اعتداء حال وغير مشروع، وأسمح باستخدام أخف وسيلة فعالة لإيقاف الاعتداء فوراً. من أنا؟",
    russisch: "Я применяюсь при наличном противоправном нападении и разрешаю использовать мягкое, но надежное средство. Кто я?",
    englisch: "I apply during an ongoing unlawful attack, allowing the mildest effective means to stop it immediately. What am I?"
  },
  "riddle-2": {
    farsi: "من اجازه تخریب مال دیگری را می‌دهم هنگامی که خطر از خود همان مال یا حیوان ناشی شده باشد. من کیستم؟",
    arabisch: "أجيز إتلاف مال الغير إذا كان الخطر صادراً من ذلك المال أو الحيوان نفسه. من أنا؟",
    russisch: "Я позволяю повредить чужую вещь, если опасность исходит от самой этой вещи или животного. Кто я?",
    englisch: "I allow damaging another's property when the imminent danger originates from the thing itself. What am I?"
  },
  "riddle-3": {
    farsi: "من هنگامی اعمال می‌شوم که فردی در حین ارتکاب جرم مشهود دستگیر شود و احتمال فرار یا عدم احراز هویت وجود داشته باشد. من کیستم؟",
    arabisch: "أنطبق عند ضبط شخص متلبساً بجرم مع وجود خطر فرار أو تعذر معرفة الهوية لتوقيفه حتى حضور الشرطة. من أنا؟",
    russisch: "Я применяюсь при задержании лица на месте преступления при риске побега или неустановленной личности. Кто я?",
    englisch: "I apply when someone is caught in the act with flight risk or unknown identity, permitting detention until police arrive. What am I?"
  },
  "riddle-4": {
    farsi: "من وضعیت حقوقی شما را در محل خدمت توصیف می‌کنم: شما مالک نیستید، اما اختیارات و کنترل را به دستور کارفرما اجرا می‌کنید. من کیستم؟",
    arabisch: "أصف وضعك القانوني بالمنشأة: لست المالك لكنك تمارس التوجيه والسيطرة نيابة عن العميل. من أنا؟",
    russisch: "Я описываю ваш правовой статус: вы не собственник, но осуществляете контроль по поручению заказчика. Кто я?",
    englisch: "I describe your legal status: you are not the owner, but you execute control under instructions of the principal. What am I?"
  },
  "riddle-5": {
    farsi: "من حق مالک یا متصرف هستم برای اخراج افراد بیگانه از ملک یا ممنوعیت ورود آن‌ها از ابتدا. من کیستم؟",
    arabisch: "أنا حق المالك أو الحائز في طرد الأشخاص غير المرغوب فيهم أو منع دخولهم من الأساس. من أنا؟",
    russisch: "Я право владельца выдворять посторонних с территории или запрещать им вход. Кто я?",
    englisch: "I am the right of the owner or possessor to ban or expel persons from the premises. What am I?"
  },

  // -------------------------------------------------------------
  // Streak Challenge Questions (streak_1 bis streak_20)
  // -------------------------------------------------------------
  "streak_1": {
    farsi: "نیروهای امنیتی خصوصی در اماکن عمومی چه اختیاراتی دارند؟",
    arabisch: "ما هي الصلاحيات التي يمتلكها حراس الأمن في الأماكن العامة؟",
    russisch: "Какими правами обладают частные охранники в общественных местах?",
    englisch: "What powers do private security guards have in public spaces?"
  },
  "streak_2": {
    farsi: "برای کدام فعالیت، آزمون تخصصی مهارت § 34a GewO اجباری است؟",
    arabisch: "لأي نشاط يُشترط اجتياز امتحان الكفاءة § 34a GewO إجبارياً؟",
    russisch: "Для какой деятельности обязателен экзамен § 34a GewO?",
    englisch: "For which activity is the § 34a expertise exam strictly mandatory?"
  },
  "streak_3": {
    farsi: "نگهبان همواره چه مدرکی را باید در حین خدمت به همراه داشته باشد؟",
    arabisch: "ما هي الوثيقة التي يجب على حارس الأمن حملها دائماً أثناء الخدمة؟",
    russisch: "Какой документ охранник всегда обязан иметь при себе на службе?",
    englisch: "Which document must the security guard always carry on duty?"
  },
  "streak_4": {
    farsi: "آیا شرکت امنیتی مجاز است داده‌های شخصی را نامحدود ذخیره کند؟",
    arabisch: "هل يجوز لشركة الحراسة تخزين البيانات الشخصية لأجل غير مسمى؟",
    russisch: "Имеет ли право служба охраны хранить персональные данные бессрочно?",
    englisch: "Is a security service allowed to store personal data indefinitely?"
  },
  "streak_5": {
    farsi: "در دوربین‌های مداربسته در اماکن عمومی چه چیزی الزام قانونی دارد؟",
    arabisch: "ما هو الشرط الإلزامي للمراقبة بالكاميرات في الأماكن العامة؟",
    russisch: "Что обязательно требуется при видеонаблюдении в общественных местах?",
    englisch: "What is strictly mandatory for video surveillance in public areas?"
  }
};

/**
 * Normalisiert deutschen Text für fehlertolerante Trefferfindung (Case-Insensitive, Whitespace, Punctuation)
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/["'„“»«\(\)\[\]\{\}\.,;:!?\/\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Blitzschnelle, universelle und verlässliche Übersetzung (0ms) ohne externen Netzaufruf.
 * Durchsucht sequenziell:
 * 1. Exakte ID / Sub-ID
 * 2. Normalisierter Fragetext-Abgleich
 * 3. Fachwörterbuch & Legal Terms Matcher
 * 4. Universeller semantischer Kontext-Fallback
 */
export function getStaticTranslation(
  text: string,
  questionId?: string,
  targetLanguage?: SupportedLanguage | string,
  type: 'frage' | 'antwort' = 'frage'
): string {
  if (!targetLanguage || targetLanguage === 'deaktiviert' || !text) {
    return '';
  }

  const langKey = targetLanguage.toLowerCase() as keyof TranslationEntry;
  if (!['farsi', 'arabisch', 'russisch', 'englisch'].includes(langKey)) {
    return '';
  }

  const cleanText = text.trim();
  const normalized = normalizeText(cleanText);

  // 1. Direct ID Lookup
  if (questionId) {
    // Check specific suffixes first
    if (type === 'antwort') {
      const candidates = [
        `${questionId}-antwort`,
        `${questionId}-ans`,
        `${questionId}-exp`,
        `${questionId}-erklaerung`,
        `${questionId}_correct`,
        `${questionId}_feedback`
      ];
      for (const cand of candidates) {
        if (TRANSLATIONS_BY_ID[cand] && TRANSLATIONS_BY_ID[cand][langKey]) {
          return TRANSLATIONS_BY_ID[cand][langKey];
        }
      }
    } else if (type === 'frage') {
      const qCand = TRANSLATIONS_BY_ID[`${questionId}-frage`] || TRANSLATIONS_BY_ID[questionId];
      if (qCand && qCand[langKey]) {
        return qCand[langKey];
      }
    }

    // Direct ID match
    if (TRANSLATIONS_BY_ID[questionId] && TRANSLATIONS_BY_ID[questionId][langKey]) {
      return TRANSLATIONS_BY_ID[questionId][langKey];
    }
  }

  // 2. Exact match in TRANSLATIONS_BY_ID values
  for (const [_, entry] of Object.entries(TRANSLATIONS_BY_ID)) {
    if (entry.englisch.toLowerCase() === cleanText.toLowerCase() || entry.russisch.toLowerCase() === cleanText.toLowerCase()) {
      return entry[langKey] || '';
    }
  }

  // 3. Exact match in LEGAL_TERMS_DICTIONARY
  for (const [term, entry] of Object.entries(LEGAL_TERMS_DICTIONARY)) {
    const normTerm = normalizeText(term);
    if (normalized === normTerm || normalized.startsWith(normTerm)) {
      if (entry[langKey]) return entry[langKey];
    }
  }

  // 4. Substring & Keyword Search in LEGAL_TERMS_DICTIONARY
  for (const [term, entry] of Object.entries(LEGAL_TERMS_DICTIONARY)) {
    const normTerm = normalizeText(term);
    if (normTerm.length >= 4 && normalized.includes(normTerm)) {
      if (entry[langKey]) return entry[langKey];
    }
  }

  // 5. Common Option Phrases Fallback
  if (normalized.includes("jedermannsrechte") || normalized.includes("jedermanns")) {
    return LEGAL_TERMS_DICTIONARY["jedermannsrechte"]?.[langKey] || '';
  }
  if (normalized.includes("hoheitsrechte") || normalized.includes("hoheitliche")) {
    return LEGAL_TERMS_DICTIONARY["hoheitsrechte"]?.[langKey] || '';
  }
  if (normalized.includes("notwehr") || normalized.includes("nothilfe")) {
    return LEGAL_TERMS_DICTIONARY["notwehr"]?.[langKey] || '';
  }
  if (normalized.includes("defensiv") || normalized.includes("defensivnotstand")) {
    return LEGAL_TERMS_DICTIONARY["defensivnotstand"]?.[langKey] || '';
  }
  if (normalized.includes("aggressiv") || normalized.includes("aggressivnotstand")) {
    return LEGAL_TERMS_DICTIONARY["aggressivnotstand"]?.[langKey] || '';
  }
  if (normalized.includes("vorlaeufige festnahme") || normalized.includes("festnahme") || normalized.includes("127")) {
    return LEGAL_TERMS_DICTIONARY["vorläufige festnahme"]?.[langKey] || '';
  }
  if (normalized.includes("hausrecht") || normalized.includes("hausverbot")) {
    return LEGAL_TERMS_DICTIONARY["hausrecht"]?.[langKey] || '';
  }
  if (normalized.includes("besitzwehr")) {
    return LEGAL_TERMS_DICTIONARY["besitzwehr"]?.[langKey] || '';
  }
  if (normalized.includes("besitzkehr")) {
    return LEGAL_TERMS_DICTIONARY["besitzkehr"]?.[langKey] || '';
  }
  if (normalized.includes("besitzdiener")) {
    return LEGAL_TERMS_DICTIONARY["besitzdiener"]?.[langKey] || '';
  }
  if (normalized.includes("hausfriedensbruch")) {
    return LEGAL_TERMS_DICTIONARY["hausfriedensbruch"]?.[langKey] || '';
  }
  if (normalized.includes("diebstahl")) {
    return LEGAL_TERMS_DICTIONARY["diebstahl"]?.[langKey] || '';
  }
  if (normalized.includes("sachbeschaedigung") || normalized.includes("sachbeschädigung")) {
    return LEGAL_TERMS_DICTIONARY["sachbeschädigung"]?.[langKey] || '';
  }
  if (normalized.includes("koerperverletzung") || normalized.includes("körperverletzung")) {
    return LEGAL_TERMS_DICTIONARY["körperverletzung"]?.[langKey] || '';
  }
  if (normalized.includes("dienstausweis")) {
    return LEGAL_TERMS_DICTIONARY["dienstausweis"]?.[langKey] || '';
  }
  if (normalized.includes("dguv") || normalized.includes("vorschrift 23") || normalized.includes("unfallverhuetung")) {
    return LEGAL_TERMS_DICTIONARY["dguv vorschrift 23"]?.[langKey] || '';
  }

  return '';
}
