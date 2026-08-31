/**
 * @file translationsPart3.ts
 * Statische Fachübersetzungen (Block 3: Fragen 61 bis 90 aus initialQuestions.ts)
 * § 34a GewO Sachkundeprüfung.
 * 
 * Kategorien:
 * - 5. Umgang mit Menschen und Verhalten in Gefahrensituationen (Fragen 61 bis 75: q-mensch-1 bis q-mensch-15)
 * - 6. Unfallverhütungsvorschriften (UVV / DGUV Vorschrift 23) (Fragen 76 bis 90: q-uvv-1 bis q-uvv-15)
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

export const TRANSLATIONS_PART_3: Record<string, TranslationBlockItem> = {
  // =========================================================================
  // 5. Umgang mit Menschen und Verhalten in Gefahrensituationen (Fragen 61 bis 75)
  // =========================================================================

  // Frage 61 (q-mensch-1)
  "q-mensch-1": {
    frage: {
      fa: "چرا تسلط بر تکنیک‌های تنش‌زدایی و آرام‌سازی (Deeskalation) برای یک نیروی امنیتی حیاتی است؟",
      ar: "لماذا يعتبر إتقان أساليب وتقنيات نزع فتيل التوتر والتهدئة (Deeskalation) أمراً أساسياً وحيوياً لرجل الأمن؟",
      ru: "Почему владение техниками деэскалации конфликтов имеет решающее значение для сотрудника службы безопасности?",
      en: "Why is mastering de-escalation techniques essential for a security officer?"
    },
    loesung: {
      fa: "برای حل مسالمت‌آمیز و بدون خشونت منازعات، تضمین ایمنی و حفاظت فردی نگهبان، حفظ وجهه حرفه‌ای شرکت و پیشگیری از تبعات و مسئولیت‌های حقوقی ناشی از درگیری‌های فیزیکی.",
      ar: "لحل النزاعات والخلافات بدون عنف، وضمان السلامة والحماية الشخصية للحارس، والحفاظ على المظهر المهني لشركة الأمن، وتجنب العواقب والمساءلات القانونية الناتجة عن الاشتباكات الجسدية.",
      ru: "Для ненасильственного разрешения конфликтов, обеспечения собственной безопасности, поддержания профессионального имиджа предприятия и предотвращения юридических последствий физических столкновений.",
      en: "To resolve conflicts without violence, ensure self-protection, maintain the company's professionalism, and avoid legal consequences resulting from physical confrontations."
    }
  },

  // Frage 62 (q-mensch-2)
  "q-mensch-2": {
    frage: {
      fa: "زبان بدن (ارتباط غیرکلامی) چه نقشی در وضعیت‌های درگیری و تعارض ایفا می‌کند؟",
      ar: "ما هو الدور الذي تلعبه لغة الجسد (التواصل غير اللفظي) في حالات النزاع؟",
      ru: "Какую роль играет язык тела (невербальная коммуникация) в конфликтной ситуации?",
      en: "What role does body language (non-verbal communication) play in a conflict?"
    },
    loesung: {
      fa: "بیش از ۸۰ درصد ارتباطات را تشکیل می‌دهد. وضعیت بدنی تهاجمی (دست‌به‌سینه بودن، مشت‌های گره‌کرده) تنش را تشدید می‌کند؛ در حالی که وضعیت بدنی باز، استوار و با دستان قابل رؤیت اثر تنش‌زدا داشته و هم‌زمان از شما محافظت می‌کند.",
      ar: "تمثل أكثر من 80% من عملية التواصل. فالوضعية العدوانية (عقد الذراعين، إطباق القبضات) تؤدي إلى تصعيد التوتر؛ في حين أن الوضعية المنفتحة والمستقرة مع إبقاء اليدين مرئيتين تسهم في التهدئة وتوفر الحماية في نفس الوقت.",
      ru: "Она составляет более 80% всей коммуникации. Агрессивная поза (скрещенные руки, сжатые кулаки) обостряет конфликт; открытая, устойчивая поза с видимыми ладонями действует успокаивающе и одновременно защищает.",
      en: "It accounts for over 80% of communication. An aggressive posture (crossed arms, clenched fists) escalates conflict; an open, stable stance with visible hands acts de-escalating while simultaneously providing protection."
    }
  },

  // Frage 63 (q-mensch-3)
  "q-mensch-3": {
    frage: {
      fa: "منظور از «گوش دادن فعال (Aktives Zuhören)» چیست؟",
      ar: "ماذا يُقصد بمفهوم «الاستماع والإنصات الفعّال (Aktives Zuhören)»؟",
      ru: "Что понимается под «активным слушанием»?",
      en: "What is understood by 'active listening'?"
    },
    loesung: {
      fa: "توجه کامل به مخاطب، قطع نکردن کلام او تا پایان سخن، خلاصه کردن شنیده‌ها با کلمات خود («پس شما عصبانی هستید زیرا...») و تکان دادن سر برای نشان دادن همراهی با گفتگو.",
      ar: "منح الطرف الآخر كامل الانتباه، وتركه يكمل حديثه دون مقاطعة، وتلخيص ما تم سماعه بكلماتك الخاصة («أنت غاضب إذن بسبب...»)، والإيماء بالرأس للتأكيد على متابعة الحوار.",
      ru: "Уделять собеседнику полное внимание, дать высказаться не перебивая, кратко резюмировать услышанное своими словами («Итак, вы расстроены тем, что...») и кивать, показывая интерес к беседе.",
      en: "Giving the counterpart full attention, letting them finish speaking, briefly summarizing what was heard in your own words ('So you are upset because...'), and nodding to signal active engagement."
    }
  },

  // Frage 64 (q-mensch-4)
  "q-mensch-4": {
    frage: {
      fa: "در مواجهه با یک فرد شدیداً مست و فحاش/پرخاشگر چگونه رفتار می‌کنید؟",
      ar: "كيف تتصرف وتتعامل مع شخص مخمور بشدة ويقوم بإثارة الشغب وإطلاق الشتائم؟",
      ru: "Как вы поведете себя по отношению к сильно нетрезвому, агрессивному и скандалящему человеку?",
      en: "How do you behave towards a heavily intoxicated, rowdy person?"
    },
    loesung: {
      fa: "آرام و قاطع صحبت کردن، استفاده از جملات کوتاه و ساده، حفظ فاصله ایمنی کافی (به دلیل رفتارهای غیرقابل پیش‌بینی) و پرهیز از ورود به بحث‌های روشنفکرانه و استدلالی پیچیده.",
      ar: "التحدث بهدوء وحزم، استخدام جمل قصيرة وبسيطة، الحفاظ على مسافة أمان كافية (بسبب ردود الفعل غير المتوقعة)، وتجنب الدخول في نقاشات فكرية أو جدلية معقدة.",
      ru: "Говорить спокойно и уверенно, использовать простые и короткие фразы, соблюдать достаточную безопасную дистанцию (из-за непредсказуемости реакций) и не вступать в интеллектуальные дискуссии.",
      en: "Speak calmly and firmly, use simple and short sentences, maintain sufficient safety distance (due to unpredictable reactions), and do not engage in complex intellectual arguments."
    }
  },

  // Frage 65 (q-mensch-5)
  "q-mensch-5": {
    frage: {
      fa: "«پیش‌داوری (Vorurteil)» چیست و چه تأثیری بر کار شما دارد؟",
      ar: "ما هو «الحكم المسبق / التعصب (Vorurteil)» وكيف يؤثر سلباً على عملك؟",
      ru: "Что такое «предрассудок» и как он влияет на вашу работу?",
      en: "What is a 'prejudice' and how does it affect your work?"
    },
    loesung: {
      fa: "یک دیدگاه ثابت و عمدتاً منفی در مورد گروه‌هایی از افراد بدون پایه و اساس واقعی. در خدمت موجب قضاوت اشتباه و رفتارهای غیرحرفه‌ای می‌شود. با هر مشتری و شهروند باید کاملاً بی‌طرفانه رفتار شود.",
      ar: "رأي ثابت وغالباً سلبي حول مجموعات معينة من الأشخاص دون وجود أساس موضوعي وواقعي. وفي العمل يؤدي إلى تقديرات خاطئة وسلوك غير مهني. ويجب معاملة كل عميل أو مواطن بحيادية تامة.",
      ru: "Укоренившееся, чаще всего негативное мнение о группах людей без объективных оснований. На службе приводит к ошибочным оценкам и непрофессиональному поведению. К каждому человеку нужно относиться нейтрально.",
      en: "A fixed, usually negative opinion about groups of people without objective basis. On duty, it leads to misjudgments and unprofessional conduct. Every client/citizen must be treated neutrally."
    }
  },

  // Frage 66 (q-mensch-6)
  "q-mensch-6": {
    frage: {
      fa: "«مدل فرستنده-گیرنده (Sender-Empfänger-Modell)» چه چیزی را توصیف می‌کند؟",
      ar: "ماذا يصف «نموذج المرسل والمستقبل (Sender-Empfänger-Modell)» في التواصل؟",
      ru: "Что описывает «модель отправителя и получателя (Sender-Empfänger-Modell)»?",
      en: "What does the 'Sender-Receiver Model' describe?"
    },
    loesung: {
      fa: "فرستنده پیام را کدگذاری کرده و به گیرنده می‌فرستد. گیرنده آن را رمزگشایی می‌کند. سوءتفاهم زمانی رخ می‌دهد که گیرنده پیام را متفاوت از آنچه مدنظر فرستنده بوده تعبیر و تفسیر کند.",
      ar: "يقوم المرسل بتشفير الرسالة وإرسالها إلى المستقبل. يقوم المستقبل بفك تشفيرها. وتنشأ سوء التفاهمات عندما يفسر المستقبل الرسالة بطريقة مختلفة عما كان يقصده المرسل بالفعل.",
      ru: "Отправитель кодирует сообщение и передает его получателю. Получатель декодирует его. Непонимание возникает тогда, когда получатель интерпретирует сообщение иначе, чем имел в виду отправитель.",
      en: "A sender encodes a message and transmits it to a receiver. The receiver decodes it. Misunderstandings arise when the receiver interprets the message differently than intended by the sender."
    }
  },

  // Frage 67 (q-mensch-7)
  "q-mensch-7": {
    frage: {
      fa: "منظور از اصطلاح «نظریه ناکامی-پرخاشگری (Frustrations-Aggressions-Theorie)» چیست؟",
      ar: "ماذا يُقصد بمفهوم «نظرية الإحباط والعدوان (Frustrations-Aggressions-Theorie)»؟",
      ru: "Что понимается под «теорией фрустрации-агрессии»?",
      en: "What is understood by the 'Frustration-Aggression Theory'?"
    },
    loesung: {
      fa: "ناکامی و سرخوردگی (ناامیدی از برخورد با مانع یا نرسیدن به یک هدف) اغلب منجر به خشم و پرخاشگری می‌شود. هنگامی که از ورود فردی جلوگیری می‌شود، این خشم و ناکامی بر سر نیروی امنیتی خالی می‌شود.",
      ar: "الإحباط (خيبة الأمل الناتجة عن وجود عائق أو عدم تحقيق الهدف المنشود) غالباً ما يولد السلوك العدواني. فعند منع شخص من الدخول، يتفرغ هذا الإحباط والتوتر في وجه حارس الأمن.",
      ru: "Фрустрация (разочарование из-за препятствия или недостижения цели) часто ведет к агрессии. При отказе во входе это раздражение выплескивается на охранника.",
      en: "Frustration (disappointment over an obstacle or failure to achieve a goal) frequently leads to aggression. When access is denied, this frustration is often directed at the security officer."
    }
  },

  // Frage 68 (q-mensch-8)
  "q-mensch-8": {
    frage: {
      fa: "در زمان وقوع هراس جمعی (Massenpanik) در یک رویداد بزرگ چگونه عمل می‌کنید؟",
      ar: "كيف تتصرف وتستجيب عند حدوث حالة ذعر جماعي (Massenpanik) أثناء فعالية كبرى؟",
      ru: "Как вы будете действовать при возникновении массовой паники во время крупного мероприятия?",
      en: "How do you react in the event of mass panic during a major event?"
    },
    loesung: {
      fa: "حفظ خونسردی و دادن دستورات آرام‌بخش و شفاف از طریق بلندگو/مگافون. باز کردن مسیرهای فرار، هدایت جمعیت به سوی خروجی‌های اضطراری، بلند کردن افراد زمین‌خورده و راهنمایی نیروهای امدادی.",
      ar: "الحفاظ على الهدوء وإعطاء تعليمات واضحة ومهدئة عبر مكبرات الصوت. فتح مسارات الهروب، توجيه حشود الناس نحو مخارج الطوارئ، مساعدة الأشخاص الذين سقطوا أرضاً وإرشاد فرق الإنقاذ.",
      ru: "Сохранять спокойствие и отдавать четкие, успокаивающие указания через громкоговоритель. Открыть пути эвакуации, направлять толпу к запасным выходам, поднимать упавших и направлять спасателей.",
      en: "Maintain composure and issue clear, calming instructions via loudspeaker/megaphone. Open escape routes, direct crowds towards emergency exits, assist fallen persons, and brief emergency services."
    }
  },

  // Frage 69 (q-mensch-9)
  "q-mensch-9": {
    frage: {
      fa: "چرا در حین خدمت همیشه باید افراد پرخاشگر را با ضمیر محترمانه «شما (Sie)» خطاب کنید؟",
      ar: "لماذا يجب عليك دائماً أثناء الخدمة مخاطبة الأشخاص العدوانيين بصيغة الاحترام والجمع «حضرتك / أنتم (Sie)»؟",
      ru: "Почему на службе следует всегда обращаться к агрессивным лицам на «Вы (Sie)»?",
      en: "Why should you always address aggressive individuals with the formal 'You (Sie)' on duty?"
    },
    loesung: {
      fa: "استفاده از «شما» فاصله روانی ایجاد می‌کند، نشان‌دهنده احترام است و معمولاً اثر تنش‌زدا دارد. استفاده از ضمیر صمیمانه «تو» غالباً به عنوان بی‌احترامی یا تحریک تلقی می‌شود.",
      ar: "لأن صيغة الاحترام «حضرتك (Sie)» تخلق مسافة نفسية، وتعبر عن الاحترام وتسهم عادة في تهدئة التوتر. بينما تُفهم صيغة «أنت (Du)» غالباً على أنها قلة احترام أو استفزاز مباشر.",
      ru: "Обращение на «Вы» создает психологическую дистанцию, выражает уважение и обычно способствует деэскалации. Обращение на «ты» часто воспринимается как неуважение или провокация.",
      en: "The formal 'You' establishes psychological distance, expresses respect, and generally has a de-escalating effect. The informal 'You' is often perceived as disrespect or provocation."
    }
  },

  // Frage 70 (q-mensch-10)
  "q-mensch-10": {
    frage: {
      fa: "منظور از «حریم فاصله اجتماعی (Soziale Distanzzone)» چیست؟",
      ar: "ماذا يُقصد بمفهوم «منطقة المسافة الاجتماعية (Soziale Distanzzone)»؟",
      ru: "Что понимается под «зоной социальной дистанции»?",
      en: "What is understood by the 'social distance zone'?"
    },
    loesung: {
      fa: "محدوده فاصله‌ای در حدود ۱٫۲۰ متر تا ۳٫۵۰ متر از طرف مقابل. این فاصله ایده‌آل برای گفتگو با افراد غریبه در حین خدمت است زیرا ایمنی ایجاد کرده و تهدیدآمیز نیست.",
      ar: "المسافة التي تتراوح بين حوالي 1.20 متر إلى 3.50 متر عن الطرف الآخر. وهي المسافة المثالية للتحدث مع الغرباء أثناء العمل لأنها توفر الأمان ولا تبدو مهددة.",
      ru: "Дистанция от 1,20 м до 3,50 м до собеседника. Это идеальное расстояние для служебного общения с незнакомыми людьми, обеспечивающее безопасность и не выглядящее угрожающе.",
      en: "The range of approx. 1.20 m to 3.50 m distance from the counterpart. It is the ideal distance for speaking with strangers on duty as it provides security without appearing threatening."
    }
  },

  // Frage 71 (q-mensch-11)
  "q-mensch-11": {
    frage: {
      fa: "چگونه با شکایات و اعتراضات مشتریان برخورد می‌کنید؟",
      ar: "كيف تتعامل مع شكاوى واعتراضات العملاء؟",
      ru: "Как вы работаете с жалобами и претензиями клиентов?",
      en: "How do you handle customer complaints?"
    },
    loesung: {
      fa: "حفظ رویکرد واقع‌بینانه و منطقی، جدی گرفتن شکایت، یادداشت‌برداری، عدم برداشت شخصی از انتقادات و پیشنهاد یک راه‌حل یا ارجاع به مافوق.",
      ar: "البقاء موضوعياً، أخذ الشكوى على محمل الجد، تدوين الملاحظات، عدم الشعور بالإهانة الشخصية، وتقديم حل مناسب أو توجيه الشكوى للمسؤول المباشر.",
      ru: "Сохранять объективность, относиться к жалобе серьезно, делать записи, не принимать критику на свой личный счет и предложить решение либо направить к руководству.",
      en: "Remain objective, take the complaint seriously, take notes, do not take it personally, and offer a solution or refer to a supervisor."
    }
  },

  // Frage 72 (q-mensch-12)
  "q-mensch-12": {
    frage: {
      fa: "«رفتار مشتری‌مدارانه (Kundenorientiertes Verhalten)» در خدمات امنیتی به چه معناست؟",
      ar: "ما هو «السلوك الموجه لخدمة العملاء (Kundenorientiertes Verhalten)» في قطاع الأمن؟",
      ru: "Что такое «клиентоориентированное поведение» в охранной службе?",
      en: "What is 'customer-oriented behavior' in the security service?"
    },
    loesung: {
      fa: "برخورد مؤدبانه و یاری‌رسان، ظاهر آراسته و تمیز، و آگاهی از این که نیروی امنیتی «کارت ویزیت و ویترین» کارفرماست، بدون آن که از رعایت اصول ایمنی غفلت شود.",
      ar: "التعامل المؤدب والخدوم، المظهر اللائق والأنيق، والوعي بأن حارس الأمن هو «الواجهة وبطاقة التعريف» للعميل وصاحب المنشأة، دون إهمال جوانب السلامة والأمن.",
      ru: "Вежливое, отзывчивое поведение, опрятный внешний вид и понимание того, что охранник является «визитной карточкой» заказчика, не пренебрегая при этом безопасностью.",
      en: "Polite, helpful demeanor, well-groomed appearance, and the awareness that one is the 'business card' of the client, without compromising security."
    }
  },

  // Frage 73 (q-mensch-13)
  "q-mensch-13": {
    frage: {
      fa: "سه نشانه بارز و متداول استرس در حین خدمت را نام ببرید.",
      ar: "اذكر ثلاثة من الأعراض النمطية والشائعة للتوتر والضغط النفسي (Stress) أثناء الخدمة.",
      ru: "Назовите три типичных симптома стресса во время несения службы.",
      en: "Name three typical stress symptoms during duty."
    },
    loesung: {
      fa: "افزایش ضربان قلب/تپش قلب، عرق کردن کف دست‌ها، تنفس کم‌عمق و سریع، دید تونلی (محدود شدن میدان دید).",
      ar: "تسارع ضربات القلب/الخفقان، تعرق اليدين، التنفس السطحي والسريع، وضيق مجال الرؤية (الرؤية النفقية).",
      ru: "Учащенный пульс/сердцебиение, влажные ладони, поверхностное/учащенное дыхание, туннельное зрение.",
      en: "Increased pulse/heart palpitation, sweaty hands, shallow/rapid breathing, tunnel vision."
    }
  },

  // Frage 74 (q-mensch-14)
  "q-mensch-14": {
    frage: {
      fa: "چگونه در شرایط بحرانی از ایجاد «دید تونلی (Tunnelblick)» جلوگیری می‌کنید؟",
      ar: "كيف تمنع حدوث «الرؤية النفقية (Tunnelblick)» في الحالات الطارئة والحرجة؟",
      ru: "Как предотвратить возникновение «туннельного зрения» в критической ситуации?",
      en: "How do you prevent 'tunnel vision' in an emergency?"
    },
    loesung: {
      fa: "از طریق تنفس آگاهانه و عمیق (کنترل تنفس) و حرکت هدفمند سر برای زیر نظر داشتن کل محیط اطراف (آگاهی موقعیتی / Situational Awareness).",
      ar: "من خلال التنفس العميق والواعي (التحكم في التنفس) والتحريك الواعي للرأس لمراقبة المحيط بالكامل (الوعي بالموقف / Situational Awareness).",
      ru: "С помощью осознанного глубокого дыхания (контроль дыхания) и целенаправленного вращения головой, чтобы держать под контролем всю обстановку (ситуационная осведомленность).",
      en: "Through deliberate, deep breathing (breath control) and targeted head movement to maintain awareness of the entire environment (situational awareness)."
    }
  },

  // Frage 75 (q-mensch-15)
  "q-mensch-15": {
    frage: {
      fa: "اگر در حین خدمت به شدت مورد توهین و فحاشی قرار بگیرید چگونه رفتار می‌کنید؟",
      ar: "كيف تتصرف عندما تتعرض لإهانة وسب شديد أثناء أداء الخدمة؟",
      ru: "Как вы поведете себя, если во время службы вас грубо оскорбляют?",
      en: "How do you behave if you are severely insulted on duty?"
    },
    loesung: {
      fa: "نادیده گرفتن جنبه احساسی، حفظ خونسردی و حرفه‌ای ماندن در سطح موضوعی، تذکر رفتار نادرست به فرد و ثبت دقیق واقعه در دفتر شیفت جهت شکایت کیفری بعدی (جرم مقید به شکایت شاکی).",
      ar: "تجاهل الجانب العاطفي، البقاء مهنياً وموضوعياً على مستوى الحقائق، تنبيه الشخص إلى خطأ سلوكه وتوثيق الواقعة في دفتر الحراسة لتقديم شكوى جزائية لاحقاً (جريمة شكوى).",
      ru: "Игнорировать эмоциональный уровень, оставаться профессиональным и объективным, указать человеку на недопустимость поведения и задокументировать инцидент в журнале для подачи заявления.",
      en: "Ignore the emotional level, remain professional and factual, point out the misconduct to the person, and document the incident in the guard book for a subsequent criminal complaint."
    }
  },

  // =========================================================================
  // 6. Unfallverhütungsvorschriften (UVV / DGUV Vorschrift 23) (Fragen 76 bis 90)
  // =========================================================================

  // Frage 76 (q-uvv-1)
  "q-uvv-1": {
    frage: {
      fa: "چه نهادی مقررات پیشگیری از حوادث (UVV) را وضع و صادر می‌کند؟",
      ar: "من هي الجهة المسؤولة عن إصدار لوائح الوقاية من الحوادث (UVV)؟",
      ru: "Кто издает правила техники безопасности и предотвращения несчастных случаев (UVV)?",
      en: "Who issues the accident prevention regulations (UVV)?"
    },
    loesung: {
      fa: "اتحادیه‌های صنفی بیمه حوادث کار (Berufsgenossenschaften - نهادهای متولی بیمه قانونی حوادث، مانند VBG).",
      ar: "الجمعيات المهنية للتأمين ضد الحوادث (Berufsgenossenschaften - الهيئات المسؤولة عن التأمين القانوني ضد الحوادث، مثل VBG).",
      ru: "Отраслевые страховые союзы (Berufsgenossenschaften - органы обязательного страхования от несчастных случаев, например VBG).",
      en: "The trade associations / employers' liability insurance associations (Berufsgenossenschaften, statutory accident insurance institutions, e.g., VBG)."
    }
  },

  // Frage 77 (q-uvv-2)
  "q-uvv-2": {
    frage: {
      fa: "کدام آیین‌نامه اختصاصی پیشگیری از حوادث (UVV) به طور ویژه و اصلی برای صنف نگهبانی و حراست اعمال می‌شود؟",
      ar: "ما هي لائحة الوقاية من الحوادث (UVV) المحددة التي تسري أساساً على مهنة الحراسة والأمن؟",
      ru: "Какое специальное правило UVV в первую очередь применяется к охранной деятельности?",
      en: "Which specific accident prevention regulation applies primarily to the guarding and security industry?"
    },
    loesung: {
      fa: "مقررات DGUV شماره ۲۳ (با عنوان سابق BGV C7) تحت نام «خدمات نگهبانی و حراست (Wach- und Sicherungsdienste)»",
      ar: "اللائحة DGUV Vorschrift 23 (المعروفة سابقاً باسم BGV C7) تحت عنوان «خدمات الحراسة والأمن».",
      ru: "Правило DGUV Vorschrift 23 (ранее BGV C7) «Охранно-сторожевые службы».",
      en: "DGUV Regulation 23 (formerly BGV C7) 'Guard and Security Services'."
    }
  },

  // Frage 78 (q-uvv-3)
  "q-uvv-3": {
    frage: {
      fa: "یک نیروی نگهبان قبل از شروع شیفت چه وظایفی در رابطه با ایمنی شخصی خود دارد؟",
      ar: "ما هي الواجبات المترتبة على حارس الأمن فيما يتعلق بسلامته الشخصية قبل بدء نوبة العمل؟",
      ru: "Каковы обязанности охранника в отношении собственной безопасности перед заступлением на смену?",
      en: "What duties does a security guard have regarding their own safety before starting duty?"
    },
    loesung: {
      fa: "بررسی تجهیزات حفاظت فردی (PSA) و ابزارهای عملیاتی از نظر کارکرد و سلامت، و همچنین الزام به حضور در خدمت در وضعیت کاملاً آماده‌به‌خدمت و هوشیار (عدم مصرف الکل و مواد مخدر).",
      ar: "فحص معدات الحماية الشخصية (PSA) وأدوات ومعدات الخدمة للتأكد من سلامتها وجاهزيتها، والالتزام ببدء العمل في حالة صحية وجاهزية تامة (دون كحول أو مخدرات).",
      ru: "Проверка исправности средств индивидуальной защиты (СИЗ) и служебного снаряжения, а также обязанность явиться на службу в дееспособном и готовом состоянии (без алкоголя/наркотиков).",
      en: "Checking personal protective equipment (PPE) and operational equipment for functionality, as well as the duty to report for work fit for duty and unimpaired (no alcohol/drugs)."
    }
  },

  // Frage 79 (q-uvv-4)
  "q-uvv-4": {
    frage: {
      fa: "مقررات DGUV شماره ۲۳ در مورد همراه داشتن سگ‌های خدمت چه ضوابطی را تعیین می‌کند؟",
      ar: "ما الذي تنظمه اللائحة DGUV Vorschrift 23 بشأن اصطحاب كلاب الحراسة والخدمة؟",
      ru: "Что регулирует правило DGUV Vorschrift 23 относительно использования служебных собак?",
      en: "What does DGUV Regulation 23 govern regarding the handling of service dogs?"
    },
    loesung: {
      fa: "تنها مجاز به همراه داشتن سگ‌های خدمتی هستند که آزمون‌های مربوطه را گذرانده و صلاحیت آن‌ها تأیید شده باشد و توسط یک راهنمای سگ (مربی) مجرب و واجد شرایط هدایت شوند.",
      ar: "يُسمح فقط باصطحاب كلاب الخدمة التي تم اختبارها واعتماد أهليتها رسمياً، ويجب أن يقودها مدرب كلاب مؤهل ومدرب.",
      ru: "Разрешается использовать только проверенных и признанных годными служебных собак, управляемых квалифицированным кинологом-проводником.",
      en: "Only tested dogs officially certified as suitable may be deployed, guided by a qualified dog handler."
    }
  },

  // Frage 80 (q-uvv-5)
  "q-uvv-5": {
    frage: {
      fa: "منظور از اصل «حفاظت و ایمنی خود بر حفاظت از دیگران مقدم است (Eigenschutz geht vor Fremdschutz)» چیست؟",
      ar: "ماذا يُقصد بمبدأ «حماية النفس مقدمة على حماية الغير (Eigenschutz geht vor Fremdschutz)»؟",
      ru: "Что означает принцип «собственная безопасность превыше защиты других»?",
      en: "What is understood by 'self-protection comes before protecting others'?"
    },
    loesung: {
      fa: "یک نیروی امنیتی نباید هنگام کمک‌رسانی یا اقدامات حفاظتی هرگز جان خود را به خطر اندازد. ابتدا ایمن‌سازی خود، سپس اقدام.",
      ar: "يُحظر على موظف الأمن تعريض حياته أو سلامته للخطر عند تقديم المساعدة أو تنفيذ إجراءات التأمين. تأمين النفس أولاً، ثم التدخل والتصرف.",
      ru: "Сотрудник охраны при оказании помощи или мерах безопасности никогда не должен подвергать опасности собственную жизнь. Сначала обезопасить себя, затем действовать.",
      en: "A security employee must never put their own life in danger when rendering assistance or security measures. First secure oneself, then take action."
    }
  },

  // Frage 81 (q-uvv-6)
  "q-uvv-6": {
    frage: {
      fa: "یک نگهبان چه زمانی موظف است جلیقه شب‌رنگ و هشداردهنده (Warnweste) به تن کند؟",
      ar: "متى يكون حارس الأمن ملزماً بارتداء سترة السلامة العاكسة والتحذيرية؟",
      ru: "Когда охранник обязан носить сигнальный жилет со светоотражающими элементами?",
      en: "When is a security guard obliged to wear a high-visibility warning vest?"
    },
    loesung: {
      fa: "هنگام فعالیت در محیط‌های ترافیکی (مانند خیابان‌ها، پارکینگ‌ها، محوطه کارخانه‌ها با تردد لیفتراک) و همچنین در تاریکی و شرایط دید ضعیف جهت دیده شدن بهتر.",
      ar: "عند أداء المهام في مناطق حركة المرور (مثل الشوارع، مواقف السيارات، مناطق المصانع التي تشهد حركة رافعات شوكية)، وكذلك في الظلام وضعف الرؤية لتسهيل رؤيته.",
      ru: "При работе в зонах движения транспорта (на дорогах, парковках, территории предприятий с погрузчиками), а также в темноте и при плохой видимости для улучшения видимости.",
      en: "During activities in traffic areas (e.g., roads, parking lots, plant grounds with forklift traffic) as well as in darkness and poor visibility for enhanced recognition."
    }
  },

  // Frage 82 (q-uvv-7)
  "q-uvv-7": {
    frage: {
      fa: "چنانچه در یکی از تجهیزات خدمت (مانند چراغ‌قوه معیوب یا آنتن رادیویی شکسته) نقصی مشاهده کنید چه باید بکنید؟",
      ar: "ماذا يجب عليك فعله إذا لاحظت عطلاً أو عيباً في إحدى معدات الخدمة (مثل مصباح يدوي معطل أو هوائي لاسلكي مكسور)؟",
      ru: "Что вы должны сделать, если обнаружили дефект в служебном снаряжении (например, неисправный фонарь или сломанную антенну рации)?",
      en: "What must you do if you notice a defect in a piece of equipment (e.g., a defective flashlight or a broken radio antenna)?"
    },
    loesung: {
      fa: "نقص را فوراً به مافوق یا مرکز کنترل گزارش دهید، وسیله را تعویض کنید و نقص را در دفتر وقایع نگهبانی (Wachbuch) ثبت نمایید.",
      ar: "إبلاغ المسؤول المباشر أو غرفة العمليات بالعطل فوراً، استبدال الأداة المعطلة، وتوثيق العيب في سجل الحراسة اليومي.",
      ru: "Немедленно доложить о дефекте руководителю или диспетчерской, заменить предмет и зафиксировать неисправность в журнале службы.",
      en: "Report the defect immediately to the supervisor or control center, exchange the item, and record the defect in the guard logbook."
    }
  },

  // Frage 83 (q-uvv-8)
  "q-uvv-8": {
    frage: {
      fa: "مقررات UVV در مورد کار انفرادی (گشت تک‌نفره) در اماکن پرخطر چه تمهیداتی را الزام می‌کند؟",
      ar: "ما الذي تنص عليه لوائح الوقاية من الحوادث (UVV) عند العمل الفردي (الدوريات الفردية) في المنشآت المعرضة للخطر؟",
      ru: "Что предписывают правила UVV при работе в одиночку (одиночный патруль) на опасных объектах?",
      en: "What do accident prevention regulations prescribe for solo work (single patrol) in hazardous properties?"
    },
    loesung: {
      fa: "باید ایمن‌سازی از طریق تجهیزات فنی انجام شود؛ مانند سامانه اعلام خطر انفرادی (Personen-Notsignal-Anlage - PNA) یا تماس‌های کنترلی منظم (زمان‌های اعلام حضور) با مرکز کنترل.",
      ar: "يجب تأمين الحارس من خلال تجهيزات تقنية، مثل نظام إشارات الطوارئ الشخصي (PNA) أو إجراء اتصالات تفقدية منتظمة (مواعيد إبلاغ محددة) مع غرفة العمليات.",
      ru: "Должна быть обеспечена техническая защита, например персональная система аварийной сигнализации (PNA) или регулярные контрольные вызовы (интервалы докладов) в диспетчерскую.",
      en: "Securing via technical systems must be provided, such as a personal emergency signal system (PNA / lone worker alarm) or regular check-in calls to the control center."
    }
  },

  // Frage 84 (q-uvv-9)
  "q-uvv-9": {
    frage: {
      fa: "چه کسی مسئول وضعیت و سلامت تجهیزات حفاظت فردی (PSA) است؟",
      ar: "من هو المسؤول عن توفير وحالة معدات الحماية الشخصية (PSA)؟",
      ru: "Кто несет ответственность за состояние средств индивидуальной защиты (СИЗ)?",
      en: "Who is responsible for the condition of personal protective equipment (PPE)?"
    },
    loesung: {
      fa: "کارفرما موظف است آن‌ها را به رایگان در اختیار بگذارد؛ کارمند موظف است آن‌ها را طبق دستورالعمل بپوشد و با دقت نگهداری کند.",
      ar: "يلتزم صاحب العمل بتوفيرها مجاناً؛ ويلتزم الموظف بارتدائها وفق التعليمات والاعتناء بها والحفاظ عليها.",
      ru: "Работодатель обязан предоставить их бесплатно; работник обязан использовать их по назначению и бережно обращаться с ними.",
      en: "The employer must provide them free of charge; the employee is obligated to wear them properly and handle them with care."
    }
  },

  // Frage 85 (q-uvv-10)
  "q-uvv-10": {
    frage: {
      fa: "مقررات UVV در خصوص مصرف الکل و مواد مست‌کننده چه قانونی دارد؟",
      ar: "ما هي القواعد التي تنص عليها لوائح UVV بشأن تناول الكحول والمواد المخدرة والمسكرة؟",
      ru: "Что устанавливают правила UVV относительно употребления алкоголя и опьяняющих веществ?",
      en: "What does the UVV govern regarding the consumption of alcohol and intoxicating substances?"
    },
    loesung: {
      fa: "ممنوعیت مطلق مصرف هرگونه الکل و مواد مخدر قبل و در طول خدمت حاکم است. همچنین مصرف داروهایی که قدرت واکنش را مختل می‌کنند ممنوع است.",
      ar: "يسري حظر تام ومطلق لتناول الكحول والمسكرات قبل وأثناء أداء الخدمة. كما يُحظر تناول الأدوية التي تؤثر سلباً على سرعة رد الفعل والانتباه.",
      ru: "Действует абсолютный запрет на употребление алкоголя и одурманивающих веществ до и во время службы. Также запрещен прием препаратов, снижающих скорость реакции.",
      en: "There is an absolute prohibition of alcohol and intoxicating substances before and during duty. Medications impairing responsiveness must also not be taken."
    }
  },

  // Frage 86 (q-uvv-11)
  "q-uvv-11": {
    frage: {
      fa: "تجهیزات کمک‌های اولیه در یک ساختمان یا پروژه چگونه باید علامت‌گذاری شوند؟",
      ar: "كيف يجب تمييز ووضع إشارات مرافق ومعدات الإسعافات الأولية في المنشأة؟",
      ru: "Как должны быть обозначены пункты и средства первой помощи на объекте?",
      en: "How must first aid facilities be marked in a facility?"
    },
    loesung: {
      fa: "با علامت صلیب سفید بر روی زمینه سبز مربعی شکل (علامت نجات و امداد).",
      ar: "بواسطة صليب أبيض على خلفية مربعة خضراء (علامة إنقاذ وإسعاف).",
      ru: "Белым крестом на квадратном зеленом фоне (знак спасения и безопасности).",
      en: "By a white cross on a square green background (rescue sign)."
    }
  },

  // Frage 87 (q-uvv-12)
  "q-uvv-12": {
    frage: {
      fa: "نگهبان پس از وقوع یک حادثه ناشی از کار چه وظایفی بر عهده دارد؟",
      ar: "ما هي الواجبات المفروضة على حارس الأمن بعد وقوع حادث عمل؟",
      ru: "Каковы обязанности охранника после несчастного случая на производстве?",
      en: "What duty does a security guard have after an occupational accident?"
    },
    loesung: {
      fa: "ارائه کمک‌های اولیه، تماس با اورژانس و فوریت‌های پزشکی، گزارش فوری حادثه به مافوق و ثبت کامل رویداد در دفتر حوادث و پانسمان (Verbandbuch) جهت حفظ حقوق بیمه‌ای.",
      ar: "تقديم الإسعافات الأولية، استدعاء خدمات الطوارئ، إبلاغ المسؤول المباشر بالحادث فوراً، وتوثيق الواقعة في سجل الإصابات والضمادات للضمان القانوني.",
      ru: "Оказать первую помощь, вызвать скорую помощь, немедленно сообщить руководителю и зафиксировать случай в журнале учета травм (Verbandbuch).",
      en: "Render first aid, call emergency services, immediately report the accident to the supervisor, and enter the incident into the first-aid logbook (Verbandbuch)."
    }
  },

  // Frage 88 (q-uvv-13)
  "q-uvv-13": {
    frage: {
      fa: "«ارزیابی خطرات محیط کار (Gefährdungsbeurteilung)» چیست؟",
      ar: "ما هو «تقييم المخاطر المهنية في بيئة العمل (Gefährdungsbeurteilung)»؟",
      ru: "Что такое «оценка профессиональных рисков (Gefährdungsbeurteilung)»?",
      en: "What is a 'risk assessment (Gefährdungsbeurteilung)'?"
    },
    loesung: {
      fa: "یک تحلیل و بررسی قانونی و اجباری از محل کار توسط کارفرما برای شناسایی منابع بالقوه خطر برای کارکنان و تعیین اقدامات حفاظتی لازم.",
      ar: "تحليل وتفقد إلزامي بموجب القانون لمكان العمل يجريه صاحب العمل لتحديد مصادر الخطر المحتملة على الموظفين ووضع تدابير الوقاية المناسبة.",
      ru: "Законодательно установленный анализ рабочего места работодателем для выявления потенциальных источников опасности и определения мер защиты сотрудников.",
      en: "A legally mandated analysis of the workplace by the employer to identify potential hazard sources for employees and establish protective measures."
    }
  },

  // Frage 89 (q-uvv-14)
  "q-uvv-14": {
    frage: {
      fa: "کدام مقررات نحوه بالا رفتن از نردبان‌ها یا تردد بر روی سقف‌ها را در حفاظت از اماکن تعیین می‌کند؟",
      ar: "ما هي اللائحة التي تنظم قواعد الصعود على السلالم أو المشي على الأسطح في حراسة المنشآت؟",
      ru: "Какое правило регулирует подъем по приставным лестницам или перемещение по крышам при охране объектов?",
      en: "Which regulation governs behavior when climbing ladders or walking on roofs in property security?"
    },
    loesung: {
      fa: "مقررات عمومی ایمنی کار UVV (مقررات ۱ DGUV / آیین‌نامه فضاهای کار). تردد روی سقف‌ها تنها در مسیرهای مجاز تعیین‌شده و با تجهیزات جلوگیری از سقوط مجاز است.",
      ar: "لوائح الوقاية العامة من الحوادث وسلامة العمل (DGUV Vorschrift 1 / لائحة أماكن العمل). ولا يجوز المشي على الأسطح إلا في المسارات المعتمدة مع توفير وسائل منع السقوط.",
      ru: "Общие правила техники безопасности UVV (DGUV Vorschrift 1 / Положение о рабочих местах). Находиться на крыше разрешено только по выделенным путям со страховкой от падения.",
      en: "General UVV for occupational safety (DGUV Regulation 1 / Workplace Ordinance). Roofs may only be walked upon on approved traffic walkways and with fall protection."
    }
  },

  // Frage 90 (q-uvv-15)
  "q-uvv-15": {
    frage: {
      fa: "آیا یک نگهبان مجاز است اسپری‌های دفاع شخصی شخصی و تاییدنشده را در حین خدمت حمل کند؟",
      ar: "هل يجوز لحارس الأمن حمل بخاخات دفاع شخصية خاصة وغير معتمدة أثناء الخدمة؟",
      ru: "Разрешено ли охраннику носить на службе личные, не утвержденные защитные спреи?",
      en: "May a security guard carry personal, unauthorized defensive sprays on duty?"
    },
    loesung: {
      fa: "خیر، طبق مقررات DGUV شماره ۲۳ تنها مجاز به همراه داشتن تجهیزات و ابزارهایی هستند که توسط کارفرما بررسی و صراحتاً تأیید شده باشند.",
      ar: "لا، وفقاً للائحة DGUV Vorschrift 23 يُسمح فقط بحمل واستخدام المعدات التي تم فحصها والموافقة عليها صراحة من قبل صاحب العمل.",
      ru: "Нет, согласно DGUV Vorschrift 23 разрешается носить только снаряжение, проверенное и прямо утвержденное работодателем.",
      en: "No, according to DGUV Regulation 23, only operational equipment tested and expressly approved by the employer may be carried."
    }
  }
};
