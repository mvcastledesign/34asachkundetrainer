export interface GlossaryTerm {
  id: string;
  term: string;
  paragraph: string;
  kategorie: 'Recht & BGB' | 'Strafrecht' | 'Dienstkunde & UVV' | 'Gewerberecht' | 'Datenschutz & Waffen';
  definition: string;
  merksatz: string;
  translations: {
    farsi: string;
    arabisch: string;
    englisch: string;
    russisch: string;
  };
}

export interface PracticeQuestion {
  question: string;
  options: string[];
  correctIndices: number[];
  signalWords: string[];
  trickExplanation: string;
}

export interface ExamTrap {
  id: string;
  title: string;
  badge: string;
  category: 'Signalwörter' | 'Fragetyp & Punkte' | 'Juristische Begriffe' | 'Befugnis-Falle';
  ruleHeadline: string;
  explanation: string;
  keyRuleList: string[];
  practiceExercise: PracticeQuestion;
}

export const GLOSSARY_CATEGORIES = [
  'Alle',
  'Recht & BGB',
  'Strafrecht',
  'Dienstkunde & UVV',
  'Gewerberecht',
  'Datenschutz & Waffen'
] as const;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'term-verbotene-eigenmacht',
    term: 'Verbotene Eigenmacht',
    paragraph: '§ 858 BGB',
    kategorie: 'Recht & BGB',
    definition: 'Wer dem Besitzer ohne dessen Willen und ohne gesetzliche Erlaubnis den Besitz wegnimmt oder ihn darin stört, handelt rechtswidrig.',
    merksatz: 'Beispiel: Ein Kunde drängelt sich trotz Hausverbot ins Kaufhaus oder jemand parkt unberechtigt auf einem Kundenparkplatz.',
    translations: {
      farsi: 'تصرف غیرقانونی یا ایجاد مزاحمت برای متصرف مال بدون رضایت او و بدون مجوز قانونی (§ 858 BGB).',
      arabisch: 'التصرف غير القانوني أو مضايقة الحائز في حيازته دون موافقته وبدون إذن قانوني (§ 858 BGB).',
      englisch: 'Unlawful interference with possession without consent or legal permission (§ 858 BGB).',
      russisch: 'Самовольное незаконное лишение владения или создание помех владельцу без его согласия (§ 858 BGB).'
    }
  },
  {
    id: 'term-garantenstellung',
    term: 'Garantenstellung',
    paragraph: '§ 13 StGB',
    kategorie: 'Strafrecht',
    definition: 'Die rechtliche Pflicht einer Person, aktiv eine Gefahr oder einen Schaden von Rechtsgütern abzuwenden. Bei Untätigkeit droht Bestrafung wegen Unterlassens.',
    merksatz: 'Beispiel: Als Sicherheitskraft an einem Notausgang MUSST du den Fluchtweg freihalten. Sperrst du ihn zu und Menschen kommen zu Schaden, haftest du wie ein Täter.',
    translations: {
      farsi: 'موقعیت ضامن: وظیفه قانونی فرد برای جلوگیری از آسیب؛ عدم اقدام می‌تواند مجازات جرمی به همراه داشته باشد (§ 13 StGB).',
      arabisch: 'صفة الضامن: التزام قانوني يحتم على الشخص منع وقوع الخطر، والتقاعس يعاقب عليه كجريمة (§ 13 StGB).',
      englisch: 'Guarantor position: Legal obligation to protect a legal asset or avert danger; failure to act results in criminal liability (§ 13 StGB).',
      russisch: 'Статус гаранта: правовая обязанность лица предотвращать вред или опасность; бездействие влечет уголовную ответственность (§ 13 StGB).'
    }
  },
  {
    id: 'term-besitzdiener-besitzer',
    term: 'Besitzdiener vs. Besitzer',
    paragraph: '§ 855 BGB vs. § 854 BGB',
    kategorie: 'Recht & BGB',
    definition: 'Der Besitzer hat die tatsächliche Sachherrschaft. Der Besitzdiener (z. B. Wachmann) übt diese Sachherrschaft weisungsgebunden für den Auftraggeber aus, darf aber dessen Selbsthilferechte geltend machen.',
    merksatz: 'Beispiel: Du bewachst als Sicherheitskraft das Museum. Du bist Besitzdiener des Betreibers und darfst Diebe stoppen (§ 859 BGB).',
    translations: {
      farsi: 'خادم تصرف در برابر متصرف: نگهبان خادم تصرف صاحب‌کار است و اختیارات دفاع از تصرف را به نیابت از او اجرا می‌کند (§ 855 BGB).',
      arabisch: 'تابع الحيازة مقابل الحائز: حارس الأمن هو تابع الحيازة لصاحب المنشأة ويمارس حقوق الدفاع عن الحيازة نيابة عنه (§ 855 BGB).',
      englisch: 'Possession servant vs. Possessor: The security guard is a servant of possession exercising property defense rights on behalf of the owner (§ 855 BGB).',
      russisch: 'Слуга владения против владельца: охранник является слугой владения и осуществляет защиту имущества по поручению владельца (§ 855 BGB).'
    }
  },
  {
    id: 'term-vorlaeufige-festnahme',
    term: 'Vorläufige Festnahme (§ 127 StPO)',
    paragraph: '§ 127 Abs. 1 StPO',
    kategorie: 'Strafrecht',
    definition: 'Das Recht von JEDERMANN, eine Person ohne richterlichen Haftbefehl vorläufig festzuhalten, wenn sie auf frischer Tat betroffen/verfolgt wird und Fluchtverdacht besteht oder die Identität nicht sofort feststellbar ist.',
    merksatz: 'Beispiel: Ein Ladendieb rennt mit Ware aus dem Laden. Du darfst ihn bis zum Eintreffen der Polizei festhalten (aber nicht bestrafen oder verhören!).',
    translations: {
      farsi: 'بازداشت موقت همگانی: حق هر فرد برای دستگیری متهم در حین ارتکاب جرم مشهود تا زمان رسیدن پلیس (§ 127 StPO).',
      arabisch: 'التوقيف المؤقت للجميع: حق أي شخص في ضبط مرتكب الجريمة متلبساً حتى وصول الشرطة في حال الشك في هروبه أو عدم معرفة هويته (§ 127 StPO).',
      englisch: 'Provisional citizen\'s arrest: Right of anyone to detain a person caught in the act until police arrive if identity is unknown or flight suspected (§ 127 StPO).',
      russisch: 'Предварительное задержание (гражданский арест): право любого лица задержать правонарушителя на месте преступления до прибытия полиции (§ 127 StPO).'
    }
  },
  {
    id: 'term-hausverbot-hausfriedensbruch',
    term: 'Hausverbot vs. Hausfriedensbruch',
    paragraph: '§ 903/1004 BGB & § 123 StGB',
    kategorie: 'Recht & BGB',
    definition: 'Das Hausverbot ist das zivilrechtliche Verbot, ein Objekt zu betreten. Betritt die Person das Gebäude trotzdem oder verlässt es nach Aufforderung nicht, begeht sie eine Straftat: Hausfriedensbruch.',
    merksatz: 'Beispiel: Du erteilst einem Randalierer im Auftrag des Chefs Hausverbot. Geht er nicht, macht er sich nach § 123 StGB strafbar.',
    translations: {
      farsi: 'ممنوعیت ورود و ورود غیرقانونی: نادیده گرفتن دستور ممنوعیت ورود، جرم کیفری نقض حریم خصوصی محسوب می‌شود (§ 123 StGB).',
      arabisch: 'المنع من دخول المكان مقابل انتهاك حرمة المكان: دخول المكان رغم وجود حظر يعتبر جريمة جنائية (§ 123 StGB).',
      englisch: 'Banning order vs. Trespass: Violating a property ban constitutes the criminal offense of trespassing (§ 123 StGB).',
      russisch: 'Запрет на посещение против нарушения неприкосновенности владения: игнорирование запрета является преступлением по § 123 StGB.'
    }
  },
  {
    id: 'term-notwehr-nothilfe',
    term: 'Notwehr & Nothilfe',
    paragraph: '§ 32 StGB & § 227 BGB',
    kategorie: 'Strafrecht',
    definition: 'Die Verteidigung, die erforderlich ist, um einen gegenwärtigen, rechtswidrigen Angriff von sich (Notwehr) oder einem anderen (Nothilfe) abzuwenden.',
    merksatz: 'Beispiel: Ein Täter schlägt auf deinen Kollegen ein. Du wehrst den Schlag mit verhältnismäßiger Kraft ab (Nothilfe).',
    translations: {
      farsi: 'دفاع مشروع و کمک در دفاع: دفاع لازم برای دفع حمله جاری و غیرقانونی از خود یا شخص دیگر (§ 32 StGB).',
      arabisch: 'الدفاع الشرعي وإغاثة الغير: الدفاع الضروري لصد اعتداء حال وغير مشروع عن النفس أو عن الغير (§ 32 StGB).',
      englisch: 'Self-defense & Aid in defense: The necessary defense to avert a present, unlawful attack on oneself or another (§ 32 StGB).',
      russisch: 'Необходимая оборона и помощь третьему лицу: действия по отражению наличного противоправного нападения (§ 32 StGB).'
    }
  },
  {
    id: 'term-besitzkehr',
    term: 'Besitzkehr & Besitzwehr',
    paragraph: '§ 859 BGB',
    kategorie: 'Recht & BGB',
    definition: 'Besitzwehr: Abwehr verbotener Eigenmacht mit Gewalt (z. B. Festhalten einer Sache). Besitzkehr: Sofortige Wiederabnahme einer beweglichen Sache auf frischer Tat oder Vertreibung des Eindringlings.',
    merksatz: 'Beispiel: Reißt ein Dieb im Laden eine Handtasche an sich, darfst du sie ihm sofort gewaltsam wieder entreißen (Besitzkehr).',
    translations: {
      farsi: 'دفاع از تصرف و بازپس‌گیری تصرف: پس گرفتن فوری مال ربوده شده از سارق در صحنه جرم با قوه قهریه (§ 859 BGB).',
      arabisch: 'الدفاع عن الحيازة واستردادها: استرجاع الشيء المسلوب بالقوة فور وقوع الحادث (§ 859 BGB).',
      englisch: 'Defense and recovery of possession: Immediate forceful recovery of property from a thief caught in the act (§ 859 BGB).',
      russisch: 'Защита и возвращение владения: немедленное силовое изъятие похищенной вещи у вора на месте совершения (§ 859 BGB).'
    }
  },
  {
    id: 'term-rechtfertigender-notstand',
    term: 'Rechtfertigender Notstand (§ 34 StGB)',
    paragraph: '§ 34 StGB',
    kategorie: 'Strafrecht',
    definition: 'Wer eine Tat begeht, um eine gegenwärtige Gefahr für Leben, Leib, Freiheit oder Eigentum abzuwenden, handelt nicht rechtswidrig, wenn das geschützte Interesse das beeinträchtigte wesentlich überwiegt.',
    merksatz: 'Beispiel: Du schlägst eine Scheibe ein (Sachbeschädigung), um ein Kind aus einem brennenden, verschlossenen Auto zu retten (Leben > Sache).',
    translations: {
      farsi: 'حالت اضطرار موجه: ارتکاب عمل برای نجات جان یا مال در صورت برتری ارزش منافع محافظت‌شده بر آسیب وارد شده (§ 34 StGB).',
      arabisch: 'حالة الضرورة المبررة: ارتكاب فعل لدفع خطر حال عن النفس أو المال متى كانت المصلحة المحمية تفوق الضرر الناتج (§ 34 StGB).',
      englisch: 'Justifying necessity: Committing an act to avert present danger when protected interest substantially outweighs damaged interest (§ 34 StGB).',
      russisch: 'Оправданная крайняя необходимость: совершение деяния для предотвращения опасности, если защищаемый интерес превышает причиненный вред (§ 34 StGB).'
    }
  },
  {
    id: 'term-unverzueglich',
    term: 'Unverzüglich',
    paragraph: '§ 121 Abs. 1 BGB',
    kategorie: 'Recht & BGB',
    definition: '„Ohne schuldhaftes Zögern“. Es bedeutet nicht zwingend auf die Sekunde genau („sofort“), sondern so schnell wie zumutbar ohne grundloses Trödeln.',
    merksatz: 'Beispiel: Nach einem Vorfall meldest du diesen unverzüglich der Leitstelle, sobald deine eigene Sicherheit gewährleistet ist.',
    translations: {
      farsi: 'بدون تأخیر مقصرانه: انجام کار در سریع‌ترین زمان ممکن بدون مسامحه و اتلاف وقت غیرضروری (§ 121 BGB).',
      arabisch: 'دون تأخير مريب: القيام بالإجراء بأسرع وقت ممکن وبدون مماطلة غير مبررة (§ 121 BGB).',
      englisch: 'Without culpable delay: As quickly as reasonably possible without unjustified hesitation (§ 121 BGB).',
      russisch: 'Без виновного промедления: максимально быстро и без необоснованной задержки (§ 121 BGB).'
    }
  },
  {
    id: 'term-uvv-dguv23',
    term: 'DGUV Vorschrift 23 (BGV C7)',
    paragraph: 'Unfallverhütungsvorschrift Wach- und Sicherungsdienst',
    kategorie: 'Dienstkunde & UVV',
    definition: 'Gesetzlich verbindliche Unfallverhütungsvorschrift der Berufsgenossenschaft (VBG) für Sicherheitskräfte mit Regeln zu Dienstkleidung, Schusswaffengebrauch, Hunden und Alleinarbeit.',
    merksatz: 'Beispiel: Alleinarbeit in gefährlichen Bereichen ist verboten; Meldeverbindungen (Funk/Totmannmelder) sind zwingend vorgeschrieben.',
    translations: {
      farsi: 'دستورالعمل پیشگیری از حوادث DGUV 23: مقررات ایمنی کار الزامی برای نیروهای نگهبانی شامل تجهیزات، سلاح و سگ‌های نگهبان.',
      arabisch: 'لائحة الوقاية من الحوادث DGUV 23: تعليمات السلامة الملزمة لعمال الحراسة بشأن الزي والسلاح والكلاب والعمل الفردي.',
      englisch: 'Accident prevention regulation DGUV 23: Legally binding safety rules for security guards regarding uniforms, weapons, dogs, and lone work.',
      russisch: 'Правило DGUV 23 (техника безопасности): обязательные нормы безопасности труда для охраны касательно формы, оружия и связи.'
    }
  },
  {
    id: 'term-dsgvo-zweckbindung',
    term: 'Zweckbindung & Transparenz (DSGVO)',
    paragraph: 'Art. 5 DSGVO / § 4 BDSG',
    kategorie: 'Datenschutz & Waffen',
    definition: 'Personenbezogene Daten (z. B. Videoaufnahmen, Besucherlisten) dürfen nur für den vorher festgelegten legitimen Zweck erhoben und genutzt werden. Eine Hinweispflicht (Kameraschild) ist Pflicht.',
    merksatz: 'Beispiel: Videoaufnahmen zur Diebstahlsicherung dürfen nicht zur heimlichen Leistungskontrolle von Mitarbeitern missbraucht werden.',
    translations: {
      farsi: 'اصل محدودیت هدف در داده‌ها (GDPR): استفاده از داده‌های دوربین مداربسته فقط برای هدف مشخص شده (مانند جلوگیری از سرقت) مجاز است.',
      arabisch: 'مبدأ تخصيص الغرض (GDPR): لا يجوز استخدام تسجيلات الكاميرات والبيانات الشخصية إلا للغرض المحدد مسبقاً وبشكل معلن.',
      englisch: 'Purpose limitation (GDPR): Personal data like CCTV footage may only be collected and used for specifically declared security purposes.',
      russisch: 'Ограничение цели (GDPR): персональные данные и видеозаписи разрешено использовать строго по назначению безопасности.'
    }
  },
  {
    id: 'term-waffengesetz-fuehren',
    term: 'Führen einer Waffe vs. Transport',
    paragraph: '§ 12 WaffG & Anlage 1',
    kategorie: 'Datenschutz & Waffen',
    definition: 'Führen bedeutet das Ausüben der tatsächlichen Gewalt über eine Waffe außerhalb der eigenen Wohnung oder des befriedeten Besitztums. Ein Waffenschein (nicht Waffenbesitzkarte!) ist zwingend nötig.',
    merksatz: 'Beispiel: Eine Waffe getrennt von Munition in einem verschlossenen Koffer im Kofferraum transportieren ist KEIN Führen.',
    translations: {
      farsi: 'حمل سلاح در برابر جابجایی: همراه داشتن سلاح آماده شلیک در مکان عمومی نیاز به مجوز حمل دارد؛ اما جابجایی در جعبه قفل‌شده حمل محسوب نمی‌شود (§ 12 WaffG).',
      arabisch: 'حمل السلاح مقابل النقل: حمل السلاح في الأماكن العامة يتطلب تصريح حمل سلاح؛ ونقله في حقيبة مغلقة ومنفصلة عن الذخيرة لا يعتبر حملاً.',
      englisch: 'Carrying a weapon vs. Transport: Carrying an accessible weapon in public requires a carry permit; locked transport is not carrying (§ 12 WaffG).',
      russisch: 'Ношение оружия против транспортировки: ношение в общественном месте требует специального разрешения; в закрытом кейсе — не ношение.'
    }
  }
];

