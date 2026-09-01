import fs from 'fs';
import path from 'path';

// Clean German annotations in parentheses from foreign text
function cleanForeign(text: string): string {
  if (!text) return '';
  return text
    // Remove German parenthetical terms like (Besitzdiener), (Eigentümer), (Notwehr), (Jedermann), (GewO), (StGB) etc.
    .replace(/\s*\([A-ZÄÖÜa-zäöüß\s\/\.,;:\-–—§0-9]+\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// -------------------------------------------------------------
// 1. GENERATE src/data/streakQuestions.ts
// -------------------------------------------------------------
const streakQuestionsData = [
  {
    id: "streak_1",
    question: "Was besitzen private Sicherheitskräfte im öffentlichen Raum?",
    category: "Recht der öffentlichen Sicherheit",
    correctAnswerText: "Jedermannsrechte",
    translations: {
      en: { question: "What powers do private security personnel possess in public spaces?" },
      ru: { question: "Какими правами обладают частные охранники в общественных местах?" },
      ar: { question: "ما هي الصلاحيات التي يمتلكها حراس الأمن في الأماكن العامة؟" },
      fa: { question: "نیروهای امنیتی خصوصی در اماکن عمومی چه اختیاراتی دارند؟" }
    },
    options: [
      {
        id: "a",
        text: "Jedermannsrechte",
        translations: {
          en: "Citizen's rights / General public rights",
          ru: "Права каждого гражданина",
          ar: "حقوق الكافة / صلاحيات المواطن العادي",
          fa: "حقوق عامه / اختیارات همگانی"
        }
      },
      {
        id: "b",
        text: "Hoheitsrechte",
        translations: {
          en: "Sovereign rights / State powers",
          ru: "Суверенные властные полномочия",
          ar: "الحقوق والصلات السيادية للدولة",
          fa: "اختیارات حاکمیتی دولتی"
        }
      },
      {
        id: "c",
        text: "Polizeibefugnisse",
        translations: {
          en: "Police powers",
          ru: "Полномочия полиции",
          ar: "صلاحيات الشرطة",
          fa: "اختیارات پلیس"
        }
      },
      {
        id: "d",
        text: "Richterliche Gewalt",
        translations: {
          en: "Judicial authority",
          ru: "Судебная власть",
          ar: "السلطة القضائية",
          fa: "اختیارات قضایی"
        }
      }
    ]
  },
  {
    id: "streak_2",
    question: "Für welche Tätigkeit ist die Sachkundeprüfung § 34a zwingend vorgeschrieben?",
    category: "Gewerberecht",
    correctAnswerText: "Citystreife im Park",
    translations: {
      en: { question: "For which activity is the § 34a expertise examination mandatory?" },
      ru: { question: "Для какой деятельности обязателен экзамен на компетентность § 34a?" },
      ar: { question: "لأي نشاط يُشترط اجتياز امتحان الكفاءة § 34a إجبارياً؟" },
      fa: { question: "برای کدام فعالیت، آزمون تخصصی مهارت § 34a اجباری است؟" }
    },
    options: [
      {
        id: "a",
        text: "Citystreife im Park",
        translations: {
          en: "City patrols in public parks",
          ru: "Городское патрулирование в парках",
          ar: "دوريات الحراسة في الحدائق العامة",
          fa: "گشت‌زنی شهری در پارک‌های عمومی"
        }
      },
      {
        id: "b",
        text: "Einfacher Pförtnerdienst",
        translations: {
          en: "Simple gatekeeper / doorman service",
          ru: "Простая вахтенная служба",
          ar: "خدمة البواب العادي",
          fa: "خدمات ساده دربانی"
        }
      },
      {
        id: "c",
        text: "Reine Baustellenbewachung",
        translations: {
          en: "Pure construction site guarding",
          ru: "Обычная охрана стройплощадок",
          ar: "حراسة مواقع البناء العادية",
          fa: "نگهبانی صرف از کارگاه ساختمانی"
        }
      },
      {
        id: "d",
        text: "Alarminstallation",
        translations: {
          en: "Alarm system installation",
          ru: "Установка сигнализации",
          ar: "تركيب أجهزة الإنذار",
          fa: "نصب سیستم‌های دزدگیر"
        }
      }
    ]
  },
  {
    id: "streak_3",
    question: "Welche Bescheinigung muss das Wachpersonal im Dienst immer mitführen?",
    category: "Gewerberecht",
    correctAnswerText: "Dienstausweis",
    translations: {
      en: { question: "Which identification document must security personnel always carry while on duty?" },
      ru: { question: "Какой документ охранник обязан всегда иметь при себе во время службы?" },
      ar: { question: "ما هي الوثيقة التي يجب على حارس الأمن حملها دائماً أثناء الخدمة؟" },
      fa: { question: "نگهبان همواره چه مدرکی را باید در حین خدمت به همراه داشته باشد؟" }
    },
    options: [
      {
        id: "a",
        text: "Dienstausweis",
        translations: {
          en: "Security service ID card",
          ru: "Служебное удостоверение",
          ar: "بطاقة الهوية المهنية لحارس الأمن",
          fa: "کارت شناسایی پرسنل حراست"
        }
      },
      {
        id: "b",
        text: "Gewerbeanmeldung",
        translations: {
          en: "Trade / Business registration",
          ru: "Регистрация предпринимательской деятельности",
          ar: "رخصة السجل التجاري",
          fa: "مجوز ثبت کسب‌وکار"
        }
      },
      {
        id: "c",
        text: "Arbeitsvertrag",
        translations: {
          en: "Employment contract",
          ru: "Трудовой договор",
          ar: "عقد العمل",
          fa: "قرارداد کاری"
        }
      },
      {
        id: "d",
        text: "Führungszeugnis",
        translations: {
          en: "Police clearance certificate",
          ru: "Справка о несудимости",
          ar: "شهادة حسن السيرة والسلوك",
          fa: "گواهی عدم سوء‌پیشینه"
        }
      }
    ]
  },
  {
    id: "streak_4",
    question: "Darf ein Wachdienst personenbezogene Daten unbegrenzt speichern?",
    category: "Datenschutzrecht",
    correctAnswerText: "Nein, niemals",
    translations: {
      en: { question: "Is a security service allowed to store personal data indefinitely?" },
      ru: { question: "Имеет ли право служба охраны хранить персональные данные бессрочно?" },
      ar: { question: "هل يجوز لشركة الحراسة تخزين البيانات الشخصية لأجل غير مسمى؟" },
      fa: { question: "آیا شرکت امنیتی مجاز است داده‌های شخصی را نامحدود ذخیره کند؟" }
    },
    options: [
      {
        id: "a",
        text: "Nein, niemals",
        translations: {
          en: "No, never",
          ru: "Нет, ни в коем случае",
          ar: "لا، أبداً",
          fa: "خیر، به هیچ وجه"
        }
      },
      {
        id: "b",
        text: "Ja, immer",
        translations: {
          en: "Yes, always",
          ru: "Да, всегда",
          ar: "نعم، دائماً",
          fa: "بله، همیشه"
        }
      },
      {
        id: "c",
        text: "Nur mit Chef-Erlaubnis",
        translations: {
          en: "Only with manager permission",
          ru: "Только с разрешения руководства",
          ar: "فقط بإذن المدير",
          fa: "فقط با اجازه مدیر"
        }
      },
      {
        id: "d",
        text: "Nur bei Kunden",
        translations: {
          en: "Only for regular clients",
          ru: "Только в отношении клиентов",
          ar: "فقط للعملاء",
          fa: "فقط در مورد مشتریان"
        }
      }
    ]
  },
  {
    id: "streak_5",
    question: "Was muss bei einer Videoüberwachung im öffentlichen Raum zwingend vorhanden sein?",
    category: "Datenschutzrecht",
    correctAnswerText: "Hinweisschild",
    translations: {
      en: { question: "What must strictly be present for video surveillance in publicly accessible spaces?" },
      ru: { question: "Что обязательно требуется при видеонаблюдении в общественных местах?" },
      ar: { question: "ما هو الشرط الإلزامي للمراقبة بالكاميرات في الأماكن العامة؟" },
      fa: { question: "در دوربین‌های مداربسته در اماکن عمومی چه چیزی الزام قانونی دارد؟" }
    },
    options: [
      {
        id: "a",
        text: "Hinweisschild",
        translations: {
          en: "Clearly visible warning sign",
          ru: "Предупреждающая табличка",
          ar: "لوحة تحذيرية واضحة",
          fa: "تابلوی اطلاع‌رسانی و هشدار"
        }
      },
      {
        id: "b",
        text: "Polizeifreigabe",
        translations: {
          en: "Police permit",
          ru: "Разрешение полиции",
          ar: "تصريح من الشرطة",
          fa: "مجوز پلیس"
        }
      },
      {
        id: "c",
        text: "Sirene",
        translations: {
          en: "Acoustic siren",
          ru: "Акустическая сирена",
          ar: "صفارة إنذار",
          fa: "آژیر صوتی"
        }
      },
      {
        id: "d",
        text: "Blaulicht",
        translations: {
          en: "Flashing blue light",
          ru: "Синий проблесковый маячок",
          ar: "ضوء أزرق وامض",
          fa: "چراغ گردان آبی"
        }
      }
    ]
  },
  {
    id: "streak_6",
    question: "Wer hat die rechtliche Herrschaft über eine Sache?",
    category: "Bürgerliches Gesetzbuch",
    correctAnswerText: "Der Eigentümer",
    translations: {
      en: { question: "Who holds legal dominance and ultimate title over an object?" },
      ru: { question: "Кто обладает полным юридическим господством над вещью?" },
      ar: { question: "من يملك السيطرة القانونية التامة والملكية على الشيء؟" },
      fa: { question: "چه کسی تسلط و سلطه حقوقی کامل بر یک شیء دارد؟" }
    },
    options: [
      {
        id: "a",
        text: "Der Eigentümer",
        translations: {
          en: "The owner",
          ru: "Собственник",
          ar: "المالك",
          fa: "مالک قانونی"
        }
      },
      {
        id: "b",
        text: "Der Besitzdiener",
        translations: {
          en: "The agent of possession",
          ru: "Слуга владения",
          ar: "خادم الحيازة",
          fa: "خادم تصرف"
        }
      },
      {
        id: "c",
        text: "Der Entleiher",
        translations: {
          en: "The borrower",
          ru: "Заемщик / Ссудополучатель",
          ar: "المستعير",
          fa: "امانت‌گیرنده"
        }
      },
      {
        id: "d",
        text: "Der Finder",
        translations: {
          en: "The finder",
          ru: "Нашедший вещь",
          ar: "الملتقط / عاثر الأمانة",
          fa: "یابنده شیء"
        }
      }
    ]
  },
  {
    id: "streak_7",
    question: "Wer ist der Sicherheitsmitarbeiter rechtlich an der Einlasskontrolle?",
    category: "Bürgerliches Gesetzbuch",
    correctAnswerText: "Besitzdiener",
    translations: {
      en: { question: "What is the legal status of a security officer at entrance access control?" },
      ru: { question: "Каков правовой статус сотрудника безопасности на контроле доступа?" },
      ar: { question: "ما هي الصفة القانونية لحارس الأمن عند مراقبة الدخول؟" },
      fa: { question: "نگهبان حراست در کنترل ورود از نظر حقوقی چه سمتی دارد؟" }
    },
    options: [
      {
        id: "a",
        text: "Besitzdiener",
        translations: {
          en: "Agent of possession",
          ru: "Слуга владения",
          ar: "خادم الحيازة",
          fa: "خادم تصرف"
        }
      },
      {
        id: "b",
        text: "Eigentümer",
        translations: {
          en: "Owner",
          ru: "Собственник",
          ar: "المالك",
          fa: "مالک"
        }
      },
      {
        id: "c",
        text: "Amtsträger",
        translations: {
          en: "Public official",
          ru: "Должностное лицо",
          ar: "موظف رسمي في الدولة",
          fa: "مقام رسمی دولتی"
        }
      },
      {
        id: "d",
        text: "Behördenvertreter",
        translations: {
          en: "Authority representative",
          ru: "Представитель органа власти",
          ar: "ممثل الهيئة الحكومية",
          fa: "نماینده نهادهای دولتی"
        }
      }
    ]
  },
  {
    id: "streak_8",
    question: "Welches Recht erlaubt das sofortige Abnehmen von Diebesgut auf frischer Tat?",
    category: "Bürgerliches Gesetzbuch",
    correctAnswerText: "Besitzkehr",
    translations: {
      en: { question: "Which right permits the immediate recovery of stolen goods caught in the act?" },
      ru: { question: "Какое право разрешает немедленный возврат украденной вещи по горячим следам?" },
      ar: { question: "ما هو الحق الذي يسمح باستعادة المسروقات فوراً عند ضبط السارق متلبساً؟" },
      fa: { question: "کدام حق اجازه پس گرفتن فوری مال مسروقه را در لحظه ارتکاب جرم می‌دهد؟" }
    },
    options: [
      {
        id: "a",
        text: "Besitzkehr",
        translations: {
          en: "Recovery of possession",
          ru: "Возврат владения по горячим следам",
          ar: "استرداد الحيازة الفوري",
          fa: "حق بازپس‌گیری تصرف"
        }
      },
      {
        id: "b",
        text: "Besitzwehr",
        translations: {
          en: "Defense of possession",
          ru: "Защита владения",
          ar: "الدفاع عن الحيازة",
          fa: "حق دفاع از تصرف"
        }
      },
      {
        id: "c",
        text: "Hausrecht",
        translations: {
          en: "Domiciliary right",
          ru: "Право распоряжения помещением",
          ar: "حق صاحب المكان",
          fa: "حق مدیریت و مقررات مکان"
        }
      },
      {
        id: "d",
        text: "Notstand",
        translations: {
          en: "State of emergency / Necessity",
          ru: "Крайняя необходимость",
          ar: "حالة الضرورة",
          fa: "حالت اضطرار"
        }
      }
    ]
  },
  {
    id: "streak_9",
    question: "Gegen welche Angriffe darf Notwehr ausgeübt werden?",
    category: "Strafrecht",
    correctAnswerText: "Gegenwärtige & rechtswidrige",
    translations: {
      en: { question: "Against which attacks may self-defense be lawfully exercised?" },
      ru: { question: "Против каких нападений разрешена необходимая оборона?" },
      ar: { question: "ضد أي اعتداء يجوز ممارسة الدفاع الشرعي؟" },
      fa: { question: "در برابر چه نوع حملاتی دفاع مشروع مجاز است؟" }
    },
    options: [
      {
        id: "a",
        text: "Gegenwärtige & rechtswidrige",
        translations: {
          en: "Imminent / Present & unlawful attacks",
          ru: "Наличные и противоправные нападения",
          ar: "الاعتداءات الحالية وغير المشروعة",
          fa: "حملات در حال وقوع و غیرقانونی"
        }
      },
      {
        id: "b",
        text: "Vergangene Taten",
        translations: {
          en: "Past offenses",
          ru: "Прошедшие деяния",
          ar: "الأفعال والجرائم السابقة المنتهية",
          fa: "اعمال و جرایم گذشته"
        }
      },
      {
        id: "c",
        text: "Zukünftig drohende Taten",
        translations: {
          en: "Future potential threats",
          ru: "Возможные будущие угрозы",
          ar: "التهديدات المستقبلية المحتملة",
          fa: "تهدیدهای احتمالی آینده"
        }
      },
      {
        id: "d",
        text: "Rechtmäßige Maßnahmen",
        translations: {
          en: "Lawful official measures",
          ru: "Законные меры органов власти",
          ar: "الإجراءات القانونية المشروعة",
          fa: "اقدامات قانونی مجاز"
        }
      }
    ]
  },
  {
    id: "streak_10",
    question: "Wer darf eine Person nach § 127 Abs. 1 StPO vorläufig festnehmen?",
    category: "Strafverfahrensrecht",
    correctAnswerText: "Jedermann",
    translations: {
      en: { question: "Who is permitted to provisionally apprehend a person caught in the act under § 127 (1) StPO?" },
      ru: { question: "Кто имеет право временно задержать лицо на месте преступления по § 127 ч. 1 StPO?" },
      ar: { question: "من يحق له توقيف شخص مؤقتاً عند تلبسه بجريمة وفقاً للمادة 127 الفقرة 1 StPO؟" },
      fa: { question: "چه کسی مجاز است فرد را در لحظه ارتکاب جرم طبق بند ۱ ماده ۱۲۷ موقتاً بازداشت کند؟" }
    },
    options: [
      {
        id: "a",
        text: "Jedermann",
        translations: {
          en: "Anyone / Any person",
          ru: "Каждый человек / Любой гражданин",
          ar: "أي شخص / كل مواطن",
          fa: "هر شخصی / عموم افراد"
        }
      },
      {
        id: "b",
        text: "Nur die Polizei",
        translations: {
          en: "Only the police",
          ru: "Только полиция",
          ar: "الشرطة فقط",
          fa: "فقط پلیس"
        }
      },
      {
        id: "c",
        text: "Nur Detektive",
        translations: {
          en: "Only private detectives",
          ru: "Только частные детективы",
          ar: "المحققون فقط",
          fa: "فقط کارآگاهان"
        }
      },
      {
        id: "d",
        text: "Nur der Richter",
        translations: {
          en: "Only the judge",
          ru: "Только судья",
          ar: "القاضي فقط",
          fa: "فقط قاضی"
        }
      }
    ]
  },
  {
    id: "streak_11",
    question: "Welcher Tatbestand liegt vor, wenn ein Hausverbot missachtet wird?",
    category: "Strafrecht",
    correctAnswerText: "Hausfriedensbruch",
    translations: {
      en: { question: "Which criminal offense is committed when a trespass ban is deliberately violated?" },
      ru: { question: "Какое правонарушение совершается при нарушении запрета на вход в помещение?" },
      ar: { question: "ما هي الجريمة المرتكبة عند انتهاك حظر الدخول الصادر بحق شخص ما؟" },
      fa: { question: "در صورت سرپیچی از دستور ممنوعیت ورود به ملک، چه جرمی محقق می‌شود؟" }
    },
    options: [
      {
        id: "a",
        text: "Hausfriedensbruch",
        translations: {
          en: "Trespassing / Violation of domestic peace",
          ru: "Нарушение неприкосновенности владения",
          ar: "انتهاك حرمة المكان / التعدي على الملكية",
          fa: "ورود غیرمجاز و نقض حریم ملک"
        }
      },
      {
        id: "b",
        text: "Nötigung",
        translations: {
          en: "Coercion / Duress",
          ru: "Принуждение",
          ar: "الإكراه غير المشروع",
          fa: "اجبار و تهدید غیرقانونی"
        }
      },
      {
        id: "c",
        text: "Unterschlagung",
        translations: {
          en: "Embezzlement / Misappropriation",
          ru: "Присвоение имущества",
          ar: "خيانة الأمانة والاختلاس",
          fa: "خیانت در امانت"
        }
      },
      {
        id: "d",
        text: "Raub",
        translations: {
          en: "Robbery",
          ru: "Разбой / Грабеж",
          ar: "السطو والسرقة بالإكراه",
          fa: "سرقت مقرون به آزار و خشونت"
        }
      }
    ]
  },
  {
    id: "streak_12",
    question: "Wann darf Schusswaffengebrauch im Wachdienst als Notwehr erfolgen?",
    category: "Waffenrecht",
    correctAnswerText: "Als absolut letztes Mittel",
    translations: {
      en: { question: "When may the use of firearms occur as lawful self-defense in security service?" },
      ru: { question: "Когда применение огнестрельного оружия в охране допускается как необходимая оборона?" },
      ar: { question: "متى يجوز استخدام السلاح الناري في خدمة الحراسة كدفاع شرعي؟" },
      fa: { question: "چه زمانی استفاده از سلاح گرم در حراست به عنوان دفاع مشروع مجاز است؟" }
    },
    options: [
      {
        id: "a",
        text: "Als absolut letztes Mittel",
        translations: {
          en: "As an absolute last resort to save life",
          ru: "В качестве крайней меры для спасения жизни",
          ar: "كملجأ أخير تماماً لإنقاذ الحياة",
          fa: "تنها به عنوان آخرین راهکار برای نجات جان"
        }
      },
      {
        id: "b",
        text: "Bei jeder Sachbeschädigung",
        translations: {
          en: "In case of simple property damage",
          ru: "При любом повреждении имущества",
          ar: "عند أي إتلاف للممتلكات",
          fa: "در هرگونه آسیب به اموال"
        }
      },
      {
        id: "c",
        text: "Zur Fluchtvereitelung",
        translations: {
          en: "Solely to prevent a thief from fleeing",
          ru: "Исключительно для предотвращения побега",
          ar: "لمنع فرار السارق فقط",
          fa: "صرفاً برای جلوگیری از فرار سارق"
        }
      },
      {
        id: "d",
        text: "Auf mündlichen Befehl",
        translations: {
          en: "On simple verbal order of the client",
          ru: "По устному приказу заказчика",
          ar: "بناءً على أمر شفهي من العميل",
          fa: "با دستور شفاهی کارفرما"
        }
      }
    ]
  },
  {
    id: "streak_13",
    question: "Welcher Schein ist zum Führen von Pfefferspray mit Tierabwehr-Kennzeichnung nötig?",
    category: "Waffenrecht",
    correctAnswerText: "Kein Waffenschein nötig",
    translations: {
      en: { question: "Which weapons permit is required to carry pepper spray labeled for animal defense?" },
      ru: { question: "Какое разрешение требуется для ношения перцового баллончика для защиты от животных?" },
      ar: { question: "ما هو الترخيص المطلوب لحمل رذاذ الفلفل المخصص للدفاع ضد الحيوانات؟" },
      fa: { question: "برای حمل اسپری فلفل دارای برچسب دفاع در برابر حیوانات به چه مجوزی نیاز است؟" }
    },
    options: [
      {
        id: "a",
        text: "Kein Waffenschein nötig",
        translations: {
          en: "No firearms license required",
          ru: "Разрешение на оружие не требуется",
          ar: "لا يلزم أي ترخيص حمل سلاح",
          fa: "هیچ مجوز سلاحی نیاز نیست"
        }
      },
      {
        id: "b",
        text: "Kleiner Waffenschein",
        translations: {
          en: "Small firearms license",
          ru: "Малое разрешение на оружие",
          ar: "رخصة السلاح الصغيرة",
          fa: "مجوز سلاح سبک"
        }
      },
      {
        id: "c",
        text: "Großer Waffenschein",
        translations: {
          en: "Full standard firearms carry permit",
          ru: "Полноценное разрешение на ношение оружия",
          ar: "رخصة حمل السلاح الكبيرة الكاملة",
          fa: "مجوز جامع حمل سلاح"
        }
      },
      {
        id: "d",
        text: "Waffenbesitzkarte",
        translations: {
          en: "Firearms ownership card",
          ru: "Карта владельца оружия",
          ar: "بطاقة حيازة السلاح",
          fa: "کارت مالکیت سلاح"
        }
      }
    ]
  },
  {
    id: "streak_14",
    question: "Welche Unfallverhütungsvorschrift regelt Wach- und Sicherungsdienste?",
    category: "Unfallverhütung",
    correctAnswerText: "DGUV Vorschrift 23",
    translations: {
      en: { question: "Which accident prevention regulation specifically governs guarding and security services?" },
      ru: { question: "Какое предписание по охране труда регулирует деятельность служб охраны?" },
      ar: { question: "ما هي لائحة الوقاية من الحوادث المنظمة لخدمات الحراسة والأمن؟" },
      fa: { question: "کدام آیین‌نامه پیشگیری از حوادث ناظر بر خدمات نگهبانی و حراست است؟" }
    },
    options: [
      {
        id: "a",
        text: "DGUV Vorschrift 23",
        translations: {
          en: "DGUV Regulation 23 (Guarding Services)",
          ru: "Предписание DGUV 23 (Охранная деятельность)",
          ar: "اللائحة 23 DGUV (خدمات الحراسة والأمن)",
          fa: "آیین‌نامه ۲۳ DGUV (خدمات نگهبانی)"
        }
      },
      {
        id: "b",
        text: "DGUV Vorschrift 1",
        translations: {
          en: "DGUV Regulation 1 (Principles of Prevention)",
          ru: "Предписание DGUV 1 (Общие основы)",
          ar: "اللائحة 1 DGUV (المبادئ العامة للوقاية)",
          fa: "آیین‌نامه ۱ DGUV (اصول پیشگیری)"
        }
      },
      {
        id: "c",
        text: "StVO § 1",
        translations: {
          en: "Road Traffic Regulations § 1",
          ru: "Правила дорожного движения § 1",
          ar: "قانون المرور المادة 1",
          fa: "ماده ۱ مقررات راهنمایی و رانندگی"
        }
      },
      {
        id: "d",
        text: "GewO § 34a",
        translations: {
          en: "Trade Regulation Act § 34a",
          ru: "Закон о промысле § 34a",
          ar: "قانون تنظيم الحرف المادة 34a",
          fa: "ماده 34a قانون تجارت"
        }
      }
    ]
  },
  {
    id: "streak_15",
    question: "Welcher Grundsatz gilt bei eigener Lebensgefahr im Sicherheitsdienst immer?",
    category: "Unfallverhütung",
    correctAnswerText: "Eigensicherung geht vor",
    translations: {
      en: { question: "Which core principle always applies in security services when your own life is in danger?" },
      ru: { question: "Какое основное правило действует в охране при угрозе собственной жизни?" },
      ar: { question: "ما هو المبدأ الأساسي المطبق دائماً في الحراسة عند وجود خطر على الحياة؟" },
      fa: { question: "در هنگام به خطر افتادن جان در حین خدمت حراست، کدام اصل همواره حاکم است؟" }
    },
    options: [
      {
        id: "a",
        text: "Eigensicherung geht vor",
        translations: {
          en: "Self-protection / Personal safety takes top priority",
          ru: "Собственная безопасность превыше всего",
          ar: "السلامة الشخصية وحماية الذات تأتي أولاً",
          fa: "حفظ جان و ایمنی فردی اولویت نخست است"
        }
      },
      {
        id: "b",
        text: "Schutz der Sache geht vor",
        translations: {
          en: "Property protection takes priority",
          ru: "Защита имущества важнее жизни",
          ar: "حماية الممتلكات أهم من السلامة الشخصية",
          fa: "حفاظت از اموال مهم‌تر از جان است"
        }
      },
      {
        id: "c",
        text: "Immer einschreiten",
        translations: {
          en: "Always intervene physically regardless of risk",
          ru: "Всегда вмешиваться невзирая на риск",
          ar: "التدخل دائماً بغض النظر عن المخاطر",
          fa: "مداخله فیزیکی در هر شرایطی"
        }
      },
      {
        id: "d",
        text: "Auftrag ohne Rücksicht",
        translations: {
          en: "Execute mission without regard to casualties",
          ru: "Выполнять задачу без учета жертв",
          ar: "تنفيذ المهمة دون أي اعتبار للخسائر",
          fa: "انجام مأموریت بدون توجه به تلفات"
        }
      }
    ]
  },
  {
    id: "streak_16",
    question: "Was gehört zur passiven Sicherheitstechnik eines Objekts?",
    category: "Sicherheitstechnik",
    correctAnswerText: "Zäune und Gitter",
    translations: {
      en: { question: "What belongs to the structural / passive security technology of a facility?" },
      ru: { question: "Что относится к пассивным техническим средствам безопасности объекта?" },
      ar: { question: "ما الذي ينتمي إلى تقنيات الأمان الهيكلية السلبية للمنشأة؟" },
      fa: { question: "کدام مورد جزو تجهیزات امنیتی غیرفعال و سازه‌ای یک ساختمان است؟" }
    },
    options: [
      {
        id: "a",
        text: "Zäune und Gitter",
        translations: {
          en: "Fences, barriers and security grilles",
          ru: "Заборы, ограждения и решетки",
          ar: "الأسوار، الحواجز وقضبان الحماية",
          fa: "حصارها، موانع و نرده‌های حفاظتی"
        }
      },
      {
        id: "b",
        text: "Wachhund",
        translations: {
          en: "Guard dog",
          ru: "Сторожевая собака",
          ar: "كلب الحراسة",
          fa: "سگ نگهبان"
        }
      },
      {
        id: "c",
        text: "Polizeistreife",
        translations: {
          en: "Police patrol",
          ru: "Полицейский патруль",
          ar: "دورية الشرطة",
          fa: "گشت پلیس"
        }
      },
      {
        id: "d",
        text: "Sicherheitskraft",
        translations: {
          en: "Security personnel",
          ru: "Сотрудник охраны",
          ar: "حارس الأمن البشري",
          fa: "نیروی انسانی حراست"
        }
      }
    ]
  },
  {
    id: "streak_17",
    question: "Welche Brandklasse umfasst brennbare Flüssigkeiten wie Benzin?",
    category: "Sicherheitstechnik",
    correctAnswerText: "Brandklasse B",
    translations: {
      en: { question: "Which fire class covers flammable liquid substances such as gasoline and oils?" },
      ru: { question: "Какой класс пожара охватывает горючие жидкие вещества, такие как бензин?" },
      ar: { question: "أي فئة من فئات الحرائق تشمل السوائل القابلة للاشتعال مثل البنزين؟" },
      fa: { question: "کدام رده آتش‌سوزی شامل مایعات قابل اشتعال مانند بنزین و روغن‌ها است؟" }
    },
    options: [
      {
        id: "a",
        text: "Brandklasse B",
        translations: {
          en: "Fire Class B (Flammable liquids)",
          ru: "Класс пожара B (Жидкие вещества)",
          ar: "فئة الحريق B (السوائل القابلة للاشتعال)",
          fa: "کلاس آتش B (مایعات قابل اشتعال)"
        }
      },
      {
        id: "b",
        text: "Brandklasse A",
        translations: {
          en: "Fire Class A (Solid materials)",
          ru: "Класс пожара A (Твердые вещества)",
          ar: "فئة الحريق A (المواد الصلبة)",
          fa: "کلاس آتش A (مواد جامد)"
        }
      },
      {
        id: "c",
        text: "Brandklasse C",
        translations: {
          en: "Fire Class C (Flammable gases)",
          ru: "Класс пожара C (Газы)",
          ar: "فئة الحريق C (الغازات)",
          fa: "کلاس آتش C (گازها)"
        }
      },
      {
        id: "d",
        text: "Brandklasse F",
        translations: {
          en: "Fire Class F (Cooking oils and fats)",
          ru: "Класс пожара F (Пищевые жиры и масла)",
          ar: "فئة الحريق F (زيوت ودهون الطهي)",
          fa: "کلاس آتش F (روغن‌ها و چربی‌های خوراکی)"
        }
      }
    ]
  },
  {
    id: "streak_18",
    question: "Wie verhält man sich bei aggressiven Personen zur Deeskalation richtig?",
    category: "Umgang mit Menschen",
    correctAnswerText: "Ruhig & bestimmt bleiben",
    translations: {
      en: { question: "How do you correctly de-escalate confrontations with aggressive individuals?" },
      ru: { question: "Как правильно вести себя для деэскалации агрессивно настроенных лиц?" },
      ar: { question: "كيف تتصرف بشكل صحيح لتهدئة المواقف وخفض التوتر مع الأشخاص العدوانيين؟" },
      fa: { question: "نحوه رفتار صحیح برای تنش‌زدایی در مواجهه با افراد پرخاشگر چگونه است؟" }
    },
    options: [
      {
        id: "a",
        text: "Ruhig & bestimmt bleiben",
        translations: {
          en: "Stay calm, composed, and assertive",
          ru: "Сохранять спокойствие и твердую уверенность",
          ar: "الحفاظ على الهدوء والثبات بحزم",
          fa: "آرامش خود را حفظ کرده و قاطع و محترمانه برخورد کنید"
        }
      },
      {
        id: "b",
        text: "Sofort anschreien",
        translations: {
          en: "Shout back loudly immediately",
          ru: "Немедленно начать кричать в ответ",
          ar: "الصراخ في وجه الشخص فوراً",
          fa: "فریاد زدن فوری بر سر طرف مقابل"
        }
      },
      {
        id: "c",
        text: "Körperlich bedrängen",
        translations: {
          en: "Crowd them physically and corner them",
          ru: "Физически наступать и прижимать",
          ar: "محاصرته والضغط عليه جسدياً",
          fa: "نزدیک شدن فیزیکی تهدیدآمیز"
        }
      },
      {
        id: "d",
        text: "Ins Gesicht fassen",
        translations: {
          en: "Touch their face or push them",
          ru: "Хватать за лицо или толкать",
          ar: "لمس وجهه أو دفعه",
          fa: "دست زدن به صورت یا هل دادن"
        }
      }
    ]
  },
  {
    id: "streak_19",
    question: "Welche Distanz sollte man im Konfliktfall als Sicherheitsabstand mindestens einhalten?",
    category: "Umgang mit Menschen",
    correctAnswerText: "Armlänge (ca. 1,5–2 m)",
    translations: {
      en: { question: "What minimum safety distance should be maintained in potential conflict situations?" },
      ru: { question: "Какую минимальную дистанцию безопасности следует соблюдать в конфликте?" },
      ar: { question: "ما هي مسافة الأمان الدنيا التي يجب الحفاظ عليها في حالات النزاع؟" },
      fa: { question: "در شرایط درگیری و تنش، حداقل فاصله ایمنی که باید رعایت شود چقدر است؟" }
    },
    options: [
      {
        id: "a",
        text: "Armlänge (ca. 1,5–2 m)",
        translations: {
          en: "At least arm's length plus buffer (approx. 1.5–2 meters)",
          ru: "Дистанция вытянутой руки плюс запас (ок. 1,5–2 м)",
          ar: "مسافة ذراع على الأقل مع هامش أمان (حوالي 1.5–2 متر)",
          fa: "حداقل به اندازه طول دست به اضافه حاشیه ایمن (حدود ۱.۵ تا ۲ متر)"
        }
      },
      {
        id: "b",
        text: "10 Zentimeter",
        translations: {
          en: "10 centimeters",
          ru: "10 сантиметров",
          ar: "10 سنتيمترات",
          fa: "۱۰ سانتی‌متر"
        }
      },
      {
        id: "c",
        text: "5 Meter",
        translations: {
          en: "5 meters",
          ru: "5 метров",
          ar: "5 أمتار",
          fa: "۵ متر"
        }
      },
      {
        id: "d",
        text: "Direkter Körperkontakt",
        translations: {
          en: "Direct physical body contact",
          ru: "Прямой физический контакт вплотную",
          ar: "التلامس الجسدي المباشر الملتصق",
          fa: "تماس فیزیکی مستقیم"
        }
      }
    ]
  },
  {
    id: "streak_20",
    question: "Was beschreibt Vorurteile gegenüber Menschen anderer Herkunft?",
    category: "Umgang mit Menschen",
    correctAnswerText: "Stereotypen / Vorurteile",
    translations: {
      en: { question: "What term describes generalized prejudices and preconceived notions regarding people of different backgrounds?" },
      ru: { question: "Что описывает обобщенные предрассудки и предубеждения в отношении людей иного происхождения?" },
      ar: { question: "ما الذي يصف الأحكام المسبقة والتعميمات النمطية تجاه الأشخاص من خلفيات مختلفة؟" },
      fa: { question: "چه مفهومی پیش‌داوری‌ها و کلیشه‌های ذهنی تعمیم‌یافته نسبت به افراد را توصیف می‌کند؟" }
    },
    options: [
      {
        id: "a",
        text: "Stereotypen / Vorurteile",
        translations: {
          en: "Stereotypes and prejudices",
          ru: "Стереотипы и предрассудки",
          ar: "الصور النمطية والأحكام المسبقة",
          fa: "کلیشه‌ها و پیش‌داوری‌های ذهنی"
        }
      },
      {
        id: "b",
        text: "Aktives Zuhören",
        translations: {
          en: "Active empathic listening",
          ru: "Активное слушание",
          ar: "الاستماع النشط الإيجابي",
          fa: "گوش دادن فعال"
        }
      },
      {
        id: "c",
        text: "Garantenpflicht",
        translations: {
          en: "Legal duty of a guarantor",
          ru: "Обязанность гаранта",
          ar: "واجب الضامن القانوني",
          fa: "مسئولیت و وظیفه ضامن"
        }
      },
      {
        id: "d",
        text: "Verhältnismäßigkeit",
        translations: {
          en: "Principle of proportionality",
          ru: "Принцип соразмерности",
          ar: "مبدأ التناسب والاعتدال",
          fa: "اصل تناسب"
        }
      }
    ]
  }
];

const streakFileContent = `/**
 * @file streakQuestions.ts
 * Die 20 exklusiven Streak-Fragen für die Sachkundeprüfung § 34a GewO.
 * Jede Option trägt fest gekoppelte, semantisch exakte Übersetzungen (en, ru, ar, fa).
 */

export interface StreakQuestionOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  text: string;
  translations: {
    en: string;
    ru: string;
    ar: string;
    fa: string;
  };
}

export interface StreakQuestion {
  id: string;
  question: string;
  category: string;
  correctAnswerText: string;
  translations: {
    en: { question: string };
    ru: { question: string };
    ar: { question: string };
    fa: { question: string };
  };
  options: StreakQuestionOption[];
}

export const STREAK_QUESTIONS: StreakQuestion[] = ${JSON.stringify(streakQuestionsData, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/streakQuestions.ts'), streakFileContent, 'utf-8');
console.log('src/data/streakQuestions.ts generated successfully!');
