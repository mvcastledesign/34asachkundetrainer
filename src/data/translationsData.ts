/**
 * @file translationsData.ts
 * Zentrales, statisches juristisches Wörterbuch für die § 34a GewO Sachkundeprüfung.
 * Enthält 100% offline-fähige, rechtssichere 0ms Sofort-Übersetzungen in:
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
 * Juristisches Fachwörterbuch nach Schlagwörtern & Rechtsbegriffen (§ 34a Sachkunde)
 */
export const LEGAL_TERMS_DICTIONARY: Record<string, TranslationEntry> = {
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
  "notwehr": {
    farsi: "دفاع مشروع (§ 32 StGB / § 227 BGB) - دفاع لازم و متناسب برای دفع یک حمله غیرقانونی فعلی",
    arabisch: "الدفاع الشرعي (§ 32 StGB / § 227 BGB) - الدفاع الضروري لصد اعتداء غير قانوني حال",
    russisch: "Необходимая оборона (§ 32 УК / § 227 ГК) - необходимая защита от наличного противоправного нападения",
    englisch: "Self-defense (§ 32 StGB / § 227 BGB) - Necessary defense required to ward off an imminent unlawful attack"
  },
  "nothilfe": {
    farsi: "دفاع از دیگری (کمک در دفاع مشروع به شخص ثالث در برابر حمله غیرقانونی)",
    arabisch: "مساعدة الغير في الدفاع الشرعي (الدفاع عن شخص آخر ضد اعتداء غير قانوني)",
    russisch: "Помощь в необходимой обороне (защита третьего лица от противоправного нападения)",
    englisch: "Defense of others (Assisting a third party against an imminent unlawful attack)"
  },
  "notstand": {
    farsi: "حالت اضطرار (دفع خطر از خود یا دیگران با فدا کردن مالی کم‌ارزش‌تر)",
    arabisch: "حالة الضرورة (دفع خطر وشيك عن طريق التضحية بمال أقل قيمة)",
    russisch: "Состояние крайней необходимости (устранение опасности путем причинения меньшего вреда)",
    englisch: "State of necessity (Averting immediate danger by sacrificing a lesser interest)"
  },
  "defensivnotstand": {
    farsi: "اضطرار تدافعی (§ 228 BGB) - دفع خطر ناشی از خود شیء یا حیوان متهاجم",
    arabisch: "حالة الضرورة الدفاعية (§ 228 BGB) - دفع خطر صادر من الشيء نفسه أو الحيوان",
    russisch: "Оборонительная крайняя необходимость (§ 228 ГК) - устранение опасности от самого предмета или животного",
    englisch: "Defensive emergency (§ 228 BGB) - Damage to a thing causing danger"
  },
  "aggressivnotstand": {
    farsi: "اضطرار تهاجمی (§ 904 BGB) - استفاده یا آسیب به شیء شخص ثالث بی‌طرف برای دفع خطر بزرگتر",
    arabisch: "حالة الضرورة الهجومية (§ 904 BGB) - التأثير على ملك طرف ثالث غير متورط لدفع خطر جسيم",
    russisch: "Агрессивная крайняя необходимость (§ 904 ГК) - воздействие на имущество третьих лиц для спасения от угрозы",
    englisch: "Aggressive emergency (§ 904 BGB) - Interference with property of an uninvolved third party"
  },
  "jedermannsrechte": {
    farsi: "حقوق عامه / اختیارات همگانی (حقوقی که هر شهروند عادی و نگهبان خصوصی بدون نیاز به حکم دارد)",
    arabisch: "حقوق الكافة (الصلاحيات القانونية المتاحة لأي مواطن عادي وحارس أمن خاص)",
    russisch: "Права каждого гражданина (полномочия, доступные любому гражданину и охраннику)",
    englisch: "Citizen's rights (Legal powers granted to any private citizen or security guard)"
  },
  "vorläufige festnahme": {
    farsi: "بازداشت موقت شهروندی (§ 127 Abs. 1 StPO) هنگام مشاهده جرم در حین ارتکاب و احتمال فرار یا عدم احراز هویت",
    arabisch: "التوقيف المؤقت (§ 127 Abs. 1 StPO) عند التلبس بالجرم ووجود خطر هروب أو تعذر تحديد الهوية",
    russisch: "Временное задержание (§ 127 УПК) при совершении преступления на месте и риске побега",
    englisch: "Provisional citizen's arrest (§ 127 Abs. 1 StPO) upon catching someone in the act with flight risk"
  },
  "hausrecht": {
    farsi: "حق اعمال مقررات و حاکمیت بر ملک / مکان (شامل حق ورود، اخراج و منع ورود)",
    arabisch: "حق إدارة المكان وتحديد الدخول والمنع (Hausrecht)",
    russisch: "Право распоряжения помещением (право допуска, выдворения и запрета на вход)",
    englisch: "Domiciliary rights / Householder authority (Granting entry, expulsion, and banning)"
  },
  "besitzwehr": {
    farsi: "دفاع از تصرف (§ 859 Abs. 1 BGB) - جلوگیری با زور متناسب از تصرف غیرقانونی یا مزاحمت",
    arabisch: "الدفاع عن الحيازة (§ 859 Abs. 1 BGB) - رد التصرف غير القانوني بالقوة المناسبة",
    russisch: "Защита владения (§ 859 ГК) - пресечение попытки незаконного захвата или помехи владению",
    englisch: "Defense of possession (§ 859 Abs. 1 BGB) - Warding off unlawful interference with force"
  },
  "besitzkehr": {
    farsi: "بازپس‌گیری فوری تصرف (§ 859 Abs. 2/3 BGB) بلافاصله پس از سرقت با تعقیب سارق",
    arabisch: "استرداد الحيازة فورا (§ 859 Abs. 2/3 BGB) بملاحقة السارق فورا واسترجاع المال",
    russisch: "Возврат владения по горячим следам (§ 859 ГК) - немедленное изъятие у похитителя",
    englisch: "Recovery of possession (§ 859 Abs. 2/3 BGB) - Immediate pursuit and retrieval from a trespasser"
  },
  "verbotene eigenmacht": {
    farsi: "تصرف غیرقانونی یا ایجاد مزاحمت در تصرف بدون رضایت مالک و بدون مجوز قانونی (§ 858 BGB)",
    arabisch: "التصرف غير القانوني في الحيازة بدون رضا الحائز وبدون سند قانوني (§ 858 BGB)",
    russisch: "Самовольное нарушение владения без согласия владельца и без закона (§ 858 ГК)",
    englisch: "Unlawful interference with possession without consent or legal permission (§ 858 BGB)"
  },
  "selbsthilfe": {
    farsi: "حق احقاق حق شخصی (§ 229 BGB) در صورت عدم امکان دسترسی فوری به کمک دولتی و احتمال از دست رفتن حق",
    arabisch: "المساعدة الذاتية لاستيفاء الحق (§ 229 BGB) عند غياب التدخل الأمني الرسمي الفوري",
    russisch: "Самопомощь (§ 229 ГК) при невозможности своевременной помощи госорганов",
    englisch: "Self-help (§ 229 BGB) - Securing a claim when official help cannot be obtained in time"
  },
  "garantenstellung": {
    farsi: "جایگاه ضامن (§ 13 StGB) - وظیفه و تعهد قانونی برای جلوگیری از وقوع آسیب یا جرم",
    arabisch: "صفة الضامن / الالتزام القانوني بالحماية (§ 13 StGB) لمنع وقوع ضرر أو جريمة",
    russisch: "Статус гаранта (§ 13 УК) - правовая обязанность предотвратить причинение вреда или преступление",
    englisch: "Guarantor status (§ 13 StGB) - Legal obligation to prevent harm or injury"
  },
  "gewaltmonopol des staates": {
    farsi: "انحصار قوه قهریه توسط دولت - فقط نهادهای حاکمیتی حق اعمال زور رسمی دارند",
    arabisch: "احتكار الدولة لاستخدام القوة - السلطات الحكومية وحدها المخولة قانونا بممارسة القوة الجبرية",
    russisch: "Монополия государства на применение силы - только госорганы имеют право на принуждение",
    englisch: "State monopoly on force - Only public authorities are authorized to use sovereign force"
  },
  "hausfriedensbruch": {
    farsi: "ورود غیرمجاز به حریم شخصی یا ملک و خودداری از ترک آن پس از اخراج (§ 123 StGB)",
    arabisch: "انتهاك حرمة المسكن أو المكان (§ 123 StGB) والامتناع عن المغادرة بعد الإنذار",
    russisch: "Нарушение неприкосновенности владения / незаконное проникновение (§ 123 УК)",
    englisch: "Trespassing / Breach of domestic peace (§ 123 StGB) and refusal to leave after being ordered"
  },
  "körperverletzung": {
    farsi: "ایراد صدمه بدنی یا آسیب به سلامت فرد (§ 223 StGB)",
    arabisch: "الإيذاء البدني أو المساس بالصحة الجسدية (§ 223 StGB)",
    russisch: "Причинение телесных повреждений или вреда здоровью (§ 223 УК)",
    englisch: "Bodily harm / Assault (§ 223 StGB)"
  },
  "sachbeschädigung": {
    farsi: "تخریب یا تغییر شکل غیرقانونی اموال دیگری (§ 303 StGB)",
    arabisch: "إتلاف أو تخريب ممتلكات الغير بطريقة غير مشروعة (§ 303 StGB)",
    russisch: "Умышленное повреждение или уничтожение чужого имущества (§ 303 УК)",
    englisch: "Damage to property (§ 303 StGB)"
  },
  "diebstahl": {
    farsi: "سرقت - ربودن مال منقول متعلق به غیر به قصد تصاحب غیرقانونی (§ 242 StGB)",
    arabisch: "السرقة - اختلاس منقول مملوك للغير بنية تملكه بدون وجه حق (§ 242 StGB)",
    russisch: "Кража - тайное хищение чужого имущества с целью присвоения (§ 242 УК)",
    englisch: "Theft - Unlawful taking of movable property owned by another (§ 242 StGB)"
  },
  "nötigung": {
    farsi: "اجبار و اکراه غیرقانونی با تهدید یا زور (§ 240 StGB)",
    arabisch: "الإكراه والتهديد غير القانوني لإجبار شخص على فعل أو امتناع (§ 240 StGB)",
    russisch: "Принуждение с применением силы или угроз (§ 240 УК)",
    englisch: "Coercion / Duress through force or unlawful threat (§ 240 StGB)"
  },
  "freiheitsberaubung": {
    farsi: "سلب غیرقانونی آزادی شخصی (§ 239 StGB) مانند حبس کردن یا مانع خروج شدن بدون مجوز قانونی",
    arabisch: "سلب الحرية بشكل غير قانوني (§ 239 StGB) كالحبس أو منع المغادرة دون سند شرعي",
    russisch: "Незаконное лишение свободы (§ 239 УК), удержание или блокирование выхода",
    englisch: "Deprivation of liberty / False imprisonment (§ 239 StGB)"
  },
  "beleidigung": {
    farsi: "توهین و ابراز عدم احترام به شأن و شخصیت دیگری (§ 185 StGB)",
    arabisch: "السب والإهانة والمساس بكرامة واعتبار الشخص (§ 185 StGB)",
    russisch: "Оскорбление и унижение чести и достоинства (§ 185 УК)",
    englisch: "Insult / Defamation of character (§ 185 StGB)"
  },
  "unterlassene hilfeleistung": {
    farsi: "خودداری از کمک‌رسانی به فرد نیازمند در سوانح و شرایط اضطراری (§ 323c StGB)",
    arabisch: "الامتناع عن تقديم المساعدة اللازمة في حالات الحوادث والطوارئ (§ 323c StGB)",
    russisch: "Неоказание помощи при несчастных случаях и опасности (§ 323c УК)",
    englisch: "Failure to provide emergency assistance during an accident or danger (§ 323c StGB)"
  }
};