export const EXAM_TRAPS: ExamTrap[] = [
  {
    id: 'trap-nicht-aussage',
    title: '„Welche Aussage trifft NICHT zu?“ (Umkehrlogik)',
    badge: 'Häufigste Prüfungsfalle',
    category: 'Signalwörter',
    ruleHeadline: 'Suche die EINE falsche Aussage – streiche die 3 richtigen Antworten weg!',
    explanation: 'Bei dieser Frageform klingen 3 Optionen absolut logisch und rechtlich einwandfrei. Viele Prüflinge kreuzen aus Gewohnheit sofort die erste richtige Aussage an. Der Schlüssel: Du musst aktiv nach der juristisch falschen Behauptung suchen.',
    keyRuleList: [
      'Lies die Fragestellung doppelt und markiere das Wort „NICHT“ / „KEINESFALLS“.',
      'Prüfe jede Antwortoption einzeln mit einem Häkchen (✓ = Richtig im Gesetz) oder Kreuz (✗ = Falsch im Gesetz).',
      'Die Option mit dem Kreuz (✗) ist deine gesuchte Lösung!'
    ],
    practiceExercise: {
      question: 'Welche Aussage zur vorläufigen Festnahme (§ 127 Abs. 1 StPO) trifft NICHT zu?',
      options: [
        'A) Die Festnahme darf durch jedermann erfolgen, auch durch private Sicherheitskräfte.',
        'B) Der Täter muss auf frischer Tat betroffen oder verfolgt worden sein.',
        'C) Die Sicherheitskraft darf den Festgenommenen vernehmen und zur Sache befragen.',
        'D) Die Festnahme ist nur zulässig, wenn die Identität nicht sofort feststellbar ist oder Fluchtverdacht besteht.'
      ],
      correctIndices: [2],
      signalWords: ['NICHT zu', 'vernehmen und zur Sache befragen'],
      trickExplanation: 'Aussage C ist falsch und damit die richtige Antwort! Eine förmliche Beschuldigten-Vernehmung ist eine hoheitliche Aufgabe und ausschließlich der Polizei und Staatsanwaltschaft vorbehalten. Private Sicherheitskräfte dürfen keine Vernehmungen durchführen.'
    }
  },
  {
    id: 'trap-zwei-antworten',
    title: '„Welche ZWEI Antworten sind richtig?“ (Mehrfachauswahl)',
    badge: 'Punkte-Garant',
    category: 'Fragetyp & Punkte',
    ruleHeadline: 'Setze immer genau 2 Kreuze! Bei 2 richtigen Antworten gibt es 2 Punkte oder Teilpunkte.',
    explanation: 'In der Prüfung gibt es 1-Punkt-Fragen (1 Antwort richtig) und 2-Punkte-Fragen (2 Antworten richtig). Wenn in der Aufgabe ausdrücklich steht „Welche ZWEI Antworten sind richtig?“, niemals nur eine oder drei ankreuzen! Wenn du 1 von 2 richtig hast, erhältst du 1 Teilpunkt. Bei 2 von 2 gibt es 2 volle Punkte.',
    keyRuleList: [
      'Zähle vor dem Weiterklicken immer nach: Hast du genau ZWEI Kästchen markiert?',
      'Wenn du dir bei der 2. Antwort unsicher bist, wähle die wahrscheinlichste Option aus, um die Chance auf den 1 Teilpunkt zu wahren!',
      'Niemals 3 Optionen ankreuzen, sonst gibt es 0 Punkte.'
    ],
    practiceExercise: {
      question: 'Welche ZWEI der folgenden Befugnisse stehen einer privaten Sicherheitskraft im Rahmen der Jedermannsrechte grundsätzlich zu?',
      options: [
        'A) Vorläufige Festnahme eines auf frischer Tat ertappten Diebes nach § 127 Abs. 1 StPO.',
        'B) Beschlagnahme des Führerscheins bei einer Trunkenheitsfahrt.',
        'C) Durchsuchung einer Person gegen ihren Willen zur allgemeinen Gefahrenabwehr.',
        'D) Selbsthilfe des Besitzdieners zur Abwehr verbotener Eigenmacht nach § 859 BGB.'
      ],
      correctIndices: [0, 3],
      signalWords: ['ZWEI', 'Jedermannsrechte', 'Befugnisse'],
      trickExplanation: 'Richtig sind A und D! Führerschein-Beschlagnahme (B) und Zwangsdurchsuchung (C) sind hoheitliche Eingriffsbefugnisse, die nur die Polizei ausüben darf. A (§ 127 StPO) und D (§ 859 BGB) sind Jedermanns- bzw. Besitzschutzrechte.'
    }
  },
  {
    id: 'trap-unverzueglich-sofort',
    title: '„Unverzüglich“ vs. „Sofort“ vs. „Ohne schuldhaftes Zögern“',
    badge: 'Juristischer Begriff',
    category: 'Juristische Begriffe',
    ruleHeadline: '„Unverzüglich“ bedeutet im juristischen Sinn immer: „Ohne schuldhaftes Zögern“ (§ 121 BGB).',
    explanation: 'In Prüfungsfragen taucht oft die Frage auf, wie „unverzüglich“ gesetzlich definiert ist. Prüflinge verwechseln dies oft mit „auf die Sekunde genau sofort“ oder „binnen 24 Stunden“. Juristisch ist die korrekte Definition ausschließlich „ohne schuldhaftes Zögern“.',
    keyRuleList: [
      'Merke dir die feste Formel: Unverzüglich = Ohne schuldhaftes Zögern (§ 121 Abs. 1 BGB).',
      'Es lässt einen gewissen Handlungsspielraum zu (z. B. wenn erst die Eigensicherung vorgeht oder Erste Hilfe geleistet werden muss).',
      'Antworten wie „innerhalb von 1 Stunde“ oder „vor Mitternacht“ sind immer Fangantworten.'
    ],
    practiceExercise: {
      question: 'Was versteht der Gesetzgeber unter dem Rechtsbegriff „unverzüglich“ (z. B. bei der Weiterleitung einer Strafanzeige oder Anfechtung)?',
      options: [
        'A) Binnen einer starren Frist von 24 Stunden.',
        'B) Ohne schuldhaftes Zögern unter Berücksichtigung der Umstände des Einzelfalls.',
        'C) Genau auf die Minute zum Zeitpunkt des Vorfalls.',
        'D) Spätestens bis zum Ende der aktuellen Arbeitsschicht.'
      ],
      correctIndices: [1],
      signalWords: ['unverzüglich', 'Ohne schuldhaftes Zögern'],
      trickExplanation: 'Richtig ist B! § 121 Abs. 1 BGB definiert „unverzüglich“ ausdrücklich als „ohne schuldhaftes Zögern“. Feste Stunden- oder Schichtvorgaben existieren im Zivilrecht bei diesem Begriff nicht.'
    }
  },
  {
    id: 'trap-darf-muss-soll',
    title: '„Darf“ vs. „Muss“ vs. „Soll“ in Rechtsvorschriften',
    badge: 'Normen-Verständnis',
    category: 'Juristische Begriffe',
    ruleHeadline: 'Unterscheide zwischen Ermessen („Darf/Kann“), Zwangspflicht („Muss“) und Regelfall („Soll“)!',
    explanation: 'Gesetzestexte und Unfallverhütungsvorschriften (DGUV V23 / BewachV) unterscheiden haarscharf zwischen Pflichten und Rechten. „Muss“ = zwingende Rechtspflicht (kein Ermessensspielraum). „Kann/Darf“ = Berechtigung im pflichtgemäßen Ermessen. „Soll“ = im Regelfall bindend, Ausnahmen nur bei triftigen Gründen.',
    keyRuleList: [
      '„Muss“ = Zwingend vorgeschrieben (z. B. Dienstanweisung muss vorliegen, Waffenschein muss mitgeführt werden).',
      '„Darf / Kann“ = Erlaubnis / Wahlmöglichkeit (z. B. Darf von Jedermannrechten Gebrauch machen, muss es aber nicht, wenn Lebensgefahr besteht).',
      '„Soll“ = Im Regelfall Pflicht, außer in begründeten Ausnahmesituationen.'
    ],
    practiceExercise: {
      question: 'Welche Aussage zu den Unfallverhütungsvorschriften (DGUV Vorschrift 23) für Sicherheitskräfte ist rechtlich zutreffend?',
      options: [
        'A) Eine Sicherheitskraft DARF in jedem Fall eigenmächtig auf Schutzwesten im Geld- und Werttransport verzichten.',
        'B) Der Unternehmer MUSS für die Durchführung von Sicherungsdienstleistungen eine schriftliche Dienstanweisung erstellen.',
        'C) Ein Diensthund MUSS bei jeder Bewachungstätigkeit mitgeführt werden.',
        'D) Sicherheitskräfte MÜSSEN bei jedem Hausverbot die Schusswaffe ziehen.'
      ],
      correctIndices: [1],
      signalWords: ['MUSS', 'Dienstanweisung', 'DGUV Vorschrift 23'],
      trickExplanation: 'Richtig ist B! Gemäß DGUV Vorschrift 23 § 3 MUSS der Unternehmer zwingend eine schriftliche Dienstanweisung aufstellen. A, C und D enthalten falsche Muss-/Darf-Verknüpfungen.'
    }
  },
  {
    id: 'trap-jedermann-vs-hoheitlich',
    title: '„Jedermann-Rechte“ vs. „Hoheitliche Befugnisse“',
    badge: 'Befugnis-Klassiker',
    category: 'Befugnis-Falle',
    ruleHeadline: 'Private Sicherheitskräfte haben KEINE Polizeirechte – sie nutzen Jedermann- und Hausrechte!',
    explanation: 'Eine der beliebtesten Fallen in der Sachkundeprüfung: Der Sicherheitskraft werden Aufgaben oder Rechte untergeschoben, die nur der Polizei zustehen (z. B. Zwangsdurchsuchung, Beschlagnahme, Platzverweis im öffentlichen Raum, Verwarnungsgeld erheben).',
    keyRuleList: [
      'Private Sicherheitsdienste handeln auf Basis von Privatrecht (BGB, Hausrecht, Notwehr, § 127 StPO).',
      'Polizei & Ordnungsamt handeln auf Basis von öffentlichem Recht (Polizeigesetze, hoheitlicher Zwang).',
      'Sobald in einer Antwortoption Wörter wie „hoheitlicher Platzverweis“, „Beschlagnahme“ oder „Verwarnungsgeld“ für Sicherheitskräfte stehen: Vorsicht, das ist fast immer FALSCH!'
    ],
    practiceExercise: {
      question: 'Eine Person betrinkt sich auf einer öffentlichen Parkbank vor einem von dir bewachten Einkaufszentrum. Welche Maßnahme DARF die private Sicherheitskraft ergreifen?',
      options: [
        'A) Einen rechtswirksamen polizeilichen Platzverweis für den gesamten Park aussprechen.',
        'B) Die Person gewaltsam durchsuchen und die Alkoholflaschen beschlagnahmen.',
        'C) Den Betrunkenen freundlich ansprechen und bei Straftaten oder Gefährdung die Polizei verständigen.',
        'D) Ein Bußgeld wegen Ruhestörung im öffentlichen Raum verhängen.'
      ],
      correctIndices: [2],
      signalWords: ['öffentliche Parkbank', 'DARF', 'private Sicherheitskraft'],
      trickExplanation: 'Richtig ist C! Da sich die Parkbank im öffentlichen Verkehrsraum befindet, hat die Sicherheitskraft dort kein Hausrecht. Platzverweis (A), Beschlagnahme (B) und Bußgeld (D) sind ausschließlich hoheitliche Befugnisse der Polizei oder des Ordnungsamtes.'
    }
  }
];
