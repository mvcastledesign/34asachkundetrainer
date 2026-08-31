/**
 * @file translationsPart9.ts
 * Statische Fachübersetzungen (Block 9: IHK-Prüfungssimulation Fragen 41 bis 60)
 * § 34a GewO Sachkundeprüfung.
 * 
 * Sprachen:
 * - Farsi (fa)
 * - Arabisch (ar)
 * - Russisch (ru)
 * - Englisch (en)
 */

import { TranslationBlockItem } from './translationsPart1.ts';

export const TRANSLATIONS_PART_9: Record<string, TranslationBlockItem> = {
  // Frage 41: ihk-stgb-15
  "ihk-stgb-15": {
    frage: {
      fa: "جرم نیازمند شکایت شاکی (Antragsdelikt) در حقوق جزا چیست؟",
      ar: "ما هي الجريمة المعلقة على شكوى المتضرر (Antragsdelikt) في القانون الجنائي؟",
      ru: "Что такое преступление, преследуемое по жалобе потерпевшего (Antragsdelikt), в уголовном праве?",
      en: "What is a complaint offense (Antragsdelikt) in criminal law?"
    },
    loesung: {
      fa: "در جرایم نیازمند شکایت (§ 77b StGB)، ثبت شکایت رسمی و به‌موقع توسط متضرر شرط دادرسی است (مهلت: ۳ ماه از زمان اطلاع).",
      ar: "في الجرائم المعلقة على شكوى (§ 77b StGB)، يُشترط تقديم شكوى رسمية في الموعد المحدد من قبل المجني عليه لبدء الملاحقة (المهلة: 3 أشهر من تاريخ العلم).",
      ru: "При делах частного обвинения (§ 77b StGB) своевременное и надлежащее заявление потерпевшего является обязательным условием процесса (срок: 3 месяца с момента осведомленности).",
      en: "For complaint offenses (§ 77b StGB), a formal and timely criminal complaint by the victim is a procedural requirement (deadline: 3 months from learning of the offense)."
    },
    optionen: {
      "0": {
        fa: "الف) جرمی که اصولاً تنها زمانی تحت پیگرد قرار می‌گیرد که متضرر ظرف مهلت قانونی (ظرف ۳ ماه) شکایت کیفری ارائه دهد (مانند ورود غیرقانونی به ملک، توهین).",
        ar: "أ) جريمة لا يُلاحق عليها كأصل عام إلا إذا تقدم المتضرر بشكوى جنائية ضمن المهلة القانونية (خلال 3 أشهر) (مثل انتهاك حرمة المكان، الإهانة).",
        ru: "A) Преступление, которое преследуется только в том случае, если потерпевший своевременно (в течение 3 месяцев) подает заявление (напр. нарушение неприкосновенности жилища, оскорбление).",
        en: "A) A criminal offense that is generally only prosecuted if the victim files a timely criminal complaint (within 3 months) (e.g. trespass, insult)."
      },
      "1": {
        fa: "ب) جرمی که همیشه و الزاماً باید توسط دادستانی به صورت خودکار پیگیری شود.",
        ar: "ب) جريمة يجب دائماً ملاحقتها تلقائياً بحكم الوظيفة ومن قِبل الادعاء العام.",
        ru: "B) Преступление, которое всегда должно расследоваться официальными органами автоматически.",
        en: "B) An offense that must always be prosecuted ex officio."
      },
      "2": {
        fa: "ج) هر جرمی که در خارج از کشور انجام گرفته باشد.",
        ar: "ج) أي عمل إجرامي يُرتكب خارج البلاد.",
        ru: "C) Любое преступление, совершенное за границей.",
        en: "C) Any offense committed abroad."
      },
      "3": {
        fa: "د) جرمی که در آن متهم درخواست تبرئه می‌کند.",
        ar: "د) جريمة يتقدم فيها الجاني بطلب للحصول على البراءة.",
        ru: "D) Деяние, при котором преступник подает ходатайство об оправдании.",
        en: "D) An offense in which the offender files an application for acquittal."
      }
    }
  },

  // Frage 42: ihk-stgb-16
  "ihk-stgb-16": {
    frage: {
      fa: "کدام جرایم، جرایم عمومی (Offizialdelikte) محسوب می‌شوند؟ (دو پاسخ صحیح را انتخاب کنید)",
      ar: "ما هي الجرائم التي تعتبر جرائم حق عام تُلاحق تلقائياً (Offizialdelikte)؟ (اختر إجابتين صحيحتين)",
      ru: "Какие преступления являются типичными преступлениями публичного обвинения (Offizialdelikte)? (Выберите два правильных ответа)",
      en: "Which offenses are typical ex officio offenses (Offizialdelikte)? (Choose two correct answers)"
    },
    loesung: {
      fa: "جرایم عمومی (مانند سرقت مقرون به آزار، قتل، ایجاد حریق عمدی، سرقت) بدون نیاز به شکایت شاکی خصوصی توسط دادستانی پیگیری می‌شوند.",
      ar: "جرائم الحق العام (مثل السطو والقتل والحرق العمد والسرقة) تُلاحق من قبل الادعاء العام تلقائياً دون الحاجة لشكوى جنائية من المتضرر.",
      ru: "Преступления публичного обвинения (разбой, убийство, поджог, кража) расследуются прокуратурой по долгу службы без необходимости заявления потерпевшего.",
      en: "Ex officio offenses (such as robbery, homicide, arson, theft) are prosecuted by the public prosecutor's office on its own initiative without requiring a complaint."
    },
    optionen: {
      "0": {
        fa: "الف) سرقت مقرون به خشونت (Raub) طبق ماده ۲۴۹ قانون مجازات.",
        ar: "أ) السطو بالإكراه (Raub) بموجب المادة § 249 StGB.",
        ru: "A) Разбой/грабеж по § 249 StGB.",
        en: "A) Robbery under § 249 StGB."
      },
      "1": {
        fa: "ب) ایجاد حریق عمدی (Brandstiftung) طبق ماده ۳۰۶ قانون مجازات.",
        ar: "ب) الحرق العمدي (Brandstiftung) بموجب المادة § 306 StGB.",
        ru: "B) Поджог по § 306 StGB.",
        en: "B) Arson under § 306 StGB."
      },
      "2": {
        fa: "ج) توهین ساده طبق ماده ۱۸۵ قانون مجازات.",
        ar: "ج) الإهانة البسيطة بموجب المادة § 185 StGB.",
        ru: "C) Простое оскорбление по § 185 StGB.",
        en: "C) Simple insult under § 185 StGB."
      },
      "3": {
        fa: "د) ورود غیرقانونی به ملک (Hausfriedensbruch) طبق ماده ۱۲۳ قانون مجازات.",
        ar: "د) انتهاك حرمة المكان (Hausfriedensbruch) بموجب المادة § 123 StGB.",
        ru: "D) Нарушение неприкосновенности жилища по § 123 StGB.",
        en: "D) Trespass under § 123 StGB."
      }
    }
  },

  // Frage 43: ihk-stgb-17
  "ihk-stgb-17": {
    frage: {
      fa: "ماده ۳۲۳c قانون مجازات (خودداری از کمک‌رسانی / Unterlassene Hilfeleistung) چه چیزی را تعیین می‌کند؟",
      ar: "ما الذي تنص عليه المادة § 323c StGB (الامتناع عن تقديم المساعدة / Unterlassene Hilfeleistung)؟",
      ru: "Что регулирует § 323c StGB (Неоказание помощи)?",
      en: "What is governed by § 323c StGB (Failure to render assistance / Unterlassene Hilfeleistung)?"
    },
    loesung: {
      fa: "ماده ۳۲۳c قانون مجازات همگان را موظف به کمک‌رسانی معقول در حوادث می‌کند. پرسنل حفاظتی به دلیل موقعیت ضامن خود وظایف سنگین‌تری نیز دارند.",
      ar: "المادة § 323c StGB تلزم الجميع بتقديم المساعدة المعقولة في الحوادث. وموظفو الأمن لديهم واجبات مضاعفة بسبب موقع الضامن (Garantenstellung).",
      ru: "§ 323c StGB обязывает каждого оказывать посильную помощь при несчастных случаях. У сотрудников охраны из-за их статуса гаранта обязанности еще выше.",
      en: "§ 323c StGB obligates everyone to render reasonable assistance in emergencies. Security personnel often have enhanced duties due to their guarantor status."
    },
    optionen: {
      "0": {
        fa: "الف) هر کس در هنگام حوادث، خطرات عمومی یا شرایط اضطراری کمک نکند، با اینکه کمک لازم بوده و با توجه به شرایط برای وی مقدور و معقول بوده است.",
        ar: "أ) كل من يمتنع عن تقديم المساعدة في حالات الحوادث أو الخطر العام أو الطوارئ، رغم ضرورتها وإمكانية تقديمها وفقاً للظروف دون تعريض نفسه لخطر كبير.",
        ru: "A) Тот, кто не оказывает помощь при несчастных случаях, общей опасности или бедствии, хотя она была необходима и разумно выполнима по обстоятельствам.",
        en: "A) Whoever fails to render assistance in accidents, common danger or emergency, although it was necessary and reasonable under the circumstances."
      },
      "1": {
        fa: "ب) پرداخت نکردن هزینه پارکینگ عمومی.",
        ar: "ب) عدم دفع رسوم ركن السيارة.",
        ru: "B) Неуплата сборов за парковку.",
        en: "B) Failure to pay parking fees."
      },
      "2": {
        fa: "ج) نپذیرفتن اضافه‌کاری در شرکت امنیتی.",
        ar: "ج) رفض العمل لساعات إضافية في شركة الحراسة.",
        ru: "C) Отказ от сверхурочной работы в службе безопасности.",
        en: "C) Refusing overtime in security service."
      },
      "3": {
        fa: "د) گزارش ندادن یک توهین ساده به پلیس.",
        ar: "د) عدم الإبلاغ عن إهانة شفهية بسيطة.",
        ru: "D) Несообщение о простом оскорблении.",
        en: "D) Failure to report a simple insult."
      }
    }
  },

  // Frage 44: ihk-stgb-18
  "ihk-stgb-18": {
    frage: {
      fa: "عناصر تشکیل‌دهنده جرم اجبار / اکراه (Nötigung) طبق ماده ۲۴۰ قانون مجازات چیست؟ (دو پاسخ صحیح را انتخاب کنید)",
      ar: "ما الذي يميز جريمة الإكراه / الإجبار (Nötigung) بموجب المادة § 240 StGB؟ (اختر إجابتين صحيحتين)",
      ru: "Что характеризует состав принуждения (Nötigung) по § 240 StGB? (Выберите два правильных ответа)",
      en: "What characterizes the offense of coercion (Nötigung) under § 240 StGB? (Choose two correct answers)"
    },
    loesung: {
      fa: "اجبار و اکراه (§ 240 StGB) مجازات تحمیل غیرقانونی اراده بر فرد دیگر با استفاده از خشونت یا تهدید به آسیبی محسوس و جدی است.",
      ar: "جريمة الإكراه (§ 240 StGB) تعاقب على إخضاع إرادة شخص آخر بشكل غير قانوني باستخدام القوة أو التهديد بضرر جسيم.",
      ru: "Принуждение (§ 240 StGB) наказывает за противоправное навязывание воли другому человеку с применением силы или угрозы существенным злом.",
      en: "Coercion (§ 240 StGB) penalizes unlawfully forcing another person's will through violence or threat of significant harm."
    },
    optionen: {
      "0": {
        fa: "الف) هر کس فردی را به صورت غیرقانونی با خشونت یا تهدید به آسیبی محسوس به انجام کاری، تحمل کاری یا خودداری از کاری مجبور سازد.",
        ar: "أ) كل من يكره إنساناً بطريقة غير قانونية باستعمال العنف أو التهديد بضرر جسيم على القيام بعمل أو تحمله أو الامتناع عنه.",
        ru: "A) Кто противоправно принуждает человека силой или угрозой причинения ощутимого зла к совершению действия, терпению или бездействию.",
        en: "A) Whoever unlawfully compels a person by force or threat of substantial harm to commit, tolerate, or omit an act."
      },
      "1": {
        fa: "ب) استفاده از خشونت یا تهدید باید از نظر اخلاقی و قانونی مذموم و نکوهیده (verwerflich) تلقی شود.",
        ar: "ب) يجب اعتبار استخدام القوة أو التهديد تصرفاً مذموماً وغير مقبول قانونياً وأخلاقياً (verwerflich).",
        ru: "B) Применение силы или угрозы должно признаваться предосудительным и противоправным.",
        en: "B) The use of force or threat must be considered reprehensible/unlawful in relation to the intended goal."
      },
      "2": {
        fa: "ج) نگه‌داشتن قانونی یک مجرم طبق ماده ۱۲۷ آیین دادرسی کیفری.",
        ar: "ج) التوقيف القانوني لمرتكب جريمة متلبساً بموجب § 127 StPO.",
        ru: "C) Правомерное удержание правонарушителя по § 127 УПК.",
        en: "C) Lawful detention of an offender under § 127 StPO."
      },
      "3": {
        fa: "د) اعمال حق مالکیت مکان از طریق صدور دستور ممنوعیت ورود (Hausverbot).",
        ar: "د) ممارسة حق صاحب المكان عبر إصدار قرار منع الدخول (Hausverbot).",
        ru: "D) Осуществление прав владельца помещения через выдачу запрета на посещение.",
        en: "D) Exercising domiciliary rights by issuing a ban from premises."
      }
    }
  },

  // Frage 45: ihk-stgb-19
  "ihk-stgb-19": {
    frage: {
      fa: "چه زمانی در حقوق جزا از «کمک در دفاع مشروع» (Notwehrhilfe) سخن گفته می‌شود؟",
      ar: "متى يُطلق على التصرف في القانون الجنائي مصطلح 'مساعدة الدفاع الشرعي' (Notwehrhilfe)؟",
      ru: "Когда в уголовном праве говорят о 'помощи при необходимой обороне' (Notwehrhilfe)?",
      en: "When is an action considered 'defense of another' (Notwehrhilfe) in criminal law?"
    },
    loesung: {
      fa: "دفاع مشروع به نفع شخص ثالث (§ 32 Abs. 2 Alt. 2 StGB) عبارت است از دفع حمله فعلی و غیرقانونی به منافع و حقوق قانونی فردی دیگر.",
      ar: "مساعدة الدفاع الشرعي (§ 32 Abs. 2 Alt. 2 StGB) هي دفع اعتداء حال وغير مشروع يقع على حقوق ومصالح شخص آخر.",
      ru: "Помощь при необходимой обороне (§ 32 ч. 2 StGB) — это отражение наличного противоправного нападения на охраняемые законом права третьего лица.",
      en: "Defense of another (§ 32 (2) Alt. 2 StGB) is the defense against a current unlawful attack on the legal rights of a third party."
    },
    optionen: {
      "0": {
        fa: "الف) زمانی که عمل دفاع مشروع به نفع شخص ثالثی انجام شود که در همان لحظه هدف یک حمله غیرقانونی قرار گرفته است.",
        ar: "أ) عندما يُمارَس الدفاع الشرعي لصالح شخص ثالث يتعرض في الوقت الحالي لاعتداء غير مشروع.",
        ru: "A) Когда действие необходимой обороны совершается в пользу третьего лица, подвергающегося наличному противоправному нападению.",
        en: "A) When the act of self-defense is performed in favor of a third party who is facing a current unlawful attack."
      },
      "1": {
        fa: "ب) زمانی که پلیس از طریق تلفن دستورالعمل‌هایی ارائه دهد.",
        ar: "ب) عندما تقدم الشرطة تعليمات وتوجيهات عبر الهاتف.",
        ru: "B) Когда полиция дает инструкции по телефону.",
        en: "B) When the police provide instructions by phone."
      },
      "2": {
        fa: "ج) زمانی که به متهم در فرار از صحنه کمک شود.",
        ar: "ج) عندما يساعد الشخص الجاني على الهروب من مسرح الجريمة.",
        ru: "C) Когда оказывается помощь преступнику в побеге.",
        en: "C) When someone helps the perpetrator escape."
      },
      "3": {
        fa: "د) زمانی که پس از وقوع جرم آثار و شواهد از بین برده شوند.",
        ar: "د) عندما يتم إخفاء ومحو آثار الجريمة بعد ارتكابها.",
        ru: "D) Когда после преступления уничтожаются улики.",
        en: "D) When traces are removed after the crime."
      }
    }
  },

  // Frage 46: ihk-menschen-1
  "ihk-menschen-1": {
    frage: {
      fa: "هدف اصلی و نهایی ارتباط حرفه‌ای در خدمات حفاظتی و امنیتی چیست؟",
      ar: "ما هو الهدف الأسمى والأهم للتواصل المهني في خدمات الحراسة والأمن؟",
      ru: "Какова главная цель профессиональной коммуникации в охранной службе?",
      en: "What is the primary goal of professional communication in the security industry?"
    },
    loesung: {
      fa: "تنش‌زدایی و حل تعارضات بدون خشونت در اولویت اول قرار دارد تا خطرات برای تمام افراد درگیر به حداقل برسد.",
      ar: "خفض التصعيد وحل النزاعات سلمياً دون عنف يأتي في المقام الأول لتقليل المخاطر على جميع الأطراف.",
      ru: "Деэскалация и ненасильственное разрешение конфликтов стоят на первом месте для минимизации рисков для всех участников.",
      en: "De-escalation and non-violent conflict resolution are paramount to minimize risks for all parties involved."
    },
    optionen: {
      "0": {
        fa: "الف) شناسایی زودهنگام تعارضات و حل بدون خشونت آن‌ها از طریق رفتارهای تنش‌زدا (Deeskalation).",
        ar: "أ) التعرف المبكر على النزاعات وحلها سلمياً وبلا عنف من خلال سلوكيات خفض التصعيد (Deeskalation).",
        ru: "A) Раннее распознавание конфликтов и их ненасильственное разрешение путем деэскалационного поведения.",
        en: "A) Recognizing conflicts early and resolving them non-violently through de-escalating behavior."
      },
      "1": {
        fa: "ب) نشان دادن دائمی برتری فیزیکی خود به طرف مقابل.",
        ar: "ب) إظهار وتأكيد التفوق الجسدي أمام الطرف الآخر باستمرار.",
        ru: "B) Постоянная демонстрация своего физического превосходства оппоненту.",
        en: "B) Always demonstrating one's physical superiority to the counterpart."
      },
      "2": {
        fa: "ج) پایان دادن فوری به هرگونه بحث با ضرب و شتم.",
        ar: "ج) إنهاء كل جدال على الفور باللجوء إلى الضرب.",
        ru: "C) Немедленное прекращение любого спора применением силы.",
        en: "C) Immediately ending any argument with physical blows."
      },
      "3": {
        fa: "د) ترساندن مراجعین و مشتریان تا دیگر سؤالی نپرسند.",
        ar: "د) ترهيب وتخويف العملاء حتى يكفوا عن طرح الأسئلة.",
        ru: "D) Запугивание клиентов, чтобы они не задавали вопросов.",
        en: "D) Intimidating customers so that they no longer ask questions."
      }
    }
  },

  // Frage 47: ihk-menschen-2
  "ihk-menschen-2": {
    frage: {
      fa: "چه عواملی باعث ایجاد ناکامی، سرخوردگی (Frustration) و پرخاشگری در مراجعین می‌شود؟ (دو پاسخ صحیح را انتخاب کنید)",
      ar: "ما هي العوامل التي تعزز نشوء الإحباط (Frustration) والعدوانية لدى العملاء؟ (اختر إجابتين صحيحتين)",
      ru: "Какие факторы способствуют возникновению фрустрации и агрессии у посетителей? (Выберите два правильных ответа)",
      en: "Which factors promote the emergence of frustration and aggression among customers? (Choose two correct answers)"
    },
    loesung: {
      fa: "فرضیه ناکامی-پرخاشگری: موانع رسیدن به هدف (انتظار، رد شدن، مصرف الکل) سطح ناکامی و پتانسیل پرخاشگری را افزایش می‌دهند.",
      ar: "فرضية الإحباط والعدوان: العوائق في تحقيق الأهداف (الانتظار الطويل، الرفض، الكحول) تزيد من الإحباط واحتمالية السلوك العدواني.",
      ru: "Гипотеза фрустрации-агрессии: препятствия на пути к цели (ожидание, отказ, алкоголь) повышают разочарование и риск агрессии.",
      en: "Frustration-aggression hypothesis: Obstacles to achieving goals (waiting, rejection, alcohol) increase frustration and aggression potential."
    },
    optionen: {
      "0": {
        fa: "الف) زمان‌های انتظار طولانی، دستورالعمل‌های مبهم و نامشخص و رفتار غیرمحترمانه کارکنان.",
        ar: "أ) فترات الانتظار الطويلة، والتعليمات غير الواضحة، والتعامل غير اللائق أو الفظ من قِبل الموظفين.",
        ru: "A) Долгое время ожидания, неясные инструкции и неуважительное поведение персонала.",
        en: "A) Long waiting times, unclear instructions, and disrespectful behavior of personnel."
      },
      "1": {
        fa: "ب) مصرف الکل و مواد مخدر به همراه ازدحام و شلوغی بیش از حد سالن‌ها.",
        ar: "ب) تعاطي الكحول والمخدرات بالتزامن مع التواجد في أماكن مزدحمة ومكتظة.",
        ru: "B) Употребление алкоголя и наркотиков в сочетании с переполненными помещениями.",
        en: "B) Alcohol and drug consumption combined with overcrowded spaces."
      },
      "2": {
        fa: "ج) ارتباط مؤدبانه، شفاف و حرفه‌ای با افراد.",
        ar: "ج) التواصل المهذب والشفاف والواضح.",
        ru: "C) Вежливое и прозрачное общение.",
        en: "C) Polite and transparent communication."
      },
      "3": {
        fa: "د) ورودی‌های تمیز، مرتب و با روشنایی کافی.",
        ar: "د) مناطق الدخول النظيفة والمضاءة جيداً.",
        ru: "D) Чистые и хорошо освещенные входные зоны.",
        en: "D) Clean and well-lit entrance areas."
      }
    }
  },

  // Frage 48: ihk-menschen-3
  "ihk-menschen-3": {
    frage: {
      fa: "منظور از «گوش دادن فعال» (Aktives Zuhören) در تنش‌زدایی و حل اختلاف چیست؟",
      ar: "ما المقصود بـ 'الاستماع الفعّال' (Aktives Zuhören) في مهارات خفض التصعيد؟",
      ru: "Что понимается под 'активным слушанием' (Aktives Zuhören) при деэскалации?",
      en: "What is meant by 'Active Listening' (Aktives Zuhören) in de-escalation?"
    },
    loesung: {
      fa: "گوش دادن فعال هیجانات منفی را تخلیه می‌کند، حس احترام منتقل می‌نماید و سوءتفاهم‌ها را پیش از تشدید تنش برطرف می‌سازد.",
      ar: "الاستماع الفعّال يمتص الغضب والتوتر، ويعكس التقدير والاحترام، ويوضح سوء الفهم قبل تفاقم الأزمة.",
      ru: "Активное слушание снижает эмоциональный накал, демонстрирует уважение и устраняет недопонимание до эскалации.",
      en: "Active listening reduces emotions, signals respect, and clarifies misunderstandings before escalation occurs."
    },
    optionen: {
      "0": {
        fa: "الف) با دقت به سخنان طرف مقابل گوش دادن، حفظ تماس چشمی، قطع نکردن کلام و بازگو کردن خلاصه فهم خود با کلمات خود (بازگویی مفهومی / Paraphrasieren).",
        ar: "أ) الاستماع بانتباه للطرف الآخر، الحفاظ على التواصل البصري، تركه يكمل حديثه وإعادة صياغة ما فهمته بأسلوبك للتأكيد (Paraphrasieren).",
        ru: "A) Внимательное выслушивание собеседника, зрительный контакт, непрерывание речи и пересказ сути своими словами (парафразирование).",
        en: "A) Listening attentively to the conversation partner, maintaining eye contact, letting them finish, and mirroring back what was understood in one's own words (paraphrasing)."
      },
      "1": {
        fa: "ب) مرتب کلام طرف مقابل را قطع کردن برای نقل قوانین و دستورالعمل‌های اداری.",
        ar: "ب) مقاطعة المتحدث باستمرار لتلاوة اللوائح والتعليمات الصارمة.",
        ru: "B) Постоянное перебивание собеседника для цитирования служебных инструкций.",
        en: "B) Constantly interrupting the counterpart to quote service regulations."
      },
      "2": {
        fa: "ج) تظاهر به گوش دادن در حالی که با گوشی همراه تایپ می‌کنید.",
        ar: "ج) التظاهر بالاستماع بينما تنشغل بالكتابة على الهاتف الذكي.",
        ru: "C) Притворство, что слушаете, набирая текст на смартфоне.",
        en: "C) Pretending to listen while typing on a smartphone."
      },
      "3": {
        fa: "د) تنها منتظر خطای گوینده بودن تا صحبت او قطع شود.",
        ar: "د) انتظار زلات وأخطاء الطرف الآخر للانقضاض ومقاطعته.",
        ru: "D) Ожидание ошибок оппонента, чтобы тут же его прервать.",
        en: "D) Only waiting for the other person's mistakes in order to interrupt them."
      }
    }
  },

  // Frage 49: ihk-menschen-4
  "ihk-menschen-4": {
    frage: {
      fa: "طبق نظریه ادوارد تی. هال (Edward T. Hall)، زبان بدن چه حریم‌ها و محدوده‌های فاصله‌ای (Distanzzonen) را تفکیک می‌کند؟ (دو پاسخ صحیح را انتخاب کنید)",
      ar: "ما هي مناطق المسافة الشخصية (Distanzzonen) التي حددها إدوارد تي. هول في لغة الجسد؟ (اختر إجابتين صحيحتين)",
      ru: "Какие дистанционные зоны выделяются в языке тела по Эдварду Т. Холлу? (Выберите два правильных ответа)",
      en: "Which distance zones are distinguished in body language according to Edward T. Hall? (Choose two correct answers)"
    },
    loesung: {
      fa: "رعایت حریم شخصی (بیش از ۱ متر) برای تنش‌زدایی و حفظ ایمنی فردی (زمان واکنش در برابر حملات احتمالی) بسیار حیاتی است.",
      ar: "الحفاظ على مسافة الأمان الشخصية (أكثر من 1 متر) أمر حاسم لخفض التصعيد والحماية الذاتية (زمن رد الفعل عند الهجوم).",
      ru: "Соблюдение личной дистанционной зоны (> 1 м) имеет ключевое значение для деэскалации и личной безопасности (время реакции).",
      en: "Maintaining the personal distance zone (> 1 m) is crucial for de-escalation and self-protection (reaction time in case of attack)."
    },
    optionen: {
      "0": {
        fa: "الف) حریم صمیمی و خصوصی (کمتر از حدود ۵۰ سانتی‌متر)، که در محیط خدمت باید محافظت شود و نباید بدون اجازه وارد آن شد.",
        ar: "أ) المنطقة الحميمية (أقل من 50 سم تقريباً)، والتي يجب حمايتها أثناء الخدمة وعدم اختراقها دون مبرر.",
        ru: "A) Интимная зона (менее 50 см), которую на службе необходимо защищать и не нарушать без оснований.",
        en: "A) The intimate zone (less than approx. 50 cm), which should be protected on duty and not entered unauthorized."
      },
      "1": {
        fa: "ب) حریم شخصی و اجتماعی (حدود ۱.۲۰ تا ۳.۵۰ متر) برای ارتباط حرفه‌ای و حفظ ایمنی فردی.",
        ar: "ب) المنطقة الشخصية والاجتماعية (من 1.20 م إلى 3.50 م تقريباً) للتواصل المهني والحماية الذاتية.",
        ru: "B) Личная и социальная зоны (примерно от 1,20 до 3,50 м) для профессионального общения и самозащиты.",
        en: "B) The personal and social distance (approx. 1.20 m to 3.50 m) for professional communication and self-protection."
      },
      "2": {
        fa: "ج) حریم کیهانی به فاصله حداقل ۵۰ کیلومتر.",
        ar: "ج) المنطقة الكونية بمسافة لا تقل عن 50 كيلومتراً.",
        ru: "C) Космическая дистанция не менее 50 километров.",
        en: "C) The cosmic distance of at least 50 kilometers."
      },
      "3": {
        fa: "د) حریم رزمی با فاصله دقیق ۱ سانتی‌متر.",
        ar: "د) مسافة القتال المباشر بمقدار 1 سنتيمتر بالضبط.",
        ru: "D) Боевая дистанция ровно 1 сантиметр.",
        en: "D) The combat distance of exactly 1 centimeter."
      }
    }
  },

  // Frage 50: ihk-menschen-5
  "ihk-menschen-5": {
    frage: {
      fa: "چگونه می‌توان در مواجهه با یک فرد بسیار پرخاشگر، رفتاری تنش‌زدا (Deeskalierend) داشت؟",
      ar: "كيف تتصرف بأسلوب يهدئ التوتر ويخفض التصعيد أمام شخص شديد العدوانية؟",
      ru: "Как вести себя деэскалационно по отношению к крайне агрессивному человеку?",
      en: "How do you behave in a de-escalating manner towards a highly aggressive person?"
    },
    loesung: {
      fa: "زبان بدن باصلابت و آرام، لحن صحبت منطقی و حفظ فاصله فیزیکی مانع از تشدید هیجانی بحران و تعارض می‌شود.",
      ar: "لغة الجسد الهادئة والواثقة، والنبرة الموضوعية، والحفاظ على مسافة الأمان تمنع التصعيد العاطفي للنزاع.",
      ru: "Уверенный язык тела, деловой тон и соблюдение дистанции предотвращают эмоциональную раскрутку конфликта.",
      en: "Confident body language, matter-of-fact tone, and distance prevent the emotional buildup of conflicts."
    },
    optionen: {
      "0": {
        fa: "الف) صحبت کردن آرام و قاطعانه، داشتن زبان بدن باز، حفظ فاصله ایمنی و شخصی نگرفتن توهین‌ها.",
        ar: "أ) التحدث بهدوء وحزم، اتخاذ وضعية جسد منفتحة وغير هجومية، الحفاظ على مسافة أمان، وعدم أخذ الإهانات بشكل شخصي.",
        ru: "A) Говорить спокойно и уверенно, сохранять открытую позу, держать безопасную дистанцию и не принимать оскорбления на свой счет.",
        en: "A) Speaking calmly and assertively, adopting an open posture, keeping a safety distance, and not taking insults personally."
      },
      "1": {
        fa: "ب) داد زدن بر سر آن فرد و مسخره کردن او.",
        ar: "ب) الصراخ في وجه الشخص والسخرية منه والضحك عليه.",
        ru: "B) Кричать на человека и высмеивать его.",
        en: "B) Shouting at the person and ridiculing them."
      },
      "2": {
        fa: "ج) تهدید سریع فرد و گرفتن یقه او.",
        ar: "ج) تهديد الشخص فوراً والإمساك به من ياقته.",
        ru: "C) Немедленно угрожать человеку и хватать его за воротник.",
        en: "C) Immediately threatening the person and grabbing them by the collar."
      },
      "3": {
        fa: "د) فوراً پشت کردن به فرد و فرار کردن.",
        ar: "د) الاستدارة والهروب فوراً من المكان.",
        ru: "D) Немедленно повернуться спиной и убежать.",
        en: "D) Immediately turning around and running away."
      }
    }
  }
};
