/**
 * @file translationsSpecialB.ts
 * Übersetzungsmodul für Spezialmodi (Teil B: Rechtsbegriffe-Rätsel, Praxisfälle & Schriftliche Fragen)
 * § 34a GewO Sachkundeprüfung.
 *
 * Sprachen:
 * - Farsi (fa)
 * - Arabisch (ar)
 * - Russisch (ru)
 * - Englisch (en)
 */

import { TranslationBlockItem } from './translationsPart1.ts';

export const TRANSLATIONS_SPECIAL_B: Record<string, TranslationBlockItem> = {
  // =========================================================================
  // 1. RECHTSBEGRIFFE-RÄTSEL ("Was bin ich?" - Alle 20 Rätsel)
  // =========================================================================

  // Riddle 1: Notwehr
  "riddle-1": {
    frage: {
      fa: "من به شما اجازه می‌دهم در صورت یک حمله غیرقانونی و در حال وقوع به خودتان، دفاع لازم را انجام دهید. من در ماده ۳۲ قانون مجازات (StGB) و ماده ۲۲۷ قانون مدنی (BGB) تعریف شده‌ام. من چه هستم؟",
      ar: "أسمح لك بالدفاع الضروري ضد اعتداء حال وغير مشروع على نفسك. أنا محدد في المادة 32 StGB والمادة 227 BGB. من أنا؟",
      ru: "Я разрешаю вам необходимую защиту от наличного противоправного нападения на себя. Я закреплен в § 32 StGB и § 227 BGB. Что я такое?",
      en: "I allow you necessary defense against a current, unlawful attack on yourself. I am codified in § 32 StGB and § 227 BGB. What am I?"
    },
    loesung: {
      fa: "دفاع مشروع (Notwehr)",
      ar: "الدفاع الشرعي عن النفس (Notwehr)",
      ru: "Необходимая оборона (Notwehr)",
      en: "Self-defense (Notwehr)"
    },
    optionen: {
      "0": {
        fa: "دفاع مشروع (Notwehr)",
        ar: "الدفاع الشرعي (Notwehr)",
        ru: "Необходимая оборона (Notwehr)",
        en: "Self-defense (Notwehr)"
      },
      "1": {
        fa: "دفاع از دیگری (Nothilfe)",
        ar: "مساعدة الغير في الدفاع (Nothilfe)",
        ru: "Помощь в обороне (Nothilfe)",
        en: "Emergency aid (Nothilfe)"
      },
      "2": {
        fa: "اضطرار تبرئه‌کننده (Entschuldigender Notstand)",
        ar: "حالة الضرورة المعفية (Entschuldigender Notstand)",
        ru: "Крайняя необходимость (извиняющая)",
        en: "Exculpatory necessity"
      },
      "3": {
        fa: "خود‌یاری (Selbsthilfe)",
        ar: "المساعدة الذاتية (Selbsthilfe)",
        ru: "Самопомощь (Selbsthilfe)",
        en: "Self-help (Selbsthilfe)"
      }
    }
  },

  // Riddle 2: Nothilfe
  "riddle-2": {
    frage: {
      fa: "مانند دفاع مشروع هستم، اما زمانی به کار می‌روم که به شخص ثالث بی‌گناه حمله شده باشد و شما به کمک او بشتابید. من چه هستم؟",
      ar: "أنا مثل الدفاع الشرعي، لكني أُستخدم عندما يتعرض شخص ثالث بريء للاعتداء وتهب لمساعدته. من أنا؟",
      ru: "Я похож на необходимую оборону, но применяюсь, когда нападают на третье лицо и вы приходите на помощь. Что я такое?",
      en: "I am like self-defense, but applied when an innocent third party is attacked and you come to their aid. What am I?"
    },
    loesung: {
      fa: "دفاع از دیگری (Nothilfe)",
      ar: "مساعدة الغير في الدفاع (Nothilfe)",
      ru: "Помощь третьему лицу (Nothilfe)",
      en: "Emergency assistance / aid (Nothilfe)"
    },
    optionen: {
      "0": {
        fa: "دفاع مشروع (Notwehr)",
        ar: "الدفاع الشرعي (Notwehr)",
        ru: "Необходимая оборона (Notwehr)",
        en: "Self-defense (Notwehr)"
      },
      "1": {
        fa: "دفاع از دیگری (Nothilfe)",
        ar: "مساعدة الغير في الدفاع (Nothilfe)",
        ru: "Помощь третьему лицу (Nothilfe)",
        en: "Emergency aid (Nothilfe)"
      },
      "2": {
        fa: "اضطرار توجیه‌کننده (Rechtfertigender Notstand)",
        ar: "حالة الضرورة المبررة",
        ru: "Оправдывающая необходимость",
        en: "Justifying necessity"
      },
      "3": {
        fa: "اعاده تصرف (Besitzkehr)",
        ar: "استرداد الحيازة فوراً",
        ru: "Возврат владения по горячим следам",
        en: "Recovery of possession"
      }
    }
  },

  // Riddle 3: Vorläufige Festnahme (§ 127 Abs. 1 StPO)
  "riddle-3": {
    frage: {
      fa: "من به هر شهروندی اجازه می‌دهم کسی را که حین ارتکاب جرم دستگیر شده و خطر فرار یا عدم احراز هویت دارد، موقتاً بازداشت کند. من چه هستم؟",
      ar: "أسمح لأي شخص بتوقيف الجاني مؤقتاً إذا ضُبط متلبساً بالجرم وكان هناك خطر فرار أو تعذر التحقق من هويته. من أنا؟",
      ru: "Я разрешаю каждому задержать лицо, застигнутое на месте преступления, при опасности побега или неустановлении личности. Что я такое?",
      en: "I allow anyone to provisionally detain someone caught in the act if there is flight risk or unknown identity. What am I?"
    },
    loesung: {
      fa: "بازداشت موقت (§ 127 Abs. 1 StPO)",
      ar: "التوقيف المؤقت (Vorläufige Festnahme)",
      ru: "Временное задержание (§ 127 StPO)",
      en: "Provisional apprehension (§ 127 StPO)"
    },
    optionen: {
      "0": {
        fa: "بازداشت موقت (§ 127 Abs. 1 StPO)",
        ar: "التوقيف المؤقت (Vorläufige Festnahme)",
        ru: "Временное задержание (StPO § 127)",
        en: "Provisional arrest (§ 127 StPO)"
      },
      "1": {
        fa: "حکم دستگیری قضایی (Haftbefehl)",
        ar: "أمر القبض القضائي (Haftbefehl)",
        ru: "Ордер на арест (Haftbefehl)",
        en: "Arrest warrant (Haftbefehl)"
      },
      "2": {
        fa: "حبس و توقیف غیرقانونی (Freiheitsberaubung)",
        ar: "سلب الحرية غير القانوني",
        ru: "Незаконное лишение свободы",
        en: "False imprisonment"
      },
      "3": {
        fa: "شناسایی هویت پلیسی (Identitätsfeststellung)",
        ar: "التحقق من الهوية الشرطي",
        ru: "Установление личности полицией",
        en: "Police identity verification"
      }
    }
  },

  // Riddle 4: Hausrecht
  "riddle-4": {
    frage: {
      fa: "من به صاحب ملک یا نماینده او حق می‌دهم تصمیم بگیرد چه کسی اجازه ورود به ساختمان را دارد و چه کسی باید خارج شود. من چه هستم؟",
      ar: "أمنح صاحب المكان أو المفوض عنه الحق في تقرير من يدخل المنشأة ومن يجب عليه مغادرتها. من أنا؟",
      ru: "Я даю право распорядителю помещения решать, кто может входить в здание, а кто обязан покинуть его. Что я такое?",
      en: "I grant the property owner or representative the authority to decide who enters and who must leave. What am I?"
    },
    loesung: {
      fa: "حق مدیریت مکان / حریم ملک (Hausrecht)",
      ar: "حق صاحب المكان / المنشأة (Hausrecht)",
      ru: "Право распоряжения помещением (Hausrecht)",
      en: "Domiciliary rights (Hausrecht)"
    },
    optionen: {
      "0": {
        fa: "حق مالکیت و حریم مکان (Hausrecht)",
        ar: "حق صاحب المكان (Hausrecht)",
        ru: "Право распоряжения объектом (Hausrecht)",
        en: "Domiciliary rights (Hausrecht)"
      },
      "1": {
        fa: "حقوق دولتی حاکمیتی (Hoheitsrecht)",
        ar: "الحق السيادي الحكومي",
        ru: "Суверенное государственное право",
        en: "Sovereign rights"
      },
      "2": {
        fa: "حق بازرسی کیف (Durchsuchungsrecht)",
        ar: "حق التفتيش الجبري",
        ru: "Право на принудительный обыск",
        en: "Search rights"
      },
      "3": {
        fa: "حق دستگیری عمومی (Jedermannsrecht)",
        ar: "حق عامة الناس في التوقيف",
        ru: "Право каждого гражданина",
        en: "Citizen arrest rights"
      }
    }
  },

  // Riddle 5: Besitzdiener
  "riddle-5": {
    frage: {
      fa: "من کنترل واقعی بر اموال یا مکان را به دستور کارفرما اعمال می‌کنم، بدون اینکه خودم مالک باشم (ماده ۸۵۵ قانون مدنی BGB). من چه هستم؟",
      ar: "أمارس السيطرة الفعلية على الممتلكات أو المكان بتعليمات صاحب العمل دون أن أكون مالكاً (المادة 855 BGB). من أنا؟",
      ru: "Я осуществляю фактический контроль над имуществом или помещением по указанию работодателя, не являясь владельцем (§ 855 BGB). Что я такое?",
      en: "I exercise actual physical control over property per employer instructions without being the owner (§ 855 BGB). What am I?"
    },
    loesung: {
      fa: "خادم تصرف (Besitzdiener)",
      ar: "خادم الحيازة (Besitzdiener)",
      ru: "Слуга владения (Besitzdiener)",
      en: "Possession servant (Besitzdiener)"
    },
    optionen: {
      "0": {
        fa: "خادم تصرف (Besitzdiener)",
        ar: "خادم الحيازة (Besitzdiener)",
        ru: "Слуга владения (Besitzdiener)",
        en: "Possession servant (Besitzdiener)"
      },
      "1": {
        fa: "مالک اصلی (Eigentümer)",
        ar: "المالك القانوني (Eigentümer)",
        ru: "Собственник (Eigentümer)",
        en: "Owner (Eigentümer)"
      },
      "2": {
        fa: "متصرف مستقل (Eigenbesitzer)",
        ar: "الحائز الأصيل",
        ru: "Самостоятельный владелец",
        en: "Independent possessor"
      },
      "3": {
        fa: "مأمور رسمی دولتی (Amtsträger)",
        ar: "موظف رسمي حكومي",
        ru: "Должностное лицо (Amtsträger)",
        en: "Public official (Amtsträger)"
      }
    }
  },

  // Riddle 6: Besitzwehr (§ 859 Abs. 1 BGB)
  "riddle-6": {
    frage: {
      fa: "من به متصرف یا خادم تصرف اجازه می‌دهم با استفاده از زور در برابر سلب غیرقانونی تصرف در همان لحظه مقاومت کند. من چه هستم؟",
      ar: "أسمح للحائز أو خادم الحيازة بمقاومة نزع الحيازة غير المشروع بالقوة في نفس اللحظة. من أنا؟",
      ru: "Я разрешаю владельцу или слуге владения силой защищаться от незаконного захвата владения на месте. Что я такое?",
      en: "I allow the possessor or servant to resist unlawful deprivation of possession with force on the spot. What am I?"
    },
    loesung: {
      fa: "دفاع از تصرف (Besitzwehr)",
      ar: "الدفاع عن الحيازة (Besitzwehr)",
      ru: "Защита владения (Besitzwehr)",
      en: "Defense of possession (Besitzwehr)"
    },
    optionen: {
      "0": {
        fa: "دفاع از تصرف (Besitzwehr)",
        ar: "الدفاع عن الحيازة (Besitzwehr)",
        ru: "Защита владения (Besitzwehr)",
        en: "Defense of possession (Besitzwehr)"
      },
      "1": {
        fa: "اعاده تصرف (Besitzkehr)",
        ar: "استرداد الحيازة فوراً (Besitzkehr)",
        ru: "Возврат владения (Besitzkehr)",
        en: "Recovery of possession (Besitzkehr)"
      },
      "2": {
        fa: "خود‌یاری مدنی (Selbsthilfe nach § 229 BGB)",
        ar: "المساعدة الذاتية المدنية",
        ru: "Гражданская самопомощь (§ 229 BGB)",
        en: "Civil self-help (§ 229 BGB)"
      },
      "3": {
        fa: "تصرف عدوانی غیرقانونی (Verbotene Eigenmacht)",
        ar: "استخدام القوة المحظور",
        ru: "Самоуправство (Verbotene Eigenmacht)",
        en: "Unlawful self-redress"
      }
    }
  },

  // Riddle 7: Besitzkehr (§ 859 Abs. 2 BGB)
  "riddle-7": {
    frage: {
      fa: "اگر مال منقولی به زور یا مخفیانه برده شود، من اجازه می‌دهم سارق را تعقیب کرده و بلافاصله مال را بازپس گیرید. من چه هستم؟",
      ar: "إذا سُرق مال منقول خلسة أو انتُزع، أسمح بملاحقة الجاني واسترداد المال منه فوراً في الحال. من أنا؟",
      ru: "Если движимая вещь украдена или отнята, я разрешаю преследовать нарушителя и немедленно вернуть вещь. Что я такое?",
      en: "If movable property is stolen or taken, I allow pursuing the culprit and recovering it immediately on fresh pursuit. What am I?"
    },
    loesung: {
      fa: "اعاده تصرف (Besitzkehr)",
      ar: "استرداد الحيازة فوراً (Besitzkehr)",
      ru: "Возврат владения по горячим следам (Besitzkehr)",
      en: "Recovery of possession (Besitzkehr)"
    },
    optionen: {
      "0": {
        fa: "اعاده تصرف (Besitzkehr)",
        ar: "استرداد الحيازة فوراً (Besitzkehr)",
        ru: "Возврат владения (Besitzkehr)",
        en: "Recovery of possession (Besitzkehr)"
      },
      "1": {
        fa: "دفاع از تصرف (Besitzwehr)",
        ar: "الدفاع عن الحيازة (Besitzwehr)",
        ru: "Защита владения (Besitzwehr)",
        en: "Defense of possession (Besitzwehr)"
      },
      "2": {
        fa: "دفاع مشروع (Notwehr)",
        ar: "الدفاع الشرعي (Notwehr)",
        ru: "Необходимая оборона (Notwehr)",
        en: "Self-defense (Notwehr)"
      },
      "3": {
        fa: "توقیف مال (Beschlagnahme)",
        ar: "المصادرة والتحفظ الرسمي",
        ru: "Конфискация / Арест имущества",
        en: "Seizure / Impoundment"
      }
    }
  },

  // Riddle 8: Rechtfertigender Notstand (§ 34 StGB)
  "riddle-8": {
    frage: {
      fa: "من اجازه می‌دهم برای نجات یک منفعت حقوقی با ارزش‌تر (مانند جان انسان)، به مال یا حق کم‌ارزش‌تری صدمه بزنید. من چه هستم؟",
      ar: "أسمح لك بالتضحية بحق أو ممتلكات أقل قيمة من أجل إنقاذ مصلحة قانونية أعلى شأناً (مثل حياة إنسان). من أنا؟",
      ru: "Я разрешаю пожертвовать меньшим благом ради спасения существенно более ценного блага (например, жизни человека). Что я такое?",
      en: "I allow sacrificing a lower legal interest to rescue a substantially higher one (such as human life). What am I?"
    },
    loesung: {
      fa: "اضطرار توجیه‌کننده (§ 34 StGB)",
      ar: "حالة الضرورة المبررة (§ 34 StGB)",
      ru: "Оправдывающая крайняя необходимость (§ 34 StGB)",
      en: "Justifying emergency / necessity (§ 34 StGB)"
    },
    optionen: {
      "0": {
        fa: "اضطرار توجیه‌کننده (§ 34 StGB)",
        ar: "حالة الضرورة المبررة (§ 34 StGB)",
        ru: "Крайняя необходимость (§ 34 StGB)",
        en: "Justifying necessity (§ 34 StGB)"
      },
      "1": {
        fa: "اضطرار تبرئه‌کننده (§ 35 StGB)",
        ar: "حالة الضرورة المعفية (§ 35 StGB)",
        ru: "Извиняющая необходимость (§ 35 StGB)",
        en: "Exculpatory necessity (§ 35 StGB)"
      },
      "2": {
        fa: "دفاع مشروع (Notwehr)",
        ar: "الدفاع الشرعي (Notwehr)",
        ru: "Необходимая оборона (Notwehr)",
        en: "Self-defense (Notwehr)"
      },
      "3": {
        fa: "اضطرار دفاعی مدنی (§ 228 BGB)",
        ar: "حالة الطوارئ الدفاعية المدنية",
        ru: "Оборонительная необходимость (§ 228 BGB)",
        en: "Defensive necessity (§ 228 BGB)"
      }
    }
  },

  // Riddle 9: Notwehrexzess (§ 33 StGB)
  "riddle-9": {
    frage: {
      fa: "اگر مدافع از روی سردرگمی، ترس یا وحشت از حد مجاز دفاع فراتر رود، طبق من مجازات نمی‌شود. من چه هستم؟",
      ar: "إذا تجاوز المدافع حدود الدفاع الشرعي بسبب الارتباك أو الخوف أو الذعر، فإنه لا يُعاقب وفقاً لي. من أنا؟",
      ru: "Если обороняющийся превысил пределы обороны из-за замешательства, страха или паники, он освобождается от наказания. Что я такое?",
      en: "If the defender exceeds limits of self-defense due to confusion, fear, or panic, they are not punished under me. What am I?"
    },
    loesung: {
      fa: "تجاوز از حد دفاع مشروع ناشی از ترس و وحشت (Notwehrexzess nach § 33 StGB)",
      ar: "تجاوز حدود الدفاع الشرعي بدافع الذعر (Notwehrexzess)",
      ru: "Превышение пределов обороны из-за страха (Notwehrexzess)",
      en: "Excess of self-defense due to panic (Notwehrexzess § 33 StGB)"
    },
    optionen: {
      "0": {
        fa: "تجاوز از حد دفاع (Notwehrexzess)",
        ar: "تجاوز الدفاع الشرعي (Notwehrexzess)",
        ru: "Превышение пределов обороны (§ 33 StGB)",
        en: "Excess of self-defense (Notwehrexzess)"
      },
      "1": {
        fa: "دفاع مشروع ساختگی (Putativnotwehr)",
        ar: "الدفاع الشرعي الوهمي (Putativnotwehr)",
        ru: "Мнимая оборона (Putativnotwehr)",
        en: "Putative self-defense"
      },
      "2": {
        fa: "ضرب و جرح عمدی (Körperverletzung)",
        ar: "إيذاء جسدي عمدي",
        ru: "Умышленное причинение вреда",
        en: "Intentional bodily harm"
      },
      "3": {
        fa: "اقدام از روی خشم و انتقام (Rache)",
        ar: "الانتقام والغضب المحظور",
        ru: "Месть / Агрессия",
        en: "Revenge / Retaliation"
      }
    }
  },

  // Riddle 10: Putativnotwehr
  "riddle-10": {
    frage: {
      fa: "شخصی به اشتباه تصور می‌کند به او حمله شده است، در حالی که در واقعیت هیچ حمله‌ای وجود نداشته است. این اشتباه چیست؟",
      ar: "يعتقد الشخص خطأً أنه يتعرض لهجوم، بينما في الواقع لا يوجد أي هجوم على الإطلاق. ما هذا المفهوم؟",
      ru: "Человек ошибочно полагает, что на него напали, хотя в реальности никакого нападения нет. Что это за ошибка?",
      en: "A person mistakenly assumes they are being attacked when in fact no attack exists. What is this concept?"
    },
    loesung: {
      fa: "دفاع مشروع توهمی و فرضی (Putativnotwehr)",
      ar: "الدفاع الشرعي الوهمي (Putativnotwehr)",
      ru: "Мнимая оборона (Putativnotwehr)",
      en: "Putative self-defense (Putativnotwehr)"
    },
    optionen: {
      "0": {
        fa: "دفاع مشروع توهمی (Putativnotwehr)",
        ar: "الدفاع الشرعي الوهمي (Putativnotwehr)",
        ru: "Мнимая оборона (Putativnotwehr)",
        en: "Putative self-defense (Putativnotwehr)"
      },
      "1": {
        fa: "دفاع مشروع واقعی (Echte Notwehr)",
        ar: "الدفاع الشرعي الحقيقي",
        ru: "Подлинная необходимая оборона",
        en: "Genuine self-defense"
      },
      "2": {
        fa: "دفاع از دیگری (Nothilfe)",
        ar: "مساعدة الغير في الدفاع",
        ru: "Помощь в обороне третьему лицу",
        en: "Emergency aid"
      },
      "3": {
        fa: "تجاوز از حد دفاع (Notwehrexzess)",
        ar: "تجاوز حدود الدفاع الشرعي",
        ru: "Превышение обороны",
        en: "Excess of self-defense"
      }
    }
  },

  // Riddle 11: Garantenstellung
  "riddle-11": {
    frage: {
      fa: "من تعهد و مسئولیت قانونی خاصی هستم که فرد (مانند نیروی امنیتی مسئول حفاظت) را موظف می‌کند از وقوع آسیب جلوگیری کند، وگرنه به خاطر ترک فعل مجازات می‌شود. من چه هستم؟",
      ar: "أنا الالتزام والواجب القانوني الذي يلزم موظف الأمن بحماية الممتلكات أو الأرواح، والمعاقبة على الامتناع والتقاعس. من أنا؟",
      ru: "Я правовая обязанность гаранта предотвращать вред, неисполнение которой влечет уголовную ответственность за бездействие. Что я такое?",
      en: "I am the legal duty of a guarantor to avert harm, where failure to act results in liability for omission. What am I?"
    },
    loesung: {
      fa: "موقعیت ضامن و متعهد قانونی (Garantenstellung)",
      ar: "صفة وواجب الضامن القانوني (Garantenstellung)",
      ru: "Статус гаранта (Garantenstellung)",
      en: "Guarantor position (Garantenstellung)"
    },
    optionen: {
      "0": {
        fa: "موقعیت ضامن (Garantenstellung)",
        ar: "صفة الضامن (Garantenstellung)",
        ru: "Статус гаранта (Garantenstellung)",
        en: "Guarantor position (Garantenstellung)"
      },
      "1": {
        fa: "عدم کمک‌رسانی ساده (Unterlassene Hilfeleistung)",
        ar: "الامتناع عن تقديم المساعدة البسيط",
        ru: "Обычное неоказание помощи (§ 323c)",
        en: "Failure to assist (§ 323c StGB)"
      },
      "2": {
        fa: "حقوق عمومی شهروندی (Jedermannsrecht)",
        ar: "حقوق عامة الناس",
        ru: "Общие права гражданина",
        en: "Citizen rights"
      },
      "3": {
        fa: "مصونیت شغلی",
        ar: "الحصانة المهنية",
        ru: "Служебный иммунитет",
        en: "Professional immunity"
      }
    }
  },

  // Riddle 12: Hausfriedensbruch (§ 123 StGB)
  "riddle-12": {
    frage: {
      fa: "من جرمی هستم که وقتی کسی بدون اجازه وارد ملک خصوصی شود یا پس از دستور اخراج حاضر به ترک آن نشود، محقق می‌شوم. من چه هستم؟",
      ar: "أنا الجرم الذي يتحقق عندما يدخل شخص مكاناً دون إذن أو يرفض مغادرته بعد مطالبته بذلك. من أنا؟",
      ru: "Я преступление, которое совершается при незаконном проникновении в чужое помещение или отказе покинуть его по требованию. Что я такое?",
      en: "I am the criminal offense committed by unlawfully entering premises or refusing to leave when ordered. What am I?"
    },
    loesung: {
      fa: "ورود غیرقانونی به حریم ملک (Hausfriedensbruch nach § 123 StGB)",
      ar: "انتهاك حرمة المكان (Hausfriedensbruch)",
      ru: "Нарушение неприкосновенности жилища/помещения (§ 123 StGB)",
      en: "Trespassing / Breach of domestic peace (§ 123 StGB)"
    },
    optionen: {
      "0": {
        fa: "ورود غیرمجاز به ملک (Hausfriedensbruch)",
        ar: "انتهاك حرمة المكان (Hausfriedensbruch)",
        ru: "Нарушение неприкосновенности помещения",
        en: "Trespassing (Hausfriedensbruch)"
      },
      "1": {
        fa: "تخریب اموال (Sachbeschädigung)",
        ar: "إتلاف الممتلكات (Sachbeschädigung)",
        ru: "Повреждение имущества (Sachbeschädigung)",
        en: "Property damage"
      },
      "2": {
        fa: "اجبار و زورگویی (Nötigung)",
        ar: "الإكراه غير المشروع (Nötigung)",
        ru: "Принуждение (Nötigung)",
        en: "Coercion (Nötigung)"
      },
      "3": {
        fa: "ایجاد مزاحمت و هیاهو",
        ar: "الإخلال بالنظام العام",
        ru: "Мелкое хулиганство",
        en: "Public nuisance"
      }
    }
  },

  // Riddle 13: Diebstahl (§ 242 StGB)
  "riddle-13": {
    frage: {
      fa: "من برداشتن مال منقول متعلق به دیگری با قصد تصاحب غیرقانونی آن برای خود یا فرد دیگر هستم. من چه هستم؟",
      ar: "أنا أخذ مال منقول مملوك للغير بقصد الاستيلاء عليه بشكل غير مشروع لنفسي أو للغير. من أنا؟",
      ru: "Я противоправное изъятие чужой движимой вещи с целью ее незаконного присвоения себе или другим. Что я такое?",
      en: "I am taking another's movable property with the intent to unlawfully appropriate it for oneself or a third party. What am I?"
    },
    loesung: {
      fa: "سرقت (Diebstahl nach § 242 StGB)",
      ar: "السرقة (Diebstahl nach § 242 StGB)",
      ru: "Кража (Diebstahl по § 242 StGB)",
      en: "Theft (Diebstahl under § 242 StGB)"
    },
    optionen: {
      "0": {
        fa: "سرقت (Diebstahl)",
        ar: "السرقة (Diebstahl)",
        ru: "Кража (Diebstahl)",
        en: "Theft (Diebstahl)"
      },
      "1": {
        fa: "خیانت در امانت (Unterschlagung)",
        ar: "خيانة الأمانة / الاختلاس (Unterschlagung)",
        ru: "Присвоение имущества (Unterschlagung)",
        en: "Embezzlement (Unterschlagung)"
      },
      "2": {
        fa: "سرقت با زور و تهدید (Raub)",
        ar: "السطو والسرقة بالإكراه (Raub)",
        ru: "Разбой / Грабеж (Raub)",
        en: "Robbery (Raub)"
      },
      "3": {
        fa: "کلاهبرداری (Betrug)",
        ar: "الاحتيال والنصب (Betrug)",
        ru: "Мошенничество (Betrug)",
        en: "Fraud (Betrug)"
      }
    }
  },

  // Riddle 14: Raub (§ 249 StGB)
  "riddle-14": {
    frage: {
      fa: "من ترکیب سرقت همراه با اعمال خشونت فیزیکی علیه فرد یا تهدید به خطر جانی و بدنی فوری هستم. من چه هستم؟",
      ar: "أنا الجمع بين السرقة واستخدام العنف الجسدي ضد شخص أو التهديد بخطر حال على الحياة أو الجسد. من أنا؟",
      ru: "Я сочетание кражи с применением насилия к человеку или угрозой немедленной расправы. Что я такое?",
      en: "I am the combination of theft using violence against a person or threats of imminent bodily harm. What am I?"
    },
    loesung: {
      fa: "سرقت مقرون به آزار و زورگیری (Raub nach § 249 StGB)",
      ar: "السطو والسرقة بالإكراه (Raub nach § 249 StGB)",
      ru: "Разбой / Грабеж с насилием (Raub по § 249 StGB)",
      en: "Robbery (Raub under § 249 StGB)"
    },
    optionen: {
      "0": {
        fa: "زورگیری و سرقت با خشونت (Raub)",
        ar: "السرقة بالإكراه والسطو (Raub)",
        ru: "Разбой (Raub)",
        en: "Robbery (Raub)"
      },
      "1": {
        fa: "سرقت ساده (Diebstahl)",
        ar: "السرقة البسيطة (Diebstahl)",
        ru: "Обычная кража (Diebstahl)",
        en: "Simple theft (Diebstahl)"
      },
      "2": {
        fa: "باج‌گیری و اخاذی (Erpressung)",
        ar: "الابتزاز المالي (Erpressung)",
        ru: "Вымогательство (Erpressung)",
        en: "Extortion (Erpressung)"
      },
      "3": {
        fa: "اجبار و تهدید (Nötigung)",
        ar: "الإكراه (Nötigung)",
        ru: "Принуждение (Nötigung)",
        en: "Coercion (Nötigung)"
      }
    }
  },

  // Riddle 15: Nötigung (§ 240 StGB)
  "riddle-15": {
    frage: {
      fa: "من مجبور کردن غیرقانونی شخصی به انجام دادن، تحمل کردن یا خودداری از کاری با استفاده از زور یا تهدید به آسیبی جدی هستم. من چه هستم؟",
      ar: "أنا إجبار شخص بشكل غير قانوني على فعل أو تحمل أو الامتناع عن فعل شيء باستخدام القوة أو التهديد بضرر جسيم. من أنا؟",
      ru: "Я противоправное принуждение человека к действию, бездействию или терпению с применением насилия или угрозы. Что я такое?",
      en: "I am unlawfully compelling someone to do, tolerate, or omit an act through violence or threat of appreciable harm. What am I?"
    },
    loesung: {
      fa: "اجبار و اکراه غیرقانونی (Nötigung nach § 240 StGB)",
      ar: "الإكراه غير المشروع (Nötigung nach § 240 StGB)",
      ru: "Принуждение (Nötigung по § 240 StGB)",
      en: "Coercion (Nötigung under § 240 StGB)"
    },
    optionen: {
      "0": {
        fa: "اجبار غیرقانونی (Nötigung)",
        ar: "الإكراه (Nötigung)",
        ru: "Принуждение (Nötigung)",
        en: "Coercion (Nötigung)"
      },
      "1": {
        fa: "توهین (Beleidigung)",
        ar: "الإهانة والسب (Beleidigung)",
        ru: "Оскорбление (Beleidigung)",
        en: "Insult (Beleidigung)"
      },
      "2": {
        fa: "سلب آزادی (Freiheitsberaubung)",
        ar: "سلب الحرية (Freiheitsberaubung)",
        ru: "Лишение свободы (Freiheitsberaubung)",
        en: "False imprisonment"
      },
      "3": {
        fa: "تهدید ساده (Bedrohung)",
        ar: "التهديد البسيط (Bedrohung)",
        ru: "Угроза (Bedrohung)",
        en: "Threat (Bedrohung)"
      }
    }
  },

  // Riddle 16: Freiheitsberaubung (§ 239 StGB)
  "riddle-16": {
    frage: {
      fa: "من حبس کردن غیرقانونی شخصی در یک اتاق یا گرفتن آزادی جابجایی و رفت‌وآمد او به هر نحو غیرمجاز هستم. من چه هستم؟",
      ar: "أنا احتجاز شخص بشكل غير قانوني في مكان مغلق أو حرمانه بأي وسيلة من حرية الحركة والتنقل. من أنا؟",
      ru: "Я незаконное запирание человека или лишение его свободы передвижения иным способом. Что я такое?",
      en: "I am unlawfully locking someone up or depriving them of freedom of movement by other means. What am I?"
    },
    loesung: {
      fa: "سلب غیرقانونی آزادی (Freiheitsberaubung nach § 239 StGB)",
      ar: "سلب الحرية غير المشروع (Freiheitsberaubung nach § 239 StGB)",
      ru: "Незаконное лишение свободы (Freiheitsberaubung по § 239 StGB)",
      en: "False imprisonment (Freiheitsberaubung under § 239 StGB)"
    },
    optionen: {
      "0": {
        fa: "سلب غیرقانونی آزادی (Freiheitsberaubung)",
        ar: "سلب الحرية (Freiheitsberaubung)",
        ru: "Лишение свободы (Freiheitsberaubung)",
        en: "False imprisonment (Freiheitsberaubung)"
      },
      "1": {
        fa: "بازداشت موقت مجاز (§ 127 StPO)",
        ar: "التوقيف المؤقت القانوني",
        ru: "Законное временное задержание",
        en: "Lawful apprehension"
      },
      "2": {
        fa: "اجبار و اکراه (Nötigung)",
        ar: "الإكراه (Nötigung)",
        ru: "Принуждение (Nötigung)",
        en: "Coercion (Nötigung)"
      },
      "3": {
        fa: "ورود به عنف به ملک (Hausfriedensbruch)",
        ar: "انتهاك حرمة المكان",
        ru: "Нарушение неприкосновенности помещения",
        en: "Trespassing"
      }
    }
  },

  // Riddle 17: Amtsanmaßung (§ 132 StGB)
  "riddle-17": {
    frage: {
      fa: "من تظاهر غیرقانونی به داشتن سمت دولتی یا انجام وظایف و اختیاراتی هستم که فقط به مأموران دولتی (مانند پلیس) تعلق دارد. من چه هستم؟",
      ar: "أنا ادعاء منصب رسمي حكومي دون وجه حق أو ممارسة صلاحيات مقتصرة على موظفي الدولة (كالشرطة). من أنا؟",
      ru: "Я незаконное присвоение служебных полномочий или совершение действий, относящихся исключительно к госорганам. Что я такое?",
      en: "I am unlawfully pretending to hold a public office or performing acts reserved exclusively for public officials (like police). What am I?"
    },
    loesung: {
      fa: "غصب عنوان و اختیارات دولتی (Amtsanmaßung nach § 132 StGB)",
      ar: "انتحال صفة وظيفة عامة (Amtsanmaßung nach § 132 StGB)",
      ru: "Присвоение полномочий должностного лица (Amtsanmaßung по § 132 StGB)",
      en: "Usurpation of public office (Amtsanmaßung under § 132 StGB)"
    },
    optionen: {
      "0": {
        fa: "غصب عنوان دولتی (Amtsanmaßung)",
        ar: "انتحال صفة وظيفة عامة (Amtsanmaßung)",
        ru: "Присвоение полномочий (Amtsanmaßung)",
        en: "Usurpation of office (Amtsanmaßung)"
      },
      "1": {
        fa: "کلاهبرداری (Betrug)",
        ar: "الاحتيال (Betrug)",
        ru: "Мошенничество (Betrug)",
        en: "Fraud (Betrug)"
      },
      "2": {
        fa: "جعل سند (Urkundenfälschung)",
        ar: "تزوير الوثائق (Urkundenfälschung)",
        ru: "Подделка документов (Urkundenfälschung)",
        en: "Forgery of documents"
      },
      "3": {
        fa: "سوء‌استفاده از عناوین (Missbrauch von Titeln)",
        ar: "إساءة استخدام الألقاب والدرجات",
        ru: "Злоупотребление званиями",
        en: "Misuse of titles"
      }
    }
  },

  // Riddle 18: DGUV Vorschrift 23
  "riddle-18": {
    frage: {
      fa: "من آیین‌نامه ایمنی کار و پیشگیری از حوادث اتحادیه صنفی هستم که تجهیزات، بازرسی‌ها و ایمنی نگهبانان را الزامی می‌کند. من چه هستم؟",
      ar: "أنا لائحة السلامة المهنية والوقاية من الحوادث التي تفرض معايير وتجهيزات الحماية لموظفي الأمن. من أنا؟",
      ru: "Я предписание по охране труда и предотвращению несчастных случаев, регулирующее требования безопасности для охраны. Что я такое?",
      en: "I am the occupational health and accident prevention regulation setting safety and equipment standards for security personnel. What am I?"
    },
    loesung: {
      fa: "مقررات DGUV شماره 23 (خدمات نگهبانی و حراست)",
      ar: "لائحة DGUV رقم 23 لخدمات الحراسة والأمن",
      ru: "Предписание DGUV 23 (Охранная служба)",
      en: "DGUV Regulation 23 (Guarding Services)"
    },
    optionen: {
      "0": {
        fa: "مقررات DGUV شماره 23",
        ar: "لائحة DGUV رقم 23",
        ru: "Предписание DGUV 23",
        en: "DGUV Regulation 23"
      },
      "1": {
        fa: "ماده 34a قانون تجارت (GewO)",
        ar: "المادة 34a من قانون التجارة",
        ru: "§ 34a Закона о промысле",
        en: "GewO § 34a"
      },
      "2": {
        fa: "قانون سلاح (Waffengesetz)",
        ar: "قانون الأسلحة (Waffengesetz)",
        ru: "Закон об оружии (WaffG)",
        en: "Weapons Act (WaffG)"
      },
      "3": {
        fa: "قانون مقررات کار (Arbeitszeitgesetz)",
        ar: "قانون ساعات العمل",
        ru: "Закон о рабочем времени",
        en: "Working Hours Act"
      }
    }
  },

  // Riddle 19: Verhältnismäßigkeit
  "riddle-19": {
    frage: {
      fa: "من اصل بنیادینی هستم که بررسی می‌کند یک اقدام آیا مناسب (Geeignet)، ضروری (Erforderlich) و متناسب (Angemessen) است یا خیر. من چه هستم؟",
      ar: "أنا المبدأ الأساسي الذي يختبر ما إذا كان الإجراء مناسباً وضرورياً ومتناسباً مع الموقف. من أنا؟",
      ru: "Я фундаментальный принцип, проверяющий, является ли мера пригодной, необходимой и соразмерной. Что я такое?",
      en: "I am the core legal principle that tests whether an action is suitable, necessary, and appropriate/proportionate. What am I?"
    },
    loesung: {
      fa: "اصل تناسب و اعتدال (Grundsatz der Verhältnismäßigkeit)",
      ar: "مبدأ التناسب والاعتدال (Verhältnismäßigkeit)",
      ru: "Принцип соразмерности (Verhältnismäßigkeit)",
      en: "Principle of proportionality (Verhältnismäßigkeit)"
    },
    optionen: {
      "0": {
        fa: "اصل تناسب (Verhältnismäßigkeit)",
        ar: "مبدأ التناسب (Verhältnismäßigkeit)",
        ru: "Принцип соразмерности",
        en: "Principle of proportionality"
      },
      "1": {
        fa: "قانون برابری در برابر قانون",
        ar: "مبدأ المساواة أمام القانون",
        ru: "Принцип равенства перед законом",
        en: "Principle of equality"
      },
      "2": {
        fa: "اصل فرض بی‌گناهی",
        ar: "قرينة البراءة / افتراض البراءة",
        ru: "Презумпция невиновности",
        en: "Presumption of innocence"
      },
      "3": {
        fa: "اصل تقدم منافع مادی",
        ar: "أولوية المصالح التجارية",
        ru: "Принцип коммерческой выгоды",
        en: "Economic priority principle"
      }
    }
  },

  // Riddle 20: Notstand (§ 228 BGB vs § 904 BGB)
  "riddle-20": {
    frage: {
      fa: "من دو حالت اضطرار در حقوق مدنی هستم: یکی دفاعی (آسیب به شیء خطرآفرین) و دیگری تهاجمی (استفاده از شیء فرد بی‌طرف برای رفع خطر). من چه هستم؟",
      ar: "أنا حالتا الطوارئ في القانون المدني: حالة دفاعية (إتلاف الشيء مصدر الخطر) وحالة هجومية (استخدام شيء يملكه طرف محايد لدفع الخطر). من أنا؟",
      ru: "Я две нормы гражданского права о необходимости: оборонительная (вред источнику опасности) и агрессивная (воздействие на вещь третьего лица). Что я такое?",
      en: "I am the two civil necessity rights: defensive (§ 228 BGB, harm the threatening object) and aggressive (§ 904 BGB, affect third-party object). What am I?"
    },
    loesung: {
      fa: "اضطرار مدنی (§§ 228, 904 BGB)",
      ar: "حالة الضرورة المدنية (§§ 228, 904 BGB)",
      ru: "Гражданская крайняя необходимость (§§ 228, 904 BGB)",
      en: "Civil emergency necessity (§§ 228, 904 BGB)"
    },
    optionen: {
      "0": {
        fa: "اضطرار مدنی (§§ 228, 904 BGB)",
        ar: "حالة الضرورة المدنية (§§ 228, 904 BGB)",
        ru: "Крайняя необходимость (§§ 228, 904 BGB)",
        en: "Civil necessity (§§ 228, 904 BGB)"
      },
      "1": {
        fa: "دفاع مشروع (Notwehr nach § 227 BGB)",
        ar: "الدفاع الشرعي المدني",
        ru: "Необходимая оборона (§ 227 BGB)",
        en: "Self-defense (§ 227 BGB)"
      },
      "2": {
        fa: "خود‌یاری مدنی (Selbsthilfe nach § 229 BGB)",
        ar: "المساعدة الذاتية المدنية",
        ru: "Самопомощь (§ 229 BGB)",
        en: "Self-help (§ 229 BGB)"
      },
      "3": {
        fa: "قانون مسئولیت مدنی و خسارت (§ 823 BGB)",
        ar: "المسؤولية عن التعويض والضرر",
        ru: "Обязательство возмещения вреда (§ 823 BGB)",
        en: "Tort liability (§ 823 BGB)"
      }
    }
  },

  // =========================================================================
  // 2. PRAXISFÄLLE (Alle 10 Praxisfall-Szenarien)
  // =========================================================================

  // Fall 1: Kaufhausdetektiv
  "fall_01": {
    frage: {
      fa: "مورد ۱: کارآگاه فروشگاه یک مشتری را مشاهده می‌کند که عطر گران‌قیمتی را در جیب پنهان کرده و بدون پرداخت از گیت صندوق عبور می‌کند. مشتری قصد فرار دارد. اقدام صحیح چیست؟",
      ar: "الحالة 1: محقق المتجر يراقب زبوناً يخبئ عطراً ثميناً في جيبه ويتجاوز صناديق الدفع دون دفع. يحاول الزبون الفرار. ما الإجراء الصحيح؟",
      ru: "Случай 1: Детектив магазина замечает, как покупатель прячет дорогие духи в карман и проходит кассы без оплаты, пытаясь убежать. Каковы правильные действия?",
      en: "Case 1: Store detective observes a customer pocketing expensive perfume and passing the checkout without paying, then trying to flee. What is the correct action?"
    },
    loesung: {
      fa: "بازداشت موقت فرد طبق ماده 127 آیین دادرسی کیفری (StPO) و تماس فوری با پلیس برای احراز هویت.",
      ar: "التوقيف المؤقت للشخص وفقاً للمادة 127 StPO واستدعاء الشرطة فوراً للتحقق من هويته.",
      ru: "Временное задержание лица по § 127 StPO и немедленный вызов полиции для установления личности.",
      en: "Provisional apprehension of the person under § 127 StPO and immediate call to police for identification."
    },
    optionen: {
      "0": {
        fa: "بازداشت موقت طبق ماده 127 StPO و تماس فوری با پلیس",
        ar: "التوقيف المؤقت بموجب المادة 127 StPO واستدعاء الشرطة",
        ru: "Временное задержание по § 127 StPO и вызов полиции",
        en: "Provisional arrest under § 127 StPO and call police"
      },
      "1": {
        fa: "زدن و مجروح کردن متهم با باتوم به عنوان مجازات در محل",
        ar: "ضرب المتهم بالهراوة وإصابته كعقاب فوري في المكان",
        ru: "Избиение нарушителя дубинкой в качестве наказания",
        en: "Beating and injuring the suspect with a baton as punishment"
      },
      "2": {
        fa: "حبس کردن متهم در انبار به مدت ۲۴ ساعت بدون اطلاع به پلیس",
        ar: "حبس المشتبه به في المستودع لمدة 24 ساعة دون إبلاغ الشرطة",
        ru: "Запирание подозреваемого на складе на 24 часа без полиции",
        en: "Locking suspect in warehouse for 24 hours without police"
      },
      "3": {
        fa: "رها کردن کامل موضوع و چشم‌پوشی از سرقت",
        ar: "تجاهل الواقعة تماماً وترك السارق يذهب",
        ru: "Игнорирование кражи и отпускание нарушителя",
        en: "Letting the suspect go completely and ignoring the theft"
      }
    }
  },

  // Fall 2: Diskotheken-Türsteher
  "fall_02": {
    frage: {
      fa: "مورد ۲: یک مهمان بسیار مست و پرخاشگر با وجود صدور ممنوعیت ورود (Hausverbot)، با زور قصد ورود به دیسکو را دارد و نگهبان را هل می‌دهد. اقدام قانونی چیست؟",
      ar: "الحالة 2: زبون مخمور وعدواني جداً يحاول الدخول بالقوة رغم فرض حظر الدخول عليه (Hausverbot) ويدفع الحارس. ما هو الإجراء القانوني؟",
      ru: "Случай 2: Сильно пьяный и агрессивный гость пытается силой проникнуть в клуб вопреки запрету (Hausverbot) и толкает охранника. Каковы законные действия?",
      en: "Case 2: A heavily intoxicated and aggressive guest tries to force entry despite a trespass ban (Hausverbot) and shoves the bouncer. What is the lawful action?"
    },
    loesung: {
      fa: "استفاده از حق مدیریت مکان (Hausrecht) و دفاع از تصرف (Besitzwehr) جهت جلوگیری از ورود و در صورت لزوم تماس با پلیس.",
      ar: "ممارسة حق صاحب المكان (Hausrecht) والدفاع عن الحيازة (Besitzwehr) لمنع الدخول واستدعاء الشرطة عند الحاجة.",
      ru: "Применение права распоряжения помещением (Hausrecht) и защиты владения (Besitzwehr) для недопущения входа с вызовом полиции.",
      en: "Exercise domiciliary rights (Hausrecht) and defense of possession (Besitzwehr) to prevent entry and call police if needed."
    },
    optionen: {
      "0": {
        fa: "دفاع از تصرف و اعمال حق مکان (Hausrecht/Besitzwehr) و اخراج فرد",
        ar: "تطبيق حق المنشأة والدفاع عن الحيازة لمنع الدخول",
        ru: "Защита владения и права объекта для недопущения входа",
        en: "Defense of possession and domiciliary rights to block entry"
      },
      "1": {
        fa: "کشیدن اسلحه و شلیک هوایی برای ایجاد رعب و وحشت",
        ar: "سحب السلاح وإطلاق النار في الهواء للترهيب",
        ru: "Достать оружие и стрелять в воздух для запугивания",
        en: "Draw firearm and fire warning shots to intimidate"
      },
      "2": {
        fa: "اجازه ورود دادن به مهمان برای جلوگیری از هرگونه درگیری",
        ar: "السماح له بالدخول تجنباً لأي نقاش أو شجار",
        ru: "Пропустить гостя во избежание споров",
        en: "Allow guest inside to avoid discussion"
      },
      "3": {
        fa: "تخریب تلفن همراه و وسایل شخصی مهمان",
        ar: "تكسير هاتف الضيف وممتلكاته الشخصية",
        ru: "Уничтожить телефон и вещи гостя",
        en: "Smash the guest's mobile phone and personal items"
      }
    }
  },

  // Fall 3: Werkschutz Torkontrolle
  "fall_03": {
    frage: {
      fa: "مورد ۳: راننده یک کامیون هنگام خروج از محوطه کارخانه از بازرسی بار که در قرارداد و مقررات کارخانه توافق شده خودداری می‌کند. اقدام درست چیست؟",
      ar: "الحالة 3: سائق شاحنة يرفض تفتيش الحمولة المتفق عليه في لوائح المصنع أثناء الخروج. ما التصرف الصحيح؟",
      ru: "Случай 3: Водитель грузовика на выезде с завода отказывается от досмотра груза, предусмотренного регламентом. Каковы правильные действия?",
      en: "Case 3: A truck driver at factory exit refuses cargo inspection agreed in facility rules. What is the correct procedure?"
    },
    loesung: {
      fa: "جلوگیری از خروج کامیون از محوطه بر اساس حق مکان، عدم تفتیش فیزیکی اجباری و اطلاع فوری به سرپرست یا پلیس در صورت لزوم.",
      ar: "منع الشاحنة من مغادرة المنشأة استناداً لحق صاحب المكان، دون تفتيش قسري، وإبلاغ المشرف أو الشرطة.",
      ru: "Запрет на выезд с территории на основании прав объекта, без насильственного обыска, и доклад руководству или полиции.",
      en: "Deny exit from grounds based on domiciliary rights without forcible search, and notify management or police."
    },
    optionen: {
      "0": {
        fa: "بستن راهبند و ممانعت از خروج، عدم تفتیش اجباری و گزارش به سرپرست",
        ar: "منع الخروج عبر إغلاق البوابة دون تفتيش جبري وإبلاغ الإدارة",
        ru: "Закрыть шлагбаум, не обыскивать силой и доложить руководству",
        en: "Close barrier to deny exit without forced search and report"
      },
      "1": {
        fa: "شکستن شیشه کامیون و بیرون کشیدن راننده با خشونت",
        ar: "كسر زجاج الشاحنة وسحب السائق بالقوة للخارج",
        ru: "Разбить стекло грузовика и силой вытащить водителя",
        en: "Break truck window and drag driver out by force"
      },
      "2": {
        fa: "شلیک به لاستیک‌های کامیون",
        ar: "إطلاق النار على إطارات الشاحنة",
        ru: "Стрельба по колесам грузовика",
        en: "Shoot at the truck tires"
      },
      "3": {
        fa: "باز کردن فوری درب و اجازه خروج بدون ثبت گزارش",
        ar: "فتح البوابة فوراً والسماح له بالمرور دون توثيق",
        ru: "Немедленно открыть ворота и выпустить без записи",
        en: "Open gate immediately and let pass without documentation"
      }
    }
  },

  // Fall 4: Angriff auf Kollegen
  "fall_04": {
    frage: {
      fa: "مورد ۴: دو مهاجم در یک کنسرت با بطری شکسته به همکار نگهبان شما حمله می‌کنند. جان همکار در خطر جدی است. چه اقدامی مجاز است؟",
      ar: "الحالة 4: مهاجمان يعتديان على زميلك الحارس بزجاجة مكسورة في حفل موسيقي وحياته في خطر داهم. ما الإجراء المسموح به؟",
      ru: "Случай 4: Двое нападающих атакуют вашего коллегу разбитой бутылкой на концерте, угрожая его жизни. Какое действие допустимо?",
      en: "Case 4: Two attackers assault your security colleague with a broken bottle at a concert, endangering their life. What action is permitted?"
    },
    loesung: {
      fa: "دفاع از دیگری (Nothilfe طبق § 32 StGB) با اعمال تمام قوای لازم و مؤثر جهت دفع فوری حمله مرگبار.",
      ar: "مساعدة الغير في الدفاع (Nothilfe بموجب § 32 StGB) باستخدام كل القوة اللازمة لصد الهجوم القاتل.",
      ru: "Помощь в обороне (Nothilfe по § 32 StGB) с применением всех необходимых средств для отражения смертельной угрозы.",
      en: "Emergency aid (Nothilfe under § 32 StGB) using all necessary and effective force to stop the lethal attack."
    },
    optionen: {
      "0": {
        fa: "دفاع از دیگری (Nothilfe) با ابزار لازم برای دفع حمله خطرناک",
        ar: "مساعدة الزميل في الدفاع (Nothilfe) بالوسائل اللازمة لصد الخطر",
        ru: "Необходимая помощь (Nothilfe) для отражения опасного нападения",
        en: "Emergency aid (Nothilfe) with necessary means to stop attack"
      },
      "1": {
        fa: "فرار کردن و تنها گذاشتن همکار بدون هیچ اقدامی",
        ar: "الهروب وترك الزميل لمصيره دون مساعدة",
        ru: "Убежать и бросить коллегу в опасности",
        en: "Flee and leave the colleague without assistance"
      },
      "2": {
        fa: "فیلمبرداری با موبایل به جای کمک‌رسانی",
        ar: "تصوير المشهد بالهاتف بدلاً من التدخل",
        ru: "Снимать происходящее на телефон вместо помощи",
        en: "Film with phone instead of intervening"
      },
      "3": {
        fa: "تشویق مهاجمان به ادامه درگیری",
        ar: "تشجيع المهاجمين على الاستمرار",
        ru: "Подстрекать нападающих к продолжению",
        en: "Encourage attackers to continue"
      }
    }
  },

  // Fall 5: Brand im Einkaufszentrum
  "fall_05": {
    frage: {
      fa: "مورد ۵: در یک مرکز خرید آژیر آتش‌سوزی به صدا درمی‌آید و دود غلیظ مشاهده می‌شود. اولویت اصلی پرسنل امنیتی چیست؟",
      ar: "الحالة 5: انطلاق إنذار الحريق في مركز تجاري مع تصاعد دخان كثيف. ما هي الأولوية القصوى للأمن؟",
      ru: "Случай 5: Сработала пожарная тревога в ТЦ, виден густой дым. Каков главный приоритет службы охраны?",
      en: "Case 5: Fire alarm sounds in shopping center with heavy smoke visible. What is the primary priority for security staff?"
    },
    loesung: {
      fa: "نجات جان انسان‌ها، تخلیه منظم محوطه به سمت خروجی‌های اضطراری، حفظ ایمنی خود و هدایت نیروهای آتش‌نشانی.",
      ar: "إنقاذ الأرواح، وإخلاء المكان بانتظام عبر مخارج الطوارئ، وحماية النفس وإرشاد فرق الإطفاء.",
      ru: "Спасение людей, организованная эвакуация к аварийным выходам, собственная безопасность и встреча пожарных.",
      en: "Rescue of human lives, orderly evacuation via emergency exits, self-protection, and directing firefighters."
    },
    optionen: {
      "0": {
        fa: "تخلیه سریع افراد، هدایت به خروجی اضطراری و راهنمایی آتش‌نشانی",
        ar: "إخلاء الأشخاص فوراً نحو مخارج الطوارئ وإرشاد الإطفاء",
        ru: "Быстрая эвакуация людей к выходам и встреча пожарных",
        en: "Evacuate people to emergency exits and guide fire brigade"
      },
      "1": {
        fa: "قفل کردن خروجی‌ها برای جلوگیری از دزدی کالاها در هرج‌ومرج",
        ar: "قفل مخارج الطوارئ لمنع سرقة البضائع أثناء الفوضى",
        ru: "Запереть аварийные выходы во избежание краж",
        en: "Lock emergency exits to prevent theft during chaos"
      },
      "2": {
        fa: "ورود به اتاق آتش‌گرفته بدون کپسول و تجهیزات تنفسی",
        ar: "دخول الغرفة المحترقة دون معدات تنفسية أو إطفاء",
        ru: "Идти в горящую комнату без средств защиты дыхания",
        en: "Enter burning room without breathing apparatus"
      },
      "3": {
        fa: "خاموش کردن سیستم هشدار و وانمود کردن به هشدار کاذب",
        ar: "إطفاء الإنذار والتظاهر بأنه إنذار كاذب",
        ru: "Отключить сигнализацию и сделать вид, что это ложная тревога",
        en: "Turn off alarm and pretend it was a false alarm"
      }
    }
  },

  // Fall 6: Aggressiver Bettler vor Bankfiliale
  "fall_06": {
    frage: {
      fa: "مورد ۶: یک فرد به طور مکرر و پرخاشگرانه مشتریان یک شعبه بانک را در محوطه ورودی اختصاصی مسدود و تهدید می‌کند. واکنش اصولی چیست؟",
      ar: "الحالة 6: شخص يعترض زبائن فرع بنك بعدوانية عند المدخل الخاص ويهددهم. ما التصرف المهني السليم؟",
      ru: "Случай 6: Агрессивный человек настойчиво блокирует и запугивает клиентов у входа в банк. Какова профессиональная реакция?",
      en: "Case 6: An individual aggressively blocks and threatens customers in the private entrance area of a bank branch. What is the correct response?"
    },
    loesung: {
      fa: "مخاطب قرار دادن محترمانه و قاطع، صدور ممنوعیت حضور در ملک و در صورت عدم تمکین، درخواست مداخله پلیس.",
      ar: "مخاطبته بأدب وحزم، وإصدار حظر دخول، واستدعاء الشرطة عند عدم الامتثال.",
      ru: "Вежливое, но твердое обращение, объявление запрета на нахождение и вызов полиции при неподчинении.",
      en: "Polite but assertive communication, issuing a premises ban, and calling police upon non-compliance."
    },
    optionen: {
      "0": {
        fa: "صحبت قاطع و آرام، ابلاغ ممنوعیت حضور و تماس با پلیس در صورت لزوم",
        ar: "التحدث بحزم وهدوء، وإبلاغ حظر التواجد، واستدعاء الشرطة",
        ru: "Твердый спокойный разговор, запрет на нахождение и вызов полиции",
        en: "Calm and firm address, issuing premises ban, calling police"
      },
      "1": {
        fa: "استفاده فوری از اسپری فلفل بدون هیچ اخطار یا تهدید واقعی",
        ar: "استخدام رذاذ الفلفل فوراً دون أي تحذير أو تهديد حقيقي",
        ru: "Немедленное применение перцового баллончика без угрозы",
        en: "Immediate use of pepper spray without warning or threat"
      },
      "2": {
        fa: "کتک زدن فرد و سرقت وسایل شخصی او",
        ar: "ضرب الشخص وسرقة متعلقاته الشخصية",
        ru: "Избиение человека и отбор его личных вещей",
        en: "Beating the person and taking their belongings"
      },
      "3": {
        fa: "پیوستن به فرد و دریافت سهم از پول‌های جمع‌آوری شده",
        ar: "مشاركته وتقاسم الأموال التي يحصل عليها",
        ru: "Присоединение к вымогательству и дележ денег",
        en: "Joining the person and splitting collected money"
      }
    }
  },

  // Fall 7: Fund eines verdächtigen Koffers
  "fall_07": {
    frage: {
      fa: "مورد ۷: در یک سالن همایش یک چمدان بدون صاحب و مشکوک کشف می‌شود. اقدامات ایمنی استاندارد کدامند؟",
      ar: "الحالة 7: العثور على حقيبة سفر مشبوهة وبدون صاحب في صالة مؤتمرات. ما هي إجراءات السلامة القياسية؟",
      ru: "Случай 7: В конференц-зале обнаружен подозрительный бесхозный чемодан. Каковы стандартные меры безопасности?",
      en: "Case 7: A suspicious, unattended suitcase is found in a convention hall. What are the standard security measures?"
    },
    loesung: {
      fa: "دست نزدن به چمدان، ایجاد حریم ایمن و تخلیه محدوده، اطلاع فوری به پلیس و سرپرست و ثبت مشخصات دقیق.",
      ar: "عدم لمس الحقيبة، وتطويق المكان وإخلاء المنطقة، وإبلاغ الشرطة والإدارة فوراً وتوثيق التفاصيل.",
      ru: "Не прикасаться к чемодану, оцепить опасную зону, эвакуировать людей и немедленно вызвать полицию.",
      en: "Do not touch suitcase, cord off area, evacuate immediate zone, and inform police and management immediately."
    },
    optionen: {
      "0": {
        fa: "دست نزدن به شیء، تخلیه و طناب‌کشی محل و تماس فوری با پلیس",
        ar: "عدم لمس الحقيبة، وإخلاء وتطويق المكان واستدعاء الشرطة فوراً",
        ru: "Не трогать объект, оцепить территорию и немедленно вызвать полицию",
        en: "Do not touch item, evacuate and cordon off area, call police"
      },
      "1": {
        fa: "باز کردن چمدان با چاقو برای دیدن محتویات داخلی",
        ar: "فتح الحقيبة بالسكين لمعرفة ما بداخلها",
        ru: "Вскрытие чемодана ножом для проверки содержимого",
        en: "Forcibly opening suitcase with a knife to inspect contents"
      },
      "2": {
        fa: "لگد زدن به چمدان یا پرتاب آن به بیرون از پنجره",
        ar: "ركل الحقيبة أو رميها من النافذة إلى الخارج",
        ru: "Пнуть чемодан или выбросить его в окно",
        en: "Kicking the suitcase or throwing it out of a window"
      },
      "3": {
        fa: "بردن چمدان به اتاق استراحت نگهبانان بدون اطلاع به کسی",
        ar: "أخذ الحقيبة إلى غرفة استراحة الحراس دون إبلاغ أحد",
        ru: "Унести чемодан в комнату отдыха охраны без доклада",
        en: "Taking suitcase to security breakroom without informing anyone"
      }
    }
  },

  // Fall 8: Sachbeschädigung durch Graffiti
  "fall_08": {
    frage: {
      fa: "مورد ۸: حین گشت شبانه فردی را در حال اسپری کردن دیوار ساختمان با رنگ مشاهده می‌کنید. واکنش حقوقی مناسب چیست؟",
      ar: "الحالة 8: أثناء الدورية الليلية تشاهد شخصاً يقوم برسم الجرافيتي وتشويه جدار المبنى بالطلاء. ما التصرف القانوني؟",
      ru: "Случай 8: Во время ночного патруля вы замечаете человека, наносящего краску на стену здания (граффити). Какова реакция?",
      en: "Case 8: During night patrol you spot someone spray-painting graffiti on the building wall. What is the lawful response?"
    },
    loesung: {
      fa: "مخاطب قرار دادن، بازداشت موقت طبق ماده 127 آیین دادرسی کیفری (StPO) به دلیل جرم مشهود و تحویل به پلیس.",
      ar: "مخاطبته وتوقيفه مؤقتاً بموجب المادة 127 StPO لارتكابه جرماً مشهوداً وتسليمه للشرطة.",
      ru: "Обращение к нарушителю, временное задержание по § 127 StPO на месте преступления и передача полиции.",
      en: "Address the culprit, provisionally apprehend under § 127 StPO in flagrante delicto, and hand over to police."
    },
    optionen: {
      "0": {
        fa: "توقف عمل تخریب، بازداشت موقت (§ 127 StPO) و تحویل به پلیس",
        ar: "إيقاف العمل التخريبي، والتوقيف المؤقت (127 StPO) وتسليمه للشرطة",
        ru: "Пресечение правонарушения, задержание (§ 127 StPO) и передача полиции",
        en: "Stop property damage, provisionally detain (§ 127 StPO), call police"
      },
      "1": {
        fa: "رنگ‌پاشی متقابل روی صورت و لباس فرد به عنوان مجازات",
        ar: "رش الطلاء على وجه وملابس الشخص كعقاب له",
        ru: "Облить нарушителя краской в отместку",
        en: "Spray paint on the culprit's face and clothes as revenge"
      },
      "2": {
        fa: "شلیک گلوله جنگی به سمت فرد در حال فرار",
        ar: "إطلاق الرصاص الحي على الشخص أثناء هروبه",
        ru: "Стрельба боевыми патронами по убегающему",
        en: "Fire live ammunition at the fleeing person"
      },
      "3": {
        fa: "گرفتن رشوه و درخواست نقاشی نام نگهبان روی دیوار",
        ar: "أخذ رشوة وطلب كتابة اسم الحارس على الجدار",
        ru: "Взять взятку и попросить написать имя охранника",
        en: "Accept a bribe and ask to paint the guard's name"
      }
    }
  },

  // Fall 9: Betrunkener randaliert im Museum
  "fall_09": {
    frage: {
      fa: "مورد ۹: فردی مست در موزه با صدای بلند به آثار هنری ضربه می‌زند و خطر شکستن ویترین‌ها وجود دارد. اقدام صحیح چیست؟",
      ar: "الحالة 9: شخص مخمور في متحف يصطدم بالقطع الفنية بصوت عالٍ وهناك خطر كسر واجهات العرض. ما الإجراء الصحيح؟",
      ru: "Случай 9: Пьяный посетитель в музее шумит и задевает экспонаты, создавая угрозу витринам. Каковы правильные действия?",
      en: "Case 9: An intoxicated museum visitor loudly stumbles into art exhibits with danger of breaking display cases. What is the correct action?"
    },
    loesung: {
      fa: "دور کردن فوری فرد از آثار بر اساس دفاع از تصرف و حق مکان، هدایت به بیرون و تماس با پلیس در صورت مقاومت.",
      ar: "إبعاد الشخص فوراً عن المعروضات استناداً لحق المنشأة والدفاع عن الحيازة وإخراجه، واستدعاء الشرطة.",
      ru: "Немедленное отведение нарушителя от экспонатов на основе прав объекта, вывод наружу и вызов полиции при сопротивлении.",
      en: "Immediately move person away from exhibits under domiciliary rights and possession defense, escort out, call police."
    },
    optionen: {
      "0": {
        fa: "محافظت از آثار، هدایت مؤدبانه اما قاطع فرد به بیرون و گزارش واقعه",
        ar: "حماية الآثار الفنية، وإخراج الشخص بحزم وأدب وتوثيق الواقعة",
        ru: "Защита экспонатов, решительное и вежливое удаление нарушителя",
        en: "Protect exhibits, escort person out firmly and politely, log incident"
      },
      "1": {
        fa: "پرت کردن مجسمه‌های موزه به سمت فرد مست",
        ar: "رمي تماثيل المتحف على الشخص المخمور",
        ru: "Бросать музейные статуэтки в нарушителя",
        en: "Throw museum statues at the intoxicated person"
      },
      "2": {
        fa: "ترک کامل موزه و بستن درها به روی بازدیدکنندگان",
        ar: "مغادرة المتحف تماماً وإغلاق الأبواب على الزوار",
        ru: "Покинуть музей и запереть посетителей внутри",
        en: "Leave the museum entirely and lock doors on visitors"
      },
      "3": {
        fa: "همراهی با فرد در تخریب سایر بخش‌های موزه",
        ar: "مشاركة الشخص في تخريب باقي أقسام المتحف",
        ru: "Присоединиться к разрушению музея",
        en: "Join the person in damaging other museum sections"
      }
    }
  },

  // Fall 10: Medizinischer Notfall (Herzinfarkt)
  "fall_10": {
    frage: {
      fa: "مورد ۱۰: در حین انجام وظیفه، بازدیدکننده‌ای ناگهان با درد شدید قفسه سینه روی زمین می‌افتد و بیهوش می‌شود. اولویت اقدامات چیست؟",
      ar: "الحالة 10: أثناء أداء الخدمة، يسقط أحد الزوار فجأة مغشياً عليه مع ألم حاد في الصدر. ما هو الترتيب الصحيح للإجراءات؟",
      ru: "Случай 10: Во время службы посетитель внезапно падает без сознания с острой болью в груди. Каков порядок действий?",
      en: "Case 10: While on duty, a visitor collapses unconscious with severe chest pain. What is the correct priority of measures?"
    },
    loesung: {
      fa: "بررسی هوشیاری و تنفس، تماس فوری با اورژانس ۱۱۲، شروع کمک‌های اولیه (ماساژ قلبی در صورت نیاز) و آوردن دستگاه شوک AED.",
      ar: "فحص الوعي والتنفس، والاتصال فوراً بالإسعاف 112، وبدء الإسعافات الأولية وجلب جهاز الصدمات AED.",
      ru: "Проверка сознания и дыхания, немедленный вызов скорой 112, первая помощь (СЛР) и доставка дефибриллятора AED.",
      en: "Check consciousness and breathing, call emergency 112 immediately, start first aid (CPR) and deploy AED."
    },
    optionen: {
      "0": {
        fa: "تماس فوری با اورژانس ۱۱۲، اجرای کمک‌های اولیه و احیای قلبی (AED)",
        ar: "الاتصال بالإسعاف 112 فوراً، وتقديم الإسعافات الأولية واستخدام AED",
        ru: "Вызов скорой 112, оказание первой помощи и применение AED",
        en: "Call emergency 112 immediately, administer first aid and AED"
      },
      "1": {
        fa: "بررسی جیب‌های فرد بیهوش و سرقت کارت‌های بانکی او",
        ar: "تفتيش جيوب المصاب وسرقة بطاقاته البنكية",
        ru: "Обыск карманов пострадавшего и кража его денег",
        en: "Search pockets of unconscious person and steal credit cards"
      },
      "2": {
        fa: "بی‌توجهی به وضعیت و ادامه گشت‌زنی عادی",
        ar: "تجاهل الحالة والاستمرار في الدورية بشكل طبيعي",
        ru: "Игнорировать пострадавшего и продолжить патруль",
        en: "Ignore the emergency and continue normal patrol"
      },
      "3": {
        fa: "ممنوع کردن ورود نیروهای امداد و پزشکان به محوطه",
        ar: "منع فرق الإسعاف والأطباء من دخول المنشأة",
        ru: "Запретить скорой помощи и врачам вход на объект",
        en: "Deny paramedics and doctors access to the premises"
      }
    }
  },

  // =========================================================================
  // 3. SCHRIFTLICHE PRÜFUNGSFRAGEN (Alle 30 DIHK-Fragen)
  // =========================================================================

  // WQ 1: Öffentliches Recht (GewO § 34a)
  "wq-oeff-1": {
    frage: {
      fa: "کدامیک از مشاغل زیر مطابق بند ۱ ماده 34a قانون تجارت (GewO) نیاز به قبولی در آزمون تخصص اتاق بازرگانی (IHK) دارد؟",
      ar: "أي من الأنشطة التالية تتطلب بنجاح اجتياز امتحان الكفاءة (Sachkundeprüfung) وفقاً للمادة 34a GewO؟",
      ru: "Какая из следующих видов деятельности требует успешной сдачи экзамена § 34a GewO в IHK?",
      en: "Which of the following activities strictly requires passing the § 34a GewO IHK Sachkundeprüfung?"
    },
    loesung: {
      fa: "گشت‌زنی در اماکن عمومی شهری (Citystreife) و کنترل ورودی در دیسکوها.",
      ar: "الدوريات في الأماكن العامة (Citystreife) والحراسة عند مداخل الديسكوهات.",
      ru: "Патрулирование общественных мест (Citystreife) и контроль входа в дискотеки.",
      en: "Patrols in public traffic areas (Citystreife) and bouncers at discotheques."
    },
    optionen: {
      "0": {
        fa: "گشت شهری در اماکن عمومی و کنترل ورودی در دیسکوها",
        ar: "دوريات الأماكن العامة والسيطرة على مداخل الديسكوهات",
        ru: "Городское патрулирование и охрана входов в дискотеки",
        en: "City patrols in public spaces and bouncers at discotheques"
      },
      "1": {
        fa: "خدمات پذیرش و ثبت نام ساده در لابی شرکت‌های اداری",
        ar: "خدمة الاستقبال وتسجيل الزوار في مبنى إداري",
        ru: "Простая служба на ресепшн в офисном здании",
        en: "Simple reception and visitor registration at office lobby"
      },
      "2": {
        fa: "نصب و سیم‌کشی سیستم‌های اعلام سرقت و دزدگیر",
        ar: "تركيب وتوصيل أجهزة الإنذار ضد السرقة",
        ru: "Монтаж и проводка систем охранной сигнализации",
        en: "Installation and wiring of burglar alarm systems"
      },
      "3": {
        fa: "مربیگری سگ‌های خانگی در مدارس تربیت حیوانات",
        ar: "تدريب الكلاب الأليفة في مدارس الحيوانات",
        ru: "Дрессировка домашних собак в школе для животных",
        en: "Training domestic pets in animal training schools"
      }
    }
  },

  // WQ 2: Gewerbeordnung Zuverlässigkeit
  "wq-oeff-2": {
    frage: {
      fa: "صلاحیت فردی و قابل اعتماد بودن (Zuverlässigkeit) نگهبان بر اساس ماده 34a قانون تجارت توسط چه مرجعی بررسی می‌شود؟",
      ar: "من هي الجهة المختصة بالتحقق من الأهلية والموثوقية (Zuverlässigkeit) لموظف الأمن وفقاً للمادة 34a؟",
      ru: "Какой орган проверяет надежность (Zuverlässigkeit) охранника согласно § 34a GewO?",
      en: "Which authority verifies the reliability (Zuverlässigkeit) of a security guard under § 34a GewO?"
    },
    loesung: {
      fa: "اداره نظارت بر اصناف و کسب‌وکار (Gewerbebehörde / Ordnungsamt).",
      ar: "سلطة الشؤون التجارية والترخيص (Gewerbebehörde / Ordnungsamt).",
      ru: "Ведомство по надзору за промыслом / Ведомство порядка (Gewerbebehörde / Ordnungsamt).",
      en: "The trade licensing authority / Public order office (Gewerbebehörde / Ordnungsamt)."
    },
    optionen: {
      "0": {
        fa: "اداره نظارت بر اصناف (Gewerbebehörde / Ordnungsamt)",
        ar: "إدارة الشؤون التجارية (Gewerbebehörde / Ordnungsamt)",
        ru: "Ведомство по промыслу (Gewerbebehörde / Ordnungsamt)",
        en: "Trade licensing authority (Gewerbebehörde / Ordnungsamt)"
      },
      "1": {
        fa: "اداره مالیات و دارایی (Finanzamt)",
        ar: "مصلحة الضرائب (Finanzamt)",
        ru: "Налоговая инспекция (Finanzamt)",
        en: "Tax office (Finanzamt)"
      },
      "2": {
        fa: "مرکز کاریابی و اشتغال (Agentur für Arbeit)",
        ar: "وكالة العمل والتوظيف (Agentur für Arbeit)",
        ru: "Агентство по трудоустройству (Agentur für Arbeit)",
        en: "Employment agency (Agentur für Arbeit)"
      },
      "3": {
        fa: "اتحادیه صنفی نگهبانان خصوصی",
        ar: "نقابة حراس الأمن الخاصة",
        ru: "Профсоюз частных охранников",
        en: "Private security guards trade union"
      }
    }
  },

  // WQ 3: Bewachungsverordnung Ausweis
  "wq-oeff-3": {
    frage: {
      fa: "کارت شناسایی خدمت (Dienstausweis) نگهبان طبق آیین‌نامه نگهبانی (BewachV) باید شامل چه مواردی باشد؟",
      ar: "ما هي البيانات التي يجب أن يتضمنها تصريح الخدمة (Dienstausweis) لموظف الأمن وفقاً للائحة الحراسة (BewachV)؟",
      ru: "Что обязательно должно содержать служебное удостоверение охранника согласно регламенту BewachV?",
      en: "What must the security guard's service ID card contain according to the Guarding Ordinance (BewachV)?"
    },
    loesung: {
      fa: "نام و نام خانوادگی، نام و آدرس شرکت نگهبانی، عکس و شماره شناسایی سامانه نگهبانان (Bewacher-ID).",
      ar: "الاسم واللقب، اسم وعنوان شركة الحراسة، الصورة ورقم التسجيل في سجل الحراس (Bewacher-ID).",
      ru: "Имя, фамилия, наименование и адрес охранного предприятия, фотография и Bewacher-ID.",
      en: "First & last name, company name and address, photograph, and guard register ID (Bewacher-ID)."
    },
    optionen: {
      "0": {
        fa: "نام و نام خانوادگی، نام شرکت، عکس و شناسه ثبت (Bewacher-ID)",
        ar: "الاسم، اسم الشركة، الصورة ورقم السجل (Bewacher-ID)",
        ru: "Имя, название фирмы, фото и номер Bewacher-ID",
        en: "Name, company name, photo, and Bewacher-ID"
      },
      "1": {
        fa: "میزان حقوق ماهانه و شماره حساب بانکی",
        ar: "الراتب الشهري ورقم الحساب البنكي",
        ru: "Размер зарплаты и номер банковского счета",
        en: "Monthly salary and bank account number"
      },
      "2": {
        fa: "گروه خونی و سوابق پزشکی کامل",
        ar: "فصيلة الدم والسجل الطبي الكامل",
        ru: "Группа крови и полная медицинская карта",
        en: "Blood type and complete medical record"
      },
      "3": {
        fa: "آدرس منزل شخصی و شماره تلفن اعضای خانواده",
        ar: "عنوان المنزل الخاص وأرقام هواتف العائلة",
        ru: "Домашний адрес и телефоны членов семьи",
        en: "Private home address and family phone numbers"
      }
    }
  },

  // WQ 4: DSGVO Grundsätze
  "wq-dat-1": {
    frage: {
      fa: "طبق مقررات عمومی حفاظت از داده‌های اتحادیه اروپا (DSGVO)، کدام اصل برای ذخیره‌سازی داده‌های شخصی حاکم است؟",
      ar: "وفقاً للائحة العامة لحماية البيانات (DSGVO)، ما هو المبدأ الأساسي لمعالجة وتخزين البيانات الشخصية؟",
      ru: "Какой принцип действует при обработке и хранении персональных данных по регламенту DSGVO?",
      en: "According to the EU General Data Protection Regulation (GDPR/DSGVO), which principle applies to data storage?"
    },
    loesung: {
      fa: "اصل حداقل‌سازی داده‌ها و محدودیت هدف (Datenminimierung und Zweckbindung).",
      ar: "مبدأ التقليل من البيانات والالتزام بالغرض المحدد (Datenminimierung und Zweckbindung).",
      ru: "Принцип минимизации данных и ограничения цели (Datenminimierung und Zweckbindung).",
      en: "Principle of data minimization and purpose limitation (Datenminimierung und Zweckbindung)."
    },
    optionen: {
      "0": {
        fa: "حداقل‌سازی داده‌ها و محدودیت هدف (Datenminimierung & Zweckbindung)",
        ar: "التقليل من البيانات وتقييد الهدف (Datenminimierung)",
        ru: "Минимизация данных и целевое назначение",
        en: "Data minimization and purpose limitation"
      },
      "1": {
        fa: "جمع‌آوری نامحدود داده‌ها برای استفاده‌های احتمالی بعدی",
        ar: "جمع البيانات غير المحدود للاستخدامات المستقبلية المحتملة",
        ru: "Неограниченный сбор данных для будущего использования",
        en: "Unlimited collection of data for possible future uses"
      },
      "2": {
        fa: "انتشار آزادانه تصاویر دوربین‌ها در شبکه‌های اجتماعی",
        ar: "نشر تسجيلات الكاميرات بحرية على وسائل التواصل",
        ru: "Свободная публикация записей камер в соцсетях",
        en: "Free publishing of surveillance footage on social media"
      },
      "3": {
        fa: "نگهداری دائمی تمام اطلاعات بدون امکان پاک‌سازی",
        ar: "الاحتفاظ بجميع البيانات إلى الأبد دون حذف",
        ru: "Бессрочное хранение всех данных без права удаления",
        en: "Permanent storage of all data without deletion options"
      }
    }
  },

  // WQ 5: Videoüberwachung DSGVO
  "wq-dat-2": {
    frage: {
      fa: "هنگام نصب دوربین‌های مداربسته در فضاهای قابل تردد عموم، چه نکته‌ای الزامی است؟",
      ar: "ما هو الإجراء الإلزامي عند تشغيل كاميرات المراقبة في الأماكن المفتوحة للجمهور؟",
      ru: "Что является обязательным при видеонаблюдении в общедоступных помещениях?",
      en: "What is mandatory when operating CCTV video surveillance in publicly accessible areas?"
    },
    loesung: {
      fa: "نصب تابلوی هشدار با ذکر مشخصات مسئول، هدف از نظارت و حقوق افراد در اولین نقطه دید.",
      ar: "وضع لوحة تحذيرية واضحة تتضمن هوية المسؤول، الغرض من المراقبة وحقوق المتضررين عند أول نقطة رؤية.",
      ru: "Установка четкой информационной таблички с контактами ответственного лица и целями съемки.",
      en: "Posting clearly visible warning signs with controller contact info, purpose, and data subject rights."
    },
    optionen: {
      "0": {
        fa: "تابلوی هشدار با ذکر مسئول، هدف و حقوق افراد در ورودی",
        ar: "لوحة تحذيرية واضحة بالمسؤول والغرض والحقوق عند المدخل",
        ru: "Информационная табличка с целями и ответственным лицом",
        en: "Warning sign stating controller, purpose, and rights at entrance"
      },
      "1": {
        fa: "مخفی کردن کامل دوربین‌ها در سقف بدون هیچ اطلاع‌رسانی",
        ar: "إخفاء الكاميرات تماماً في السقف دون أي إشعار",
        ru: "Полная маскировка камер в потолке без предупреждений",
        en: "Completely concealing cameras in ceiling without notice"
      },
      "2": {
        fa: "ارسال زنده تصاویر به تمام تلویزیون‌های عمومی شهر",
        ar: "بث الصور مباشرة على شاشات التلفاز العامة بالمدينة",
        ru: "Прямая трансляция видео на общественные экраны города",
        en: "Live broadcast of footage to city public television screens"
      },
      "3": {
        fa: "نصب دوربین در سرویس‌های بهداشتی و اتاق‌های تعویض لباس",
        ar: "تركيب الكاميرات داخل دورات المياه وغرف تبديل الملابس",
        ru: "Установка камер в туалетах и раздевалках",
        en: "Installing cameras inside restrooms and changing rooms"
      }
    }
  },

  // WQ 6: BGB Eigentum vs Besitz
  "wq-bgb-1": {
    frage: {
      fa: "تفاوت حقوقی میان مالکیت (Eigentum) و تصرف (Besitz) در قانون مدنی (BGB) چیست؟",
      ar: "ما هو الفرق القانوني بين الملكية (Eigentum) والحيازة (Besitz) في القانون المدني (BGB)؟",
      ru: "В чем юридическое различие между собственностью (Eigentum) и владением (Besitz) в BGB?",
      en: "What is the legal difference between ownership (Eigentum) and possession (Besitz) in the BGB?"
    },
    loesung: {
      fa: "مالکیت تسلط قانونی و حقوقی کامل بر شیء است (§ 903 BGB)، در حالی که تصرف تسلط و کنترل فیزیکی واقعی است (§ 854 BGB).",
      ar: "الملكية هي السيطرة القانونية الكاملة (§ 903 BGB)، بينما الحيازة هي السيطرة الفعلية والواقعية على الشيء (§ 854 BGB).",
      ru: "Собственность — это правовое господство (§ 903 BGB), а владение — фактический физический контроль (§ 854 BGB).",
      en: "Ownership is legal dominance (§ 903 BGB), whereas possession is actual physical control (§ 854 BGB)."
    },
    optionen: {
      "0": {
        fa: "مالکیت سلطه قانونی است، تصرف کنترل فیزیکی و واقعی شیء است",
        ar: "الملكية هي السلطة القانونية، والحيازة هي السيطرة الفعلية المادية",
        ru: "Собственность — правовое право, владение — фактический контроль",
        en: "Ownership is legal right, possession is actual physical control"
      },
      "1": {
        fa: "مالکیت و تصرف دقیقاً یکسان هستند و هیچ تفاوتی ندارند",
        ar: "الملكية والحيازة متطابقتان تماماً ولا يوجد أي فرق بينهما",
        ru: "Собственность и владение абсолютно тождественны",
        en: "Ownership and possession are completely identical terms"
      },
      "2": {
        fa: "فقط دولت می‌تواند مالک باشد و شهروندان فقط متصرف هستند",
        ar: "الدولة وحدها تملك، والمواطنون حائزون فقط",
        ru: "Только государство может быть собственником",
        en: "Only the state can be owner and citizens only possessors"
      },
      "3": {
        fa: "تصرف مربوط به زمین است و مالکیت فقط مربوط به پول نقد",
        ar: "الحيازة للعقارات والملكية للنقود فقط",
        ru: "Владение относится к земле, а собственность — к деньгам",
        en: "Possession applies to land and ownership only to cash"
      }
    }
  },

  // WQ 7: BGB Verbotene Eigenmacht
  "wq-bgb-2": {
    frage: {
      fa: "تصرف عدوانی غیرقانونی (Verbotene Eigenmacht طبق ماده 858 BGB) چه زمانی رخ می‌دهد؟",
      ar: "متى يتحقق الاستيلاء غير المشروع بالقوة (Verbotene Eigenmacht وفقاً للمادة 858 BGB)؟",
      ru: "Когда имеет место самоуправство / нарушение владения (Verbotene Eigenmacht по § 858 BGB)?",
      en: "When does unlawful self-redress / trespass against possession (Verbotene Eigenmacht § 858 BGB) occur?"
    },
    loesung: {
      fa: "هنگامی که تصرف شخصی بدون رضایت او و بدون مجوز قانونی سلب یا مختل شود.",
      ar: "عندما تُسلب حيازة شخص أو يُعتدى عليها دون موافقته وبدون مسوغ قانوني.",
      ru: "Когда владение лица нарушается или отнимается без его согласия и без законных оснований.",
      en: "When possession is withdrawn or disturbed without the possessor's consent and without legal authorization."
    },
    optionen: {
      "0": {
        fa: "سلب یا اختلال تصرف بدون رضایت متصرف و بدون مجوز قانونی",
        ar: "نزع الحيازة أو إعاقتها دون موافقة وبدون إذن قانوني",
        ru: "Лишение или нарушение владения без согласия и закона",
        en: "Depriving or disturbing possession without consent and law"
      },
      "1": {
        fa: "خرید قانونی یک کالا در فروشگاه با دریافت فاکتور",
        ar: "شراء سلعة قانونياً في متجر والحصول على الفاتورة",
        ru: "Законная покупка товара в магазине с чеком",
        en: "Lawful purchase of an item in a store with receipt"
      },
      "2": {
        fa: "تحویل داوطلبانه یک شیء به دوست به عنوان امانت",
        ar: "تسليم شيء طوعاً لصديق على سبيل الأمانة",
        ru: "Добровольная передача вещи другу во временное пользование",
        en: "Voluntarily handing an object to a friend as a loan"
      },
      "3": {
        fa: "اجاره دادن یک آپارتمان با قرارداد کتبی",
        ar: "تأجير شقة بموجب عقد كتابي رسمي",
        ru: "Сдача квартиры в аренду по договору",
        en: "Renting an apartment with a written contract"
      }
    }
  },

  // WQ 8: BGB Selbsthilfe (§ 229 BGB)
  "wq-bgb-3": {
    frage: {
      fa: "شرط استفاده از حق خود‌یاری مدنی (Selbsthilfe nach § 229 BGB) چیست؟",
      ar: "ما هو الشرط الأساسي لممارسة المساعدة الذاتية المدنية (Selbsthilfe بموجب المادة 229 BGB)؟",
      ru: "Каково главное условие для применения гражданской самопомощи (Selbsthilfe по § 229 BGB)?",
      en: "What is the essential condition for exercising civil self-help (Selbsthilfe under § 229 BGB)?"
    },
    loesung: {
      fa: "وجود یک ادعای حقوقی معتبر و عدم امکان دریافت به موقع کمک مراجع دولتی، به طوری که خطر از دست رفتن حق وجود داشته باشد.",
      ar: "وجود حق أو مطالبة قانونية وتعذر الحصول على مساعدة السلطات في الوقت المناسب مع وجود خطر ضياع الحق.",
      ru: "Наличие законного требования и невозможность своевременной помощи властей при угрозе утраты права.",
      en: "Existence of a civil claim, timely official assistance unavailable, and danger that claim enforcement would be frustrated."
    },
    optionen: {
      "0": {
        fa: "ادعای قانونی، عدم دسترسی به موقع به مراجع و خطر زوال حق",
        ar: "مطالبة مشروعة، وتعذر وصول السلطات وخطر ضياع الحق",
        ru: "Законное право, невозможность помощи властей и риск утраты",
        en: "Civil claim, official help unavailable, danger of frustration"
      },
      "1": {
        fa: "تمایل شخصی به مجازات متخلفان بدون دخالت دادگاه",
        ar: "الرغبة الشخصية في معاقبة المخالف دون محاكمة",
        ru: "Личное желание наказать нарушителя без суда",
        en: "Personal desire to punish offenders without court involvement"
      },
      "2": {
        fa: "حضور ۵ مأمور پلیس در صحنه حادثه",
        ar: "تواجد 5 من رجال الشرطة في مكان الحادث",
        ru: "Присутствие 5 сотрудников полиции на месте",
        en: "Presence of 5 police officers on the scene"
      },
      "3": {
        fa: "دستور شفاهی مشتری برای آسیب رساندن به اموال دیگران",
        ar: "أمر شفهي من العميل بإتلاف ممتلكات الغير",
        ru: "Устный приказ клиента повредить чужое имущество",
        en: "Verbal order from client to damage another's property"
      }
    }
  },

  // WQ 9: StGB Notwehr Merkmale
  "wq-stgb-1": {
    frage: {
      fa: "ارکان دفاع مشروع (Notwehr طبق ماده 32 StGB) کدامند؟",
      ar: "ما هي الأركان والشروط القانونية للدفاع الشرعي عن النفس (Notwehr وفقاً لـ § 32 StGB)؟",
      ru: "Каковы обязательные признаки необходимой обороны (Notwehr по § 32 StGB)?",
      en: "What are the core elements and conditions of self-defense (Notwehr under § 32 StGB)?"
    },
    loesung: {
      fa: "یک حمله در حال وقوع (فعلی)، غیرقانونی و دفاع لازم و با هدف دفع حمله.",
      ar: "اعتداء حال (مباشر)، غير مشروع، ودفاع ضروري ومناسب لصد الاعتداء بنية الدفاع.",
      ru: "Наличное (настоящее), противоправное нападение и необходимые меры защиты с волей к обороне.",
      en: "A current, unlawful attack and necessary defense exercised with defense intent."
    },
    optionen: {
      "0": {
        fa: "حمله فعلی، غیرقانونی و دفاع لازم و مناسب با قصد دفاع",
        ar: "اعتداء حال، غير مشروع، ودفاع ضروري بنية الدفاع",
        ru: "Наличное, противоправное нападение и необходимая защита",
        en: "Current, unlawful attack and necessary defense with defensive intent"
      },
      "1": {
        fa: "حمله‌ای که ۵ سال پیش پایان یافته و انتقام‌گیری بعدی",
        ar: "اعتداء انتهى منذ 5 سنوات والانتقام اللاحق منه",
        ru: "Нападение, закончившееся 5 лет назад, и последующая месть",
        en: "Attack ended 5 years ago followed by later revenge"
      },
      "2": {
        fa: "اقدام قانونی مأمور پلیس با داشتن حکم بازرسی",
        ar: "إجراء قانوني سليم من الشرطة بأمر تفتيش قضائي",
        ru: "Законные действия полиции с ордером на обыск",
        en: "Lawful action by police officer executing search warrant"
      },
      "3": {
        fa: "حمله تصوری در رویا و خواب بدون وجود خطر در بیداری",
        ar: "اعتداء تخيلي في الحلم دون أي خطر في الواقع",
        ru: "Воображаемое нападение во сне без реальной угрозы",
        en: "Imaginary attack in a dream without real waking danger"
      }
    }
  },

  // WQ 10: StGB Notwehrexzess
  "wq-stgb-2": {
    frage: {
      fa: "تجاوز از حد دفاع مشروع ناشی از عواطف شدید (Notwehrexzess طبق ماده 33 StGB) چه وضعیتی است؟",
      ar: "ما هو التجاوز في الدفاع الشرعي (Notwehrexzess وفقاً للمادة 33 StGB)؟",
      ru: "Что такое превышение пределов необходимой обороны из-за аффекта (Notwehrexzess по § 33 StGB)?",
      en: "What constitutes excess of self-defense due to severe asthenic affect (Notwehrexzess § 33 StGB)?"
    },
    loesung: {
      fa: "تجاوز مدافع از حدود دفاع لازم صرفاً به دلیل سردرگمی، ترس یا وحشت (عواطف تضعیف‌کننده)، که باعث عدم مجازات وی می‌شود.",
      ar: "تجاوز حدود الدفاع الضروري فقط بدافع الارتباك أو الخوف أو الهلع، مما يعفي الفاعل من العقوبة الجنائية.",
      ru: "Превышение пределов обороны исключительно из-за страха, испуга или замешательства, освобождающее от наказания.",
      en: "Exceeding limits of necessary defense strictly out of confusion, fear, or panic, resulting in exculpation."
    },
    optionen: {
      "0": {
        fa: "فراتر رفتن از حد دفاع به دلیل ترس، وحشت یا سردرگمی (معاف از مجازات)",
        ar: "تجاوز حدود الدفاع بدافع الخوف أو الذعر أو الارتباك (معفى من العقاب)",
        ru: "Превышение обороны из-за страха или паники (без наказания)",
        en: "Exceeding defense bounds due to fear, terror, or confusion"
      },
      "1": {
        fa: "استفاده عمدی از خشونت کشنده به انگیزه خشم، کینه و نفرت",
        ar: "استخدام العنف القاتل عمداً بدافع الغضب والحقد والكراهية",
        ru: "Умышленное применение насилия из мести и злости",
        en: "Intentional lethal violence motivated by anger and hate"
      },
      "2": {
        fa: "شکنجه دادن سارق دستگیر شده در اتاق نگهبانی",
        ar: "تعذيب السارق المقبوض عليه في غرفة الحراسة",
        ru: "Пытки задержанного вора в комнате охраны",
        en: "Torturing apprehended thief in the security office"
      },
      "3": {
        fa: "رد صلاحیت پروانه کسب به دلیل عدم پرداخت مالیات",
        ar: "إلغاء الترخيص التجاري بسبب التهرب الضريبي",
        ru: "Лишение лицензии за неуплату налогов",
        en: "Revocation of trade license due to tax evasion"
      }
    }
  }
};
