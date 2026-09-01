import { WrittenQuestion } from '../types.ts';

export interface IhkCategoryConfig {
  id: string;
  name: string;
  shortName: string;
  maxPoints: number;
  questionCount: number;
  onePointCount: number;
  twoPointCount: number;
  iconName: string;
  color: string;
}

export const IHK_CATEGORIES_CONFIG: IhkCategoryConfig[] = [
  {
    id: 'oeff_recht',
    name: 'Recht der öffentlichen Sicherheit und Ordnung',
    shortName: 'Öffentl. Sicherheit & Ordnung',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'Scale',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'bgb',
    name: 'Bürgerliches Gesetzbuch (BGB)',
    shortName: 'Bürgerliches Recht (BGB)',
    maxPoints: 28,
    questionCount: 19,
    onePointCount: 10,
    twoPointCount: 9,
    iconName: 'BookOpen',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'stgb_stpo',
    name: 'Straf- und Strafverfahrensrecht (StGB / StPO)',
    shortName: 'StGB & StPO (§ 127 Festnahme)',
    maxPoints: 28,
    questionCount: 19,
    onePointCount: 10,
    twoPointCount: 9,
    iconName: 'ShieldAlert',
    color: 'from-rose-500 to-red-500'
  },
  {
    id: 'deeskalation',
    name: 'Umgang mit Menschen und Verhalten in Gefahrensituationen',
    shortName: 'Umgang mit Menschen & Deeskalation',
    maxPoints: 20,
    questionCount: 14,
    onePointCount: 8,
    twoPointCount: 6,
    iconName: 'Users',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'uvv',
    name: 'Unfallverhütungsvorschriften (UVV)',
    shortName: 'UVV (DGUV Vorschrift 23)',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'HardHat',
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 'technik',
    name: 'Grundsätze der Sicherheitstechnik',
    shortName: 'Grundlagen der Sicherheitstechnik',
    maxPoints: 10,
    questionCount: 7,
    onePointCount: 4,
    twoPointCount: 3,
    iconName: 'Cpu',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'datenschutz',
    name: 'Datenschutzrecht',
    shortName: 'Datenschutz (DSGVO / BDSG)',
    maxPoints: 5,
    questionCount: 3,
    onePointCount: 1,
    twoPointCount: 2,
    iconName: 'Lock',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'waffenrecht',
    name: 'Umgang mit Waffen',
    shortName: 'Waffenrecht (WaffG)',
    maxPoints: 5,
    questionCount: 3,
    onePointCount: 1,
    twoPointCount: 2,
    iconName: 'Crosshair',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'gewerberecht',
    name: 'Gewerberecht (GewO / BewachV)',
    shortName: 'Gewerberecht (§ 34a GewO / BewachV)',
    maxPoints: 4,
    questionCount: 3,
    onePointCount: 2,
    twoPointCount: 1,
    iconName: 'Briefcase',
    color: 'from-lime-500 to-emerald-600'
  }
];


export const IHK_120_EXAM_QUESTIONS: WrittenQuestion[] = [
  {
    "id": "ihk-oeff-1",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Was versteht man unter dem Begriff \"Öffentliche Sicherheit\" im deutschen Recht?",
    "optionen": [
      "A) Den Schutz der Unversehrtheit der Rechtsordnung, der Individualrechtsgüter und der Einrichtungen des Staates.",
      "B) Ausschließlich den Schutz vor terroristischen Anschlägen auf Bundesebene.",
      "C) Die Summe aller ungeschriebenen Regeln für das Verhalten in der Öffentlichkeit (Sitte und Moral).",
      "D) Die Gewährleistung von pünktlichen Zügen und öffentlichem Personennahverkehr."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Den Schutz der Unversehrtheit der Rechtsordnung, der Individualrechtsgüter und der Einrichtungen des Staates.",
        "translations": {
          "ru": "Защиту неприкосновенности правопорядка, индивидуальных правовых благ и институтов государства.",
          "en": "The protection of the integrity of the legal order, individual legal rights, and state institutions.",
          "ar": "حماية سلامة النظام القانوني، وحقوق الأفراد ومؤسسات الدولة.",
          "fa": "حفاظت از یکپارچگی نظم حقوقی، حقوق فردی و نهادهای دولتی."
        }
      },
      {
        "id": "b",
        "text": "B) Ausschließlich den Schutz vor terroristischen Anschlägen auf Bundesebene.",
        "translations": {
          "ru": "Исключительно защиту от террористических актов на федеральном уровне.",
          "en": "Exclusively protection against terrorist attacks at the federal level.",
          "ar": "حماية الدولة حصراً من الهجمات الإرهابية على المستوى الاتحادي.",
          "fa": "صرفاً حفاظت در برابر حملات تروریستی در سطح فدرال."
        }
      },
      {
        "id": "c",
        "text": "C) Die Summe aller ungeschriebenen Regeln für das Verhalten in der Öffentlichkeit (Sitte und Moral).",
        "translations": {
          "ru": "Сумму всех неписаных правил поведения в обществе (обычаи и мораль).",
          "en": "The sum of all unwritten rules for behavior in public (customs and morals).",
          "ar": "مجموع القواعد غير المكتوبة للسلوك في الأماكن العامة (العرف والأخلاق).",
          "fa": "مجموع تمامی قواعد نانوشته رفتار در ملأ عام (عرف و اخلاق)."
        }
      },
      {
        "id": "d",
        "text": "D) Die Gewährleistung von pünktlichen Zügen und öffentlichem Personennahverkehr.",
        "translations": {
          "ru": "Обеспечение пунктуальности поездов и общественного транспорта.",
          "en": "Ensuring punctual trains and local public passenger transport.",
          "ar": "ضمان دقة مواعيد القطارات ووسائل النقل العام المحلية.",
          "fa": "تضمین به موقع بودن حرکت قطارها و وسایل حمل و نقل عمومی شهری."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Die öffentliche Sicherheit umfasst 3 Schutzbereiche: 1. Die gesamte geschriebene Rechtsordnung (Gesetze, Verordnungen), 2. Individualrechtsgüter (Leben, Gesundheit, Freiheit, Eigentum) und 3. Der Staat mit seinen Einrichtungen und Veranstaltungen.",
    "translations": {
      "ru": {
        "question": "Что понимается под термином «общественная безопасность» (Öffentliche Sicherheit) в немецком праве?",
        "explanation": "Общественная безопасность включает 3 сферы: 1. Писаный правопорядок (законы), 2. Индивидуальные блага (жизнь, здоровье, свобода, имущество) и 3. Государство и его учреждения."
      },
      "en": {
        "question": "What is understood by the term \"Public Safety\" (Öffentliche Sicherheit) in German law?",
        "explanation": "Public safety comprises 3 areas: 1. The entire written legal order, 2. Individual rights (life, health, freedom, property), and 3. The state with its institutions."
      },
      "ar": {
        "question": "ماذا يقصد بمفهوم «الأمن العام» (Öffentliche Sicherheit) في القانون الألماني؟",
        "explanation": "يشمل الأمن العام 3 مجالات حماية: 1. النظام القانوني المكتوب كاملاً، 2. حقوق الأفراد (الحياة، الصحة، الحرية، الملكية)، 3. الدولة ومؤسساتها وفعالياتها."
      },
      "fa": {
        "question": "مفهوم «امنیت عمومی» (Öffentliche Sicherheit) در حقوق آلمان به چه معناست؟",
        "explanation": "امنیت عمومی شامل ۳ حوزه است: ۱. کل نظم حقوقی مدون، ۲. حقوق و منافع فردی (جان، سلامت، آزادی، مالکیت) و ۳. دولت و نهادهای آن."
      }
    }
  },
  {
    "id": "ihk-oeff-2",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Welche Aufgaben obliegen den Ordnungsbehörden und der Polizei im Rahmen der Gefahrenabwehr?",
    "optionen": [
      "A) Die Verhängung von Freiheitsstrafen bei schweren Straftaten.",
      "B) Die Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung.",
      "C) Die zivilrechtliche Durchsetzung von Geldforderungen privater Vermieter.",
      "D) Die automatische Übernahme privater Firmenbewachungen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Verhängung von Freiheitsstrafen bei schweren Straftaten.",
        "translations": {
          "ru": "Назначение наказания в виде лишения свободы за тяжкие преступления.",
          "en": "Imposing custodial prison sentences for serious criminal offenses.",
          "ar": "فرض عقوبات السجن في الجرائم الجنائية الخطيرة.",
          "fa": "صدور احکام حبس برای جرایم سنگین کیفری."
        }
      },
      {
        "id": "b",
        "text": "B) Die Abwehr von Gefahren für die öffentliche Sicherheit und Ordnung.",
        "translations": {
          "ru": "Предотвращение и отражение угроз общественной безопасности и порядку.",
          "en": "Averting dangers to public safety and public order (hazard prevention).",
          "ar": "درء وصد الأخطار التي تهدد الأمن والنظام العام.",
          "fa": "دفع و پیشگیری از خطرات تهدیدکننده امنیت و نظم عمومی."
        }
      },
      {
        "id": "c",
        "text": "C) Die zivilrechtliche Durchsetzung von Geldforderungen privater Vermieter.",
        "translations": {
          "ru": "Принудительное взыскание задолженности частных арендодателей по гражданскому праву.",
          "en": "Civil law enforcement of financial claims by private landlords.",
          "ar": "التحصيل المدني للمطالبات المالية للمؤجرين من القطاع الخاص.",
          "fa": "پیگیری حقوقی مطالبات مالی اجاره‌دهندگان بخش خصوصی."
        }
      },
      {
        "id": "d",
        "text": "D) Die automatische Übernahme privater Firmenbewachungen.",
        "translations": {
          "ru": "Автоматическое принятие на себя охраны частных предприятий.",
          "en": "Automatic takeover of private corporate security guarding.",
          "ar": "التولي التلقائي لمهام الحراسة للشركات الخاصة.",
          "fa": "بر عهده گرفتن خودکار نگهبانی شرکت‌های خصوصی."
        }
      }
    ],
    "korrekteAntworten": [
      1
    ],
    "punkte": 1,
    "erklaerung": "Kernaufgabe der Polizei- und Ordnungsbehörden ist die präventive Gefahrenabwehr zum Schutz der Allgemeinheit vor Schäden an der öffentlichen Sicherheit und Ordnung.",
    "translations": {
      "ru": {
        "question": "Какие задачи возложены на органы правопорядка и полицию в рамках предотвращения угроз (Gefahrenabwehr)?",
        "explanation": "Главной задачей полиции и ведомств порядка является превентивное предотвращение угроз для защиты общества."
      },
      "en": {
        "question": "Which tasks are incumbent upon the regulatory authorities and the police within hazard prevention (Gefahrenabwehr)?",
        "explanation": "The core task of police and regulatory authorities is preventive hazard defense to protect the public from damages to public safety and order."
      },
      "ar": {
        "question": "ما هي المهام الملقاة على عاتق سلطات النظام العام والشرطة في إطار درء الأخطار (Gefahrenabwehr)؟",
        "explanation": "المهمة الأساسية للشرطة وسلطات النظام العام هي درء الأخطار الوقائي لحماية المجتمع من أي إخلال بالأمن والنظام."
      },
      "fa": {
        "question": "کدام وظایف در چارچوب پیشگیری از خطر (Gefahrenabwehr) بر عهده مراجع انتظامی و پلیس است؟",
        "explanation": "وظیفه اصلی مراجع انتظامی و پلیس، پیشگیری و دفع خطرات جهت محافظت از جامعه در برابر آسیب به امنیت و نظم عمومی است."
      }
    }
  },
  {
    "id": "ihk-oeff-3",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Was bedeutet das \"Gewaltmonopol des Staates\" für private Sicherheitskräfte?",
    "optionen": [
      "A) Private Sicherheitsdienste haben denselben Status und dieselben Zwangsmittel wie die Landespolizei.",
      "B) Der Staat besitzt grundsätzlich das alleinige Recht zur Anwendung physischer Zwangsgewalt; Private dürfen Gewalt nur im Rahmen gesetzlicher Notrechte (z. B. Notwehr, Selbsthilfe) ausüben.",
      "C) Private Sicherheitskräfte dürfen bei Ladendiebstahl Geldstrafen direkt vor Ort vollstrecken.",
      "D) Sicherheitsmitarbeiter sind von den Bestimmungen des Strafgesetzbuches ausgenommen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Private Sicherheitsdienste haben denselben Status und dieselben Zwangsmittel wie die Landespolizei.",
        "translations": {
          "ru": "Частные службы безопасности имеют тот же статус и те же средства принуждения, что и земельная полиция.",
          "en": "Private security services have the same status and coercive powers as state police.",
          "ar": "تمتلك خدمات الأمن الخاصة نفس الوضع ونفس وسائل الإكراه والقوة التي تمتلكها الشرطة.",
          "fa": "نیروهای امنیتی خصوصی دارای همان جایگاه و همان ابزارهای قوه قهریه پلیس ایالتی هستند."
        }
      },
      {
        "id": "b",
        "text": "B) Der Staat besitzt grundsätzlich das alleinige Recht zur Anwendung physischer Zwangsgewalt; Private dürfen Gewalt nur im Rahmen gesetzlicher Notrechte (z. B. Notwehr, Selbsthilfe) ausüben.",
        "translations": {
          "ru": "Государство обладает исключительным правом на применение физической силы; частные лица вправе применять силу только в рамках законных прав на самозащиту (необходимая оборона, самопомощь).",
          "en": "The state fundamentally holds the sole right to use physical force; private individuals may use force only within legal emergency rights (e.g. self-defense, self-help).",
          "ar": "تحتكر الدولة مبدئياً الحق الحصري في استخدام القوة؛ ولا يجوز للأفراد استخدامها إلا في حدود حقوق الطوارئ القانونية (مثل الدفاع الشرعي والمساعدة الذاتية).",
          "fa": "دولت اصولاً حق انحصاری استفاده از قوه قهریه را در اختیار دارد؛ افراد تنها در چارچوب حقوق اضطراری قانونی (مانند دفاع مشروع، احقاق حق شخصی) مجاز به کاربرد زور هستند."
        }
      },
      {
        "id": "c",
        "text": "C) Private Sicherheitskräfte dürfen bei Ladendiebstahl Geldstrafen direkt vor Ort vollstrecken.",
        "translations": {
          "ru": "Частные охранники имеют право взыскивать денежные штрафы за кражи прямо на месте.",
          "en": "Private security guards may directly collect monetary fines on site in cases of shoplifting.",
          "ar": "يجوز لأفراد الأمن فرض غرامات مالية فورية وتحصيلها في الموقع عند سرقة المتاجر.",
          "fa": "نیروهای امنیتی خصوصی می‌توانند در محل وقوع سرقت از فروشگاه، جریمه نقدی دریافت کنند."
        }
      },
      {
        "id": "d",
        "text": "D) Sicherheitsmitarbeiter sind von den Bestimmungen des Strafgesetzbuches ausgenommen.",
        "translations": {
          "ru": "Сотрудники безопасности освобождены от действия положений Уголовного кодекса.",
          "en": "Security personnel are exempt from the provisions of the Criminal Code.",
          "ar": "يُستثنى موظفو الأمن من أحكام قانون العقوبات الجنائي.",
          "fa": "نیروهای حراست از شمول مقررات قانون مجازات کیفری مستثنی هستند."
        }
      }
    ],
    "korrekteAntworten": [
      1
    ],
    "punkte": 1,
    "erklaerung": "Das staatliche Gewaltmonopol besagt, dass nur staatliche Organe Zwangsgewalt zur Rechtsdurchsetzung anwenden dürfen. Private Personen und Sicherheitskräfte haben nur Jedermannsrechte und Notwehr-/Besitzschutzrechte.",
    "translations": {
      "ru": {
        "question": "Что означает «государственная монополия на применение силы» (Gewaltmonopol des Staates) для частных охранников?",
        "explanation": "Только госорганы имеют право применять силу для принуждения. Охранники обладают лишь общегражданскими правами и правами самообороны."
      },
      "en": {
        "question": "What does the \"State Monopoly on Force\" mean for private security guards?",
        "explanation": "Only state authorities may apply coercive force. Private citizens and guards only have citizen rights and emergency/possession defense rights."
      },
      "ar": {
        "question": "ماذا يعني «احتكار الدولة للقوة» (Gewaltmonopol) بالنسبة لأفراد الأمن الخاص؟",
        "explanation": "يحق لأجهزة الدولة فقط ممارسة الإكراه المادي. ويمتلك أفراد الأمن حقوق الكافة وحقوق الدفاع الشرعي وحماية الحيازة فقط."
      },
      "fa": {
        "question": "«انحصار دولتی قوه قهریه» چه معنایی برای پرسنل امنیتی خصوصی دارد؟",
        "explanation": "فقط ارگان‌های دولتی حق اعمال زور برای اجرای قانون دارند. نیروهای امنیتی تنها از حقوق عامه شهروندی و حقوق دفاع مشروع برخوردارند."
      }
    }
  },
  {
    "id": "ihk-oeff-4",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Welche Grundrechte nach dem Grundgesetz (GG) sind für die Tätigkeit im Sicherheitsdienst besonders relevant?",
    "optionen": [
      "A) Art. 1 Abs. 1 GG: Die Würde des Menschen ist unantastbar.",
      "B) Art. 2 Abs. 2 GG: Recht auf Leben, körperliche Unversehrtheit und Freiheit der Person.",
      "C) Art. 102 GG: Abschaffung der Todesstrafe als Dienstanweisung.",
      "D) Art. 13 GG: Recht auf zollfreien Wareneinkauf."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Art. 1 Abs. 1 GG: Die Würde des Menschen ist unantastbar.",
        "translations": {
          "ru": "Ст. 1 абз. 1 Основного закона (GG): Достоинство человека неприкосновенно.",
          "en": "Art. 1 (1) Basic Law (GG): Human dignity is inviolable.",
          "ar": "المادة 1 الفقرة 1 من الدستور: كرامة الإنسان مصونة ولا تمس.",
          "fa": "اصل ۱ بند ۱ قانون اساسی: کرامت انسانی غیرقابل تعرض و مصون از تعرض است."
        }
      },
      {
        "id": "b",
        "text": "B) Art. 2 Abs. 2 GG: Recht auf Leben, körperliche Unversehrtheit und Freiheit der Person.",
        "translations": {
          "ru": "Ст. 2 абз. 2 GG: Право на жизнь, физическую неприкосновенность и личную свободу.",
          "en": "Art. 2 (2) Basic Law (GG): Right to life, physical integrity, and personal freedom.",
          "ar": "المادة 2 الفقرة 2 من الدستور: الحق في الحياة والسلامة الجسدية والحرية الشخصية.",
          "fa": "اصل ۲ بند ۲ قانون اساسی: حق حیات، سلامت جسمانی و آزادی فردی."
        }
      },
      {
        "id": "c",
        "text": "C) Art. 102 GG: Abschaffung der Todesstrafe als Dienstanweisung.",
        "translations": {
          "ru": "Ст. 102 GG: Отмена смертной казни как служебная инструкция.",
          "en": "Art. 102 Basic Law: Abolition of capital punishment as a service directive.",
          "ar": "المادة 102 من الدستور: إلغاء عقوبة الإعدام كتعليمات خدمة.",
          "fa": "اصل ۱۰۲ قانون اساسی: لغو مجازات اعدام به عنوان دستورالعمل کاری."
        }
      },
      {
        "id": "d",
        "text": "D) Art. 13 GG: Recht auf zollfreien Wareneinkauf.",
        "translations": {
          "ru": "Ст. 13 GG: Право на беспошлинную покупку товаров.",
          "en": "Art. 13 Basic Law: Right to duty-free shopping.",
          "ar": "المادة 13 من الدستور: الحق في شراء البضائع المعفاة من الرسوم.",
          "fa": "اصل ۱۳ قانون اساسی: حق خرید کالای معاف از گمرک."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Art. 1 (Menschenwürde) und Art. 2 GG (körperliche Unversehrtheit & persönliche Freiheit) sind fundamentale Schutzgüter, die bei jeder Sicherheitsmaßnahme beachtet werden müssen.",
    "translations": {
      "ru": {
        "question": "Какие основные права по Конституции ФРГ (GG) особенно важны для охранной деятельности?",
        "explanation": "Ст. 1 (достоинство человека) и Ст. 2 GG (жизнь, здоровье, личная свобода) являются фундаментальными благами при любых охранных мерах."
      },
      "en": {
        "question": "Which fundamental rights under the Basic Law (GG) are particularly relevant for security services?",
        "explanation": "Art. 1 (human dignity) and Art. 2 (physical integrity & personal liberty) must be strictly observed in every security intervention."
      },
      "ar": {
        "question": "أي من الحقوق الأساسية في الدستور الألماني (GG) تعد ذات أهمية خاصة لعمل خدمات الحراسة؟",
        "explanation": "تعد المادة 1 (كرامة الإنسان) والمادة 2 (الحياة والسلامة الجسدية والحرية) من أهم الحقوق الواجب مراعاتها في كل إجراء أمني."
      },
      "fa": {
        "question": "کدام حقوق بنیادین بر اساس قانون اساسی آلمان (GG) برای فعالیت‌های امنیتی اهمیت ویژه‌ای دارند؟",
        "explanation": "اصل ۱ (کرامت انسانی) و اصل ۲ (سلامت جسمانی و آزادی فردی) از حقوق بنیادینی هستند که در هر اقدام حراستی باید رعایت شوند."
      }
    }
  },
  {
    "id": "ihk-oeff-5",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Was versteht man unter \"Öffentlicher Ordnung\"? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Die Gesamtheit der ungeschriebenen Regeln für das Verhalten des Einzelnen in der Öffentlichkeit, die nach herrschender Anschauung für ein geordnetes Zusammenleben unerlässlich sind.",
      "B) Alle geschriebenen Gesetze des Bundes und der Länder.",
      "C) Verhaltensregeln, die sich nach den herrschenden gesellschaftlichen Wert- und Moralvorstellungen richten.",
      "D) Die Verkehrsregeln nach der Straßenverkehrsordnung."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Gesamtheit der ungeschriebenen Regeln für das Verhalten des Einzelnen in der Öffentlichkeit, die nach herrschender Anschauung für ein geordnetes Zusammenleben unerlässlich sind.",
        "translations": {
          "ru": "Совокупность неписаных правил поведения индивида в обществе, необходимых по общему признанию для упорядоченного сосуществования.",
          "en": "The entirety of unwritten rules for individual public behavior considered essential for orderly co-existence according to prevailing societal views.",
          "ar": "مجموع القواعد غير المكتوبة لسلوك الفرد في الأماكن العامة والتي تعد وفقاً للعرف السائد ضرورية للتعايش المنظم.",
          "fa": "مجموعه قواعد نانوشته رفتار فردی در جامعه که بر اساس دیدگاه غالب جامعه برای همزیستی منظم ضروری است."
        }
      },
      {
        "id": "b",
        "text": "B) Alle geschriebenen Gesetze des Bundes und der Länder.",
        "translations": {
          "ru": "Все писаные законы федерации и федеральных земель.",
          "en": "All written federal and state statutes.",
          "ar": "جميع القوانين المكتوبة الاتحادية والولائية.",
          "fa": "تمامی قوانین مدون فدرال و ایالتی."
        }
      },
      {
        "id": "c",
        "text": "C) Verhaltensregeln, die sich nach den herrschenden gesellschaftlichen Wert- und Moralvorstellungen richten.",
        "translations": {
          "ru": "Правила поведения, основанные на господствующих общественных моральных ценностях.",
          "en": "Rules of conduct governed by prevailing societal values and moral standards.",
          "ar": "قواعد السلوك التي تستند إلى القيم والمفاهيم الأخلاقية السائدة في المجتمع.",
          "fa": "قواعد رفتاری که بر اساس ارزش‌ها و هنجارهای اخلاقی غالب جامعه شکل گرفته‌اند."
        }
      },
      {
        "id": "d",
        "text": "D) Die Verkehrsregeln nach der Straßenverkehrsordnung.",
        "translations": {
          "ru": "Правила дорожного движения согласно ПДД.",
          "en": "Traffic rules according to the Road Traffic Regulations.",
          "ar": "قواعد المرور بموجب لائحة السير على الطرق.",
          "fa": "مقررات راهنمایی و رانندگی بر اساس آیین‌نامه مربوطه."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      2
    ],
    "punkte": 2,
    "erklaerung": "Öffentliche Ordnung umfasst die ungeschriebenen Regeln und ethischen Verhaltensnormen, die nach den jeweiligen Anschauungen für ein geordnetes Zusammenleben der Bürger erforderlich sind.",
    "translations": {
      "ru": {
        "question": "Что понимается под термином «общественный порядок» (Öffentliche Ordnung)? (Выберите 2 ответа)",
        "explanation": "Общественный порядок охватывает неписаные нормы морали и этики, необходимые для упорядоченного совместного проживания."
      },
      "en": {
        "question": "What is understood by \"Public Order\" (Öffentliche Ordnung)? (Choose two correct answers)",
        "explanation": "Public order comprises unwritten rules and moral/ethical norms deemed essential for orderly coexistence."
      },
      "ar": {
        "question": "ماذا يقصد بمفهوم «النظام العام» (Öffentliche Ordnung)؟ (اختر إجابتين صحيحتين)",
        "explanation": "يشمل النظام العام القواعد غير المكتوبة والقيم الأخلاقية السائدة والضرورية للعيش المشترك السليم بين أفراد المجتمع."
      },
      "fa": {
        "question": "مفهوم «نظم عمومی» (Öffentliche Ordnung) شامل چه مواردی است؟ (دو پاسخ صحیح را انتخاب کنید)",
        "explanation": "نظم عمومی شامل قواعد نانوشته و هنجارهای اخلاقی جامعه است که برای همزیستی مسالمت‌آمیز شهروندان ضروری است."
      }
    }
  },
  {
    "id": "ihk-oeff-6",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Welche rechtliche Stellung hat ein privater Sicherheitsmitarbeiter im Rahmen seines Dienstes?",
    "optionen": [
      "A) Er ist Beliehener mit voller polizeilicher Exekutivgewalt.",
      "B) Er ist ein ganz normaler Bürger (Privatperson) mit Jedermannsrechten sowie den ihm vom Auftraggeber übertragenen Hausrechten.",
      "C) Er ist Amtsträger im Sinne von § 11 Abs. 1 Nr. 2 StGB.",
      "D) Er darf polizeiliche Ausweise ausstellen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Er ist Beliehener mit voller polizeilicher Exekutivgewalt.",
        "translations": {
          "ru": "Он является уполномоченным лицом с полной исполнительной властью полиции.",
          "en": "He is an authorized agent vested with full sovereign police executive power.",
          "ar": "هو موظف مفوض يتمتع بكامل سلطات الشرطة التنفيذية.",
          "fa": "او مأمور تفویض‌شده دارای تمام اختیارات اجرایی پلیسی است."
        }
      },
      {
        "id": "b",
        "text": "B) Er ist ein ganz normaler Bürger (Privatperson) mit Jedermannsrechten sowie den ihm vom Auftraggeber übertragenen Hausrechten.",
        "translations": {
          "ru": "Он является обычным гражданином (частным лицом) с общегражданскими правами и переданными заказчиком правами хозяина объекта (Hausrecht).",
          "en": "He is an ordinary private citizen with citizen rights and domiciliary rights delegated by the client.",
          "ar": "هو مواطن عادي (شخص خاص) يتمتع بحقوق الكافة وحق حيازة المكان المفوض له من صاحب المنشأة.",
          "fa": "او یک شهروند عادی (شخص خصوصی) دارای حقوق عامه شهروندی و اختیارات مالکانه تفویض‌شده از سوی کارفرما است."
        }
      },
      {
        "id": "c",
        "text": "C) Er ist Amtsträger im Sinne von § 11 Abs. 1 Nr. 2 StGB.",
        "translations": {
          "ru": "Он является должностным лицом в смысле § 11 абз. 1 п. 2 УК (StGB).",
          "en": "He is a public official within the meaning of § 11 (1) No. 2 StGB.",
          "ar": "هو موظف رسمي عام بموجب الفقرة 11 بند 1 رقم 2 من قانون العقوبات.",
          "fa": "او مأمور رسمی دولتی در مفهوم ماده ۱۱ بند ۱ شماره ۲ قانون مجازات است."
        }
      },
      {
        "id": "d",
        "text": "D) Er darf polizeiliche Ausweise ausstellen.",
        "translations": {
          "ru": "Он имеет право выдавать полицейские удостоверения.",
          "en": "He may issue official police identification cards.",
          "ar": "يجوز له إصدار هويات وبطاقات الشرطة الرسمية.",
          "fa": "او مجاز به صدور کارت شناسایی پلیس است."
        }
      }
    ],
    "korrekteAntworten": [
      1
    ],
    "punkte": 1,
    "erklaerung": "Sicherheitsmitarbeiter sind Privatpersonen. Sie besitzen keine Sonderrechte gegenüber anderen Bürgern, handeln jedoch oft im Auftrag des Hausrechtsinhabers als Besitzdiener (§ 855 BGB).",
    "translations": {
      "ru": {
        "question": "Каков правовой статус частного сотрудника охраны при исполнении служебных обязанностей?",
        "explanation": "Сотрудники охраны являются частными лицами без особых привилегий, но действуют как слуги владения (§ 855 BGB) от имени владельца."
      },
      "en": {
        "question": "What is the legal status of a private security employee in the course of their duties?",
        "explanation": "Security guards are private citizens with standard citizen rights, acting as possession servants (§ 855 BGB) on behalf of the site owner."
      },
      "ar": {
        "question": "ما هو الوضع القانوني لحارس الأمن الخاص أثناء أداء خدمته؟",
        "explanation": "حراس الأمن أشخاص عاديون لا يملكون امتيازات خاصة، ولكنهم يتصرفون نيابة عن صاحب المكان كخادم حيازة (§ 855 BGB)."
      },
      "fa": {
        "question": "جایگاه حقوقی نیروی امنیتی خصوصی در هنگام انجام وظیفه چیست؟",
        "explanation": "نیروهای امنیتی اشخاص خصوصی هستند که حق ویژه‌ای نسبت به سایرین ندارند، ولی به عنوان خادم تصرف (§ 855 BGB) از سوی کارفرما عمل می‌کنند."
      }
    }
  },
  {
    "id": "ihk-oeff-7",
    "kategorie": "Recht der öffentlichen Sicherheit und Ordnung",
    "frage": "Wann darf die Polizei zur Durchsetzung privater Rechte gerufen werden? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wenn gerichtlicher Rechtsschutz nicht rechtzeitig erlangt werden kann.",
      "B) Wenn ohne polizeiliche Hilfe die Gefahr besteht, dass die Verwirklichung des Rechts vereitelt oder wesentlich erschwert wird (Subsidiaritätsprinzip).",
      "C) Bei jeder beliebigen Meinungsverschiedenheit über einen Kaufpreis.",
      "D) Immer, um dem Sicherheitsdienst Schreibarbeit zu ersparen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wenn gerichtlicher Rechtsschutz nicht rechtzeitig erlangt werden kann.",
        "translations": {
          "ru": "Когда судебная защита не может быть получена своевременно.",
          "en": "When judicial legal protection cannot be obtained in a timely manner.",
          "ar": "عندما يتعذر الحصول على الحماية القضائية في الوقت المناسب.",
          "fa": "هنگامی که امکان دریافت به موقع حمایت قضایی از طریق دادگاه وجود نداشته باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Wenn ohne polizeiliche Hilfe die Gefahr besteht, dass die Verwirklichung des Rechts vereitelt oder wesentlich erschwert wird (Subsidiaritätsprinzip).",
        "translations": {
          "ru": "Когда без помощи полиции реализация права будет сорвана или существенно затруднена (принцип субсидиарности).",
          "en": "When without police assistance the realization of the right would be frustrated or considerably impeded (subsidiarity principle).",
          "ar": "إذا كان هناك خطر من ضياع الحق أو تعسر تنفيذه بشكل جوهري دون تدخل الشرطة (مبدأ التبعية).",
          "fa": "هنگامی که بدون کمک پلیس خطر از دست رفتن حق یا دشواری شدید در اجرای آن وجود داشته باشد (اصل فرعی بودن)."
        }
      },
      {
        "id": "c",
        "text": "C) Bei jeder beliebigen Meinungsverschiedenheit über einen Kaufpreis.",
        "translations": {
          "ru": "При любых разногласиях по поводу цены покупки товара.",
          "en": "In any arbitrary dispute over a purchase price.",
          "ar": "عند حدوث أي خلاف عادي وبسيط حول سعر الشراء.",
          "fa": "در هر اختلاف‌نظر جزئی در خصوص قیمت کالا."
        }
      },
      {
        "id": "d",
        "text": "D) Immer, um dem Sicherheitsdienst Schreibarbeit zu ersparen.",
        "translations": {
          "ru": "Всегда, чтобы избавить службу охраны от бумажной работы.",
          "en": "Always, to save paperwork for the security guards.",
          "ar": "دائماً لتوفير كتابة التقارير على أفراد الأمن.",
          "fa": "همیشه، تا از حجم گزارش‌نویسی پرسنل نگهبانی کاسته شود."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Nach den Polizeigesetzen (z. B. § 1 Abs. 2 PolG) wird die Polizei zum Schutz privater Rechte nur subsidiär tätig, wenn gerichtlicher Schutz nicht rechtzeitig erreichbar ist und Rechtsverlust droht.",
    "translations": {
      "ru": {
        "question": "Когда разрешается вызывать полицию для защиты частных прав? (Выберите 2 ответа)",
        "explanation": "Полиция защищает частные права субсидиарно — только если суд недоступен вовремя и существует угроза утраты права."
      },
      "en": {
        "question": "When may the police be called to enforce private rights? (Choose two correct answers)",
        "explanation": "Police act to protect private civil rights only subsidiarily when court protection is unavailable in time and rights risk forfeiture."
      },
      "ar": {
        "question": "متى يجوز استدعاء الشرطة لإنفاذ الحقوق الخاصة؟ (اختر إجابتين صحيحتين)",
        "explanation": "تتدخل الشرطة لحماية الحقوق الخاصة بصفة فرعية فقط إذا تعذر اللجوء الفوري للمحاكم وكان هناك خطر ضياع الحق."
      },
      "fa": {
        "question": "چه زمانی می‌توان برای استیفای حقوق خصوصی از پلیس کمک گرفت؟ (دو پاسخ صحیح را انتخاب کنید)",
        "explanation": "پلیس تنها به صورت فرعی برای حمایت از حقوق خصوصی وارد عمل می‌شود اگر دادگاه به موقع در دسترس نباشد و حق در معرض تضییع باشد."
      }
    }
  },
  {
    "id": "ihk-bgb-1",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Was ist Notwehr nach § 227 BGB?",
    "optionen": [
      "A) Diejenige Verteidigung, welche erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden.",
      "B) Das Recht, sich an einer Person zu rächen, die gestern einen Diebstahl begangen hat.",
      "C) Die Festnahme eines flüchtigen Tatverdächtigen auf frischer Tat.",
      "D) Die Zerstörung einer fremden Sache zur Abwendung einer drohenden Naturkatastrophe."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Diejenige Verteidigung, welche erforderlich ist, um einen gegenwärtigen rechtswidrigen Angriff von sich oder einem anderen abzuwenden.",
        "translations": {
          "ru": "Защита, необходимая для отражения наличного противоправного нападения на себя или другого человека.",
          "en": "The defense required to avert an imminent unlawful attack against oneself or another person.",
          "ar": "الدفاع الضروري واللازم لدرء اعتداء حال وغير مشروع على النفس أو الغير.",
          "fa": "دفاع لازمی که برای دفع حمله فعلی و غیرقانونی از خود یا دیگری ضروری است."
        }
      },
      {
        "id": "b",
        "text": "B) Das Recht, sich an einer Person zu rächen, die gestern einen Diebstahl begangen hat.",
        "translations": {
          "ru": "Право отомстить лицу, совершившему кражу вчера.",
          "en": "The right to take revenge on a person who committed a theft yesterday.",
          "ar": "الحق في الانتقام من شخص ارتكب سرقة بالأمس.",
          "fa": "حق انتقام‌جویی از فردی که دیروز مرتکب سرقت شده است."
        }
      },
      {
        "id": "c",
        "text": "C) Die Festnahme eines flüchtigen Tatverdächtigen auf frischer Tat.",
        "translations": {
          "ru": "Задержание скрывающегося подозреваемого с поличным.",
          "en": "The arrest of a fleeing suspect caught in the act.",
          "ar": "القبض على مشتبه به هارب أثناء التلبس بالجريمة.",
          "fa": "بازداشت مظنون در حال فرار در حین ارتکاب جرم."
        }
      },
      {
        "id": "d",
        "text": "D) Die Zerstörung einer fremden Sache zur Abwendung einer drohenden Naturkatastrophe.",
        "translations": {
          "ru": "Уничтожение чужой вещи для предотвращения угрозы стихийного бедствия.",
          "en": "The destruction of third-party property to avert an impending natural disaster.",
          "ar": "إتلاف ممتلكات الغير لدرء كارثة طبيعية وشيكة.",
          "fa": "تخریب اموال دیگران برای جلوگیری از بلایای طبیعی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "§ 227 Abs. 2 BGB definiert Notwehr als die erforderliche Verteidigung zur Abwehr eines gegenwärtigen und rechtswidrigen Angriffs auf ein rechtlich geschütztes Gut.",
    "translations": {
      "ru": {
        "question": "Что такое необходимая оборона согласно § 227 BGB?",
        "explanation": "§ 227 абз. 2 BGB определяет самооборону как защиту, необходимую для отражения наличного противоправного нападения."
      },
      "en": {
        "question": "What is self-defense according to § 227 BGB?",
        "explanation": "§ 227 (2) BGB defines self-defense as the defense necessary to avert an imminent unlawful attack on legally protected interests."
      },
      "ar": {
        "question": "ما هو الدفاع الشرعي بموجب الفقرة 227 من القانون المدني (BGB)؟",
        "explanation": "تعرف المادة 227 بند 2 الدفاع الشرعي بأنه الدفاع الضروري لدفع اعتداء حال وغير مشروع على مصلحة محمية قانوناً."
      },
      "fa": {
        "question": "دفاع مشروع بر اساس ماده ۲۲۷ قانون مدنی (BGB) چیست؟",
        "explanation": "ماده ۲۲۷ بند ۲ دفاع مشروع را دفاع ضروری برای دفع یک حمله فعلی و غیرقانونی به حقوق محافظت‌شده قانونی تعریف می‌کند."
      }
    }
  },
  {
    "id": "ihk-bgb-2",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche Merkmale kennzeichnen einen \"Angriff\" im Rahmen der Notwehr nach § 227 BGB?",
    "optionen": [
      "A) Jede von einem Menschen drohende oder ausgehende Verletzung rechtlich geschützter Güter oder Interessen.",
      "B) Ausschließlich tätliche Schläge gegen das Gesicht.",
      "C) Das Anbellen durch einen frei herumlaufenden Hund.",
      "D) Jeder Regenschauer, der das Dienstgebäude beschädigen könnte."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Jede von einem Menschen drohende oder ausgehende Verletzung rechtlich geschützter Güter oder Interessen.",
        "translations": {
          "ru": "Любое исходящее от человека или угрожающее с его стороны нарушение охраняемых законом благ или интересов.",
          "en": "Any violation of legally protected rights or interests threatened or inflicted by a human being.",
          "ar": "كل اعتداء صادر أو مهدد من إنسان ينتهك المصالح أو الحقوق المحمية قانوناً.",
          "fa": "هرگونه تعرض یا تهدید ناشی از رفتار انسان که به حقوق یا منافع قانونی آسیب بزند."
        }
      },
      {
        "id": "b",
        "text": "B) Ausschließlich tätliche Schläge gegen das Gesicht.",
        "translations": {
          "ru": "Исключительно физические удары по лицу.",
          "en": "Exclusively physical blows aimed at the face.",
          "ar": "الضربات البدنية الموجهة للوجه حصراً.",
          "fa": "صرفاً ضربات فیزیکی به صورت."
        }
      },
      {
        "id": "c",
        "text": "C) Das Anbellen durch einen frei herumlaufenden Hund.",
        "translations": {
          "ru": "Лай свободно бегающей собаки.",
          "en": "Barking by a freely roaming dog.",
          "ar": "نباح كلب طليق في الشارع.",
          "fa": "پارس کردن سگ رهاشده در خیابان."
        }
      },
      {
        "id": "d",
        "text": "D) Jeder Regenschauer, der das Dienstgebäude beschädigen könnte.",
        "translations": {
          "ru": "Любой ливень, который может повредить служебное здание.",
          "en": "Any rain shower that could potentially damage the facility.",
          "ar": "هطول الأمطار التي قد تضر بمبنى الخدمة.",
          "fa": "بارندگی شدیدی که ممکن است به ساختمان آسیب بزند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Ein Angriff ist immer ein menschliches Verhalten, das eine drohende oder unmittelbare Verletzung von Rechtsgütern darstellt. Tierangriffe fallen unter Notstand (§ 228 BGB).",
    "translations": {
      "ru": {
        "question": "Какие признаки характеризуют «нападение» (Angriff) в рамках необходимой обороны по § 227 BGB?",
        "explanation": "Нападение — это всегда действие человека. Нападения животных подпадают под крайнюю необходимость (§ 228 BGB)."
      },
      "en": {
        "question": "Which characteristics define an \"attack\" (Angriff) within self-defense under § 227 BGB?",
        "explanation": "An attack must always emanate from human conduct. Attacks by animals fall under necessity provisions (§ 228 BGB)."
      },
      "ar": {
        "question": "ما هي الخصائص التي تميز «الاعتداء» (Angriff) في إطار الدفاع الشرعي بموجب الفقرة 227 BGB؟",
        "explanation": "الاعتداء دائماً فعل بشري يهدد حقوقاً محمية. أما هجوم الحيوانات فيندرج تحت حالة الضرورة (§ 228 BGB)."
      },
      "fa": {
        "question": "چه ویژگی‌هایی معرف «حمله» (Angriff) در چارچوب دفاع مشروع ماده ۲۲۷ BGB است؟",
        "explanation": "حمله همواره ناشی از رفتار انسانی است. حمله حیوانات مشمول حالت اضطرار (§ 228 BGB) است."
      }
    }
  },
  {
    "id": "ihk-bgb-3",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Wann ist ein Angriff \"gegenwärtig\"?",
    "optionen": [
      "A) Wenn er unmittelbar bevorsteht, gerade stattfindet oder noch fortdauert.",
      "B) Wenn der Täter vor drei Stunden gedroht hat.",
      "C) Erst wenn das Opfer bereits schwere Verletzungen erlitten hat.",
      "D) Wenn der Täter sich bereits mit der Beute sicher im Ausland befindet."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wenn er unmittelbar bevorsteht, gerade stattfindet oder noch fortdauert.",
        "translations": {
          "ru": "Когда он непосредственно надвигается, происходит прямо сейчас или все еще продолжается.",
          "en": "When it is imminent, currently occurring, or still continuing.",
          "ar": "عندما يكون وشيك الوقوع مباشرة، أو يحدث حالياً، أو ما زال مستمراً.",
          "fa": "هنگامی که حمله قریب‌الوقوع باشد، هم‌اکنون در حال وقوع باشد یا همچنان ادامه داشته باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Wenn der Täter vor drei Stunden gedroht hat.",
        "translations": {
          "ru": "Когда преступник высказал угрозу три часа назад.",
          "en": "When the perpetrator made a threat three hours ago.",
          "ar": "إذا هدد الجاني بالاعتداء قبل ثلاث ساعات.",
          "fa": "هنگامی که مرتکب سه ساعت قبل تهدید کرده باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Erst wenn das Opfer bereits schwere Verletzungen erlitten hat.",
        "translations": {
          "ru": "Только после того, как жертва уже получила тяжелые травмы.",
          "en": "Only once the victim has already sustained severe injuries.",
          "ar": "فقط بعد أن يكون الضحية قد أصيب بجروح بالغة بالفعل.",
          "fa": "تنها پس از اینکه قربانی دچار جراحات شدید شده باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Wenn der Täter sich bereits mit der Beute sicher im Ausland befindet.",
        "translations": {
          "ru": "Когда преступник с добычей уже благополучно находится за границей.",
          "en": "When the perpetrator is already safely abroad with the loot.",
          "ar": "عندما يكون الجاني مع المسروقات بأمان في الخارج.",
          "fa": "هنگامی که سارق به همراه اموال مسروقه در خارج از کشور باشد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Gegenwärtigkeit liegt vor, wenn der Angriff unmittelbar bevorsteht, im Gange ist oder noch andauert.",
    "translations": {
      "ru": {
        "question": "Когда нападение считается «наличным / текущим» (gegenwärtig)?",
        "explanation": "Наличность нападения означает, что оно непосредственно угрожает, уже совершается или еще продолжается."
      },
      "en": {
        "question": "When is an attack considered \"imminent/present\" (gegenwärtig)?",
        "explanation": "Imminence/presence exists when the attack is immediately pending, underway, or continuing."
      },
      "ar": {
        "question": "متى يعتبر الاعتداء «حالاً» (gegenwärtig)؟",
        "explanation": "يكون الاعتداء حالاً إذا كان وشيك الوقوع مباشرة أو جارياً في اللحظة نفسها أو لا يزال مستمراً."
      },
      "fa": {
        "question": "چه زمانی یک حمله «فعلی و در حال وقوع» (gegenwärtig) تلقی می‌شود؟",
        "explanation": "حمله زمانی فعلی است که قریب‌الوقوع باشد، در جریان باشد یا هنوز تداوم داشته باشد."
      }
    }
  },
  {
    "id": "ihk-bgb-4",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Wann ist eine Notwehrhandlung \"erforderlich\"?",
    "optionen": [
      "A) Wenn sie geeignet ist, den Angriff sicher und endgültig zu beenden, und unter gleich wirksamen Mitteln das relativ mildeste darstellt.",
      "B) Wenn die Notwehrhandlung streng mit dem Wert des angegriffenen Rechtsguts abgewogen wurde.",
      "C) Wenn vorher immer die schriftliche Erlaubnis des Kunden eingeholt wurde.",
      "D) Wenn dem Angreifer maximaler Schaden zugefügt wird."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wenn sie geeignet ist, den Angriff sicher und endgültig zu beenden, und unter gleich wirksamen Mitteln das relativ mildeste darstellt.",
        "translations": {
          "ru": "Когда она пригодна для надежного прекращения нападения и является наиболее мягким из одинаково эффективных средств.",
          "en": "When it is capable of reliably terminating the attack and represents the mildest among equally effective means.",
          "ar": "عندما تكون كفيلة بإنهاء الاعتداء بشكل قاطع وتمثل أخف وسيلة من بين الوسائل الفعالة المتساوية.",
          "fa": "هنگامی که برای پایان دادن قطعی به حمله مناسب بوده و خفیف‌ترین وسیله مؤثر در میان گزینه‌های هم‌تراز باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Wenn die Notwehrhandlung streng mit dem Wert des angegriffenen Rechtsguts abgewogen wurde.",
        "translations": {
          "ru": "Когда оборона строго соразмерена со стоимостью защищаемого блага.",
          "en": "When the defensive act has been strictly balanced against the monetary value of the protected interest.",
          "ar": "عندما يتم وزن فعل الدفاع بدقة مع القيمة المالية للحق المعتدى عليه.",
          "fa": "هنگامی که اقدام دفاعی دقیقاً با ارزش مالی حق مورد تعرض مقایسه و سنجیده شده باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Wenn vorher immer die schriftliche Erlaubnis des Kunden eingeholt wurde.",
        "translations": {
          "ru": "Когда предварительно получено письменное разрешение клиента.",
          "en": "When written permission from the client was obtained beforehand.",
          "ar": "عند الحصول على إذن خطي مسبق من العميل دائماً.",
          "fa": "هنگامی که از قبل مجوز کتبی مشتری اخذ شده باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Wenn dem Angreifer maximaler Schaden zugefügt wird.",
        "translations": {
          "ru": "Когда нападающему причинен максимально возможный ущерб.",
          "en": "When maximum possible injury is inflicted on the assailant.",
          "ar": "عند إلحاق أقصى ضرر ممكن بالشخص المعتدي.",
          "fa": "هنگامی که بیشترین آسیب ممکن به مهاجم وارد شود."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Erforderlich ist das mildeste, gleichermaßen effektive Mittel zur sofortigen und dauerhaften Angriffsbeendigung. Eine Güterabwägung findet bei Notwehr grundsätzlich nicht statt!",
    "translations": {
      "ru": {
        "question": "Когда действие при необходимой обороне считается «необходимым» (erforderlich)?",
        "explanation": "Необходимым является самое мягкое из равных по эффективности средств для прекращения нападения. Взвешивания ценностей благ при самообороне не требуется."
      },
      "en": {
        "question": "When is an act of self-defense considered \"necessary\" (erforderlich)?",
        "explanation": "Necessary means the mildest equally effective measure to end the attack immediately. Proportionality balancing of goods does not apply in self-defense!"
      },
      "ar": {
        "question": "متى يُعتبر فعل الدفاع الشرعي «ضرورياً» (erforderlich)؟",
        "explanation": "الضروري هو أخف وسيلة فعالة متساوية لإنهاء الهجوم فوراً. ولا يلزم إجراء موازنة تفاضلية بين الحقوق في الدفاع الشرعي."
      },
      "fa": {
        "question": "چه زمانی اقدام در دفاع مشروع «ضروری» (erforderlich) تلقی می‌شود؟",
        "explanation": "اقدام ضروری یعنی خفیف‌ترین وسیله مؤثر برای توقف فوری حمله. در دفاع مشروع اصولاً سنجش ارزش کالاها انجام نمی‌شود."
      }
    }
  },
  {
    "id": "ihk-bgb-5",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Worin unterscheidet sich der Defensivnotstand (§ 228 BGB) vom Aggressivnotstand (§ 904 BGB)? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Bei § 228 BGB geht die Gefahr von der Sache selbst aus, die beschädigt oder zerstört wird.",
      "B) Bei § 904 BGB wird auf eine völlig unbeteiligte Sache eines Dritten zugegriffen, um eine fremde Gefahr abzuwehren.",
      "C) Bei § 228 BGB muss immer Schadensersatz an den Eigentümer gezahlt werden.",
      "D) Bei § 904 BGB darf niemals Schadensersatz verlangt werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Bei § 228 BGB geht die Gefahr von der Sache selbst aus, die beschädigt oder zerstört wird.",
        "translations": {
          "ru": "При § 228 BGB опасность исходит от самой вещи, которая повреждается или уничтожается.",
          "en": "In § 228 BGB, the danger originates from the very item that is damaged or destroyed.",
          "ar": "في المادة 228 BGB يصدر الخطر من الشيء نفسه الذي يتعرض للضرر أو الإتلاف.",
          "fa": "در ماده ۲۲۸ BGB، خطر از خود همان مالی ناشی می‌شود که تخریب می‌گردد."
        }
      },
      {
        "id": "b",
        "text": "B) Bei § 904 BGB wird auf eine völlig unbeteiligte Sache eines Dritten zugegriffen, um eine fremde Gefahr abzuwehren.",
        "translations": {
          "ru": "При § 904 BGB воздействие оказывается на совершенно непричастную чужую вещь для устранения внешней опасности.",
          "en": "In § 904 BGB, an entirely uninvolved third-party item is accessed to ward off an external danger.",
          "ar": "في المادة 904 BGB يتم استخدام شيء غير معني لطرف ثالث لدفع خطر خارجي.",
          "fa": "در ماده ۹۰۴ BGB، از مال کاملاً بی‌طرف شخص ثالث برای دفع خطر خارجی استفاده می‌شود."
        }
      },
      {
        "id": "c",
        "text": "C) Bei § 228 BGB muss immer Schadensersatz an den Eigentümer gezahlt werden.",
        "translations": {
          "ru": "При § 228 BGB всегда необходимо выплачивать компенсацию собственнику.",
          "en": "In § 228 BGB, compensation must always be paid to the owner.",
          "ar": "في المادة 228 BGB يجب دائماً دفع تعويض للمالك.",
          "fa": "در ماده ۲۲۸ BGB، همواره باید خسارت به مالک پرداخت گردد."
        }
      },
      {
        "id": "d",
        "text": "D) Bei § 904 BGB darf niemals Schadensersatz verlangt werden.",
        "translations": {
          "ru": "При § 904 BGB никогда нельзя требовать возмещения ущерба.",
          "en": "In § 904 BGB, damages may never be claimed.",
          "ar": "في المادة 904 BGB لا يجوز المطالبة بالتعويض أبداً.",
          "fa": "در ماده ۹۰۴ BGB هرگز نمی‌توان مطالبه خسارت کرد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§ 228 BGB (Defensivnotstand): Gefahr geht von der Sache aus (z. B. beißender Hund). § 904 BGB (Aggressivnotstand): Zugriff auf unbeteiligte Sache Dritter (z. B. Feuerlöscher des Nachbarn) – hier besteht Schadensersatzpflicht.",
    "translations": {
      "ru": {
        "question": "В чем разница между оборонительной (§ 228 BGB) и агрессивной (§ 904 BGB) крайней необходимостью? (Выберите 2 ответа)",
        "explanation": "§ 228: опасность исходит от самой вещи (кусающая собака). § 904: использование непричастной вещи (огнетушитель соседа) с обязанностью возмещения вреда."
      },
      "en": {
        "question": "What distinguishes defensive necessity (§ 228 BGB) from aggressive necessity (§ 904 BGB)? (Choose two correct answers)",
        "explanation": "§ 228 BGB: danger arises from the item itself. § 904 BGB: accessing uninvolved property with an obligation to pay compensation."
      },
      "ar": {
        "question": "ما الفرق بين حالة الضرورة الدفاعية (§ 228 BGB) والضرورة الهجومية (§ 904 BGB)؟ (اختر إجابتين صحيحتين)",
        "explanation": "المادة 228: الخطر ينبع من الشيء نفسه. المادة 904: استخدام ملك طرف ثالث بريء لدفع خطر أعظم مع الالتزام بالتعويض."
      },
      "fa": {
        "question": "چه تفاوتی میان اضطرار تدافعی (§ 228 BGB) و اضطرار تهاجمی (§ 904 BGB) وجود دارد؟ (دو پاسخ صحیح)",
        "explanation": "ماده ۲۲۸: خطر از خود مال نشات می‌گیرد. ماده ۹۰۴: استفاده از مال بی‌طرف با الزام به جبران خسارت وارده."
      }
    }
  },
  {
    "id": "ihk-bgb-6",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Was ist \"Besitzdiener\" nach § 855 BGB und welche Rechte hat er?",
    "optionen": [
      "A) Jemand, der die tatsächliche Gewalt über eine Sache für einen anderen in dessen Haushalt oder Erwerbsgeschäft ausübt (z. B. Wachpersonal); er darf die Besitzschutzrechte des Besitzers ausüben.",
      "B) Ein Mieter, der eine Wohnung gemietet hat.",
      "C) Ein Gerichtsvollzieher, der Pfändungen vornimmt.",
      "D) Ein Dienstleister, der keinerlei Weisungen des Auftraggebers befolgen muss."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Jemand, der die tatsächliche Gewalt über eine Sache für einen anderen in dessen Haushalt oder Erwerbsgeschäft ausübt (z. B. Wachpersonal); er darf die Besitzschutzrechte des Besitzers ausüben.",
        "translations": {
          "ru": "Лицо, осуществляющее фактическую власть над вещью в интересах другого в его хозяйстве или на предприятии (например, охрана); он вправе осуществлять защиту владения.",
          "en": "Someone who exercises physical control over property for another in their household or business (e.g. security guards); they may exercise the possessor's protection rights.",
          "ar": "الشخص الذي يمارس السيطرة المادية على الشيء لصالح غيره في منزله أو منشأته (مثل حراس الأمن)؛ ويحق له ممارسة حقوق حماية الحيازة.",
          "fa": "کسی که تسلط فیزیکی بر مالی را به نمایندگی از دیگری در منزل یا کسب‌وکار او اعمال می‌کند (مانند نگهبان)؛ او می‌تواند از حقوق محافظت از تصرف استفاده کند."
        }
      },
      {
        "id": "b",
        "text": "B) Ein Mieter, der eine Wohnung gemietet hat.",
        "translations": {
          "ru": "Арендатор, снявший квартиру.",
          "en": "A tenant who rented an apartment.",
          "ar": "المستأجر الذي استأجر شقة سكنية.",
          "fa": "مستأجری که خانه‌ای را اجاره کرده است."
        }
      },
      {
        "id": "c",
        "text": "C) Ein Gerichtsvollzieher, der Pfändungen vornimmt.",
        "translations": {
          "ru": "Судебный исполнитель, производящий арест имущества.",
          "en": "A bailiff performing asset seizures.",
          "ar": "المحضر القضائي الذي يقوم بالحجز على الأموال.",
          "fa": "مامور اجرای احکام دادگاه که توقیف اموال را انجام می‌دهد."
        }
      },
      {
        "id": "d",
        "text": "D) Ein Dienstleister, der keinerlei Weisungen des Auftraggebers befolgen muss.",
        "translations": {
          "ru": "Исполнитель, не обязанный выполнять указания заказчика.",
          "en": "A contractor who is free from following any instructions of the client.",
          "ar": "مقدم خدمة لا يلتزم بأي تعليمات من صاحب العمل.",
          "fa": "ارائه‌دهنده خدمتی که ملزم به پیروی از دستورات کارفرما نیست."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Sicherheitskräfte sind als Angestellte oder Beauftragte Besitzdiener (§ 855 BGB) und dürfen Besitzkehr und Besitzwehr (§ 859 BGB) für den Besitzherrn wahrnehmen.",
    "translations": {
      "ru": {
        "question": "Кто такой «слуга владения» (Besitzdiener) согласно § 855 BGB и какими правами он обладает?",
        "explanation": "Охранники являются слугами владения (§ 855 BGB) и могут применять защиту владения (§ 859 BGB) в интересах владельца."
      },
      "en": {
        "question": "What is a \"possession servant\" (Besitzdiener) under § 855 BGB and what rights do they hold?",
        "explanation": "Security personnel act as possession servants (§ 855 BGB) and may exercise defense and recovery of possession (§ 859 BGB) for the master."
      },
      "ar": {
        "question": "من هو «خادم الحيازة» (Besitzdiener) بموجب الفقرة 855 BGB وما هي حقوقه؟",
        "explanation": "حراس الأمن هم خدام حيازة (§ 855 BGB) ويحق لهم ممارسة الدفاع عن الحيازة واستردادها (§ 859 BGB) لصالح الحائز الأصلي."
      },
      "fa": {
        "question": "«خادم تصرف» (Besitzdiener) بر اساس ماده ۸۵۵ BGB کیست و چه حقوقی دارد؟",
        "explanation": "پرسنل امنیتی خادم تصرف محسوب شده و حق دفاع از تصرف و بازپس‌گیری فوری آن (§ 859 BGB) را به نمایندگی از مالک دارند."
      }
    }
  },
  {
    "id": "ihk-bgb-7",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche Rechte umfasst das Besitzschutzrecht nach § 859 BGB? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) § 859 Abs. 1 BGB (Besitzwehr): Der Besitzer darf sich verbotener Eigenmacht mit Gewalt erwehren.",
      "B) § 859 Abs. 2 BGB (Besitzkehr): Wird eine bewegliche Sache auf frischer Tat weggenommen, darf sie dem Täter sofort wieder abgenommen werden.",
      "C) Das lebenslange Verbot des Betretens aller Bahnhöfe bundesweit.",
      "D) Die sofortige Einziehung des Reisepasses des Störers."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) § 859 Abs. 1 BGB (Besitzwehr): Der Besitzer darf sich verbotener Eigenmacht mit Gewalt erwehren.",
        "translations": {
          "ru": "§ 859 абз. 1 BGB (защита владения): Владелец вправе силой защищаться от самоуправного нарушения владения.",
          "en": "§ 859 (1) BGB (defense of possession): The possessor may use force to defend against unlawful interference.",
          "ar": "المادة 859 فقرة 1 BGB (الدفاع عن الحيازة): يجوز للحائز رد التصرف غير المشروع بالقوة.",
          "fa": "ماده ۸۵۹ بند ۱ BGB (دفاع از تصرف): متصرف می‌تواند با اعمال زور در برابر تصرف خودسرانه مقاومت کند."
        }
      },
      {
        "id": "b",
        "text": "B) § 859 Abs. 2 BGB (Besitzkehr): Wird eine bewegliche Sache auf frischer Tat weggenommen, darf sie dem Täter sofort wieder abgenommen werden.",
        "translations": {
          "ru": "§ 859 абз. 2 BGB (возврат владения): Если движимая вещь отнята с поличным, ее можно немедленно силой отобрать у нарушителя.",
          "en": "§ 859 (2) BGB (recovery of possession): If movable property is stolen in the act, it may immediately be retaken by force.",
          "ar": "المادة 859 فقرة 2 BGB (استرداد الحيازة): إذا سُلب منقول متلبساً بالجرم، يجوز استرداده من الفاعل فوراً بالقوة.",
          "fa": "ماده ۸۵۹ بند ۲ BGB (بازپس‌گیری تصرف): اگر مال منقولی در حین ارتکاب جرم ربوده شود، می‌توان فوراً آن را از مرتکب بازپس گرفت."
        }
      },
      {
        "id": "c",
        "text": "C) Das lebenslange Verbot des Betretens aller Bahnhöfe bundesweit.",
        "translations": {
          "ru": "Пожизненный запрет на вход на все железнодорожные вокзалы страны.",
          "en": "A lifelong ban on entering all railway stations nationwide.",
          "ar": "المنع مدى الحياة من دخول جميع محطات القطارات في ألمانيا.",
          "fa": "ممنوعیت مادام‌العمر ورود به کلیه ایستگاه‌های قطار سراسر کشور."
        }
      },
      {
        "id": "d",
        "text": "D) Die sofortige Einziehung des Reisepasses des Störers.",
        "translations": {
          "ru": "Немедленное изъятие заграничного паспорта нарушителя.",
          "en": "Immediate confiscation of the troublemaker's passport.",
          "ar": "المصادرة الفورية لجواز سفر الشخص المثير للشغب.",
          "fa": "توقیف فوری گذرنامه فرد اخلال‌گر."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§ 859 BGB gewährt dem Besitzer (und Besitzdiener) die Besitzwehr (Abwehr verbotener Eigenmacht) und die Besitzkehr (Wiedererlangung entzogener Sachen auf frischer Tat).",
    "translations": {
      "ru": {
        "question": "Какие права включает защита владения согласно § 859 BGB? (Выберите 2 ответа)",
        "explanation": "§ 859 BGB гарантирует владельцу право на защиту владения (Besitzwehr) и право на немедленный возврат вещи с поличным (Besitzkehr)."
      },
      "en": {
        "question": "Which rights are included in the protection of possession under § 859 BGB? (Choose two correct answers)",
        "explanation": "§ 859 BGB grants possessors (and servants) defense of possession (Besitzwehr) and immediate recovery in flagrante (Besitzkehr)."
      },
      "ar": {
        "question": "ما هي الحقوق التي تشملها حماية الحيازة بموجب الفقرة 859 BGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "تمنح المادة 859 الحائز وخادم الحيازة حق الدفاع عن الحيازة (Besitzwehr) وحق استرداد المسلوب فوراً (Besitzkehr)."
      },
      "fa": {
        "question": "حقوق محافظت از تصرف طبق ماده ۸۵۹ BGB شامل چه مواردی است؟ (دو پاسخ صحیح)",
        "explanation": "ماده ۸۵۹ BGB به متصرف حق دفاع از تصرف (Besitzwehr) و بازپس‌گیری فوری مال در حین ارتکاب جرم (Besitzkehr) را اعطا می‌کند."
      }
    }
  },
  {
    "id": "ihk-bgb-8",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Was versteht man unter \"Verbotener Eigenmacht\" nach § 858 BGB?",
    "optionen": [
      "A) Wer dem Besitzer ohne dessen Willen den Besitz entzieht oder ihn im Besitz stört, sofern nicht das Gesetz die Entziehung oder Störung gestattet.",
      "B) Das rechtmäßige Abschleppen eines Falschparkers durch die Polizei.",
      "C) Die Rückgabe einer Fundsache an das Fundbüro.",
      "D) Das ordnungsgemäße Abschließen eines gemieteten Büros."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer dem Besitzer ohne dessen Willen den Besitz entzieht oder ihn im Besitz stört, sofern nicht das Gesetz die Entziehung oder Störung gestattet.",
        "translations": {
          "ru": "Лишение владельца владения против его воли или создание помех владению, если это не разрешено законом.",
          "en": "Anyone who deprives the possessor of possession or disturbs possession against their will, unless authorized by law.",
          "ar": "كل من يسلب الحائز حيازته رغماً عن إرادته أو يعكر صفو حيازته دون مسوغ قانوني.",
          "fa": "هر کس که بدون رضایت متصرف، تصرف را از او سلب کند یا در آن مزاحمت ایجاد نماید، مگر در مواردی که قانون اجازه داده باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Das rechtmäßige Abschleppen eines Falschparkers durch die Polizei.",
        "translations": {
          "ru": "Законная эвакуация неправильно припаркованного автомобиля полицией.",
          "en": "Lawful towing of an illegally parked vehicle by the police.",
          "ar": "السحب القانوني لسيارة متوقفة بشكل مخالف من قبل الشرطة.",
          "fa": "حمل قانونی خودروی پارک دوبل شده توسط پلیس با جرثقیل."
        }
      },
      {
        "id": "c",
        "text": "C) Die Rückgabe einer Fundsache an das Fundbüro.",
        "translations": {
          "ru": "Возврат найденной вещи в бюро находок.",
          "en": "Returning a found item to the lost and found office.",
          "ar": "إرجاع الشيء المعثور عليه إلى مكتب المفقودات.",
          "fa": "تحویل مال پیدا شده به اداره اشیای گمشده."
        }
      },
      {
        "id": "d",
        "text": "D) Das ordnungsgemäße Abschließen eines gemieteten Büros.",
        "translations": {
          "ru": "Надлежащее закрытие на замок арендованного офиса.",
          "en": "Proper locking of a rented office room.",
          "ar": "الإغلاق المحكم والنظامي لمكتب مستأجر.",
          "fa": "قفل کردن صحیح و اصولی دفتر کار اجاره‌ای."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Verbotene Eigenmacht ist jede unbefugte Entziehung oder Störung des tatsächlichen Besitzes ohne den Willen des Besitzers und ohne gesetzliche Ermächtigung.",
    "translations": {
      "ru": {
        "question": "Что понимается под «самовольным нарушением владения» (Verbotene Eigenmacht) согласно § 858 BGB?",
        "explanation": "Самоволие — это несанкционированное лишение или нарушение владения против воли владельца без законного разрешения."
      },
      "en": {
        "question": "What is understood by \"unlawful interference with possession\" (Verbotene Eigenmacht) under § 858 BGB?",
        "explanation": "Unlawful interference is any unauthorized deprivation or disturbance of possession against the will of the possessor."
      },
      "ar": {
        "question": "ماذا يقصد بمفهوم «التصرف غير المشروع في الحيازة» بموجب الفقرة 858 BGB؟",
        "explanation": "هو سلب الحيازة أو إزعاج الحائز دون رضاه ودون إذن تشريعي صريح."
      },
      "fa": {
        "question": "مفهوم «تصرف خودسرانه و غیرقانونی» (Verbotene Eigenmacht) طبق ماده ۸۵۸ BGB چیست؟",
        "explanation": "سلب یا ایجاد مزاحمت در تصرف بدون رضایت متصرف و بدون مجوز قانونی."
      }
    }
  },
  {
    "id": "ihk-bgb-9",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche Voraussetzungen müssen für die Selbsthilfe nach § 229 BGB vorliegen? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Es muss ein zivilrechtlicher Anspruch bestehen.",
      "B) Obrigkeitliche Hilfe (Polizei/Gericht) ist nicht rechtzeitig zu erlangen und ohne sofortiges Eingreifen droht Rechtsverlust.",
      "C) Der Schuldner muss zuvor eine notarielle Schuldanerkennung unterzeichnet haben.",
      "D) Es muss immer ein lebensgefährlicher Angriff vorliegen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Es muss ein zivilrechtlicher Anspruch bestehen.",
        "translations": {
          "ru": "Должно существовать гражданско-правовое требование/претензия.",
          "en": "A valid civil law claim must exist.",
          "ar": "يجب أن يكون هناك حق أو مطالبة مدنية قائمة.",
          "fa": "باید یک ادعا یا حق حقوقی-مدنی معتبر وجود داشته باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Obrigkeitliche Hilfe (Polizei/Gericht) ist nicht rechtzeitig zu erlangen und ohne sofortiges Eingreifen droht Rechtsverlust.",
        "translations": {
          "ru": "Помощь органов власти (полиции/суда) не может быть получена вовремя, и без немедленного вмешательства грозит потеря права.",
          "en": "Official assistance (police/court) cannot be obtained in time, and without immediate intervention the realization of the claim would be endangered.",
          "ar": "تعذر الحصول على مساعدة السلطات (الشرطة/القضاء) في الوقت المناسب مع وجود خطر ضياع الحق دون تدخل فوري.",
          "fa": "امکان دسترسی به موقع به کمک مراجع قانونی (پلیس/دادگاه) نباشد و بدون اقدام فوری خطر تضییع حق وجود داشته باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Der Schuldner muss zuvor eine notarielle Schuldanerkennung unterzeichnet haben.",
        "translations": {
          "ru": "Должник должен предварительно подписать нотариальное признание долга.",
          "en": "The debtor must have previously signed a notarial debt acknowledgment.",
          "ar": "يجب أن يكون المدين قد وقع مسبقاً على إقرار دين موثق عند كاتب العدل.",
          "fa": "بدهکار باید قبلاً اقرارنامه محضری بدهی را امضا کرده باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Es muss immer ein lebensgefährlicher Angriff vorliegen.",
        "translations": {
          "ru": "Всегда должно иметь место опасное для жизни нападение.",
          "en": "A life-threatening attack must always be present.",
          "ar": "يجب أن يكون هناك اعتداء مهدد للحياة دائماً.",
          "fa": "همیشه باید حمله‌ای تهدیدکننده جان وجود داشته باشد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Selbsthilfe nach § 229 BGB sichert zivilrechtliche Ansprüche (z. B. Schadensersatz, Zechprellerei), wenn staatliche Hilfe nicht rechtzeitig erreichbar ist und Fluchtgefahr besteht.",
    "translations": {
      "ru": {
        "question": "Какие условия необходимы для самопомощи согласно § 229 BGB? (Выберите 2 ответа)",
        "explanation": "§ 229 BGB обеспечивает требования гражданского права, когда власти недоступны вовремя и есть риск побега должника."
      },
      "en": {
        "question": "Which conditions must exist for self-help under § 229 BGB? (Choose two correct answers)",
        "explanation": "Self-help (§ 229 BGB) secures civil claims when official assistance is not available in time and there is danger of flight."
      },
      "ar": {
        "question": "ما هي الشروط الواجب توافرها للمساعدة الذاتية بموجب الفقرة 229 BGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "تحمي المساعدة الذاتية المطالبات المدنية عند تعذر وصول مساعدة السلطات في الوقت المناسب ووجود خطر فرار المدين."
      },
      "fa": {
        "question": "چه شرایطی برای احقاق حق شخصی (Selbsthilfe) طبق ماده ۲۲۹ BGB لازم است؟ (دو پاسخ صحیح)",
        "explanation": "ماده ۲۲۹ BGB مطالبات مدنی را در صورت عدم دسترسی به موقع به پلیس و وجود خطر فرار بدهکار تأمین و تضمین می‌کند."
      }
    }
  },
  {
    "id": "ihk-bgb-10",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Wer übt das Hausrecht nach § 903 / § 858 ff. BGB auf einem befriedeten Besitztum aus?",
    "optionen": [
      "A) Der Eigentümer, Mieter oder Pächter (Hausrechtsinhaber) sowie von ihm bevollmächtigte Personen wie das Sicherheitspersonal.",
      "B) Jeder Besucher, der eine Eintrittskarte gekauft hat.",
      "C) Ausschließlich die örtliche Stadtverwaltung.",
      "D) Niemand, da alle Gebäude in Deutschland frei zugänglich sein müssen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Der Eigentümer, Mieter oder Pächter (Hausrechtsinhaber) sowie von ihm bevollmächtigte Personen wie das Sicherheitspersonal.",
        "translations": {
          "ru": "Собственник, арендатор или наниматель (владелец права), а также уполномоченные им лица, такие как персонал охраны.",
          "en": "The owner, tenant, or leaseholder (domiciliary holder) as well as persons authorized by them, such as security staff.",
          "ar": "المالك أو المستأجر أو المستثمر (صاحب حق المكان) وكذلك الأشخاص المفوضون من قبله كحراس الأمن.",
          "fa": "مالک، مستأجر یا بهره‌بردار قانونی و همچنین افراد دارای وکالت از سوی او مانند پرسنل حراست."
        }
      },
      {
        "id": "b",
        "text": "B) Jeder Besucher, der eine Eintrittskarte gekauft hat.",
        "translations": {
          "ru": "Каждый посетитель, купивший входной билет.",
          "en": "Every visitor who bought an admission ticket.",
          "ar": "كل زائر اشترى تذكرة دخول.",
          "fa": "هر بازدیدکننده‌ای که بلیط ورودی خریده باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Ausschließlich die örtliche Stadtverwaltung.",
        "translations": {
          "ru": "Исключительно местная городская администрация.",
          "en": "Exclusively the local municipal administration.",
          "ar": "إدارة البلدية المحلية حصراً.",
          "fa": "صرفاً شهرداری محلی."
        }
      },
      {
        "id": "d",
        "text": "D) Niemand, da alle Gebäude in Deutschland frei zugänglich sein müssen.",
        "translations": {
          "ru": "Никто, так как все здания в Германии должны быть общедоступны.",
          "en": "Nobody, since all buildings in Germany must be freely accessible.",
          "ar": "لا أحد، لأن جميع المباني في ألمانيا يجب أن تكون متاحة للجميع مجاناً.",
          "fa": "هیچ‌کس، زیرا تمامی ساختمان‌ها در آلمان باید ورود آزاد داشته باشند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Das Hausrecht steht dem Inhaber der tatsächlichen Sachherrschaft zu. Durch Dienstanweisung/Vertrag wird das Sicherheitspersonal zur Ausübung bevollmächtigt.",
    "translations": {
      "ru": {
        "question": "Кто осуществляет право хозяина объекта (Hausrecht) на огороженной территории согласно §§ 903, 858 BGB?",
        "explanation": "Право хозяина принадлежит владельцу объекта. Охранники уполномочиваются договором/инструкцией на его осуществление."
      },
      "en": {
        "question": "Who exercises domiciliary rights (Hausrecht) under § 903 / § 858 ff. BGB on an enclosed property?",
        "explanation": "Domiciliary authority belongs to the legal possessor/owner and is delegated to security guards by contractual authority."
      },
      "ar": {
        "question": "من يمارس حق المكان (Hausrecht) بموجب الفقرة 903 / 858 BGB في العقارات المحصورة؟",
        "explanation": "حق المكان للمالك أو الحائز الفعلي، ويتم تفويض حراس الأمن بممارسته بموجب عقد الحراسة وتعليمات الخدمة."
      },
      "fa": {
        "question": "چه کسی حق مالکانه بر ملک (Hausrecht) را طبق ماده ۹۰۳ و ۸۵۸ BGB در یک ملک محصور اعمال می‌کند؟",
        "explanation": "حق تصمیم‌گیری در ملک متعلق به مالک/متصرف است و از طریق قرارداد و دستورالعمل به پرسنل حراست تفویض می‌شود."
      }
    }
  },
  {
    "id": "ihk-bgb-11",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Wann erlischt das Hausverbot, das einem Randalierer in einer Diskothek erteilt wurde? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Mit Ablauf der ausgesprochenen Befristung.",
      "B) Durch ausdrücklichen Widerruf durch den Hausrechtsinhaber.",
      "C) Automatisch am nächsten Morgen um 06:00 Uhr.",
      "D) Sobald der Randalierer sich bei Freunden entschuldigt hat."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Mit Ablauf der ausgesprochenen Befristung.",
        "translations": {
          "ru": "По истечении установленного срока запрета.",
          "en": "Upon expiration of the specified time limit.",
          "ar": "بانقضاء المدة الزمنية المحددة في قرار المنع.",
          "fa": "با انقضای مدت زمان تعیین‌شده در حکم ممنوعیت ورود."
        }
      },
      {
        "id": "b",
        "text": "B) Durch ausdrücklichen Widerruf durch den Hausrechtsinhaber.",
        "translations": {
          "ru": "Путем прямого отзыва запрета владельцем права на объект.",
          "en": "By explicit revocation by the domiciliary rights holder.",
          "ar": "عبر الإلغاء الصريح للقرار من قبل صاحب حق المكان.",
          "fa": "از طریق لغو صریح توسط دارنده حق مالکانه ملک."
        }
      },
      {
        "id": "c",
        "text": "C) Automatisch am nächsten Morgen um 06:00 Uhr.",
        "translations": {
          "ru": "Автоматически на следующее утро в 06:00.",
          "en": "Automatically the next morning at 06:00.",
          "ar": "تلقائياً في صباح اليوم التالي الساعة 06:00.",
          "fa": "به صورت خودکار رأس ساعت ۶:۰۰ صبح روز بعد."
        }
      },
      {
        "id": "d",
        "text": "D) Sobald der Randalierer sich bei Freunden entschuldigt hat.",
        "translations": {
          "ru": "Как только дебошир извинился перед своими друзьями.",
          "en": "As soon as the troublemaker apologized to his friends.",
          "ar": "بمجرد أن يعتذر الشخص المثير للشغب لأصدقائه.",
          "fa": "به محض اینکه فرد خاطی از دوستانش عذرخواهی کند."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Ein Hausverbot bleibt solange wirksam, wie es befristet ausgesprochen wurde oder bis es vom Hausrechtsinhaber/Bevollmächtigten widerrufen wird.",
    "translations": {
      "ru": {
        "question": "Когда прекращается действие запрета на посещение (Hausverbot), вынесенного нарушителю в дискотеке? (Выберите 2 ответа)",
        "explanation": "Запрет на посещение действует до истечения срока или до его явной отмены правообладателем."
      },
      "en": {
        "question": "When does a ban from premises (Hausverbot) issued to a rioter in a discotheque expire? (Choose two correct answers)",
        "explanation": "A premises ban remains in effect until its fixed term expires or it is explicitly revoked by the owner/authorized agent."
      },
      "ar": {
        "question": "متى ينتهي سريان منع الدخول (Hausverbot) الصادر بحق شخص مشاغب في ديسكو؟ (اختر إجابتين صحيحتين)",
        "explanation": "يظل منع الدخول سارياً طوال مدته المحددة أو حتى يلغيه صاحب الحق صراحة."
      },
      "fa": {
        "question": "چه زمانی حکم ممنوعیت ورود به محل (Hausverbot) که برای فرد خاطی در دیسکو صادر شده منقضی می‌شود؟ (دو پاسخ صحیح)",
        "explanation": "ممنوعیت ورود تا پایان مهلت زمانی مشخص‌شده یا تا زمان لغو صریح آن توسط دارنده حق معتبر باقی می‌ماند."
      }
    }
  },
  {
    "id": "ihk-bgb-12",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Darf ein Sicherheitsmitarbeiter einen Besucher am Einlass nach § 903 BGB abweisen, wenn dieser die Einlassbedingungen (z. B. Ausweiskontrolle, Taschenkontrolle) verweigert?",
    "optionen": [
      "A) Ja, im Rahmen der Ausübung des Hausrechts kann der Zutritt an Bedingungen geknüpft und bei Verweigerung verwehrt werden.",
      "B) Nein, jeder Bürger hat ein verfassungsrechtliches Recht auf Zutritt zu jeder Veranstaltung.",
      "C) Nur, wenn die Polizei vorher schriftlich zugestimmt hat.",
      "D) Nur, wenn der Besucher bereits handgreiflich geworden ist."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ja, im Rahmen der Ausübung des Hausrechts kann der Zutritt an Bedingungen geknüpft und bei Verweigerung verwehrt werden.",
        "translations": {
          "ru": "Да, в рамках осуществления права хозяина объекта доступ может быть обусловлен требованиями и запрещен при отказе.",
          "en": "Yes, exercising domiciliary rights allows conditioning entry upon rules and denying access upon refusal.",
          "ar": "نعم، يجوز في إطار ممارسة حق المكان اشتراط شروط للدخول ومنع من يرفض الالتزام بها.",
          "fa": "بله، در چارچوب اعمال حق مالکانه می‌توان ورود را مشروط به رعایت ضوابط کرد و در صورت امتناع از ورود جلوگیری نمود."
        }
      },
      {
        "id": "b",
        "text": "B) Nein, jeder Bürger hat ein verfassungsrechtliches Recht auf Zutritt zu jeder Veranstaltung.",
        "translations": {
          "ru": "Нет, каждый гражданин имеет конституционное право на доступ на любое мероприятие.",
          "en": "No, every citizen has a constitutional right to enter any event.",
          "ar": "لا، كل مواطن له حق دستوري في دخول أي فعالية.",
          "fa": "خیر، هر شهروندی حق قانونی ورود به هر رویدادی را دارد."
        }
      },
      {
        "id": "c",
        "text": "C) Nur, wenn die Polizei vorher schriftlich zugestimmt hat.",
        "translations": {
          "ru": "Только если полиция предварительно дала письменное согласие.",
          "en": "Only if the police have previously agreed in writing.",
          "ar": "فقط إذا وافقت الشرطة خطياً مسبقاً على ذلك.",
          "fa": "تنها در صورتی که پلیس قبلاً کتباً موافقت کرده باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Nur, wenn der Besucher bereits handgreiflich geworden ist.",
        "translations": {
          "ru": "Только если посетитель уже полез в драку.",
          "en": "Only if the visitor has already turned physically violent.",
          "ar": "فقط إذا كان الزائر قد بدأ بالاعتداء البدني بالفعل.",
          "fa": "تنها در صورتی که بازدیدکننده قبلاً درگیری فیزیکی ایجاد کرده باشد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Im Rahmen der Privatautonomie und des Hausrechts kann der Inhaber bestimmen, wer sein Grundstück unter welchen Bedingungen betreten darf.",
    "translations": {
      "ru": {
        "question": "Вправе ли охранник отказать посетителю во входе на основании § 903 BGB, если тот отказывается от условий входа (проверки сумки/паспорта)?",
        "explanation": "Владелец объекта вправе устанавливать условия входа и отказывать в допуске тем, кто их не выполняет."
      },
      "en": {
        "question": "May a security guard turn away a visitor at the entrance under § 903 BGB if they refuse entry conditions (e.g. ID check, bag search)?",
        "explanation": "Under private autonomy and domiciliary rights, the owner may set access conditions and deny entry to non-compliant persons."
      },
      "ar": {
        "question": "هل يجوز لعنصر الأمن رفض دخول زائر عند البوابة بموجب الفقرة 903 BGB إذا رفض شروط الدخول (تفتيش الحقائب/إبراز الهوية)؟",
        "explanation": "يحق للمالك ومفوضيه في إطار حرية الإرادة وحق المكان تحديد شروط الدخول ورفض من لا يلتزم بها."
      },
      "fa": {
        "question": "آیا نیروی حراست بر اساس ماده ۹۰۳ BGB می‌تواند از ورود فردی که از پذیرش شرایط ورود (مانند بازرسی کیف یا مدارک) سر باز می‌زند جلوگیری کند؟",
        "explanation": "بر اساس استقلال اراده خصوصی و حق مالکانه بر ملک، تعیین شرایط ورود و ممانعت از ورود افراد نافرمان مجاز است."
      }
    }
  },
  {
    "id": "ihk-bgb-13",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche rechtliche Folge hat die Überschreitung der Notwehr (Notwehrexzess nach § 33 StGB) im Zivilrecht?",
    "optionen": [
      "A) Es kann eine zivilrechtliche Schadensersatzpflicht nach § 823 BGB entstehen, es sei denn, es lag entschuldbare Verwirrung, Furcht oder Schrecken vor.",
      "B) Der Notwehrexzess führt automatisch zum Verlust des Führerscheins.",
      "C) Der Angreifer muss immer die doppelte Schadenssumme zahlen.",
      "D) Es hat keinerlei zivilrechtliche Konsequenzen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Es kann eine zivilrechtliche Schadensersatzpflicht nach § 823 BGB entstehen, es sei denn, es lag entschuldbare Verwirrung, Furcht oder Schrecken vor.",
        "translations": {
          "ru": "Может возникнуть гражданская обязанность возмещения ущерба по § 823 BGB, если не имело место извинительное замешательство, страх или испуг.",
          "en": "A civil law liability for damages under § 823 BGB may arise, unless excusable confusion, fear, or terror existed.",
          "ar": "قد ينشأ التزام مدني بالتعويض عن الضرر بموجب الفقرة 823 BGB ما لم يكن التجاوز بدافع الارتباک أو الخوف أو الذعر المقبول.",
          "fa": "ممکن است مسئولیت مدنی جبران خسارت طبق ماده ۸۲۳ BGB ایجاد شود، مگر اینکه ناشی از سردرگمی، ترس یا وحشت موجه باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Der Notwehrexzess führt automatisch zum Verlust des Führerscheins.",
        "translations": {
          "ru": "Превышение пределов обороны автоматически ведет к лишению водительских прав.",
          "en": "Excessive self-defense automatically results in the loss of one's driving license.",
          "ar": "تجاوز حدود الدفاع الشرعي يؤدي تلقائياً لسحب رخصة القيادة.",
          "fa": "تجاوز از حدود دفاع مشروع به صورت خودکار منجر به ابطال گواهینامه رانندگی می‌شود."
        }
      },
      {
        "id": "c",
        "text": "C) Der Angreifer muss immer die doppelte Schadenssumme zahlen.",
        "translations": {
          "ru": "Нападающий всегда обязан выплатить двойную сумму ущерба.",
          "en": "The attacker must always pay double the amount of damages.",
          "ar": "يجب على المعتدي دائماً دفع ضعف قيمة الضرر.",
          "fa": "مهاجم همواره باید دو برابر مبلغ خسارت را پرداخت کند."
        }
      },
      {
        "id": "d",
        "text": "D) Es hat keinerlei zivilrechtliche Konsequenzen.",
        "translations": {
          "ru": "Это не влечет никаких гражданско-правовых последствий.",
          "en": "It has no civil law consequences whatsoever.",
          "ar": "ليس له أي تبعات أو آثار في القانون المدني إطلاقاً.",
          "fa": "هیچ‌گونه پیامد حقوقی و مدنی در پی ندارد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Bei Überschreitung der Erforderlichkeit entfällt die Rechtfertigung; der Täter handelt rechtswidrig und haftet grundsätzlich zivilrechtlich auf Schadensersatz (§ 823 BGB).",
    "translations": {
      "ru": {
        "question": "Каковы правовые последствия превышения пределов необходимой обороны (Notwehrexzess) в гражданском праве?",
        "explanation": "При превышении мер защиты деяние становится противоправным, что влечет гражданскую ответственность за причиненный ущерб (§ 823 BGB)."
      },
      "en": {
        "question": "What is the legal consequence of excessive self-defense (Notwehrexzess) in civil law?",
        "explanation": "Exceeding necessity invalidates legal justification, rendering the act unlawful and triggering tort liability under § 823 BGB."
      },
      "ar": {
        "question": "ما هي النتيجة القانونية لتجاوز حدود الدفاع الشرعي (Notwehrexzess) في القانون المدني؟",
        "explanation": "تجاوز حدود الضرورة يسقط التبرير القانوني ويجعل الفعل غير مشروع وموجباً للتعويض المدني عن الأضرار (§ 823 BGB)."
      },
      "fa": {
        "question": "تجاوز از حد دفاع مشروع (Notwehrexzess) در حقوق مدنی چه عواقبی دارد؟",
        "explanation": "با خروج از مرز ضرورت، عمل غیرقانونی شده و شخص اصولاً مسئول جبران خسارات وارده بر اساس ماده ۸۲۳ BGB خواهد بود."
      }
    }
  },
  {
    "id": "ihk-bgb-14",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Was regelt § 823 Abs. 1 BGB bezüglich der unerlaubten Handlung? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet.",
      "B) Die Verpflichtung zur Schadenswiedergutmachung bei rechtswidrigen Verletzungshandlungen.",
      "C) Die Mindeststrafe bei einfachem Diebstahl mit Freiheitsentzug.",
      "D) Die Berechnung von Nachtzuschlägen im Wachgewerbe."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht eines anderen widerrechtlich verletzt, ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet.",
        "translations": {
          "ru": "Кто умышленно или по неосторожности противоправно нарушает жизнь, тело, здоровье, свободу, собственность или иное право другого лица, обязан возместить причиненный ущерб.",
          "en": "Anyone who, intentionally or negligently, unlawfully injures the life, body, health, freedom, property, or another right of another person is obligated to compensate for the resulting damage.",
          "ar": "كل من يلحق عن عمد أو إهمال ضرراً غير مشروع بحياة شخص آخر أو جسده أو صحته أو حريته أو ملكيته ملزم بتعويضه عن الضرر الناشئ.",
          "fa": "هر کس عمداً یا از روی سهل‌انگاری به جان، جسم، سلامت، آزادی، مالکیت یا سایر حقوق دیگری آسیب غیرقانونی وارد کند، موظف به جبران خسارت ناشی از آن است."
        }
      },
      {
        "id": "b",
        "text": "B) Die Verpflichtung zur Schadenswiedergutmachung bei rechtswidrigen Verletzungshandlungen.",
        "translations": {
          "ru": "Обязанность заглаживания вреда при противоправных действиях, причиняющих ущерб.",
          "en": "The obligation to remedy damages caused by unlawful acts of violation.",
          "ar": "الالتزام بجبر الضرر والتعويض عند ارتكاب أفعال التعدي غير المشروعة.",
          "fa": "تعهد به جبران و ترمیم خسارت در صورت اقدامات غیرقانونی آسیب‌زننده."
        }
      },
      {
        "id": "c",
        "text": "C) Die Mindeststrafe bei einfachem Diebstahl mit Freiheitsentzug.",
        "translations": {
          "ru": "Минимальное наказание в виде лишения свободы за простую кражу.",
          "en": "The minimum prison sentence for simple theft.",
          "ar": "العقوبة الدنيا بالسجن عند ارتكاب السرقة البسيطة.",
          "fa": "حداقل مجازات حبس برای سرقت ساده."
        }
      },
      {
        "id": "d",
        "text": "D) Die Berechnung von Nachtzuschlägen im Wachgewerbe.",
        "translations": {
          "ru": "Расчет надбавок за ночные смены в охранной отрасли.",
          "en": "The calculation of night shift bonuses in security guarding.",
          "ar": "طريقة احتساب البدلات المالية للعمل الليلي في الحراسة.",
          "fa": "نحوه محاسبه فوق‌العاده شب‌کاری در حرفه نگهبانی."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§ 823 Abs. 1 BGB ist die zivilrechtliche Grundnorm für Schadensersatzansprüche bei schuldhafter und rechtswidriger Rechtsgutsverletzung.",
    "translations": {
      "ru": {
        "question": "Что регулирует § 823 абз. 1 BGB в отношении деликтных правонарушений (unerlaubte Handlung)? (Выберите 2 ответа)",
        "explanation": "§ 823 абз. 1 BGB является базовой нормой гражданской ответственности за вред, причиненный жизни, здоровью, свободе или имуществу."
      },
      "en": {
        "question": "What does § 823 (1) BGB regulate regarding tortious unlawful acts? (Choose two correct answers)",
        "explanation": "§ 823 (1) BGB is the foundational civil tort norm establishing liability for culpable and unlawful injury to protected rights."
      },
      "ar": {
        "question": "ماذا تنظم الفقرة 823 بند 1 BGB بخصوص الفعل الضار غير المشروع (العمل غير المباح)؟ (اختر إجابتين صحيحتين)",
        "explanation": "تعد المادة 823 بند 1 القاعدة الأساسية في القانون المدني للمطالبة بالتعويض عند التعدي غير المشروع على الحقوق."
      },
      "fa": {
        "question": "ماده ۸۲۳ بند ۱ BGB در مورد مسئولیت مدنی ناشی از عمل غیرقانونی (شبه جرم) چه حکمی دارد؟ (دو پاسخ صحیح)",
        "explanation": "ماده ۸۲۳ بند ۱ اصل اساسی مسئولیت مدنی برای جبران خسارت ناشی از نقض مقصرانه حقوق محافظت‌شده است."
      }
    }
  },
  {
    "id": "ihk-bgb-15",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Ein Sicherheitsmitarbeiter findet auf dem Gelände eine fremde Brieftasche. Welche Pflichten hat er nach dem BGB (§§ 965 ff. BGB)?",
    "optionen": [
      "A) Er muss den Fund unverzüglich dem Verlierer, Eigentümer oder der zuständigen Behörde (Fundbüro) bzw. dem Dienststellenleiter anzeigen.",
      "B) Er darf das Bargeld sofort behalten und die Papiere vernichten.",
      "C) Er muss die Fundsache nach 24 Stunden bei eBay versteigern.",
      "D) Er darf Fundsachen grundsätzlich nur der Feuerwehr übergeben."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Er muss den Fund unverzüglich dem Verlierer, Eigentümer oder der zuständigen Behörde (Fundbüro) bzw. dem Dienststellenleiter anzeigen.",
        "translations": {
          "ru": "Он обязан немедленно заявить о находке потерявшему, собственнику либо в компетентный орган (бюро находок) / начальнику службы.",
          "en": "He must promptly notify the loser, owner, competent authority (lost property office), or shift supervisor.",
          "ar": "يجب عليه الإبلاغ الفوري عن الشيء المعثور عليه لصاحبه أو للمالك أو للجهة المختصة (مكتب المفقودات) أو لمدير الموقع.",
          "fa": "او موظف است کشف مال را فوراً به فرد گم‌کننده، مالک، اداره اشیای گمشده یا سرپرست شیفت گزارش دهد."
        }
      },
      {
        "id": "b",
        "text": "B) Er darf das Bargeld sofort behalten und die Papiere vernichten.",
        "translations": {
          "ru": "Он имеет право немедленно забрать себе наличные и уничтожить документы.",
          "en": "He may keep the cash immediately and destroy all documents.",
          "ar": "يحق له الاحتفاظ بالأموال النقدية فوراً وإتلاف الوثائق.",
          "fa": "او می‌تواند پول نقد را بردارد و مدارک را از بین ببرد."
        }
      },
      {
        "id": "c",
        "text": "C) Er muss die Fundsache nach 24 Stunden bei eBay versteigern.",
        "translations": {
          "ru": "Он обязан продать находку на аукционе eBay через 24 часа.",
          "en": "He must auction off the found item on eBay after 24 hours.",
          "ar": "يجب عليه بيع المعثورات في مزاد على الإنترنت بعد 24 ساعة.",
          "fa": "او باید مال پیدا شده را پس از ۲۴ ساعت در سایت مزایده به فروش برساند."
        }
      },
      {
        "id": "d",
        "text": "D) Er darf Fundsachen grundsätzlich nur der Feuerwehr übergeben.",
        "translations": {
          "ru": "Он имеет право передавать находки исключительно пожарным.",
          "en": "He may strictly surrender found items only to the fire department.",
          "ar": "لا يجوز له تسليم المفقودات إلا لفرق الإطفاء حصراً.",
          "fa": "او اصولاً فقط مجاز است اشیای پیدا شده را به آتش‌نشانی تحویل دهد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Nach § 965 BGB ist der Finder verpflichtet, den Fund unverzüglich anzuzeigen und die Sache zu verwahren bzw. abzugeben.",
    "translations": {
      "ru": {
        "question": "Охранник находит на территории чужой бумажник. Какие обязанности возникают у него согласно BGB (§§ 965 ff.)?",
        "explanation": "По § 965 BGB нашедший обязан незамедлительно заявить о находке и сдать вещь."
      },
      "en": {
        "question": "A security guard finds a lost wallet on the premises. What duties arise under the Civil Code (§§ 965 ff. BGB)?",
        "explanation": "Under § 965 BGB, the finder is obligated to report the find immediately and safeguard or surrender the item."
      },
      "ar": {
        "question": "عثر حارس أمن على محفظة نقود مفقودة في الموقع. ما هي واجباته بموجب القانون المدني (§§ 965 ff. BGB)؟",
        "explanation": "وفقاً للمادة 965 BGB يلتزم من يعثر على شيء مفقود بالإبلاغ الفوري عنه وحفظه وتسليمه للجهات المختصة."
      },
      "fa": {
        "question": "یک نیروی حراست کیف پولی را در محوطه پیدا می‌کند. طبق مواد ۹۶۵ به بعد قانون مدنی چه وظایفی دارد؟",
        "explanation": "طبق ماده ۹۶۵ BGB، یابنده موظف است فوراً اعلام کشف مال کرده و شیء را به صورت امانت تحویل دهد."
      }
    }
  },
  {
    "id": "ihk-bgb-16",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche Rechtsfähigkeit und Geschäftsfähigkeit haben Personen nach dem BGB? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Die Rechtsfähigkeit des Menschen beginnt mit der Vollendung der Geburt (§ 1 BGB).",
      "B) Personen ab Vollendung des 18. Lebensjahres sind grundsätzlich voll geschäftsfähig (§ 104, § 106 BGB).",
      "C) Kinder unter 7 Jahren sind voll geschäftsfähig.",
      "D) Die Rechtsfähigkeit endet mit der Vollendung des 65. Lebensjahres."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Rechtsfähigkeit des Menschen beginnt mit der Vollendung der Geburt (§ 1 BGB).",
        "translations": {
          "ru": "Правоспособность человека начинается с момента завершения рождения (§ 1 BGB).",
          "en": "The legal capacity (Rechtsfähigkeit) of a human being begins upon completion of birth (§ 1 BGB).",
          "ar": "تبدأ الأهلية القانونية (أهلية الوجوب) للإنسان باكتمال ولادته حياً (§ 1 BGB).",
          "fa": "اهلیت تمتع (حقوقی) انسان با اتمام تولد آغاز می‌شود (§ 1 BGB)."
        }
      },
      {
        "id": "b",
        "text": "B) Personen ab Vollendung des 18. Lebensjahres sind grundsätzlich voll geschäftsfähig (§ 104, § 106 BGB).",
        "translations": {
          "ru": "Лица по достижении 18 лет, как правило, обладают полной дееспособностью (§§ 104, 106 BGB).",
          "en": "Persons aged 18 and older generally have full legal capacity to enter transactions (Geschäftsfähigkeit).",
          "ar": "الأشخاص الذين أتموا 18 عاماً يتمتعون مبدئياً بالأهلية القانونية الكاملة لإبرام التصرفات (أهلية الأداء).",
          "fa": "افراد از سن ۱۸ سالگی تمام اصولاً دارای اهلیت استیفای کامل (انجام معاملات) هستند."
        }
      },
      {
        "id": "c",
        "text": "C) Kinder unter 7 Jahren sind voll geschäftsfähig.",
        "translations": {
          "ru": "Дети младше 7 лет полностью дееспособны.",
          "en": "Children under 7 years of age have full contract capacity.",
          "ar": "الأطفال دون سن 7 سنوات يتمتعون بأهلية أداء كاملة.",
          "fa": "کودکان زیر ۷ سال دارای اهلیت کامل برای انجام معامله هستند."
        }
      },
      {
        "id": "d",
        "text": "D) Die Rechtsfähigkeit endet mit der Vollendung des 65. Lebensjahres.",
        "translations": {
          "ru": "Правоспособность прекращается по достижении 65 лет.",
          "en": "Legal capacity terminates upon completing the 65th year of age.",
          "ar": "تنتهي الأهلية القانونية للإنسان عند بلوغه 65 عاماً.",
          "fa": "اهلیت حقوقی با رسیدن به سن ۶۵ سالگی پایان می‌یابد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Rechtsfähigkeit beginnt mit der Geburt (§ 1 BGB). Volle Geschäftsfähigkeit tritt mit Volljährigkeit (18 Jahre) ein (§ 2, § 106 BGB).",
    "translations": {
      "ru": {
        "question": "Каковы правоспособность и дееспособность физических лиц по Гражданскому кодексу (BGB)? (Выберите 2 ответа)",
        "explanation": "Правоспособность возникает с момента рождения (§ 1 BGB), а полная дееспособность — с 18 лет (§§ 2, 106 BGB)."
      },
      "en": {
        "question": "What rules govern legal capacity (Rechtsfähigkeit) and capacity to contract (Geschäftsfähigkeit) under the BGB? (Choose two correct answers)",
        "explanation": "Legal capacity begins at birth (§ 1 BGB). Full capacity to contract begins upon reaching the age of majority (18 years)."
      },
      "ar": {
        "question": "ما هي قواعد الأهلية القانونية وأهلية التصرف للأشخاص بموجب القانون المدني؟ (اختر إجابتين صحيحتين)",
        "explanation": "تبدأ أهلية الوجوب بالولادة (§ 1 BGB)، وتكتمل أهلية الأداء والتصرف ببلوغ سن الرشد (18 عاماً)."
      },
      "fa": {
        "question": "اهلیت تمتع و اهلیت استیفای اشخاص بر اساس قانون مدنی آلمان چگونه است؟ (دو پاسخ صحیح)",
        "explanation": "اهلیت تمتع با تولد آغاز می‌شود (§ 1 BGB) و اهلیت کامل استیفا و معاملات با رسیدن به سن ۱۸ سالگی حاصل می‌گردد."
      }
    }
  },
  {
    "id": "ihk-bgb-17",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche Bedeutung hat § 831 BGB (Haftung für den Verrichtungsgehilfen) für Sicherheitsunternehmen?",
    "optionen": [
      "A) Der Unternehmer haftet für Schäden, die sein Mitarbeiter einem Dritten widerrechtlich zufügt, es sei denn, er kann sich bezüglich Auswahl und Beaufsichtigung entlasten (Exkulpation).",
      "B) Der Unternehmer haftet niemals für Fehler seiner Wachleute.",
      "C) Wachleute müssen für alle Schäden des Unternehmens mit ihrem Privatvermögen haften.",
      "D) Der Verrichtungsgehilfe muss mindestens Meister für Schutz und Sicherheit sein."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Der Unternehmer haftet für Schäden, die sein Mitarbeiter einem Dritten widerrechtlich zufügt, es sei denn, er kann sich bezüglich Auswahl und Beaufsichtigung entlasten (Exkulpation).",
        "translations": {
          "ru": "Предприниматель несет ответственность за вред, причиненный его сотрудником третьему лицу, если не докажет должную осмотрительность в выборе и контроле (экскульпация).",
          "en": "The employer is liable for damages unlawfully caused by their employee to third parties, unless they can prove proper care in selection and supervision (exculpation).",
          "ar": "يتحمل صاحب العمل المسؤولية عن الأضرار التي يلحقها موظفه بالغير بصورة غير مشروعة، ما لم يثبت حسن اختياره ومراقبته للموظف (دفع المسؤولية).",
          "fa": "کارفرما مسئول خساراتی است که کارمندش به صورت غیرقانونی به دیگران وارد کند، مگر اینکه دقت کافی در انتخاب و نظارت را اثبات نماید."
        }
      },
      {
        "id": "b",
        "text": "B) Der Unternehmer haftet niemals für Fehler seiner Wachleute.",
        "translations": {
          "ru": "Предприниматель никогда не отвечает за ошибки своих охранников.",
          "en": "The employer is never liable for mistakes made by their security guards.",
          "ar": "لا يتحمل صاحب العمل المسؤولية أبداً عن أخطاء حراسه.",
          "fa": "کارفرما هرگز در قبال خطاهای نگهبانان خود مسئولیتی ندارد."
        }
      },
      {
        "id": "c",
        "text": "C) Wachleute müssen für alle Schäden des Unternehmens mit ihrem Privatvermögen haften.",
        "translations": {
          "ru": "Охранники обязаны отвечать по всем убыткам компании своим личным имуществом.",
          "en": "Security guards must answer for all enterprise losses with their private personal assets.",
          "ar": "يجب على حراس الأمن تحمل جميع خسائر الشركة من أموالهم الخاصة.",
          "fa": "نیروهای نگهبانی باید کلیه خسارت‌های شرکت را از دارایی‌های شخصی خود بپردازند."
        }
      },
      {
        "id": "d",
        "text": "D) Der Verrichtungsgehilfe muss mindestens Meister für Schutz und Sicherheit sein.",
        "translations": {
          "ru": "Исполнитель поручения обязательно должен иметь квалификацию мастера безопасности.",
          "en": "The vicarious agent must hold at least a master craftsman certificate in security.",
          "ar": "يجب أن يحمل الموظف المساعد مؤهل خبير متقدم في الأمن والحماية على الأقل.",
          "fa": "عامل اجرایی باید حداقل دارای مدرک کارشناسی ارشد حفاظت و امنیت باشد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "§ 831 BGB regelt die Haftung des Geschäftsherrn für Verrichtungsgehilfen (Wachpersonal) mit Möglichkeit des Entlastungsbeweises.",
    "translations": {
      "ru": {
        "question": "Какое значение имеет § 831 BGB (ответственность за действия исполнителей) для охранных предприятий?",
        "explanation": "Работодатель отвечает за ущерб, причиненный охранником, если не докажет правильный выбор и надзор за сотрудником."
      },
      "en": {
        "question": "What significance does § 831 BGB (vicarious liability for employees) have for security guarding firms?",
        "explanation": "§ 831 BGB holds employers liable for damages caused by guards unless the employer proves diligent selection and supervision."
      },
      "ar": {
        "question": "ما هي أهمية الفقرة 831 BGB (مسؤولية المتبوع عن أعمال التابع) لشركات الحراسة؟",
        "explanation": "تنظم المادة 831 BGB مسؤولية الشركة عن أضرار موظفيها مع إمكانية نفي المسؤولية إذا أثبتت حسن الاختيار والتدريب والمراقبة."
      },
      "fa": {
        "question": "ماده ۸۳۱ BGB (مسئولیت کارفرما در قبال اقدامات عامل اجرایی) چه اهمیتی برای شرکت‌های امنیتی دارد؟",
        "explanation": "کارفرما مسئول خسارت‌های ناشی از عملکرد نگهبانان است مگر آنکه اثبات کند در گزینش و نظارت بر آنان نهایت دقت را به کار برده است."
      }
    }
  },
  {
    "id": "ihk-bgb-18",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Welche Handlungen sind im Rahmen des Aggressivnotstands nach § 904 BGB zulässig? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Die Einwirkung auf eine fremde Sache, von der keine Gefahr ausgeht, wenn dies zur Abwendung einer gegenwärtigen Gefahr notwendig ist.",
      "B) Der Schaden an der Sache darf nicht außer Verhältnis zur drohenden Gefahr stehen.",
      "C) Man darf die Sache zerstören, ohne jemals für den Schaden aufkommen zu müssen.",
      "D) Es darf nur auf Sachen der Polizei zugegriffen werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Einwirkung auf eine fremde Sache, von der keine Gefahr ausgeht, wenn dies zur Abwendung einer gegenwärtigen Gefahr notwendig ist.",
        "translations": {
          "ru": "Воздействие на чужую вещь, от которой не исходит опасность, если это необходимо для отражения наличной опасности.",
          "en": "Interfering with a third party's property from which no danger arises, if necessary to avert an imminent danger.",
          "ar": "استخدام أو التأثير على ملك الغير الذي لا يصدر منه أي خطر، إذا كان ذلك ضرورياً لدفع خطر حال وشيك.",
          "fa": "استفاده یا آسیب رساندن به مال شخص ثالث که خودش هیچ خطری ندارد، در صورتی که برای دفع یک خطر فعلی لازم باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Der Schaden an der Sache darf nicht außer Verhältnis zur drohenden Gefahr stehen.",
        "translations": {
          "ru": "Ущерб, причиняемый вещи, не должен быть несоразмерно велик по сравнению с угрожающей опасностью.",
          "en": "The damage caused to the property must not be disproportionate to the impending danger.",
          "ar": "يجب ألا يكون الضرر اللاحق بالشيء غير متناسب مع جسامة الخطر المهدد.",
          "fa": "خسارت وارد شده به مال نباید نسبت به خطر تهدیدکننده نامتناسب و بیش از حد باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Man darf die Sache zerstören, ohne jemals für den Schaden aufkommen zu müssen.",
        "translations": {
          "ru": "Разрешается уничтожить вещь без обязанности когда-либо возмещать ущерб.",
          "en": "One may destroy the item without ever having to compensate for the damage.",
          "ar": "يجوز تدمير الشيء دون الحاجة لدفع أي تعويض مالي أبداً.",
          "fa": "می‌توان مال را نابود کرد بدون اینکه نیازی به پرداخت غرامت باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Es darf nur auf Sachen der Polizei zugegriffen werden.",
        "translations": {
          "ru": "Разрешается использовать исключительно имущество полиции.",
          "en": "Only police property may be accessed.",
          "ar": "لا يجوز استخدام إلا ممتلكات الشرطة حصراً.",
          "fa": "تنها مجاز به استفاده از اموال متعلق به پلیس هستید."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§ 904 BGB erlaubt die Einwirkung auf unbeteiligte fremde Sachen bei gegenwärtiger Gefahr, sofern der drohende Schaden unverhältnismäßig größer ist. Der Eigentümer kann Schadensersatz verlangen.",
    "translations": {
      "ru": {
        "question": "Какие действия допустимы при агрессивной крайней необходимости согласно § 904 BGB? (Выберите 2 ответа)",
        "explanation": "§ 904 BGB разрешает использовать чужую непричастную вещь при условии, что предотвращаемый ущерб значительно выше причиняемого."
      },
      "en": {
        "question": "Which actions are permissible within aggressive necessity under § 904 BGB? (Choose two correct answers)",
        "explanation": "§ 904 BGB allows interfering with uninvolved third-party property to avert a present danger if averted harm greatly exceeds property damage."
      },
      "ar": {
        "question": "ما هي الأفعال المباحة في حالة الضرورة الهجومية بموجب الفقرة 904 BGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "تسمح المادة 904 بالتأثير على أموال الغير غير المعنية لدفع خطر حال إذا كان الضرر المهدد أعظم بكثير مع حق المالك في التعويض."
      },
      "fa": {
        "question": "چه اقداماتی در چارچوب اضطرار تهاجمی طبق ماده ۹۰۴ BGB مجاز است؟ (دو پاسخ صحیح)",
        "explanation": "ماده ۹۰۴ BGB دخل و تصرف در مال غیر را برای دفع خطر فعلی مشروط بر اینکه خسارت دفع‌شده بسیار بزرگتر باشد مجاز می‌شمارد."
      }
    }
  },
  {
    "id": "ihk-bgb-19",
    "kategorie": "Bürgerliches Gesetzbuch (BGB)",
    "frage": "Darf der Sicherheitsdienst im Rahmen der Selbsthilfe nach § 229 BGB eine flüchtende Person festhalten, die die Zechrechnung im Restaurant nicht bezahlt hat? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Ja, wenn der Anspruchsteller den Schuldner auf frischer Tat betrifft und die Identität nicht sofort feststellbar ist.",
      "B) Ja, wenn obrigkeitliche Hilfe nicht rechtzeitig erlangt werden kann und Fluchtgefahr besteht.",
      "C) Nein, Zechprellerei darf nur von Richtern verfolgt werden.",
      "D) Ja, aber der Gast muss zur Strafe körperlich gezüchtigt werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ja, wenn der Anspruchsteller den Schuldner auf frischer Tat betrifft und die Identität nicht sofort feststellbar ist.",
        "translations": {
          "ru": "Да, если управомоченное лицо застигает должника на месте и его личность невозможно установить немедленно.",
          "en": "Yes, if the claimant catches the debtor in the act and identity cannot be verified immediately.",
          "ar": "نعم، إذا ضبط صاحب الحق المدين متلبساً بالهرب وتعذر التحقق من هويته فوراً.",
          "fa": "بله، اگر طلبکار بدهکار را در حین ارتکاب مشاهده کند و هویت او فوراً قابل احراز نباشد."
        }
      },
      {
        "id": "b",
        "text": "B) Ja, wenn obrigkeitliche Hilfe nicht rechtzeitig erlangt werden kann und Fluchtgefahr besteht.",
        "translations": {
          "ru": "Да, если помощь властей не может быть получена вовремя и есть опасность побега.",
          "en": "Yes, if official assistance cannot be obtained in time and a risk of flight exists.",
          "ar": "نعم، إذا تعذر استدعاء الشرطة في الوقت المناسب مع وجود خطر فرار المدين.",
          "fa": "بله، در صورتی که کمک مراجع قانونی به موقع در دسترس نبوده و خطر فرار وجود داشته باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Nein, Zechprellerei darf nur von Richtern verfolgt werden.",
        "translations": {
          "ru": "Нет, неоплату счетов могут преследовать только судьи.",
          "en": "No, food and beverage bill evasion may strictly be pursued only by judges.",
          "ar": "لا، التهرب من دفع الحساب لا يحق متابعته إلا للقضاة.",
          "fa": "خیر، عدم پرداخت صورت‌حساب رستوران فقط توسط قضات قابل پیگیری است."
        }
      },
      {
        "id": "d",
        "text": "D) Ja, aber der Gast muss zur Strafe körperlich gezüchtigt werden.",
        "translations": {
          "ru": "Да, но гость должен быть подвергнут телесному наказанию.",
          "en": "Yes, but the guest must be physically punished on site.",
          "ar": "نعم، ولكن يجب معاقبة الزبون بدنياً كعقوبة له.",
          "fa": "بله، اما مهمان باید به عنوان تنبیه مورد ضرب و شتم قرار گیرد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§ 229 BGB erlaubt die vorläufige Festnahme des Schuldners zur Sicherung zivilrechtlicher Ansprüche, wenn Fluchtverdacht vorliegt und die Identität nicht festgestellt werden kann.",
    "translations": {
      "ru": {
        "question": "Вправе ли служба охраны в рамках самопомощи (§ 229 BGB) задержать убегающего посетителя, не оплатившего счет в ресторане? (Выберите 2 ответа)",
        "explanation": "§ 229 BGB разрешает задержание должника для обеспечения гражданских требований при опасности побега и невозможности установить личность."
      },
      "en": {
        "question": "May security personnel detain a fleeing person who failed to pay their restaurant bill under self-help (§ 229 BGB)? (Choose two correct answers)",
        "explanation": "§ 229 BGB authorizes apprehending a debtor to secure civil claims if flight is suspected and identity cannot be promptly established."
      },
      "ar": {
        "question": "هل يجوز للأمن في إطار المساعدة الذاتية (§ 229 BGB) توقيف شخص هارب لم يدفع فاتورة المطعم؟ (اختر إجابتين صحيحتين)",
        "explanation": "تسمح المادة 229 BGB بتوقيف المدين مؤقتاً لتأمين المطالبة المدنية عند وجود خطر الفرار وتعذر معرفة هويته."
      },
      "fa": {
        "question": "آیا نیروی حراست در چارچوب احقاق حق شخصی (§ 229 BGB) مجاز است فردی را که صورت‌حساب رستوران را نپرداخته و در حال فرار است متوقف کند؟ (دو پاسخ)",
        "explanation": "ماده ۲۲۹ BGB متوقف کردن بدهکار را برای تضمین ادعای مدنی در صورت خطر فرار و نامشخص بودن هویت مجاز می‌داند."
      }
    }
  },
  {
    "id": "ihk-stgb-1",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Welche Voraussetzungen müssen für eine vorläufige Festnahme nach § 127 Abs. 1 StPO (Jedermann-Festnahme) erfüllt sein?",
    "optionen": [
      "A) Die Person muss auf frischer Tat betroffen oder verfolgt sein und der Flucht verdächtig sein oder ihre Identität kann nicht sofort festgestellt werden.",
      "B) Es muss ein schriftlicher Haftbefehl des Amtsgerichts vorliegen.",
      "C) Der Festgenommene muss ein Geständnis unterschrieben haben.",
      "D) Die Festnahme ist nur der Polizei gestattet."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Person muss auf frischer Tat betroffen oder verfolgt sein und der Flucht verdächtig sein oder ihre Identität kann nicht sofort festgestellt werden.",
        "translations": {
          "ru": "Лицо должно быть застигнуто на месте преступления или преследоваться по горячим следам, при этом есть подозрение в побеге либо его личность невозможно установить немедленно.",
          "en": "The person must be caught in the act or pursued fresh from the crime, and either suspected of flight or their identity cannot be immediately established.",
          "ar": "يجب ضبط الشخص متلبساً بالجرم أو مطارداً فور وقوعه، مع وجود شبهة هروبه أو تعذر التحقق من هويته فوراً.",
          "fa": "شخص باید در حین ارتکاب جرم دستگیر شده یا بلافاصله تعقیب شود، و مظنون به فرار باشد یا هویت او فوراً احراز نشود."
        }
      },
      {
        "id": "b",
        "text": "B) Es muss ein schriftlicher Haftbefehl des Amtsgerichts vorliegen.",
        "translations": {
          "ru": "Должен иметься письменный ордер на арест от участкового суда.",
          "en": "A written arrest warrant issued by the local district court must exist.",
          "ar": "يجب وجود أمر توقيف قضائي خطي صادر عن المحكمة الابتدائية.",
          "fa": "باید حکم جلب کتبی از سوی دادگاه عمومی وجود داشته باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Der Festgenommene muss ein Geständnis unterschrieben haben.",
        "translations": {
          "ru": "Задержанный должен подписать признание вины.",
          "en": "The apprehended person must have signed a confession.",
          "ar": "يجب أن يوقع المقبوض عليه على اعتراف خطي.",
          "fa": "فرد بازداشت‌شده باید اعتراف‌نامه‌ای را امضا کرده باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Die Festnahme ist nur der Polizei gestattet.",
        "translations": {
          "ru": "Задержание разрешено исключительно полиции.",
          "en": "Arrest is strictly permissible for police officers only.",
          "ar": "القبض والتوقيف مسموح به للشرطة فقط دون غيرها.",
          "fa": "بازداشت تنها برای نیروهای پلیس مجاز است."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Voraussetzungen § 127 Abs. 1 StPO: 1. Frische Tat (oder Verfolgung), 2. Festnahmegrund: Fluchtverdacht ODER Identität nicht sofort feststellbar.",
    "translations": {
      "ru": {
        "question": "Какие условия необходимы для предварительного задержания по § 127 абз. 1 StPO (право любого гражданина на задержание)?",
        "explanation": "Условия § 127 абз. 1 StPO: 1. Поимка с поличным/преследование, 2. Опасность побега ИЛИ невозможность установить личность."
      },
      "en": {
        "question": "Which conditions must be met for provisional citizen's arrest under § 127 (1) StPO?",
        "explanation": "Requirements under § 127 (1) StPO: 1. Freshly caught in the act/pursued, 2. Ground for arrest: flight risk OR identity cannot be established on the spot."
      },
      "ar": {
        "question": "ما هي الشروط الواجب توافرها للتوقيف المؤقت للكافة بموجب الفقرة 127 بند 1 من قانون الإجراءات الجنائية (StPO)؟",
        "explanation": "شروط المادة 127 فقرة 1 StPO: 1. التلبس بالجريمة أو المطاردة، 2. سبب التوقيف: شبهة الفرار أو تعذر التحقق من الهوية فوراً."
      },
      "fa": {
        "question": "چه شرایطی برای بازداشت موقت شهروندی طبق ماده ۱۲۷ بند ۱ قانون آیین دادرسی کیفری (StPO) لازم است؟",
        "explanation": "شرایط ماده ۱۲۷ بند ۱: ۱. ارتکاب مشهود یا تعقیب بلافاصله، ۲. دلیل بازداشت: احتمال فرار یا عدم امکان احراز فوری هویت."
      }
    }
  },
  {
    "id": "ihk-stgb-2",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Wann liegt eine \"frische Tat\" im Sinne von § 127 Abs. 1 StPO vor?",
    "optionen": [
      "A) Wenn der Täter während der Tatausführung oder unmittelbar danach am Tatort oder in dessen unmittelbarer Nähe angetroffen wird.",
      "B) Wenn die Tat vor 3 Wochen verübt wurde und der Verdächtige im Supermarkt einkauft.",
      "C) Wenn der Zeuge im Traum gesehen hat, wer der Täter ist.",
      "D) Wenn die Polizei per Großfahndung nach dem Täter sucht."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wenn der Täter während der Tatausführung oder unmittelbar danach am Tatort oder in dessen unmittelbarer Nähe angetroffen wird.",
        "translations": {
          "ru": "Когда преступник застигнут во время совершения преступления или сразу после него на месте происшествия или вблизи него.",
          "en": "When the offender is caught during the commission of the act or immediately thereafter at or in the immediate vicinity of the crime scene.",
          "ar": "عند ضبط الجاني أثناء تنفيذ الجريمة أو فور ارتكابها مباشرة في مسرح الجريمة أو بجواره مباشرة.",
          "fa": "هنگامی که مرتکب در حین ارتکاب جرم یا بلافاصله پس از آن در صحنه جرم یا نزدیکی آن مشاهده شود."
        }
      },
      {
        "id": "b",
        "text": "B) Wenn die Tat vor 3 Wochen verübt wurde und der Verdächtige im Supermarkt einkauft.",
        "translations": {
          "ru": "Когда преступление было совершено 3 недели назад, и подозреваемый делает покупки в супермаркете.",
          "en": "When the offense occurred 3 weeks ago and the suspect is seen shopping in a supermarket.",
          "ar": "عندما تكون الجريمة قد وقعت قبل 3 أسابيع والمشتبه به يتسوق في السوبرماركت.",
          "fa": "هنگامی که جرم ۳ هفته پیش واقع شده و مظنون در حال خرید در سوپرمارکت است."
        }
      },
      {
        "id": "c",
        "text": "C) Wenn der Zeuge im Traum gesehen hat, wer der Täter ist.",
        "translations": {
          "ru": "Когда свидетель увидел во сне, кто совершил преступление.",
          "en": "When the witness saw the identity of the perpetrator in a dream.",
          "ar": "عندما يرى الشاهد في منامه من هو الجاني.",
          "fa": "هنگامی که شاهد در خواب دیده باشد چه کسی مرتکب جرم شده است."
        }
      },
      {
        "id": "d",
        "text": "D) Wenn die Polizei per Großfahndung nach dem Täter sucht.",
        "translations": {
          "ru": "Когда полиция ведет масштабный розыск преступника.",
          "en": "When the police are actively conducting a large-scale public manhunt.",
          "ar": "عندما تبحث الشرطة عن الجاني بحملة تفتيش كبرى.",
          "fa": "هنگامی که پلیس در حال جستجوی گسترده برای یافتن مجرم است."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Frische Tat erfordert einen engen räumlichen und zeitlichen Zusammenhang mit der begangenen Straftat.",
    "translations": {
      "ru": {
        "question": "Когда имеет место преступление «с поличным / по горячим следам» (frische Tat) по смыслу § 127 абз. 1 StPO?",
        "explanation": "Преступление с поличным требует прямой пространственной и временной связи с совершенным деянием."
      },
      "en": {
        "question": "When is a deed considered \"fresh in the act\" (frische Tat) within the meaning of § 127 (1) StPO?",
        "explanation": "A fresh offense requires a close spatial and temporal connection to the committed crime."
      },
      "ar": {
        "question": "متى يتحقق وصف «التلبس بالجرم» (frische Tat) بموجب الفقرة 127 بند 1 StPO؟",
        "explanation": "يشترط التلبس وجود رابط زمني ومكاني وثيق ومباشر مع الجريمة المرتكبة."
      },
      "fa": {
        "question": "چه زمانی «جرم مشهود / تازه» (frische Tat) در مفهوم ماده ۱۲۷ بند ۱ StPO محقق می‌شود؟",
        "explanation": "جرم مشهود مستلزم ارتباط نزدیک مکانی و زمانی با عمل مجرمانه ارتکابی است."
      }
    }
  },
  {
    "id": "ihk-stgb-3",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was ist nach einer Festnahme nach § 127 Abs. 1 StPO unverzüglich zu veranlassen?",
    "optionen": [
      "A) Die unverzügliche Übergabe des Festgenommenen an die Polizei.",
      "B) Die Verhängung einer Geldstrafe durch den Schichtleiter.",
      "C) Das Festhalten der Person im Betriebskeller für mindestens 24 Stunden.",
      "D) Die Veröffentlichung des Fotos in sozialen Netzwerken."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die unverzügliche Übergabe des Festgenommenen an die Polizei.",
        "translations": {
          "ru": "Незамедлительная передача задержанного сотрудникам полиции.",
          "en": "Prompt handover of the detained person to the police.",
          "ar": "تسليم الشخص المقبوض عليه فوراً إلى الشرطة دون أي تأخير.",
          "fa": "تحویل فوری فرد بازداشت‌شده به مراجع پلیس."
        }
      },
      {
        "id": "b",
        "text": "B) Die Verhängung einer Geldstrafe durch den Schichtleiter.",
        "translations": {
          "ru": "Наложение денежного штрафа начальником смены.",
          "en": "Imposition of a monetary penalty by the shift supervisor.",
          "ar": "فرض غرامة مالية من قبل رئيس الوردية الأمنية.",
          "fa": "وضع جریمه نقدی توسط سرپرست شیفت."
        }
      },
      {
        "id": "c",
        "text": "C) Das Festhalten der Person im Betriebskeller für mindestens 24 Stunden.",
        "translations": {
          "ru": "Удержание лица в подвале предприятия не менее 24 часов.",
          "en": "Detaining the person in the company basement for at least 24 hours.",
          "ar": "احتجاز الشخص في قبو الشركة لمدة لا تقل عن 24 ساعة.",
          "fa": "نگه‌داشتن فرد در زیرزمین شرکت به مدت حداقل ۲۴ ساعت."
        }
      },
      {
        "id": "d",
        "text": "D) Die Veröffentlichung des Fotos in sozialen Netzwerken.",
        "translations": {
          "ru": "Публикация фотографии в социальных сетях.",
          "en": "Publishing the person's photo on social media channels.",
          "ar": "نشر صورة المقبوض عليه على شبكات التواصل الاجتماعي.",
          "fa": "انتشار تصویر فرد بازداشت‌شده در شبکه‌های اجتماعی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Der Festgenommene muss unverzüglich der Polizei übergeben werden. Eigenmächtiges langes Festhalten stellt eine Freiheitsberaubung (§ 239 StGB) dar.",
    "translations": {
      "ru": {
        "question": "Что необходимо предпринять незамедлительно после задержания по § 127 абз. 1 StPO?",
        "explanation": "Задержанного следует немедленно передать полиции; самовольное долгое удержание образует состав лишения свободы (§ 239 StGB)."
      },
      "en": {
        "question": "What must be arranged without undue delay after a citizen's arrest under § 127 (1) StPO?",
        "explanation": "The apprehended individual must be handed over to the police immediately. Arbitrary long confinement constitutes unlawful imprisonment (§ 239 StGB)."
      },
      "ar": {
        "question": "ما هو الإجراء الواجب اتخاذه فوراً بعد التوقيف بموجب الفقرة 127 بند 1 StPO؟",
        "explanation": "يجب تسليم المقبوض عليه فوراً إلى الشرطة، حيث يعتبر الاحتجاز المطول غير المصرح به جريمة حرمان من الحرية (§ 239 StGB)."
      },
      "fa": {
        "question": "پس از بازداشت موقت بر اساس ماده ۱۲۷ بند ۱ StPO چه اقدامی باید فوراً انجام شود؟",
        "explanation": "فرد بازداشت‌شده باید فوراً به پلیس تحویل داده شود؛ نگه‌داشتن خودسرانه و طولانی‌مدت مصداق حبس غیرقانونی (§ 239 StGB) است."
      }
    }
  },
  {
    "id": "ihk-stgb-4",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Darf eine Sicherheitskraft bei einer Festnahme nach § 127 StPO die Taschen der Person gegen deren Willen durchsuchen?",
    "optionen": [
      "A) Nein, ein allgemeines Durchsuchungsrecht steht nur der Polizei zu; es darf lediglich nach Angriffs- und Fluchtmitteln (Eigensicherung) abgetastet werden.",
      "B) Ja, Sicherheitskräfte haben dasselbe Vollstreckungsrecht wie Kriminalbeamte.",
      "C) Ja, bis auf die Unterwäsche.",
      "D) Ja, wenn der Kunde dies telefonisch anordnet."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Nein, ein allgemeines Durchsuchungsrecht steht nur der Polizei zu; es darf lediglich nach Angriffs- und Fluchtmitteln (Eigensicherung) abgetastet werden.",
        "translations": {
          "ru": "Нет, общее право на обыск принадлежит только полиции; разрешается лишь поверхностный досмотр на предмет оружия и средств побега для самобезопасности.",
          "en": "No, general search powers belong only to the police; only superficial pat-down for weapons/flight tools (self-protection) is permitted.",
          "ar": "لا، فحق التفتيش العام من اختصاص الشرطة فقط؛ ويسمح فقط بتحسس الملابس خارجياً للبحث عن أسلحة حمايةً للنفس.",
          "fa": "خیر، حق بازرسی بدنی کامل تنها متعلق به پلیس است؛ فقط لمس سطحی لباس جهت یافتن سلاح یا ابزار فرار (حفظ امنیت شخصی) مجاز است."
        }
      },
      {
        "id": "b",
        "text": "B) Ja, Sicherheitskräfte haben dasselbe Vollstreckungsrecht wie Kriminalbeamte.",
        "translations": {
          "ru": "Да, охранники имеют те же права принуждения, что и следователи полиции.",
          "en": "Yes, security guards hold identical enforcement authority to criminal investigators.",
          "ar": "نعم، يتمتع أفراد الأمن بنفس صلاحيات ضباط التحقيق الجنائي.",
          "fa": "بله، نیروهای حراست اختیارات اجرایی برابری با کارآگاهان پلیس دارند."
        }
      },
      {
        "id": "c",
        "text": "C) Ja, bis auf die Unterwäsche.",
        "translations": {
          "ru": "Да, вплоть до нижнего белья.",
          "en": "Yes, down to the underwear.",
          "ar": "نعم، وصولاً إلى الملابس الداخلية.",
          "fa": "بله، تا حد بررسی لباس‌های زیر."
        }
      },
      {
        "id": "d",
        "text": "D) Ja, wenn der Kunde dies telefonisch anordnet.",
        "translations": {
          "ru": "Да, если клиент распорядился об этом по телефону.",
          "en": "Yes, if the client orders it over the telephone.",
          "ar": "نعم، إذا أمر العميل بذلك هاتفياً.",
          "fa": "بله، اگر کارفرما تلفنی چنین دستوری بدهد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Private haben kein strafprozessuales Durchsuchungsrecht. Lediglich das oberflächliche Abtasten zur Eigensicherung (Waffenauffindung) ist im Rahmen der Notwehr/Festnahmebefugnis gedeckt.",
    "translations": {
      "ru": {
        "question": "Вправе ли охранник при задержании по § 127 StPO обыскивать карманы и сумки лица против его воли?",
        "explanation": "Частные лица не имеют процессуального права на обыск. Допустимо лишь поверхностное ощупывание для поиска оружия в целях самозащиты."
      },
      "en": {
        "question": "May a security guard search a person's bags against their will during an arrest under § 127 StPO?",
        "explanation": "Private citizens lack statutory search powers under criminal procedure. Only patting down outer clothing for weapons to ensure personal safety is justified."
      },
      "ar": {
        "question": "هل يجوز لحارس الأمن عند توقيف شخص بموجب الفقرة 127 StPO تفتيش حقائبه وجيوبه رغماً عنه؟",
        "explanation": "لا يملك الأفراد حق التفتيش الإجرائي الجنائي، ويسمح فقط بتحسس الملابس الخارجي للتحقق من خلوه من أسلحة لحماية النفس."
      },
      "fa": {
        "question": "آیا نیروی حراست در هنگام بازداشت طبق ماده ۱۲۷ StPO می‌تواند جیب‌ها و کیف فرد را بر خلاف میل او تفتیش کند؟",
        "explanation": "اشخاص خصوصی حق بازرسی قانونی ندارند؛ تنها لمس سطحی جهت کشف سلاح برای حفظ جان مجاز است."
      }
    }
  },
  {
    "id": "ihk-stgb-5",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Welche Delikte stellen ein Vergehen dar? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Einfacher Diebstahl nach § 242 StGB (Freiheitsstrafe bis zu 5 Jahren oder Geldstrafe).",
      "B) Hausfriedensbruch nach § 123 StGB (Freiheitsstrafe bis zu einem Jahr oder Geldstrafe).",
      "C) Raub nach § 249 StGB (Mindeststrafe 1 Jahr Freiheitsstrafe).",
      "D) Mord nach § 211 StGB (lebenslange Freiheitsstrafe)."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Einfacher Diebstahl nach § 242 StGB (Freiheitsstrafe bis zu 5 Jahren oder Geldstrafe).",
        "translations": {
          "ru": "Простая кража по § 242 StGB (лишение свободы до 5 лет или штраф).",
          "en": "Simple theft under § 242 StGB (imprisonment up to 5 years or fine).",
          "ar": "السرقة البسيطة بموجب الفقرة 242 StGB (عقوبة السجن حتى 5 سنوات أو الغرامة).",
          "fa": "سرقت ساده بر اساس ماده ۲۴۲ StGB (حبس تا ۵ سال یا جزای نقدی)."
        }
      },
      {
        "id": "b",
        "text": "B) Hausfriedensbruch nach § 123 StGB (Freiheitsstrafe bis zu einem Jahr oder Geldstrafe).",
        "translations": {
          "ru": "Нарушение неприкосновенности жилища/владения по § 123 StGB (лишение свободы до 1 года или штраф).",
          "en": "Trespass/breach of domestic peace under § 123 StGB (imprisonment up to one year or fine).",
          "ar": "انتهاك حرمة المكان بموجب الفقرة 123 StGB (السجن حتى سنة واحدة أو الغرامة).",
          "fa": "ورود غیرمجاز به ملک (هتک حرمت مسکن) بر اساس ماده ۱۲۳ StGB (حبس تا یک سال یا جزای نقدی)."
        }
      },
      {
        "id": "c",
        "text": "C) Raub nach § 249 StGB (Mindeststrafe 1 Jahr Freiheitsstrafe).",
        "translations": {
          "ru": "Грабеж/разбой по § 249 StGB (минимальное наказание — 1 год лишения свободы).",
          "en": "Robbery under § 249 StGB (minimum sentence 1 year imprisonment).",
          "ar": "السطو والسرقة بالإكراه بموجب الفقرة 249 StGB (عقوبة السجن لمدة لا تقل عن سنة).",
          "fa": "سرقت مقرون به آزار / زورگیری بر اساس ماده ۲۴۹ StGB (حداقل ۱ سال حبس)."
        }
      },
      {
        "id": "d",
        "text": "D) Mord nach § 211 StGB (lebenslange Freiheitsstrafe).",
        "translations": {
          "ru": "Убийство при отягчающих обстоятельствах по § 211 StGB (пожизненное заключение).",
          "en": "Murder under § 211 StGB (life imprisonment).",
          "ar": "القتل العمد مع سبق الإصرار بموجب الفقرة 211 StGB (السجن المؤبد).",
          "fa": "قتل عمد طبق ماده ۲۱۱ StGB (حبس ابد)."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Nach § 12 Abs. 2 StGB sind Vergehen rechtswidrige Taten, die im Mindestmaß mit einer geringeren Freiheitsstrafe oder mit Geldstrafe bedroht sind.",
    "translations": {
      "ru": {
        "question": "Какие преступления являются проступками (Vergehen)? (Выберите 2 ответа)",
        "explanation": "Согласно § 12 абз. 2 StGB проступки (Vergehen) — это деяния, за которые минимальное наказание менее 1 года тюрьмы или штраф."
      },
      "en": {
        "question": "Which offenses constitute a misdemeanor (Vergehen)? (Choose two correct answers)",
        "explanation": "Under § 12 (2) StGB, misdemeanors are unlawful acts threatened with a minimum penalty of less than one year imprisonment or a fine."
      },
      "ar": {
        "question": "أي من الجرائم التالية تصنف كـ «جنحة» (Vergehen)؟ (اختر إجابتين صحيحتين)",
        "explanation": "بموجب الفقرة 12 بند 2 StGB، الجنح هي أفعال غير مشروعة يعاقب عليها بحد أدنى أقل من سنة سجن أو بالغرامة المالية."
      },
      "fa": {
        "question": "کدام جرایم مصداق «جنحه» (Vergehen) هستند؟ (دو پاسخ صحیح)",
        "explanation": "طبق ماده ۱۲ بند ۲ StGB، جنحه جرمی است که حداقل مجازات قانونی آن کمتر از یک سال حبس یا جزای نقدی باشد."
      }
    }
  },
  {
    "id": "ihk-stgb-6",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was kennzeichnet ein Verbrechen nach § 12 Abs. 1 StGB?",
    "optionen": [
      "A) Taten, die im Mindestmaß mit einer Freiheitsstrafe von einem Jahr oder darüber bedroht sind (z. B. Raub, Brandstiftung, Totschlag).",
      "B) Jede Sachbeschädigung an Dienstfahrzeugen.",
      "C) Alle Ordnungswidrigkeiten nach der StVO.",
      "D) Straftaten, die nur mit Geldstrafe geahndet werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Taten, die im Mindestmaß mit einer Freiheitsstrafe von einem Jahr oder darüber bedroht sind (z. B. Raub, Brandstiftung, Totschlag).",
        "translations": {
          "ru": "Деяния, за которые законом предусмотрено минимальное наказание в виде 1 года лишения свободы или более (например, разбой, поджог, непредумышленное убийство).",
          "en": "Acts threatened by law with a minimum sentence of one year imprisonment or more (e.g. robbery, arson, manslaughter).",
          "ar": "الأفعال التي يعاقب عليها القانون بحد أدنى لعقوبة السجن لمدة سنة واحدة أو أكثر (مثل السطو، الحرق العمد، القتل).",
          "fa": "جرایمی که در حداقل مجازات قانونی، به یک سال حبس یا بیشتر محکوم می‌شوند (مانند سرقت مسلحانه/زورگیری، آتش‌افروزی عمدی، قتل)."
        }
      },
      {
        "id": "b",
        "text": "B) Jede Sachbeschädigung an Dienstfahrzeugen.",
        "translations": {
          "ru": "Любое повреждение служебных автомобилей.",
          "en": "Any property damage inflicted on service vehicles.",
          "ar": "أي إتلاف يلحق بسيارات الخدمة الأمنية.",
          "fa": "هرگونه آسیب به خودروهای گشت حراست."
        }
      },
      {
        "id": "c",
        "text": "C) Alle Ordnungswidrigkeiten nach der StVO.",
        "translations": {
          "ru": "Все административные правонарушения в сфере дорожного движения.",
          "en": "All administrative regulatory offenses under traffic laws.",
          "ar": "جميع المخالفات الإدارية المرورية.",
          "fa": "تمامی تخلفات اداری و راهنمایی و رانندگی."
        }
      },
      {
        "id": "d",
        "text": "D) Straftaten, die nur mit Geldstrafe geahndet werden.",
        "translations": {
          "ru": "Преступления, наказываемые исключительно денежным штрафом.",
          "en": "Criminal offenses punished solely by a financial fine.",
          "ar": "الجرائم الجنائية التي يعاقب عليها بالغرامة المالية فقط.",
          "fa": "جرایمی که صرفاً با جزای نقدی مجازات می‌شوند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Verbrechen sind Taten mit einer gesetzlichen Mindeststrafe von 1 Jahr Freiheitsstrafe (§ 12 Abs. 1 StGB).",
    "translations": {
      "ru": {
        "question": "Что характеризует преступление особой тяжести (Verbrechen) согласно § 12 абз. 1 StGB?",
        "explanation": "Тяжкие преступления (Verbrechen) — это деяния с минимальным сроком лишения свободы от 1 года."
      },
      "en": {
        "question": "What characterizes a felony (Verbrechen) under § 12 (1) StGB?",
        "explanation": "Felonies (Verbrechen) are criminal offenses with a statutory minimum penalty of 1 year imprisonment (§ 12 (1) StGB)."
      },
      "ar": {
        "question": "ما الذي يميز «الجناية» (Verbrechen) بموجب الفقرة 12 بند 1 StGB؟",
        "explanation": "الجنايات هي أفعال غير مشروعة يحدد القانون حدها الأدنى للعقوبة بالسجن لمدة سنة واحدة على الأقل."
      },
      "fa": {
        "question": "چه چیزی معرف «جنایت» (Verbrechen) بر اساس ماده ۱۲ بند ۱ StGB است؟",
        "explanation": "جنایت جرمی است که حداقل مجازات قانونی تعیین‌شده برای آن یک سال حبس یا بیشتر باشد."
      }
    }
  },
  {
    "id": "ihk-stgb-7",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was ist der rechtliche Unterschied zwischen Diebstahl (§ 242 StGB) und Raub (§ 249 StGB)? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Beim Diebstahl wird eine fremde bewegliche Sache ohne Gewalt weggenommen.",
      "B) Beim Raub wird die Wegnahme durch Gewalt gegen eine Person oder Drohung mit gegenwärtiger Gefahr für Leib oder Leben erzwungen.",
      "C) Diebstahl ist immer ein Verbrechen, Raub ein Vergehen.",
      "D) Raub setzt immer den Einsatz einer Schusswaffe voraus."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Beim Diebstahl wird eine fremde bewegliche Sache ohne Gewalt weggenommen.",
        "translations": {
          "ru": "При краже чужая движимая вещь изымается без применения насилия.",
          "en": "In theft, a movable item belonging to another is taken without using violence.",
          "ar": "في السرقة البسيطة يتم الاستيلاء على منقول مملوك للغير دون استخدام القوة والعنف.",
          "fa": "در سرقت ساده، مال منقول متعلق به دیگری بدون اعمال خشونت ربوده می‌شود."
        }
      },
      {
        "id": "b",
        "text": "B) Beim Raub wird die Wegnahme durch Gewalt gegen eine Person oder Drohung mit gegenwärtiger Gefahr für Leib oder Leben erzwungen.",
        "translations": {
          "ru": "При разбое изъятие вещи совершается с применением насилия к человеку или с угрозой непосредственной опасности для жизни или здоровья.",
          "en": "In robbery, taking is enforced using violence against a person or threats of imminent bodily harm or death.",
          "ar": "في السطو والسرقة بالإكراه يتم الاستيلاء بالقوة ضد شخص أو بالتهديد بخطر حال على النفس أو الحياة.",
          "fa": "در سرقت مقرون به آزار (زورگیری)، ربودن مال با اعمال خشونت فیزیکی یا تهدید به خطر جانی و جسمی فعلی انجام می‌گیرد."
        }
      },
      {
        "id": "c",
        "text": "C) Diebstahl ist immer ein Verbrechen, Raub ein Vergehen.",
        "translations": {
          "ru": "Кража всегда является тяжким преступлением, а разбой — проступком.",
          "en": "Theft is always a felony, while robbery is a misdemeanor.",
          "ar": "السرقة البسيطة دائماً جناية، والسطو بالإكراه جنحة.",
          "fa": "سرقت همیشه جنایت است و زورگیری جنحه."
        }
      },
      {
        "id": "d",
        "text": "D) Raub setzt immer den Einsatz einer Schusswaffe voraus.",
        "translations": {
          "ru": "Разбой всегда требует обязательного применения огнестрельного оружия.",
          "en": "Robbery strictly requires the active deployment of a firearm.",
          "ar": "يتطلب السطو دائماً استخدام سلاح ناري حصراً.",
          "fa": "زورگیری الزاماً نیازمند استفاده از سلاح گرم است."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Raub (§ 249 StGB) ist die qualifizierte Wegnahme unter Einsatz von Gewalt oder Drohung mit Leibesgefahr (Verbrechen). Diebstahl (§ 242 StGB) ist gewaltlos (Vergehen).",
    "translations": {
      "ru": {
        "question": "В чем правовое различие между кражей (§ 242 StGB) и грабежом/разбоем (§ 249 StGB)? (Выберите 2 ответа)",
        "explanation": "Разбой (§ 249) включает применение силы или угрозы жизни (тяжкое преступление), тогда как кража (§ 242) происходит без насилия (проступок)."
      },
      "en": {
        "question": "What is the legal difference between theft (§ 242 StGB) and robbery (§ 249 StGB)? (Choose two correct answers)",
        "explanation": "Robbery (§ 249 StGB) combines taking with physical force or threat to life (felony). Theft (§ 242 StGB) occurs without physical coercion (misdemeanor)."
      },
      "ar": {
        "question": "ما هو الفرق القانوني بين السرقة البسيطة (§ 242 StGB) والسرقة بالإكراه/السطو (§ 249 StGB)؟ (اختر إجابتين صحيحتين)",
        "explanation": "السرقة بالإكراه (§ 249) جناية تقترن بالعنف أو التهديد الجسدي، بينما السرقة البسيطة (§ 242) جنحة خالية من العنف."
      },
      "fa": {
        "question": "تفاوت حقوقی میان سرقت ساده (§ 242 StGB) و سرقت توأم با آزار/زورگیری (§ 249 StGB) چیست؟ (دو پاسخ صحیح)",
        "explanation": "زورگیری (§ 249) همراه با خشونت یا تهدید جانی بوده و جنایت است؛ اما سرقت ساده (§ 242) بدون خشونت و جنحه است."
      }
    }
  },
  {
    "id": "ihk-stgb-8",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Wann macht sich jemand des Hausfriedensbruchs nach § 123 StGB schuldig? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wer in die Wohnung, in die Geschäftsräume oder in das befriedete Besitztum eines anderen widerrechtlich eindringt.",
      "B) Wer ohne Befugnis darin verweilt und auf die Aufforderung des Berechtigten, sich zu entfernen, die Räumlichkeiten nicht verlässt.",
      "C) Wer vor dem Zaun eines Grundstücks auf dem öffentlichen Gehweg steht.",
      "D) Wer einen Parkschein im Parkhaus ordnungsgemäß bezahlt."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer in die Wohnung, in die Geschäftsräume oder in das befriedete Besitztum eines anderen widerrechtlich eindringt.",
        "translations": {
          "ru": "Кто противоправно проникает в жилище, служебные помещения или огороженное владение другого лица.",
          "en": "Anyone who unlawfully penetrates into the home, business premises, or enclosed property of another.",
          "ar": "كل من يقتحم بصورة غير مشروعة مسكن أو مقر عمل أو ملكاً محاطاً ومحصوراً للغير.",
          "fa": "هر کس به طور غیرقانونی وارد منزل، محل کار یا ملک محصور دیگری شود."
        }
      },
      {
        "id": "b",
        "text": "B) Wer ohne Befugnis darin verweilt und auf die Aufforderung des Berechtigten, sich zu entfernen, die Räumlichkeiten nicht verlässt.",
        "translations": {
          "ru": "Кто без разрешения остается там и не покидает помещения по требованию управомоченного лица.",
          "en": "Anyone who remains without authorization and refuses to leave upon being requested to do so by the entitled party.",
          "ar": "كل من يمكث دون وجه حق ويرفض المغادرة عند مطالبته بالخروج من صاحب الحق.",
          "fa": "هر کس بدون مجوز در آنجا بماند و با وجود درخواست فرد دارای حق، محل را ترک نکند."
        }
      },
      {
        "id": "c",
        "text": "C) Wer vor dem Zaun eines Grundstücks auf dem öffentlichen Gehweg steht.",
        "translations": {
          "ru": "Кто стоит перед забором участка на общественном тротуаре.",
          "en": "Anyone standing outside the property fence on the public sidewalk.",
          "ar": "من يقف خارج سور المنشأة على الرصيف العام.",
          "fa": "هر کس بیرون از فنس ملک روی پیاده‌رو عمومی بایستد."
        }
      },
      {
        "id": "d",
        "text": "D) Wer einen Parkschein im Parkhaus ordnungsgemäß bezahlt.",
        "translations": {
          "ru": "Кто надлежащим образом оплачивает парковочный талон на парковке.",
          "en": "Anyone who duly pays for a parking ticket in a parking garage.",
          "ar": "من يدفع تذكرة وقوف السيارات بانتظام في المرآب.",
          "fa": "کسی که هزینه پارک در پارکینگ طبقاتی را به درستی پرداخت کند."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Hausfriedensbruch (§ 123 StGB) hat 2 Begehungsformen: 1. Widerrechtliches Eindringen (Eindringungsbruch), 2. Nichtverlassen trotz Aufforderung (Verweilungsbruch). Es ist ein relatives Antragsdelikt.",
    "translations": {
      "ru": {
        "question": "Когда лицо считается виновным в нарушении неприкосновенности владения (Hausfriedensbruch) по § 123 StGB? (Выберите 2 ответа)",
        "explanation": "§ 123 StGB охватывает 2 формы: 1. Противоправное проникновение, 2. Отказ покинуть территорию после требования правообладателя."
      },
      "en": {
        "question": "When is someone guilty of breach of domestic peace / trespassing under § 123 StGB? (Choose two correct answers)",
        "explanation": "Trespass (§ 123 StGB) has 2 forms: 1. Unlawful entry (Eindringen), 2. Refusing to leave after being requested (Verweilen)."
      },
      "ar": {
        "question": "متى يكون الشخص مذنباً بانتهاك حرمة المكان (Hausfriedensbruch) بموجب الفقرة 123 StGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "له صورتان: 1. الاقتحام غير المشروع، 2. رفض الخروج رغم أمر صاحب الحق. وهو جنحة تتطلب شكوى للملاحقة."
      },
      "fa": {
        "question": "چه زمانی فرد مرتکب جرم هتک حرمت مسکن و ملک (Hausfriedensbruch) طبق ماده ۱۲۳ StGB می‌شود؟ (دو پاسخ صحیح)",
        "explanation": "این جرم دو حالت دارد: ۱. ورود غیرقانونی، ۲. عدم ترک محل علیرغم اخطار شخص دارای حق."
      }
    }
  },
  {
    "id": "ihk-stgb-9",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was ist ein \"befriedetes Besitztum\" im Sinne des § 123 StGB?",
    "optionen": [
      "A) Ein Bereich, der durch Schutzwehren (z. B. Zaun, Mauer, Hecke, Kette) nach außen hin erkennbar gegen unbefugtes Betreten gesichert ist.",
      "B) Ein offener Acker ohne jegliche Begrenzung.",
      "C) Ausschließlich ein bewohntes Schlafzimmer.",
      "D) Ein staatliches Naturschutzgebiet."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ein Bereich, der durch Schutzwehren (z. B. Zaun, Mauer, Hecke, Kette) nach außen hin erkennbar gegen unbefugtes Betreten gesichert ist.",
        "translations": {
          "ru": "Территория, которая с помощью ограждений (забора, стены, живой изгороди, цепи) визуально защищена от несанкционированного проникновения.",
          "en": "An area clearly demarcated and protected against unauthorized access by barriers (e.g. fence, wall, hedge, barrier chain).",
          "ar": "منطقة محاطة بحواجز حماية (مثل سياج، جدار، سياج شجري، سلسلة) ومؤمنة ظاهرياً ضد الدخول غير المصرح به.",
          "fa": "محدوده‌ای که از طریق موانع حفاظتی (مانند فنس، دیوار، پرچین، زنجیر) به طور مشخص در برابر ورود غیرمجاز محافظت شده است."
        }
      },
      {
        "id": "b",
        "text": "B) Ein offener Acker ohne jegliche Begrenzung.",
        "translations": {
          "ru": "Открытое поле без каких-либо границ.",
          "en": "An open field without any boundaries whatsoever.",
          "ar": "حقل مفتوح دون أي حدود أو أسوار.",
          "fa": "زمین کشاورزی بازی که فاقد هرگونه مرزبندی باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Ausschließlich ein bewohntes Schlafzimmer.",
        "translations": {
          "ru": "Исключительно жилая спальня.",
          "en": "Exclusively an inhabited bedroom.",
          "ar": "غرفة نوم مأهولة بالسكان حصراً.",
          "fa": "صرفاً یک اتاق خواب مسکونی."
        }
      },
      {
        "id": "d",
        "text": "D) Ein staatliches Naturschutzgebiet.",
        "translations": {
          "ru": "Государственный природный заповедник.",
          "en": "A state nature reserve.",
          "ar": "محمية طبيعية حكومية.",
          "fa": "منطقه حفاظت‌شده طبیعی دولتی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Befriedetes Besitztum ist ein Grundstück, das durch zusammenhängende Abgrenzungen (Zaun, Gitter, Schranke) gegen willkürliches Betreten gesichert ist.",
    "translations": {
      "ru": {
        "question": "Что такое «огороженное/защищенное владение» (befriedetes Besitztum) по смыслу § 123 StGB?",
        "explanation": "Огороженное владение — это территория, защищенная явными барьерами (забор, цепь, стена) от произвольного входа."
      },
      "en": {
        "question": "What is \"enclosed property\" (befriedetes Besitztum) within the meaning of § 123 StGB?",
        "explanation": "Enclosed property is real estate visibly shielded against arbitrary access by continuous barriers (fence, gate, wall)."
      },
      "ar": {
        "question": "ما هو «العقار المحصور والمؤمن» (befriedetes Besitztum) بمفهوم الفقرة 123 StGB؟",
        "explanation": "هو عقار محاط بحواجز واضحة (سياج، بوابة، جدار) تمنع الدخول العشوائي وغير المصرح به."
      },
      "fa": {
        "question": "«ملک محصور و حفاظت‌شده» (befriedetes Besitztum) در مفهوم ماده ۱۲۳ StGB چیست؟",
        "explanation": "ملکی است که توسط موانع فیزیکی ممتد (فنس، نرده، دیوار) در برابر ورود دلخواه افراد محافظت شده است."
      }
    }
  },
  {
    "id": "ihk-stgb-10",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was versteht man unter dem Begriff \"Notstand\" nach § 34 StGB (Rechtfertigender Notstand)? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib, Freiheit, Ehre, Eigentum oder ein anderes Rechtsgut eine Tat begeht, um die Gefahr abzuwenden, handelt nicht rechtswidrig.",
      "B) Bei der Abwägung der widerstreitenden Interessen muss das geschützte Interesse das beeinträchtigte wesentlich überwiegen.",
      "C) Notstand erlaubt jede vorsätzliche Tötung eines Menschen, wenn dadurch Eigentum geschützt wird.",
      "D) Notstand darf nur von Beamten geltend gemacht werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer in einer gegenwärtigen, nicht anders abwendbaren Gefahr für Leben, Leib, Freiheit, Ehre, Eigentum oder ein anderes Rechtsgut eine Tat begeht, um die Gefahr abzuwenden, handelt nicht rechtswidrig.",
        "translations": {
          "ru": "Кто совершает деяние для предотвращения наличной, неустранимой иным путем опасности для жизни, здоровья, свободы, чести, собственности или иного блага, действует правомерно.",
          "en": "Whoever commits an act to avert an imminent, otherwise unavoidable danger to life, body, freedom, honor, property, or other legal interest acts lawfully.",
          "ar": "من يرتكب فعلاً لدفع خطر حال لا يمكن تفاديه بوسيلة أخرى يهدد الحياة أو الجسد أو الحرية أو العرض أو الملكية لا يعد فعله غير مشروع.",
          "fa": "هر کس برای دفع خطر فعلی و غیرقابل اجتناب به جان، جسم، آزادی، آبرو یا مال، مرتکب عملی شود، عمل او غیرقانونی نیست."
        }
      },
      {
        "id": "b",
        "text": "B) Bei der Abwägung der widerstreitenden Interessen muss das geschützte Interesse das beeinträchtigte wesentlich überwiegen.",
        "translations": {
          "ru": "При взвешивании конфликтующих интересов защищаемый интерес должен существенно преобладать над нарушаемым.",
          "en": "When weighing conflicting interests, the protected interest must substantially outweigh the impaired one.",
          "ar": "عند الموازنة بين المصالح المتعارضة، يجب أن ترجح المصلحة المحمية رجحاناً جوهرياً على المصلحة المتضررة.",
          "fa": "در سنجش منافع متعارض، منفعت محافظت‌شده باید به طور چشمگیری بر منفعت تضییع‌شده برتری داشته باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Notstand erlaubt jede vorsätzliche Tötung eines Menschen, wenn dadurch Eigentum geschützt wird.",
        "translations": {
          "ru": "Крайняя необходимость разрешает любое умышленное убийство человека, если этим защищается имущество.",
          "en": "Necessity allows any intentional killing of a human being if property is thereby protected.",
          "ar": "تجيز حالة الضرورة قتل أي إنسان عمداً لحماية الأموال والممتلكات.",
          "fa": "اضطرار کشتن عمدی انسان را برای نجات مال مجاز می‌داند."
        }
      },
      {
        "id": "d",
        "text": "D) Notstand darf nur von Beamten geltend gemacht werden.",
        "translations": {
          "ru": "Крайняя необходимость может применяться исключительно государственными служащими.",
          "en": "Necessity may strictly be asserted only by public civil servants.",
          "ar": "لا يجوز التمسك بحالة الضرورة إلا للموظفين الحكوميين فقط.",
          "fa": "حالت اضطرار فقط توسط کارمندان رسمی دولت قابل استناد است."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§ 34 StGB erfordert eine Güterabwägung: Das geschützte Rechtsgut muss das geopferte Rechtsgut wesentlich überwiegen (z. B. Leben überwiegt Sachbeschädigung).",
    "translations": {
      "ru": {
        "question": "Что понимается под крайней необходимостью (Rechtfertigender Notstand) по § 34 StGB? (Выберите 2 ответа)",
        "explanation": "§ 34 StGB требует взвешивания интересов: спасаемое благо должно существенно превосходить жертвуемое (жизнь выше материального ущерба)."
      },
      "en": {
        "question": "What is understood by \"justifying necessity\" (Rechtfertigender Notstand) under § 34 StGB? (Choose two correct answers)",
        "explanation": "§ 34 StGB requires balancing goods: the protected legal interest must substantially outweigh the impaired one (e.g. human life outweighs property damage)."
      },
      "ar": {
        "question": "ماذا يقصد بمفهوم «حالة الضرورة المبررة» (Rechtfertigender Notstand) بموجب الفقرة 34 StGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "تشترط المادة 34 StGB موازنة الحقوق: يجب أن تفوق المصلحة المحمية المصلحة المضحى بها بشكل جوهري (حماية الحياة تفوق إتلاف مال)."
      },
      "fa": {
        "question": "مفهوم «اضطرار موجه‌کننده» (Rechtfertigender Notstand) بر اساس ماده ۳۴ StGB چیست؟ (دو پاسخ صحیح)",
        "explanation": "ماده ۳۴ StGB مستلزم سنجش ارزش‌ها است: حق محافظت‌شده باید به مراتب مهم‌تر از حق فداشده باشد (مثلاً حفظ جان در برابر تخریب مال)."
      }
    }
  },
  {
    "id": "ihk-stgb-11",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Wann liegt eine Körperverletzung nach § 223 StGB vor?",
    "optionen": [
      "A) Wer eine andere Person körperlich misshandelt oder an der Gesundheit schädigt.",
      "B) Jede unhöfliche Bemerkung im Gespräch.",
      "C) Das bloße Fotografieren einer Person im Freien.",
      "D) Die Verweigerung von Auskünften über das Wetter."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer eine andere Person körperlich misshandelt oder an der Gesundheit schädigt.",
        "translations": {
          "ru": "Кто подвергает другое лицо физическому насилию или причиняет вред его здоровью.",
          "en": "Anyone who physically maltreats another person or damages their health.",
          "ar": "كل من يعتدي بالضرب أو الإيذاء البدني على شخص آخر أو يلحق ضرراً بصحته.",
          "fa": "هر کس فرد دیگری را مورد آزار جسمی قرار دهد یا به سلامت او آسیب برساند."
        }
      },
      {
        "id": "b",
        "text": "B) Jede unhöfliche Bemerkung im Gespräch.",
        "translations": {
          "ru": "Любое невежливое замечание в разговоре.",
          "en": "Any impolite remark made during conversation.",
          "ar": "أي ملاحظة غير مهذبة في الحديث.",
          "fa": "هرگونه سخن غیرمؤدبانه در حین مکالمه."
        }
      },
      {
        "id": "c",
        "text": "C) Das bloße Fotografieren einer Person im Freien.",
        "translations": {
          "ru": "Простое фотографирование человека на открытом воздухе.",
          "en": "Mere photographing of a person outdoors.",
          "ar": "مجرد تصوير شخص في الهواء الطلق.",
          "fa": "صرف عکس گرفتن از یک فرد در فضای باز."
        }
      },
      {
        "id": "d",
        "text": "D) Die Verweigerung von Auskünften über das Wetter.",
        "translations": {
          "ru": "Отказ предоставить информацию о погоде.",
          "en": "Refusal to provide information about the weather.",
          "ar": "الامتناع عن تقديم معلومات عن حالة الطقس.",
          "fa": "امتناع از پاسخ دادن در مورد وضعیت آب و هوا."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "§ 223 StGB schützt die körperliche Unversehrtheit. Tatbestände: 1. Körperliche Misshandlung (üble, unangemessene Behandlung), 2. Gesundheitsschädigung (Hervorrufen/Steigern eines krankhaften Zustands).",
    "translations": {
      "ru": {
        "question": "Когда имеет место причинение телесных повреждений (Körperverletzung) по § 223 StGB?",
        "explanation": "§ 223 StGB защищает физическую неприкосновенность: 1. Физическое жестокое обращение, 2. Причинение вреда здоровью."
      },
      "en": {
        "question": "When is battery / bodily injury (Körperverletzung) present under § 223 StGB?",
        "explanation": "§ 223 StGB protects bodily integrity: 1. Physical mistreatment, 2. Damage to health (causing or worsening a pathological condition)."
      },
      "ar": {
        "question": "متى يتحقق جرم إلحاق الأذى البدني (Körperverletzung) بموجب الفقرة 223 StGB؟",
        "explanation": "تحمي المادة 223 السلامة الجسدية: 1. سوء المعاملة البدنية، 2. إلحاق الضرر بالصحة."
      },
      "fa": {
        "question": "چه زمانی جرم ایراد صدمه بدنی (Körperverletzung) طبق ماده ۲۲۳ StGB محقق می‌شود؟",
        "explanation": "ماده ۲۲۳ از تمامیت جسمانی محافظت می‌کند: ۱. بدرفتاری جسمی، ۲. آسیب به سلامت."
      }
    }
  },
  {
    "id": "ihk-stgb-12",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Welche Merkmale qualifizieren eine Körperverletzung zur \"Gefährlichen Körperverletzung\" nach § 224 StGB? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Begehung mittels einer Waffe oder eines anderen gefährlichen Werkzeugs (z. B. Schlagstock, abgebrochene Flasche, Springerstiefel).",
      "B) Begehung mit einem anderen Beteiligten gemeinschaftlich (z. B. zu zweit auf ein Opfer einprügeln).",
      "C) Wenn der Täter jünger als 21 Jahre ist.",
      "D) Wenn die Tat an einem Sonntag stattfindet."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Begehung mittels einer Waffe oder eines anderen gefährlichen Werkzeugs (z. B. Schlagstock, abgebrochene Flasche, Springerstiefel).",
        "translations": {
          "ru": "Совершение с применением оружия или иного опасного предмета (например, дубинки, разбитой бутылки, тяжелых армейских ботинок).",
          "en": "Commission by means of a weapon or another dangerous instrument (e.g. baton, broken glass bottle, combat boots).",
          "ar": "ارتكاب الجرم باستخدام سلاح أو أداة خطيرة (مثل هراوة، زجاجة مكسورة، حذاء عسكري ثقيل).",
          "fa": "ارتکاب جرم با استفاده از سلاح یا وسیله خطرناک (مانند باتوم، شیشه شکسته، پوتین سنگین)."
        }
      },
      {
        "id": "b",
        "text": "B) Begehung mit einem anderen Beteiligten gemeinschaftlich (z. B. zu zweit auf ein Opfer einprügeln).",
        "translations": {
          "ru": "Совершение группой лиц совместно с другим соучастником (например, избиение жертвы вдвоем).",
          "en": "Commission jointly with another accomplice (e.g. two persons beating up a single victim together).",
          "ar": "ارتكاب الجرم بالاشتراك مع شخص آخر (مثل قيام شخصين بضرب الضحية معاً).",
          "fa": "ارتکاب مشترک با فرد دیگر (مانند ضرب و شتم یک قربانی توسط دو نفر به صورت همزمان)."
        }
      },
      {
        "id": "c",
        "text": "C) Wenn der Täter jünger als 21 Jahre ist.",
        "translations": {
          "ru": "Когда правонарушителю менее 21 года.",
          "en": "When the perpetrator is younger than 21 years old.",
          "ar": "إذا كان عمر الجاني أقل من 21 عاماً.",
          "fa": "در صورتی که سن مرتکب کمتر از ۲۱ سال باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Wenn die Tat an einem Sonntag stattfindet.",
        "translations": {
          "ru": "Когда деяние совершено в воскресный день.",
          "en": "When the crime occurs on a Sunday.",
          "ar": "إذا وقعت الجريمة في يوم الأحد.",
          "fa": "در صورتی که جرم در روز یکشنبه رخ داده باشد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Qualifikationen nach § 224 StGB: Beibringung von Gift, Waffe/Werkzeug, hinterlistiger Überfall, gemeinschaftliche Begehung, lebensgefährdende Behandlung.",
    "translations": {
      "ru": {
        "question": "Какие признаки квалифицируют нанесение телесных повреждений как «опасные» (Gefährliche Körperverletzung) по § 224 StGB? (Выберите 2 ответа)",
        "explanation": "Квалифицирующие признаки § 224 StGB: оружие/опасные предметы, яд, нападение из засады, групповое совершение, угроза жизни."
      },
      "en": {
        "question": "Which factors qualify battery as \"dangerous bodily injury\" (Gefährliche Körperverletzung) under § 224 StGB? (Choose two correct answers)",
        "explanation": "Qualifying elements (§ 224 StGB): weapon/dangerous tool, poison, treacherous ambush, joint commission by multiple actors, life-threatening treatment."
      },
      "ar": {
        "question": "ما هي العناصر التي تصنف الإيذاء البدني كـ «إيذاء بدني خطير» بموجب الفقرة 224 StGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "عناصر التشديد بموجب المادة 224: استخدام سلاح/أداة خطيرة، السموم، الغدر، الاشتراك الجماعي، أو المعاملة المهددة للحياة."
      },
      "fa": {
        "question": "کدام مؤلفه‌ها صدمه بدنی را به «صدمه بدنی خطرناک» (Gefährliche Körperverletzung) طبق ماده ۲۲۴ StGB تبدیل می‌کنند؟ (دو پاسخ)",
        "explanation": "مؤلفه‌های مشدده ماده ۲۲۴: به کارگیری سلاح/ابزار خطرناک، سم، غافلگیری، ارتکاب گروهی یا رفتار تهدیدکننده حیات."
      }
    }
  },
  {
    "id": "ihk-stgb-13",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Wann macht sich eine Sicherheitskraft der Freiheitsberaubung nach § 239 StGB schuldig?",
    "optionen": [
      "A) Wenn sie einen Kunden ohne rechtfertigenden Grund (z. B. ohne Vorliegen der Voraussetzungen des § 127 StPO) einsperrt oder auf andere Weise der Freiheit beraubt.",
      "B) Wenn sie dem Kunden einen Hausverweis erteilt.",
      "C) Wenn sie einen Dieb bis zum Eintreffen der Polizei für 10 Minuten festhält.",
      "D) Wenn sie die Eingangstür der Dienststelle zur Nachtzeit abschließt."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wenn sie einen Kunden ohne rechtfertigenden Grund (z. B. ohne Vorliegen der Voraussetzungen des § 127 StPO) einsperrt oder auf andere Weise der Freiheit beraubt.",
        "translations": {
          "ru": "Когда она без законного основания (например, без наличия условий § 127 StPO) запирает клиента или иным способом лишает его свободы передвижения.",
          "en": "When they lock in a customer or otherwise deprive them of liberty without lawful justification (e.g. lacking requirements of § 127 StPO).",
          "ar": "عند حبس زبون أو تقييد حريته بأي وسيلة دون مبرر قانوني مشروع (مثل عدم توافر شروط المادة 127 StPO).",
          "fa": "هنگامی که مشتری را بدون دلیل قانونی موجه (مثلاً بدون وجود شرایط ماده ۱۲۷ StPO) محبوس کرده یا به هر نحو از آزادی محروم کند."
        }
      },
      {
        "id": "b",
        "text": "B) Wenn sie dem Kunden einen Hausverweis erteilt.",
        "translations": {
          "ru": "Когда она требует от клиента покинуть территорию объекта.",
          "en": "When they order a customer to leave the premises.",
          "ar": "عند إصدار أمر للزبون بمغادرة المكان.",
          "fa": "هنگامی که به مشتری دستور ترک محوطه را بدهد."
        }
      },
      {
        "id": "c",
        "text": "C) Wenn sie einen Dieb bis zum Eintreffen der Polizei für 10 Minuten festhält.",
        "translations": {
          "ru": "Когда она задерживает пойманного вора на 10 минут до приезда полиции.",
          "en": "When they detain a caught shoplifter for 10 minutes until police arrive.",
          "ar": "عند التحفظ على سارق لمدة 10 دقائق حتى وصول الشرطة.",
          "fa": "هنگامی که سارقی را به مدت ۱۰ دقیقه تا رسیدن پلیس متوقف نگه دارد."
        }
      },
      {
        "id": "d",
        "text": "D) Wenn sie die Eingangstür der Dienststelle zur Nachtzeit abschließt.",
        "translations": {
          "ru": "Когда она запирает входную дверь объекта на ночь.",
          "en": "When they lock the facility entrance door during nighttime.",
          "ar": "عند إقفال الباب الرئيسي للمنشأة ليلاً.",
          "fa": "هنگامی که درب ورودی ساختمان را در شب قفل کند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Unberechtigtes Einsperren oder Festhalten ohne gesetzliche Rechtfertigung erfüllt den Straftatbestand der Freiheitsberaubung (§ 239 StGB).",
    "translations": {
      "ru": {
        "question": "Когда сотрудник охраны признается виновным в незаконном лишении свободы (Freiheitsberaubung) по § 239 StGB?",
        "explanation": "Неправомерное запирание или удержание человека без законных оснований образует состав преступления по § 239 StGB."
      },
      "en": {
        "question": "When is a security guard guilty of unlawful deprivation of liberty (§ 239 StGB)?",
        "explanation": "Unjustified locking in or detaining of a person without statutory legal grounds constitutes false imprisonment (§ 239 StGB)."
      },
      "ar": {
        "question": "متى يعتبر حارس الأمن مذنباً بجرم الحرمان من الحرية (Freiheitsberaubung) بموجب الفقرة 239 StGB؟",
        "explanation": "احتجاز شخص أو حبسه دون مسوغ قانوني (مثل شروط المادة 127 StPO) يحقق جريمة الحرمان غير المشروع من الحرية."
      },
      "fa": {
        "question": "چه زمانی نیروی حراست مرتکب جرم سلب غیرقانونی آزادی (Freiheitsberaubung) طبق ماده ۲۳۹ StGB می‌شود؟",
        "explanation": "محبوس کردن یا نگه داشتن افراد بدون مجوز قانونی معتبر، مصداق سلب غیرقانونی آزادی (§ 239 StGB) است."
      }
    }
  },
  {
    "id": "ihk-stgb-14",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was versteht man unter Amtsanmaßung nach § 132 StGB? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wer sich unbefugt mit der Ausübung eines öffentlichen Amtes befasst.",
      "B) Wer eine Handlung vornimmt, welche nur kraft eines öffentlichen Amtes vorgenommen werden darf (z. B. Vorgabe, Polizist zu sein und Durchsuchung anordnen).",
      "C) Das Tragen einer vom Arbeitgeber gestellten Sicherheitsdienstuniform mit Firmenlogo.",
      "D) Das Rufen der Notrufnummer 110."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer sich unbefugt mit der Ausübung eines öffentlichen Amtes befasst.",
        "translations": {
          "ru": "Кто самовольно берет на себя исполнение государственной должности.",
          "en": "Anyone who unlawfully engages in the exercise of a public office.",
          "ar": "كل من يتولى دون وجه حق ممارسة وظيفة وسلطة رسمية عامة.",
          "fa": "هر کس بدون داشتن سمت، اقدام به اعمال وظایف یک مقام رسمی دولتی کند."
        }
      },
      {
        "id": "b",
        "text": "B) Wer eine Handlung vornimmt, welche nur kraft eines öffentlichen Amtes vorgenommen werden darf (z. B. Vorgabe, Polizist zu sein und Durchsuchung anordnen).",
        "translations": {
          "ru": "Кто совершает действие, которое разрешено исключительно в силу государственной должности (например, выдает себя за полицейского и требует обыска).",
          "en": "Anyone who performs an act that may only be performed by virtue of holding public office (e.g. pretending to be police and ordering searches).",
          "ar": "كل من يقوم بعمل لا يجوز تنفيذه إلا بموجب سلطة رسمية عامة (مثل الادعاء بأنه شرطي والأمر بالتفتيش).",
          "fa": "هر کس عملی را انجام دهد که تنها از اختیارات مقامات رسمی است (مانند تظاهر به پلیس بودن و دستور تفتیش دادن)."
        }
      },
      {
        "id": "c",
        "text": "C) Das Tragen einer vom Arbeitgeber gestellten Sicherheitsdienstuniform mit Firmenlogo.",
        "translations": {
          "ru": "Ношение служебной формы охранника с логотипом компании, выданной работодателем.",
          "en": "Wearing an employer-issued security service uniform displaying the corporate company logo.",
          "ar": "ارتداء الزي الرسمي للحراسة المقدم من صاحب العمل والمزود بشعار الشركة.",
          "fa": "پوشیدن لباس فرم حراست ارائه‌شده توسط کارفرما به همراه آرم و نشان شرکت."
        }
      },
      {
        "id": "d",
        "text": "D) Das Rufen der Notrufnummer 110.",
        "translations": {
          "ru": "Звонок по номеру экстренной помощи 110.",
          "en": "Calling the emergency police dispatch number 110.",
          "ar": "الاتصال برقم طوارئ الشرطة 110.",
          "fa": "تماس با شماره اضطراری پلیس ۱۱۰."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Amtsanmaßung begeht, wer hoheitliche Befugnisse vortäuscht oder Amtshandlungen vornimmt, die ausschließlich staatlichen Amtsträgern zustehen.",
    "translations": {
      "ru": {
        "question": "Что понимается под присвоением властных полномочий (Amtsanmaßung) по § 132 StGB? (Выберите 2 ответа)",
        "explanation": "Присвоение полномочий — это выдача себя за представителя власти или совершение действий, доступных только госслужащим."
      },
      "en": {
        "question": "What is understood by \"usurpation of public authority\" (Amtsanmaßung) under § 132 StGB? (Choose two correct answers)",
        "explanation": "Usurpation occurs when someone feigns official sovereign powers or performs acts exclusively reserved for public authorities."
      },
      "ar": {
        "question": "ماذا يقصد بجرم «انتحال صفة وسلطة وظيفية عامة» (Amtsanmaßung) بموجب الفقرة 132 StGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "يتحقق الانتحال بادعاء سلطات سيادية رسمية أو القيام بأعمال مخصصة حصراً لرجال الضبط ورجال الدولة."
      },
      "fa": {
        "question": "مفهوم جرم «غصب عنوان و اختیارات دولتی» (Amtsanmaßung) طبق ماده ۱۳۲ StGB چیست؟ (دو پاسخ صحیح)",
        "explanation": "غصب عنوان زمانی رخ می‌دهد که فرد وانمود به داشتن اختیارات حاکمیتی کرده یا اعمالی را انجام دهد که منحصراً در صلاحیت مأموران رسمی است."
      }
    }
  },
  {
    "id": "ihk-stgb-15",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was ist ein Antragsdelikt im Strafrecht?",
    "optionen": [
      "A) Eine Straftat, die grundsätzlich nur verfolgt wird, wenn der Geschädigte fristgerecht (innerhalb von 3 Monaten) einen Strafantrag stellt (z. B. Hausfriedensbruch, Beleidigung).",
      "B) Eine Straftat, die immer von Amts wegen verfolgt werden muss.",
      "C) Jede Tat, die im Ausland verübt wurde.",
      "D) Ein Delikt, bei dem der Täter einen Antrag auf Freispruch stellt."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Eine Straftat, die grundsätzlich nur verfolgt wird, wenn der Geschädigte fristgerecht (innerhalb von 3 Monaten) einen Strafantrag stellt (z. B. Hausfriedensbruch, Beleidigung).",
        "translations": {
          "ru": "Преступление, которое преследуется лишь при условии подачи потерпевшим заявления о привлечении к ответственности в установленный срок (3 месяца), например, оскорбление, нарушение владения.",
          "en": "An offense prosecuted fundamentally only if the aggrieved victim submits a formal criminal complaint within the statutory 3-month deadline (e.g. trespass, insult).",
          "ar": "جريمة لا تلاحق قضائياً كأصل عام إلا إذا تقدم المتضرر بشكوى جنائية رسمية خلال المهلة المحددة (3 أشهر)، مثل الإهانة وانتهاك حرمة المكان.",
          "fa": "جرمی که اصولاً تنها در صورت ثبت شکایت کیفری توسط متضرر ظرف مهلت قانونی (۳ ماه) پیگیری می‌شود (مانند توهین، ورود غیرمجاز)."
        }
      },
      {
        "id": "b",
        "text": "B) Eine Straftat, die immer von Amts wegen verfolgt werden muss.",
        "translations": {
          "ru": "Преступление, которое всегда обязательно преследуется государством ex officio.",
          "en": "A criminal offense that must strictly be prosecuted ex officio by authorities at all times.",
          "ar": "جريمة يجب على النيابة العامة ملاحقتها تلقائياً بحكم وظيفتها دائماً.",
          "fa": "جرمی که همواره باید رأساً توسط دادستان و مراجع دولتی پیگیری شود."
        }
      },
      {
        "id": "c",
        "text": "C) Jede Tat, die im Ausland verübt wurde.",
        "translations": {
          "ru": "Любое деяние, совершенное за границей.",
          "en": "Any criminal act committed on foreign territory.",
          "ar": "أي فعل جنائي يرتكب خارج حدود الدولة.",
          "fa": "هر جرمی که در خارج از کشور واقع شده باشد."
        }
      },
      {
        "id": "d",
        "text": "D) Ein Delikt, bei dem der Täter einen Antrag auf Freispruch stellt.",
        "translations": {
          "ru": "Преступление, при котором обвиняемый подает заявление об оправдании.",
          "en": "An offense in which the offender applies for acquittal.",
          "ar": "جريمة يقدم فيها الجاني طلباً للحصول على البراءة.",
          "fa": "جرمی که در آن متهم درخواست تبرئه می‌نماید."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Bei Antragsdelikten (§ 77b StGB) ist ein form- und fristgerechter Strafantrag des Verletzten Prozessvoraussetzung (Frist: 3 Monate ab Kenntnis).",
    "translations": {
      "ru": {
        "question": "Что такое преступление частного обвинения (Antragsdelikt) в уголовном праве?",
        "explanation": "По делам частного обвинения (§ 77b StGB) заявление потерпевшего является обязательным условием (срок — 3 месяца)."
      },
      "en": {
        "question": "What is a complaint-dependent offense (Antragsdelikt) in criminal law?",
        "explanation": "For complaint offenses (§ 77b StGB), a timely complaint filed by the victim within 3 months of knowledge is a mandatory procedural requirement."
      },
      "ar": {
        "question": "ما هي «جرائم الشكوى» (Antragsdelikt) في القانون الجنائي؟",
        "explanation": "جرائم الشكوى (§ 77b StGB) تتطلب شكوى رسمية من المجني عليه خلال 3 أشهر من علمه بالواقعة كشرط أساسي لتحريك الدعوى."
      },
      "fa": {
        "question": "«جرم شکایتی / وابسته به شکایت شاکی» (Antragsdelikt) در حقوق کیفری چیست؟",
        "explanation": "در این جرایم (§ 77b StGB) ثبت شکایت رسمی توسط زیان‌دیده ظرف مهلت ۳ ماه از تاریخ اطلاع، شرط لازم برای تعقیب کیفری است."
      }
    }
  },
  {
    "id": "ihk-stgb-16",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Welche Delikte sind typische Offizialdelikte? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Raub nach § 249 StGB.",
      "B) Brandstiftung nach § 306 StGB.",
      "C) Einfache Beleidigung nach § 185 StGB.",
      "D) Hausfriedensbruch nach § 123 StGB."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Raub nach § 249 StGB.",
        "translations": {
          "ru": "Разбой/грабеж по § 249 StGB.",
          "en": "Robbery under § 249 StGB.",
          "ar": "السطو والسرقة بالإكراه بموجب الفقرة 249 StGB.",
          "fa": "زورگیری و سرقت مقرون به آزار طبق ماده ۲۴۹ StGB."
        }
      },
      {
        "id": "b",
        "text": "B) Brandstiftung nach § 306 StGB.",
        "translations": {
          "ru": "Поджог по § 306 StGB.",
          "en": "Arson under § 306 StGB.",
          "ar": "الحرق العمد بموجب الفقرة 306 StGB.",
          "fa": "آتش‌افروزی عمدی طبق ماده ۳۰۶ StGB."
        }
      },
      {
        "id": "c",
        "text": "C) Einfache Beleidigung nach § 185 StGB.",
        "translations": {
          "ru": "Простое оскорбление по § 185 StGB.",
          "en": "Simple insult under § 185 StGB.",
          "ar": "الإهانة والسب البسيط بموجب الفقرة 185 StGB.",
          "fa": "توهین ساده طبق ماده ۱۸۵ StGB."
        }
      },
      {
        "id": "d",
        "text": "D) Hausfriedensbruch nach § 123 StGB.",
        "translations": {
          "ru": "Нарушение неприкосновенности владения по § 123 StGB.",
          "en": "Breach of domestic peace / trespass under § 123 StGB.",
          "ar": "انتهاك حرمة المكان بموجب الفقرة 123 StGB.",
          "fa": "ورود غیرمجاز به ملک طبق ماده ۱۲۳ StGB."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Offizialdelikte (wie Raub, Mord, Brandstiftung, Diebstahl) werden von der Staatsanwaltschaft von Amts wegen ohne Strafantrag verfolgt.",
    "translations": {
      "ru": {
        "question": "Какие преступления относятся к делам публичного обвинения (Offizialdelikte)? (Выберите 2 ответа)",
        "explanation": "Дела публичного обвинения (разбой, поджог, убийство) преследуются прокуратурой автоматически без необходимости заявления потерпевшего."
      },
      "en": {
        "question": "Which offenses are typical ex officio crimes (Offizialdelikte)? (Choose two correct answers)",
        "explanation": "Offenses prosecuted ex officio (e.g. robbery, arson, murder) must be prosecuted by public prosecutors automatically without private complaint."
      },
      "ar": {
        "question": "أي من الجرائم التالية تعد من جرائم الحق العام (Offizialdelikte)؟ (اختر إجابتين صحيحتين)",
        "explanation": "جرائم الحق العام (كالسطو، الحرق العمد، القتل) تلاحقها النيابة العامة تلقائياً دون الحاجة لشكوى من المجني عليه."
      },
      "fa": {
        "question": "کدام جرایم مصداق بارز جرایم عمومی / غیرقابل گذشت (Offizialdelikte) هستند؟ (دو پاسخ صحیح)",
        "explanation": "جرایم عمومی (مانند زورگیری، آتش‌افروزی عمدی، قتل) توسط دادستان به طور خودکار و بدون نیاز به شکایت شاکی خصوصی پیگیری می‌شوند."
      }
    }
  },
  {
    "id": "ihk-stgb-17",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was regelt § 323c StGB (Unterlassene Hilfeleistung)?",
    "optionen": [
      "A) Wer bei Unglücksfällen oder gemeiner Gefahr oder Not nicht Hilfe leistet, obwohl dies erforderlich und ihm nach den Umständen zuzumuten ist.",
      "B) Das Nichtbezahlen von Parkgebühren.",
      "C) Das Verweigern von Überstunden im Sicherheitsdienst.",
      "D) Die unterlassene Anzeige einer einfachen Beleidigung."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer bei Unglücksfällen oder gemeiner Gefahr oder Not nicht Hilfe leistet, obwohl dies erforderlich und ihm nach den Umständen zuzumuten ist.",
        "translations": {
          "ru": "Кто не оказывает помощь при несчастных случаях, общей опасности или бедствии, хотя это необходимо и посильно в данных обстоятельствах.",
          "en": "Anyone who fails to render aid in accidents or common danger/emergency, even though it is necessary and reasonably expected under the circumstances.",
          "ar": "كل من يمتنع عن تقديم المساعدة في حالات الحوادث أو الخطر العام، رغم كونها ضرورية وفي مقدوره وتحت استطاعته دون تعريض نفسه لخطر جسيم.",
          "fa": "هر کس در هنگام وقوع حوادث، خطر عمومی یا وضعیت اضطراری از کمک‌رسانی خودداری کند، در حالی که کمک لازم و با توجه به شرایط برای وی مقدور بوده است."
        }
      },
      {
        "id": "b",
        "text": "B) Das Nichtbezahlen von Parkgebühren.",
        "translations": {
          "ru": "Неуплату сборов за парковку.",
          "en": "Failure to pay municipal parking fees.",
          "ar": "الامتناع عن سداد رسوم وقوف السيارات.",
          "fa": "عدم پرداخت هزینه پارک خودرو."
        }
      },
      {
        "id": "c",
        "text": "C) Das Verweigern von Überstunden im Sicherheitsdienst.",
        "translations": {
          "ru": "Отказ от сверхурочной работы в службе охраны.",
          "en": "Refusal to work overtime hours in security guarding.",
          "ar": "رفض العمل لساعات إضافية في وردية الحراسة.",
          "fa": "امتناع از انجام اضافه‌کاری در شیفت نگهبانی."
        }
      },
      {
        "id": "d",
        "text": "D) Die unterlassene Anzeige einer einfachen Beleidigung.",
        "translations": {
          "ru": "Неподачу заявления о простом оскорблении.",
          "en": "Failure to report a simple verbal insult.",
          "ar": "عدم الإبلاغ عن واقعة سب بسيطة.",
          "fa": "عدم گزارش یک توهین کلامی ساده."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "§ 323c StGB verpflichtet jedermann bei Unglücksfällen zur zumutbaren Hilfeleistung. Sicherheitsmitarbeiter haben durch ihre Garantenstellung oft noch gesteigerte Pflichten.",
    "translations": {
      "ru": {
        "question": "Что регулирует § 323c StGB (Неоказание помощи при опасности)?",
        "explanation": "§ 323c StGB обязывает каждого оказывать посильную помощь при несчастных случаях и ЧС."
      },
      "en": {
        "question": "What does § 323c StGB (Failure to render assistance) regulate?",
        "explanation": "§ 323c StGB mandates everyone to render reasonable assistance during accidents and emergencies."
      },
      "ar": {
        "question": "ماذا تنظم الفقرة 323c StGB (الامتناع عن تقديم المساعدة)؟",
        "explanation": "تلزم المادة 323c StGB كل شخص بتقديم المساعدة الممكنة والمستطاعة عند وقوع حوادث أو كوارث أو أخطار عامة."
      },
      "fa": {
        "question": "ماده ۳۲۳c قانون مجازات (StGB) در مورد خودداری از کمک‌رسانی چه حکمی دارد؟",
        "explanation": "ماده ۳۲۳c هر فردی را موظف به ارائه کمک مقدور و ممکن در هنگام وقوع سوانح و شرایط اضطراری می‌نماید."
      }
    }
  },
  {
    "id": "ihk-stgb-18",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Was kennzeichnet den Tatbestand der Nötigung nach § 240 StGB? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wer einen Menschen rechtswidrig mit Gewalt oder durch Drohung mit einem empfindlichen Übel zu einer Handlung, Duldung oder Unterlassung nötigt.",
      "B) Die Anwendung von Gewalt oder Drohung muss als verwerflich anzusehen sein.",
      "C) Das rechtmäßige Festhalten eines Straftäters nach § 127 StPO.",
      "D) Die Ausübung des Hausrechts durch Aussprechen eines Hausverbots."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wer einen Menschen rechtswidrig mit Gewalt oder durch Drohung mit einem empfindlichen Übel zu einer Handlung, Duldung oder Unterlassung nötigt.",
        "translations": {
          "ru": "Кто противоправно принуждает человека с применением насилия или угрозой причинения существенного вреда к действию, терпению или бездействию.",
          "en": "Anyone who unlawfully coerces a person by force or by threat of substantial harm to perform, tolerate, or omit an act.",
          "ar": "كل من يُكره إنساناً بشكل غير مشروع بالعنف أو بالتهديد بضرر جسيم على ارتكاب فعل أو تحمله أو الامتناع عنه.",
          "fa": "هر کس به طور غیرقانونی فردی را با اعمال خشونت یا تهدید به آسیبی شدید به انجام کاری، تحمل عملی یا خودداری از کاری وادار کند."
        }
      },
      {
        "id": "b",
        "text": "B) Die Anwendung von Gewalt oder Drohung muss als verwerflich anzusehen sein.",
        "translations": {
          "ru": "Применение силы или угроз должно признаваться предосудительным/недопустимым с точки зрения правопорядка.",
          "en": "The use of violence or threat must be considered reprehensible and ethically unacceptable.",
          "ar": "يجب أن يعتبر استخدام القوة أو التهديد تصرفاً معيباً وغير مبرر قانونياً وأخلاقياً.",
          "fa": "کاربرد زور یا تهدید باید از نظر حقوقی و اخلاقی نکوهیده و غیرقابل قبول تلقی شود."
        }
      },
      {
        "id": "c",
        "text": "C) Das rechtmäßige Festhalten eines Straftäters nach § 127 StPO.",
        "translations": {
          "ru": "Правомерное задержание преступника согласно § 127 StPO.",
          "en": "Lawful detention of a perpetrator under § 127 StPO.",
          "ar": "التوقيف القانوني المشروع لمرتكب جريمة بموجب المادة 127 StPO.",
          "fa": "بازداشت قانونی مجرم بر اساس ماده ۱۲۷ آیین دادرسی کیفری."
        }
      },
      {
        "id": "d",
        "text": "D) Die Ausübung des Hausrechts durch Aussprechen eines Hausverbots.",
        "translations": {
          "ru": "Осуществление права хозяина путем объявления запрета на вход.",
          "en": "Exercising domiciliary authority by issuing a ban from premises.",
          "ar": "ممارسة حق المكان عبر إصدار قرار منع الدخول.",
          "fa": "اعمال حق مالکانه از طریق صدور حکم ممنوعیت ورود."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Nötigung (§ 240 StGB) bestraft die rechtswidrige Willensbeugung mittels Gewalt oder Drohung mit empfindlichem Übel.",
    "translations": {
      "ru": {
        "question": "Что характеризует состав принуждения (Nötigung) по § 240 StGB? (Выберите 2 ответа)",
        "explanation": "Принуждение (§ 240 StGB) наказывает за противоправное подавление воли путем насилия или угрозы тяжким вредом, признанное предосудительным."
      },
      "en": {
        "question": "What characterizes the offense of coercion (Nötigung) under § 240 StGB? (Choose two correct answers)",
        "explanation": "Coercion (§ 240 StGB) penalizes unlawfully overriding another's will via physical force or severe threats judged ethically reprehensible."
      },
      "ar": {
        "question": "ما هي العناصر التي تميز جريمة «الإكراه / الإجبار» (Nötigung) بموجب الفقرة 240 StGB؟ (اختر إجابتين صحيحتين)",
        "explanation": "يعاقب الإكراه (§ 240 StGB) على قهر إرادة الغير بصورة غير مشروعة عبر العنف أو التهديد بضرر بالغ."
      },
      "fa": {
        "question": "چه مواردی معرف ارکان جرم «اکراه و اجبار» (Nötigung) طبق ماده ۲۴۰ StGB است؟ (دو پاسخ صحیح)",
        "explanation": "جرم اکراه (§ 240 StGB) به مجازات تحمیل غیرقانونی اراده بر دیگری از طریق زور یا تهدید به شر و آسیب قابل توجه می‌پردازد."
      }
    }
  },
  {
    "id": "ihk-stgb-19",
    "kategorie": "Straf- und Strafverfahrensrecht (StGB / StPO)",
    "frage": "Wann spricht man von Notwehrhilfe im Strafrecht?",
    "optionen": [
      "A) Wenn die Notwehrhandlung zugunsten eines Dritten geleistet wird, der gegenwärtig und rechtswidrig angegriffen wird.",
      "B) Wenn die Polizei per Telefon Anweisungen gibt.",
      "C) Wenn man dem Täter bei der Flucht hilft.",
      "D) Wenn man nach der Tat die Spuren beseitigt."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wenn die Notwehrhandlung zugunsten eines Dritten geleistet wird, der gegenwärtig und rechtswidrig angegriffen wird.",
        "translations": {
          "ru": "Когда действие самообороны совершается в пользу третьего лица, подвергающегося наличному противоправному нападению.",
          "en": "When the defensive act is performed in favor of a third party who is facing an imminent and unlawful attack.",
          "ar": "عندما يُمارس فعل الدفاع الشرعي لصالح شخص ثالث يتعرض لاعتداء حال وغير مشروع.",
          "fa": "هنگامی که اقدام دفاعی به نفع شخص ثالثی انجام شود که مورد حمله فعلی و غیرقانونی قرار گرفته است."
        }
      },
      {
        "id": "b",
        "text": "B) Wenn die Polizei per Telefon Anweisungen gibt.",
        "translations": {
          "ru": "Когда полиция дает указания по телефону.",
          "en": "When the police give tactical instructions over the phone.",
          "ar": "عندما تعطي الشرطة تعليمات عبر الهاتف.",
          "fa": "هنگامی که پلیس از پشت تلفن دستورالعمل ارائه دهد."
        }
      },
      {
        "id": "c",
        "text": "C) Wenn man dem Täter bei der Flucht hilft.",
        "translations": {
          "ru": "Когда помогают преступнику скрыться с места.",
          "en": "When assisting the offender in fleeing the scene.",
          "ar": "عند مساعدة الجاني على الهروب.",
          "fa": "هنگامی که به فرار مجرم کمک شود."
        }
      },
      {
        "id": "d",
        "text": "D) Wenn man nach der Tat die Spuren beseitigt.",
        "translations": {
          "ru": "Когда после преступления уничтожают улики.",
          "en": "When concealing physical evidence after the offense.",
          "ar": "عند محو وإخفاء الآثار بعد الجريمة.",
          "fa": "هنگامی که پس از ارتکاب جرم آثار و ردپای آن محو گردد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Notwehrhilfe (§ 32 Abs. 2 Alt. 2 StGB) ist die Abwehr eines gegenwärtigen rechtswidrigen Angriffs auf die Rechtsgüter einer anderen Person.",
    "translations": {
      "ru": {
        "question": "Когда в уголовном праве говорят о помощи при необходимой обороне (Notwehrhilfe)?",
        "explanation": "Помощь при самообороне (§ 32 абз. 2 StGB) — это отражение наличного противоправного нападения на другого человека."
      },
      "en": {
        "question": "When does criminal law speak of \"defense of others / emergency aid\" (Notwehrhilfe)?",
        "explanation": "Defense of others (§ 32 (2) StGB) is averting an imminent unlawful attack aimed at another person's legal interests."
      },
      "ar": {
        "question": "متى يتحقق مفهوم «نجدة الدفاع الشرعي عن الغير» (Notwehrhilfe) في القانون الجنائي؟",
        "explanation": "نجدة الدفاع الشرعي (§ 32 فقرة 2 StGB) هي صد اعتداء حال وغير مشروع يهدد حقوق ومصالح شخص آخر."
      },
      "fa": {
        "question": "در حقوق کیفری چه زمانی از «کمک در دفاع مشروع / دفاع از دیگری» (Notwehrhilfe) سخن به میان می‌آید؟",
        "explanation": "دفاع از دیگری (§ 32 بند ۲ StGB) عبارت است از دفع حمله فعلی و غیرقانونی که علیه حقوق شخص دیگری صورت گرفته است."
      }
    }
  },
  {
    "id": "ihk-menschen-1",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was ist das oberste Ziel professioneller Kommunikation im Sicherheitsdienst?",
    "optionen": [
      "A) Konflikte frühzeitig erkennen und durch deeskalierendes Verhalten gewaltfrei lösen.",
      "B) Dem Gegenüber stets die eigene körperliche Überlegenheit zu demonstrieren.",
      "C) Jedes Streitgespräch sofort mit Schlägen zu beenden.",
      "D) Kunden einzuschüchtern, damit sie keine Fragen mehr stellen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Konflikte frühzeitig erkennen und durch deeskalierendes Verhalten gewaltfrei lösen.",
        "translations": {
          "ru": "Своевременно распознавать конфликты и бесконфликтно разрешать их с помощью деэскалации.",
          "en": "Recognizing conflicts early and resolving them non-violently through de-escalating behavior.",
          "ar": "التعرف المبكر على النزاعات وحلها سلمياً بدون عنف عبر أساليب التهدئة.",
          "fa": "شناسایی زودهنگام تعارضات و حل غیرخشونت‌آمیز آن‌ها از طریق رفتار تنش‌زدا."
        }
      },
      {
        "id": "b",
        "text": "B) Dem Gegenüber stets die eigene körperliche Überlegenheit zu demonstrieren.",
        "translations": {
          "ru": "Всегда демонстрировать собеседнику свое физическое превосходство.",
          "en": "Always demonstrating one's own physical superiority to the counterpart.",
          "ar": "إظهار التفوق البدني أمام الطرف الآخر دائماً.",
          "fa": "نشان دادن دائمی برتری فیزیکی خود به طرف مقابل."
        }
      },
      {
        "id": "c",
        "text": "C) Jedes Streitgespräch sofort mit Schlägen zu beenden.",
        "translations": {
          "ru": "Немедленно прекращать любой спор дракой.",
          "en": "Immediately ending any verbal dispute with physical blows.",
          "ar": "إنهاء كل مشادة كلامية فوراً بالضرب.",
          "fa": "پایان دادن فوری به هر مشاجره لفظی با اعمال ضرب و شتم."
        }
      },
      {
        "id": "d",
        "text": "D) Kunden einzuschüchtern, damit sie keine Fragen mehr stellen.",
        "translations": {
          "ru": "Запугивать клиентов, чтобы они больше не задавали вопросов.",
          "en": "Intimidating customers so they refrain from asking questions.",
          "ar": "ترهيب العملاء حتى لا يطرحوا أي أسئلة أخرى.",
          "fa": "ارعاب و ترساندن مشتریان تا دیگر سؤالی نپرسند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Deeskalation und gewaltfreie Konfliktlösung stehen an erster Stelle, um Gefahren für alle Beteiligten zu minimieren.",
    "translations": {
      "ru": {
        "question": "Какова главная цель профессионального общения в службе безопасности?",
        "explanation": "Деэскалация и ненасильственное решение конфликтов стоят на первом месте для минимизации рисков."
      },
      "en": {
        "question": "What is the primary objective of professional communication in security guarding?",
        "explanation": "De-escalation and non-violent conflict resolution take top priority to minimize dangers for all involved."
      },
      "ar": {
        "question": "ما هو الهدف الأسمى للتواصل المهني في خدمات الحراسة والأمن؟",
        "explanation": "تأتي التهدئة وحل النزاعات بدون عنف في المقام الأول لتقليل المخاطر على جميع الأطراف."
      },
      "fa": {
        "question": "هدف اصلی ارتباط حرفه‌ای در خدمات حراست و امنیت چیست؟",
        "explanation": "تنش‌زدایی و حل مسالمت‌آمیز اختلافات در اولویت اول قرار دارد تا خطرات به حداقل برسد."
      }
    }
  },
  {
    "id": "ihk-menschen-2",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Welche Faktoren fördern die Entstehung von Frustration und Aggression bei Kunden? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Lange Wartezeiten, unklare Anweisungen und respektloses Auftreten des Personals.",
      "B) Alkohol- und Drogenkonsum in Kombination mit überfüllten Räumen.",
      "C) Höfliche und transparente Kommunikation.",
      "D) Saubere und gut beleuchtete Eingangsbereiche."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Lange Wartezeiten, unklare Anweisungen und respektloses Auftreten des Personals.",
        "translations": {
          "ru": "Длительное время ожидания, неясные инструкции и неуважительное поведение персонала.",
          "en": "Long waiting times, unclear instructions, and disrespectful behavior by staff.",
          "ar": "فترات الانتظار الطويلة، التعليمات غير الواضحة، والتعامل غير المحترم من الموظفين.",
          "fa": "زمان انتظار طولانی، دستورالعمل‌های مبهم و رفتار غیرمحترمانه پرسنل."
        }
      },
      {
        "id": "b",
        "text": "B) Alkohol- und Drogenkonsum in Kombination mit überfüllten Räumen.",
        "translations": {
          "ru": "Употребление алкоголя и наркотиков в сочетании с переполненными помещениями.",
          "en": "Alcohol and drug consumption combined with overcrowded premises.",
          "ar": "تعاطي الكحول والمخدرات إلى جانب ازدحام الأماكن.",
          "fa": "مصرف الکل و مواد مخدر همراه با شلوغی بیش از حد محیط."
        }
      },
      {
        "id": "c",
        "text": "C) Höfliche und transparente Kommunikation.",
        "translations": {
          "ru": "Вежливое и открытое общение.",
          "en": "Polite and transparent communication.",
          "ar": "التواصل المهذب والشفاف.",
          "fa": "ارتباط محترمانه و شفاف."
        }
      },
      {
        "id": "d",
        "text": "D) Saubere und gut beleuchtete Eingangsbereiche.",
        "translations": {
          "ru": "Чистые и хорошо освещенные входные зоны.",
          "en": "Clean and well-illuminated entrance areas.",
          "ar": "مداخل نظيفة ومضاءة جيداً.",
          "fa": "ورودی‌های تمیز و دارای روشنایی مناسب."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Frustration-Aggressions-Hypothese: Hindernisse bei der Zielerreichung (Warten, Abweisung, Alkohol) steigern Frust und Aggressionspotential.",
    "translations": {
      "ru": {
        "question": "Какие факторы способствуют возникновению фрустрации и агрессии у клиентов? (Выберите 2 ответа)",
        "explanation": "Фрустрация и агрессия усиливаются при задержках, неуважении, тесноте и алкогольном опьянении."
      },
      "en": {
        "question": "Which factors foster frustration and aggression among customers? (Choose two correct answers)",
        "explanation": "Frustration-aggression hypothesis: obstacles (delays, rejection, alcohol, crowds) intensify frustration and aggressive potential."
      },
      "ar": {
        "question": "ما هي العوامل التي تعزز الإحباط والعدوانية لدى العملاء؟ (اختر إجابتين صحيحتين)",
        "explanation": "تزداد العدوانية بسبب الانتظار والرفض والازدحام وتأثير الكحول."
      },
      "fa": {
        "question": "چه عواملی باعث تشدید سرخوردگی و پرخاشگری در مراجعین می‌شود؟ (دو پاسخ صحیح)",
        "explanation": "فرضیه ناکامی-پرخاشگری: موانع، معطلی، بی‌احترامی، شلوغی و مصرف الکل پتانسیل پرخاشگری را بالا می‌برند."
      }
    }
  },
  {
    "id": "ihk-menschen-3",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was versteht man unter \"Aktivem Zuhören\" in der Deeskalation?",
    "optionen": [
      "A) Dem Gesprächspartner aufmerksam zuhören, Blickkontakt halten, ausreden lassen und das Verstandene mit eigenen Worten zusammenfassend spiegeln (Paraphrasieren).",
      "B) Dem Gegenüber ständig ins Wort fallen, um die Dienstvorschrift zu zitieren.",
      "C) So tun als ob man zuhört, während man am Smartphone tippt.",
      "D) Nur auf die Fehler des anderen warten, um ihn zu unterbrechen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Dem Gesprächspartner aufmerksam zuhören, Blickkontakt halten, ausreden lassen und das Verstandene mit eigenen Worten zusammenfassend spiegeln (Paraphrasieren).",
        "translations": {
          "ru": "Внимательно слушать собеседника, поддерживать зрительный контакт, давать высказаться и своими словами перефразировать услышанное.",
          "en": "Attentively listening, maintaining eye contact, letting the speaker finish, and mirroring back what was understood in one's own words (paraphrasing).",
          "ar": "الاستماع باهتمام للطرف الآخر، والحفاظ على التواصل البصري، وتركه يكمل حديثه، وإعادة صياغة ما فُهم بكلماتك الخاصة.",
          "fa": "گوش دادن دقیق به مخاطب، حفظ ارتباط چشمی، اجازه کامل صحبت دادن و بازگو کردن خلاصه مطالب با کلمات خود (پارافریز)."
        }
      },
      {
        "id": "b",
        "text": "B) Dem Gegenüber ständig ins Wort fallen, um die Dienstvorschrift zu zitieren.",
        "translations": {
          "ru": "Постоянно перебивать собеседника цитированием служебных инструкций.",
          "en": "Constantly interrupting the counterpart to quote service regulations.",
          "ar": "مقاطعة المتحدث باستمرار لتلاوة لوائح العمل.",
          "fa": "قطع مکرر کلام طرف مقابل برای بازخوانی آیین‌نامه‌ها."
        }
      },
      {
        "id": "c",
        "text": "C) So tun als ob man zuhört, während man am Smartphone tippt.",
        "translations": {
          "ru": "Делать вид, что слушаешь, печатая при этом в смартфоне.",
          "en": "Pretending to listen while typing on a smartphone.",
          "ar": "التظاهر بالاستماع أثناء الانشغال بالهاتف الذكي.",
          "fa": "تظاهر به گوش دادن در حالی که با گوشی تایپ می‌کنید."
        }
      },
      {
        "id": "d",
        "text": "D) Nur auf die Fehler des anderen warten, um ihn zu unterbrechen.",
        "translations": {
          "ru": "Лишь выжидать ошибок собеседника, чтобы прервать его.",
          "en": "Only waiting for mistakes by the other party to interrupt them.",
          "ar": "التربص بأخطاء الآخر لمقاطعته.",
          "fa": "فقط منتظر اشتباه مخاطب ماندن برای قطع صحبت او."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Aktives Zuhören baut Emotionen ab, signalisiert Wertschätzung und klärt Missverständnisse vor einer Eskalation.",
    "translations": {
      "ru": {
        "question": "Что понимается под «активным слушанием» (Aktives Zuhören) при деэскалации?",
        "explanation": "Активное слушание снижает накал эмоций, демонстрирует уважение и предотвращает эскалацию."
      },
      "en": {
        "question": "What is meant by \"active listening\" in de-escalation?",
        "explanation": "Active listening diffuses intense emotions, signals mutual respect, and clarifies misunderstandings."
      },
      "ar": {
        "question": "ماذا يقصد بـ «الاستماع الفعال» (Aktives Zuhören) في تهدئة النزاعات؟",
        "explanation": "يساعد الاستماع الفعال على امتصاص الانفعالات وإبداء التقدير وتوضيح سوء الفهم قبل تفاقم النزاع."
      },
      "fa": {
        "question": "مفهوم «گوش دادن فعال» در تنش‌زدایی چیست؟",
        "explanation": "گوش دادن فعال بار هیجانی را کاهش داده، احترام را منتقل کرده و از سوءتفاهم جلوگیری می‌کند."
      }
    }
  },
  {
    "id": "ihk-menschen-4",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Welche Distanzzonen unterscheidet die Körpersprache nach Edward T. Hall? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Die Intimdistanz (unter ca. 50 cm), die im Dienst grundsätzlich geschützt und nicht unbefugt unterschritten werden sollte.",
      "B) Die persönliche und gesellschaftliche Distanz (ca. 1,20 m bis 3,50 m) für professionelle Kommunikation und Eigensicherung.",
      "C) Die kosmische Distanz von mindestens 50 Kilometern.",
      "D) Die Kampfdistanz von exakt 1 Zentimeter."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Intimdistanz (unter ca. 50 cm), die im Dienst grundsätzlich geschützt und nicht unbefugt unterschritten werden sollte.",
        "translations": {
          "ru": "Интимная дистанция (менее 50 см), которую на службе следует защищать и не нарушать без необходимости.",
          "en": "The intimate zone (under approx. 50 cm), which should generally be protected and not encroached upon during duty.",
          "ar": "المسافة الحميمة (أقل من 50 سم تقريباً) والتي يجب الحفاظ عليها وعدم اختراقها أثناء الخدمة.",
          "fa": "حریم خصوصی/صمیمانه (کمتر از حدود ۵۰ سانتی‌متر) که در حین خدمت نباید بدون مجوز نقض شود."
        }
      },
      {
        "id": "b",
        "text": "B) Die persönliche und gesellschaftliche Distanz (ca. 1,20 m bis 3,50 m) für professionelle Kommunikation und Eigensicherung.",
        "translations": {
          "ru": "Личная и социальная дистанция (от 1,20 до 3,50 м) для профессионального общения и безопасности.",
          "en": "The personal and social distance (approx. 1.20 m to 3.50 m) for professional interaction and tactical safety.",
          "ar": "المسافة الشخصية والاجتماعية (حوالي 1.20 م إلى 3.50 م) للتواصل المهني وحماية النفس.",
          "fa": "فاصله شخصی و اجتماعی (حدود ۱.۲۰ تا ۳.۵۰ متر) برای ارتباط حرفه‌ای و حفظ ایمنی فردی."
        }
      },
      {
        "id": "c",
        "text": "C) Die kosmische Distanz von mindestens 50 Kilometern.",
        "translations": {
          "ru": "Космическая дистанция не менее 50 километров.",
          "en": "Cosmic distance of at least 50 kilometers.",
          "ar": "المسافة الكونية التي لا تقل عن 50 كيلومتراً.",
          "fa": "فاصله کیهانی به میزان حداقل ۵۰ کیلومتر."
        }
      },
      {
        "id": "d",
        "text": "D) Die Kampfdistanz von exakt 1 Zentimeter.",
        "translations": {
          "ru": "Боевая дистанция ровно 1 сантиметр.",
          "en": "Combat distance of exactly 1 centimeter.",
          "ar": "مسافة الاشتباك البالغة 1 سنتيمتر بالضبط.",
          "fa": "فاصله نبرد به میزان دقیق ۱ سانتی‌متر."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Das Einhalten der persönlichen Distanzzone (> 1 m) ist zentral für Deeskalation und Eigensicherung (Reaktionszeit bei Angriffen).",
    "translations": {
      "ru": {
        "question": "Какие зоны дистанции выделяет кинесика (невербальная коммуникация) по Эдварду Холлу? (Выберите 2 ответа)",
        "explanation": "Соблюдение дистанции (> 1 м) критично для деэскалации и запаса времени на реакцию при нападении."
      },
      "en": {
        "question": "Which distance zones are distinguished in proxemics according to Edward T. Hall? (Choose two correct answers)",
        "explanation": "Maintaining personal safety distance (> 1 m) is crucial for both de-escalation and reaction time."
      },
      "ar": {
        "question": "ما هي مناطق المسافات التي يميزها علم لغة الجسد وفقاً لإدوارد تي هول؟ (اختر إجابتين صحيحتين)",
        "explanation": "الحفاظ على المسافة الشخصية (> 1 متر) أساسي للتهدئة وتوفير وقت كافٍ لرد الفعل عند التعرض لهجوم."
      },
      "fa": {
        "question": "بر اساس نظریه ادوارد هال، کدام حریم‌های فاصله‌گذاری در زبان بدن وجود دارد؟ (دو پاسخ صحیح)",
        "explanation": "رعایت فاصله مناسب شخصی (> ۱ متر) هم برای آرام‌سازی فضا و هم برای زمان واکنش دفاعی حیاتی است."
      }
    }
  },
  {
    "id": "ihk-menschen-5",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Wie verhält man sich deeskalierend gegenüber einer hochaggressiven Person?",
    "optionen": [
      "A) Ruhig und bestimmt sprechen, offene Körperhaltung einnehmen, Sicherheitsabstand halten und Beleidigungen nicht persönlich nehmen.",
      "B) Die Person anschreien und auslachen.",
      "C) Der Person sofort drohen und sie am Kragen packen.",
      "D) Sich sofort umdrehen und weglaufen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ruhig und bestimmt sprechen, offene Körperhaltung einnehmen, Sicherheitsabstand halten und Beleidigungen nicht persönlich nehmen.",
        "translations": {
          "ru": "Говорить спокойно и уверенно, сохранять открытую позу, держать безопасную дистанцию и не воспринимать оскорбления на свой счет.",
          "en": "Speak calmly and assertively, maintain an open body posture, keep safety distance, and avoid taking insults personally.",
          "ar": "التحدث بهدوء وحزم، واتخاذ وضعية جسد مريحة ومنفتحة، والحفاظ على مسافة أمان، وعدم أخذ الإهانات بشكل شخصي.",
          "fa": "صحبت کردن آرام و قاطع، حفظ حالت بدنی باز، رعایت فاصله ایمن و شخصی تلقی نکردن توهین‌ها."
        }
      },
      {
        "id": "b",
        "text": "B) Die Person anschreien und auslachen.",
        "translations": {
          "ru": "Кричать на человека и насмехаться над ним.",
          "en": "Shouting at the person and ridiculing them.",
          "ar": "الصراخ في وجه الشخص والاستهزاء به.",
          "fa": "فریاد زدن سر شخص و مسخره کردن او."
        }
      },
      {
        "id": "c",
        "text": "C) Der Person sofort drohen und sie am Kragen packen.",
        "translations": {
          "ru": "Сразу угрожать человеку и хватать его за воротник.",
          "en": "Immediately threatening the person and grabbing their collar.",
          "ar": "تهديد الشخص فوراً والإمساك به من ياقته.",
          "fa": "تهدید فوری فرد و گرفتن یقه او."
        }
      },
      {
        "id": "d",
        "text": "D) Sich sofort umdrehen und weglaufen.",
        "translations": {
          "ru": "Сразу повернуться спиной и убежать.",
          "en": "Immediately turning around and running away.",
          "ar": "الاستدارة فوراً والفرار.",
          "fa": "چرخیدن و فرار کردن ناگهانی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Souveräne Körpersprache, sachliche Sprache und Distanz verhindern die emotionale Aufschaukelung des Konflikts.",
    "translations": {
      "ru": {
        "question": "Как вести себя в манере деэскалации по отношению к крайне агрессивному человеку?",
        "explanation": "Спокойный тон, открытые жесты и дистанция препятствуют дальнейшему нарастанию агрессии."
      },
      "en": {
        "question": "How does one behave in a de-escalating manner toward a highly aggressive person?",
        "explanation": "Composed body language, factual tone, and safe physical spacing prevent emotional conflict escalation."
      },
      "ar": {
        "question": "كيف تتصرف بأسلوب تهدئة إزاء شخص شديد العدوانية والغضب؟",
        "explanation": "لغة الجسد الواثقة والحديث الهادئ والمسافة الآمنة تمنع تصاعد المشاعر العدوانية."
      },
      "fa": {
        "question": "چگونه باید رفتاری تنش‌زدا در مواجهه با یک فرد به شدت پرخاشگر در پیش گرفت؟",
        "explanation": "زبان بدن مسلط، لحن منطقی و حفظ فاصله مانع از تشدید هیجانی درگیری می‌شود."
      }
    }
  },
  {
    "id": "ihk-menschen-6",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was versteht man unter dem \"4-Ohren-Modell\" von Friedemann Schulz von Thun? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Eine Nachricht enthält 4 Aspekte: Sachinhalt, Selbstoffenbarung, Beziehung und Appell.",
      "B) Der Empfänger kann eine Nachricht auf verschiedenen Ebenen interpretieren, was häufig zu Missverständnissen führt.",
      "C) Menschen mit Brille hören viermal besser als Menschen ohne.",
      "D) Ein Funkgerät muss 4 Frequenzen gleichzeitig abhören."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Eine Nachricht enthält 4 Aspekte: Sachinhalt, Selbstoffenbarung, Beziehung und Appell.",
        "translations": {
          "ru": "Сообщение содержит 4 аспекта: факт/содержание, самораскрытие, отношение и призыв к действию.",
          "en": "A message contains 4 facets: factual content, self-revelation, relationship, and appeal.",
          "ar": "تحتوي الرسالة على 4 جوانب: المحتوى الموضوعي، الإفصاح عن الذات، العلاقة، والطلب/النداء.",
          "fa": "یک پیام حاوی ۴ بعد است: محتوای موضوعی، افشای خود، رابطه، و درخواست/دستور."
        }
      },
      {
        "id": "b",
        "text": "B) Der Empfänger kann eine Nachricht auf verschiedenen Ebenen interpretieren, was häufig zu Missverständnissen führt.",
        "translations": {
          "ru": "Получатель может воспринимать сообщение на разных уровнях, что часто ведет к недопониманию.",
          "en": "The receiver can interpret a message on different layers, frequently leading to misunderstandings.",
          "ar": "يمكن للمستلم تفسير الرسالة على مستويات مختلفة مما يسبب سوء الفهم غالباً.",
          "fa": "گیرنده می‌تواند پیام را در سطوح مختلفی برداشت کند که اغلب منجر به سوءتفاهم می‌شود."
        }
      },
      {
        "id": "c",
        "text": "C) Menschen mit Brille hören viermal besser als Menschen ohne.",
        "translations": {
          "ru": "Люди в очках слышат в 4 раза лучше тех, кто без очков.",
          "en": "People wearing glasses hear four times better than those without.",
          "ar": "أصحاب النظارات يسمعون أفضل بأربع مرات من غيرهم.",
          "fa": "افراد عینکی چهار برابر بهتر از دیگران می‌شنوند."
        }
      },
      {
        "id": "d",
        "text": "D) Ein Funkgerät muss 4 Frequenzen gleichzeitig abhören.",
        "translations": {
          "ru": "Радиостанция должна одновременно слушать 4 частоты.",
          "en": "A two-way radio must listen to 4 frequencies concurrently.",
          "ar": "يجب أن يستقبل جهاز اللاسلكي 4 ترددات في وقت واحد.",
          "fa": "دستگاه بی‌سیم باید همزمان ۴ فرکانس را بشنود."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Schulz von Thun: 1. Sachinhalt, 2. Selbstkundgabe, 3. Beziehungshinweis, 4. Appell. Viele Konflikte entstehen auf der Beziehungsebene.",
    "translations": {
      "ru": {
        "question": "Что понимается под «моделью четырех ушей» Шульца фон Туна? (Выберите 2 ответа)",
        "explanation": "Каждое сообщение передает 4 стороны (факты, самораскрытие, отношение, призыв). Конфликты чаще всего возникают на уровне отношений."
      },
      "en": {
        "question": "What is understood by Schulz von Thun's \"Four-Sides Model\" of communication? (Choose two correct answers)",
        "explanation": "Schulz von Thun: 1. Facts, 2. Self-revelation, 3. Relationship, 4. Appeal. Most escalations originate on the relationship level."
      },
      "ar": {
        "question": "ماذا يقصد بنموذج «الآذان الأربع» لفريدمان شولتس فون تون؟ (اختر إجابتين صحيحتين)",
        "explanation": "تشمل الرسالة 4 جوانب (الحقائق، كشف الذات، العلاقة، الطلب). ومعظم النزاعات تنشأ بسبب سوء الفهم في جانب العلاقة."
      },
      "fa": {
        "question": "مدل «چهار گوش» شولتس فون تون در ارتباطات به چه معناست؟ (دو پاسخ صحیح)",
        "explanation": "پیام دارای ۴ لایه است (واقعیت، توصیف خود، رابطه، درخواست). اکثر تنش‌ها در لایه رابطه رخ می‌دهند."
      }
    }
  },
  {
    "id": "ihk-menschen-7",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was kennzeichnet \"Interkulturelle Kompetenz\" im Sicherheitsdienst?",
    "optionen": [
      "A) Das Bewusstsein und der respektvolle Umgang mit kulturellen Unterschieden, Normen und Kommunikationsmustern.",
      "B) Die Beherrschung aller Sprachen der Welt.",
      "C) Die Bevorzugung bestimmter Nationalitäten bei Einlasskontrollen.",
      "D) Das Ignorieren von religiösen Speise- und Verhaltensregeln."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Das Bewusstsein und der respektvolle Umgang mit kulturellen Unterschieden, Normen und Kommunikationsmustern.",
        "translations": {
          "ru": "Осознание и уважительное отношение к культурным различиям, нормам и моделям общения.",
          "en": "Awareness of and respectful interaction with cultural differences, social norms, and communication patterns.",
          "ar": "الوعي بالاختلافات الثقافية والمعايير وأنماط التواصل والتعامل معها باحترام.",
          "fa": "آگاهی و برخورد محترمانه با تفاوت‌های فرهنگی، هنجارها و الگوهای ارتباطی گوناگون."
        }
      },
      {
        "id": "b",
        "text": "B) Die Beherrschung aller Sprachen der Welt.",
        "translations": {
          "ru": "Владение всеми языками мира.",
          "en": "Fluency in all spoken languages worldwide.",
          "ar": "إتقان جميع لغات العالم.",
          "fa": "تسلط کامل به تمام زبان‌های دنیا."
        }
      },
      {
        "id": "c",
        "text": "C) Die Bevorzugung bestimmter Nationalitäten bei Einlasskontrollen.",
        "translations": {
          "ru": "Предоставление преимуществ определенным национальностям при контроле на входе.",
          "en": "Favoring specific nationalities during entrance screenings.",
          "ar": "تفضيل جنسيات معينة عند التفتيش على المداخل.",
          "fa": "ترجیح دادن ملیت‌های خاص در بازرسی‌های ورودی."
        }
      },
      {
        "id": "d",
        "text": "D) Das Ignorieren von religiösen Speise- und Verhaltensregeln.",
        "translations": {
          "ru": "Игнорирование религиозных традиций и правил поведения.",
          "en": "Ignoring religious dietary and behavioral guidelines.",
          "ar": "تجاهل القواعد الدينية للأطعمة والسلوك.",
          "fa": "نادیده گرفتن قواعد رفتاری و رژیم‌های مذهبی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Interkulturelle Kompetenz vermeidet Vorurteile und Missverständnisse durch respektvollen Umgang mit Menschen verschiedener Herkunft.",
    "translations": {
      "ru": {
        "question": "Что характеризует «межкультурную компетентность» (Interkulturelle Kompetenz) в охранной деятельности?",
        "explanation": "Межкультурная компетентность позволяет избегать стереотипов и конфликтов при общении с людьми разных культур."
      },
      "en": {
        "question": "What characterizes \"intercultural competence\" in security services?",
        "explanation": "Intercultural competence prevents prejudices and misunderstandings through respectful interaction across cultures."
      },
      "ar": {
        "question": "ما الذي يميز «الكفاءة الثقافية المتبادلة» في عمل الأمن والحراسة؟",
        "explanation": "تساعد الكفاءة الثقافية على تجنب الأحكام المسبقة وسوء الفهم عبر الاحترام المتبادل لجميع الثقافات."
      },
      "fa": {
        "question": "ویژگی «شایستگی بین‌فرهنگی» در خدمات امنیتی چیست؟",
        "explanation": "شایستگی بین‌فرهنگی با تعامل محترمانه با افراد از فرهنگ‌های مختلف مانع از پیش‌داوری و سوءتفاهم می‌شود."
      }
    }
  },
  {
    "id": "ihk-menschen-8",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Welche psychologischen Phänomene können in einer Menschenmenge (Massenpanik) auftreten? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Herdenverhalten und Ansteckungseffekte (Nachahmen der Fluchtbewegung ohne Prüfung der Gefahr).",
      "B) Verminderte individuelle Hemmschwelle und herabgesetzte rationale Urteilsfähigkeit.",
      "C) Spontane juristische Fachdiskussionen aller Anwesenden.",
      "D) Vollständiges Einschlafen der Menge."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Herdenverhalten und Ansteckungseffekte (Nachahmen der Fluchtbewegung ohne Prüfung der Gefahr).",
        "translations": {
          "ru": "Стадное поведение и эффекты эмоционального заражения (подражание бегству без оценки реальной опасности).",
          "en": "Herd behavior and contagion effects (mimicking flight movements without verifying actual hazard).",
          "ar": "سلوك القطيع وتأثيرات العدوى النفسية (تقليد حركة الهروب دون التحقق من مصدر الخطر).",
          "fa": "رفتار گله‌ای و اثر سرایت روانی (تقلید حرکت فرار بدون ارزیابی خطر واقعی)."
        }
      },
      {
        "id": "b",
        "text": "B) Verminderte individuelle Hemmschwelle und herabgesetzte rationale Urteilsfähigkeit.",
        "translations": {
          "ru": "Снижение индивидуального порога сдержанности и ослабление рационального мышления.",
          "en": "Diminished individual inhibitions and lowered rational reasoning capacity.",
          "ar": "انخفاض مستوى الردع الذاتي وتراجع التفكير العقلاني السليم.",
          "fa": "کاهش بازدارندگی فردی و افت توانایی قضاوت عقلانی."
        }
      },
      {
        "id": "c",
        "text": "C) Spontane juristische Fachdiskussionen aller Anwesenden.",
        "translations": {
          "ru": "Спонтанные юридические дискуссии среди собравшихся.",
          "en": "Spontaneous legal debates among all crowd members.",
          "ar": "نقاشات قانونية تخصصية عفوية بين الحاضرين.",
          "fa": "بحث‌های حقوقی تخصصی خودجوش میان حاضران."
        }
      },
      {
        "id": "d",
        "text": "D) Vollständiges Einschlafen der Menge.",
        "translations": {
          "ru": "Внезапное засыпание всей толпы.",
          "en": "The entire crowd falling completely asleep.",
          "ar": "استغراق الجمهور كاملاً في النوم فجأة.",
          "fa": "به خواب رفتن کامل جمعیت."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Massenpsychologie: Anonymität senkt die Hemmschwelle, Emotionen und Fluchtimpulse übertragen sich rasend schnell auf die Menge.",
    "translations": {
      "ru": {
        "question": "Какие психологические явления могут возникать в толпе (массовая паника)? (Выберите 2 ответа)",
        "explanation": "В толпе снижается самоконтроль и критическое мышление, а панические импульсы мгновенно передаются другим."
      },
      "en": {
        "question": "Which psychological phenomena can emerge within a crowd (mass panic)? (Choose two correct answers)",
        "explanation": "Crowd dynamics: anonymity diminishes behavioral inhibitions, and flight impulses spread contagiously."
      },
      "ar": {
        "question": "ما هي الظواهر النفسية التي قد تظهر بين الحشود (الهلع الجماعي)؟ (اختر إجابتين صحيحتين)",
        "explanation": "في الحشود تتراجع السيطرة الذاتية وتنتقل مشاعر الهلع ونوازع الفرار بسرعة هائلة كعدوى."
      },
      "fa": {
        "question": "کدام پدیده‌های روانشناختی ممکن است در ازدحام جمعیت (وحشت جمعی) رخ دهد؟ (دو پاسخ صحیح)",
        "explanation": "روانشناسی توده: گمنامی در جمعیت باعث کاهش خویشتن‌داری شده و تکانه‌های فرار به سرعت سرایت می‌کنند."
      }
    }
  },
  {
    "id": "ihk-menschen-9",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was versteht man unter dem Begriff \"Vorurteil\"?",
    "optionen": [
      "A) Ein vorgefasstes, meist negatives Urteil über eine Person oder Gruppe ohne vorherige sachliche Prüfung der Realität.",
      "B) Ein rechtskräftiges Gerichtsurteil des Bundesgerichtshofs.",
      "C) Eine wissenschaftliche Studie über Sicherheitsrisiken.",
      "D) Die Auswertung von Videoaufzeichnungen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ein vorgefasstes, meist negatives Urteil über eine Person oder Gruppe ohne vorherige sachliche Prüfung der Realität.",
        "translations": {
          "ru": "Предвзятое, чаще всего негативное суждение о человеке или группе без объективной проверки фактов.",
          "en": "A preconceived, usually negative judgment about a person or group made without objective assessment of facts.",
          "ar": "حكم مسبق، غالباً ما يكون سلبياً، تجاه شخص أو جماعة دون تحقق موضوعي مسبق من الواقع.",
          "fa": "قضاوت از پیش شکل‌گرفته و غالباً منفی درباره یک شخص یا گروه بدون ارزیابی عینی واقعیت."
        }
      },
      {
        "id": "b",
        "text": "B) Ein rechtskräftiges Gerichtsurteil des Bundesgerichtshofs.",
        "translations": {
          "ru": "Вступившее в законную силу решение Федерального верховного суда.",
          "en": "A legally binding court ruling issued by the Federal Court of Justice.",
          "ar": "حكم قضائي بات صادر عن المحكمة الاتحادية العليا.",
          "fa": "حکم قطعی دادگاه عالی فدرال."
        }
      },
      {
        "id": "c",
        "text": "C) Eine wissenschaftliche Studie über Sicherheitsrisiken.",
        "translations": {
          "ru": "Научное исследование рисков безопасности.",
          "en": "A scientific research study on security risks.",
          "ar": "دراسة علمية حول المخاطر الأمنية.",
          "fa": "مطالعه علمی درباره ریسک‌های امنیتی."
        }
      },
      {
        "id": "d",
        "text": "D) Die Auswertung von Videoaufzeichnungen.",
        "translations": {
          "ru": "Анализ записей видеонаблюдения.",
          "en": "The operational analysis of video recordings.",
          "ar": "تحليل وتقييم تسجيلات كاميرات المراقبة.",
          "fa": "بررسی و تحلیل تصاویر ضبط‌شده دوربین‌ها."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Vorurteile sind verallgemeinernde, unreflektierte Einstellungen, die im Sicherheitsdienst durch professionelle Sachlichkeit ersetzt werden müssen.",
    "translations": {
      "ru": {
        "question": "Что понимается под термином «предрассудок» (Vorurteil)?",
        "explanation": "Предрассудки — это необоснованные обобщения, которые охранник обязан заменять профессиональной объективностью."
      },
      "en": {
        "question": "What is understood by the concept of \"prejudice\" (Vorurteil)?",
        "explanation": "Prejudices are generalized, unreflective assumptions that security guards must replace with professional objectivity."
      },
      "ar": {
        "question": "ماذا يقصد بمفهوم «الحكم المسبق» (Vorurteil)؟",
        "explanation": "الأحكام المسبقة مواقف تعميمية غير مدروسة يجب على رجل الأمن استبدالها بالموضوعية والحياد."
      },
      "fa": {
        "question": "مفهوم «پیش‌داوری» (Vorurteil) چیست؟",
        "explanation": "پیش‌داوری دیدگاهی تعمیم‌یافته و بدون تفکر است که پرسنل حراست باید آن را با بی‌طرفی حرفه‌ای جایگزین کنند."
      }
    }
  },
  {
    "id": "ihk-menschen-10",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Wie sollte ein Sicherheitsmitarbeiter reagieren, wenn er selbst in einem Konflikt beleidigt wird? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Sachlich und professionell bleiben, Beleidigungen nicht auf persönlicher Ebene vergelten.",
      "B) Die Grenze klar aufzeigen, die Person verwarnen und bei Fortdauer das Hausrecht durchsetzen oder Strafanzeige erstatten.",
      "C) Den Betreffenden sofort mit doppelter Lautstärke zurückbeleidigen.",
      "D) Sofort körperliche Gewalt anwenden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Sachlich und professionell bleiben, Beleidigungen nicht auf persönlicher Ebene vergelten.",
        "translations": {
          "ru": "Сохранять деловой тон и хладнокровие, не отвечать оскорблениями на личном уровне.",
          "en": "Remain objective and professional; do not retaliate against verbal insults on a personal level.",
          "ar": "البقاء موضوعياً ومهنياً وعدم الرد على الإساءات بالمثل على المستوى الشخصي.",
          "fa": "حفظ آرامش و رفتار حرفه‌ای و عدم پاسخگویی متقابل به توهین‌ها در سطح شخصی."
        }
      },
      {
        "id": "b",
        "text": "B) Die Grenze klar aufzeigen, die Person verwarnen und bei Fortdauer das Hausrecht durchsetzen oder Strafanzeige erstatten.",
        "translations": {
          "ru": "Четко обозначить границы, предупредить нарушителя и при продолжении применить право хозяина объекта или подать заявление о преступлении.",
          "en": "Clearly set boundaries, warn the individual, and if behavior persists, enforce domiciliary rights or file criminal charges.",
          "ar": "تحديد الحدود بوضوح وتحذير الشخص وإنفاذ حق المكان أو تقديم شكوى جنائية إذا استمر.",
          "fa": "تعیین صریح مرزها، تذکر دادن به فرد و در صورت تداوم، اجرای حق مالکانه یا ثبت شکایت کیفری."
        }
      },
      {
        "id": "c",
        "text": "C) Den Betreffenden sofort mit doppelter Lautstärke zurückbeleidigen.",
        "translations": {
          "ru": "Немедленно обругать нарушителя в ответ в два раза громче.",
          "en": "Immediately insult the counterpart back with double volume.",
          "ar": "رد الإهانة للشخص فوراً وبصوت أعلى مرتين.",
          "fa": "فحاشی متقابل به طرف مقابل با دو برابر بلندی صدا."
        }
      },
      {
        "id": "d",
        "text": "D) Sofort körperliche Gewalt anwenden.",
        "translations": {
          "ru": "Немедленно применить физическую силу.",
          "en": "Instantly resort to physical violence.",
          "ar": "استخدام العنف الجسدي فوراً.",
          "fa": "به‌کارگیری فوری خشونت فیزیکی."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Professionelle Distanz: Eigene Emotionen kontrollieren, Grenzen sachlich aufzeigen und rechtliche Konsequenzen ruhig ankündigen.",
    "translations": {
      "ru": {
        "question": "Как должен реагировать охранник при оскорблениях в свой адрес во время конфликта? (Выберите 2 ответа)",
        "explanation": "Профессиональная дистанция: контролировать эмоции, четко указывать рамки дозволенного и применять правовые меры."
      },
      "en": {
        "question": "How should a security employee respond when insulted during a confrontation? (Choose two correct answers)",
        "explanation": "Professional detachment: control own emotions, set firm boundaries, and calmly announce legal consequences."
      },
      "ar": {
        "question": "كيف ينبغي لحارس الأمن التصرف عند تعرضه للإهانة والسب أثناء النزاع؟ (اختر إجابتين صحيحتين)",
        "explanation": "الحياد المهني: ضبط النفس ووضع حدود حازمة بهدوء وتطبيق الإجراءات القانونية عند اللزوم."
      },
      "fa": {
        "question": "نیروی حراست در صورت توهین شنیدن در جریان یک درگیری چگونه باید رفتار کند؟ (دو پاسخ صحیح)",
        "explanation": "فاصله‌گذاری حرفه‌ای: مهار احساسات شخصی، مشخص کردن قاطع مرزها و اعلام آرام پیامدهای قانونی."
      }
    }
  },
  {
    "id": "ihk-menschen-11",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was bedeutet \"Eigensicherung\" im praktischen Sicherheitsdienst?",
    "optionen": [
      "A) Vor jedem Eingreifen die Gefahrenlage einschätzen, Verstärkung anfordern, Abstand wahren und sich nicht leichtfertig in Lebensgefahr begeben.",
      "B) Sich immer vor dem Kunden verstecken und die Arbeit verweigern.",
      "C) Waffen ohne Genehmigung im Holster tragen.",
      "D) Ausschließlich im gepanzerten Fahrzeug sitzen bleiben."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Vor jedem Eingreifen die Gefahrenlage einschätzen, Verstärkung anfordern, Abstand wahren und sich nicht leichtfertig in Lebensgefahr begeben.",
        "translations": {
          "ru": "Оценивать обстановку перед любым вмешательством, вызывать подкрепление, держать дистанцию и не подвергать свою жизнь неоправданному риску.",
          "en": "Assessing the threat prior to any intervention, calling for backup, maintaining distance, and avoiding reckless self-endangerment.",
          "ar": "تقييم الموقف الخطير قبل أي تدخل، وطلب الدعم، والحفاظ على مسافة أمان، وعدم تعريض النفس للخطر باستهتار.",
          "fa": "ارزیابی وضعیت خطر قبل از هر مداخله‌ای، درخواست نیروی کمکی، حفظ فاصله و پرهیز از به خطر انداختن جان خود."
        }
      },
      {
        "id": "b",
        "text": "B) Sich immer vor dem Kunden verstecken und die Arbeit verweigern.",
        "translations": {
          "ru": "Всегда прятаться от клиентов и отказываться от работы.",
          "en": "Always hiding from clients and refusing to perform duties.",
          "ar": "الاختباء من العميل دائماً والامتناع عن أداء العمل.",
          "fa": "پنهان شدن همیشگی از مشتریان و امتناع از انجام کار."
        }
      },
      {
        "id": "c",
        "text": "C) Waffen ohne Genehmigung im Holster tragen.",
        "translations": {
          "ru": "Носить оружие в кобуре без соответствующего разрешения.",
          "en": "Carrying unauthorized firearms in a holster.",
          "ar": "حمل أسلحة بدون ترخيص في الجراب.",
          "fa": "حمل غیرمجاز سلاح در غلاف."
        }
      },
      {
        "id": "d",
        "text": "D) Ausschließlich im gepanzerten Fahrzeug sitzen bleiben.",
        "translations": {
          "ru": "Сидеть исключительно внутри бронированного автомобиля.",
          "en": "Strictly remaining inside an armored vehicle at all times.",
          "ar": "البقاء داخل سيارة مصفحة فقط دون الخروج منها.",
          "fa": "صرفاً در خودروی زرهی نشستن."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Eigensicherung hat stets Vorrang vor Fremdschutz oder dem Schutz von Sachwerten: Lagebeurteilung, Abstand, Funkkontakt und Teamabsprache.",
    "translations": {
      "ru": {
        "question": "Что означает «самобезопасность» (Eigensicherung) в практической работе охраны?",
        "explanation": "Собственная безопасность всегда в приоритете: оценка рисков, дистанция, связь и вызов подкрепления."
      },
      "en": {
        "question": "What does \"self-protection / officer safety\" (Eigensicherung) mean in practical security work?",
        "explanation": "Self-protection takes absolute precedence over defending property: assess situation, keep distance, radio for backup."
      },
      "ar": {
        "question": "ماذا يعني «تأمين وحماية النفس» (Eigensicherung) في الممارسة الأمنية؟",
        "explanation": "حماية النفس لها الأولوية على حماية الممتلكات: تقييم المخاطر، والمسافة الآمنة، والاتصال باللاسلكي لطلب الدعم."
      },
      "fa": {
        "question": "مفهوم «حفظ ایمنی شخصی» (Eigensicherung) در کار عملیاتی حراست چیست؟",
        "explanation": "حفظ جان خود همواره بر حفاظت از اموال ارجحیت دارد: ارزیابی صحنه، حفظ فاصله، ارتباط بی‌سیمی و کار تیمی."
      }
    }
  },
  {
    "id": "ihk-menschen-12",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Welche nonverbalen Signale deuten auf eine unmittelbar bevorstehende körperliche Aggression hin? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Geballte Fäuste, vorgeschobenes Kinn, starrer Blickkontakt und schnelles Näherkommen.",
      "B) Muskelanspannung, Zähneknirschen und Entledigen von Kleidungsstücken (z. B. Jacke ausziehen).",
      "C) Ein entspanntes Lächeln und Gähnen.",
      "D) Das Binden der Schnürsenkel im Sitzen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Geballte Fäuste, vorgeschobenes Kinn, starrer Blickkontakt und schnelles Näherkommen.",
        "translations": {
          "ru": "Сжатые кулаки, выдвинутый вперед подбородок, пристальный взгляд и быстрое сокращение дистанции.",
          "en": "Clenched fists, thrust-forward chin, fixed staring eye contact, and rapid forward movement.",
          "ar": "قبضات اليد المشدودة، بروز الذقن للأمام، التحديق الحاد بالعين، والاقتراب السريع.",
          "fa": "مشت‌های گره‌کرده، چانه جلو آمده، خیره شدن تهاجمی و نزدیک شدن سریع."
        }
      },
      {
        "id": "b",
        "text": "B) Muskelanspannung, Zähneknirschen und Entledigen von Kleidungsstücken (z. B. Jacke ausziehen).",
        "translations": {
          "ru": "Напряжение мышц, скрежетание зубами и снятие одежды (например, куртки).",
          "en": "Muscle tensing, grinding teeth, and shedding outer garments (e.g. taking off a jacket).",
          "ar": "توتر العضلات، وصرير الأسنان، ونزع قطع من الملابس (مثل خلع السترة).",
          "fa": "انقباض عضلات، دندان‌قروچه کردن و درآوردن لباس‌ها (مانند درآوردن کاپشن)."
        }
      },
      {
        "id": "c",
        "text": "C) Ein entspanntes Lächeln und Gähnen.",
        "translations": {
          "ru": "Расслабленная улыбка и зевота.",
          "en": "A relaxed smile and casual yawning.",
          "ar": "ابتسامة مريحة وتثاؤب مسترخٍ.",
          "fa": "لبخند آرام و خمیازه کشیدن."
        }
      },
      {
        "id": "d",
        "text": "D) Das Binden der Schnürsenkel im Sitzen.",
        "translations": {
          "ru": "Завязывание шнурков в сидячем положении.",
          "en": "Tying shoelaces while sitting down.",
          "ar": "ربط أربطة الحذاء أثناء الجلوس.",
          "fa": "بستن بند کفش در حالت نشسته."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Körperliche Warnsignale (Tunnelblick, Faustbildung, Distanzverringerung) erfordern sofortige Eigensicherungsmaßnahmen (Abstand, Schutzhaltung).",
    "translations": {
      "ru": {
        "question": "Какие невербальные сигналы указывают на скорое физическое нападение? (Выберите 2 ответа)",
        "explanation": "Предупреждающие знаки (кулаки, снятие куртки, сжатые зубы) требуют немедленного перехода к мерам защиты."
      },
      "en": {
        "question": "Which non-verbal cues indicate imminent physical aggression? (Choose two correct answers)",
        "explanation": "Physical danger cues (tunnel vision, clenched fists, closing distance) require immediate safety measures."
      },
      "ar": {
        "question": "ما هي الإشارات الجسدية غير اللفظية التي تنذر باعتداء بدني وشيك؟ (اختر إجابتين صحيحتين)",
        "explanation": "إشارات الخطر (القبضات المشدودة، خلع الملابس، صرير الأسنان) تتطلب اتخاذ تدابير حماية النفس فوراً."
      },
      "fa": {
        "question": "کدام علائم غیرکلامی نشان‌دهنده پرخاشگری فیزیکی قریب‌الوقوع هستند؟ (دو پاسخ صحیح)",
        "explanation": "علائم هشداردهنده بدنی (مشت کردن، دندان‌قروچه، درآوردن لباس) مستلزم تدابیر فوری دفاع شخصی است."
      }
    }
  },
  {
    "id": "ihk-menschen-13",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Was versteht man unter dem \"Halo-Effekt\" in der Wahrnehmungspsychologie?",
    "optionen": [
      "A) Ein einzelnes auffälliges Merkmal einer Person (z. B. Kleidung, Aussehen) überstrahlt alle anderen Eigenschaften und bestimmt das Gesamturteil.",
      "B) Der Schutzeffekt einer Kevlar-Weste.",
      "C) Das Nachleuchten von Notausgangsschildern.",
      "D) Die Blendwirkung von Taschenlampen im Dunkeln."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ein einzelnes auffälliges Merkmal einer Person (z. B. Kleidung, Aussehen) überstrahlt alle anderen Eigenschaften und bestimmt das Gesamturteil.",
        "translations": {
          "ru": "Одна заметная черта человека (например, одежда, внешность) затмевает все остальные качества и определяет общее суждение о нем.",
          "en": "A single salient trait of a person (e.g. clothing, appearance) overshadows all other characteristics and dominates the overall judgment.",
          "ar": "صفة أو مظهر بارز لشخص (مثل ملابسه أو مظهره) يطغى على باقي خصائصه ويحدد التقييم الشامل عنه.",
          "fa": "یک ویژگی برجسته فرد (مانند نوع لباس یا ظاهر) سایر خصوصیات او را تحت‌الشعاع قرار داده و کل قضاوت درباره او را شکل می‌دهد."
        }
      },
      {
        "id": "b",
        "text": "B) Der Schutzeffekt einer Kevlar-Weste.",
        "translations": {
          "ru": "Защитный эффект кевларового бронежилета.",
          "en": "The protective absorption effect of a Kevlar vest.",
          "ar": "الأثر الوقائي لسترة الحماية الواقية من الرصاص.",
          "fa": "اثر محافظتی جلیقه ضدگلوله کولار."
        }
      },
      {
        "id": "c",
        "text": "C) Das Nachleuchten von Notausgangsschildern.",
        "translations": {
          "ru": "Свечение указателей аварийного выхода в темноте.",
          "en": "The photoluminescent afterglow of emergency exit signs.",
          "ar": "التوهج الفوسفوري للوحات مخارج الطوارئ في الظلام.",
          "fa": "شب‌تابی و درخشش تابلوهای خروج اضطراری در تاریکی."
        }
      },
      {
        "id": "d",
        "text": "D) Die Blendwirkung von Taschenlampen im Dunkeln.",
        "translations": {
          "ru": "Ослепляющее действие фонарей в темноте.",
          "en": "The blinding glare caused by tactical flashlights in the dark.",
          "ar": "تأثير التوهج المعمي للمصابيح الكاشفة في الظلام.",
          "fa": "اثر خیره‌کنندگی چراغ‌قوه در تاریکی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Der Halo-Effekt (Heiligenschein-Effekt) führt zu Fehleinschätzungen, indem man von einem Merkmal (z. B. Anzug = seriös) voreilig auf das Gesamtverhalten schließt.",
    "translations": {
      "ru": {
        "question": "Что понимается под «эффектом ореола» (Halo-Effekt) в психологии восприятия?",
        "explanation": "Эффект ореола ведет к ошибкам в оценке, когда по одной детали (костюм = порядочный) судят о человеке в целом."
      },
      "en": {
        "question": "What is understood by the \"Halo Effect\" in perception psychology?",
        "explanation": "The halo effect biases judgment by inappropriately generalizing from one single trait (e.g. suit = trustworthy) to the entire personality."
      },
      "ar": {
        "question": "ماذا يقصد بـ «تأثير الهالة» (Halo-Effekt) في علم نفس الإدراك؟",
        "explanation": "يؤدي تأثير الهالة لأخطاء في التقييم حين يطغى مظهر معين (مثل البدلة الأنيقة = شخص موثوق) على التقييم الكلي."
      },
      "fa": {
        "question": "مفهوم «اثر هاله‌ای» (Halo-Effekt) در روانشناسی ادراک چیست؟",
        "explanation": "اثر هاله‌ای باعث قضاوت اشتباه می‌شود به طوری که یک ویژگی (مانند کت و شلوار = معتبر) به کل شخصیت تعمیم داده می‌شود."
      }
    }
  },
  {
    "id": "ihk-menschen-14",
    "kategorie": "Umgang mit Menschen und Verhalten in Gefahrensituationen",
    "frage": "Wie reagiert man richtig bei einer Bombendrohung am Telefon? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Ruhe bewahren, Anrufer ausreden lassen, genaue Notizen machen (Hintergrundgeräusche, Stimme, Text) und parallel die Leitstelle / Polizei alarmieren.",
      "B) W-Fragen stellen: Wo ist die Bombe? Wann explodiert sie? Wie sieht sie aus? Warum tun Sie das?",
      "C) Sofort auflegen und die Kollegen im Gebäude lautstark in Panik versetzen.",
      "D) Die Drohung als Scherz abtun und ignorieren."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ruhe bewahren, Anrufer ausreden lassen, genaue Notizen machen (Hintergrundgeräusche, Stimme, Text) und parallel die Leitstelle / Polizei alarmieren.",
        "translations": {
          "ru": "Сохранять спокойствие, дать звонящему высказаться, подробно записать детали (фоновые шумы, акцент, текст) и параллельно оповестить дежурную часть/полицию.",
          "en": "Stay calm, let the caller speak, take meticulous notes (background noises, voice, text), and alert dispatch/police in parallel.",
          "ar": "الهدوء التام، وترك المتصل يتحدث حتى النهاية، وتدوين الملاحظات الدقيقة (أصوات الخلفية، نبرة الصوت، نص التهديد)، وإبلاغ الشرطة وغرفة العمليات بالتوازي.",
          "fa": "حفظ خونسردی، اجازه کامل صحبت به تماس‌گیرنده، یادداشت دقیق جزئیات (صدای پس‌زمینه، لهجه، متن) و هشدار همزمان به مرکز کنترل/پلیس."
        }
      },
      {
        "id": "b",
        "text": "B) W-Fragen stellen: Wo ist die Bombe? Wann explodiert sie? Wie sieht sie aus? Warum tun Sie das?",
        "translations": {
          "ru": "Задавать ключевые вопросы: Где заложена бомба? Когда взрыв? Как она выглядит? Зачем вы это делаете?",
          "en": "Ask crucial questions: Where is the bomb? When will it explode? What does it look like? Why are you doing this?",
          "ar": "طرح الأسئلة الاستيضاحية: أين القنبلة؟ متى ستنفجر؟ كيف تبدو؟ لماذا تفعل ذلك؟",
          "fa": "پرسیدن سؤالات اساسی: بمب کجاست؟ چه زمانی منفجر می‌شود؟ چه شکلی است؟ چرا این کار را می‌کنید؟"
        }
      },
      {
        "id": "c",
        "text": "C) Sofort auflegen und die Kollegen im Gebäude lautstark in Panik versetzen.",
        "translations": {
          "ru": "Сразу бросить трубку и поднять громкую панику среди коллег в здании.",
          "en": "Immediately hanging up and loudly inciting panic among colleagues in the building.",
          "ar": "إغلاق الخط فوراً وإشاعة الذعر والهلع بين الزملاء في المبنى.",
          "fa": "قطع فوری تماس و ایجاد وحشت و اضطراب با صدای بلند در میان همکاران."
        }
      },
      {
        "id": "d",
        "text": "D) Die Drohung als Scherz abtun und ignorieren.",
        "translations": {
          "ru": "Счесть угрозу шуткой и проигнорировать ее.",
          "en": "Dismissing the threat as a prank and ignoring it.",
          "ar": "اعتبار التهديد مجرد مزحة وتجاهله تماماً.",
          "fa": "شوخی تلقی کردن تهدید و نادیده گرفتن آن."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Bei Bombendrohungen: Checkliste nutzen, Stimme/Hintergrundgeräusche analysieren, Ruhe bewahren und unverzüglich nach Alarmplan handeln.",
    "translations": {
      "ru": {
        "question": "Как правильно действовать при телефонной угрозе взрыва? (Выберите 2 ответа)",
        "explanation": "При угрозе взрыва: использовать чек-лист, фиксировать детали голоса и окружения, сохранять спокойствие и следовать плану тревоги."
      },
      "en": {
        "question": "How does one properly respond to a bomb threat over the telephone? (Choose two correct answers)",
        "explanation": "During bomb threats: follow checklist, note voice/background sounds, keep calm, and execute emergency response plans immediately."
      },
      "ar": {
        "question": "كيف تتصرف بشكل صحيح عند تلقي تهديد بوجود قنبلة عبر الهاتف؟ (اختر إجابتين صحيحتين)",
        "explanation": "استخدام قائمة الملاحظات، وتحليل الأصوات والنبرة، والحفاظ على الهدوء، والتصرف فوراً بموجب خطة الطوارئ."
      },
      "fa": {
        "question": "واکنش صحیح در هنگام دریافت تهدید تلفنی بمب‌گذاری چیست؟ (دو پاسخ صحیح)",
        "explanation": "استفاده از چک‌لیست، ثبت لهجه و صداهای پس‌زمینه، حفظ خونسردی و اقدام فوری طبق نقشه اضطراری."
      }
    }
  },
  {
    "id": "ihk-uvv-1",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Welche DGUV Vorschrift ist die zentrale Unfallverhütungsvorschrift für Wach- und Sicherungsdienste?",
    "optionen": [
      "A) DGUV Vorschrift 23 (bisherige BGV C7).",
      "B) DGUV Vorschrift 100 für Straßenbauarbeiten.",
      "C) Straßenverkehrs-Ordnung (StVO).",
      "D) Die Landesbauordnung."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) DGUV Vorschrift 23 (bisherige BGV C7).",
        "translations": {
          "ru": "Правило DGUV 23 (ранее BGV C7).",
          "en": "DGUV Regulation 23 (formerly BGV C7).",
          "ar": "لائحة DGUV 23 (المعروفة سابقاً باسم BGV C7).",
          "fa": "مقررات DGUV شماره ۲۳ (سابقاً BGV C7)."
        }
      },
      {
        "id": "b",
        "text": "B) DGUV Vorschrift 100 für Straßenbauarbeiten.",
        "translations": {
          "ru": "Правило DGUV 100 для дорожно-строительных работ.",
          "en": "DGUV Regulation 100 for road construction.",
          "ar": "لائحة DGUV 100 لأعمال بناء الطرق.",
          "fa": "مقررات DGUV شماره ۱۰۰ برای عملیات راه‌سازی."
        }
      },
      {
        "id": "c",
        "text": "C) Straßenverkehrs-Ordnung (StVO).",
        "translations": {
          "ru": "Правила дорожного движения (StVO).",
          "en": "Road Traffic Regulations (StVO).",
          "ar": "قانون المرور على الطرق (StVO).",
          "fa": "آیین‌نامه راهنمایی و رانندگی (StVO)."
        }
      },
      {
        "id": "d",
        "text": "D) Die Landesbauordnung.",
        "translations": {
          "ru": "Земельный строительный регламент.",
          "en": "State Building Code.",
          "ar": "لوائح البناء الإقليمية للولايات.",
          "fa": "مقررات ساختمانی ایالتی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "DGUV Vorschrift 23 regelt den Arbeitsschutz und die Unfallverhütung speziell für das Wach- und Sicherheitsgewerbe.",
    "translations": {
      "ru": {
        "question": "Какое предписание DGUV является центральным правилом предотвращения несчастных случаев в охране?",
        "explanation": "DGUV Vorschrift 23 регулирует охрану труда и технику безопасности в охранной сфере."
      },
      "en": {
        "question": "Which DGUV regulation is the core accident prevention standard for guarding and security services?",
        "explanation": "DGUV Regulation 23 specifically governs occupational safety and accident prevention in security services."
      },
      "ar": {
        "question": "ما هي لائحة DGUV الأساسية لمنع الحوادث في خدمات الحراسة والأمن؟",
        "explanation": "تنظم لائحة DGUV Vorschrift 23 السلامة المهنية والوقاية من الحوادث المخصصة لقطاع الحراسة."
      },
      "fa": {
        "question": "کدام آیین‌نامه DGUV مقررات اصلی پیشگیری از حوادث در خدمات حراست و نگهبانی است؟",
        "explanation": "مقررات DGUV Vorschrift 23 ایمنی کار و پیشگیری از حوادث را مخصوص صنف نگهبانی و حراست مشخص می‌کند."
      }
    }
  },
  {
    "id": "ihk-uvv-2",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Welche Pflichten hat der Arbeitgeber bezüglich der Dienstanweisung nach DGUV V23?",
    "optionen": [
      "A) Er muss für jede Bewachungsaufgabe eine schriftliche, objektbezogene Dienstanweisung erstellen und den Beschäftigten nachweislich aushändigen.",
      "B) Mündliche Zurufen vor Dienstbeginn reichen stets aus.",
      "C) Dienstanweisungen sind nur für leitende Angestellte erforderlich.",
      "D) Der Kunde muss die Dienstanweisung selbst schreiben."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Er muss für jede Bewachungsaufgabe eine schriftliche, objektbezogene Dienstanweisung erstellen und den Beschäftigten nachweislich aushändigen.",
        "translations": {
          "ru": "Он обязан составить письменную служебную инструкцию для каждого объекта и подтвержденно выдать ее сотрудникам.",
          "en": "He must create a written, site-specific post order for each assignment and verifiably issue it to the guards.",
          "ar": "يجب عليه إعداد تعليمات خدمة كتابية مخصصة للموقع لكل مهمة حراسة وتسليمها للموظفين مع إثبات الاستلام.",
          "fa": "کارفرما موظف است برای هر پست نگهبانی یک دستورالعمل کتبی ویژه آن محل تهیه کرده و به شکل مستند به پرسنل تحویل دهد."
        }
      },
      {
        "id": "b",
        "text": "B) Mündliche Zurufen vor Dienstbeginn reichen stets aus.",
        "translations": {
          "ru": "Устных указаний перед началом смены всегда достаточно.",
          "en": "Verbal callouts prior to shift start are always sufficient.",
          "ar": "التعليمات الشفهية السريعة قبل بدء المناوبة تكفي دائماً.",
          "fa": "فریاد زدن شفاهی دستورات قبل از شروع شیفت همیشه کفایت می‌کند."
        }
      },
      {
        "id": "c",
        "text": "C) Dienstanweisungen sind nur für leitende Angestellte erforderlich.",
        "translations": {
          "ru": "Служебные инструкции требуются только для руководящего состава.",
          "en": "Post orders are only mandatory for senior managerial staff.",
          "ar": "تعليمات الخدمة مطلوبة للمدراء التنفيذيين فقط.",
          "fa": "دستورالعمل‌های کاری فقط برای مدیران ارشد الزامی هستند."
        }
      },
      {
        "id": "d",
        "text": "D) Der Kunde muss die Dienstanweisung selbst schreiben.",
        "translations": {
          "ru": "Клиент обязан сам написать служебную инструкцию.",
          "en": "The customer must write the post orders themselves.",
          "ar": "يجب على العميل كتابة تعليمات الخدمة بنفسه.",
          "fa": "مشتری باید خودش دستورالعمل حراست را بنویسد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Nach § 3 DGUV V23 muss der Unternehmer eine schriftliche Dienstanweisung aufstellen, die die allgemeinen und objektspezifischen Pflichten regelt.",
    "translations": {
      "ru": {
        "question": "Каковы обязанности работодателя в отношении служебной инструкции (Dienstanweisung) согласно DGUV V23?",
        "explanation": "Согласно § 3 DGUV V23 работодатель обязан выдать письменную инструкцию по объекту под роспись."
      },
      "en": {
        "question": "What are the employer's duties regarding post orders (Dienstanweisung) under DGUV Regulation 23?",
        "explanation": "Pursuant to § 3 DGUV V23, the entrepreneur must formulate written post orders outlining site-specific duties."
      },
      "ar": {
        "question": "ما هي واجبات صاحب العمل بخصوص تعليمات الخدمة بموجب لائحة DGUV V23؟",
        "explanation": "وفقاً للمادة 3 من DGUV V23، يجب وضع تعليمات خدمة كتابية تحدد واجبات الموقع وتسليمها رسمياً."
      },
      "fa": {
        "question": "وظایف کارفرما در قبال دستورالعمل خدمت طبق DGUV V23 چیست؟",
        "explanation": "مطابق بند ۳ DGUV V23، کارفرما باید دستورالعمل کتبی مشخص برای وظایف پست را تهیه و ارائه کند."
      }
    }
  },
  {
    "id": "ihk-uvv-3",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Welche Anforderungen gelten nach DGUV V23 für den Einsatz von Diensthunden? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Es dürfen nur geprüfte Hunde mit nachgewiesener Eignung (z. B. Schutzhundprüfung) von geeigneten Hundeführern geführt werden.",
      "B) Der Hund muss ein sicheres Halsband, Leine und bei Bedarf einen Maulkorb tragen.",
      "C) Jeder private Familienhund darf ohne Prüfung auf Baustellen eingesetzt werden.",
      "D) Diensthunde dürfen im Streifendienst ohne Leine frei herumlaufen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Es dürfen nur geprüfte Hunde mit nachgewiesener Eignung (z. B. Schutzhundprüfung) von geeigneten Hundeführern geführt werden.",
        "translations": {
          "ru": "Могут использоваться только проверенные собаки с подтвержденной пригодностью квалифицированными кинологами.",
          "en": "Only certified dogs with verified aptitude (e.g. guard dog exam) may be deployed by qualified handlers.",
          "ar": "يجوز فقط استخدام الكلاب المدربة والمختبرة من قبل مدربي كلاب مؤهلين.",
          "fa": "فقط سگ‌های آموزش‌دیده و آزمون‌پسند با گواهی شایستگی می‌توانند توسط مربیان واجد شرایط به کار گرفته شوند."
        }
      },
      {
        "id": "b",
        "text": "B) Der Hund muss ein sicheres Halsband, Leine und bei Bedarf einen Maulkorb tragen.",
        "translations": {
          "ru": "Собака должна иметь надежный ошейник, поводок и при необходимости намордник.",
          "en": "The dog must be fitted with a secure collar, leash, and a muzzle where appropriate.",
          "ar": "يجب أن يرتدي الكلب طوقاً محكماً ومقوداً وكمامة عند اللزوم.",
          "fa": "سگ باید دارای قلاده محکم، بند قلاده و در صورت لزوم پوزه‌بند باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Jeder private Familienhund darf ohne Prüfung auf Baustellen eingesetzt werden.",
        "translations": {
          "ru": "Любая семейная домашняя собака может без проверки использоваться на стройке.",
          "en": "Any private family pet may be deployed on construction sites without prior testing.",
          "ar": "يمكن استخدام أي كلب عائلي خاص في مواقع البناء دون فحص واختبار.",
          "fa": "هر سگ خانگی معمولی را می‌توان بدون آزمون در پروژه‌های ساختمانی استفاده کرد."
        }
      },
      {
        "id": "d",
        "text": "D) Diensthunde dürfen im Streifendienst ohne Leine frei herumlaufen.",
        "translations": {
          "ru": "Служебным собакам разрешено свободно бегать без поводка во время патрулирования.",
          "en": "Service dogs may roam freely without a leash during patrol duties.",
          "ar": "يسمح لكلاب الخدمة بالتجول بحرية بدون مقود أثناء الدوريات.",
          "fa": "سگ‌های نگهبان می‌توانند در گشت‌زنی بدون بند آزادانه بدوند."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§§ 14 ff. DGUV V23: Diensthunde müssen geprüfte Gebrauchshunde sein; sie dürfen nur von befähigten Hundeführern geleint eingesetzt werden.",
    "translations": {
      "ru": {
        "question": "Какие требования предъявляются согласно DGUV V23 к использованию служебных собак? (Выберите 2 ответа)",
        "explanation": "Служебные собаки должны быть аттестованы, находиться на поводке и управляться обученным кинологом."
      },
      "en": {
        "question": "What requirements apply under DGUV Regulation 23 for deploying service dogs? (Choose two correct answers)",
        "explanation": "§§ 14 ff. DGUV V23: Guard dogs must be certified utility dogs, handled on-leash by qualified handlers."
      },
      "ar": {
        "question": "ما هي الشروط المطبقة بموجب DGUV V23 لاستخدام كلاب الحراسة في الخدمة؟ (اختر إجابتين صحيحتين)",
        "explanation": "يجب أن تكون كلاب الحراسة معتمدة ومقودة دائماً برسن من قِبل مدربين مؤهلين."
      },
      "fa": {
        "question": "چه الزاماتی برای استفاده از سگ‌های نگهبان طبق DGUV V23 وجود دارد؟ (دو پاسخ صحیح)",
        "explanation": "سگ‌های نگهبان باید دارای آزمون صلاحیت بوده و همواره توسط مربی آموزش‌دیده و با قلاده هدایت شوند."
      }
    }
  },
  {
    "id": "ihk-uvv-4",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Was schreibt die DGUV V23 für den bewaffneten Sicherheitsdienst vor? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Schusswaffen und Munition müssen vom Arbeitgeber gestellt werden; das Führen privater Waffen im Dienst ist verboten.",
      "B) Der Beschäftigte muss vor der Waffenausgabe theoretisch und praktisch unterwiesen und im Schießen geübt sein.",
      "C) Sicherheitskräfte dürfen jede beliebige Waffe aus dem Internet privat im Dienst tragen.",
      "D) Schusswaffen dürfen nach Dienstende zu Hause unter dem Kopfkissen gelagert werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Schusswaffen und Munition müssen vom Arbeitgeber gestellt werden; das Führen privater Waffen im Dienst ist verboten.",
        "translations": {
          "ru": "Огнестрельное оружие и патроны выдаются работодателем; ношение личного оружия на службе запрещено.",
          "en": "Firearms and ammunition must be provided by the employer; carrying private weapons on duty is prohibited.",
          "ar": "يجب توفير الأسلحة النارية والذخيرة من قبل صاحب العمل؛ ويُحظر حمل أسلحة خاصة أثناء الخدمة.",
          "fa": "سلاح گرم و مهمات باید توسط کارفرما تأمین شود؛ حمل سلاح شخصی در شیفت حراست ممنوع است."
        }
      },
      {
        "id": "b",
        "text": "B) Der Beschäftigte muss vor der Waffenausgabe theoretisch und praktisch unterwiesen und im Schießen geübt sein.",
        "translations": {
          "ru": "Сотрудник перед выдачей оружия должен пройти теоретический и практический инструктаж и иметь регулярную огневую подготовку.",
          "en": "Before weapon issuance, the employee must receive theoretical and practical instruction and maintain shooting proficiency.",
          "ar": "يجب تدريب الموظف نظرياً وعملياً وإتقانه للرماية قبل تسليمه السلاح.",
          "fa": "کارمند باید قبل از تحویل گرفتن اسلحه، آموزش‌های نظری و عملی دیده و در تیراندازی تمرین داشته باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Sicherheitskräfte dürfen jede beliebige Waffe aus dem Internet privat im Dienst tragen.",
        "translations": {
          "ru": "Охранники могут носить на службе любое оружие, купленное в интернете.",
          "en": "Security guards may carry any weapon privately ordered online during duty.",
          "ar": "يجوز لحراس الأمن حمل أي سلاح شخصي يشترونه عبر الإنترنت أثناء الخدمة.",
          "fa": "پرسنل می‌توانند هر سلاح خریداری‌شده شخصی از اینترنت را در خدمت استفاده کنند."
        }
      },
      {
        "id": "d",
        "text": "D) Schusswaffen dürfen nach Dienstende zu Hause unter dem Kopfkissen gelagert werden.",
        "translations": {
          "ru": "Огнестрельное оружие после смены можно хранить дома под подушкой.",
          "en": "Firearms may be stored at home beneath pillows after duty shifts.",
          "ar": "يمكن تخزين الأسلحة النارية تحت الوسادة في المنزل بعد انتهاء الدوام.",
          "fa": "سلاح گرم را می‌توان بعد از اتمام شیفت زیر بالش در خانه نگهداری کرد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "§§ 18 ff. DGUV V23: Keine privaten Waffen im Dienst! Waffen werden vom Betrieb gestellt, regelmäßige Schießnachweise und sichere Aufbewahrung im Tresor sind Pflicht.",
    "translations": {
      "ru": {
        "question": "Что предписывает DGUV V23 для вооруженной службы охраны? (Выберите 2 ответа)",
        "explanation": "Никакого личного оружия: оружие предоставляет фирма, обязательны стрелковые тренировки и хранение в сейфе."
      },
      "en": {
        "question": "What does DGUV Regulation 23 mandate for armed security services? (Choose two correct answers)",
        "explanation": "§§ 18 ff. DGUV V23: No private weapons; arms are supplied by the company, with mandatory shooting drills and safe storage."
      },
      "ar": {
        "question": "ماذا تنص لائحة DGUV V23 بشأن خدمات الحراسة المسلحة؟ (اختر إجابتين صحيحتين)",
        "explanation": "يُمنع استخدام الأسلحة الخاصة؛ يوفر صاحب العمل السلاح مع تدريب دوري على الرماية وحفظ آمن في خزائن مخصصة."
      },
      "fa": {
        "question": "مقررات DGUV V23 برای خدمات حراست مسلحانه چه مواردی را الزامی می‌داند؟ (دو پاسخ صحیح)",
        "explanation": "ممنوعیت سلاح شخصی: اسلحه توسط شرکت تأمین می‌شود و آزمون‌های مکرر تیراندازی و نگهداری در گاوصندوق الزامی است."
      }
    }
  },
  {
    "id": "ihk-uvv-5",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Was schreibt die UVV für gefährliche Einzelarbeitsplätze (z. B. Nachtstreife auf unübersichtlichem Gelände) vor?",
    "optionen": [
      "A) Es müssen geeignete Kontrollmaßnahmen (z. B. Personen-Notsignal-Anlagen / PNA, Totmannmelder oder regelmäßige Meldeintervalle per Funk) eingerichtet sein.",
      "B) Einzelarbeit ist nachts gesetzlich unter allen Umständen verboten.",
      "C) Der Mitarbeiter muss alle 5 Minuten laut rufen.",
      "D) Der Mitarbeiter muss seinen Dienst auf eigene Gefahr ohne Funkgerät versehen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Es müssen geeignete Kontrollmaßnahmen (z. B. Personen-Notsignal-Anlagen / PNA, Totmannmelder oder regelmäßige Meldeintervalle per Funk) eingerichtet sein.",
        "translations": {
          "ru": "Должны быть установлены меры контроля (например, системы персонального оповещения PNA, датчики неподвижности или радиоотчеты по графику).",
          "en": "Suitable monitoring measures (e.g. personal emergency signal devices / PNA, man-down alarms, or scheduled radio check-ins) must be established.",
          "ar": "يجب توفير تدابير رقابة وحماية ملائمة (مثل أجهزة إشارات استغاثة الأفراد PNA، ومستشعرات السقوط، أو فترات اتصال لاسلكي منتظمة).",
          "fa": "باید تدابیر کنترلی مناسب (مانند سیستم‌های هشدار اضطراری فردی PNA، سنسورهای وضعیت بی‌حرکتی، یا فواصل زمانی گزارش بی‌سیم) برقرار باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Einzelarbeit ist nachts gesetzlich unter allen Umständen verboten.",
        "translations": {
          "ru": "Одиночная работа ночью запрещена законом при любых обстоятельствах.",
          "en": "Lone working at night is unconditionally prohibited by statute.",
          "ar": "العمل الفردي ليلاً محظور قانوناً تحت أي ظرف من الظروف.",
          "fa": "کار انفرادی در شیفت شب تحت هر شرایطی قانوناً ممنوع است."
        }
      },
      {
        "id": "c",
        "text": "C) Der Mitarbeiter muss alle 5 Minuten laut rufen.",
        "translations": {
          "ru": "Сотрудник обязан громко кричать каждые 5 минут.",
          "en": "The employee must shout out loudly every 5 minutes.",
          "ar": "يجب على الموظف الصراخ بصوت عالٍ كل 5 دقائق.",
          "fa": "کارمند باید هر ۵ دقیقه با صدای بلند فریاد بزند."
        }
      },
      {
        "id": "d",
        "text": "D) Der Mitarbeiter muss seinen Dienst auf eigene Gefahr ohne Funkgerät versehen.",
        "translations": {
          "ru": "Сотрудник должен нести службу на свой страх и риск без рации.",
          "en": "The employee must execute duties at their own peril without a radio.",
          "ar": "يجب على الموظف أداء خدمته على مسؤوليته الخاصة دون جهاز لاسلكي.",
          "fa": "کارمند باید بدون بی‌سیم و با مسئولیت و ریسک خودش خدمت کند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Bei Alleinarbeit nach DGUV Vorschrift 1 / V23 muss durch technische (PNA) oder organisatorische Kontrollen (Meldezeiten) die Rettungskette gewährleistet sein.",
    "translations": {
      "ru": {
        "question": "Что предписывают правила UVV для опасных одиночных постов (например, ночной патруль)?",
        "explanation": "При одиночной работе спасательная цепочка гарантируется системами PNA или контрольными радиовызовами."
      },
      "en": {
        "question": "What do accident prevention regulations mandate for hazardous lone-worker posts (e.g. night patrols on vast premises)?",
        "explanation": "Lone workers require technological (PNA alarms) or organizational monitoring (call-in schedules) to ensure prompt rescue."
      },
      "ar": {
        "question": "ماذا تفرض لوائح منع الحوادث لمواقع العمل الفردية الخطرة (مثل الدوريات الليلية في مناطق واسعة)؟",
        "explanation": "في العمل الفردي يجب ضمان سلسلة الإنقاذ بأجهزة استغاثة تقنية (PNA) أو جداول اتصال لاسلكي دورية."
      },
      "fa": {
        "question": "آیین‌نامه UVV برای پست‌های انفرادی پرخطر (مانند گشت شبانه در محوطه‌های خلوت) چه چیزی الزامی کرده است؟",
        "explanation": "در کارهای انفرادی باید از طریق تجهیزات اضطراری (PNA) یا کنترل‌های منظم ارتباطی، زنجیره امداد و نجات تضمین گردد."
      }
    }
  },
  {
    "id": "ihk-uvv-6",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Welche Pflichten hat der Sicherheitsmitarbeiter beim Bemerken von Gefahrenquellen (z. B. offene Schächte, defekte Geländer)?",
    "optionen": [
      "A) Er muss die Gefahrenstelle sofort absichern und unverzüglich der Leitstelle / dem Vorgesetzten melden.",
      "B) Er darf die Stelle ignorieren, solange sein Dienstplan nichts dazu sagt.",
      "C) Er muss den Schacht mit Zeitungen zudecken.",
      "D) Er muss bis zum Schichtende warten, bevor er etwas unternimmt."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Er muss die Gefahrenstelle sofort absichern und unverzüglich der Leitstelle / dem Vorgesetzten melden.",
        "translations": {
          "ru": "Он обязан немедленно оградить опасное место и безотлагательно доложить в диспетчерскую / руководству.",
          "en": "He must secure the hazard zone immediately and report it promptly to the control center / supervisor.",
          "ar": "يجب عليه تأمين موقع الخطر فوراً وإبلاغ غرفة العمليات / المشرف المباشر على الفور.",
          "fa": "باید فوراً محل خطر را ایمن‌سازی کرده و موضوع را بلافاصله به مرکز کنترل / سرپرست گزارش دهد."
        }
      },
      {
        "id": "b",
        "text": "B) Er darf die Stelle ignorieren, solange sein Dienstplan nichts dazu sagt.",
        "translations": {
          "ru": "Он может проигнорировать место, если об этом нет пункта в графике дежурства.",
          "en": "He may ignore the situation as long as his shift roster doesn't mention it.",
          "ar": "يجوز له تجاهل الأمر طالما لم يذكر في جدول ورديته.",
          "fa": "می‌تواند تا زمانی که در برنامه کاری چیزی نیامده آن را نادیده بگیرد."
        }
      },
      {
        "id": "c",
        "text": "C) Er muss den Schacht mit Zeitungen zudecken.",
        "translations": {
          "ru": "Он должен прикрыть открытый колодец газетами.",
          "en": "He must cover open shafts with newspapers.",
          "ar": "يجب عليه تغطية الفتحة بالجرائد القديمة.",
          "fa": "باید روی چاهک باز را با روزنامه بپوشاند."
        }
      },
      {
        "id": "d",
        "text": "D) Er muss bis zum Schichtende warten, bevor er etwas unternimmt.",
        "translations": {
          "ru": "Он должен дождаться конца смены, прежде чем что-либо предпринять.",
          "en": "He must wait until shift handover before taking any action.",
          "ar": "يجب عليه الانتظار حتى نهاية المناوبة قبل القيام بأي إجراء.",
          "fa": "باید تا پایان شیفت صبر کند و بعد اقدامی انجام دهد."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Nach DGUV Vorschrift 1 und Dienstanweisung ist jede erkannte Gefahrenquelle unverzüglich abzusichern und zu protokollieren.",
    "translations": {
      "ru": {
        "question": "Каковы обязанности охранника при обнаружении источников опасности (например, открытые люки, сломанные перила)?",
        "explanation": "Любой источник опасности следует немедленно оградить и зарегистрировать в журнале дежурств."
      },
      "en": {
        "question": "What are a security guard's obligations upon noticing workplace hazards (e.g. open shafts, damaged railings)?",
        "explanation": "Under DGUV Regulation 1, any detected hazard must be secured immediately and documented in logs."
      },
      "ar": {
        "question": "ما هي واجبات رجل الأمن عند ملاحظة مصادر خطر (مثل فتحات الصرف المفتوحة أو الحواجز المكسورة)؟",
        "explanation": "بموجب لوائح الوقاية يجب تأمين وحراسة مصدر الخطر فوراً وتوثيقه وإبلاغ الإدارة."
      },
      "fa": {
        "question": "وظیفه پرسنل حراست هنگام مشاهده منابع خطر (مانند چاهک‌های باز یا نرده‌های شکسته) چیست؟",
        "explanation": "طبق مقررات ایمنی کار DGUV، هرگونه کانون خطر باید بلافاصله ایمن‌سازی و گزارش شود."
      }
    }
  },
  {
    "id": "ihk-uvv-7",
    "kategorie": "Unfallverhütungsvorschriften (UVV)",
    "frage": "Welche persönliche Schutzausrüstung (PSA) muss der Arbeitgeber bei Bedarf stellen? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Sicherheitsschuhe (S3) mit Durchtrittschutz und Zehenschutzkappe sowie Warnweste bei Arbeiten im Verkehrsbereich.",
      "B) Stichschutz- oder ballistische Schutzwesten bei gefährdeten Einsätzen (z. B. Geldtransport, Türsteherdienst).",
      "C) Maßgeschneiderte Luxus-Sonnenbrillen bekannter Modemarken.",
      "D) Private Armbanduhren aus Gold."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Sicherheitsschuhe (S3) mit Durchtrittschutz und Zehenschutzkappe sowie Warnweste bei Arbeiten im Verkehrsbereich.",
        "translations": {
          "ru": "Защитная обувь (S3) с защитой от проколов и металлическим носком, а также сигнальный жилет при работе на проезжей части.",
          "en": "Safety boots (S3) with penetration resistance and toe caps, plus high-visibility vests when working in traffic areas.",
          "ar": "أحذية أمان (S3) مقاومة للاختراق ومزودة بمقدمة حماية، وسترات تحذيرية عاكسة عند العمل في مناطق حركة السير.",
          "fa": "کفش ایمنی (S3) با محافظ کفی و سرپنجه ضد ضربه به همراه جلیقه شبرنگ در محیط‌های ترافیکی."
        }
      },
      {
        "id": "b",
        "text": "B) Stichschutz- oder ballistische Schutzwesten bei gefährdeten Einsätzen (z. B. Geldtransport, Türsteherdienst).",
        "translations": {
          "ru": "Жилеты с защитой от порезов/проколов или бронежилеты при опасных заданиях (инкассация, фейсконтроль).",
          "en": "Stab-resistant or ballistic protective vests during high-risk duties (e.g. cash transit, doorman).",
          "ar": "سترات واقية من الطعن أو الرصاص في المهام المحفوفة بالمخاطر (مثل نقل الأموال وحراسة أبواب النوادي).",
          "fa": "جلیقه‌های ضد چاقو یا جلیقه‌های ضد گلوله در مأموریت‌های پرخطر (مانند حمل پول، حراست ورودی کلاب‌ها)."
        }
      },
      {
        "id": "c",
        "text": "C) Maßgeschneiderte Luxus-Sonnenbrillen bekannter Modemarken.",
        "translations": {
          "ru": "Дизайнерские люксовые солнцезащитные очки известных брендов.",
          "en": "Custom-tailored luxury designer sunglasses.",
          "ar": "نظارات شمسية فاخرة ومخصصة من ماركات أزياء عالمية.",
          "fa": "عینک‌های آفتابی لوکس و سفارشی از برندهای معروف مد."
        }
      },
      {
        "id": "d",
        "text": "D) Private Armbanduhren aus Gold.",
        "translations": {
          "ru": "Личные золотые наручные часы.",
          "en": "Private luxury gold wristwatches.",
          "ar": "ساعات يد شخصية من الذهب الخالص.",
          "fa": "ساعت‌های مچی طلای شخصی."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Der Arbeitgeber muss gemäß Gefährdungsbeurteilung geeignete PSA (Sicherheitsschuhe, Warnwesten, Schutzwesten, Gehörschutz) kostenfrei bereitstellen.",
    "translations": {
      "ru": {
        "question": "Какими средствами индивидуальной защиты (СИЗ / PSA) работодатель обязан бесплатно обеспечить охрану при необходимости? (Выберите 2 ответа)",
        "explanation": "Работодатель обязан предоставить спецобувь S3, сигнальные и бронежилеты бесплатно по оценке рисков."
      },
      "en": {
        "question": "Which personal protective equipment (PPE / PSA) must the employer provide when required? (Choose two correct answers)",
        "explanation": "Based on risk assessment, employers must furnish appropriate PPE (S3 boots, hi-vis vests, body armor) free of charge."
      },
      "ar": {
        "question": "ما هي معدات الوقاية الشخصية (PSA) التي يتعين على صاحب العمل توفيرها مجاناً عند الحاجة؟ (اختر إجابتين صحيحتين)",
        "explanation": "يلتزم صاحب العمل بتوفير أحذية السلامة S3 والسترات العاكسة والواقية مجاناً بناءً على تقييم المخاطر."
      },
      "fa": {
        "question": "کدام تجهیزات حفاظت فردی (PSA) در صورت نیاز باید توسط کارفرما تأمین شود؟ (دو پاسخ صحیح)",
        "explanation": "کارفرما موظف است بر اساس ارزیابی خطرات، کفش ایمنی S3، جلیقه شب‌نما و جلیقه ضدضربه/ضدگلوله را رایگان تأمین کند."
      }
    }
  },
  {
    "id": "ihk-technik-1",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Was versteht man unter dem \"Sicherheits-Grundsatz\" bei der Verknüpfung technischer und personeller Maßnahmen?",
    "optionen": [
      "A) Technik unterstützt und entlastet das Personal, kann jedoch den Menschen und dessen Entscheidungsfähigkeit im Sicherheitsdienst nicht vollständig ersetzen.",
      "B) Technik macht Wachpersonal zu 100 % überflüssig.",
      "C) Personal darf niemals technische Hilfsmittel verwenden.",
      "D) Brandmeldeanlagen ersetzen die Feuerwehr."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Technik unterstützt und entlastet das Personal, kann jedoch den Menschen und dessen Entscheidungsfähigkeit im Sicherheitsdienst nicht vollständig ersetzen.",
        "translations": {
          "ru": "Техника поддерживает и разгружает персонал, но не может полностью заменить человека и его способность принимать решения.",
          "en": "Technology supports and relieves personnel, but cannot entirely replace human situational reasoning in security work.",
          "ar": "التقنية تدعم الموظفين وتخفف عنهم، لكنها لا تستطيع الاستغناء عن الإنسان وقدرته على اتخاذ القرارات في الأمن.",
          "fa": "فناوری از پرسنل پشتیبانی کرده و بار کاری را کم می‌کند، اما نمی‌تواند جایگزین کامل انسان و قدرت تصمیم‌گیری او شود."
        }
      },
      {
        "id": "b",
        "text": "B) Technik macht Wachpersonal zu 100 % überflüssig.",
        "translations": {
          "ru": "Техника делает охранников на 100% ненужными.",
          "en": "Technology renders human security guards 100% obsolete.",
          "ar": "التقنية تجعل حراس الأمن غير ضروريين بنسبة 100%.",
          "fa": "فناوری نیاز به نیروهای حراست را ۱۰۰٪ از بین می‌برد."
        }
      },
      {
        "id": "c",
        "text": "C) Personal darf niemals technische Hilfsmittel verwenden.",
        "translations": {
          "ru": "Персоналу запрещено пользоваться любыми техническими средствами.",
          "en": "Personnel must never utilize technical auxiliary equipment.",
          "ar": "يُحظر على موظفي الأمن استخدام أي وسائل تقنية مساعدة.",
          "fa": "پرسنل حراست هرگز نباید از ابزارهای فنی استفاده کنند."
        }
      },
      {
        "id": "d",
        "text": "D) Brandmeldeanlagen ersetzen die Feuerwehr.",
        "translations": {
          "ru": "Пожарная сигнализация заменяет пожарную команду.",
          "en": "Fire alarm systems replace the fire brigade.",
          "ar": "أنظمة إنذار الحريق تحل محل فرق الإطفاء تماماً.",
          "fa": "سیستم‌های اعلام حریق جای آتش‌نشانی را پر می‌کنند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Sicherheitstechnik (EMA, BMA, CCTV) dient der Detektion und Meldung; die Bewertung und Intervention erfordert qualifiziertes Sicherheitspersonal.",
    "translations": {
      "ru": {
        "question": "Что понимается под «основным принципом безопасности» при сочетании технических и кадровых мер?",
        "explanation": "Техника служит для обнаружения и передачи сигналов, но оценка ситуации и реагирование требуют человека."
      },
      "en": {
        "question": "What is the core security principle when integrating technical and human security measures?",
        "explanation": "Security technology (alarms, CCTV) performs detection and alerting; assessment and intervention demand trained security staff."
      },
      "ar": {
        "question": "ما هو «المبدأ الأمني الأساسي» عند الجمع بين الإجراءات التقنية والبشرية؟",
        "explanation": "التقنيات (الكاميرات والإنذار) تكتشف وتبلغ، بينما يحتاج التقييم والتدخل إلى كادر أمني مؤهل."
      },
      "fa": {
        "question": "«اصل بنیادین امنیت» در تلفیق اقدامات فنی و انسانی به چه معناست؟",
        "explanation": "تجهیزات امنیتی وظیفه تشخیص و ارسال پیام را دارند، اما تحلیل وضعیت و مداخله نیازمند حضور انسان متخصص است."
      }
    }
  },
  {
    "id": "ihk-technik-2",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Welche Komponenten gehören typischerweise zu einer Einbruchmeldeanlage (EMA)? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Melder (z. B. Bewegungsmelder, Magnetkontakte, Glasbruchmelder) und Zentrale.",
      "B) Signalgeber (optisch/akustisch) und Übertragungseinrichtung zur Notruf- und Serviceleitstelle (NSL).",
      "C) Automatische Sprinkleranlagen zur Flutung mit Wasser.",
      "D) Rauchgasabzugsanlagen im Treppenhaus."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Melder (z. B. Bewegungsmelder, Magnetkontakte, Glasbruchmelder) und Zentrale.",
        "translations": {
          "ru": "Датчики (например, детекторы движения, магнитоконтакты, датчики разбития стекла) и контрольная панель (централь).",
          "en": "Detectors (e.g. motion sensors, magnetic contacts, glass-break detectors) and control panel.",
          "ar": "أجهزة الاستشعار (مثل كواشف الحركة، نقاط التلامس المغناطيسية، كواشف كسر الزجاج) ولوحة التحكم المركزية.",
          "fa": "حسگرها (مانند حسگرهای حرکتی، کنتاکت‌های مگنتی، سنسورهای شکست شیشه) و پنل مرکزی."
        }
      },
      {
        "id": "b",
        "text": "B) Signalgeber (optisch/akustisch) und Übertragungseinrichtung zur Notruf- und Serviceleitstelle (NSL).",
        "translations": {
          "ru": "Оповещатели (световые/звуковые) и устройство передачи тревог на пульт централизованного наблюдения (NSL).",
          "en": "Signaling devices (optical/acoustic) and transmission equipment to an alarm monitoring center (NSL).",
          "ar": "أجهزة التنبيه (ضوئية/صوتية) ووحدات الإرسال والربط مع مركز المراقبة والخدمات (NSL).",
          "fa": "تجهیزات هشداردهنده (نوری/صوتی) و دستگاه مخابره سیگنال به مرکز مانیتورینگ هشدار (NSL)."
        }
      },
      {
        "id": "c",
        "text": "C) Automatische Sprinkleranlagen zur Flutung mit Wasser.",
        "translations": {
          "ru": "Автоматические спринклерные системы для затопления водой.",
          "en": "Automatic water sprinkler fire suppression systems.",
          "ar": "رشاشات المياه التلقائية لمكافحة الحرائق.",
          "fa": "سیستم‌های آب‌پاش خودکار اسپرینکلر."
        }
      },
      {
        "id": "d",
        "text": "D) Rauchgasabzugsanlagen im Treppenhaus.",
        "translations": {
          "ru": "Системы дымоудаления на лестничных клетках.",
          "en": "Smoke and heat extraction systems in stairwells.",
          "ar": "أنظمة شفط وسحب الدخان في السلالم والممرات.",
          "fa": "سامانه‌های تخلیه دود در راه‌پله‌ها."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Eine EMA besteht aus: Meldern (Sensoren), Zentrale (Auswertung), Signalgebern (Sirene/Blitz) und Übertragungsgerät (ÜG) zur Leitstelle.",
    "translations": {
      "ru": {
        "question": "Какие компоненты обычно входят в состав охранной сигнализации (EMA)? (Выберите 2 ответа)",
        "explanation": "EMA включает датчики, централь, сирены/вспышки и передатчик сигналов на пульт охраны."
      },
      "en": {
        "question": "Which components typically comprise an intrusion alarm system (EMA)? (Choose two correct answers)",
        "explanation": "An intrusion system consists of detectors, central control unit, sounders/strobes, and transmission units to the ARC."
      },
      "ar": {
        "question": "ما هي المكونات النموذجية التي يتألف منها نظام إنذار السرقة والاقتحام (EMA)؟ (اختر إجابتين صحيحتين)",
        "explanation": "يتكون النظام من: الكواشف، الوحدة المركزية، وسائل التنبيه والصفارات، وجهاز الإرسال إلى مركز العمليات."
      },
      "fa": {
        "question": "سیستم اعلام سرقت (EMA) معمولاً شامل کدام اجزا است؟ (دو پاسخ صحیح)",
        "explanation": "سیستم سرقت شامل سنسورها، پنل کنترل مرکزی، آژیر/فلاشر و دستگاه انتقال داده به مرکز مانیتورینگ است."
      }
    }
  },
  {
    "id": "ihk-technik-3",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Was ist ein Passiv-Infrarot-Melder (PIR-Melder)?",
    "optionen": [
      "A) Ein Bewegungsmelder, der auf Temperaturänderungen (Wärmestrahlung von Körpern) im Erfassungsbereich reagiert.",
      "B) Ein Melder, der aktiv Mikrowellen wie ein Radargerät aussendet.",
      "C) Ein akustischer Schallsensor für brechendes Fensterglas.",
      "D) Ein mechanischer Türkontaktschalter."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ein Bewegungsmelder, der auf Temperaturänderungen (Wärmestrahlung von Körpern) im Erfassungsbereich reagiert.",
        "translations": {
          "ru": "Датчик движения, который реагирует на изменение температуры (тепловое инфракрасное излучение тел) в зоне обнаружения.",
          "en": "A motion detector that responds to temperature fluctuations (thermal radiation emitted by bodies) within its detection zone.",
          "ar": "كاشف حركة يستجيب للتغيرات في درجات الحرارة (الإشعاع الحراري المنبعث من الأجسام) في نطاق التغطية.",
          "fa": "حسگر حرکتی که به تغییرات دما (تابش گرمایی بدن انسان) در محدوده تحت پوشش واکنش نشان می‌دهد."
        }
      },
      {
        "id": "b",
        "text": "B) Ein Melder, der aktiv Mikrowellen wie ein Radargerät aussendet.",
        "translations": {
          "ru": "Датчик, который активно излучает микроволны наподобие радара.",
          "en": "A detector that actively transmits microwaves like a radar unit.",
          "ar": "كاشف يطلق موجات ميكروويف نشطة مثل جهاز الرادار.",
          "fa": "حسگری که فعالانه امواج مایکروویو مانند رادار ارسال می‌کند."
        }
      },
      {
        "id": "c",
        "text": "C) Ein akustischer Schallsensor für brechendes Fensterglas.",
        "translations": {
          "ru": "Акустический звуковой сенсор для звука разбития оконного стекла.",
          "en": "An acoustic sensor configured to detect breaking window glass.",
          "ar": "مستشعر صوتي يستشعر ترددات تحطم زجاج النوافذ.",
          "fa": "حسگر صوتی برای تشخیص صدای شکستن شیشه پنجره."
        }
      },
      {
        "id": "d",
        "text": "D) Ein mechanischer Türkontaktschalter.",
        "translations": {
          "ru": "Механический концевой дверной выключатель.",
          "en": "A mechanical door contact switch.",
          "ar": "مفتاح تلامس ميكانيكي للأبواب.",
          "fa": "کلید تماسی مکانیکی روی درب."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "PIR-Melder empfangen passiv die Infrarot-Wärmestrahlung von sich bewegenden Personen im Überwachungsbereich.",
    "translations": {
      "ru": {
        "question": "Что такое пассивный инфракрасный датчик (PIR-Melder)?",
        "explanation": "PIR-датчик пассивно регистрирует тепловое излучение движущихся людей в охраняемой зоне."
      },
      "en": {
        "question": "What is a passive infrared (PIR) detector?",
        "explanation": "PIR sensors passively receive infrared thermal emissions produced by moving persons within their field of view."
      },
      "ar": {
        "question": "ما هو كاشف الأشعة تحت الحمراء السلبي (PIR-Melder)؟",
        "explanation": "يستقبل حساس PIR السلبي الإشعاعات الحرارية الصادرة عن حركة الأشخاص في نطاق المراقبة دون إصدار أي إشعاع."
      },
      "fa": {
        "question": "حسگر مادون قرمز غیرفعال (PIR) چیست؟",
        "explanation": "حسگر PIR به شکل غیرفعال پرتوهای گرمایی مادون قرمز افراد در حال حرکت در محدوده حفاظتی را دریافت می‌کند."
      }
    }
  },
  {
    "id": "ihk-technik-4",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Welche Arten von Brandmeldern werden in Brandmeldeanlagen (BMA) eingesetzt? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Optische Rauchmelder (Streulichtmelder) zur Erkennung von sichtbarem Rauch.",
      "B) Thermomelder (Wärmemelder), die auf Temperaturanstieg oder Maximaltemperatur ansprechen.",
      "C) Magnetkontakte an Fenstern.",
      "D) Erschütterungsmelder an Tresoren."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Optische Rauchmelder (Streulichtmelder) zur Erkennung von sichtbarem Rauch.",
        "translations": {
          "ru": "Оптические дымовые датчики (по рассеянному свету) для обнаружения видимого дыма.",
          "en": "Optical smoke detectors (scattered light detectors) for detecting visible smoke particles.",
          "ar": "كواشف الدخان البصرية (تعتمد على تشتت الضوء) لاكتشاف جزيئات الدخان المرئية.",
          "fa": "حسگرهای دود نوری (بر مبنای شکست نور) برای تشخیص ذرات دود مرئی."
        }
      },
      {
        "id": "b",
        "text": "B) Thermomelder (Wärmemelder), die auf Temperaturanstieg oder Maximaltemperatur ansprechen.",
        "translations": {
          "ru": "Тепловые датчики (термодетекторы), реагирующие на повышение температуры или достижение порога.",
          "en": "Heat detectors responding to temperature rate-of-rise or maximum temperature thresholds.",
          "ar": "كواشف الحرارة التي تستجيب لمعدل ارتفاع الحرارة أو بلوغ الحد الأقصى.",
          "fa": "حسگرهای حرارتی که به سرعت افزایش دما یا رسیدن به حداکثر دما واکنش می‌دهند."
        }
      },
      {
        "id": "c",
        "text": "C) Magnetkontakte an Fenstern.",
        "translations": {
          "ru": "Магнитные контакты на окнах.",
          "en": "Magnetic reed contacts on windows.",
          "ar": "نقاط التلامس المغناطيسية على النوافذ.",
          "fa": "کنتاکت‌های مگنتی روی پنجره‌ها."
        }
      },
      {
        "id": "d",
        "text": "D) Erschütterungsmelder an Tresoren.",
        "translations": {
          "ru": "Вибродатчики на сейфах.",
          "en": "Seismic vibration detectors on safes.",
          "ar": "كواشف الاهتزاز والصدمات على الخزائن.",
          "fa": "حسگرهای لرزش روی گاوصندوق‌ها."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "BMA-Melder: Optische Rauchmelder, Thermomelder, Flammenmelder und Mehrsensormelder sowie manuelle Handfeuermelder (Druckknopfmelder).",
    "translations": {
      "ru": {
        "question": "Какие типы пожарных извещателей применяются в пожарной сигнализации (BMA)? (Выберите 2 ответа)",
        "explanation": "В BMA применяются оптические дымовые, тепловые, пламенные извещатели и ручные кнопки тревоги."
      },
      "en": {
        "question": "Which types of fire detectors are utilized in fire alarm systems (BMA)? (Choose two correct answers)",
        "explanation": "Fire alarm systems employ optical smoke detectors, heat detectors, flame detectors, and manual call points."
      },
      "ar": {
        "question": "ما هي أنواع كواشف الحريق المستخدمة في أنظمة إنذار الحريق (BMA)؟ (اختر إجابتين صحيحتين)",
        "explanation": "تشمل كواشف الحريق: كواشف الدخان البصرية، كواشف الحرارة، كواشف اللهب، وأزرار الإنذار اليدوية."
      },
      "fa": {
        "question": "کدام نوع از دتکتورهای حریق در سیستم‌های اعلام حریق (BMA) به کار می‌روند؟ (دو پاسخ صحیح)",
        "explanation": "دتکتورهای دود نوری، دتکتورهای حرارتی، دتکتورهای شعله و شستی‌های دستی اعلام حریق."
      }
    }
  },
  {
    "id": "ihk-technik-5",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Was bedeutet die \"Zwangsläufigkeit\" bei einer Einbruchmeldeanlage nach VdS-Richtlinien?",
    "optionen": [
      "A) Die Anlage kann nur dann scharfgeschaltet werden, wenn alle überwachten Fenster und Türen geschlossen und alle Melder im Ruhezustand sind.",
      "B) Jeder Mitarbeiter muss zwingend alle 10 Minuten den Alarmknopf drücken.",
      "C) Bei Alarm wird automatisch die Polizei gerufen, ohne dass man eingreifen kann.",
      "D) Die EMA schaltet sich um 22:00 Uhr zwangsweise ab."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Anlage kann nur dann scharfgeschaltet werden, wenn alle überwachten Fenster und Türen geschlossen und alle Melder im Ruhezustand sind.",
        "translations": {
          "ru": "Система может быть поставлена на охрану только тогда, когда все охраняемые окна и двери закрыты, а датчики находятся в состоянии покоя.",
          "en": "The system can only be armed when all monitored windows/doors are closed and all detectors are in an undisturbed quiescent state.",
          "ar": "لا يمكن تفعيل النظام وتسليحه إلا إذا كانت جميع النوافذ والأبواب المراقبة مغلقة وجميع الحساسات في حالة هدوء واستقرار.",
          "fa": "سیستم تنها زمانی می‌تواند فعال (مسلح) شود که تمام درب‌ها و پنجره‌های تحت نظارت بسته و همه سنسورها در وضعیت آرام باشند."
        }
      },
      {
        "id": "b",
        "text": "B) Jeder Mitarbeiter muss zwingend alle 10 Minuten den Alarmknopf drücken.",
        "translations": {
          "ru": "Каждый сотрудник обязан каждые 10 минут нажимать тревожную кнопку.",
          "en": "Every guard must mandatory press the alarm button every 10 minutes.",
          "ar": "يجب على كل موظف الضغط على زر الإنذار كل 10 دقائق بشكل إجباري.",
          "fa": "هر کارمند باید اجباراً هر ۱۰ دقیقه دکمه هشدار را فشار دهد."
        }
      },
      {
        "id": "c",
        "text": "C) Bei Alarm wird automatisch die Polizei gerufen, ohne dass man eingreifen kann.",
        "translations": {
          "ru": "При тревоге автоматически вызывается полиция без возможности вмешательства.",
          "en": "During alarms, police are summoned automatically without possibility of intervention.",
          "ar": "يتم استدعاء الشرطة تلقائياً دون إمكانية التدخل البشري.",
          "fa": "در صورت هشدار، پلیس به صورت خودکار بدون امکان لغو فراخوانده می‌شود."
        }
      },
      {
        "id": "d",
        "text": "D) Die EMA schaltet sich um 22:00 Uhr zwangsweise ab.",
        "translations": {
          "ru": "Сигнализация принудительно отключается в 22:00.",
          "en": "The intrusion alarm forcibly shuts off at 22:00.",
          "ar": "يتم إيقاف نظام الإنذار إجبارياً في تمام الساعة العاشرة مساءً.",
          "fa": "سیستم دزدگیر رأس ساعت ۲۲:۰۰ اجباراً خاموش می‌شود."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Zwangsläufigkeit verhindert Falschalarme: Scharfschaltung ist nur möglich, wenn alle Sicherungsbereiche verriegelt und fehlerfrei sind.",
    "translations": {
      "ru": {
        "question": "Что означает принцип «неизбежной взаимосвязи / блокировки» (Zwangsläufigkeit) в сигнализациях по нормам VdS?",
        "explanation": "Принцип Zwangsläufigkeit исключает ложные тревоги: постановка на охрану невозможна при открытых окнах или сработавших датчиках."
      },
      "en": {
        "question": "What is meant by \"interlocking / unbypassable readiness\" (Zwangsläufigkeit) in VdS alarm guidelines?",
        "explanation": "Zwangsläufigkeit prevents false alarms: arming is strictly impossible unless all zones are locked and clear."
      },
      "ar": {
        "question": "ماذا يعني مبدأ «الحتمية وعدم القابلية للتجاوز» (Zwangsläufigkeit) في أنظمة الإنذار وفق معايير VdS؟",
        "explanation": "يمنع هذا المبدأ الإنذارات الكاذبة: لا يمكن تفعيل النظام إلا إذا كانت جميع الأبواب والنوافذ مغلقة وسليمة تماماً."
      },
      "fa": {
        "question": "مفهوم «شرط آمادگی حتمی» (Zwangsläufigkeit) در دزدگیرها طبق استانداردهای VdS چیست؟",
        "explanation": "این اصل مانع آلارم کاذب می‌شود: مسلح کردن دستگاه فقط در صورت بسته بودن تمام درب/پنجره‌ها و سلامت مدارها امکان‌پذیر است."
      }
    }
  },
  {
    "id": "ihk-technik-6",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Welche mechanischen Sicherungseinrichtungen erhöhen den Einbruchschutz?",
    "optionen": [
      "A) Profilzylinder mit Sicherungskarte, Querriegelschlösser, Pilzkopfverriegelungen an Fenstern und Sicherheitsglas (P6B).",
      "B) Einfache Bartschlösser an Holztüren.",
      "C) Deko-Aufkleber \"Vorsicht Hund\".",
      "D) Plastikriegel an Gartenhütten."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Profilzylinder mit Sicherungskarte, Querriegelschlösser, Pilzkopfverriegelungen an Fenstern und Sicherheitsglas (P6B).",
        "translations": {
          "ru": "Профильные цилиндры с картой безопасности, поперечные замки-балки, грибовидные цапфы на окнах и бронестекло (P6B).",
          "en": "Profile cylinders with security cards, cross-bar rim locks, mushroom-cam window fittings, and security laminated glass (P6B).",
          "ar": "أسطوانات القفل ذات البطاقات الأمنية، وأقفال العارضة المتقاطعة، ومقابض الفطر للنوافذ، والزجاج الأمني المقاوم (P6B).",
          "fa": "سیلندرهای پروفیلی دارای کارت امنیتی، قفل‌های کشویی ضدسرقت، یراق‌آلات قارچی پنجره و شیشه‌های ضدگلوله و ضربه (P6B)."
        }
      },
      {
        "id": "b",
        "text": "B) Einfache Bartschlösser an Holztüren.",
        "translations": {
          "ru": "Простые сувальдные замочки на деревянных дверях.",
          "en": "Simple warded lever locks on wooden interior doors.",
          "ar": "الأقفال البسيطة التقليدية على الأبواب الخشبية.",
          "fa": "قفل‌های کلیدی ساده و قدیمی روی درب‌های چوبی."
        }
      },
      {
        "id": "c",
        "text": "C) Deko-Aufkleber \"Vorsicht Hund\".",
        "translations": {
          "ru": "Декоративная наклейка «Осторожно, злая собака».",
          "en": "Decorative sticker warning \"Beware of Dog\".",
          "ar": "ملصق تحذيري ديكوري مكتوب عليه \"احذر الكلب\".",
          "fa": "برچسب تزئینی «مواظب سگ باشید»."
        }
      },
      {
        "id": "d",
        "text": "D) Plastikriegel an Gartenhütten.",
        "translations": {
          "ru": "Пластиковые задвижки на садовых сараях.",
          "en": "Plastic sliding latches on garden sheds.",
          "ar": "مزالج بلاستيكية على أكواخ الحديقة.",
          "fa": "چفت‌های پلاستیکی درب کلبه باغچه."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Mechanik vor Elektronik: Mechanische Widerstandselemente (Pilzkopfzapfen, Panzerriegel, Einbruchschutzverglasung) verzögern den Täterangriff physikalisch.",
    "translations": {
      "ru": {
        "question": "Какие механические средства защиты повышают взломостойкость объекта?",
        "explanation": "Механика важнее электроники: грибовидные цапфы, ригели и бронестекло физически задерживают взломщика."
      },
      "en": {
        "question": "Which mechanical physical security measures enhance burglary protection?",
        "explanation": "Mechanics before electronics: mushroom cams, cross-bolt locks, and security glazing physically delay intrusion attempts."
      },
      "ar": {
        "question": "ما هي وسائل التأمين الميكانيكية التي تعزز الحماية ضد السطو والكسر؟",
        "explanation": "الحماية الميكانيكية تسبق الإلكترونية: الأقفال المدرعة والزجاج المقاوم تؤخر دخول الجاني مادياً."
      },
      "fa": {
        "question": "کدام تجهیزات مکانیکی باعث افزایش مقاومت در برابر سرقت و نفوذ می‌شوند؟",
        "explanation": "مکانیک مقدم بر الکترونیک: یراق‌آلات قارچی، قفل‌های حفاظتی و شیشه‌های ایمنی از نظر فیزیکی نفوذ سارق را به تأخیر می‌اندازند."
      }
    }
  },
  {
    "id": "ihk-technik-7",
    "kategorie": "Grundsätze der Sicherheitstechnik",
    "frage": "Welche Aufgaben hat eine Notruf- und Serviceleitstelle (NSL) nach DIN EN 50518? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Empfang, Protokollierung und qualifizierte Bearbeitung von Alarm- und Störmeldungen.",
      "B) Einleitung von Interventionsmaßnahmen gemäß dem vereinbarten Alarmplan (z. B. Entsendung von Interventionskräften, Benachrichtigung der Polizei/Feuerwehr).",
      "C) Automatische Bestrafung der Einbrecher vor Ort.",
      "D) Verkauf von Versicherungsverträgen während der Nachtschicht."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Empfang, Protokollierung und qualifizierte Bearbeitung von Alarm- und Störmeldungen.",
        "translations": {
          "ru": "Прием, протоколирование и квалифицированная обработка сигналов тревоги и неисправностей.",
          "en": "Receiving, logging, and qualified handling of alarm and system fault messages.",
          "ar": "استقبال وتوثيق ومعالجة إشارات الإنذار وبلاغات الأعطال بمهنية عالية.",
          "fa": "دریافت، ثبت در سیستم و پردازش تخصصی سیگنال‌های هشدار و خطاهای فنی."
        }
      },
      {
        "id": "b",
        "text": "B) Einleitung von Interventionsmaßnahmen gemäß dem vereinbarten Alarmplan (z. B. Entsendung von Interventionskräften, Benachrichtigung der Polizei/Feuerwehr).",
        "translations": {
          "ru": "Инициирование мер реагирования по согласованному плану тревоги (высылка групп быстрого реагирования, вызов полиции/пожарных).",
          "en": "Initiating response measures pursuant to agreed emergency response plans (e.g. dispatching patrol guards, notifying police/fire services).",
          "ar": "بدء إجراءات التدخل وفق خطة الطوارئ المعتمدة (مثل إرسال فرق التدخل السريع وإبلاغ الشرطة/الإطفاء).",
          "fa": "آغاز اقدامات مداخله‌ای طبق نقشه هشدار توافق‌شده (مانند اعزام نیروهای گشت واکنش سریع، اطلاع به پلیس/آتش‌نشانی)."
        }
      },
      {
        "id": "c",
        "text": "C) Automatische Bestrafung der Einbrecher vor Ort.",
        "translations": {
          "ru": "Автоматическое наказание грабителей на месте.",
          "en": "Automated physical punishing of intruders on premises.",
          "ar": "معاقبة اللصوص والمقتحمين تلقائياً في المكان.",
          "fa": "مجازات خودکار سارقین در محل وقوع جرم."
        }
      },
      {
        "id": "d",
        "text": "D) Verkauf von Versicherungsverträgen während der Nachtschicht.",
        "translations": {
          "ru": "Продажа страховых полисов во время ночной смены.",
          "en": "Selling insurance contracts during night shifts.",
          "ar": "بيع وثائق التأمين خلال الوردية الليلية.",
          "fa": "فروش بیمه‌نامه در حین شیفت شب."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Die nach DIN EN 50518 zertifizierte NSL empfängt 24/7 Alarme, verifiziert diese und leitet unverzüglich Interventionen nach Alarmplan ein.",
    "translations": {
      "ru": {
        "question": "Каковы задачи пульта централизованного наблюдения (NSL) согласно стандарту DIN EN 50518? (Выберите 2 ответа)",
        "explanation": "NSL круглосуточно принимает сигналы тревоги, проверяет их и организует оперативное реагирование по плану."
      },
      "en": {
        "question": "What are the core duties of an alarm receiving center (NSL) compliant with DIN EN 50518? (Choose two correct answers)",
        "explanation": "Certified NSLs receive alarms 24/7, verify incoming events, and execute immediate dispatch protocols."
      },
      "ar": {
        "question": "ما هي مهام مركز مراقبة الإنذار والخدمات (NSL) بموجب المعيار DIN EN 50518؟ (اختر إجابتين صحيحتين)",
        "explanation": "يستقبل مركز NSL الإنذارات على مدار الساعة، ويتحقق منها، ويباشر إجراءات التدخل الميداني فوراً."
      },
      "fa": {
        "question": "وظایف مرکز کنترل و دریافت هشدار (NSL) طبق استاندارد DIN EN 50518 چیست؟ (دو پاسخ صحیح)",
        "explanation": "مرکز مانیتورینگ ۲۴ ساعته سیگنال‌ها را دریافت و اعتبارسنجی کرده و عملیات اعزام گشت را کلید می‌زند."
      }
    }
  },
  {
    "id": "ihk-datenschutz-1",
    "kategorie": "Datenschutzrecht",
    "frage": "Was sind \"personenbezogene Daten\" nach Art. 4 Nr. 1 DSGVO?",
    "optionen": [
      "A) Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, Videoaufnahmen, Kennzeichen, IP-Adresse).",
      "B) Ausschließlich streng geheime Staatsgeheimnisse.",
      "C) Reine Wetterdaten und Luftdruckmessungen.",
      "D) Statistische Angaben über den Benzinpreis."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, Videoaufnahmen, Kennzeichen, IP-Adresse).",
        "translations": {
          "ru": "Любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу (имя, видеозапись, госномер, IP-адрес).",
          "en": "Any information relating to an identified or identifiable natural person (e.g. name, video footage, license plate, IP address).",
          "ar": "أي معلومات تتعلق بشخص طبيعي محدد الهوية أو يمكن تحديد هويته (مثل الاسم، تسجيلات الفيديو، لوحة السيارة، عنوان IP).",
          "fa": "هرگونه اطلاعات مربوط به یک شخص حقیقی شناسایی‌شده یا قابل شناسایی (مانند نام، تصویر ویدئویی، پلاک خودرو، آدرس IP)."
        }
      },
      {
        "id": "b",
        "text": "B) Ausschließlich streng geheime Staatsgeheimnisse.",
        "translations": {
          "ru": "Исключительно государственные тайны особой важности.",
          "en": "Exclusively top-secret state secrets.",
          "ar": "أسرار الدولة شديدة السرية فقط.",
          "fa": "صرفاً اسرار به شدت محرمانه دولتی."
        }
      },
      {
        "id": "c",
        "text": "C) Reine Wetterdaten und Luftdruckmessungen.",
        "translations": {
          "ru": "Исключительно данные о погоде и атмосферном давлении.",
          "en": "Pure meteorological data and air pressure readings.",
          "ar": "بيانات الطقس وقياسات الضغط الجوي البحتة.",
          "fa": "داده‌های صرف هواشناسی و اندازه‌گیری فشار هوا."
        }
      },
      {
        "id": "d",
        "text": "D) Statistische Angaben über den Benzinpreis.",
        "translations": {
          "ru": "Статистические данные о ценах на бензин.",
          "en": "Statistical aggregated reports on gasoline prices.",
          "ar": "إحصائيات مجردة عن أسعار الوقود.",
          "fa": "گزارش‌های آماری درباره قیمت بنزین."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Personenbezogene Daten sind alle Angaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren lebenden Person.",
    "translations": {
      "ru": {
        "question": "Что такое «персональные данные» согласно ст. 4 п. 1 GDPR (DSGVO)?",
        "explanation": "Персональные данные — это любые сведения, позволяющие прямо или косвенно определить живого человека."
      },
      "en": {
        "question": "What constitutes \"personal data\" under Art. 4 No. 1 GDPR (DSGVO)?",
        "explanation": "Personal data encompasses any details relating to personal or material circumstances of an identified or identifiable individual."
      },
      "ar": {
        "question": "ما هي «البيانات الشخصية» بموجب المادة 4 فقرة 1 من اللائحة العامة لحماية البيانات (DSGVO)؟",
        "explanation": "البيانات الشخصية هي أي معلومة تخص شخصاً طبيعياً يمكن التعرف عليه بشكل مباشر أو غير مباشر."
      },
      "fa": {
        "question": "«داده‌های شخصی» طبق ماده ۴ بند ۱ مقررات GDPR (DSGVO) شامل چه مواردی است؟",
        "explanation": "داده‌های شخصی شامل هر اطلاعاتی است که مستقیماً یا غیرمستقیم به هویت یک انسان زنده ارتباط دارد."
      }
    }
  },
  {
    "id": "ihk-datenschutz-2",
    "kategorie": "Datenschutzrecht",
    "frage": "Welche Anforderungen gelten für die Videoüberwachung öffentlich zugänglicher Räume nach § 4 BDSG? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Der Umstand der Videoüberwachung und die verantwortliche Stelle müssen durch geeignete Hinweisschilder (Piktogramm & Kontaktdaten) sofort erkennbar gemacht werden.",
      "B) Die Überwachung muss zur Wahrnehmung des Hausrechts oder berechtigter Interessen erforderlich sein und schutzwürdige Interessen der Betroffenen dürfen nicht überwiegen.",
      "C) Kameras dürfen heimlich in Umkleidekabinen und Toiletten installiert werden.",
      "D) Aufnahmen müssen für mindestens 10 Jahre im Internet veröffentlicht werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Der Umstand der Videoüberwachung und die verantwortliche Stelle müssen durch geeignete Hinweisschilder (Piktogramm & Kontaktdaten) sofort erkennbar gemacht werden.",
        "translations": {
          "ru": "Факт видеонаблюдения и ответственное лицо должны быть четко обозначены информационными знаками (пиктограмма и контакты).",
          "en": "The circumstance of video surveillance and the controller must be made immediately recognizable through clear warning signs (pictogram & contact details).",
          "ar": "يجب الإشارة بوضوح لوجود مراقبة بالفيديو والجهة المسؤولة عبر لوحات تحذيرية واضحة (رمز الكاميرا وبيانات الاتصال).",
          "fa": "وجود نظارت تصویری و هویت مرجع مسئول باید فوراً از طریق تابلوهای هشداردهنده مناسب (پیکتوگرام و اطلاعات تماس) مشخص شود."
        }
      },
      {
        "id": "b",
        "text": "B) Die Überwachung muss zur Wahrnehmung des Hausrechts oder berechtigter Interessen erforderlich sein und schutzwürdige Interessen der Betroffenen dürfen nicht überwiegen.",
        "translations": {
          "ru": "Видеонаблюдение должно быть необходимым для защиты права владения объектом или законных интересов, не нарушая прав граждан.",
          "en": "Surveillance must be necessary to exercise domiciliary rights or legitimate interests, without overriding the data subjects' protected rights.",
          "ar": "يجب أن تكون المراقبة ضرورية لإنفاذ حق المكان أو المصالح المشروعة دون أن تطغى على حقوق وخصوصية الأشخاص الخاضعين للمراقبة.",
          "fa": "نظارت باید برای اعمال حق مالکیت یا منافع مشروع ضروری بوده و بر حقوق حفاظت‌شده افراد غلبه نکند."
        }
      },
      {
        "id": "c",
        "text": "C) Kameras dürfen heimlich in Umkleidekabinen und Toiletten installiert werden.",
        "translations": {
          "ru": "Камеры можно скрытно ставить в раздевалках и туалетах.",
          "en": "Cameras may be installed covertly inside fitting rooms and restrooms.",
          "ar": "يجوز تثبيت الكاميرات سراً في غرف تبديل الملابس ودورات المياه.",
          "fa": "می‌توان دوربین‌ها را به صورت مخفی در اتاق‌های پرو و سرویس‌های بهداشتی نصب کرد."
        }
      },
      {
        "id": "d",
        "text": "D) Aufnahmen müssen für mindestens 10 Jahre im Internet veröffentlicht werden.",
        "translations": {
          "ru": "Записи должны публиковаться в интернете минимум на 10 лет.",
          "en": "Recordings must be published on the internet for at least 10 years.",
          "ar": "يجب نشر التسجيلات على الإنترنت لمدة لا تقل عن 10 سنوات.",
          "fa": "تصاویر ضبط‌شده باید حداقل ۱۰ سال در اینترنت منتشر شوند."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Transparenzgebot (§ 4 BDSG / Art. 13 DSGVO): Deutliche Hinweisschilder vor Betreten des Erfassungsbereichs; keine Überwachung im Intimbereich.",
    "translations": {
      "ru": {
        "question": "Какие требования предъявляются к видеонаблюдению в общедоступных местах согласно § 4 BDSG? (Выберите 2 ответа)",
        "explanation": "Требуются таблички с контактами и обоснование законным интересом; видеонаблюдение в интимных зонах строго запрещено."
      },
      "en": {
        "question": "Which requirements apply to video surveillance in publicly accessible premises under Section 4 BDSG? (Choose two correct answers)",
        "explanation": "Transparency principle (§ 4 BDSG): conspicuous warning signs before entering camera zones; strictly prohibited in intimate areas."
      },
      "ar": {
        "question": "ما هي الشروط المطبقة على مراقبة الأماكن المتاحة للجمهور بالكاميرات وفقاً للمادة 4 من BDSG؟ (اختر إجابتين صحيحتين)",
        "explanation": "مبدأ الشفافية: وضع لوحات تحذيرية واضحة قبل الدخول؛ ويُمنع منعاً باتاً التصوير في الأماكن الخاصة والحميمة."
      },
      "fa": {
        "question": "چه الزاماتی برای نظارت تصویری در اماکن عمومی طبق بند ۴ قانون BDSG وجود دارد؟ (دو پاسخ صحیح)",
        "explanation": "اصل شفافیت: نصب تابلوی واضح قبل از ورود به دید دوربین؛ نصب دوربین در فضاهای خصوصی و سرویس‌ها مطلقاً ممنوع است."
      }
    }
  },
  {
    "id": "ihk-datenschutz-3",
    "kategorie": "Datenschutzrecht",
    "frage": "Welche Pflichten treffen einen Sicherheitsmitarbeiter bezüglich des Datenschutzes im Dienst? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Wahrung des Datengeheimnisses: Keine unbefugte Weitergabe von personenbezogenen Daten (z. B. Besucherlisten, Mitarbeiterdaten, Kamerabilder).",
      "B) Das Datengeheimnis und die Verschwiegenheitspflicht gelten auch nach Beendigung des Arbeitsverhältnisses fort.",
      "C) Er darf interessante Videoaufnahmen auf sein privates Handy kopieren und Freunden zeigen.",
      "D) Er darf Besucherdaten an Werbefirmen verkaufen."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Wahrung des Datengeheimnisses: Keine unbefugte Weitergabe von personenbezogenen Daten (z. B. Besucherlisten, Mitarbeiterdaten, Kamerabilder).",
        "translations": {
          "ru": "Соблюдение тайны данных: запрет на несанкционированную передачу персональных данных (списки посетителей, видеозаписи).",
          "en": "Preserving data confidentiality: no unauthorized disclosure of personal data (e.g. visitor logs, employee records, camera footage).",
          "ar": "الحفاظ على سرية البيانات: عدم تسريب أو نقل البيانات الشخصية دون تصريح (مثل سجل الزوار وبيانات الموظفين وتصوير الكاميرات).",
          "fa": "حفظ محرمانگی داده‌ها: عدم انتقال غیرمجاز اطلاعات هویتی و شخصی (مانند لیست مراجعین، داده‌های پرسنل، تصاویر دوربین‌ها)."
        }
      },
      {
        "id": "b",
        "text": "B) Das Datengeheimnis und die Verschwiegenheitspflicht gelten auch nach Beendigung des Arbeitsverhältnisses fort.",
        "translations": {
          "ru": "Обязанность соблюдать тайну данных и конфиденциальность сохраняется и после увольнения.",
          "en": "Data confidentiality and professional non-disclosure obligations continue even after employment termination.",
          "ar": "يظل واجب الحفاظ على سرية البيانات والكتمان سارياً حتى بعد انتهاء عقد العمل.",
          "fa": "تعهد به حفظ محرمانگی داده‌ها و رازداری حرفه‌ای حتی پس از پایان قرارداد کاری همچنان معتبر و پابرجا است."
        }
      },
      {
        "id": "c",
        "text": "C) Er darf interessante Videoaufnahmen auf sein privates Handy kopieren und Freunden zeigen.",
        "translations": {
          "ru": "Он может копировать интересные видеозаписи на свой телефон и показывать друзьям.",
          "en": "He may copy interesting video clips onto his private smartphone and show friends.",
          "ar": "يجوز له نسخ مقاطع الفيديو المثيرة للاهتمام على هاتفه الشخصي وعرضها على أصدقائه.",
          "fa": "او می‌تواند ویدئوهای جالب دوربین مداربسته را روی گوشی شخصی کپی کرده و به دوستانش نشان دهد."
        }
      },
      {
        "id": "d",
        "text": "D) Er darf Besucherdaten an Werbefirmen verkaufen.",
        "translations": {
          "ru": "Он может продавать данные посетителей рекламным агентствам.",
          "en": "He may monetize visitor databases by selling them to advertising firms.",
          "ar": "يجوز له بيع بيانات الزوار لشركات الدعاية والإعلان.",
          "fa": "او مجاز است اطلاعات مراجعین را به شرکت‌های تبلیغاتی بفروشد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Verschwiegenheit und Datengeheimnis sind strikt einzuhalten; Verstöße können strafrechtliche Konsequenzen und Bußgelder nach sich ziehen.",
    "translations": {
      "ru": {
        "question": "Каковы обязанности сотрудника службы безопасности в отношении защиты данных на службе? (Выберите 2 ответа)",
        "explanation": "Обязанность хранить служебную тайну и конфиденциальность данных действует строго и бессрочно."
      },
      "en": {
        "question": "Which obligations apply to security guards regarding data protection during service? (Choose two correct answers)",
        "explanation": "Data secrecy and non-disclosure must be strictly maintained even beyond termination of employment."
      },
      "ar": {
        "question": "ما هي الالتزامات المفروضة على حارس الأمن فيما يتعلق بحماية البيانات أثناء الخدمة؟ (اختر إجابتين صحيحتين)",
        "explanation": "يجب الالتزام التام بالسرية وحماية البيانات، وتستمر هذه المسؤولية حتى بعد انتهاء علاقة العمل."
      },
      "fa": {
        "question": "وظایف نیروی حراست در قبال حفاظت از داده‌ها در حین خدمت چیست؟ (دو پاسخ صحیح)",
        "explanation": "محرمانگی اطلاعات و رازداری شغلی باید کاملاً رعایت شود و حتی بعد از اتمام همکاری نیز ادامه دارد."
      }
    }
  },
  {
    "id": "ihk-waffen-1",
    "kategorie": "Umgang mit Waffen",
    "frage": "Was versteht man unter dem Begriff \"Führen\" einer Waffe nach dem Waffengesetz?",
    "optionen": [
      "A) Die Ausübung der tatsächlichen Gewalt über eine Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des eigenen befriedeten Besitztums.",
      "B) Die Aufbewahrung der Waffe im verschlossenen Waffenschrank zu Hause.",
      "C) Das Herstellen von Patronen in einer Munitionsfabrik.",
      "D) Das Betrachten von Waffen in einem Museumskatalog."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Ausübung der tatsächlichen Gewalt über eine Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des eigenen befriedeten Besitztums.",
        "translations": {
          "ru": "Осуществление фактической власти над оружием вне собственного жилища, служебных помещений или огороженной частной территории.",
          "en": "Exercising actual physical control over a weapon outside one's own home, business premises, or fenced real property.",
          "ar": "ممارسة السيطرة المادية والفعلية على السلاح خارج المسكن الخاص أو أماكن العمل أو الملكية الخاصة المحاطة بسياج.",
          "fa": "اعمال سلطه و در اختیار داشتن عملی سلاح در خارج از منزل، محیط کسب و کار یا ملک محصور شخصی."
        }
      },
      {
        "id": "b",
        "text": "B) Die Aufbewahrung der Waffe im verschlossenen Waffenschrank zu Hause.",
        "translations": {
          "ru": "Хранение оружия в запертом оружейном сейфе дома.",
          "en": "Storing a weapon locked inside a home gun safe.",
          "ar": "تخزين السلاح في خزانة أسلحة مقفلة في المنزل.",
          "fa": "نگهداری اسلحه در گاوصندوق قفل‌شده در خانه."
        }
      },
      {
        "id": "c",
        "text": "C) Das Herstellen von Patronen in einer Munitionsfabrik.",
        "translations": {
          "ru": "Производство патронов на патронном заводе.",
          "en": "Manufacturing ammunition inside a cartridge plant.",
          "ar": "تصنيع الذخائر في مصنع أسلحة.",
          "fa": "تولید گلوله در کارخانه مهمات‌سازی."
        }
      },
      {
        "id": "d",
        "text": "D) Das Betrachten von Waffen in einem Museumskatalog.",
        "translations": {
          "ru": "Просмотр оружия в музейном каталоге.",
          "en": "Viewing firearms in a museum exhibition catalog.",
          "ar": "مشاهدة الأسلحة في كتالوج متحف.",
          "fa": "مشاهده تصاویر اسلحه در کاتالوگ موزه."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "WaffG Anlage 1: Wer eine Waffe außerhalb der eigenen Räume/des eigenen Besitztums zugriffsbereit bei sich hat, \"führt\" die Waffe und benötigt in der Regel einen Waffenschein.",
    "translations": {
      "ru": {
        "question": "Что понимается под термином «ношение оружия» (Führen) по Закону об оружии (WaffG)?",
        "explanation": "Ношение — это фактическое владение оружием вне своего жилья/помещений/участка, требующее лицензии на ношение."
      },
      "en": {
        "question": "What constitutes \"carrying a weapon\" (Führen) under the German Weapons Act (WaffG)?",
        "explanation": "WaffG Annex 1: Having ready physical control over a weapon outside one's own private premises constitutes \"carrying\" and requires a permit."
      },
      "ar": {
        "question": "ماذا يقصد بمصطلح «حمل السلاح» (Führen) بموجب قانون الأسلحة الألماني؟",
        "explanation": "ملحق 1 لقانون الأسلحة: حيازة السلاح والسيطرة عليه خارج المنزل أو ملكيتك الخاصة يعتبر حملاً ويتطلب ترخيصاً رسمياً."
      },
      "fa": {
        "question": "مفهوم «حمل سلاح» (Führen) طبق قانون تسلیحات آلمان چیست؟",
        "explanation": "در اختیار داشتن سلاح آماده به کار در خارج از منزل یا ملک اختصاصی، «حمل» محسوب شده و نیاز به مجوز رسمی دارد."
      }
    }
  },
  {
    "id": "ihk-waffen-2",
    "kategorie": "Umgang mit Waffen",
    "frage": "Welche Gegenstände sind nach Anlage 2 Abschnitt 1 WaffG in Deutschland absolut verboten? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Schlagringe, Wurfsterne und Butterflymesser.",
      "B) Schusswaffen mit Schalldämpfern oder Vorrichtungen, die das Ziel beleuchten / Nachtzielgeräte mit Bildwandler.",
      "C) Pfeffersprays mit der Aufschrift \"Tierabwehrspray\".",
      "D) Normale Taschenmesser mit zweihändiger Öffnung."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Schlagringe, Wurfsterne und Butterflymesser.",
        "translations": {
          "ru": "Кастеты, сюрикены (метательные звезды) и ножи-бабочки (балисонги).",
          "en": "Brass knuckles, throwing stars (shuriken), and butterfly knives (balisongs).",
          "ar": "القبضات الحديدية (البوكس)، ونجوم الرمي، وسكاكين الفراشة (الباليسونغ).",
          "fa": "پنجه‌بکس، ستاره‌های پرتابی (شوریکن) و چاقوهای پروانه‌ای."
        }
      },
      {
        "id": "b",
        "text": "B) Schusswaffen mit Schalldämpfern oder Vorrichtungen, die das Ziel beleuchten / Nachtzielgeräte mit Bildwandler.",
        "translations": {
          "ru": "Огнестрельное оружие с глушителями или целеуказателями/подсветкой цели, а также ночные прицелы с преобразователем.",
          "en": "Firearms with silencers or devices illuminating the target / electronic night-vision scopes.",
          "ar": "الأسلحة النارية المزودة بكواتم صوت أو أجهزة إضاءة وتحديد الأهداف / أجهزة الرؤية الليلية الإلكترونية.",
          "fa": "سلاح‌های گرم دارای صداخفه‌کن یا تجهیزات روشنایی روی هدف / دوربین‌های دید در شب الکترونیکی."
        }
      },
      {
        "id": "c",
        "text": "C) Pfeffersprays mit der Aufschrift \"Tierabwehrspray\".",
        "translations": {
          "ru": "Перцовые баллончики с маркировкой «для защиты от животных».",
          "en": "Pepper sprays explicitly labeled as \"Animal Defense Spray\".",
          "ar": "بخاخات الفلفل التي تحمل علامة \"بخاخ طرد ومكافحة الحيوانات\".",
          "fa": "اسپری فلفل دارای برچسب «دفاع در برابر حیوانات»."
        }
      },
      {
        "id": "d",
        "text": "D) Normale Taschenmesser mit zweihändiger Öffnung.",
        "translations": {
          "ru": "Обычные карманные складные ножи с открыванием двумя руками.",
          "en": "Ordinary pocket knives requiring two-handed opening.",
          "ar": "سكاكين الجيب التقليدية التي تفتح بكلتا اليدين.",
          "fa": "چاقوهای جیبی تاشو معمولی با قابلیت باز شدن دو دستی."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Verbotene Waffen laut WaffG: Schlagringe, Wurfsterne, Butterflymesser, Faustmesser, Präzisionsschleudern sowie Zielbeleuchtungseinrichtungen an Schusswaffen.",
    "translations": {
      "ru": {
        "question": "Какие предметы абсолютно запрещены в Германии согласно Приложению 2 Разд. 1 WaffG? (Выберите 2 ответа)",
        "explanation": "Запрещенное оружие: кастеты, сюрикены, ножи-бабочки, а также лазерные и световые прицелы для оружия."
      },
      "en": {
        "question": "Which items are categorically banned in Germany under Annex 2 Section 1 WaffG? (Choose two correct answers)",
        "explanation": "Prohibited weapons: brass knuckles, throwing stars, butterfly knives, push daggers, and target-illuminating gun mounts."
      },
      "ar": {
        "question": "ما هي الأدوات المحظورة تماماً في ألمانيا بموجب الملحق 2 القسم 1 من قانون الأسلحة؟ (اختر إجابتين صحيحتين)",
        "explanation": "أسلحة محظورة: البوكس الحديدي، نجوم الرمي، سكاكين الفراشة، وأجهزة إضاءة الأهداف المركبة على الأسلحة."
      },
      "fa": {
        "question": "کدام اقلام طبق پیوست ۲ بخش ۱ قانون تسلیحات در آلمان کاملاً ممنوع هستند؟ (دو پاسخ صحیح)",
        "explanation": "سلاح‌های ممنوعه: پنجه‌بکس، ستاره پرتابی، چاقوی پروانه‌ای و ابزارهای نورافکن متصل به اسلحه."
      }
    }
  },
  {
    "id": "ihk-waffen-3",
    "kategorie": "Umgang mit Waffen",
    "frage": "Welche Voraussetzungen müssen für den Transport einer Schusswaffe erfüllt sein, damit dies nicht als \"Führen\" gilt? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Die Waffe muss ungeladen sein.",
      "B) Die Waffe muss sich in einem verschlossenen Behältnis (z. B. mit Schloss gesicherter Koffer) befinden (nicht zugriffsbereit).",
      "C) Die Waffe darf geladen im Handschuhfach des Autos liegen.",
      "D) Die Waffe muss griffbereit im Holster getragen werden."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Die Waffe muss ungeladen sein.",
        "translations": {
          "ru": "Оружие должно быть полностью разряжено.",
          "en": "The firearm must be completely unloaded.",
          "ar": "يجب أن يكون السلاح غير ملقم وخالياً تماماً من الذخيرة.",
          "fa": "سلاح باید کاملاً خالی از فشنگ و بدون مهمات باشد."
        }
      },
      {
        "id": "b",
        "text": "B) Die Waffe muss sich in einem verschlossenen Behältnis (z. B. mit Schloss gesicherter Koffer) befinden (nicht zugriffsbereit).",
        "translations": {
          "ru": "Оружие должно находиться в запертом футляре/кейсе (например, чемоданчик с замком), исключающем быстрый доступ.",
          "en": "The weapon must be placed inside a locked container (e.g. case secured with a padlock), not readily accessible.",
          "ar": "يجب أن يكون السلاح في حاوية مقفلة (مثل حقيبة مؤمنة بقفل) وغير قابل للوصول السريع باليد.",
          "fa": "اسلحه باید در یک جعبه یا کیف قفل‌شده (مانند کیف با قفل آویز) و دور از دسترس سریع قرار داشته باشد."
        }
      },
      {
        "id": "c",
        "text": "C) Die Waffe darf geladen im Handschuhfach des Autos liegen.",
        "translations": {
          "ru": "Оружие может лежать заряженным в бардачке автомобиля.",
          "en": "The weapon may lie loaded inside the vehicle glove compartment.",
          "ar": "يجوز أن يوضع السلاح وهو ملقم في درج سيارة التابلوه.",
          "fa": "اسلحه می‌تواند پر از فشنگ درون داشبورد خودرو قرار گیرد."
        }
      },
      {
        "id": "d",
        "text": "D) Die Waffe muss griffbereit im Holster getragen werden.",
        "translations": {
          "ru": "Оружие должно находиться в кобуре под рукой.",
          "en": "The weapon must be worn ready-to-draw in a holster.",
          "ar": "يجب حمل السلاح في الجراب ليكون في متناول اليد فوراً.",
          "fa": "اسلحه باید آماده کشیدن در غلاف روی کمر قرار داشته باشد."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Erlaubnisfreier Transport (§ 12 WaffG): Ungeladen und in einem fest verschlossenen Behältnis (Schloss) von einem Ort zum anderen befördern.",
    "translations": {
      "ru": {
        "question": "Какие условия должны соблюдаться при транспортировке оружия, чтобы это не считалось «ношением»? (Выберите 2 ответа)",
        "explanation": "Транспортировка без разрешения: оружие разряжено и находится в запертом на замок кейсе/чехле (нет прямого доступа)."
      },
      "en": {
        "question": "Which conditions must be met for firearm transport to not be classified as \"carrying\"? (Choose two correct answers)",
        "explanation": "Permit-free transport (§ 12 WaffG): strictly unloaded and inside a locked container (padlock) not readily accessible."
      },
      "ar": {
        "question": "ما هي الشروط الواجب توفرها لنقل السلاح الناري حتى لا يعتبر ذلك «حملاً» غير قانوني؟ (اختر إجابتين صحيحتين)",
        "explanation": "النقل غير المقيد بترخيص خاص: أن يكون السلاح فارغاً من الذخيرة ومحفوظاً داخل حقيبة مقفلة بقفل محكم."
      },
      "fa": {
        "question": "چه شرایطی باید در حمل و جابه‌جایی اسلحه رعایت شود تا «حمل سلاح» تلقی نگردد؟ (دو پاسخ صحیح)",
        "explanation": "حمل بار مجاز: اسلحه بدون فشنگ بوده و درون جعبه یا کیف قفل‌شده قرار داشته باشد (عدم دسترسی فوری)."
      }
    }
  },
  {
    "id": "ihk-gewerbe-1",
    "kategorie": "Gewerberecht (GewO / BewachV)",
    "frage": "Für welche Bewachungstätigkeiten ist der Nachweis der erfolgreichen Sachkundeprüfung (§ 34a GewO) gesetzlich zwingend vorgeschrieben?",
    "optionen": [
      "A) Kontrollgänge im öffentlichen Verkehrsraum (z. B. Citystreife), Schutz vor Ladendieben (Kaufhausdetektiv), Einlasskontrollen im Türsteherbereich von Diskotheken sowie leitende Funktionen in Asyl- und Großunterkünften.",
      "B) Für jede beliebige Büroarbeit in einer Hausverwaltung.",
      "C) Ausschließlich für Bundeskanzler-Leibwächter.",
      "D) Nur für Hundeausführer im Park."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Kontrollgänge im öffentlichen Verkehrsraum (z. B. Citystreife), Schutz vor Ladendieben (Kaufhausdetektiv), Einlasskontrollen im Türsteherbereich von Diskotheken sowie leitende Funktionen in Asyl- und Großunterkünften.",
        "translations": {
          "ru": "Патрулирование в общественных местах (Citystreife), защита от магазинных воров (детектив), фейсконтроль в дискотеках и руководящие посты в общежитиях для беженцев.",
          "en": "Patrols in public traffic spaces (city patrols), retail store detective work, discotheque doorman door control, and management functions in asylum/large shelters.",
          "ar": "دوريات الأماكن العامة، محققو المتاجر ضد السرقة، حراسة ومراقبة مداخل الملاهي والديسكو، والمهام القيادية في مراكز اللجوء والإيواء.",
          "fa": "گشت‌زنی در اماکن عمومی، کارآگاه فروشگاهی، کنترل ورودی و بانسری دیسکوها و نقش‌های مدیریتی در اقامتگاه‌های پناهجویان."
        }
      },
      {
        "id": "b",
        "text": "B) Für jede beliebige Büroarbeit in einer Hausverwaltung.",
        "translations": {
          "ru": "Для любой офисной работы в управляющей компании.",
          "en": "For standard desk work in property management.",
          "ar": "لأي عمل مكتبي عادي في إدارة العقارات.",
          "fa": "برای هرگونه کار اداری معمولی در شرکت‌های ساختمانی."
        }
      },
      {
        "id": "c",
        "text": "C) Ausschließlich für Bundeskanzler-Leibwächter.",
        "translations": {
          "ru": "Исключительно для телохранителей канцлера.",
          "en": "Strictly for bodyguards of the Federal Chancellor.",
          "ar": "حصرياً للحراس الشخصيين للمستشار الاتحادي.",
          "fa": "صرفاً برای محافظان شخصی صدراعظم فدرال."
        }
      },
      {
        "id": "d",
        "text": "D) Nur für Hundeausführer im Park.",
        "translations": {
          "ru": "Только для выгульщиков собак в парке.",
          "en": "Exclusively for dog walkers in public parks.",
          "ar": "فقط لمن يخرج الكلاب للنزهة في الحدائق.",
          "fa": "فقط برای کسانی که سگ‌ها را در پارک می‌گردانند."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "§ 34a Abs. 1a Satz 2 GewO schreibt die Sachkundeprüfung verbindlich vor für: 1. Citystreifen, 2. Kaufhausdetektive, 3. Türsteher (Gaststätten/Diskotheken), 4. Leitung bei Asylheimen und Großveranstaltungen.",
    "translations": {
      "ru": {
        "question": "Для каких видов охранной деятельности сдача экзамена Sachkunde (§ 34a GewO) является строго обязательной по закону?",
        "explanation": "Экзамен 34a обязателен для: городских патрулей, детективов в магазинах, вышибал в клубах и руководства охраной в лагерях беженцев."
      },
      "en": {
        "question": "For which security activities is passing the expert knowledge examination (§ 34a GewO) legally mandatory?",
        "explanation": "§ 34a GewO mandates the exam for: 1. City patrols, 2. Store detectives, 3. Doormen/bouncers, 4. Management in refugee shelters/events."
      },
      "ar": {
        "question": "لأي أنشطة حراسة يعد اجتياز اختبار الكفاءة والخبرة (§ 34a GewO) إلزامياً بموجب القانون؟",
        "explanation": "المادة 34a تلزم بالاختبار لـ: دوريات الشوارع، محققي المحلات، حراس أبواب الملاهي، وإدارة أمن مراكز اللاجئين والفعاليات الكبرى."
      },
      "fa": {
        "question": "برای کدام فعالیت‌های حفاظتی قبولی در آزمون تخصصی (§ 34a GewO) از نظر قانونی الزامی است؟",
        "explanation": "آزمون ۳۴a اجباری است برای: ۱. گشت شهری، ۲. کارآگاه فروشگاه، ۳. بانسری کلاب‌ها، ۴. مدیریت حراست در مراکز پناهندگی و رویدادهای بزرگ."
      }
    }
  },
  {
    "id": "ihk-gewerbe-2",
    "kategorie": "Gewerberecht (GewO / BewachV)",
    "frage": "Was ist das Bewacherregister (BWR) nach § 34a GewO?",
    "optionen": [
      "A) Ein bundesweites elektronisches Register, in dem alle Bewachungsunternehmer und Wachpersonen erfasst, auf Zuverlässigkeit überprüft und freigegeben werden müssen.",
      "B) Eine private Mitgliederliste eines Sportvereins.",
      "C) Das Telefonbuch der regionalen Polizeiinspektion.",
      "D) Ein Register nur für ausländische Sicherheitsdienste."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Ein bundesweites elektronisches Register, in dem alle Bewachungsunternehmer und Wachpersonen erfasst, auf Zuverlässigkeit überprüft und freigegeben werden müssen.",
        "translations": {
          "ru": "Общенациональный электронный реестр, в котором регистрируются, проверяются на благонадежность и утверждаются все охранные фирмы и охранники.",
          "en": "A nationwide electronic register in which all security business operators and guarding personnel must be recorded, vetted for reliability, and cleared.",
          "ar": "سجل إلكتروني اتحادي يتم فيه تسجيل جميع شركات الحراسة وأفراد الأمن والتحقق من موثوقيتهم ومنحهم الموافقة الرسمية.",
          "fa": "سامانه الکترونیکی سراسری که در آن کلیه شرکت‌ها و پرسنل حراست باید ثبت، بررسی صلاحیت و تأیید شوند."
        }
      },
      {
        "id": "b",
        "text": "B) Eine private Mitgliederliste eines Sportvereins.",
        "translations": {
          "ru": "Частный список членов спортивного клуба.",
          "en": "A private membership list of a sports club.",
          "ar": "قائمة أعضاء خاصة بنادٍ رياضي.",
          "fa": "لیست اعضای خصوصی یک باشگاه ورزشی."
        }
      },
      {
        "id": "c",
        "text": "C) Das Telefonbuch der regionalen Polizeiinspektion.",
        "translations": {
          "ru": "Телефонный справочник местного отделения полиции.",
          "en": "The internal telephone directory of regional police stations.",
          "ar": "دليل هواتف قسم الشرطة الإقليمي.",
          "fa": "دفترچه تلفن اداره پلیس منطقه."
        }
      },
      {
        "id": "d",
        "text": "D) Ein Register nur für ausländische Sicherheitsdienste.",
        "translations": {
          "ru": "Реестр только для иностранных охранных служб.",
          "en": "A registry solely for foreign security companies.",
          "ar": "سجل خاص بشركات الأمن الأجنبية فقط.",
          "fa": "سامانه ثبت اختصاصی شرکت‌های امنیتی خارجی."
        }
      }
    ],
    "korrekteAntworten": [
      0
    ],
    "punkte": 1,
    "erklaerung": "Das Bewacherregister vernetzt Gewerbebehörden, Polizei und Verfassungsschutz. Wachpersonen dürfen erst nach behördlicher Freigabe im BWR eingesetzt werden.",
    "translations": {
      "ru": {
        "question": "Что такое Реестр охранников (Bewacherregister / BWR) согласно § 34a GewO?",
        "explanation": "BWR объединяет ведомства и полицию; охранники могут работать только после официального утверждения в реестре."
      },
      "en": {
        "question": "What is the Guarding Register (Bewacherregister / BWR) pursuant to Section 34a GewO?",
        "explanation": "The BWR connects regulatory authorities, police, and intelligence; guards may only be deployed following official clearance."
      },
      "ar": {
        "question": "ما هو سجل الحراسة الاتحادي (Bewacherregister / BWR) بموجب المادة 34a GewO؟",
        "explanation": "يربط سجل BWR بين السلطات والشرطة، ولا يجوز تشغيل أي حارس أمن قبل صدور الموافقة الرسمية فيه."
      },
      "fa": {
        "question": "سامانه ثبت پرسنل حراست (Bewacherregister / BWR) طبق بند ۳۴a GewO چیست؟",
        "explanation": "این سامانه نهادهای نظارتی و پلیس را متصل می‌کند؛ پرسنل فقط پس از تأیید در سامانه BWR مجاز به کار هستند."
      }
    }
  },
  {
    "id": "ihk-gewerbe-3",
    "kategorie": "Gewerberecht (GewO / BewachV)",
    "frage": "Welche Angaben muss der Ausweis einer Wachperson nach § 18 BewachV enthalten? (Wählen Sie zwei richtige Antworten)",
    "optionen": [
      "A) Name und Vorname der Wachperson, Lichtbild sowie Name und Anschrift des Gewerbetreibenden.",
      "B) Die Bewacherregister-Identifikationsnummer (BewR-ID) der Wachperson und des Gewerbebetriebs.",
      "C) Die private Wohnanschrift und Kontoverbindung der Wachperson.",
      "D) Die Noten des Schulabschlusszeugnisses."
    ],
    "options": [
      {
        "id": "a",
        "text": "A) Name und Vorname der Wachperson, Lichtbild sowie Name und Anschrift des Gewerbetreibenden.",
        "translations": {
          "ru": "Имя и фамилия охранника, фотография, а также наименование и адрес охранного предприятия.",
          "en": "First and last name of the guard, photograph, as well as business name and address of the security firm.",
          "ar": "الاسم الأول واسم العائلة لحارس الأمن، الصورة الشخصية، بالإضافة إلى اسم وعنوان شركة الحراسة.",
          "fa": "نام و نام خانوادگی نگهبان، عکس پرسنلی و همچنین نام و نشانی شرکت حراست."
        }
      },
      {
        "id": "b",
        "text": "B) Die Bewacherregister-Identifikationsnummer (BewR-ID) der Wachperson und des Gewerbebetriebs.",
        "translations": {
          "ru": "Идентификационный номер в реестре (BewR-ID) охранника и предприятия.",
          "en": "The Guarding Register ID numbers (BewR-ID) of both the security guard and the security business.",
          "ar": "رقم الهوية التعريفي في سجل الحراسة (BewR-ID) للحارس وللشركة المشغلة.",
          "fa": "شماره شناسه ثبت سامانه نگهبانی (BewR-ID) متعلق به نگهبان و شرکت تجاری مربوطه."
        }
      },
      {
        "id": "c",
        "text": "C) Die private Wohnanschrift und Kontoverbindung der Wachperson.",
        "translations": {
          "ru": "Личный домашний адрес и банковские реквизиты охранника.",
          "en": "Private home residential address and bank account details of the guard.",
          "ar": "عنوان السكن الشخصي ورقم الحساب البنكي لحارس الأمن.",
          "fa": "نشانی منزل مسکونی شخصی و اطلاعات حساب بانکی نگهبان."
        }
      },
      {
        "id": "d",
        "text": "D) Die Noten des Schulabschlusszeugnisses.",
        "translations": {
          "ru": "Оценки из школьного аттестата.",
          "en": "School graduation grades and certificate transcripts.",
          "ar": "درجات الشهادة المدرسية الثانوية.",
          "fa": "نمرات کارنامه فارغ‌التحصیلی دوران مدرسه."
        }
      }
    ],
    "korrekteAntworten": [
      0,
      1
    ],
    "punkte": 2,
    "erklaerung": "Dienstausweis nach § 18 BewachV: Name, Foto, Arbeitgeberdaten und BewR-ID. Private Daten (Wohnadresse) dürfen zum Schutz der Wachperson nicht auf dem Ausweis stehen!",
    "translations": {
      "ru": {
        "question": "Какие данные должно содержать служебное удостоверение охранника согласно § 18 BewachV? (Выберите 2 ответа)",
        "explanation": "Удостоверение содержит ФИО, фото, данные работодателя и BewR-ID. Личный адрес указывать запрещено для защиты охранника."
      },
      "en": {
        "question": "Which details must a security guard's service ID card contain under Section 18 BewachV? (Choose two correct answers)",
        "explanation": "Service ID (§ 18 BewachV): name, photo, employer data, and BewR-ID. Private home addresses are strictly excluded for safety."
      },
      "ar": {
        "question": "ما هي البيانات التي يجب أن تتضمنها بطاقة هوية حارس الأمن وفقاً للمادة 18 من BewachV؟ (اختر إجابتين صحيحتين)",
        "explanation": "بطاقة الخدمة: الاسم، الصورة، بيانات الشركة ورقم BewR-ID. وتُحظر كتابة العنوان الشخصي لحماية رجل الأمن."
      },
      "fa": {
        "question": "کارت شناسایی نگهبان طبق بند ۱۸ BewachV باید شامل چه اطلاعاتی باشد؟ (دو پاسخ صحیح)",
        "explanation": "کارت خدمت: نام، عکس، مشخصات شرکت و کد BewR-ID. نشانی شخصی برای حفظ امنیت نگهبان نباید درج شود."
      }
    }
  }
];
