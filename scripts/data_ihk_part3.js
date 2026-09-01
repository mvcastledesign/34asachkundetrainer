import { makeQuestion } from './questionHelper.js';

export const ihkPart3Questions = [
  // =========================================================================
  // 4. UMGANG MIT MENSCHEN & DEESKALATION (ihk-menschen-1 .. ihk-menschen-14)
  // =========================================================================
  makeQuestion({
    id: 'ihk-menschen-1',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was ist das oberste Ziel professioneller Kommunikation im Sicherheitsdienst?',
    optionsData: [
      {
        text: 'A) Konflikte frühzeitig erkennen und durch deeskalierendes Verhalten gewaltfrei lösen.',
        ru: 'Своевременно распознавать конфликты и бесконфликтно разрешать их с помощью деэскалации.',
        en: 'Recognizing conflicts early and resolving them non-violently through de-escalating behavior.',
        ar: 'التعرف المبكر على النزاعات وحلها سلمياً بدون عنف عبر أساليب التهدئة.',
        fa: 'شناسایی زودهنگام تعارضات و حل غیرخشونت‌آمیز آن‌ها از طریق رفتار تنش‌زدا.'
      },
      {
        text: 'B) Dem Gegenüber stets die eigene körperliche Überlegenheit zu demonstrieren.',
        ru: 'Всегда демонстрировать собеседнику свое физическое превосходство.',
        en: 'Always demonstrating one\'s own physical superiority to the counterpart.',
        ar: 'إظهار التفوق البدني أمام الطرف الآخر دائماً.',
        fa: 'نشان دادن دائمی برتری فیزیکی خود به طرف مقابل.'
      },
      {
        text: 'C) Jedes Streitgespräch sofort mit Schlägen zu beenden.',
        ru: 'Немедленно прекращать любой спор дракой.',
        en: 'Immediately ending any verbal dispute with physical blows.',
        ar: 'إنهاء كل مشادة كلامية فوراً بالضرب.',
        fa: 'پایان دادن فوری به هر مشاجره لفظی با اعمال ضرب و شتم.'
      },
      {
        text: 'D) Kunden einzuschüchtern, damit sie keine Fragen mehr stellen.',
        ru: 'Запугивать клиентов, чтобы они больше не задавали вопросов.',
        en: 'Intimidating customers so they refrain from asking questions.',
        ar: 'ترهيب العملاء حتى لا يطرحوا أي أسئلة أخرى.',
        fa: 'ارعاب و ترساندن مشتریان تا دیگر سؤالی نپرسند.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Deeskalation und gewaltfreie Konfliktlösung stehen an erster Stelle, um Gefahren für alle Beteiligten zu minimieren.',
    translations: {
      ru: {
        question: 'Какова главная цель профессионального общения в службе безопасности?',
        explanation: 'Деэскалация и ненасильственное решение конфликтов стоят на первом месте для минимизации рисков.'
      },
      en: {
        question: 'What is the primary objective of professional communication in security guarding?',
        explanation: 'De-escalation and non-violent conflict resolution take top priority to minimize dangers for all involved.'
      },
      ar: {
        question: 'ما هو الهدف الأسمى للتواصل المهني في خدمات الحراسة والأمن؟',
        explanation: 'تأتي التهدئة وحل النزاعات بدون عنف في المقام الأول لتقليل المخاطر على جميع الأطراف.'
      },
      fa: {
        question: 'هدف اصلی ارتباط حرفه‌ای در خدمات حراست و امنیت چیست؟',
        explanation: 'تنش‌زدایی و حل مسالمت‌آمیز اختلافات در اولویت اول قرار دارد تا خطرات به حداقل برسد.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-2',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche Faktoren fördern die Entstehung von Frustration und Aggression bei Kunden? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Lange Wartezeiten, unklare Anweisungen und respektloses Auftreten des Personals.',
        ru: 'Длительное время ожидания, неясные инструкции и неуважительное поведение персонала.',
        en: 'Long waiting times, unclear instructions, and disrespectful behavior by staff.',
        ar: 'فترات الانتظار الطويلة، التعليمات غير الواضحة، والتعامل غير المحترم من الموظفين.',
        fa: 'زمان انتظار طولانی، دستورالعمل‌های مبهم و رفتار غیرمحترمانه پرسنل.'
      },
      {
        text: 'B) Alkohol- und Drogenkonsum in Kombination mit überfüllten Räumen.',
        ru: 'Употребление алкоголя и наркотиков в сочетании с переполненными помещениями.',
        en: 'Alcohol and drug consumption combined with overcrowded premises.',
        ar: 'تعاطي الكحول والمخدرات إلى جانب ازدحام الأماكن.',
        fa: 'مصرف الکل و مواد مخدر همراه با شلوغی بیش از حد محیط.'
      },
      {
        text: 'C) Höfliche und transparente Kommunikation.',
        ru: 'Вежливое и открытое общение.',
        en: 'Polite and transparent communication.',
        ar: 'التواصل المهذب والشفاف.',
        fa: 'ارتباط محترمانه و شفاف.'
      },
      {
        text: 'D) Saubere und gut beleuchtete Eingangsbereiche.',
        ru: 'Чистые и хорошо освещенные входные зоны.',
        en: 'Clean and well-illuminated entrance areas.',
        ar: 'مداخل نظيفة ومضاءة جيداً.',
        fa: 'ورودی‌های تمیز و دارای روشنایی مناسب.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Frustration-Aggressions-Hypothese: Hindernisse bei der Zielerreichung (Warten, Abweisung, Alkohol) steigern Frust und Aggressionspotential.',
    translations: {
      ru: {
        question: 'Какие факторы способствуют возникновению фрустрации и агрессии у клиентов? (Выберите 2 ответа)',
        explanation: 'Фрустрация и агрессия усиливаются при задержках, неуважении, тесноте и алкогольном опьянении.'
      },
      en: {
        question: 'Which factors foster frustration and aggression among customers? (Choose two correct answers)',
        explanation: 'Frustration-aggression hypothesis: obstacles (delays, rejection, alcohol, crowds) intensify frustration and aggressive potential.'
      },
      ar: {
        question: 'ما هي العوامل التي تعزز الإحباط والعدوانية لدى العملاء؟ (اختر إجابتين صحيحتين)',
        explanation: 'تزداد العدوانية بسبب الانتظار والرفض والازدحام وتأثير الكحول.'
      },
      fa: {
        question: 'چه عواملی باعث تشدید سرخوردگی و پرخاشگری در مراجعین می‌شود؟ (دو پاسخ صحیح)',
        explanation: 'فرضیه ناکامی-پرخاشگری: موانع، معطلی، بی‌احترامی، شلوغی و مصرف الکل پتانسیل پرخاشگری را بالا می‌برند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-3',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter "Aktivem Zuhören" in der Deeskalation?',
    optionsData: [
      {
        text: 'A) Dem Gesprächspartner aufmerksam zuhören, Blickkontakt halten, ausreden lassen und das Verstandene mit eigenen Worten zusammenfassend spiegeln (Paraphrasieren).',
        ru: 'Внимательно слушать собеседника, поддерживать зрительный контакт, давать высказаться и своими словами перефразировать услышанное.',
        en: 'Attentively listening, maintaining eye contact, letting the speaker finish, and mirroring back what was understood in one\'s own words (paraphrasing).',
        ar: 'الاستماع باهتمام للطرف الآخر، والحفاظ على التواصل البصري، وتركه يكمل حديثه، وإعادة صياغة ما فُهم بكلماتك الخاصة.',
        fa: 'گوش دادن دقیق به مخاطب، حفظ ارتباط چشمی، اجازه کامل صحبت دادن و بازگو کردن خلاصه مطالب با کلمات خود (پارافریز).'
      },
      {
        text: 'B) Dem Gegenüber ständig ins Wort fallen, um die Dienstvorschrift zu zitieren.',
        ru: 'Постоянно перебивать собеседника цитированием служебных инструкций.',
        en: 'Constantly interrupting the counterpart to quote service regulations.',
        ar: 'مقاطعة المتحدث باستمرار لتلاوة لوائح العمل.',
        fa: 'قطع مکرر کلام طرف مقابل برای بازخوانی آیین‌نامه‌ها.'
      },
      {
        text: 'C) So tun als ob man zuhört, während man am Smartphone tippt.',
        ru: 'Делать вид, что слушаешь, печатая при этом в смартфоне.',
        en: 'Pretending to listen while typing on a smartphone.',
        ar: 'التظاهر بالاستماع أثناء الانشغال بالهاتف الذكي.',
        fa: 'تظاهر به گوش دادن در حالی که با گوشی تایپ می‌کنید.'
      },
      {
        text: 'D) Nur auf die Fehler des anderen warten, um ihn zu unterbrechen.',
        ru: 'Лишь выжидать ошибок собеседника, чтобы прервать его.',
        en: 'Only waiting for mistakes by the other party to interrupt them.',
        ar: 'التربص بأخطاء الآخر لمقاطعته.',
        fa: 'فقط منتظر اشتباه مخاطب ماندن برای قطع صحبت او.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Aktives Zuhören baut Emotionen ab, signalisiert Wertschätzung und klärt Missverständnisse vor einer Eskalation.',
    translations: {
      ru: {
        question: 'Что понимается под «активным слушанием» (Aktives Zuhören) при деэскалации?',
        explanation: 'Активное слушание снижает накал эмоций, демонстрирует уважение и предотвращает эскалацию.'
      },
      en: {
        question: 'What is meant by "active listening" in de-escalation?',
        explanation: 'Active listening diffuses intense emotions, signals mutual respect, and clarifies misunderstandings.'
      },
      ar: {
        question: 'ماذا يقصد بـ «الاستماع الفعال» (Aktives Zuhören) في تهدئة النزاعات؟',
        explanation: 'يساعد الاستماع الفعال على امتصاص الانفعالات وإبداء التقدير وتوضيح سوء الفهم قبل تفاقم النزاع.'
      },
      fa: {
        question: 'مفهوم «گوش دادن فعال» در تنش‌زدایی چیست؟',
        explanation: 'گوش دادن فعال بار هیجانی را کاهش داده، احترام را منتقل کرده و از سوءتفاهم جلوگیری می‌کند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-4',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche Distanzzonen unterscheidet die Körpersprache nach Edward T. Hall? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Die Intimdistanz (unter ca. 50 cm), die im Dienst grundsätzlich geschützt und nicht unbefugt unterschritten werden sollte.',
        ru: 'Интимная дистанция (менее 50 см), которую на службе следует защищать и не нарушать без необходимости.',
        en: 'The intimate zone (under approx. 50 cm), which should generally be protected and not encroached upon during duty.',
        ar: 'المسافة الحميمة (أقل من 50 سم تقريباً) والتي يجب الحفاظ عليها وعدم اختراقها أثناء الخدمة.',
        fa: 'حریم خصوصی/صمیمانه (کمتر از حدود ۵۰ سانتی‌متر) که در حین خدمت نباید بدون مجوز نقض شود.'
      },
      {
        text: 'B) Die persönliche und gesellschaftliche Distanz (ca. 1,20 m bis 3,50 m) für professionelle Kommunikation und Eigensicherung.',
        ru: 'Личная и социальная дистанция (от 1,20 до 3,50 м) для профессионального общения и безопасности.',
        en: 'The personal and social distance (approx. 1.20 m to 3.50 m) for professional interaction and tactical safety.',
        ar: 'المسافة الشخصية والاجتماعية (حوالي 1.20 م إلى 3.50 م) للتواصل المهني وحماية النفس.',
        fa: 'فاصله شخصی و اجتماعی (حدود ۱.۲۰ تا ۳.۵۰ متر) برای ارتباط حرفه‌ای و حفظ ایمنی فردی.'
      },
      {
        text: 'C) Die kosmische Distanz von mindestens 50 Kilometern.',
        ru: 'Космическая дистанция не менее 50 километров.',
        en: 'Cosmic distance of at least 50 kilometers.',
        ar: 'المسافة الكونية التي لا تقل عن 50 كيلومتراً.',
        fa: 'فاصله کیهانی به میزان حداقل ۵۰ کیلومتر.'
      },
      {
        text: 'D) Die Kampfdistanz von exakt 1 Zentimeter.',
        ru: 'Боевая дистанция ровно 1 сантиметр.',
        en: 'Combat distance of exactly 1 centimeter.',
        ar: 'مسافة الاشتباك البالغة 1 سنتيمتر بالضبط.',
        fa: 'فاصله نبرد به میزان دقیق ۱ سانتی‌متر.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Das Einhalten der persönlichen Distanzzone (> 1 m) ist zentral für Deeskalation und Eigensicherung (Reaktionszeit bei Angriffen).',
    translations: {
      ru: {
        question: 'Какие зоны дистанции выделяет кинесика (невербальная коммуникация) по Эдварду Холлу? (Выберите 2 ответа)',
        explanation: 'Соблюдение дистанции (> 1 м) критично для деэскалации и запаса времени на реакцию при нападении.'
      },
      en: {
        question: 'Which distance zones are distinguished in proxemics according to Edward T. Hall? (Choose two correct answers)',
        explanation: 'Maintaining personal safety distance (> 1 m) is crucial for both de-escalation and reaction time.'
      },
      ar: {
        question: 'ما هي مناطق المسافات التي يميزها علم لغة الجسد وفقاً لإدوارد تي هول؟ (اختر إجابتين صحيحتين)',
        explanation: 'الحفاظ على المسافة الشخصية (> 1 متر) أساسي للتهدئة وتوفير وقت كافٍ لرد الفعل عند التعرض لهجوم.'
      },
      fa: {
        question: 'بر اساس نظریه ادوارد هال، کدام حریم‌های فاصله‌گذاری در زبان بدن وجود دارد؟ (دو پاسخ صحیح)',
        explanation: 'رعایت فاصله مناسب شخصی (> ۱ متر) هم برای آرام‌سازی فضا و هم برای زمان واکنش دفاعی حیاتی است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-5',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Wie verhält man sich deeskalierend gegenüber einer hochaggressiven Person?',
    optionsData: [
      {
        text: 'A) Ruhig und bestimmt sprechen, offene Körperhaltung einnehmen, Sicherheitsabstand halten und Beleidigungen nicht persönlich nehmen.',
        ru: 'Говорить спокойно и уверенно, сохранять открытую позу, держать безопасную дистанцию и не воспринимать оскорбления на свой счет.',
        en: 'Speak calmly and assertively, maintain an open body posture, keep safety distance, and avoid taking insults personally.',
        ar: 'التحدث بهدوء وحزم، واتخاذ وضعية جسد مريحة ومنفتحة، والحفاظ على مسافة أمان، وعدم أخذ الإهانات بشكل شخصي.',
        fa: 'صحبت کردن آرام و قاطع، حفظ حالت بدنی باز، رعایت فاصله ایمن و شخصی تلقی نکردن توهین‌ها.'
      },
      {
        text: 'B) Die Person anschreien und auslachen.',
        ru: 'Кричать на человека и насмехаться над ним.',
        en: 'Shouting at the person and ridiculing them.',
        ar: 'الصراخ في وجه الشخص والاستهزاء به.',
        fa: 'فریاد زدن سر شخص و مسخره کردن او.'
      },
      {
        text: 'C) Der Person sofort drohen und sie am Kragen packen.',
        ru: 'Сразу угрожать человеку и хватать его за воротник.',
        en: 'Immediately threatening the person and grabbing their collar.',
        ar: 'تهديد الشخص فوراً والإمساك به من ياقته.',
        fa: 'تهدید فوری فرد و گرفتن یقه او.'
      },
      {
        text: 'D) Sich sofort umdrehen und weglaufen.',
        ru: 'Сразу повернуться спиной и убежать.',
        en: 'Immediately turning around and running away.',
        ar: 'الاستدارة فوراً والفرار.',
        fa: 'چرخیدن و فرار کردن ناگهانی.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Souveräne Körpersprache, sachliche Sprache und Distanz verhindern die emotionale Aufschaukelung des Konflikts.',
    translations: {
      ru: {
        question: 'Как вести себя в манере деэскалации по отношению к крайне агрессивному человеку?',
        explanation: 'Спокойный тон, открытые жесты и дистанция препятствуют дальнейшему нарастанию агрессии.'
      },
      en: {
        question: 'How does one behave in a de-escalating manner toward a highly aggressive person?',
        explanation: 'Composed body language, factual tone, and safe physical spacing prevent emotional conflict escalation.'
      },
      ar: {
        question: 'كيف تتصرف بأسلوب تهدئة إزاء شخص شديد العدوانية والغضب؟',
        explanation: 'لغة الجسد الواثقة والحديث الهادئ والمسافة الآمنة تمنع تصاعد المشاعر العدوانية.'
      },
      fa: {
        question: 'چگونه باید رفتاری تنش‌زدا در مواجهه با یک فرد به شدت پرخاشگر در پیش گرفت؟',
        explanation: 'زبان بدن مسلط، لحن منطقی و حفظ فاصله مانع از تشدید هیجانی درگیری می‌شود.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-6',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter dem "4-Ohren-Modell" von Friedemann Schulz von Thun? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Eine Nachricht enthält 4 Aspekte: Sachinhalt, Selbstoffenbarung, Beziehung und Appell.',
        ru: 'Сообщение содержит 4 аспекта: факт/содержание, самораскрытие, отношение и призыв к действию.',
        en: 'A message contains 4 facets: factual content, self-revelation, relationship, and appeal.',
        ar: 'تحتوي الرسالة على 4 جوانب: المحتوى الموضوعي، الإفصاح عن الذات، العلاقة، والطلب/النداء.',
        fa: 'یک پیام حاوی ۴ بعد است: محتوای موضوعی، افشای خود، رابطه، و درخواست/دستور.'
      },
      {
        text: 'B) Der Empfänger kann eine Nachricht auf verschiedenen Ebenen interpretieren, was häufig zu Missverständnissen führt.',
        ru: 'Получатель может воспринимать сообщение на разных уровнях, что часто ведет к недопониманию.',
        en: 'The receiver can interpret a message on different layers, frequently leading to misunderstandings.',
        ar: 'يمكن للمستلم تفسير الرسالة على مستويات مختلفة مما يسبب سوء الفهم غالباً.',
        fa: 'گیرنده می‌تواند پیام را در سطوح مختلفی برداشت کند که اغلب منجر به سوءتفاهم می‌شود.'
      },
      {
        text: 'C) Menschen mit Brille hören viermal besser als Menschen ohne.',
        ru: 'Люди в очках слышат в 4 раза лучше тех, кто без очков.',
        en: 'People wearing glasses hear four times better than those without.',
        ar: 'أصحاب النظارات يسمعون أفضل بأربع مرات من غيرهم.',
        fa: 'افراد عینکی چهار برابر بهتر از دیگران می‌شنوند.'
      },
      {
        text: 'D) Ein Funkgerät muss 4 Frequenzen gleichzeitig abhören.',
        ru: 'Радиостанция должна одновременно слушать 4 частоты.',
        en: 'A two-way radio must listen to 4 frequencies concurrently.',
        ar: 'يجب أن يستقبل جهاز اللاسلكي 4 ترددات في وقت واحد.',
        fa: 'دستگاه بی‌سیم باید همزمان ۴ فرکانس را بشنود.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Schulz von Thun: 1. Sachinhalt, 2. Selbstkundgabe, 3. Beziehungshinweis, 4. Appell. Viele Konflikte entstehen auf der Beziehungsebene.',
    translations: {
      ru: {
        question: 'Что понимается под «моделью четырех ушей» Шульца фон Туна? (Выберите 2 ответа)',
        explanation: 'Каждое сообщение передает 4 стороны (факты, самораскрытие, отношение, призыв). Конфликты чаще всего возникают на уровне отношений.'
      },
      en: {
        question: 'What is understood by Schulz von Thun\'s "Four-Sides Model" of communication? (Choose two correct answers)',
        explanation: 'Schulz von Thun: 1. Facts, 2. Self-revelation, 3. Relationship, 4. Appeal. Most escalations originate on the relationship level.'
      },
      ar: {
        question: 'ماذا يقصد بنموذج «الآذان الأربع» لفريدمان شولتس فون تون؟ (اختر إجابتين صحيحتين)',
        explanation: 'تشمل الرسالة 4 جوانب (الحقائق، كشف الذات، العلاقة، الطلب). ومعظم النزاعات تنشأ بسبب سوء الفهم في جانب العلاقة.'
      },
      fa: {
        question: 'مدل «چهار گوش» شولتس فون تون در ارتباطات به چه معناست؟ (دو پاسخ صحیح)',
        explanation: 'پیام دارای ۴ لایه است (واقعیت، توصیف خود، رابطه، درخواست). اکثر تنش‌ها در لایه رابطه رخ می‌دهند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-7',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was kennzeichnet "Interkulturelle Kompetenz" im Sicherheitsdienst?',
    optionsData: [
      {
        text: 'A) Das Bewusstsein und der respektvolle Umgang mit kulturellen Unterschieden, Normen und Kommunikationsmustern.',
        ru: 'Осознание и уважительное отношение к культурным различиям, нормам и моделям общения.',
        en: 'Awareness of and respectful interaction with cultural differences, social norms, and communication patterns.',
        ar: 'الوعي بالاختلافات الثقافية والمعايير وأنماط التواصل والتعامل معها باحترام.',
        fa: 'آگاهی و برخورد محترمانه با تفاوت‌های فرهنگی، هنجارها و الگوهای ارتباطی گوناگون.'
      },
      {
        text: 'B) Die Beherrschung aller Sprachen der Welt.',
        ru: 'Владение всеми языками мира.',
        en: 'Fluency in all spoken languages worldwide.',
        ar: 'إتقان جميع لغات العالم.',
        fa: 'تسلط کامل به تمام زبان‌های دنیا.'
      },
      {
        text: 'C) Die Bevorzugung bestimmter Nationalitäten bei Einlasskontrollen.',
        ru: 'Предоставление преимуществ определенным национальностям при контроле на входе.',
        en: 'Favoring specific nationalities during entrance screenings.',
        ar: 'تفضيل جنسيات معينة عند التفتيش على المداخل.',
        fa: 'ترجیح دادن ملیت‌های خاص در بازرسی‌های ورودی.'
      },
      {
        text: 'D) Das Ignorieren von religiösen Speise- und Verhaltensregeln.',
        ru: 'Игнорирование религиозных традиций и правил поведения.',
        en: 'Ignoring religious dietary and behavioral guidelines.',
        ar: 'تجاهل القواعد الدينية للأطعمة والسلوك.',
        fa: 'نادیده گرفتن قواعد رفتاری و رژیم‌های مذهبی.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Interkulturelle Kompetenz vermeidet Vorurteile und Missverständnisse durch respektvollen Umgang mit Menschen verschiedener Herkunft.',
    translations: {
      ru: {
        question: 'Что характеризует «межкультурную компетентность» (Interkulturelle Kompetenz) в охранной деятельности?',
        explanation: 'Межкультурная компетентность позволяет избегать стереотипов и конфликтов при общении с людьми разных культур.'
      },
      en: {
        question: 'What characterizes "intercultural competence" in security services?',
        explanation: 'Intercultural competence prevents prejudices and misunderstandings through respectful interaction across cultures.'
      },
      ar: {
        question: 'ما الذي يميز «الكفاءة الثقافية المتبادلة» في عمل الأمن والحراسة؟',
        explanation: 'تساعد الكفاءة الثقافية على تجنب الأحكام المسبقة وسوء الفهم عبر الاحترام المتبادل لجميع الثقافات.'
      },
      fa: {
        question: 'ویژگی «شایستگی بین‌فرهنگی» در خدمات امنیتی چیست؟',
        explanation: 'شایستگی بین‌فرهنگی با تعامل محترمانه با افراد از فرهنگ‌های مختلف مانع از پیش‌داوری و سوءتفاهم می‌شود.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-8',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche psychologischen Phänomene können in einer Menschenmenge (Massenpanik) auftreten? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Herdenverhalten und Ansteckungseffekte (Nachahmen der Fluchtbewegung ohne Prüfung der Gefahr).',
        ru: 'Стадное поведение и эффекты эмоционального заражения (подражание бегству без оценки реальной опасности).',
        en: 'Herd behavior and contagion effects (mimicking flight movements without verifying actual hazard).',
        ar: 'سلوك القطيع وتأثيرات العدوى النفسية (تقليد حركة الهروب دون التحقق من مصدر الخطر).',
        fa: 'رفتار گله‌ای و اثر سرایت روانی (تقلید حرکت فرار بدون ارزیابی خطر واقعی).'
      },
      {
        text: 'B) Verminderte individuelle Hemmschwelle und herabgesetzte rationale Urteilsfähigkeit.',
        ru: 'Снижение индивидуального порога сдержанности и ослабление рационального мышления.',
        en: 'Diminished individual inhibitions and lowered rational reasoning capacity.',
        ar: 'انخفاض مستوى الردع الذاتي وتراجع التفكير العقلاني السليم.',
        fa: 'کاهش بازدارندگی فردی و افت توانایی قضاوت عقلانی.'
      },
      {
        text: 'C) Spontane juristische Fachdiskussionen aller Anwesenden.',
        ru: 'Спонтанные юридические дискуссии среди собравшихся.',
        en: 'Spontaneous legal debates among all crowd members.',
        ar: 'نقاشات قانونية تخصصية عفوية بين الحاضرين.',
        fa: 'بحث‌های حقوقی تخصصی خودجوش میان حاضران.'
      },
      {
        text: 'D) Vollständiges Einschlafen der Menge.',
        ru: 'Внезапное засыпание всей толпы.',
        en: 'The entire crowd falling completely asleep.',
        ar: 'استغراق الجمهور كاملاً في النوم فجأة.',
        fa: 'به خواب رفتن کامل جمعیت.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Massenpsychologie: Anonymität senkt die Hemmschwelle, Emotionen und Fluchtimpulse übertragen sich rasend schnell auf die Menge.',
    translations: {
      ru: {
        question: 'Какие психологические явления могут возникать в толпе (массовая паника)? (Выберите 2 ответа)',
        explanation: 'В толпе снижается самоконтроль и критическое мышление, а панические импульсы мгновенно передаются другим.'
      },
      en: {
        question: 'Which psychological phenomena can emerge within a crowd (mass panic)? (Choose two correct answers)',
        explanation: 'Crowd dynamics: anonymity diminishes behavioral inhibitions, and flight impulses spread contagiously.'
      },
      ar: {
        question: 'ما هي الظواهر النفسية التي قد تظهر بين الحشود (الهلع الجماعي)؟ (اختر إجابتين صحيحتين)',
        explanation: 'في الحشود تتراجع السيطرة الذاتية وتنتقل مشاعر الهلع ونوازع الفرار بسرعة هائلة كعدوى.'
      },
      fa: {
        question: 'کدام پدیده‌های روانشناختی ممکن است در ازدحام جمعیت (وحشت جمعی) رخ دهد؟ (دو پاسخ صحیح)',
        explanation: 'روانشناسی توده: گمنامی در جمعیت باعث کاهش خویشتن‌داری شده و تکانه‌های فرار به سرعت سرایت می‌کنند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-9',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter dem Begriff "Vorurteil"?',
    optionsData: [
      {
        text: 'A) Ein vorgefasstes, meist negatives Urteil über eine Person oder Gruppe ohne vorherige sachliche Prüfung der Realität.',
        ru: 'Предвзятое, чаще всего негативное суждение о человеке или группе без объективной проверки фактов.',
        en: 'A preconceived, usually negative judgment about a person or group made without objective assessment of facts.',
        ar: 'حكم مسبق، غالباً ما يكون سلبياً، تجاه شخص أو جماعة دون تحقق موضوعي مسبق من الواقع.',
        fa: 'قضاوت از پیش شکل‌گرفته و غالباً منفی درباره یک شخص یا گروه بدون ارزیابی عینی واقعیت.'
      },
      {
        text: 'B) Ein rechtskräftiges Gerichtsurteil des Bundesgerichtshofs.',
        ru: 'Вступившее в законную силу решение Федерального верховного суда.',
        en: 'A legally binding court ruling issued by the Federal Court of Justice.',
        ar: 'حكم قضائي بات صادر عن المحكمة الاتحادية العليا.',
        fa: 'حکم قطعی دادگاه عالی فدرال.'
      },
      {
        text: 'C) Eine wissenschaftliche Studie über Sicherheitsrisiken.',
        ru: 'Научное исследование рисков безопасности.',
        en: 'A scientific research study on security risks.',
        ar: 'دراسة علمية حول المخاطر الأمنية.',
        fa: 'مطالعه علمی درباره ریسک‌های امنیتی.'
      },
      {
        text: 'D) Die Auswertung von Videoaufzeichnungen.',
        ru: 'Анализ записей видеонаблюдения.',
        en: 'The operational analysis of video recordings.',
        ar: 'تحليل وتقييم تسجيلات كاميرات المراقبة.',
        fa: 'بررسی و تحلیل تصاویر ضبط‌شده دوربین‌ها.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Vorurteile sind verallgemeinernde, unreflektierte Einstellungen, die im Sicherheitsdienst durch professionelle Sachlichkeit ersetzt werden müssen.',
    translations: {
      ru: {
        question: 'Что понимается под термином «предрассудок» (Vorurteil)?',
        explanation: 'Предрассудки — это необоснованные обобщения, которые охранник обязан заменять профессиональной объективностью.'
      },
      en: {
        question: 'What is understood by the concept of "prejudice" (Vorurteil)?',
        explanation: 'Prejudices are generalized, unreflective assumptions that security guards must replace with professional objectivity.'
      },
      ar: {
        question: 'ماذا يقصد بمفهوم «الحكم المسبق» (Vorurteil)؟',
        explanation: 'الأحكام المسبقة مواقف تعميمية غير مدروسة يجب على رجل الأمن استبدالها بالموضوعية والحياد.'
      },
      fa: {
        question: 'مفهوم «پیش‌داوری» (Vorurteil) چیست؟',
        explanation: 'پیش‌داوری دیدگاهی تعمیم‌یافته و بدون تفکر است که پرسنل حراست باید آن را با بی‌طرفی حرفه‌ای جایگزین کنند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-10',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Wie sollte ein Sicherheitsmitarbeiter reagieren, wenn er selbst in einem Konflikt beleidigt wird? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Sachlich und professionell bleiben, Beleidigungen nicht auf persönlicher Ebene vergelten.',
        ru: 'Сохранять деловой тон и хладнокровие, не отвечать оскорблениями на личном уровне.',
        en: 'Remain objective and professional; do not retaliate against verbal insults on a personal level.',
        ar: 'البقاء موضوعياً ومهنياً وعدم الرد على الإساءات بالمثل على المستوى الشخصي.',
        fa: 'حفظ آرامش و رفتار حرفه‌ای و عدم پاسخگویی متقابل به توهین‌ها در سطح شخصی.'
      },
      {
        text: 'B) Die Grenze klar aufzeigen, die Person verwarnen und bei Fortdauer das Hausrecht durchsetzen oder Strafanzeige erstatten.',
        ru: 'Четко обозначить границы, предупредить нарушителя и при продолжении применить право хозяина объекта или подать заявление о преступлении.',
        en: 'Clearly set boundaries, warn the individual, and if behavior persists, enforce domiciliary rights or file criminal charges.',
        ar: 'تحديد الحدود بوضوح وتحذير الشخص وإنفاذ حق المكان أو تقديم شكوى جنائية إذا استمر.',
        fa: 'تعیین صریح مرزها، تذکر دادن به فرد و در صورت تداوم، اجرای حق مالکانه یا ثبت شکایت کیفری.'
      },
      {
        text: 'C) Den Betreffenden sofort mit doppelter Lautstärke zurückbeleidigen.',
        ru: 'Немедленно обругать нарушителя в ответ в два раза громче.',
        en: 'Immediately insult the counterpart back with double volume.',
        ar: 'رد الإهانة للشخص فوراً وبصوت أعلى مرتين.',
        fa: 'فحاشی متقابل به طرف مقابل با دو برابر بلندی صدا.'
      },
      {
        text: 'D) Sofort körperliche Gewalt anwenden.',
        ru: 'Немедленно применить физическую силу.',
        en: 'Instantly resort to physical violence.',
        ar: 'استخدام العنف الجسدي فوراً.',
        fa: 'به‌کارگیری فوری خشونت فیزیکی.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Professionelle Distanz: Eigene Emotionen kontrollieren, Grenzen sachlich aufzeigen und rechtliche Konsequenzen ruhig ankündigen.',
    translations: {
      ru: {
        question: 'Как должен реагировать охранник при оскорблениях в свой адрес во время конфликта? (Выберите 2 ответа)',
        explanation: 'Профессиональная дистанция: контролировать эмоции, четко указывать рамки дозволенного и применять правовые меры.'
      },
      en: {
        question: 'How should a security employee respond when insulted during a confrontation? (Choose two correct answers)',
        explanation: 'Professional detachment: control own emotions, set firm boundaries, and calmly announce legal consequences.'
      },
      ar: {
        question: 'كيف ينبغي لحارس الأمن التصرف عند تعرضه للإهانة والسب أثناء النزاع؟ (اختر إجابتين صحيحتين)',
        explanation: 'الحياد المهني: ضبط النفس ووضع حدود حازمة بهدوء وتطبيق الإجراءات القانونية عند اللزوم.'
      },
      fa: {
        question: 'نیروی حراست در صورت توهین شنیدن در جریان یک درگیری چگونه باید رفتار کند؟ (دو پاسخ صحیح)',
        explanation: 'فاصله‌گذاری حرفه‌ای: مهار احساسات شخصی، مشخص کردن قاطع مرزها و اعلام آرام پیامدهای قانونی.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-11',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was bedeutet "Eigensicherung" im praktischen Sicherheitsdienst?',
    optionsData: [
      {
        text: 'A) Vor jedem Eingreifen die Gefahrenlage einschätzen, Verstärkung anfordern, Abstand wahren und sich nicht leichtfertig in Lebensgefahr begeben.',
        ru: 'Оценивать обстановку перед любым вмешательством, вызывать подкрепление, держать дистанцию и не подвергать свою жизнь неоправданному риску.',
        en: 'Assessing the threat prior to any intervention, calling for backup, maintaining distance, and avoiding reckless self-endangerment.',
        ar: 'تقييم الموقف الخطير قبل أي تدخل، وطلب الدعم، والحفاظ على مسافة أمان، وعدم تعريض النفس للخطر باستهتار.',
        fa: 'ارزیابی وضعیت خطر قبل از هر مداخله‌ای، درخواست نیروی کمکی، حفظ فاصله و پرهیز از به خطر انداختن جان خود.'
      },
      {
        text: 'B) Sich immer vor dem Kunden verstecken und die Arbeit verweigern.',
        ru: 'Всегда прятаться от клиентов и отказываться от работы.',
        en: 'Always hiding from clients and refusing to perform duties.',
        ar: 'الاختباء من العميل دائماً والامتناع عن أداء العمل.',
        fa: 'پنهان شدن همیشگی از مشتریان و امتناع از انجام کار.'
      },
      {
        text: 'C) Waffen ohne Genehmigung im Holster tragen.',
        ru: 'Носить оружие в кобуре без соответствующего разрешения.',
        en: 'Carrying unauthorized firearms in a holster.',
        ar: 'حمل أسلحة بدون ترخيص في الجراب.',
        fa: 'حمل غیرمجاز سلاح در غلاف.'
      },
      {
        text: 'D) Ausschließlich im gepanzerten Fahrzeug sitzen bleiben.',
        ru: 'Сидеть исключительно внутри бронированного автомобиля.',
        en: 'Strictly remaining inside an armored vehicle at all times.',
        ar: 'البقاء داخل سيارة مصفحة فقط دون الخروج منها.',
        fa: 'صرفاً در خودروی زرهی نشستن.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Eigensicherung hat stets Vorrang vor Fremdschutz oder dem Schutz von Sachwerten: Lagebeurteilung, Abstand, Funkkontakt und Teamabsprache.',
    translations: {
      ru: {
        question: 'Что означает «самобезопасность» (Eigensicherung) в практической работе охраны?',
        explanation: 'Собственная безопасность всегда в приоритете: оценка рисков, дистанция, связь и вызов подкрепления.'
      },
      en: {
        question: 'What does "self-protection / officer safety" (Eigensicherung) mean in practical security work?',
        explanation: 'Self-protection takes absolute precedence over defending property: assess situation, keep distance, radio for backup.'
      },
      ar: {
        question: 'ماذا يعني «تأمين وحماية النفس» (Eigensicherung) في الممارسة الأمنية؟',
        explanation: 'حماية النفس لها الأولوية على حماية الممتلكات: تقييم المخاطر، والمسافة الآمنة، والاتصال باللاسلكي لطلب الدعم.'
      },
      fa: {
        question: 'مفهوم «حفظ ایمنی شخصی» (Eigensicherung) در کار عملیاتی حراست چیست؟',
        explanation: 'حفظ جان خود همواره بر حفاظت از اموال ارجحیت دارد: ارزیابی صحنه، حفظ فاصله، ارتباط بی‌سیمی و کار تیمی.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-12',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Welche nonverbalen Signale deuten auf eine unmittelbar bevorstehende körperliche Aggression hin? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Geballte Fäuste, vorgeschobenes Kinn, starrer Blickkontakt und schnelles Näherkommen.',
        ru: 'Сжатые кулаки, выдвинутый вперед подбородок, пристальный взгляд и быстрое сокращение дистанции.',
        en: 'Clenched fists, thrust-forward chin, fixed staring eye contact, and rapid forward movement.',
        ar: 'قبضات اليد المشدودة، بروز الذقن للأمام، التحديق الحاد بالعين، والاقتراب السريع.',
        fa: 'مشت‌های گره‌کرده، چانه جلو آمده، خیره شدن تهاجمی و نزدیک شدن سریع.'
      },
      {
        text: 'B) Muskelanspannung, Zähneknirschen und Entledigen von Kleidungsstücken (z. B. Jacke ausziehen).',
        ru: 'Напряжение мышц, скрежетание зубами и снятие одежды (например, куртки).',
        en: 'Muscle tensing, grinding teeth, and shedding outer garments (e.g. taking off a jacket).',
        ar: 'توتر العضلات، وصرير الأسنان، ونزع قطع من الملابس (مثل خلع السترة).',
        fa: 'انقباض عضلات، دندان‌قروچه کردن و درآوردن لباس‌ها (مانند درآوردن کاپشن).'
      },
      {
        text: 'C) Ein entspanntes Lächeln und Gähnen.',
        ru: 'Расслабленная улыбка и зевота.',
        en: 'A relaxed smile and casual yawning.',
        ar: 'ابتسامة مريحة وتثاؤب مسترخٍ.',
        fa: 'لبخند آرام و خمیازه کشیدن.'
      },
      {
        text: 'D) Das Binden der Schnürsenkel im Sitzen.',
        ru: 'Завязывание шнурков в сидячем положении.',
        en: 'Tying shoelaces while sitting down.',
        ar: 'ربط أربطة الحذاء أثناء الجلوس.',
        fa: 'بستن بند کفش در حالت نشسته.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Körperliche Warnsignale (Tunnelblick, Faustbildung, Distanzverringerung) erfordern sofortige Eigensicherungsmaßnahmen (Abstand, Schutzhaltung).'
    ,
    translations: {
      ru: {
        question: 'Какие невербальные сигналы указывают на скорое физическое нападение? (Выберите 2 ответа)',
        explanation: 'Предупреждающие знаки (кулаки, снятие куртки, сжатые зубы) требуют немедленного перехода к мерам защиты.'
      },
      en: {
        question: 'Which non-verbal cues indicate imminent physical aggression? (Choose two correct answers)',
        explanation: 'Physical danger cues (tunnel vision, clenched fists, closing distance) require immediate safety measures.'
      },
      ar: {
        question: 'ما هي الإشارات الجسدية غير اللفظية التي تنذر باعتداء بدني وشيك؟ (اختر إجابتين صحيحتين)',
        explanation: 'إشارات الخطر (القبضات المشدودة، خلع الملابس، صرير الأسنان) تتطلب اتخاذ تدابير حماية النفس فوراً.'
      },
      fa: {
        question: 'کدام علائم غیرکلامی نشان‌دهنده پرخاشگری فیزیکی قریب‌الوقوع هستند؟ (دو پاسخ صحیح)',
        explanation: 'علائم هشداردهنده بدنی (مشت کردن، دندان‌قروچه، درآوردن لباس) مستلزم تدابیر فوری دفاع شخصی است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-13',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Was versteht man unter dem "Halo-Effekt" in der Wahrnehmungspsychologie?',
    optionsData: [
      {
        text: 'A) Ein einzelnes auffälliges Merkmal einer Person (z. B. Kleidung, Aussehen) überstrahlt alle anderen Eigenschaften und bestimmt das Gesamturteil.',
        ru: 'Одна заметная черта человека (например, одежда, внешность) затмевает все остальные качества и определяет общее суждение о нем.',
        en: 'A single salient trait of a person (e.g. clothing, appearance) overshadows all other characteristics and dominates the overall judgment.',
        ar: 'صفة أو مظهر بارز لشخص (مثل ملابسه أو مظهره) يطغى على باقي خصائصه ويحدد التقييم الشامل عنه.',
        fa: 'یک ویژگی برجسته فرد (مانند نوع لباس یا ظاهر) سایر خصوصیات او را تحت‌الشعاع قرار داده و کل قضاوت درباره او را شکل می‌دهد.'
      },
      {
        text: 'B) Der Schutzeffekt einer Kevlar-Weste.',
        ru: 'Защитный эффект кевларового бронежилета.',
        en: 'The protective absorption effect of a Kevlar vest.',
        ar: 'الأثر الوقائي لسترة الحماية الواقية من الرصاص.',
        fa: 'اثر محافظتی جلیقه ضدگلوله کولار.'
      },
      {
        text: 'C) Das Nachleuchten von Notausgangsschildern.',
        ru: 'Свечение указателей аварийного выхода в темноте.',
        en: 'The photoluminescent afterglow of emergency exit signs.',
        ar: 'التوهج الفوسفوري للوحات مخارج الطوارئ في الظلام.',
        fa: 'شب‌تابی و درخشش تابلوهای خروج اضطراری در تاریکی.'
      },
      {
        text: 'D) Die Blendwirkung von Taschenlampen im Dunkeln.',
        ru: 'Ослепляющее действие фонарей в темноте.',
        en: 'The blinding glare caused by tactical flashlights in the dark.',
        ar: 'تأثير التوهج المعمي للمصابيح الكاشفة في الظلام.',
        fa: 'اثر خیره‌کنندگی چراغ‌قوه در تاریکی.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Der Halo-Effekt (Heiligenschein-Effekt) führt zu Fehleinschätzungen, indem man von einem Merkmal (z. B. Anzug = seriös) voreilig auf das Gesamtverhalten schließt.',
    translations: {
      ru: {
        question: 'Что понимается под «эффектом ореола» (Halo-Effekt) в психологии восприятия?',
        explanation: 'Эффект ореола ведет к ошибкам в оценке, когда по одной детали (костюм = порядочный) судят о человеке в целом.'
      },
      en: {
        question: 'What is understood by the "Halo Effect" in perception psychology?',
        explanation: 'The halo effect biases judgment by inappropriately generalizing from one single trait (e.g. suit = trustworthy) to the entire personality.'
      },
      ar: {
        question: 'ماذا يقصد بـ «تأثير الهالة» (Halo-Effekt) في علم نفس الإدراك؟',
        explanation: 'يؤدي تأثير الهالة لأخطاء في التقييم حين يطغى مظهر معين (مثل البدلة الأنيقة = شخص موثوق) على التقييم الكلي.'
      },
      fa: {
        question: 'مفهوم «اثر هاله‌ای» (Halo-Effekt) در روانشناسی ادراک چیست؟',
        explanation: 'اثر هاله‌ای باعث قضاوت اشتباه می‌شود به طوری که یک ویژگی (مانند کت و شلوار = معتبر) به کل شخصیت تعمیم داده می‌شود.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-menschen-14',
    kategorie: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    frage: 'Wie reagiert man richtig bei einer Bombendrohung am Telefon? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Ruhe bewahren, Anrufer ausreden lassen, genaue Notizen machen (Hintergrundgeräusche, Stimme, Text) und parallel die Leitstelle / Polizei alarmieren.',
        ru: 'Сохранять спокойствие, дать звонящему высказаться, подробно записать детали (фоновые шумы, акцент, текст) и параллельно оповестить дежурную часть/полицию.',
        en: 'Stay calm, let the caller speak, take meticulous notes (background noises, voice, text), and alert dispatch/police in parallel.',
        ar: 'الهدوء التام، وترك المتصل يتحدث حتى النهاية، وتدوين الملاحظات الدقيقة (أصوات الخلفية، نبرة الصوت، نص التهديد)، وإبلاغ الشرطة وغرفة العمليات بالتوازي.',
        fa: 'حفظ خونسردی، اجازه کامل صحبت به تماس‌گیرنده، یادداشت دقیق جزئیات (صدای پس‌زمینه، لهجه، متن) و هشدار همزمان به مرکز کنترل/پلیس.'
      },
      {
        text: 'B) W-Fragen stellen: Wo ist die Bombe? Wann explodiert sie? Wie sieht sie aus? Warum tun Sie das?',
        ru: 'Задавать ключевые вопросы: Где заложена бомба? Когда взрыв? Как она выглядит? Зачем вы это делаете?',
        en: 'Ask crucial questions: Where is the bomb? When will it explode? What does it look like? Why are you doing this?',
        ar: 'طرح الأسئلة الاستيضاحية: أين القنبلة؟ متى ستنفجر؟ كيف تبدو؟ لماذا تفعل ذلك؟',
        fa: 'پرسیدن سؤالات اساسی: بمب کجاست؟ چه زمانی منفجر می‌شود؟ چه شکلی است؟ چرا این کار را می‌کنید؟'
      },
      {
        text: 'C) Sofort auflegen und die Kollegen im Gebäude lautstark in Panik versetzen.',
        ru: 'Сразу бросить трубку и поднять громкую панику среди коллег в здании.',
        en: 'Immediately hanging up and loudly inciting panic among colleagues in the building.',
        ar: 'إغلاق الخط فوراً وإشاعة الذعر والهلع بين الزملاء في المبنى.',
        fa: 'قطع فوری تماس و ایجاد وحشت و اضطراب با صدای بلند در میان همکاران.'
      },
      {
        text: 'D) Die Drohung als Scherz abtun und ignorieren.',
        ru: 'Счесть угрозу шуткой и проигнорировать ее.',
        en: 'Dismissing the threat as a prank and ignoring it.',
        ar: 'اعتبار التهديد مجرد مزحة وتجاهله تماماً.',
        fa: 'شوخی تلقی کردن تهدید و نادیده گرفتن آن.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Bei Bombendrohungen: Checkliste nutzen, Stimme/Hintergrundgeräusche analysieren, Ruhe bewahren und unverzüglich nach Alarmplan handeln.',
    translations: {
      ru: {
        question: 'Как правильно действовать при телефонной угрозе взрыва? (Выберите 2 ответа)',
        explanation: 'При угрозе взрыва: использовать чек-лист, фиксировать детали голоса и окружения, сохранять спокойствие и следовать плану тревоги.'
      },
      en: {
        question: 'How does one properly respond to a bomb threat over the telephone? (Choose two correct answers)',
        explanation: 'During bomb threats: follow checklist, note voice/background sounds, keep calm, and execute emergency response plans immediately.'
      },
      ar: {
        question: 'كيف تتصرف بشكل صحيح عند تلقي تهديد بوجود قنبلة عبر الهاتف؟ (اختر إجابتين صحيحتين)',
        explanation: 'استخدام قائمة الملاحظات، وتحليل الأصوات والنبرة، والحفاظ على الهدوء، والتصرف فوراً بموجب خطة الطوارئ.'
      },
      fa: {
        question: 'واکنش صحیح در هنگام دریافت تهدید تلفنی بمب‌گذاری چیست؟ (دو پاسخ صحیح)',
        explanation: 'استفاده از چک‌لیست، ثبت لهجه و صداهای پس‌زمینه، حفظ خونسردی و اقدام فوری طبق نقشه اضطراری.'
      }
    }
  })
];
