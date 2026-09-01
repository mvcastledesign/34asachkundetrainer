import { makeQuestion } from './questionHelper.js';

export const ihkPart4Questions = [
  // =========================================================================
  // 5. UNFALLVERHÜTUNGSVORSCHRIFTEN (DGUV V23) (ihk-uvv-1 .. ihk-uvv-7)
  // =========================================================================
  makeQuestion({
    id: 'ihk-uvv-1',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche DGUV Vorschrift ist die zentrale Unfallverhütungsvorschrift für Wach- und Sicherungsdienste?',
    optionsData: [
      {
        text: 'A) DGUV Vorschrift 23 (bisherige BGV C7).',
        ru: 'Правило DGUV 23 (ранее BGV C7).',
        en: 'DGUV Regulation 23 (formerly BGV C7).',
        ar: 'لائحة DGUV 23 (المعروفة سابقاً باسم BGV C7).',
        fa: 'مقررات DGUV شماره ۲۳ (سابقاً BGV C7).'
      },
      {
        text: 'B) DGUV Vorschrift 100 für Straßenbauarbeiten.',
        ru: 'Правило DGUV 100 для дорожно-строительных работ.',
        en: 'DGUV Regulation 100 for road construction.',
        ar: 'لائحة DGUV 100 لأعمال بناء الطرق.',
        fa: 'مقررات DGUV شماره ۱۰۰ برای عملیات راه‌سازی.'
      },
      {
        text: 'C) Straßenverkehrs-Ordnung (StVO).',
        ru: 'Правила дорожного движения (StVO).',
        en: 'Road Traffic Regulations (StVO).',
        ar: 'قانون المرور على الطرق (StVO).',
        fa: 'آیین‌نامه راهنمایی و رانندگی (StVO).'
      },
      {
        text: 'D) Die Landesbauordnung.',
        ru: 'Земельный строительный регламент.',
        en: 'State Building Code.',
        ar: 'لوائح البناء الإقليمية للولايات.',
        fa: 'مقررات ساختمانی ایالتی.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'DGUV Vorschrift 23 regelt den Arbeitsschutz und die Unfallverhütung speziell für das Wach- und Sicherheitsgewerbe.',
    translations: {
      ru: {
        question: 'Какое предписание DGUV является центральным правилом предотвращения несчастных случаев в охране?',
        explanation: 'DGUV Vorschrift 23 регулирует охрану труда и технику безопасности в охранной сфере.'
      },
      en: {
        question: 'Which DGUV regulation is the core accident prevention standard for guarding and security services?',
        explanation: 'DGUV Regulation 23 specifically governs occupational safety and accident prevention in security services.'
      },
      ar: {
        question: 'ما هي لائحة DGUV الأساسية لمنع الحوادث في خدمات الحراسة والأمن؟',
        explanation: 'تنظم لائحة DGUV Vorschrift 23 السلامة المهنية والوقاية من الحوادث المخصصة لقطاع الحراسة.'
      },
      fa: {
        question: 'کدام آیین‌نامه DGUV مقررات اصلی پیشگیری از حوادث در خدمات حراست و نگهبانی است؟',
        explanation: 'مقررات DGUV Vorschrift 23 ایمنی کار و پیشگیری از حوادث را مخصوص صنف نگهبانی و حراست مشخص می‌کند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-uvv-2',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche Pflichten hat der Arbeitgeber bezüglich der Dienstanweisung nach DGUV V23?',
    optionsData: [
      {
        text: 'A) Er muss für jede Bewachungsaufgabe eine schriftliche, objektbezogene Dienstanweisung erstellen und den Beschäftigten nachweislich aushändigen.',
        ru: 'Он обязан составить письменную служебную инструкцию для каждого объекта и подтвержденно выдать ее сотрудникам.',
        en: 'He must create a written, site-specific post order for each assignment and verifiably issue it to the guards.',
        ar: 'يجب عليه إعداد تعليمات خدمة كتابية مخصصة للموقع لكل مهمة حراسة وتسليمها للموظفين مع إثبات الاستلام.',
        fa: 'کارفرما موظف است برای هر پست نگهبانی یک دستورالعمل کتبی ویژه آن محل تهیه کرده و به شکل مستند به پرسنل تحویل دهد.'
      },
      {
        text: 'B) Mündliche Zurufen vor Dienstbeginn reichen stets aus.',
        ru: 'Устных указаний перед началом смены всегда достаточно.',
        en: 'Verbal callouts prior to shift start are always sufficient.',
        ar: 'التعليمات الشفهية السريعة قبل بدء المناوبة تكفي دائماً.',
        fa: 'فریاد زدن شفاهی دستورات قبل از شروع شیفت همیشه کفایت می‌کند.'
      },
      {
        text: 'C) Dienstanweisungen sind nur für leitende Angestellte erforderlich.',
        ru: 'Служебные инструкции требуются только для руководящего состава.',
        en: 'Post orders are only mandatory for senior managerial staff.',
        ar: 'تعليمات الخدمة مطلوبة للمدراء التنفيذيين فقط.',
        fa: 'دستورالعمل‌های کاری فقط برای مدیران ارشد الزامی هستند.'
      },
      {
        text: 'D) Der Kunde muss die Dienstanweisung selbst schreiben.',
        ru: 'Клиент обязан сам написать служебную инструкцию.',
        en: 'The customer must write the post orders themselves.',
        ar: 'يجب على العميل كتابة تعليمات الخدمة بنفسه.',
        fa: 'مشتری باید خودش دستورالعمل حراست را بنویسد.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Nach § 3 DGUV V23 muss der Unternehmer eine schriftliche Dienstanweisung aufstellen, die die allgemeinen und objektspezifischen Pflichten regelt.',
    translations: {
      ru: {
        question: 'Каковы обязанности работодателя в отношении служебной инструкции (Dienstanweisung) согласно DGUV V23?',
        explanation: 'Согласно § 3 DGUV V23 работодатель обязан выдать письменную инструкцию по объекту под роспись.'
      },
      en: {
        question: 'What are the employer\'s duties regarding post orders (Dienstanweisung) under DGUV Regulation 23?',
        explanation: 'Pursuant to § 3 DGUV V23, the entrepreneur must formulate written post orders outlining site-specific duties.'
      },
      ar: {
        question: 'ما هي واجبات صاحب العمل بخصوص تعليمات الخدمة بموجب لائحة DGUV V23؟',
        explanation: 'وفقاً للمادة 3 من DGUV V23، يجب وضع تعليمات خدمة كتابية تحدد واجبات الموقع وتسليمها رسمياً.'
      },
      fa: {
        question: 'وظایف کارفرما در قبال دستورالعمل خدمت طبق DGUV V23 چیست؟',
        explanation: 'مطابق بند ۳ DGUV V23، کارفرما باید دستورالعمل کتبی مشخص برای وظایف پست را تهیه و ارائه کند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-uvv-3',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche Anforderungen gelten nach DGUV V23 für den Einsatz von Diensthunden? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Es dürfen nur geprüfte Hunde mit nachgewiesener Eignung (z. B. Schutzhundprüfung) von geeigneten Hundeführern geführt werden.',
        ru: 'Могут использоваться только проверенные собаки с подтвержденной пригодностью квалифицированными кинологами.',
        en: 'Only certified dogs with verified aptitude (e.g. guard dog exam) may be deployed by qualified handlers.',
        ar: 'يجوز فقط استخدام الكلاب المدربة والمختبرة من قبل مدربي كلاب مؤهلين.',
        fa: 'فقط سگ‌های آموزش‌دیده و آزمون‌پسند با گواهی شایستگی می‌توانند توسط مربیان واجد شرایط به کار گرفته شوند.'
      },
      {
        text: 'B) Der Hund muss ein sicheres Halsband, Leine und bei Bedarf einen Maulkorb tragen.',
        ru: 'Собака должна иметь надежный ошейник, поводок и при необходимости намордник.',
        en: 'The dog must be fitted with a secure collar, leash, and a muzzle where appropriate.',
        ar: 'يجب أن يرتدي الكلب طوقاً محكماً ومقوداً وكمامة عند اللزوم.',
        fa: 'سگ باید دارای قلاده محکم، بند قلاده و در صورت لزوم پوزه‌بند باشد.'
      },
      {
        text: 'C) Jeder private Familienhund darf ohne Prüfung auf Baustellen eingesetzt werden.',
        ru: 'Любая семейная домашняя собака может без проверки использоваться на стройке.',
        en: 'Any private family pet may be deployed on construction sites without prior testing.',
        ar: 'يمكن استخدام أي كلب عائلي خاص في مواقع البناء دون فحص واختبار.',
        fa: 'هر سگ خانگی معمولی را می‌توان بدون آزمون در پروژه‌های ساختمانی استفاده کرد.'
      },
      {
        text: 'D) Diensthunde dürfen im Streifendienst ohne Leine frei herumlaufen.',
        ru: 'Служебным собакам разрешено свободно бегать без поводка во время патрулирования.',
        en: 'Service dogs may roam freely without a leash during patrol duties.',
        ar: 'يسمح لكلاب الخدمة بالتجول بحرية بدون مقود أثناء الدوريات.',
        fa: 'سگ‌های نگهبان می‌توانند در گشت‌زنی بدون بند آزادانه بدوند.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§§ 14 ff. DGUV V23: Diensthunde müssen geprüfte Gebrauchshunde sein; sie dürfen nur von befähigten Hundeführern geleint eingesetzt werden.',
    translations: {
      ru: {
        question: 'Какие требования предъявляются согласно DGUV V23 к использованию служебных собак? (Выберите 2 ответа)',
        explanation: 'Служебные собаки должны быть аттестованы, находиться на поводке и управляться обученным кинологом.'
      },
      en: {
        question: 'What requirements apply under DGUV Regulation 23 for deploying service dogs? (Choose two correct answers)',
        explanation: '§§ 14 ff. DGUV V23: Guard dogs must be certified utility dogs, handled on-leash by qualified handlers.'
      },
      ar: {
        question: 'ما هي الشروط المطبقة بموجب DGUV V23 لاستخدام كلاب الحراسة في الخدمة؟ (اختر إجابتين صحيحتين)',
        explanation: 'يجب أن تكون كلاب الحراسة معتمدة ومقودة دائماً برسن من قِبل مدربين مؤهلين.'
      },
      fa: {
        question: 'چه الزاماتی برای استفاده از سگ‌های نگهبان طبق DGUV V23 وجود دارد؟ (دو پاسخ صحیح)',
        explanation: 'سگ‌های نگهبان باید دارای آزمون صلاحیت بوده و همواره توسط مربی آموزش‌دیده و با قلاده هدایت شوند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-uvv-4',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Was schreibt die DGUV V23 für den bewaffneten Sicherheitsdienst vor? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Schusswaffen und Munition müssen vom Arbeitgeber gestellt werden; das Führen privater Waffen im Dienst ist verboten.',
        ru: 'Огнестрельное оружие и патроны выдаются работодателем; ношение личного оружия на службе запрещено.',
        en: 'Firearms and ammunition must be provided by the employer; carrying private weapons on duty is prohibited.',
        ar: 'يجب توفير الأسلحة النارية والذخيرة من قبل صاحب العمل؛ ويُحظر حمل أسلحة خاصة أثناء الخدمة.',
        fa: 'سلاح گرم و مهمات باید توسط کارفرما تأمین شود؛ حمل سلاح شخصی در شیفت حراست ممنوع است.'
      },
      {
        text: 'B) Der Beschäftigte muss vor der Waffenausgabe theoretisch und praktisch unterwiesen und im Schießen geübt sein.',
        ru: 'Сотрудник перед выдачей оружия должен пройти теоретический и практический инструктаж и иметь регулярную огневую подготовку.',
        en: 'Before weapon issuance, the employee must receive theoretical and practical instruction and maintain shooting proficiency.',
        ar: 'يجب تدريب الموظف نظرياً وعملياً وإتقانه للرماية قبل تسليمه السلاح.',
        fa: 'کارمند باید قبل از تحویل گرفتن اسلحه، آموزش‌های نظری و عملی دیده و در تیراندازی تمرین داشته باشد.'
      },
      {
        text: 'C) Sicherheitskräfte dürfen jede beliebige Waffe aus dem Internet privat im Dienst tragen.',
        ru: 'Охранники могут носить на службе любое оружие, купленное в интернете.',
        en: 'Security guards may carry any weapon privately ordered online during duty.',
        ar: 'يجوز لحراس الأمن حمل أي سلاح شخصي يشترونه عبر الإنترنت أثناء الخدمة.',
        fa: 'پرسنل می‌توانند هر سلاح خریداری‌شده شخصی از اینترنت را در خدمت استفاده کنند.'
      },
      {
        text: 'D) Schusswaffen dürfen nach Dienstende zu Hause unter dem Kopfkissen gelagert werden.',
        ru: 'Огнестрельное оружие после смены можно хранить дома под подушкой.',
        en: 'Firearms may be stored at home beneath pillows after duty shifts.',
        ar: 'يمكن تخزين الأسلحة النارية تحت الوسادة في المنزل بعد انتهاء الدوام.',
        fa: 'سلاح گرم را می‌توان بعد از اتمام شیفت زیر بالش در خانه نگهداری کرد.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: '§§ 18 ff. DGUV V23: Keine privaten Waffen im Dienst! Waffen werden vom Betrieb gestellt, regelmäßige Schießnachweise und sichere Aufbewahrung im Tresor sind Pflicht.',
    translations: {
      ru: {
        question: 'Что предписывает DGUV V23 для вооруженной службы охраны? (Выберите 2 ответа)',
        explanation: 'Никакого личного оружия: оружие предоставляет фирма, обязательны стрелковые тренировки и хранение в сейфе.'
      },
      en: {
        question: 'What does DGUV Regulation 23 mandate for armed security services? (Choose two correct answers)',
        explanation: '§§ 18 ff. DGUV V23: No private weapons; arms are supplied by the company, with mandatory shooting drills and safe storage.'
      },
      ar: {
        question: 'ماذا تنص لائحة DGUV V23 بشأن خدمات الحراسة المسلحة؟ (اختر إجابتين صحيحتين)',
        explanation: 'يُمنع استخدام الأسلحة الخاصة؛ يوفر صاحب العمل السلاح مع تدريب دوري على الرماية وحفظ آمن في خزائن مخصصة.'
      },
      fa: {
        question: 'مقررات DGUV V23 برای خدمات حراست مسلحانه چه مواردی را الزامی می‌داند؟ (دو پاسخ صحیح)',
        explanation: 'ممنوعیت سلاح شخصی: اسلحه توسط شرکت تأمین می‌شود و آزمون‌های مکرر تیراندازی و نگهداری در گاوصندوق الزامی است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-uvv-5',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Was schreibt die UVV für gefährliche Einzelarbeitsplätze (z. B. Nachtstreife auf unübersichtlichem Gelände) vor?',
    optionsData: [
      {
        text: 'A) Es müssen geeignete Kontrollmaßnahmen (z. B. Personen-Notsignal-Anlagen / PNA, Totmannmelder oder regelmäßige Meldeintervalle per Funk) eingerichtet sein.',
        ru: 'Должны быть установлены меры контроля (например, системы персонального оповещения PNA, датчики неподвижности или радиоотчеты по графику).',
        en: 'Suitable monitoring measures (e.g. personal emergency signal devices / PNA, man-down alarms, or scheduled radio check-ins) must be established.',
        ar: 'يجب توفير تدابير رقابة وحماية ملائمة (مثل أجهزة إشارات استغاثة الأفراد PNA، ومستشعرات السقوط، أو فترات اتصال لاسلكي منتظمة).',
        fa: 'باید تدابیر کنترلی مناسب (مانند سیستم‌های هشدار اضطراری فردی PNA، سنسورهای وضعیت بی‌حرکتی، یا فواصل زمانی گزارش بی‌سیم) برقرار باشد.'
      },
      {
        text: 'B) Einzelarbeit ist nachts gesetzlich unter allen Umständen verboten.',
        ru: 'Одиночная работа ночью запрещена законом при любых обстоятельствах.',
        en: 'Lone working at night is unconditionally prohibited by statute.',
        ar: 'العمل الفردي ليلاً محظور قانوناً تحت أي ظرف من الظروف.',
        fa: 'کار انفرادی در شیفت شب تحت هر شرایطی قانوناً ممنوع است.'
      },
      {
        text: 'C) Der Mitarbeiter muss alle 5 Minuten laut rufen.',
        ru: 'Сотрудник обязан громко кричать каждые 5 минут.',
        en: 'The employee must shout out loudly every 5 minutes.',
        ar: 'يجب على الموظف الصراخ بصوت عالٍ كل 5 دقائق.',
        fa: 'کارمند باید هر ۵ دقیقه با صدای بلند فریاد بزند.'
      },
      {
        text: 'D) Der Mitarbeiter muss seinen Dienst auf eigene Gefahr ohne Funkgerät versehen.',
        ru: 'Сотрудник должен нести службу на свой страх и риск без рации.',
        en: 'The employee must execute duties at their own peril without a radio.',
        ar: 'يجب على الموظف أداء خدمته على مسؤوليته الخاصة دون جهاز لاسلكي.',
        fa: 'کارمند باید بدون بی‌سیم و با مسئولیت و ریسک خودش خدمت کند.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Bei Alleinarbeit nach DGUV Vorschrift 1 / V23 muss durch technische (PNA) oder organisatorische Kontrollen (Meldezeiten) die Rettungskette gewährleistet sein.',
    translations: {
      ru: {
        question: 'Что предписывают правила UVV для опасных одиночных постов (например, ночной патруль)?',
        explanation: 'При одиночной работе спасательная цепочка гарантируется системами PNA или контрольными радиовызовами.'
      },
      en: {
        question: 'What do accident prevention regulations mandate for hazardous lone-worker posts (e.g. night patrols on vast premises)?',
        explanation: 'Lone workers require technological (PNA alarms) or organizational monitoring (call-in schedules) to ensure prompt rescue.'
      },
      ar: {
        question: 'ماذا تفرض لوائح منع الحوادث لمواقع العمل الفردية الخطرة (مثل الدوريات الليلية في مناطق واسعة)؟',
        explanation: 'في العمل الفردي يجب ضمان سلسلة الإنقاذ بأجهزة استغاثة تقنية (PNA) أو جداول اتصال لاسلكي دورية.'
      },
      fa: {
        question: 'آیین‌نامه UVV برای پست‌های انفرادی پرخطر (مانند گشت شبانه در محوطه‌های خلوت) چه چیزی الزامی کرده است؟',
        explanation: 'در کارهای انفرادی باید از طریق تجهیزات اضطراری (PNA) یا کنترل‌های منظم ارتباطی، زنجیره امداد و نجات تضمین گردد.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-uvv-6',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche Pflichten hat der Sicherheitsmitarbeiter beim Bemerken von Gefahrenquellen (z. B. offene Schächte, defekte Geländer)?',
    optionsData: [
      {
        text: 'A) Er muss die Gefahrenstelle sofort absichern und unverzüglich der Leitstelle / dem Vorgesetzten melden.',
        ru: 'Он обязан немедленно оградить опасное место и безотлагательно доложить в диспетчерскую / руководству.',
        en: 'He must secure the hazard zone immediately and report it promptly to the control center / supervisor.',
        ar: 'يجب عليه تأمين موقع الخطر فوراً وإبلاغ غرفة العمليات / المشرف المباشر على الفور.',
        fa: 'باید فوراً محل خطر را ایمن‌سازی کرده و موضوع را بلافاصله به مرکز کنترل / سرپرست گزارش دهد.'
      },
      {
        text: 'B) Er darf die Stelle ignorieren, solange sein Dienstplan nichts dazu sagt.',
        ru: 'Он может проигнорировать место, если об этом нет пункта в графике дежурства.',
        en: 'He may ignore the situation as long as his shift roster doesn\'t mention it.',
        ar: 'يجوز له تجاهل الأمر طالما لم يذكر في جدول ورديته.',
        fa: 'می‌تواند تا زمانی که در برنامه کاری چیزی نیامده آن را نادیده بگیرد.'
      },
      {
        text: 'C) Er muss den Schacht mit Zeitungen zudecken.',
        ru: 'Он должен прикрыть открытый колодец газетами.',
        en: 'He must cover open shafts with newspapers.',
        ar: 'يجب عليه تغطية الفتحة بالجرائد القديمة.',
        fa: 'باید روی چاهک باز را با روزنامه بپوشاند.'
      },
      {
        text: 'D) Er muss bis zum Schichtende warten, bevor er etwas unternimmt.',
        ru: 'Он должен дождаться конца смены, прежде чем что-либо предпринять.',
        en: 'He must wait until shift handover before taking any action.',
        ar: 'يجب عليه الانتظار حتى نهاية المناوبة قبل القيام بأي إجراء.',
        fa: 'باید تا پایان شیفت صبر کند و بعد اقدامی انجام دهد.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Nach DGUV Vorschrift 1 und Dienstanweisung ist jede erkannte Gefahrenquelle unverzüglich abzusichern und zu protokollieren.',
    translations: {
      ru: {
        question: 'Каковы обязанности охранника при обнаружении источников опасности (например, открытые люки, сломанные перила)?',
        explanation: 'Любой источник опасности следует немедленно оградить и зарегистрировать в журнале дежурств.'
      },
      en: {
        question: 'What are a security guard\'s obligations upon noticing workplace hazards (e.g. open shafts, damaged railings)?',
        explanation: 'Under DGUV Regulation 1, any detected hazard must be secured immediately and documented in logs.'
      },
      ar: {
        question: 'ما هي واجبات رجل الأمن عند ملاحظة مصادر خطر (مثل فتحات الصرف المفتوحة أو الحواجز المكسورة)؟',
        explanation: 'بموجب لوائح الوقاية يجب تأمين وحراسة مصدر الخطر فوراً وتوثيقه وإبلاغ الإدارة.'
      },
      fa: {
        question: 'وظیفه پرسنل حراست هنگام مشاهده منابع خطر (مانند چاهک‌های باز یا نرده‌های شکسته) چیست؟',
        explanation: 'طبق مقررات ایمنی کار DGUV، هرگونه کانون خطر باید بلافاصله ایمن‌سازی و گزارش شود.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-uvv-7',
    kategorie: 'Unfallverhütungsvorschriften (UVV)',
    frage: 'Welche persönliche Schutzausrüstung (PSA) muss der Arbeitgeber bei Bedarf stellen? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Sicherheitsschuhe (S3) mit Durchtrittschutz und Zehenschutzkappe sowie Warnweste bei Arbeiten im Verkehrsbereich.',
        ru: 'Защитная обувь (S3) с защитой от проколов и металлическим носком, а также сигнальный жилет при работе на проезжей части.',
        en: 'Safety boots (S3) with penetration resistance and toe caps, plus high-visibility vests when working in traffic areas.',
        ar: 'أحذية أمان (S3) مقاومة للاختراق ومزودة بمقدمة حماية، وسترات تحذيرية عاكسة عند العمل في مناطق حركة السير.',
        fa: 'کفش ایمنی (S3) با محافظ کفی و سرپنجه ضد ضربه به همراه جلیقه شبرنگ در محیط‌های ترافیکی.'
      },
      {
        text: 'B) Stichschutz- oder ballistische Schutzwesten bei gefährdeten Einsätzen (z. B. Geldtransport, Türsteherdienst).',
        ru: 'Жилеты с защитой от порезов/проколов или бронежилеты при опасных заданиях (инкассация, фейсконтроль).',
        en: 'Stab-resistant or ballistic protective vests during high-risk duties (e.g. cash transit, doorman).',
        ar: 'سترات واقية من الطعن أو الرصاص في المهام المحفوفة بالمخاطر (مثل نقل الأموال وحراسة أبواب النوادي).',
        fa: 'جلیقه‌های ضد چاقو یا جلیقه‌های ضد گلوله در مأموریت‌های پرخطر (مانند حمل پول، حراست ورودی کلاب‌ها).'
      },
      {
        text: 'C) Maßgeschneiderte Luxus-Sonnenbrillen bekannter Modemarken.',
        ru: 'Дизайнерские люксовые солнцезащитные очки известных брендов.',
        en: 'Custom-tailored luxury designer sunglasses.',
        ar: 'نظارات شمسية فاخرة ومخصصة من ماركات أزياء عالمية.',
        fa: 'عینک‌های آفتابی لوکس و سفارشی از برندهای معروف مد.'
      },
      {
        text: 'D) Private Armbanduhren aus Gold.',
        ru: 'Личные золотые наручные часы.',
        en: 'Private luxury gold wristwatches.',
        ar: 'ساعات يد شخصية من الذهب الخالص.',
        fa: 'ساعت‌های مچی طلای شخصی.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Der Arbeitgeber muss gemäß Gefährdungsbeurteilung geeignete PSA (Sicherheitsschuhe, Warnwesten, Schutzwesten, Gehörschutz) kostenfrei bereitstellen.',
    translations: {
      ru: {
        question: 'Какими средствами индивидуальной защиты (СИЗ / PSA) работодатель обязан бесплатно обеспечить охрану при необходимости? (Выберите 2 ответа)',
        explanation: 'Работодатель обязан предоставить спецобувь S3, сигнальные и бронежилеты бесплатно по оценке рисков.'
      },
      en: {
        question: 'Which personal protective equipment (PPE / PSA) must the employer provide when required? (Choose two correct answers)',
        explanation: 'Based on risk assessment, employers must furnish appropriate PPE (S3 boots, hi-vis vests, body armor) free of charge.'
      },
      ar: {
        question: 'ما هي معدات الوقاية الشخصية (PSA) التي يتعين على صاحب العمل توفيرها مجاناً عند الحاجة؟ (اختر إجابتين صحيحتين)',
        explanation: 'يلتزم صاحب العمل بتوفير أحذية السلامة S3 والسترات العاكسة والواقية مجاناً بناءً على تقييم المخاطر.'
      },
      fa: {
        question: 'کدام تجهیزات حفاظت فردی (PSA) در صورت نیاز باید توسط کارفرما تأمین شود؟ (دو پاسخ صحیح)',
        explanation: 'کارفرما موظف است بر اساس ارزیابی خطرات، کفش ایمنی S3، جلیقه شب‌نما و جلیقه ضدضربه/ضدگلوله را رایگان تأمین کند.'
      }
    }
  }),

  // =========================================================================
  // 6. GRUNDLAGEN DER SICHERHEITSTECHNIK (ihk-technik-1 .. ihk-technik-7)
  // =========================================================================
  makeQuestion({
    id: 'ihk-technik-1',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Was versteht man unter dem "Sicherheits-Grundsatz" bei der Verknüpfung technischer und personeller Maßnahmen?',
    optionsData: [
      {
        text: 'A) Technik unterstützt und entlastet das Personal, kann jedoch den Menschen und dessen Entscheidungsfähigkeit im Sicherheitsdienst nicht vollständig ersetzen.',
        ru: 'Техника поддерживает и разгружает персонал, но не может полностью заменить человека и его способность принимать решения.',
        en: 'Technology supports and relieves personnel, but cannot entirely replace human situational reasoning in security work.',
        ar: 'التقنية تدعم الموظفين وتخفف عنهم، لكنها لا تستطيع الاستغناء عن الإنسان وقدرته على اتخاذ القرارات في الأمن.',
        fa: 'فناوری از پرسنل پشتیبانی کرده و بار کاری را کم می‌کند، اما نمی‌تواند جایگزین کامل انسان و قدرت تصمیم‌گیری او شود.'
      },
      {
        text: 'B) Technik macht Wachpersonal zu 100 % überflüssig.',
        ru: 'Техника делает охранников на 100% ненужными.',
        en: 'Technology renders human security guards 100% obsolete.',
        ar: 'التقنية تجعل حراس الأمن غير ضروريين بنسبة 100%.',
        fa: 'فناوری نیاز به نیروهای حراست را ۱۰۰٪ از بین می‌برد.'
      },
      {
        text: 'C) Personal darf niemals technische Hilfsmittel verwenden.',
        ru: 'Персоналу запрещено пользоваться любыми техническими средствами.',
        en: 'Personnel must never utilize technical auxiliary equipment.',
        ar: 'يُحظر على موظفي الأمن استخدام أي وسائل تقنية مساعدة.',
        fa: 'پرسنل حراست هرگز نباید از ابزارهای فنی استفاده کنند.'
      },
      {
        text: 'D) Brandmeldeanlagen ersetzen die Feuerwehr.',
        ru: 'Пожарная сигнализация заменяет пожарную команду.',
        en: 'Fire alarm systems replace the fire brigade.',
        ar: 'أنظمة إنذار الحريق تحل محل فرق الإطفاء تماماً.',
        fa: 'سیستم‌های اعلام حریق جای آتش‌نشانی را پر می‌کنند.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Sicherheitstechnik (EMA, BMA, CCTV) dient der Detektion und Meldung; die Bewertung und Intervention erfordert qualifiziertes Sicherheitspersonal.',
    translations: {
      ru: {
        question: 'Что понимается под «основным принципом безопасности» при сочетании технических и кадровых мер?',
        explanation: 'Техника служит для обнаружения и передачи сигналов, но оценка ситуации и реагирование требуют человека.'
      },
      en: {
        question: 'What is the core security principle when integrating technical and human security measures?',
        explanation: 'Security technology (alarms, CCTV) performs detection and alerting; assessment and intervention demand trained security staff.'
      },
      ar: {
        question: 'ما هو «المبدأ الأمني الأساسي» عند الجمع بين الإجراءات التقنية والبشرية؟',
        explanation: 'التقنيات (الكاميرات والإنذار) تكتشف وتبلغ، بينما يحتاج التقييم والتدخل إلى كادر أمني مؤهل.'
      },
      fa: {
        question: '«اصل بنیادین امنیت» در تلفیق اقدامات فنی و انسانی به چه معناست؟',
        explanation: 'تجهیزات امنیتی وظیفه تشخیص و ارسال پیام را دارند، اما تحلیل وضعیت و مداخله نیازمند حضور انسان متخصص است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-technik-2',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche Komponenten gehören typischerweise zu einer Einbruchmeldeanlage (EMA)? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Melder (z. B. Bewegungsmelder, Magnetkontakte, Glasbruchmelder) und Zentrale.',
        ru: 'Датчики (например, детекторы движения, магнитоконтакты, датчики разбития стекла) и контрольная панель (централь).',
        en: 'Detectors (e.g. motion sensors, magnetic contacts, glass-break detectors) and control panel.',
        ar: 'أجهزة الاستشعار (مثل كواشف الحركة، نقاط التلامس المغناطيسية، كواشف كسر الزجاج) ولوحة التحكم المركزية.',
        fa: 'حسگرها (مانند حسگرهای حرکتی، کنتاکت‌های مگنتی، سنسورهای شکست شیشه) و پنل مرکزی.'
      },
      {
        text: 'B) Signalgeber (optisch/akustisch) und Übertragungseinrichtung zur Notruf- und Serviceleitstelle (NSL).',
        ru: 'Оповещатели (световые/звуковые) и устройство передачи тревог на пульт централизованного наблюдения (NSL).',
        en: 'Signaling devices (optical/acoustic) and transmission equipment to an alarm monitoring center (NSL).',
        ar: 'أجهزة التنبيه (ضوئية/صوتية) ووحدات الإرسال والربط مع مركز المراقبة والخدمات (NSL).',
        fa: 'تجهیزات هشداردهنده (نوری/صوتی) و دستگاه مخابره سیگنال به مرکز مانیتورینگ هشدار (NSL).'
      },
      {
        text: 'C) Automatische Sprinkleranlagen zur Flutung mit Wasser.',
        ru: 'Автоматические спринклерные системы для затопления водой.',
        en: 'Automatic water sprinkler fire suppression systems.',
        ar: 'رشاشات المياه التلقائية لمكافحة الحرائق.',
        fa: 'سیستم‌های آب‌پاش خودکار اسپرینکلر.'
      },
      {
        text: 'D) Rauchgasabzugsanlagen im Treppenhaus.',
        ru: 'Системы дымоудаления на лестничных клетках.',
        en: 'Smoke and heat extraction systems in stairwells.',
        ar: 'أنظمة شفط وسحب الدخان في السلالم والممرات.',
        fa: 'سامانه‌های تخلیه دود در راه‌پله‌ها.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Eine EMA besteht aus: Meldern (Sensoren), Zentrale (Auswertung), Signalgebern (Sirene/Blitz) und Übertragungsgerät (ÜG) zur Leitstelle.',
    translations: {
      ru: {
        question: 'Какие компоненты обычно входят в состав охранной сигнализации (EMA)? (Выберите 2 ответа)',
        explanation: 'EMA включает датчики, централь, сирены/вспышки и передатчик сигналов на пульт охраны.'
      },
      en: {
        question: 'Which components typically comprise an intrusion alarm system (EMA)? (Choose two correct answers)',
        explanation: 'An intrusion system consists of detectors, central control unit, sounders/strobes, and transmission units to the ARC.'
      },
      ar: {
        question: 'ما هي المكونات النموذجية التي يتألف منها نظام إنذار السرقة والاقتحام (EMA)؟ (اختر إجابتين صحيحتين)',
        explanation: 'يتكون النظام من: الكواشف، الوحدة المركزية، وسائل التنبيه والصفارات، وجهاز الإرسال إلى مركز العمليات.'
      },
      fa: {
        question: 'سیستم اعلام سرقت (EMA) معمولاً شامل کدام اجزا است؟ (دو پاسخ صحیح)',
        explanation: 'سیستم سرقت شامل سنسورها، پنل کنترل مرکزی، آژیر/فلاشر و دستگاه انتقال داده به مرکز مانیتورینگ است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-technik-3',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Was ist ein Passiv-Infrarot-Melder (PIR-Melder)?',
    optionsData: [
      {
        text: 'A) Ein Bewegungsmelder, der auf Temperaturänderungen (Wärmestrahlung von Körpern) im Erfassungsbereich reagiert.',
        ru: 'Датчик движения, который реагирует на изменение температуры (тепловое инфракрасное излучение тел) в зоне обнаружения.',
        en: 'A motion detector that responds to temperature fluctuations (thermal radiation emitted by bodies) within its detection zone.',
        ar: 'كاشف حركة يستجيب للتغيرات في درجات الحرارة (الإشعاع الحراري المنبعث من الأجسام) في نطاق التغطية.',
        fa: 'حسگر حرکتی که به تغییرات دما (تابش گرمایی بدن انسان) در محدوده تحت پوشش واکنش نشان می‌دهد.'
      },
      {
        text: 'B) Ein Melder, der aktiv Mikrowellen wie ein Radargerät aussendet.',
        ru: 'Датчик, который активно излучает микроволны наподобие радара.',
        en: 'A detector that actively transmits microwaves like a radar unit.',
        ar: 'كاشف يطلق موجات ميكروويف نشطة مثل جهاز الرادار.',
        fa: 'حسگری که فعالانه امواج مایکروویو مانند رادار ارسال می‌کند.'
      },
      {
        text: 'C) Ein akustischer Schallsensor für brechendes Fensterglas.',
        ru: 'Акустический звуковой сенсор для звука разбития оконного стекла.',
        en: 'An acoustic sensor configured to detect breaking window glass.',
        ar: 'مستشعر صوتي يستشعر ترددات تحطم زجاج النوافذ.',
        fa: 'حسگر صوتی برای تشخیص صدای شکستن شیشه پنجره.'
      },
      {
        text: 'D) Ein mechanischer Türkontaktschalter.',
        ru: 'Механический концевой дверной выключатель.',
        en: 'A mechanical door contact switch.',
        ar: 'مفتاح تلامس ميكانيكي للأبواب.',
        fa: 'کلید تماسی مکانیکی روی درب.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'PIR-Melder empfangen passiv die Infrarot-Wärmestrahlung von sich bewegenden Personen im Überwachungsbereich.',
    translations: {
      ru: {
        question: 'Что такое пассивный инфракрасный датчик (PIR-Melder)?',
        explanation: 'PIR-датчик пассивно регистрирует тепловое излучение движущихся людей в охраняемой зоне.'
      },
      en: {
        question: 'What is a passive infrared (PIR) detector?',
        explanation: 'PIR sensors passively receive infrared thermal emissions produced by moving persons within their field of view.'
      },
      ar: {
        question: 'ما هو كاشف الأشعة تحت الحمراء السلبي (PIR-Melder)؟',
        explanation: 'يستقبل حساس PIR السلبي الإشعاعات الحرارية الصادرة عن حركة الأشخاص في نطاق المراقبة دون إصدار أي إشعاع.'
      },
      fa: {
        question: 'حسگر مادون قرمز غیرفعال (PIR) چیست؟',
        explanation: 'حسگر PIR به شکل غیرفعال پرتوهای گرمایی مادون قرمز افراد در حال حرکت در محدوده حفاظتی را دریافت می‌کند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-technik-4',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche Arten von Brandmeldern werden in Brandmeldeanlagen (BMA) eingesetzt? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Optische Rauchmelder (Streulichtmelder) zur Erkennung von sichtbarem Rauch.',
        ru: 'Оптические дымовые датчики (по рассеянному свету) для обнаружения видимого дыма.',
        en: 'Optical smoke detectors (scattered light detectors) for detecting visible smoke particles.',
        ar: 'كواشف الدخان البصرية (تعتمد على تشتت الضوء) لاكتشاف جزيئات الدخان المرئية.',
        fa: 'حسگرهای دود نوری (بر مبنای شکست نور) برای تشخیص ذرات دود مرئی.'
      },
      {
        text: 'B) Thermomelder (Wärmemelder), die auf Temperaturanstieg oder Maximaltemperatur ansprechen.',
        ru: 'Тепловые датчики (термодетекторы), реагирующие на повышение температуры или достижение порога.',
        en: 'Heat detectors responding to temperature rate-of-rise or maximum temperature thresholds.',
        ar: 'كواشف الحرارة التي تستجيب لمعدل ارتفاع الحرارة أو بلوغ الحد الأقصى.',
        fa: 'حسگرهای حرارتی که به سرعت افزایش دما یا رسیدن به حداکثر دما واکنش می‌دهند.'
      },
      {
        text: 'C) Magnetkontakte an Fenstern.',
        ru: 'Магнитные контакты на окнах.',
        en: 'Magnetic reed contacts on windows.',
        ar: 'نقاط التلامس المغناطيسية على النوافذ.',
        fa: 'کنتاکت‌های مگنتی روی پنجره‌ها.'
      },
      {
        text: 'D) Erschütterungsmelder an Tresoren.',
        ru: 'Вибродатчики на сейфах.',
        en: 'Seismic vibration detectors on safes.',
        ar: 'كواشف الاهتزاز والصدمات على الخزائن.',
        fa: 'حسگرهای لرزش روی گاوصندوق‌ها.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'BMA-Melder: Optische Rauchmelder, Thermomelder, Flammenmelder und Mehrsensormelder sowie manuelle Handfeuermelder (Druckknopfmelder).',
    translations: {
      ru: {
        question: 'Какие типы пожарных извещателей применяются в пожарной сигнализации (BMA)? (Выберите 2 ответа)',
        explanation: 'В BMA применяются оптические дымовые, тепловые, пламенные извещатели и ручные кнопки тревоги.'
      },
      en: {
        question: 'Which types of fire detectors are utilized in fire alarm systems (BMA)? (Choose two correct answers)',
        explanation: 'Fire alarm systems employ optical smoke detectors, heat detectors, flame detectors, and manual call points.'
      },
      ar: {
        question: 'ما هي أنواع كواشف الحريق المستخدمة في أنظمة إنذار الحريق (BMA)؟ (اختر إجابتين صحيحتين)',
        explanation: 'تشمل كواشف الحريق: كواشف الدخان البصرية، كواشف الحرارة، كواشف اللهب، وأزرار الإنذار اليدوية.'
      },
      fa: {
        question: 'کدام نوع از دتکتورهای حریق در سیستم‌های اعلام حریق (BMA) به کار می‌روند؟ (دو پاسخ صحیح)',
        explanation: 'دتکتورهای دود نوری، دتکتورهای حرارتی، دتکتورهای شعله و شستی‌های دستی اعلام حریق.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-technik-5',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Was bedeutet die "Zwangsläufigkeit" bei einer Einbruchmeldeanlage nach VdS-Richtlinien?',
    optionsData: [
      {
        text: 'A) Die Anlage kann nur dann scharfgeschaltet werden, wenn alle überwachten Fenster und Türen geschlossen und alle Melder im Ruhezustand sind.',
        ru: 'Система может быть поставлена на охрану только тогда, когда все охраняемые окна и двери закрыты, а датчики находятся в состоянии покоя.',
        en: 'The system can only be armed when all monitored windows/doors are closed and all detectors are in an undisturbed quiescent state.',
        ar: 'لا يمكن تفعيل النظام وتسليحه إلا إذا كانت جميع النوافذ والأبواب المراقبة مغلقة وجميع الحساسات في حالة هدوء واستقرار.',
        fa: 'سیستم تنها زمانی می‌تواند فعال (مسلح) شود که تمام درب‌ها و پنجره‌های تحت نظارت بسته و همه سنسورها در وضعیت آرام باشند.'
      },
      {
        text: 'B) Jeder Mitarbeiter muss zwingend alle 10 Minuten den Alarmknopf drücken.',
        ru: 'Каждый сотрудник обязан каждые 10 минут нажимать тревожную кнопку.',
        en: 'Every guard must mandatory press the alarm button every 10 minutes.',
        ar: 'يجب على كل موظف الضغط على زر الإنذار كل 10 دقائق بشكل إجباري.',
        fa: 'هر کارمند باید اجباراً هر ۱۰ دقیقه دکمه هشدار را فشار دهد.'
      },
      {
        text: 'C) Bei Alarm wird automatisch die Polizei gerufen, ohne dass man eingreifen kann.',
        ru: 'При тревоге автоматически вызывается полиция без возможности вмешательства.',
        en: 'During alarms, police are summoned automatically without possibility of intervention.',
        ar: 'يتم استدعاء الشرطة تلقائياً دون إمكانية التدخل البشري.',
        fa: 'در صورت هشدار، پلیس به صورت خودکار بدون امکان لغو فراخوانده می‌شود.'
      },
      {
        text: 'D) Die EMA schaltet sich um 22:00 Uhr zwangsweise ab.',
        ru: 'Сигнализация принудительно отключается в 22:00.',
        en: 'The intrusion alarm forcibly shuts off at 22:00.',
        ar: 'يتم إيقاف نظام الإنذار إجبارياً في تمام الساعة العاشرة مساءً.',
        fa: 'سیستم دزدگیر رأس ساعت ۲۲:۰۰ اجباراً خاموش می‌شود.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Zwangsläufigkeit verhindert Falschalarme: Scharfschaltung ist nur möglich, wenn alle Sicherungsbereiche verriegelt und fehlerfrei sind.',
    translations: {
      ru: {
        question: 'Что означает принцип «неизбежной взаимосвязи / блокировки» (Zwangsläufigkeit) в сигнализациях по нормам VdS?',
        explanation: 'Принцип Zwangsläufigkeit исключает ложные тревоги: постановка на охрану невозможна при открытых окнах или сработавших датчиках.'
      },
      en: {
        question: 'What is meant by "interlocking / unbypassable readiness" (Zwangsläufigkeit) in VdS alarm guidelines?',
        explanation: 'Zwangsläufigkeit prevents false alarms: arming is strictly impossible unless all zones are locked and clear.'
      },
      ar: {
        question: 'ماذا يعني مبدأ «الحتمية وعدم القابلية للتجاوز» (Zwangsläufigkeit) في أنظمة الإنذار وفق معايير VdS؟',
        explanation: 'يمنع هذا المبدأ الإنذارات الكاذبة: لا يمكن تفعيل النظام إلا إذا كانت جميع الأبواب والنوافذ مغلقة وسليمة تماماً.'
      },
      fa: {
        question: 'مفهوم «شرط آمادگی حتمی» (Zwangsläufigkeit) در دزدگیرها طبق استانداردهای VdS چیست؟',
        explanation: 'این اصل مانع آلارم کاذب می‌شود: مسلح کردن دستگاه فقط در صورت بسته بودن تمام درب/پنجره‌ها و سلامت مدارها امکان‌پذیر است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-technik-6',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche mechanischen Sicherungseinrichtungen erhöhen den Einbruchschutz?',
    optionsData: [
      {
        text: 'A) Profilzylinder mit Sicherungskarte, Querriegelschlösser, Pilzkopfverriegelungen an Fenstern und Sicherheitsglas (P6B).',
        ru: 'Профильные цилиндры с картой безопасности, поперечные замки-балки, грибовидные цапфы на окнах и бронестекло (P6B).',
        en: 'Profile cylinders with security cards, cross-bar rim locks, mushroom-cam window fittings, and security laminated glass (P6B).',
        ar: 'أسطوانات القفل ذات البطاقات الأمنية، وأقفال العارضة المتقاطعة، ومقابض الفطر للنوافذ، والزجاج الأمني المقاوم (P6B).',
        fa: 'سیلندرهای پروفیلی دارای کارت امنیتی، قفل‌های کشویی ضدسرقت، یراق‌آلات قارچی پنجره و شیشه‌های ضدگلوله و ضربه (P6B).'
      },
      {
        text: 'B) Einfache Bartschlösser an Holztüren.',
        ru: 'Простые сувальдные замочки на деревянных дверях.',
        en: 'Simple warded lever locks on wooden interior doors.',
        ar: 'الأقفال البسيطة التقليدية على الأبواب الخشبية.',
        fa: 'قفل‌های کلیدی ساده و قدیمی روی درب‌های چوبی.'
      },
      {
        text: 'C) Deko-Aufkleber "Vorsicht Hund".',
        ru: 'Декоративная наклейка «Осторожно, злая собака».',
        en: 'Decorative sticker warning "Beware of Dog".',
        ar: 'ملصق تحذيري ديكوري مكتوب عليه "احذر الكلب".',
        fa: 'برچسب تزئینی «مواظب سگ باشید».'
      },
      {
        text: 'D) Plastikriegel an Gartenhütten.',
        ru: 'Пластиковые задвижки на садовых сараях.',
        en: 'Plastic sliding latches on garden sheds.',
        ar: 'مزالج بلاستيكية على أكواخ الحديقة.',
        fa: 'چفت‌های پلاستیکی درب کلبه باغچه.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Mechanik vor Elektronik: Mechanische Widerstandselemente (Pilzkopfzapfen, Panzerriegel, Einbruchschutzverglasung) verzögern den Täterangriff physikalisch.',
    translations: {
      ru: {
        question: 'Какие механические средства защиты повышают взломостойкость объекта?',
        explanation: 'Механика важнее электроники: грибовидные цапфы, ригели и бронестекло физически задерживают взломщика.'
      },
      en: {
        question: 'Which mechanical physical security measures enhance burglary protection?',
        explanation: 'Mechanics before electronics: mushroom cams, cross-bolt locks, and security glazing physically delay intrusion attempts.'
      },
      ar: {
        question: 'ما هي وسائل التأمين الميكانيكية التي تعزز الحماية ضد السطو والكسر؟',
        explanation: 'الحماية الميكانيكية تسبق الإلكترونية: الأقفال المدرعة والزجاج المقاوم تؤخر دخول الجاني مادياً.'
      },
      fa: {
        question: 'کدام تجهیزات مکانیکی باعث افزایش مقاومت در برابر سرقت و نفوذ می‌شوند؟',
        explanation: 'مکانیک مقدم بر الکترونیک: یراق‌آلات قارچی، قفل‌های حفاظتی و شیشه‌های ایمنی از نظر فیزیکی نفوذ سارق را به تأخیر می‌اندازند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-technik-7',
    kategorie: 'Grundsätze der Sicherheitstechnik',
    frage: 'Welche Aufgaben hat eine Notruf- und Serviceleitstelle (NSL) nach DIN EN 50518? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Empfang, Protokollierung und qualifizierte Bearbeitung von Alarm- und Störmeldungen.',
        ru: 'Прием, протоколирование и квалифицированная обработка сигналов тревоги и неисправностей.',
        en: 'Receiving, logging, and qualified handling of alarm and system fault messages.',
        ar: 'استقبال وتوثيق ومعالجة إشارات الإنذار وبلاغات الأعطال بمهنية عالية.',
        fa: 'دریافت، ثبت در سیستم و پردازش تخصصی سیگنال‌های هشدار و خطاهای فنی.'
      },
      {
        text: 'B) Einleitung von Interventionsmaßnahmen gemäß dem vereinbarten Alarmplan (z. B. Entsendung von Interventionskräften, Benachrichtigung der Polizei/Feuerwehr).',
        ru: 'Инициирование мер реагирования по согласованному плану тревоги (высылка групп быстрого реагирования, вызов полиции/пожарных).',
        en: 'Initiating response measures pursuant to agreed emergency response plans (e.g. dispatching patrol guards, notifying police/fire services).',
        ar: 'بدء إجراءات التدخل وفق خطة الطوارئ المعتمدة (مثل إرسال فرق التدخل السريع وإبلاغ الشرطة/الإطفاء).',
        fa: 'آغاز اقدامات مداخله‌ای طبق نقشه هشدار توافق‌شده (مانند اعزام نیروهای گشت واکنش سریع، اطلاع به پلیس/آتش‌نشانی).'
      },
      {
        text: 'C) Automatische Bestrafung der Einbrecher vor Ort.',
        ru: 'Автоматическое наказание грабителей на месте.',
        en: 'Automated physical punishing of intruders on premises.',
        ar: 'معاقبة اللصوص والمقتحمين تلقائياً في المكان.',
        fa: 'مجازات خودکار سارقین در محل وقوع جرم.'
      },
      {
        text: 'D) Verkauf von Versicherungsverträgen während der Nachtschicht.',
        ru: 'Продажа страховых полисов во время ночной смены.',
        en: 'Selling insurance contracts during night shifts.',
        ar: 'بيع وثائق التأمين خلال الوردية الليلية.',
        fa: 'فروش بیمه‌نامه در حین شیفت شب.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Die nach DIN EN 50518 zertifizierte NSL empfängt 24/7 Alarme, verifiziert diese und leitet unverzüglich Interventionen nach Alarmplan ein.',
    translations: {
      ru: {
        question: 'Каковы задачи пульта централизованного наблюдения (NSL) согласно стандарту DIN EN 50518? (Выберите 2 ответа)',
        explanation: 'NSL круглосуточно принимает сигналы тревоги, проверяет их и организует оперативное реагирование по плану.'
      },
      en: {
        question: 'What are the core duties of an alarm receiving center (NSL) compliant with DIN EN 50518? (Choose two correct answers)',
        explanation: 'Certified NSLs receive alarms 24/7, verify incoming events, and execute immediate dispatch protocols.'
      },
      ar: {
        question: 'ما هي مهام مركز مراقبة الإنذار والخدمات (NSL) بموجب المعيار DIN EN 50518؟ (اختر إجابتين صحيحتين)',
        explanation: 'يستقبل مركز NSL الإنذارات على مدار الساعة، ويتحقق منها، ويباشر إجراءات التدخل الميداني فوراً.'
      },
      fa: {
        question: 'وظایف مرکز کنترل و دریافت هشدار (NSL) طبق استاندارد DIN EN 50518 چیست؟ (دو پاسخ صحیح)',
        explanation: 'مرکز مانیتورینگ ۲۴ ساعته سیگنال‌ها را دریافت و اعتبارسنجی کرده و عملیات اعزام گشت را کلید می‌زند.'
      }
    }
  }),

  // =========================================================================
  // 7. DATENSCHUTZRECHT (DSGVO / BDSG) (ihk-datenschutz-1 .. ihk-datenschutz-3)
  // =========================================================================
  makeQuestion({
    id: 'ihk-datenschutz-1',
    kategorie: 'Datenschutzrecht',
    frage: 'Was sind "personenbezogene Daten" nach Art. 4 Nr. 1 DSGVO?',
    optionsData: [
      {
        text: 'A) Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, Videoaufnahmen, Kennzeichen, IP-Adresse).',
        ru: 'Любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу (имя, видеозапись, госномер, IP-адрес).',
        en: 'Any information relating to an identified or identifiable natural person (e.g. name, video footage, license plate, IP address).',
        ar: 'أي معلومات تتعلق بشخص طبيعي محدد الهوية أو يمكن تحديد هويته (مثل الاسم، تسجيلات الفيديو، لوحة السيارة، عنوان IP).',
        fa: 'هرگونه اطلاعات مربوط به یک شخص حقیقی شناسایی‌شده یا قابل شناسایی (مانند نام، تصویر ویدئویی، پلاک خودرو، آدرس IP).'
      },
      {
        text: 'B) Ausschließlich streng geheime Staatsgeheimnisse.',
        ru: 'Исключительно государственные тайны особой важности.',
        en: 'Exclusively top-secret state secrets.',
        ar: 'أسرار الدولة شديدة السرية فقط.',
        fa: 'صرفاً اسرار به شدت محرمانه دولتی.'
      },
      {
        text: 'C) Reine Wetterdaten und Luftdruckmessungen.',
        ru: 'Исключительно данные о погоде и атмосферном давлении.',
        en: 'Pure meteorological data and air pressure readings.',
        ar: 'بيانات الطقس وقياسات الضغط الجوي البحتة.',
        fa: 'داده‌های صرف هواشناسی و اندازه‌گیری فشار هوا.'
      },
      {
        text: 'D) Statistische Angaben über den Benzinpreis.',
        ru: 'Статистические данные о ценах на бензин.',
        en: 'Statistical aggregated reports on gasoline prices.',
        ar: 'إحصائيات مجردة عن أسعار الوقود.',
        fa: 'گزارش‌های آماری درباره قیمت بنزین.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Personenbezogene Daten sind alle Angaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren lebenden Person.',
    translations: {
      ru: {
        question: 'Что такое «персональные данные» согласно ст. 4 п. 1 GDPR (DSGVO)?',
        explanation: 'Персональные данные — это любые сведения, позволяющие прямо или косвенно определить живого человека.'
      },
      en: {
        question: 'What constitutes "personal data" under Art. 4 No. 1 GDPR (DSGVO)?',
        explanation: 'Personal data encompasses any details relating to personal or material circumstances of an identified or identifiable individual.'
      },
      ar: {
        question: 'ما هي «البيانات الشخصية» بموجب المادة 4 فقرة 1 من اللائحة العامة لحماية البيانات (DSGVO)؟',
        explanation: 'البيانات الشخصية هي أي معلومة تخص شخصاً طبيعياً يمكن التعرف عليه بشكل مباشر أو غير مباشر.'
      },
      fa: {
        question: '«داده‌های شخصی» طبق ماده ۴ بند ۱ مقررات GDPR (DSGVO) شامل چه مواردی است؟',
        explanation: 'داده‌های شخصی شامل هر اطلاعاتی است که مستقیماً یا غیرمستقیم به هویت یک انسان زنده ارتباط دارد.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-datenschutz-2',
    kategorie: 'Datenschutzrecht',
    frage: 'Welche Anforderungen gelten für die Videoüberwachung öffentlich zugänglicher Räume nach § 4 BDSG? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Der Umstand der Videoüberwachung und die verantwortliche Stelle müssen durch geeignete Hinweisschilder (Piktogramm & Kontaktdaten) sofort erkennbar gemacht werden.',
        ru: 'Факт видеонаблюдения и ответственное лицо должны быть четко обозначены информационными знаками (пиктограмма и контакты).',
        en: 'The circumstance of video surveillance and the controller must be made immediately recognizable through clear warning signs (pictogram & contact details).',
        ar: 'يجب الإشارة بوضوح لوجود مراقبة بالفيديو والجهة المسؤولة عبر لوحات تحذيرية واضحة (رمز الكاميرا وبيانات الاتصال).',
        fa: 'وجود نظارت تصویری و هویت مرجع مسئول باید فوراً از طریق تابلوهای هشداردهنده مناسب (پیکتوگرام و اطلاعات تماس) مشخص شود.'
      },
      {
        text: 'B) Die Überwachung muss zur Wahrnehmung des Hausrechts oder berechtigter Interessen erforderlich sein und schutzwürdige Interessen der Betroffenen dürfen nicht überwiegen.',
        ru: 'Видеонаблюдение должно быть необходимым для защиты права владения объектом или законных интересов, не нарушая прав граждан.',
        en: 'Surveillance must be necessary to exercise domiciliary rights or legitimate interests, without overriding the data subjects\' protected rights.',
        ar: 'يجب أن تكون المراقبة ضرورية لإنفاذ حق المكان أو المصالح المشروعة دون أن تطغى على حقوق وخصوصية الأشخاص الخاضعين للمراقبة.',
        fa: 'نظارت باید برای اعمال حق مالکیت یا منافع مشروع ضروری بوده و بر حقوق حفاظت‌شده افراد غلبه نکند.'
      },
      {
        text: 'C) Kameras dürfen heimlich in Umkleidekabinen und Toiletten installiert werden.',
        ru: 'Камеры можно скрытно ставить в раздевалках и туалетах.',
        en: 'Cameras may be installed covertly inside fitting rooms and restrooms.',
        ar: 'يجوز تثبيت الكاميرات سراً في غرف تبديل الملابس ودورات المياه.',
        fa: 'می‌توان دوربین‌ها را به صورت مخفی در اتاق‌های پرو و سرویس‌های بهداشتی نصب کرد.'
      },
      {
        text: 'D) Aufnahmen müssen für mindestens 10 Jahre im Internet veröffentlicht werden.',
        ru: 'Записи должны публиковаться в интернете минимум на 10 лет.',
        en: 'Recordings must be published on the internet for at least 10 years.',
        ar: 'يجب نشر التسجيلات على الإنترنت لمدة لا تقل عن 10 سنوات.',
        fa: 'تصاویر ضبط‌شده باید حداقل ۱۰ سال در اینترنت منتشر شوند.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Transparenzgebot (§ 4 BDSG / Art. 13 DSGVO): Deutliche Hinweisschilder vor Betreten des Erfassungsbereichs; keine Überwachung im Intimbereich.',
    translations: {
      ru: {
        question: 'Какие требования предъявляются к видеонаблюдению в общедоступных местах согласно § 4 BDSG? (Выберите 2 ответа)',
        explanation: 'Требуются таблички с контактами и обоснование законным интересом; видеонаблюдение в интимных зонах строго запрещено.'
      },
      en: {
        question: 'Which requirements apply to video surveillance in publicly accessible premises under Section 4 BDSG? (Choose two correct answers)',
        explanation: 'Transparency principle (§ 4 BDSG): conspicuous warning signs before entering camera zones; strictly prohibited in intimate areas.'
      },
      ar: {
        question: 'ما هي الشروط المطبقة على مراقبة الأماكن المتاحة للجمهور بالكاميرات وفقاً للمادة 4 من BDSG؟ (اختر إجابتين صحيحتين)',
        explanation: 'مبدأ الشفافية: وضع لوحات تحذيرية واضحة قبل الدخول؛ ويُمنع منعاً باتاً التصوير في الأماكن الخاصة والحميمة.'
      },
      fa: {
        question: 'چه الزاماتی برای نظارت تصویری در اماکن عمومی طبق بند ۴ قانون BDSG وجود دارد؟ (دو پاسخ صحیح)',
        explanation: 'اصل شفافیت: نصب تابلوی واضح قبل از ورود به دید دوربین؛ نصب دوربین در فضاهای خصوصی و سرویس‌ها مطلقاً ممنوع است.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-datenschutz-3',
    kategorie: 'Datenschutzrecht',
    frage: 'Welche Pflichten treffen einen Sicherheitsmitarbeiter bezüglich des Datenschutzes im Dienst? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Wahrung des Datengeheimnisses: Keine unbefugte Weitergabe von personenbezogenen Daten (z. B. Besucherlisten, Mitarbeiterdaten, Kamerabilder).',
        ru: 'Соблюдение тайны данных: запрет на несанкционированную передачу персональных данных (списки посетителей, видеозаписи).',
        en: 'Preserving data confidentiality: no unauthorized disclosure of personal data (e.g. visitor logs, employee records, camera footage).',
        ar: 'الحفاظ على سرية البيانات: عدم تسريب أو نقل البيانات الشخصية دون تصريح (مثل سجل الزوار وبيانات الموظفين وتصوير الكاميرات).',
        fa: 'حفظ محرمانگی داده‌ها: عدم انتقال غیرمجاز اطلاعات هویتی و شخصی (مانند لیست مراجعین، داده‌های پرسنل، تصاویر دوربین‌ها).'
      },
      {
        text: 'B) Das Datengeheimnis und die Verschwiegenheitspflicht gelten auch nach Beendigung des Arbeitsverhältnisses fort.',
        ru: 'Обязанность соблюдать тайну данных и конфиденциальность сохраняется и после увольнения.',
        en: 'Data confidentiality and professional non-disclosure obligations continue even after employment termination.',
        ar: 'يظل واجب الحفاظ على سرية البيانات والكتمان سارياً حتى بعد انتهاء عقد العمل.',
        fa: 'تعهد به حفظ محرمانگی داده‌ها و رازداری حرفه‌ای حتی پس از پایان قرارداد کاری همچنان معتبر و پابرجا است.'
      },
      {
        text: 'C) Er darf interessante Videoaufnahmen auf sein privates Handy kopieren und Freunden zeigen.',
        ru: 'Он может копировать интересные видеозаписи на свой телефон и показывать друзьям.',
        en: 'He may copy interesting video clips onto his private smartphone and show friends.',
        ar: 'يجوز له نسخ مقاطع الفيديو المثيرة للاهتمام على هاتفه الشخصي وعرضها على أصدقائه.',
        fa: 'او می‌تواند ویدئوهای جالب دوربین مداربسته را روی گوشی شخصی کپی کرده و به دوستانش نشان دهد.'
      },
      {
        text: 'D) Er darf Besucherdaten an Werbefirmen verkaufen.',
        ru: 'Он может продавать данные посетителей рекламным агентствам.',
        en: 'He may monetize visitor databases by selling them to advertising firms.',
        ar: 'يجوز له بيع بيانات الزوار لشركات الدعاية والإعلان.',
        fa: 'او مجاز است اطلاعات مراجعین را به شرکت‌های تبلیغاتی بفروشد.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Verschwiegenheit und Datengeheimnis sind strikt einzuhalten; Verstöße können strafrechtliche Konsequenzen und Bußgelder nach sich ziehen.',
    translations: {
      ru: {
        question: 'Каковы обязанности сотрудника службы безопасности в отношении защиты данных на службе? (Выберите 2 ответа)',
        explanation: 'Обязанность хранить служебную тайну и конфиденциальность данных действует строго и бессрочно.'
      },
      en: {
        question: 'Which obligations apply to security guards regarding data protection during service? (Choose two correct answers)',
        explanation: 'Data secrecy and non-disclosure must be strictly maintained even beyond termination of employment.'
      },
      ar: {
        question: 'ما هي الالتزامات المفروضة على حارس الأمن فيما يتعلق بحماية البيانات أثناء الخدمة؟ (اختر إجابتين صحيحتين)',
        explanation: 'يجب الالتزام التام بالسرية وحماية البيانات، وتستمر هذه المسؤولية حتى بعد انتهاء علاقة العمل.'
      },
      fa: {
        question: 'وظایف نیروی حراست در قبال حفاظت از داده‌ها در حین خدمت چیست؟ (دو پاسخ صحیح)',
        explanation: 'محرمانگی اطلاعات و رازداری شغلی باید کاملاً رعایت شود و حتی بعد از اتمام همکاری نیز ادامه دارد.'
      }
    }
  }),

  // =========================================================================
  // 8. WAFFENRECHT (WAFFG) (ihk-waffen-1 .. ihk-waffen-3)
  // =========================================================================
  makeQuestion({
    id: 'ihk-waffen-1',
    kategorie: 'Umgang mit Waffen',
    frage: 'Was versteht man unter dem Begriff "Führen" einer Waffe nach dem Waffengesetz?',
    optionsData: [
      {
        text: 'A) Die Ausübung der tatsächlichen Gewalt über eine Waffe außerhalb der eigenen Wohnung, Geschäftsräume oder des eigenen befriedeten Besitztums.',
        ru: 'Осуществление фактической власти над оружием вне собственного жилища, служебных помещений или огороженной частной территории.',
        en: 'Exercising actual physical control over a weapon outside one\'s own home, business premises, or fenced real property.',
        ar: 'ممارسة السيطرة المادية والفعلية على السلاح خارج المسكن الخاص أو أماكن العمل أو الملكية الخاصة المحاطة بسياج.',
        fa: 'اعمال سلطه و در اختیار داشتن عملی سلاح در خارج از منزل، محیط کسب و کار یا ملک محصور شخصی.'
      },
      {
        text: 'B) Die Aufbewahrung der Waffe im verschlossenen Waffenschrank zu Hause.',
        ru: 'Хранение оружия в запертом оружейном сейфе дома.',
        en: 'Storing a weapon locked inside a home gun safe.',
        ar: 'تخزين السلاح في خزانة أسلحة مقفلة في المنزل.',
        fa: 'نگهداری اسلحه در گاوصندوق قفل‌شده در خانه.'
      },
      {
        text: 'C) Das Herstellen von Patronen in einer Munitionsfabrik.',
        ru: 'Производство патронов на патронном заводе.',
        en: 'Manufacturing ammunition inside a cartridge plant.',
        ar: 'تصنيع الذخائر في مصنع أسلحة.',
        fa: 'تولید گلوله در کارخانه مهمات‌سازی.'
      },
      {
        text: 'D) Das Betrachten von Waffen in einem Museumskatalog.',
        ru: 'Просмотр оружия в музейном каталоге.',
        en: 'Viewing firearms in a museum exhibition catalog.',
        ar: 'مشاهدة الأسلحة في كتالوج متحف.',
        fa: 'مشاهده تصاویر اسلحه در کاتالوگ موزه.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'WaffG Anlage 1: Wer eine Waffe außerhalb der eigenen Räume/des eigenen Besitztums zugriffsbereit bei sich hat, "führt" die Waffe und benötigt in der Regel einen Waffenschein.',
    translations: {
      ru: {
        question: 'Что понимается под термином «ношение оружия» (Führen) по Закону об оружии (WaffG)?',
        explanation: 'Ношение — это фактическое владение оружием вне своего жилья/помещений/участка, требующее лицензии на ношение.'
      },
      en: {
        question: 'What constitutes "carrying a weapon" (Führen) under the German Weapons Act (WaffG)?',
        explanation: 'WaffG Annex 1: Having ready physical control over a weapon outside one\'s own private premises constitutes "carrying" and requires a permit.'
      },
      ar: {
        question: 'ماذا يقصد بمصطلح «حمل السلاح» (Führen) بموجب قانون الأسلحة الألماني؟',
        explanation: 'ملحق 1 لقانون الأسلحة: حيازة السلاح والسيطرة عليه خارج المنزل أو ملكيتك الخاصة يعتبر حملاً ويتطلب ترخيصاً رسمياً.'
      },
      fa: {
        question: 'مفهوم «حمل سلاح» (Führen) طبق قانون تسلیحات آلمان چیست؟',
        explanation: 'در اختیار داشتن سلاح آماده به کار در خارج از منزل یا ملک اختصاصی، «حمل» محسوب شده و نیاز به مجوز رسمی دارد.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-waffen-2',
    kategorie: 'Umgang mit Waffen',
    frage: 'Welche Gegenstände sind nach Anlage 2 Abschnitt 1 WaffG in Deutschland absolut verboten? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Schlagringe, Wurfsterne und Butterflymesser.',
        ru: 'Кастеты, сюрикены (метательные звезды) и ножи-бабочки (балисонги).',
        en: 'Brass knuckles, throwing stars (shuriken), and butterfly knives (balisongs).',
        ar: 'القبضات الحديدية (البوكس)، ونجوم الرمي، وسكاكين الفراشة (الباليسونغ).',
        fa: 'پنجه‌بکس، ستاره‌های پرتابی (شوریکن) و چاقوهای پروانه‌ای.'
      },
      {
        text: 'B) Schusswaffen mit Schalldämpfern oder Vorrichtungen, die das Ziel beleuchten / Nachtzielgeräte mit Bildwandler.',
        ru: 'Огнестрельное оружие с глушителями или целеуказателями/подсветкой цели, а также ночные прицелы с преобразователем.',
        en: 'Firearms with silencers or devices illuminating the target / electronic night-vision scopes.',
        ar: 'الأسلحة النارية المزودة بكواتم صوت أو أجهزة إضاءة وتحديد الأهداف / أجهزة الرؤية الليلية الإلكترونية.',
        fa: 'سلاح‌های گرم دارای صداخفه‌کن یا تجهیزات روشنایی روی هدف / دوربین‌های دید در شب الکترونیکی.'
      },
      {
        text: 'C) Pfeffersprays mit der Aufschrift "Tierabwehrspray".',
        ru: 'Перцовые баллончики с маркировкой «для защиты от животных».',
        en: 'Pepper sprays explicitly labeled as "Animal Defense Spray".',
        ar: 'بخاخات الفلفل التي تحمل علامة "بخاخ طرد ومكافحة الحيوانات".',
        fa: 'اسپری فلفل دارای برچسب «دفاع در برابر حیوانات».'
      },
      {
        text: 'D) Normale Taschenmesser mit zweihändiger Öffnung.',
        ru: 'Обычные карманные складные ножи с открыванием двумя руками.',
        en: 'Ordinary pocket knives requiring two-handed opening.',
        ar: 'سكاكين الجيب التقليدية التي تفتح بكلتا اليدين.',
        fa: 'چاقوهای جیبی تاشو معمولی با قابلیت باز شدن دو دستی.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Verbotene Waffen laut WaffG: Schlagringe, Wurfsterne, Butterflymesser, Faustmesser, Präzisionsschleudern sowie Zielbeleuchtungseinrichtungen an Schusswaffen.',
    translations: {
      ru: {
        question: 'Какие предметы абсолютно запрещены в Германии согласно Приложению 2 Разд. 1 WaffG? (Выберите 2 ответа)',
        explanation: 'Запрещенное оружие: кастеты, сюрикены, ножи-бабочки, а также лазерные и световые прицелы для оружия.'
      },
      en: {
        question: 'Which items are categorically banned in Germany under Annex 2 Section 1 WaffG? (Choose two correct answers)',
        explanation: 'Prohibited weapons: brass knuckles, throwing stars, butterfly knives, push daggers, and target-illuminating gun mounts.'
      },
      ar: {
        question: 'ما هي الأدوات المحظورة تماماً في ألمانيا بموجب الملحق 2 القسم 1 من قانون الأسلحة؟ (اختر إجابتين صحيحتين)',
        explanation: 'أسلحة محظورة: البوكس الحديدي، نجوم الرمي، سكاكين الفراشة، وأجهزة إضاءة الأهداف المركبة على الأسلحة.'
      },
      fa: {
        question: 'کدام اقلام طبق پیوست ۲ بخش ۱ قانون تسلیحات در آلمان کاملاً ممنوع هستند؟ (دو پاسخ صحیح)',
        explanation: 'سلاح‌های ممنوعه: پنجه‌بکس، ستاره پرتابی، چاقوی پروانه‌ای و ابزارهای نورافکن متصل به اسلحه.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-waffen-3',
    kategorie: 'Umgang mit Waffen',
    frage: 'Welche Voraussetzungen müssen für den Transport einer Schusswaffe erfüllt sein, damit dies nicht als "Führen" gilt? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Die Waffe muss ungeladen sein.',
        ru: 'Оружие должно быть полностью разряжено.',
        en: 'The firearm must be completely unloaded.',
        ar: 'يجب أن يكون السلاح غير ملقم وخالياً تماماً من الذخيرة.',
        fa: 'سلاح باید کاملاً خالی از فشنگ و بدون مهمات باشد.'
      },
      {
        text: 'B) Die Waffe muss sich in einem verschlossenen Behältnis (z. B. mit Schloss gesicherter Koffer) befinden (nicht zugriffsbereit).',
        ru: 'Оружие должно находиться в запертом футляре/кейсе (например, чемоданчик с замком), исключающем быстрый доступ.',
        en: 'The weapon must be placed inside a locked container (e.g. case secured with a padlock), not readily accessible.',
        ar: 'يجب أن يكون السلاح في حاوية مقفلة (مثل حقيبة مؤمنة بقفل) وغير قابل للوصول السريع باليد.',
        fa: 'اسلحه باید در یک جعبه یا کیف قفل‌شده (مانند کیف با قفل آویز) و دور از دسترس سریع قرار داشته باشد.'
      },
      {
        text: 'C) Die Waffe darf geladen im Handschuhfach des Autos liegen.',
        ru: 'Оружие может лежать заряженным в бардачке автомобиля.',
        en: 'The weapon may lie loaded inside the vehicle glove compartment.',
        ar: 'يجوز أن يوضع السلاح وهو ملقم في درج سيارة التابلوه.',
        fa: 'اسلحه می‌تواند پر از فشنگ درون داشبورد خودرو قرار گیرد.'
      },
      {
        text: 'D) Die Waffe muss griffbereit im Holster getragen werden.',
        ru: 'Оружие должно находиться в кобуре под рукой.',
        en: 'The weapon must be worn ready-to-draw in a holster.',
        ar: 'يجب حمل السلاح في الجراب ليكون في متناول اليد فوراً.',
        fa: 'اسلحه باید آماده کشیدن در غلاف روی کمر قرار داشته باشد.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Erlaubnisfreier Transport (§ 12 WaffG): Ungeladen und in einem fest verschlossenen Behältnis (Schloss) von einem Ort zum anderen befördern.',
    translations: {
      ru: {
        question: 'Какие условия должны соблюдаться при транспортировке оружия, чтобы это не считалось «ношением»? (Выберите 2 ответа)',
        explanation: 'Транспортировка без разрешения: оружие разряжено и находится в запертом на замок кейсе/чехле (нет прямого доступа).'
      },
      en: {
        question: 'Which conditions must be met for firearm transport to not be classified as "carrying"? (Choose two correct answers)',
        explanation: 'Permit-free transport (§ 12 WaffG): strictly unloaded and inside a locked container (padlock) not readily accessible.'
      },
      ar: {
        question: 'ما هي الشروط الواجب توفرها لنقل السلاح الناري حتى لا يعتبر ذلك «حملاً» غير قانوني؟ (اختر إجابتين صحيحتين)',
        explanation: 'النقل غير المقيد بترخيص خاص: أن يكون السلاح فارغاً من الذخيرة ومحفوظاً داخل حقيبة مقفلة بقفل محكم.'
      },
      fa: {
        question: 'چه شرایطی باید در حمل و جابه‌جایی اسلحه رعایت شود تا «حمل سلاح» تلقی نگردد؟ (دو پاسخ صحیح)',
        explanation: 'حمل بار مجاز: اسلحه بدون فشنگ بوده و درون جعبه یا کیف قفل‌شده قرار داشته باشد (عدم دسترسی فوری).'
      }
    }
  }),

  // =========================================================================
  // 9. GEWERBERECHT (§ 34a GewO / BewachV) (ihk-gewerbe-1 .. ihk-gewerbe-3)
  // =========================================================================
  makeQuestion({
    id: 'ihk-gewerbe-1',
    kategorie: 'Gewerberecht (GewO / BewachV)',
    frage: 'Für welche Bewachungstätigkeiten ist der Nachweis der erfolgreichen Sachkundeprüfung (§ 34a GewO) gesetzlich zwingend vorgeschrieben?',
    optionsData: [
      {
        text: 'A) Kontrollgänge im öffentlichen Verkehrsraum (z. B. Citystreife), Schutz vor Ladendieben (Kaufhausdetektiv), Einlasskontrollen im Türsteherbereich von Diskotheken sowie leitende Funktionen in Asyl- und Großunterkünften.',
        ru: 'Патрулирование в общественных местах (Citystreife), защита от магазинных воров (детектив), фейсконтроль в дискотеках и руководящие посты в общежитиях для беженцев.',
        en: 'Patrols in public traffic spaces (city patrols), retail store detective work, discotheque doorman door control, and management functions in asylum/large shelters.',
        ar: 'دوريات الأماكن العامة، محققو المتاجر ضد السرقة، حراسة ومراقبة مداخل الملاهي والديسكو، والمهام القيادية في مراكز اللجوء والإيواء.',
        fa: 'گشت‌زنی در اماکن عمومی، کارآگاه فروشگاهی، کنترل ورودی و بانسری دیسکوها و نقش‌های مدیریتی در اقامتگاه‌های پناهجویان.'
      },
      {
        text: 'B) Für jede beliebige Büroarbeit in einer Hausverwaltung.',
        ru: 'Для любой офисной работы в управляющей компании.',
        en: 'For standard desk work in property management.',
        ar: 'لأي عمل مكتبي عادي في إدارة العقارات.',
        fa: 'برای هرگونه کار اداری معمولی در شرکت‌های ساختمانی.'
      },
      {
        text: 'C) Ausschließlich für Bundeskanzler-Leibwächter.',
        ru: 'Исключительно для телохранителей канцлера.',
        en: 'Strictly for bodyguards of the Federal Chancellor.',
        ar: 'حصرياً للحراس الشخصيين للمستشار الاتحادي.',
        fa: 'صرفاً برای محافظان شخصی صدراعظم فدرال.'
      },
      {
        text: 'D) Nur für Hundeausführer im Park.',
        ru: 'Только для выгульщиков собак в парке.',
        en: 'Exclusively for dog walkers in public parks.',
        ar: 'فقط لمن يخرج الكلاب للنزهة في الحدائق.',
        fa: 'فقط برای کسانی که سگ‌ها را در پارک می‌گردانند.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: '§ 34a Abs. 1a Satz 2 GewO schreibt die Sachkundeprüfung verbindlich vor für: 1. Citystreifen, 2. Kaufhausdetektive, 3. Türsteher (Gaststätten/Diskotheken), 4. Leitung bei Asylheimen und Großveranstaltungen.',
    translations: {
      ru: {
        question: 'Для каких видов охранной деятельности сдача экзамена Sachkunde (§ 34a GewO) является строго обязательной по закону?',
        explanation: 'Экзамен 34a обязателен для: городских патрулей, детективов в магазинах, вышибал в клубах и руководства охраной в лагерях беженцев.'
      },
      en: {
        question: 'For which security activities is passing the expert knowledge examination (§ 34a GewO) legally mandatory?',
        explanation: '§ 34a GewO mandates the exam for: 1. City patrols, 2. Store detectives, 3. Doormen/bouncers, 4. Management in refugee shelters/events.'
      },
      ar: {
        question: 'لأي أنشطة حراسة يعد اجتياز اختبار الكفاءة والخبرة (§ 34a GewO) إلزامياً بموجب القانون؟',
        explanation: 'المادة 34a تلزم بالاختبار لـ: دوريات الشوارع، محققي المحلات، حراس أبواب الملاهي، وإدارة أمن مراكز اللاجئين والفعاليات الكبرى.'
      },
      fa: {
        question: 'برای کدام فعالیت‌های حفاظتی قبولی در آزمون تخصصی (§ 34a GewO) از نظر قانونی الزامی است؟',
        explanation: 'آزمون ۳۴a اجباری است برای: ۱. گشت شهری، ۲. کارآگاه فروشگاه، ۳. بانسری کلاب‌ها، ۴. مدیریت حراست در مراکز پناهندگی و رویدادهای بزرگ.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-gewerbe-2',
    kategorie: 'Gewerberecht (GewO / BewachV)',
    frage: 'Was ist das Bewacherregister (BWR) nach § 34a GewO?',
    optionsData: [
      {
        text: 'A) Ein bundesweites elektronisches Register, in dem alle Bewachungsunternehmer und Wachpersonen erfasst, auf Zuverlässigkeit überprüft und freigegeben werden müssen.',
        ru: 'Общенациональный электронный реестр, в котором регистрируются, проверяются на благонадежность и утверждаются все охранные фирмы и охранники.',
        en: 'A nationwide electronic register in which all security business operators and guarding personnel must be recorded, vetted for reliability, and cleared.',
        ar: 'سجل إلكتروني اتحادي يتم فيه تسجيل جميع شركات الحراسة وأفراد الأمن والتحقق من موثوقيتهم ومنحهم الموافقة الرسمية.',
        fa: 'سامانه الکترونیکی سراسری که در آن کلیه شرکت‌ها و پرسنل حراست باید ثبت، بررسی صلاحیت و تأیید شوند.'
      },
      {
        text: 'B) Eine private Mitgliederliste eines Sportvereins.',
        ru: 'Частный список членов спортивного клуба.',
        en: 'A private membership list of a sports club.',
        ar: 'قائمة أعضاء خاصة بنادٍ رياضي.',
        fa: 'لیست اعضای خصوصی یک باشگاه ورزشی.'
      },
      {
        text: 'C) Das Telefonbuch der regionalen Polizeiinspektion.',
        ru: 'Телефонный справочник местного отделения полиции.',
        en: 'The internal telephone directory of regional police stations.',
        ar: 'دليل هواتف قسم الشرطة الإقليمي.',
        fa: 'دفترچه تلفن اداره پلیس منطقه.'
      },
      {
        text: 'D) Ein Register nur für ausländische Sicherheitsdienste.',
        ru: 'Реестр только для иностранных охранных служб.',
        en: 'A registry solely for foreign security companies.',
        ar: 'سجل خاص بشركات الأمن الأجنبية فقط.',
        fa: 'سامانه ثبت اختصاصی شرکت‌های امنیتی خارجی.'
      }
    ],
    korrekteAntworten: [0],
    punkte: 1,
    erklaerung: 'Das Bewacherregister vernetzt Gewerbebehörden, Polizei und Verfassungsschutz. Wachpersonen dürfen erst nach behördlicher Freigabe im BWR eingesetzt werden.',
    translations: {
      ru: {
        question: 'Что такое Реестр охранников (Bewacherregister / BWR) согласно § 34a GewO?',
        explanation: 'BWR объединяет ведомства и полицию; охранники могут работать только после официального утверждения в реестре.'
      },
      en: {
        question: 'What is the Guarding Register (Bewacherregister / BWR) pursuant to Section 34a GewO?',
        explanation: 'The BWR connects regulatory authorities, police, and intelligence; guards may only be deployed following official clearance.'
      },
      ar: {
        question: 'ما هو سجل الحراسة الاتحادي (Bewacherregister / BWR) بموجب المادة 34a GewO؟',
        explanation: 'يربط سجل BWR بين السلطات والشرطة، ولا يجوز تشغيل أي حارس أمن قبل صدور الموافقة الرسمية فيه.'
      },
      fa: {
        question: 'سامانه ثبت پرسنل حراست (Bewacherregister / BWR) طبق بند ۳۴a GewO چیست؟',
        explanation: 'این سامانه نهادهای نظارتی و پلیس را متصل می‌کند؛ پرسنل فقط پس از تأیید در سامانه BWR مجاز به کار هستند.'
      }
    }
  }),

  makeQuestion({
    id: 'ihk-gewerbe-3',
    kategorie: 'Gewerberecht (GewO / BewachV)',
    frage: 'Welche Angaben muss der Ausweis einer Wachperson nach § 18 BewachV enthalten? (Wählen Sie zwei richtige Antworten)',
    optionsData: [
      {
        text: 'A) Name und Vorname der Wachperson, Lichtbild sowie Name und Anschrift des Gewerbetreibenden.',
        ru: 'Имя и фамилия охранника, фотография, а также наименование и адрес охранного предприятия.',
        en: 'First and last name of the guard, photograph, as well as business name and address of the security firm.',
        ar: 'الاسم الأول واسم العائلة لحارس الأمن، الصورة الشخصية، بالإضافة إلى اسم وعنوان شركة الحراسة.',
        fa: 'نام و نام خانوادگی نگهبان، عکس پرسنلی و همچنین نام و نشانی شرکت حراست.'
      },
      {
        text: 'B) Die Bewacherregister-Identifikationsnummer (BewR-ID) der Wachperson und des Gewerbebetriebs.',
        ru: 'Идентификационный номер в реестре (BewR-ID) охранника и предприятия.',
        en: 'The Guarding Register ID numbers (BewR-ID) of both the security guard and the security business.',
        ar: 'رقم الهوية التعريفي في سجل الحراسة (BewR-ID) للحارس وللشركة المشغلة.',
        fa: 'شماره شناسه ثبت سامانه نگهبانی (BewR-ID) متعلق به نگهبان و شرکت تجاری مربوطه.'
      },
      {
        text: 'C) Die private Wohnanschrift und Kontoverbindung der Wachperson.',
        ru: 'Личный домашний адрес и банковские реквизиты охранника.',
        en: 'Private home residential address and bank account details of the guard.',
        ar: 'عنوان السكن الشخصي ورقم الحساب البنكي لحارس الأمن.',
        fa: 'نشانی منزل مسکونی شخصی و اطلاعات حساب بانکی نگهبان.'
      },
      {
        text: 'D) Die Noten des Schulabschlusszeugnisses.',
        ru: 'Оценки из школьного аттестата.',
        en: 'School graduation grades and certificate transcripts.',
        ar: 'درجات الشهادة المدرسية الثانوية.',
        fa: 'نمرات کارنامه فارغ‌التحصیلی دوران مدرسه.'
      }
    ],
    korrekteAntworten: [0, 1],
    punkte: 2,
    erklaerung: 'Dienstausweis nach § 18 BewachV: Name, Foto, Arbeitgeberdaten und BewR-ID. Private Daten (Wohnadresse) dürfen zum Schutz der Wachperson nicht auf dem Ausweis stehen!',
    translations: {
      ru: {
        question: 'Какие данные должно содержать служебное удостоверение охранника согласно § 18 BewachV? (Выберите 2 ответа)',
        explanation: 'Удостоверение содержит ФИО, фото, данные работодателя и BewR-ID. Личный адрес указывать запрещено для защиты охранника.'
      },
      en: {
        question: 'Which details must a security guard\'s service ID card contain under Section 18 BewachV? (Choose two correct answers)',
        explanation: 'Service ID (§ 18 BewachV): name, photo, employer data, and BewR-ID. Private home addresses are strictly excluded for safety.'
      },
      ar: {
        question: 'ما هي البيانات التي يجب أن تتضمنها بطاقة هوية حارس الأمن وفقاً للمادة 18 من BewachV؟ (اختر إجابتين صحيحتين)',
        explanation: 'بطاقة الخدمة: الاسم، الصورة، بيانات الشركة ورقم BewR-ID. وتُحظر كتابة العنوان الشخصي لحماية رجل الأمن.'
      },
      fa: {
        question: 'کارت شناسایی نگهبان طبق بند ۱۸ BewachV باید شامل چه اطلاعاتی باشد؟ (دو پاسخ صحیح)',
        explanation: 'کارت خدمت: نام، عکس، مشخصات شرکت و کد BewR-ID. نشانی شخصی برای حفظ امنیت نگهبان نباید درج شود.'
      }
    }
  })
];