/**
 * Statische Kern-Übersetzungen aller Prüfungsfragen & Antworten nach ID
 */
export const TRANSLATIONS_BY_ID: Record<string, TranslationEntry> = {
  // Öffentliche Sicherheit und Ordnung (q-oeff-1 bis q-oeff-15)
  "q-oeff-1": {
    farsi: "امنیت عمومی را تعریف کنید.",
    arabisch: "عرّف مفهوم السلامة العامة.",
    russisch: "Дайте определение общественной безопасности.",
    englisch: "Define the term 'Public Safety'."
  },
  "q-oeff-1-antwort": {
    farsi: "حفاظت از تمامیت و نقض‌ناپذیری قوانین (نظام حقوقی)، حفاظت از جان، سلامت، آزادی و اموال افراد و همچنین حفاظت از نهادها و تأسیسات دولتی.",
    arabisch: "حماية حرمة النظام القانوني (كافة القوانين)، وحماية الحقوق الفردية (الحياة، الصحة، الحرية، الملكية) بالإضافة إلى حماية مؤسسات الدولة.",
    russisch: "Защита неприкосновенности правопорядка (всех законов), защита благ личности (жизнь, здоровье, свобода, собственность) и защита государственных институтов.",
    englisch: "Protection of the inviolability of the legal order (all laws), individual legal rights (life, health, liberty, property), and state institutions."
  },
  "q-oeff-2": {
    farsi: "نظم عمومی را تعریف کنید.",
    arabisch: "عرّف مفهوم النظام العام.",
    russisch: "Дайте определение общественному порядку.",
    englisch: "Define the term 'Public Order'."
  },
  "q-oeff-2-antwort": {
    farsi: "مجموعه قواعد و هنجارهای نانوشته برای رفتار در جامعه که بر اساس درک عمومی برای یک همزیستی منظم و محترمانه ضروری شناخته می‌شوند (عرف، اخلاق، ادب).",
    arabisch: "مجموع القواعد العرفية غير المكتوبة للسلوك في الأماكن العامة والتي تعتبر وفق العرف السائد شرطا أساسيا للتعايش المنظم (العرف، الأخلاق، اللباقة).",
    russisch: "Совокупность неписаных норм поведения в обществе, которые согласно общепринятым нормам необходимы для упорядоченной совместной жизни (мораль, приличия).",
    englisch: "The totality of unwritten rules for behavior in public considered essential for orderly coexistence according to prevailing views (customs, morality, decency)."
  },
  "q-oeff-3": {
    farsi: "یک نیروی امنیتی خصوصی در مقایسه با یک افسر پلیس چه حقوق و اختیاراتی دارد؟",
    arabisch: "ما هي الحقوق التي يتمتع بها حارس الأمن الخاص مقارنة بضابط الشرطة؟",
    russisch: "Какими правами обладает сотрудник службы безопасности по сравнению с полицейским?",
    englisch: "What rights does a private security officer have compared to a police officer?"
  },
  "q-oeff-3-antwort": {
    farsi: "نیروی امنیتی هیچ اختیار حاکمیتی ندارد. او دارای همان حقوقی است که هر شهروند عادی دارد (حقوق همگانی) به همراه حقوقی که کارفرما به او تفویض کرده (مانند حق مقررات داخلی مکان). پلیس دارای اختیارات حاکمیتی (اعمال زور، بازداشت طبق قانون پلیس) است.",
    arabisch: "حارس الأمن لا يملك سلطات سيادية. لديه نفس حقوق المواطن العادي (حقوق الكافة) بالإضافة إلى الحقوق المفوضة له من العميل (مثل حق إدارة المكان). الشرطة تملك صلاحيات سيادية (استخدام القوة الجبرية، التوقيف الإداري).",
    russisch: "Сотрудник охраны не имеет властных полномочий. Он обладает общими правами гражданина и правами, переданными заказчиком (например, право распоряжения помещением). Полиция имеет суверенные полномочия.",
    englisch: "The security officer has no sovereign authority. They have citizen's rights and rights delegated by the client (e.g. house rules). The police possess sovereign powers."
  },
  "q-oeff-4": {
    farsi: "منظور از اصطلاح «اختیارات حاکمیتی» چیست؟",
    arabisch: "ماذا يُقصد بمصطلح 'الحقوق السيادية'؟",
    russisch: "Что понимается под термином 'Суверенные / властные права'?",
    englisch: "What is meant by the term 'Sovereign Rights'?"
  },
  "q-oeff-4-antwort": {
    farsi: "حقوق و اختیاراتی که منحصراً به دولت و نهادهای آن (مانند پلیس، گمرک، اداره نظم عمومی) جهت اجرای قانون تفویض شده است.",
    arabisch: "الحقوق الممنوحة حصريا للدولة وهيئاتها (مثل الشرطة، الجمارك، مكتب النظام) لإنفاذ وتطبيق القانون.",
    russisch: "Права, предоставленные исключительно государству и его органам (полиция, таможня) для обеспечения законности и правопорядка.",
    englisch: "Rights exclusively granted to the state and its authorities (e.g. police, customs) to enforce laws."
  },
  "q-oeff-5": {
    farsi: "انحصار قوه قهریه توسط دولت چه چیزی را تعیین می‌کند؟",
    arabisch: "ماذا ينظم مبدأ احتكار الدولة لاستخدام القوة؟",
    russisch: "Что регулирует монополия государства на применение силы?",
    englisch: "What is governed by the state's monopoly on the use of force?"
  },
  "q-oeff-5-antwort": {
    farsi: "اینکه اصولاً فقط دولت (از طریق ارگان‌های رسمی خود) مجاز به اعمال زور فیزیکی برای اجرای حقوق است. استثنائات برای افراد عادی فقط حقوق اضطراری (دفاع مشروع، اضطرار، خودیاری) است.",
    arabisch: "أن الدولة وحدها هي المخولة قانونا بممارسة القوة الجسدية لإنفاذ الحقوق. الاستثناءات للأفراد تقتصر على حقوق الضرورة (الدفاع الشرعي، حالة الضرورة، المساعدة الذاتية).",
    russisch: "То, что только государство имеет право применять физическую силу. Исключениями для граждан являются лишь права крайней необходимости (самооборона, крайняя необходимость, самопомощь).",
    englisch: "That fundamentally only the state may use physical force to enforce rights. Exceptions for private persons are only emergency rights (self-defense, necessity, self-help)."
  },
  "q-oeff-6": {
    farsi: "منظور از اصل «فرعی بودن / کمکی بودن» خدمات امنیتی خصوصی چیست؟",
    arabisch: "ماذا تعني 'التبعية والمساعدية' لخدمات الأمن الخاصة؟",
    russisch: "Что означает принцип субсидиарности частных охранных служб?",
    englisch: "What is meant by the 'subsidiarity' of private security services?"
  },
  "q-oeff-6-antwort": {
    farsi: "خدمات امنیتی خصوصی به صورت مکمل و زیرمجموعه در کنار اقدامات دولت فعالیت می‌کنند. آن‌ها جایگزین پلیس نیستند، بلکه به صورت پیشگیرانه در چارچوب سفارش خصوصی کمک می‌کنند.",
    arabisch: "تعمل الخدمات الخاصة بشكل مكمل وتابع للدولة. إنها لا تحل محل الشرطة بل تقدم الدعم الوقائي بتكليف خاص من العميل.",
    russisch: "Частная охрана действует подчиненно и вспомогательно по отношению к государству. Она не заменяет полицию, а помогает профилактически по частному заказу.",
    englisch: "Private security operates subordinate to the state. They do not replace the police, but provide preventive support under private contracts."
  },
  "q-oeff-7": {
    farsi: "چه زمانی خطری برای امنیت عمومی وجود دارد؟",
    arabisch: "متى ينشأ خطر على السلامة العامة؟",
    russisch: "Когда возникает опасность для общественной безопасности?",
    englisch: "When does a danger to public safety exist?"
  },
  "q-oeff-7-antwort": {
    farsi: "هنگامی که وضعیتی پیش آید که در آن با احتمال کافی، آسیب به یکی از منافع و ارزش‌های تحت حفاظت قانونی (مانند تخریب مال، صدمه بدنی) محتمل باشد.",
    arabisch: "عند وقوع حالة يُتوقع فيها باحتمال كافٍ حدوث ضرر لأحد الحقوق المحمية قانونا (مثل إتلاف الممتلكات أو الإيذاء الجسدي).",
    russisch: "Когда возникает ситуация, при которой с достаточной вероятностью угрожает ущерб охраняемым благам (например, повреждение имущества, вред здоровью).",
    englisch: "When a situation arises in which harm to a protected legal interest (e.g. property damage, personal injury) is sufficiently probable."
  },

  // Fallbeispiele (fall_01 bis fall_10)
  "fall_01": {
    farsi: "مورد ۱: مظنون در صندوق فروشگاه - شما به عنوان نگهبان فروشگاه الکترونیکی کار می‌کنید. هنگام خروج، دزدگیر به صدا درمی‌آید. مشتری اصرار به رفتن دارد و می‌گوید شما حق متوقف کردن مرا ندارید. ارزیابی قانونی شما چیست؟",
    arabisch: "الحالة 1: الاشتباه عند الصندوق - تعمل كحارس أمن في متجر إلكترونيات. عند خروج زبون ينطلق جرس الإنذار. يصر الزبون على المغادرة ويقول إنك لا تملك الحق في إيقافي. ما التكييف القانوني الصحيح؟",
    russisch: "Случай 1: Подозрение на кассе - Вы работаете охранником. При выходе клиента срабатывает сигнализация. Клиент пытается уйти и заявляет, что вы не имеете права его задерживать. Какова правовая оценка?",
    englisch: "Case 1: Suspicion at the checkout - You work as a security guard. When a customer leaves, the alarm triggers. The customer insists on leaving. What is the correct legal assessment?"
  },
  "fall_01-opt-0": {
    farsi: "الف) اقدام شما غیرقانونی است و اجبار مجرمانه محسوب می‌شود چون آژیر صرفاً هشدار فنی است و جرم را اثبات نمی‌کند.",
    arabisch: "أ) تصرفك غير قانوني ويشكل إكراها جنائيا لأن الإنذار مجرد إشارة فنية ولا يثبت وقوع جريمة.",
    russisch: "А) Ваши действия незаконны и представляют собой принуждение, так как сигнал тревоги не доказывает преступления.",
    englisch: "A) Your action is unlawful and constitutes coercion since the alarm is merely a technical indicator and does not prove a crime."
  },
  "fall_01-opt-1": {
    farsi: "ب) اقدام شما بر اساس § 127 Abs. 1 StPO (بازداشت موقت شهروندی) موجه است، زیرا آژیر نشانه وقوع جرم مشهود و خطر فرار است.",
    arabisch: "ب) تصرفك مبرر قانونا بموجب المادة § 127 الفقرة 1 من قانون الإجراءات الجنائية (التوقيف المؤقت) لوجود حالة تلبس وخطر هروب.",
    russisch: "Б) Ваши действия оправданы по § 127 ч. 1 УПК (временное задержание), так как сигнал указывает на свежее правонарушение и есть риск побега.",
    englisch: "B) Your action is justified under § 127 (1) StPO (provisional arrest) as the alarm indicates a fresh offense with flight risk."
  },
  "fall_01-opt-2": {
    farsi: "ج) اقدام شما بر اساس دفاع مشروع موجه است چون ادامه حرکت مشتری حمله به مال فروشگاه است.",
    arabisch: "ج) تصرفك مبرر بموجب الدفاع الشرعي لأن استمرار الزبون في السير اعتداء على ملكية المتجر.",
    russisch: "В) Ваши действия оправданы необходимой обороной, так как клиент посягает на собственность.",
    englisch: "C) Your action is justified under self-defense as continuing to walk attacks the store's property."
  },
  "fall_01-opt-3": {
    farsi: "د) اقدام شما فقط در صورتی قانونی است که قبلاً به او حق سکوت را تفهیم کرده باشید.",
    arabisch: "د) تصرفك قانوني فقط إذا قمت أولا بإعلام الزبون بحقه في التزام الصمت.",
    russisch: "Г) Ваши действия законны только в том случае, если вы разъяснили клиенту право не свидетельствовать против себя.",
    englisch: "D) Your action is lawful only if you first informed the customer of their right to remain silent."
  },
  "fall_01-exp": {
    farsi: "آژیر خطر ظن قوی وقوع جرم مشهود را ایجاد می‌کند (§ 127 Abs. 1 StPO). از آنجا که مشتری قصد فرار دارد، مسدود کردن راه و نگه داشتن او مجاز است.",
    arabisch: "يؤسس انطلاق الإنذار لشبهة قوية بوقوع جرم مشهود (§ 127 Abs. 1 StPO). ونظرا لرغبة المشتبه فيه بالفرار، فإن اعتراض طريقه مبرر قانونا.",
    russisch: "Сигнал тревоги дает обоснованное подозрение в совершении правонарушения (§ 127 ч. 1 УПК). Так как клиент пытается скрыться, удержание правомерно.",
    englisch: "The alarm establishes reasonable suspicion of a fresh act (§ 127 (1) StPO). Since the person intends to flee, detaining them is justified."
  },

  "fall_02": {
    farsi: "مورد ۲: سگ نگهبان رها شده - در گشت شبانه یک سگ بزرگ و خشمگین به سمت شما حمله می‌کند. با اسپری یا باتوم سگ را مجروح می‌کنید. مبنای توجیه قانونی شما چیست؟",
    arabisch: "الحالة 2: الكلب الهارب - أثناء دورية ليلية يهاجمك كلب حراسة ضخم وشديد الشراسة. تستخدم رذاذ الدفاع أو العصا وتصيب الكلب. ما السند القانوني لتبرير فعلك؟",
    russisch: "Случай 2: Агрессивная собака - Во время ночного патрулирования на вас нападает большая сторожевая собака. Вы раните собаку спецсредством. Каково правовое основание?",
    englisch: "Case 2: The loose guard dog - On night patrol, a large guard dog attacks you. You use defense spray or a baton to injure the dog. What is the legal justification?"
  },
  "fall_02-opt-2": {
    farsi: "ج) اضطرار تدافعی بر اساس § 228 BGB، زیرا خطر از خود شیء/حیوان نشأت گرفته و دفع آن ضروری بوده است.",
    arabisch: "ج) حالة الضرورة الدفاعية بموجب § 228 BGB لأن الخطر صادر من الشيء/الحيوان نفسه وكان رد الفعل ضروريا.",
    russisch: "В) Оборонительная крайняя необходимость (§ 228 ГК), так как опасность исходила от самого животного (вещи в гражданском праве).",
    englisch: "C) Defensive emergency under § 228 BGB, since the danger originated from the thing/animal itself and defense was necessary."
  },
  "fall_02-exp": {
    farsi: "دفاع مشروع در قانون فقط علیه حمله انسان اعمال می‌شود. حیوانات در حقوق مدنی در حکم اشیاء هستند؛ چون خطر از خود سگ بود، اضطرار تدافعی (§ 228 BGB) اعمال می‌شود.",
    arabisch: "الدفاع الشرعي ينطبق قانونا فقط على اعتداءات البشر. الحيوانات تعامل مدنيا كأشياء، ولأن الخطر صادر من الكلب نفسه تنطبق حالة الضرورة الدفاعية (§ 228 BGB).",
    russisch: "Самооборона применима ТОЛЬКО против нападений человека. Животные в гражданском праве приравниваются к вещам — применяется оборонительная крайняя необходимость (§ 228 ГК).",
    englisch: "Self-defense only applies to human attacks. Animals are treated as things under civil law; as the danger arose from the dog itself, defensive necessity (§ 228 BGB) applies."
  },

  // Written Test Sample Questions (wq-oeff-1, wq-oeff-2, etc.)
  "wq-oeff-1": {
    farsi: "مفهوم «امنیت عمومی» در حقوق آلمان شامل چه مواردی است؟",
    arabisch: "ماذا يشمل مفهوم 'السلامة العامة' في القانون الألماني؟",
    russisch: "Что включает в себя понятие 'Общественная безопасность' в немецком праве?",
    englisch: "What does the concept of 'Public Safety' encompass in German law?"
  },
  "wq-oeff-1-opt-0": {
    farsi: "الف) منحصراً حفاظت از ساختمان‌ها و تأسیسات دولتی.",
    arabisch: "أ) حماية المباني والمؤسسات الحكومية حصراً.",
    russisch: "А) Исключительно защиту государственных учреждений и зданий.",
    englisch: "A) Exclusively the protection of state facilities and buildings."
  },
  "wq-oeff-1-opt-1": {
    farsi: "ب) حفاظت از نظام حقوقی، حقوق فردی (جان، سلامت، آزادی، مال) و نهادهای دولتی.",
    arabisch: "ب) حماية النظام القانوني، والحقوق الفردية (الحياة، الصحة، الحرية، الملكية) ومؤسسات الدولة.",
    russisch: "Б) Защиту правопорядка, прав личности (жизнь, здоровье, свобода, собственность) и госучреждений.",
    englisch: "B) Protection of the legal order, individual rights (life, health, liberty, property), and state institutions."
  },
  "wq-oeff-1-opt-2": {
    farsi: "ج) فقط قواعد نانوشته اخلاقی برای رفتار در جامعه.",
    arabisch: "ج) فقط القواعد العرفية غير المكتوبة للسلوك في المجتمع.",
    russisch: "В) Только неписаные правила поведения в обществе (мораль и приличия).",
    englisch: "C) Only unwritten rules of conduct in public."
  },
  "wq-oeff-1-opt-3": {
    farsi: "د) حفظ منافع اقتصادی شرکت‌های خصوصی.",
    arabisch: "د) رعاية المصالح الاقتصادية للشركات الخاصة.",
    russisch: "Г) Защиту экономических интересов частных предприятий.",
    englisch: "D) Preserving the commercial interests of private businesses."
  },
  "wq-oeff-1-erklaerung": {
    farsi: "توضیح: امنیت عمومی شامل سه ارزش تحت حفاظت است: کل قوانین موضوعه، منافع فردی و دولت به همراه سازمان‌های آن.",
    arabisch: "الشرح: تشمل السلامة العامة ثلاثة أركان: النظام القانوني المكتوب، حقوق الأفراد، والدولة ومؤسساتها.",
    russisch: "Пояснение: Общественная безопасность включает три объекта защиты: правопорядок, права личности и государственные институты.",
    englisch: "Explanation: Public safety comprises three protected interests: written laws, individual rights, and state institutions."
  },

  // Video Scenario
  "scene-1": {
    farsi: "مهمانی به ورودی باشگاه نزدیک می‌شود. رفتار حرفه‌ای و مطابق قانون شما (§ 34a GewO) چگونه است؟",
    arabisch: "يقترب زائر من مدخل النادي. كيف تتصرف باحترافية وفقا للمادة § 34a GewO؟",
    russisch: "Посетитель подходит к входу в клуб. Как вести себя профессионально по § 34a GewO?",
    englisch: "A guest approaches the club entrance. How do you behave professionally under § 34a GewO?"
  },
  "scene-1-ans-0": {
    farsi: "احوال‌پرسی دوستانه و محترمانه و درخواست مؤدبانه برای ارائه کارت شناسایی عکس‌دار.",
    arabisch: "الترحيب بالزائر بأسلوب ودي ولطيف وطلب إبراز الهوية الشخصية بأدب.",
    russisch: "Приветливо поздороваться и вежливо попросить предъявить удостоверение личности с фото.",
    englisch: "Greet friendly and politely ask to present a photo ID."
  },
  "scene-1-fb-0": {
    farsi: "درست: برخورد منطقی، آرامش‌بخش و حرفه‌ای در اولین تماس با مشتری.",
    arabisch: "صحيح: تعامل موضوعي واحترافي يهدف لتهدئة الأجواء في الاتصال الأول.",
    russisch: "Правильно: Спокойное, деэскалационное и профессиональное поведение при первом контакте.",
    englisch: "Correct: Objective, de-escalating and professional approach upon initial contact."
  }
};

