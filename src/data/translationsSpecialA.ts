/**
 * @file translationsSpecialA.ts
 * Übersetzungsmodul für Spezialmodi (Teil A: Interaktiver Video-Trainer & Streak-Challenge-Modus)
 * § 34a GewO Sachkundeprüfung.
 *
 * Sprachen:
 * - Farsi (fa)
 * - Arabisch (ar)
 * - Russisch (ru)
 * - Englisch (en)
 */

import { TranslationBlockItem } from './translationsPart1.ts';

export const TRANSLATIONS_SPECIAL_A: Record<string, TranslationBlockItem> = {
  // =========================================================================
  // INTERAKTIVER VIDEO-TRAINER (§ 34a GewO - Club Aura Einlasskontrolle)
  // =========================================================================

  // Szene 1: Erstkontakt & Begrüßung
  "video_scene_1": {
    frage: {
      fa: "یک مهمان به ورودی کلوب نزدیک می‌شود. طبق ماده 34a قانون تجارت (GewO) چگونه رفتار حرفه‌ای خواهید داشت؟",
      ar: "يقترب أحد الضيوف من مدخل النادي. كيف تتصرف باحترافية وفقاً للمادة 34a من قانون تنظيم الحرف (GewO)؟",
      ru: "Гость подходит ко входу в клуб. Как профессионально вести себя в соответствии с § 34a GewO?",
      en: "A guest approaches the club entrance. How do you act professionally in accordance with § 34a GewO?"
    },
    loesung: {
      fa: "سلام گرم و درخواست مؤدبانه برای ارائه کارت شناسایی عکس‌دار.",
      ar: "الترحيب بلطف وطلب بطاقة الهوية التي تحتوي على صورة بأدب.",
      ru: "Дружелюбно поприветствовать и вежливо попросить предъявить удостоверение личности с фотографией.",
      en: "Greet friendly and politely ask to present a photo ID."
    },
    optionen: {
      "0": {
        fa: "سلام گرم و درخواست مؤدبانه برای ارائه کارت شناسایی عکس‌دار.",
        ar: "الترحيب بلطف وطلب بطاقة الهوية التي تحتوي على صورة بأدب.",
        ru: "Дружелюбно поприветствовать и вежливо попросить предъявить удостоверение личности с фотографией.",
        en: "Greet friendly and politely ask to present a photo ID."
      },
      "1": {
        fa: "خیره شدن پرخاشگرانه به مهمان، نمایش قدرت و ارعاب بی‌دلیل.",
        ar: "التحديق بعدوانية في الضيف، واستعراض القوة والترهيب دون سبب.",
        ru: "Агрессивно смотреть на гостя, демонстрировать власть и беспричинно запугивать.",
        en: "Stare aggressively at the guest, demonstrate power and intimidate without reason."
      },
      "1_correct": {
        fa: "سلام گرم و درخواست مؤدبانه برای ارائه کارت شناسایی عکس‌دار.",
        ar: "الترحيب بلطف وطلب بطاقة الهوية التي تحتوي على صورة بأدب.",
        ru: "Дружелюбно поприветствовать и вежливо попросить предъявить удостоверение личности с фотографией.",
        en: "Greet friendly and politely ask to present a photo ID."
      },
      "1_wrong": {
        fa: "خیره شدن پرخاشگرانه به مهمان، نمایش قدرت و ارعاب بی‌دلیل.",
        ar: "التحديق بعدوانية في الضيف، واستعراض القوة والترهيب دون سبب.",
        ru: "Агрессивно смотреть на гостя, демонстрировать власть и беспричинно запугивать.",
        en: "Stare aggressively at the guest, demonstrate power and intimidate without reason."
      }
    }
  },

  // Szene 2: Ausweiskontrolle
  "video_scene_2": {
    frage: {
      fa: "مهمان مدرک شناسایی را تحویل می‌دهد. اکنون چگونه با رعایت قانون عمل می‌کنید؟",
      ar: "يسلمك الضيف الوثيقة. كيف تتصرف الآن بشكل سليم قانونياً؟",
      ru: "Гость передает вам документ. Как вы поступите юридически грамотно?",
      en: "The guest hands you the document. How do you act legally compliant now?"
    },
    loesung: {
      fa: "بررسی اصالت و سن قانونی، بازگرداندن مؤدبانه و درخواست بازرسی کیف.",
      ar: "التحقق من صحة الهوية وبلوغ السن القانوني، وإعادتها بأدب وطلب تفتيش الحقيبة.",
      ru: "Проверить подлинность и совершеннолетие, вежливо вернуть и попросить о проверке сумки.",
      en: "Check ID for authenticity and age of majority, return politely and ask for bag inspection."
    },
    optionen: {
      "0": {
        fa: "بررسی اصالت و سن قانونی، بازگرداندن مؤدبانه و درخواست بازرسی کیف.",
        ar: "التحقق من صحة الهوية وبلوغ السن القانوني، وإعادتها بأدب وطلب تفتيش الحقيبة.",
        ru: "Проверить подлинность и совершеннолетие, вежливо вернуть и попросить о проверке сумки.",
        en: "Check ID for authenticity and age of majority, return politely and ask for bag inspection."
      },
      "1": {
        fa: "نادیده گرفتن مدرک بدون بازرسی دقیق و ورود فوری شخص.",
        ar: "تجاهل الوثيقة دون فحص بصري دقيق والسماح للشخص بالدخول فوراً.",
        ru: "Проигнорировать документ без внимательной визуальной проверки и сразу пропустить человека.",
        en: "Ignore the document without close visual inspection and wave the person through immediately."
      },
      "2_correct": {
        fa: "بررسی اصالت و سن قانونی، بازگرداندن مؤدبانه و درخواست بازرسی کیف.",
        ar: "التحقق من صحة الهوية وبلوغ السن القانوني، وإعادتها بأدب وطلب تفتيش الحقيبة.",
        ru: "Проверить подлинность и совершеннолетие, вежливо вернуть и попросить о проверке сумки.",
        en: "Check ID for authenticity and age of majority, return politely and ask for bag inspection."
      },
      "2_wrong": {
        fa: "نادیده گرفتن مدرک بدون بازرسی دقیق و ورود فوری شخص.",
        ar: "تجاهل الوثيقة دون فحص بصري دقيق والسماح للشخص بالدخول فوراً.",
        ru: "Проигнорировать документ без внимательной визуальной проверки и сразу пропустить человека.",
        en: "Ignore the document without close visual inspection and wave the person through immediately."
      }
    }
  },

  // Szene 3: Taschenkontrolle
  "video_scene_3": {
    frage: {
      fa: "در چارچوب حق مالکیت و ورود به محل (§ 903 BGB) قرار است کیف بازرسی شود. چگونه عمل می‌کنید؟",
      ar: "في إطار حق صاحب المكان/المنشأة (§ 903 BGB) يجب إجراء تفتيش للحقائب. كيف تتصرف؟",
      ru: "В рамках права распоряжения имуществом (§ 903 BGB) необходимо провести проверку сумки. Как вы поступите?",
      en: "As part of the domiciliary rights (§ 903 BGB), a bag check is to be conducted. How do you proceed?"
    },
    loesung: {
      fa: "درخواست از مهمان تا شخصاً کیف را باز کرده و محتویات را نشان دهد.",
      ar: "طلب فتح الحقيبة من الضيف بنفسه وعرض محتوياتها.",
      ru: "Попросить гостя самостоятельно открыть сумку и показать содержимое.",
      en: "Ask the guest to open the bag themselves and show the contents."
    },
    optionen: {
      "0": {
        fa: "درخواست از مهمان تا شخصاً کیف را باز کرده و محتویات را نشان دهد.",
        ar: "طلب فتح الحقيبة من الضيف بنفسه وعرض محتوياتها.",
        ru: "Попросить гостя самостоятельно открыть сумку и показать содержимое.",
        en: "Ask the guest to open the bag themselves and show the contents."
      },
      "1": {
        fa: "دست بردن خودسرانه و بدون رضایت مستقیماً به داخل کیف مهمان.",
        ar: "الوصول المباشر إلى حقيبة الضيف بشكل تعسفي وبدون موافقته.",
        ru: "Самовольно и без согласия залезть руками прямо в сумку гостя.",
        en: "Arbitrarily and without consent reach directly into the guest's bag."
      },
      "3_correct": {
        fa: "درخواست از مهمان تا شخصاً کیف را باز کرده و محتویات را نشان دهد.",
        ar: "طلب فتح الحقيبة من الضيف بنفسه وعرض محتوياتها.",
        ru: "Попросить гостя самостоятельно открыть сумку и показать содержимое.",
        en: "Ask the guest to open the bag themselves and show the contents."
      },
      "3_wrong": {
        fa: "دست بردن خودسرانه و بدون رضایت مستقیماً به داخل کیف مهمان.",
        ar: "الوصول المباشر إلى حقيبة الضيف بشكل تعسفي وبدون موافقته.",
        ru: "Самовольно и без согласия залезть руками прямо в сумку гостя.",
        en: "Arbitrarily and without consent reach directly into the guest's bag."
      }
    }
  },

  // Szene 4: Einlassentscheidung
  "video_scene_4": {
    frage: {
      fa: "تمام بررسی‌ها بدون نقص انجام شد. گام نهایی چیست؟",
      ar: "تمت جميع الفحوصات دون أي ملاحظات أو مشاكل. ما هي الخطوة النهائية؟",
      ru: "Все проверки прошли без замечаний. Каков финальный шаг?",
      en: "All checks were completed without objection. What is the final step?"
    },
    loesung: {
      fa: "اجازه ورود دادن و آرزوی شبی خوب و امن برای مهمان.",
      ar: "منح إذن الدخول وتمني أمسية ممتعة وآمنة للضيف.",
      ru: "Разрешить вход и пожелать гостю приятного и безопасного вечера.",
      en: "Grant entry and wish the guest a pleasant and safe evening."
    },
    optionen: {
      "0": {
        fa: "اجازه ورود دادن و آرزوی شبی خوب و امن برای مهمان.",
        ar: "منح إذن الدخول وتمني أمسية ممتعة وآمنة للضيف.",
        ru: "Разрешить вход и пожелать гостю приятного и безопасного вечера.",
        en: "Grant entry and wish the guest a pleasant and safe evening."
      },
      "1": {
        fa: "رد کردن بی‌دلیل مهمان و تمسخر او در مقابل سایر مهمانان.",
        ar: "رفض دخول الضيف بدون سبب والسخرية منه أمام الضيوف الآخرين.",
        ru: "Без причины отказать гостю во входе и насмехаться над ним перед другими гостями.",
        en: "Turn away the guest without reason and make fun of them in front of other guests."
      },
      "4_correct": {
        fa: "اجازه ورود دادن و آرزوی شبی خوب و امن برای مهمان.",
        ar: "منح إذن الدخول وتمني أمسية ممتعة وآمنة للضيف.",
        ru: "Разрешить вход и пожелать гостю приятного и безопасного вечера.",
        en: "Grant entry and wish the guest a pleasant and safe evening."
      },
      "4_wrong": {
        fa: "رد کردن بی‌دلیل مهمان و تمسخر او در مقابل سایر مهمانان.",
        ar: "رفض دخول الضيف بدون سبب والسخرية منه أمام الضيوف الآخرين.",
        ru: "Без причины отказать гостю во входе и насмехаться над ним перед другими гостями.",
        en: "Turn away the guest without reason and make fun of them in front of other guests."
      }
    }
  },

  // =========================================================================
  // STREAK CHALLENGE MODUS (Alle 20 DIHK-Fragen)
  // =========================================================================

  // Streak Frage 1
  "streak_1": {
    frage: {
      fa: "نیروهای امنیتی خصوصی در اماکن عمومی چه حقوقی دارند؟",
      ar: "ما هي الحقوق التي يمتلكها موظفو الأمن الخاص في الأماكن العامة؟",
      ru: "Какими правами обладают частные сотрудники охраны в общественных местах?",
      en: "What rights do private security personnel possess in public spaces?"
    },
    loesung: {
      fa: "حقوق عمومی همه شهروندان (Jedermannsrechte)",
      ar: "حقوق عامة الناس (Jedermannsrechte)",
      ru: "Права каждого гражданина (Jedermannsrechte)",
      en: "Citizen's rights / Everyone's rights (Jedermannsrechte)"
    },
    optionen: {
      "0": {
        fa: "حقوق عمومی شهروندان (Jedermannsrechte)",
        ar: "حقوق عامة الناس (Jedermannsrechte)",
        ru: "Права каждого гражданина (Jedermannsrechte)",
        en: "Citizen's rights (Jedermannsrechte)"
      },
      "1": {
        fa: "حقوق حاکمیتی دولتی (Hoheitsrechte)",
        ar: "الحقوق السيادية / السلطوية (Hoheitsrechte)",
        ru: "Суверенные государственные права (Hoheitsrechte)",
        en: "Sovereign rights (Hoheitsrechte)"
      },
      "2": {
        fa: "اختیارات پلیسی (Polizeibefugnisse)",
        ar: "صلاحيات الشرطة (Polizeibefugnisse)",
        ru: "Полномочия полиции (Polizeibefugnisse)",
        en: "Police powers (Polizeibefugnisse)"
      },
      "3": {
        fa: "اختیارات قضایی (Richterliche Gewalt)",
        ar: "السلطة القضائية (Richterliche Gewalt)",
        ru: "Судебная власть (Richterliche Gewalt)",
        en: "Judicial authority (Richterliche Gewalt)"
      }
    }
  },

  // Streak Frage 2
  "streak_2": {
    frage: {
      fa: "برای کدام فعالیت، آزمون تخصص ماده 34a قانون تجارت (GewO) اجباری است؟",
      ar: "لأي نشاط يُعتبر امتحان الكفاءة والخبرة § 34a إلزامياً بشكل قاطع؟",
      ru: "Для какой деятельности сдача экзамена на компетентность § 34a GewO обязательна?",
      en: "For which activity is the § 34a expert knowledge examination mandatory?"
    },
    loesung: {
      fa: "گشت شهری در پارک (Citystreife)",
      ar: "دوريات المدينة في الحدائق العامة (Citystreife)",
      ru: "Городское патрулирование в парке (Citystreife)",
      en: "City patrol in public parks (Citystreife)"
    },
    optionen: {
      "0": {
        fa: "گشت شهری در پارک",
        ar: "دوريات المدينة في الحدائق العامة",
        ru: "Городское патрулирование в парке",
        en: "City patrol in public parks"
      },
      "1": {
        fa: "خدمات ساده نگهبانی و دربانی",
        ar: "خدمة الحراسة والبوابات البسيطة",
        ru: "Простая служба на проходной / вахтер",
        en: "Simple gatekeeper / doorman service"
      },
      "2": {
        fa: "حراست صرف کارگاه‌های ساختمانی",
        ar: "حراسة مواقع البناء البحتة",
        ru: "Охрана исключительно стройплощадок",
        en: "Pure construction site guarding"
      },
      "3": {
        fa: "نصب سیستم‌های دزدگیر",
        ar: "تركيب أنظمة الإنذار",
        ru: "Монтаж сигнализаций",
        en: "Alarm system installation"
      }
    }
  },

  // Streak Frage 3
  "streak_3": {
    frage: {
      fa: "پرسنل نگهبانی هنگام خدمت همواره چه مدرکی را باید به همراه داشته باشند؟",
      ar: "ما هي الوثيقة أو البطاقة التي يجب على موظف الحراسة حملها دائماً أثناء الخدمة؟",
      ru: "Какое удостоверение охранник всегда обязан иметь при себе на службе?",
      en: "Which certificate/ID must security personnel always carry while on duty?"
    },
    loesung: {
      fa: "کارت شناسایی خدمت (Dienstausweis)",
      ar: "بطاقة الهوية المهنية / بطاقة الخدمة (Dienstausweis)",
      ru: "Служебное удостоверение (Dienstausweis)",
      en: "Service ID card (Dienstausweis)"
    },
    optionen: {
      "0": {
        fa: "کارت شناسایی خدمت (Dienstausweis)",
        ar: "بطاقة الخدمة (Dienstausweis)",
        ru: "Служебное удостоверение (Dienstausweis)",
        en: "Service ID card (Dienstausweis)"
      },
      "1": {
        fa: "ثبت جواز کسب (Gewerbeanmeldung)",
        ar: "تسجيل الترخيص التجاري (Gewerbeanmeldung)",
        ru: "Регистрация предпринимательской деятельности",
        en: "Trade/business registration (Gewerbeanmeldung)"
      },
      "2": {
        fa: "قرارداد کاری",
        ar: "عقد العمل",
        ru: "Трудовой договор",
        en: "Employment contract"
      },
      "3": {
        fa: "گواهی عدم سوء‌پیشینه",
        ar: "شهادة السجل الجنائي / حسن السيرة",
        ru: "Справка о несудимости (Führungszeugnis)",
        en: "Certificate of good conduct (Führungszeugnis)"
      }
    }
  },

  // Streak Frage 4
  "streak_4": {
    frage: {
      fa: "آیا یک شرکت نگهبانی مجاز است داده‌های شخصی را به صورت نامحدود ذخیره کند؟",
      ar: "هل يحق لشركة الحراسة تخزين البيانات الشخصية لفترة غير محدودة؟",
      ru: "Имеет ли право служба охраны хранить персональные данные бессрочно?",
      en: "May a security service store personal data indefinitely?"
    },
    loesung: {
      fa: "خیر، هرگز",
      ar: "لا، أبداً",
      ru: "Нет, ни в коем случае",
      en: "No, never"
    },
    optionen: {
      "0": {
        fa: "خیر، هرگز",
        ar: "لا، أبداً",
        ru: "Нет, ни в коем случае",
        en: "No, never"
      },
      "1": {
        fa: "بله، همیشه",
        ar: "نعم، دائماً",
        ru: "Да, всегда",
        en: "Yes, always"
      },
      "2": {
        fa: "فقط با اجازه رئیس شرکت",
        ar: "فقط بإذن المدير",
        ru: "Только с разрешения начальника",
        en: "Only with the boss's permission"
      },
      "3": {
        fa: "فقط در مورد مشتریان",
        ar: "فقط للعملاء",
        ru: "Только для клиентов",
        en: "Only for clients"
      }
    }
  },

  // Streak Frage 5
  "streak_5": {
    frage: {
      fa: "در نظارت تصویری (دوربین مداربسته) در اماکن عمومی، وجود چه چیزی الزامی است؟",
      ar: "ما الذي يجب أن يتوفر بالضرورة عند المراقبة بالفيديو في الأماکن العامة؟",
      ru: "Что обязательно должно присутствовать при видеонаблюдении в общедоступных местах?",
      en: "What must strictly be present for video surveillance in public spaces?"
    },
    loesung: {
      fa: "تابلوی اطلاع‌رسانی (Hinweisschild)",
      ar: "لوحة إرشادية / لافتة تحذيرية (Hinweisschild)",
      ru: "Информационная табличка / знак (Hinweisschild)",
      en: "Notice sign / Warning sign (Hinweisschild)"
    },
    optionen: {
      "0": {
        fa: "تابلوی اطلاع‌رسانی و هشدار",
        ar: "لوحة إرشادية / لافتة تحذيرية",
        ru: "Информационная табличка",
        en: "Warning / Notice sign"
      },
      "1": {
        fa: "مجوز رسمی پلیس",
        ar: "موافقة الشرطة",
        ru: "Разрешение полиции",
        en: "Police clearance"
      },
      "2": {
        fa: "آژیر خطر",
        ar: "صفارة إنذار",
        ru: "Сирена",
        en: "Siren"
      },
      "3": {
        fa: "چراغ گردان آبی",
        ar: "ضوء وامض أزرق",
        ru: "Проблесковый маячок",
        en: "Flashing blue light"
      }
    }
  },

  // Streak Frage 6
  "streak_6": {
    frage: {
      fa: "چه کسی تسلط و حق قانونی کامل (rechtliche Herrschaft) بر یک شیء را دارد؟",
      ar: "من يملك السيطرة القانونية والحق القانوني الكامل على الشيء؟",
      ru: "Кто обладает юридическим господством (правом собственности) над вещью?",
      en: "Who has the legal ownership / dominance over a thing?"
    },
    loesung: {
      fa: "مالک (Der Eigentümer)",
      ar: "المالك (Der Eigentümer)",
      ru: "Собственник / Владелец (Der Eigentümer)",
      en: "The Owner (Der Eigentümer)"
    },
    optionen: {
      "0": {
        fa: "مالک (Eigentümer)",
        ar: "المالك (Eigentümer)",
        ru: "Собственник (Eigentümer)",
        en: "The owner (Eigentümer)"
      },
      "1": {
        fa: "خادم تصرف / کارگزار متصرف (Besitzdiener)",
        ar: "خادم الحيازة (Besitzdiener)",
        ru: "Слуга владения (Besitzdiener)",
        en: "Possession servant (Besitzdiener)"
      },
      "2": {
        fa: "امانت‌گیرنده (Entleiher)",
        ar: "المستعير (Entleiher)",
        ru: "Заемщик / Ссудополучатель",
        en: "The borrower (Entleiher)"
      },
      "3": {
        fa: "یابنده شیء (Finder)",
        ar: "العاثر على الشيء / الواجد",
        ru: "Нашедший вещь (Finder)",
        en: "The finder (Finder)"
      }
    }
  },

  // Streak Frage 7
  "streak_7": {
    frage: {
      fa: "نیروی امنیتی در کنترل ورودی از نظر حقوقی در چه جایگاهی است؟",
      ar: "ما هي الصفة القانونية لموظف الأمن عند بوابة الدخول؟",
      ru: "Кем юридически является сотрудник службы безопасности на контроле входа?",
      en: "What is the security officer's legal status at the entrance control?"
    },
    loesung: {
      fa: "خادم تصرف (Besitzdiener nach § 855 BGB)",
      ar: "خادم الحيازة (Besitzdiener)",
      ru: "Слуга владения (Besitzdiener по § 855 BGB)",
      en: "Possession servant (Besitzdiener under § 855 BGB)"
    },
    optionen: {
      "0": {
        fa: "خادم تصرف (Besitzdiener)",
        ar: "خادم الحيازة (Besitzdiener)",
        ru: "Слуга владения (Besitzdiener)",
        en: "Possession servant (Besitzdiener)"
      },
      "1": {
        fa: "مالک (Eigentümer)",
        ar: "المالك (Eigentümer)",
        ru: "Собственник (Eigentümer)",
        en: "Owner (Eigentümer)"
      },
      "2": {
        fa: "مقام رسمی دولتی (Amtsträger)",
        ar: "موظف رسمي / صاحب منصب عام",
        ru: "Должностное лицо (Amtsträger)",
        en: "Public official (Amtsträger)"
      },
      "3": {
        fa: "نماینده مراجع دولتی (Behördenvertreter)",
        ar: "ممثل السلطات الحكومية",
        ru: "Представитель органа власти",
        en: "Authority representative"
      }
    }
  },

  // Streak Frage 8
  "streak_8": {
    frage: {
      fa: "کدام حق اجازه بازپس‌گیری فوری مال مسروقه در حین ارتکاب جرم را می‌دهد؟",
      ar: "أي حق يسمح باستعادة المسروقات فوراً عند ضبط الجاني متلبساً بالجرم؟",
      ru: "Какое право разрешает немедленное изъятие украденного имущества на месте преступления?",
      en: "Which right allows the immediate recovery of stolen goods caught in the act?"
    },
    loesung: {
      fa: "اعاده تصرف (Besitzkehr nach § 859 Abs. 2 BGB)",
      ar: "استرداد الحيازة بالقوة فوراً (Besitzkehr)",
      ru: "Возврат владения по горячим следам (Besitzkehr)",
      en: "Recovery of possession (Besitzkehr under § 859 (2) BGB)"
    },
    optionen: {
      "0": {
        fa: "اعاده تصرف (Besitzkehr)",
        ar: "استرداد الحيازة بالقوة (Besitzkehr)",
        ru: "Возврат владения по горячим следам (Besitzkehr)",
        en: "Recovery of possession (Besitzkehr)"
      },
      "1": {
        fa: "دفاع از تصرف (Besitzwehr)",
        ar: "الدفاع عن الحيازة (Besitzwehr)",
        ru: "Защита владения (Besitzwehr)",
        en: "Defense of possession (Besitzwehr)"
      },
      "2": {
        fa: "حق مالکیت بر مکان (Hausrecht)",
        ar: "حق صاحب المنشأة (Hausrecht)",
        ru: "Право распоряжения помещением (Hausrecht)",
        en: "Domiciliary right (Hausrecht)"
      },
      "3": {
        fa: "وضعیت اضطراری (Notstand)",
        ar: "حالة الضرورة / الطوارئ (Notstand)",
        ru: "Крайняя необходимость (Notstand)",
        en: "State of emergency (Notstand)"
      }
    }
  },

  // Streak Frage 9
  "streak_9": {
    frage: {
      fa: "در برابر چه حملاتی می‌توان دفاع مشروع (Notwehr) انجام داد؟",
      ar: "ضد أي اعتداءات يجوز ممارسة الدفاع الشرعي عن النفس (Notwehr)؟",
      ru: "Против каких посягательств разрешена необходимая оборона (Notwehr)?",
      en: "Against which attacks may self-defense (Notwehr) be exercised?"
    },
    loesung: {
      fa: "حملات فعلی و غیرقانونی (Gegenwärtige & rechtswidrige)",
      ar: "الاعتداءات الحالية وغير القانونية (Gegenwärtige & rechtswidrige)",
      ru: "Настоящие (наличные) и противоправные нападения",
      en: "Current & unlawful attacks (Gegenwärtige & rechtswidrige)"
    },
    optionen: {
      "0": {
        fa: "حملات فعلی و غیرقانونی",
        ar: "الاعتداءات الحالية وغير القانونية",
        ru: "Настоящие (наличные) и противоправные",
        en: "Current & unlawful attacks"
      },
      "1": {
        fa: "اقدامات و اعمال گذشته",
        ar: "الأفعال السابقة المنتهية",
        ru: "Прошедшие действия",
        en: "Past acts"
      },
      "2": {
        fa: "اقدامات تهدیدآمیز در آینده دور",
        ar: "التهديدات المستقبلية البعيدة",
        ru: "Будущие возможные угрозы",
        en: "Future threatening acts"
      },
      "3": {
        fa: "اقدامات قانونی مراجع",
        ar: "الإجراءات القانونية المشروعة",
        ru: "Законные меры органов",
        en: "Lawful measures"
      }
    }
  },

  // Streak Frage 10
  "streak_10": {
    frage: {
      fa: "طبق ماده 127 بند 1 قانون آیین دادرسی کیفری (StPO)، چه کسی مجاز به بازداشت موقت است؟",
      ar: "وفقاً للمادة 127 الفقرة 1 من قانون الإجراءات الجنائية (StPO)، من يحق له التوقيف المؤقت للشخص؟",
      ru: "Кто имеет право временно задержать лицо по § 127 абз. 1 УПК Германии (StPO)?",
      en: "Who may provisionally apprehend a person under § 127 (1) StPO?"
    },
    loesung: {
      fa: "هر فرد و شهروندی (Jedermann)",
      ar: "أي شخص / عامة الناس (Jedermann)",
      ru: "Каждый гражданин (Jedermann)",
      en: "Anyone / Every citizen (Jedermann)"
    },
    optionen: {
      "0": {
        fa: "هر فردی (Jedermann)",
        ar: "أي شخص (Jedermann)",
        ru: "Каждый человек (Jedermann)",
        en: "Anyone (Jedermann)"
      },
      "1": {
        fa: "فقط پلیس",
        ar: "الشرطة فقط",
        ru: "Только полиция",
        en: "Only the police"
      },
      "2": {
        fa: "فقط کارآگاهان خصوصی",
        ar: "المحققون فقط",
        ru: "Только детективы",
        en: "Only detectives"
      },
      "3": {
        fa: "فقط قاضی دادگاه",
        ar: "القاضي فقط",
        ru: "Только судья",
        en: "Only the judge"
      }
    }
  },

  // Streak Frage 11
  "streak_11": {
    frage: {
      fa: "در صورت نقض و نادیده گرفتن ممنوعیت ورود (Hausverbot)، چه جرمی واقع می‌شود؟",
      ar: "ما هو الجرم القانوني المرتكب عند انتهاك حظر الدخول إلى المكان (Hausverbot)؟",
      ru: "Какой состав преступления имеет место при нарушении запрета на вход (Hausverbot)?",
      en: "What offense is committed when a ban from the premises (Hausverbot) is violated?"
    },
    loesung: {
      fa: "ورود غیرمجاز به حریم خصوصی/ملک (Hausfriedensbruch nach § 123 StGB)",
      ar: "انتهاك حرمة المكان / التعدي على ملك الغير (Hausfriedensbruch)",
      ru: "Нарушение неприкосновенности жилища/помещения (§ 123 StGB)",
      en: "Trespassing / Breach of domestic peace (Hausfriedensbruch under § 123 StGB)"
    },
    optionen: {
      "0": {
        fa: "ورود غیرمجاز به ملک (Hausfriedensbruch)",
        ar: "انتهاك حرمة المكان (Hausfriedensbruch)",
        ru: "Нарушение неприкосновенности владения",
        en: "Trespassing (Hausfriedensbruch)"
      },
      "1": {
        fa: "اجبار و تهدید (Nötigung)",
        ar: "الإكراه / الإجبار (Nötigung)",
        ru: "Принуждение (Nötigung)",
        en: "Coercion (Nötigung)"
      },
      "2": {
        fa: "خیانت در امانت / تصاحب غیرقانونی (Unterschlagung)",
        ar: "خيانة الأمانة / الاختلاس",
        ru: "Присвоение имущества (Unterschlagung)",
        en: "Embezzlement (Unterschlagung)"
      },
      "3": {
        fa: "سرقت مقرون به آزار و زورگیری (Raub)",
        ar: "السطو والسرقة بالإكراه (Raub)",
        ru: "Грабеж / Разбой (Raub)",
        en: "Robbery (Raub)"
      }
    }
  },

  // Streak Frage 12
  "streak_12": {
    frage: {
      fa: "چه زمانی استفاده از سلاح گرم در خدمات نگهبانی به عنوان دفاع مشروع مجاز است؟",
      ar: "متى يجوز استخدام السلاح الناري في خدمة الحراسة كدفاع شرعي عن النفس؟",
      ru: "Когда применение огнестрельного оружия на службе охраны допустимо как необходимая оборона?",
      en: "When may the use of firearms in security services occur as self-defense?"
    },
    loesung: {
      fa: "به عنوان کاملاً آخرین راهکار ممکن (Als absolut letztes Mittel)",
      ar: "كحل أخير للغاية ومطلق (Als absolut letztes Mittel)",
      ru: "Как абсолютно крайняя мера (Als absolut letztes Mittel)",
      en: "As an absolute last resort (Als absolut letztes Mittel)"
    },
    optionen: {
      "0": {
        fa: "به عنوان کاملاً آخرین راهکار ممکن",
        ar: "كحل أخير للغاية ومطلق",
        ru: "Как абсолютно крайняя мера",
        en: "As an absolute last resort"
      },
      "1": {
        fa: "در هرگونه آسیب به اموال و تخریب",
        ar: "عند حدوث أي إتلاف للممتلكات",
        ru: "При любом повреждении имущества",
        en: "In any property damage"
      },
      "2": {
        fa: "برای جلوگیری از فرار سارق",
        ar: "لمنع فرار الجاني",
        ru: "Для предотвращения побега",
        en: "To prevent escape"
      },
      "3": {
        fa: "با دستور شفاهی سرپرست",
        ar: "بناءً على أمر شفهي فقط",
        ru: "По устному приказу",
        en: "On verbal order"
      }
    }
  },

  // Streak Frage 13
  "streak_13": {
    frage: {
      fa: "برای حمل اسپری فلفل دارای برچسب دفاع در برابر حیوانات چه مجوزی لازم است؟",
      ar: "ما هو الترخيص المطلوب لحمل رذاذ الفلفل الذي يحمل علامة مكافحة الحيوانات؟",
      ru: "Какое разрешение требуется для ношения перцового баллончика с маркировкой защиты от животных?",
      en: "Which license is required to carry pepper spray labeled for animal defense?"
    },
    loesung: {
      fa: "هیچ مجوز سلاحی لازم نیست (Kein Waffenschein nötig)",
      ar: "لا يلزم أي ترخيص حمل سلاح (Kein Waffenschein nötig)",
      ru: "Разрешение на оружие не требуется (Kein Waffenschein nötig)",
      en: "No firearms license required (Kein Waffenschein nötig)"
    },
    optionen: {
      "0": {
        fa: "هیچ مجوزی لازم نیست",
        ar: "لا يلزم أي ترخيص",
        ru: "Разрешение не требуется",
        en: "No license required"
      },
      "1": {
        fa: "مجوز کوچک حمل سلاح (Kleiner Waffenschein)",
        ar: "ترخيص السلاح الصغير (Kleiner Waffenschein)",
        ru: "Малое разрешение на оружие",
        en: "Small firearms license (Kleiner Waffenschein)"
      },
      "2": {
        fa: "مجوز بزرگ حمل سلاح (Großer Waffenschein)",
        ar: "ترخيص السلاح الكبير (Großer Waffenschein)",
        ru: "Большое разрешение на оружие",
        en: "Standard firearms license (Großer Waffenschein)"
      },
      "3": {
        fa: "کارت مالکیت سلاح (Waffenbesitzkarte)",
        ar: "بطاقة ملكية السلاح (WBK)",
        ru: "Карта владельца оружия (WBK)",
        en: "Firearms ownership card (WBK)"
      }
    }
  },

  // Streak Frage 14
  "streak_14": {
    frage: {
      fa: "کدام مقررات پیشگیری از حوادث (UVV) خدمات نگهبانی و حراست را تنظیم می‌کند؟",
      ar: "أي لائحة لمنع الحوادث (UVV) تنظم خدمات الحراسة والأمن؟",
      ru: "Какое предписание по технике безопасности регулирует службу охраны?",
      en: "Which accident prevention regulation governs guard and security services?"
    },
    loesung: {
      fa: "مقررات DGUV شماره 23 (قبلاً BGV C7)",
      ar: "لائحة DGUV رقم 23 (سابقاً BGV C7)",
      ru: "Предписание DGUV 23 (ранее BGV C7)",
      en: "DGUV Regulation 23 (formerly BGV C7)"
    },
    optionen: {
      "0": {
        fa: "مقررات DGUV شماره 23",
        ar: "لائحة DGUV رقم 23",
        ru: "Предписание DGUV 23",
        en: "DGUV Regulation 23"
      },
      "1": {
        fa: "مقررات DGUV شماره 1",
        ar: "لائحة DGUV رقم 1",
        ru: "Предписание DGUV 1",
        en: "DGUV Regulation 1"
      },
      "2": {
        fa: "ماده 1 آیین‌نامه راهنمایی و رانندگی (StVO)",
        ar: "المادة 1 من قانون المرور (StVO)",
        ru: "§ 1 Правил дорожного движения (StVO)",
        en: "StVO § 1 (Traffic Regulations)"
      },
      "3": {
        fa: "ماده 34a قانون تجارت (GewO)",
        ar: "المادة 34a من قانون الحرف (GewO)",
        ru: "§ 34a Закона о промысле (GewO)",
        en: "GewO § 34a (Trade Regulation)"
      }
    }
  },

  // Streak Frage 15
  "streak_15": {
    frage: {
      fa: "در صورت خطر جانی در خدمات امنیتی، همواره چه اصلی حاکم است؟",
      ar: "ما هو المبدأ الأساسي الدائم عند وجود خطر على الحياة في خدمة الأمن؟",
      ru: "Какое правило всегда действует при угрозе собственной жизни в службе охраны?",
      en: "Which principle always applies in security services when your own life is in danger?"
    },
    loesung: {
      fa: "حفظ جان و ایمنی شخصی در اولویت است (Eigensicherung geht vor)",
      ar: "الحماية الذاتية والسلامة الشخصية تأتي أولاً (Eigensicherung geht vor)",
      ru: "Собственная безопасность превыше всего (Eigensicherung geht vor)",
      en: "Self-protection takes priority (Eigensicherung geht vor)"
    },
    optionen: {
      "0": {
        fa: "حفظ جان و ایمنی شخصی در اولویت است",
        ar: "الحماية الذاتية والسلامة الشخصية تأتي أولاً",
        ru: "Собственная безопасность превыше всего",
        en: "Self-protection takes priority"
      },
      "1": {
        fa: "محافظت از اشیاء و اموال در اولویت است",
        ar: "حماية الممتلكات تأتي أولاً",
        ru: "Защита имущества важнее",
        en: "Protection of property comes first"
      },
      "2": {
        fa: "مداخله در هر شرایطی بدون توجه به خطر",
        ar: "التدخل دائماً بغض النظر عن المخاطر",
        ru: "Всегда вмешиваться невзирая ни на что",
        en: "Always intervene under all circumstances"
      },
      "3": {
        fa: "انجام مأموریت به هر قیمتی",
        ar: "تنفيذ المهمة دون مراعاة المخاطر",
        ru: "Выполнение задания без оглядки на риск",
        en: "Execute mission regardless of danger"
      }
    }
  },

  // Streak Frage 16
  "streak_16": {
    frage: {
      fa: "کدام مورد جزو تجهیزات فنی غیرعامل (غیرفعال) ایمنی یک ساختمان است؟",
      ar: "ما الذي ينتمي إلى تقنيات الأمان السلبية (غير الفعالة) في تأمين المباني؟",
      ru: "Что относится к пассивным техническим средствам безопасности объекта?",
      en: "What belongs to the passive security technology of a facility?"
    },
    loesung: {
      fa: "فنس‌ها و نرده‌های فلزی (Zäune und Gitter)",
      ar: "الأسوار والشبكات الحديدية (Zäune und Gitter)",
      ru: "Заборы и решетки (Zäune und Gitter)",
      en: "Fences and barriers / grilles (Zäune und Gitter)"
    },
    optionen: {
      "0": {
        fa: "فنس‌ها و نرده‌های حفاظتی",
        ar: "الأسوار والشباك الحديدية",
        ru: "Заборы и защитные решетки",
        en: "Fences and grilles"
      },
      "1": {
        fa: "سگ نگهبان",
        ar: "كلب الحراسة",
        ru: "Сторожевая собака",
        en: "Guard dog"
      },
      "2": {
        fa: "گشت پلیس",
        ar: "دورية الشرطة",
        ru: "Полицейский патруль",
        en: "Police patrol"
      },
      "3": {
        fa: "نیروی نگهبان انسانی",
        ar: "موظف الأمن",
        ru: "Сотрудник охраны",
        en: "Security officer"
      }
    }
  },

  // Streak Frage 17
  "streak_17": {
    frage: {
      fa: "کلاس آتش‌سوزی مربوط به مایعات اشتعال‌پذیر مانند بنزین کدام است؟",
      ar: "ما هي فئة الحريق التي تشمل السوائل القابلة للاشتعال مثل البنزين؟",
      ru: "Какой класс пожара включает горючие жидкости, такие как бензин?",
      en: "Which fire class covers flammable liquids such as gasoline?"
    },
    loesung: {
      fa: "کلاس حریق B (مایعات)",
      ar: "فئة الحريق B (السوائل)",
      ru: "Класс пожара B (жидкости)",
      en: "Fire Class B (liquids)"
    },
    optionen: {
      "0": {
        fa: "کلاس حریق B",
        ar: "فئة الحريق B",
        ru: "Класс пожара B",
        en: "Fire class B"
      },
      "1": {
        fa: "کلاس حریق A",
        ar: "فئة الحريق A",
        ru: "Класс пожара A",
        en: "Fire class A"
      },
      "2": {
        fa: "کلاس حریق C",
        ar: "فئة الحريق C",
        ru: "Класс пожара C",
        en: "Fire class C"
      },
      "3": {
        fa: "کلاس حریق F",
        ar: "فئة الحريق F",
        ru: "Класс пожара F",
        en: "Fire class F"
      }
    }
  },

  // Streak Frage 18
  "streak_18": {
    frage: {
      fa: "برای تنش‌زدایی و آرام‌سازی افراد پرخاشگر، رفتار صحیح چیست؟",
      ar: "كيف تتصرف بشكل صحيح لتهدئة الأشخاص العدوانيين وتخفيف حدة التوتر؟",
      ru: "Как правильно вести себя с агрессивными людьми для деэскалации конфликта?",
      en: "How do you act correctly to de-escalate aggressive individuals?"
    },
    loesung: {
      fa: "آرام، قاطع و بااحترام ماندن (Ruhig & bestimmt bleiben)",
      ar: "البقاء هادئاً وحازماً (Ruhig & bestimmt bleiben)",
      ru: "Оставаться спокойным и уверенным (Ruhig & bestimmt)",
      en: "Stay calm & firm (Ruhig & bestimmt bleiben)"
    },
    optionen: {
      "0": {
        fa: "آرام و قاطع ماندن",
        ar: "البقاء هادئاً وحازماً",
        ru: "Оставаться спокойным и уверенным",
        en: "Stay calm & assertive"
      },
      "1": {
        fa: "فریاد زدن فوری بر سر فرد",
        ar: "الصراخ فوراً في وجهه",
        ru: "Сразу кричать в ответ",
        en: "Shout immediately"
      },
      "2": {
        fa: "محاصره فیزیکی و تحت فشار قرار دادن فرد",
        ar: "المحاصرة والضغط الجسدي عليه",
        ru: "Физически теснить человека",
        en: "Physically crowd the person"
      },
      "3": {
        fa: "دست زدن به صورت یا بدن فرد",
        ar: "لمس وجه أو جسد الشخص",
        ru: "Хватать за лицо или одежду",
        en: "Touch the person's face"
      }
    }
  },

  // Streak Frage 19
  "streak_19": {
    frage: {
      fa: "در شرایط درگیری، حداقل فاصله ایمنی مناسب با طرف مقابل چقدر است؟",
      ar: "ما هي المسافة الآمنة الدنيا التي يجب الحفاظ عليها في حالات النزاع؟",
      ru: "Какую дистанцию безопасности следует соблюдать в случае конфликта?",
      en: "What minimum distance should be maintained as a safety margin in conflicts?"
    },
    loesung: {
      fa: "فاصله یک دست (حدود ۱٫۵ تا ۲ متر)",
      ar: "مسافة طول الذراع (حوالي 1.5 إلى 2 متر)",
      ru: "Длина вытянутой руки (ок. 1,5–2 м)",
      en: "Arm's length (approx. 1.5–2 m)"
    },
    optionen: {
      "0": {
        fa: "فاصله یک دست (حدود ۱٫۵ تا ۲ متر)",
        ar: "مسافة طول الذراع (حوالي 1.5 إلى 2 متر)",
        ru: "Длина вытянутой руки (ок. 1,5–2 м)",
        en: "Arm's length (approx. 1.5–2 m)"
      },
      "1": {
        fa: "۱۰ سانتی‌متر",
        ar: "10 سنتيمترات",
        ru: "10 сантиметров",
        en: "10 centimeters"
      },
      "2": {
        fa: "۵ متر",
        ar: "5 أمتار",
        ru: "5 метров",
        en: "5 meters"
      },
      "3": {
        fa: "چسبیدن و تماس مستقیم بدنی",
        ar: "التلامس الجسدي المباشر",
        ru: "Прямой телесный контакт",
        en: "Direct physical contact"
      }
    }
  },

  // Streak Frage 20
  "streak_20": {
    frage: {
      fa: "چه مفهومی قضاوت‌های قالبی و پیش‌داوری نسبت به افراد با پیشینه دیگر را توصیف می‌کند؟",
      ar: "ما هو المصطلح الذي يصف الأحكام المسبقة والتصورات النمطية تجاه الأشخاص من أصول أخرى؟",
      ru: "Что описывает предвзятые суждения о людях другого происхождения?",
      en: "What describes biases and prejudices towards people of other origins?"
    },
    loesung: {
      fa: "کلیشه‌ها / پیش‌داوری‌ها (Stereotypen / Vorurteile)",
      ar: "الصور النمطية / الأحكام المسبقة (Stereotypen / Vorurteile)",
      ru: "Стереотипы / Предрассудки (Stereotypen / Vorurteile)",
      en: "Stereotypes / Prejudices (Stereotypen / Vorurteile)"
    },
    optionen: {
      "0": {
        fa: "کلیشه‌ها / پیش‌داوری‌ها",
        ar: "الصور النمطية / الأحكام المسبقة",
        ru: "Стереотипы и предрассудки",
        en: "Stereotypes / Prejudices"
      },
      "1": {
        fa: "گوش دادن فعال",
        ar: "الاستماع الإيجابي الفعال",
        ru: "Активное слушание",
        en: "Active listening"
      },
      "2": {
        fa: "مسئولیت ضامن و کفیل قانونی (Garantenpflicht)",
        ar: "واجب الضامن القانوني (Garantenpflicht)",
        ru: "Обязанность гаранта (Garantenpflicht)",
        en: "Guarantor duty (Garantenpflicht)"
      },
      "3": {
        fa: "اصل تناسب و اعتدال (Verhältnismäßigkeit)",
        ar: "مبدأ التناسب والاعتدال (Verhältnismäßigkeit)",
        ru: "Принцип соразмерности (Verhältnismäßigkeit)",
        en: "Principle of proportionality"
      }
    }
  }
};