/**
 * Holt eine blitzschnelle, verlässliche Übersetzung (0ms) ohne externen Netzaufruf.
 */
export function getStaticTranslation(
  text: string,
  questionId?: string,
  targetLanguage?: SupportedLanguage | string,
  type?: 'frage' | 'antwort'
): string {
  if (!targetLanguage || targetLanguage === 'deaktiviert' || !text) {
    return '';
  }

  const langKey = targetLanguage.toLowerCase() as keyof TranslationEntry;
  if (!['farsi', 'arabisch', 'russisch', 'englisch'].includes(langKey)) {
    return '';
  }

  const cleanText = text.trim();

  // 1. Direct ID Lookup
  if (questionId) {
    if (type === 'antwort') {
      const ansEntry = TRANSLATIONS_BY_ID[`${questionId}-antwort`] || 
                       TRANSLATIONS_BY_ID[`${questionId}-ans`] || 
                       TRANSLATIONS_BY_ID[`${questionId}-exp`] ||
                       TRANSLATIONS_BY_ID[`${questionId}-erklaerung`];
      if (ansEntry && ansEntry[langKey]) return ansEntry[langKey];
    } else if (type === 'frage') {
      const qEntry = TRANSLATIONS_BY_ID[`${questionId}-frage`] || 
                     TRANSLATIONS_BY_ID[questionId];
      if (qEntry && qEntry[langKey]) return qEntry[langKey];
    }

    const exactIdEntry = TRANSLATIONS_BY_ID[questionId];
    if (exactIdEntry && exactIdEntry[langKey]) {
      return exactIdEntry[langKey];
    }
  }

  // 2. Direct exact phrase / legal term match
  const lowerText = cleanText.toLowerCase();
  for (const [term, entry] of Object.entries(LEGAL_TERMS_DICTIONARY)) {
    if (lowerText === term || lowerText.includes(term)) {
      if (entry[langKey]) return entry[langKey];
    }
  }

  // 3. Fallback matching from TRANSLATIONS_BY_ID values
  for (const [_, entry] of Object.entries(TRANSLATIONS_BY_ID)) {
    if (entry.englisch.toLowerCase() === lowerText || entry.russisch.toLowerCase() === lowerText) {
      return entry[langKey] || '';
    }
  }

  return '';
}
