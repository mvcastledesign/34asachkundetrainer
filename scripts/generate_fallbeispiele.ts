import fs from 'fs';
import path from 'path';

const fallbeispieleData = [
  {
    id: "fall_01",
    title: "Der Verdacht an der Kasse",
    question: "Du arbeitest als Sicherheitskraft in einem Elektrofachmarkt. Ein Kunde läuft auffällig nervös durch die Abteilungen. Beim Verlassen des Ladens löst die Warensicherungsanlage Alarm aus. Der Kunde geht stur weiter. Du versperrst ihm den Weg und forderst ihn auf, stehenzubleiben. Er ruft: 'Lassen Sie mich durch, Sie haben mir gar nichts zu sagen, das ist Nötigung!' Welche rechtliche Würdigung deines Handelns trifft zu?",
    correct: 1,
    explanation: "Der Alarm begründet den dringenden Verdacht einer frischen Tat (§ 127 Abs. 1 StPO). Da der Kunde flüchten will, ist das Festhalten/Wegversperren gerechtfertigt.",
    translations: {
      en: {
        title: "Suspicion at the Checkout",
        question: "You work as security in an electronics store. A customer walks nervously through the aisles. As he exits, the electronic article surveillance alarm triggers. The customer continues walking briskly. You block his path and tell him to stop. He shouts: 'Let me through, you have no authority over me, this is coercion!' Which legal assessment of your action is correct?",
        explanation: "The alarm triggers urgent suspicion of a crime caught in the act (§ 127 (1) StPO). Since the customer attempts to flee, blocking/holding him is justified."
      },
      ru: {
        title: "Подозрение на кассе",
        question: "Вы работаете охранником в магазине электроники. Покупатель нервно ходит по отделам. При выходе срабатывает сигнализация. Покупатель ускоряет шаг. Вы преграждаете ему путь и требуете остановиться. Он кричит: 'Пропустите меня, у вас нет прав, это принуждение!' Какова правильная юридическая оценка ваших действий?",
        explanation: "Срабатывание сигнализации дает обоснованное подозрение в преступлении на месте (§ 127 ч. 1 StPO). Преграждение пути правомерно из-за риска побега."
      },
      ar: {
        title: "الاشتباه عند صناديق الدفع",
        question: "أنت تعمل كحارس أمن في متجر إلكترونيات. يتجول أحد الزبائن بتوتر ملحوظ. عند مغادرة المتجر ينطلق جرس إنذار سرقة البضائع. يواصل الزبون سيره بعناد. تقف في طريقه وتطلب منه التوقف. يصرخ: 'دعني أمر، ليس لك أي سلطة علي، هذا إكراه!' ما هو التكييف القانوني الصحيح لتصرفك؟",
        explanation: "انطلاق الإنذار يبرر الاشتباه القوي في التلبس بجريمة (§ 127 الفقرة 1 StPO). ونظراً لمحاولته الفرار، فإن اعتراض طريقه مبرر قانوناً."
      },
      fa: {
        title: "مظنون در گیت خروجی فروشگاه",
        question: "شما به عنوان نیروی حراست در یک فروشگاه لوازم الکترونیکی مشغول به کارید. مشتری مضطرب در بخش‌ها تردد می‌کند. هنگام خروج، دزدگیر به صدا درمی‌آید. مشتری به سرعت به راه خود ادامه می‌دهد. شما مسیر او را مسدود کرده و تقاضای توقف می‌کنید. او فریاد می‌زند: 'راه را باز کنید، شما هیچ حقی ندارید، این اجبار و زورگویی است!' ارزیابی حقوقی اقدام شما کدام است؟",
        explanation: "به صدا درآمدن دزدگیر ظن قوی بر ارتکاب جرم مشهود ایجاد می‌کند (§ 127 بند ۱ StPO). به دلیل قصد فرار، سد معبر و نگه داشتن متهم مجاز است."
      }
    },
    options: [
      "A) Dein Handeln ist rechtswidrig und stellt eine strafbare Nötigung (§ 240 StGB) dar, da der Alarm ein bloßer technischer Hinweis ist und keine Straftat beweist.",
      "B) Dein Handeln ist nach § 127 Abs. 1 StPO (vorläufige Festnahme) gerechtfertigt, da der Auslöser der Warnanlage das Vorliegen einer frischen Tat indiziert und Fluchtgefahr besteht.",
      "C) Dein Handeln ist nach § 32 StGB (Notwehr) gerechtfertigt, da der Kunde durch das Weitergehen das Eigentum des Ladens angreift.",
      "D) Dein Handeln ist nur dann rechtmäßig, wenn du den Kunden zuvor ausdrücklich nach § 136 StPO über sein Aussageverweigerungsrecht belehrt hast."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Dein Handeln ist rechtswidrig und stellt eine strafbare Nötigung (§ 240 StGB) dar, da der Alarm ein bloßer technischer Hinweis ist und keine Straftat beweist.",
        translations: {
          en: "Your action is unlawful and constitutes criminal coercion, as the alarm is a mere technical indicator and does not prove a crime.",
          ru: "Ваши действия незаконны и являются принуждением, так как сигнализация — лишь технический сигнал и не доказывает преступления.",
          ar: "تصرفك غير قانوني ويشكل إكراهاً معاقباً عليه، لأن الإنذار مجرد إشارة فنية ولا يثبت وقوع جريمة.",
          fa: "اقدام شما غیرقانونی و مصداق اجبار و زورگویی است، زیرا آژیر صرفاً نشانه فنی است و جرمی را اثبات نمی‌کند."
        }
      },
      {
        id: "b",
        text: "Dein Handeln ist nach § 127 Abs. 1 StPO (vorläufige Festnahme) gerechtfertigt, da der Auslöser der Warnanlage das Vorliegen einer frischen Tat indiziert und Fluchtgefahr besteht.",
        translations: {
          en: "Your action is justified under § 127 (1) StPO (provisional apprehension), as the triggered alarm indicates a crime in the act and flight risk exists.",
          ru: "Ваши действия правомерны по § 127 ч. 1 StPO (задержание), так как сигнализация указывает на преступление на месте и есть риск побега.",
          ar: "تصرفك مبرر بموجب المادة 127 الفقرة 1 StPO (التوقيف المؤقت)، لأن الإنذار يدل على تلبس بالجريمة وهناك خطر فرار.",
          fa: "اقدام شما طبق بند ۱ ماده ۱۲۷ آیین دادرسی کیفری (بازداشت موقت) موجه است، زیرا آژیر نشانه جرم مشهود بوده و خطر فرار وجود دارد."
        }
      },
      {
        id: "c",
        text: "Dein Handeln ist nach § 32 StGB (Notwehr) gerechtfertigt, da der Kunde durch das Weitergehen das Eigentum des Ladens angreift.",
        translations: {
          en: "Your action is justified as self-defense (§ 32 StGB), because the customer's walking away attacks store property.",
          ru: "Ваши действия оправданы необходимой обороной (§ 32 StGB), так как уход покупателя является нападением на собственность.",
          ar: "تصرفك مبرر كدفاع شرعي بموجب المادة 32 StGB، لأن مواصلة الزبون السير اعتداء على ملكية المتجر.",
          fa: "اقدام شما به عنوان دفاع مشروع موجه است، زیرا ادامه حرکت مشتری حمله به مالکیت فروشگاه است."
        }
      },
      {
        id: "d",
        text: "Dein Handeln ist nur dann rechtmäßig, wenn du den Kunden zuvor ausdrücklich nach § 136 StPO über sein Aussageverweigerungsrecht belehrt hast.",
        translations: {
          en: "Your action is only lawful if you previously instructed the customer on his right to remain silent under § 136 StPO.",
          ru: "Ваши действия законны, только если вы предварительно разъяснили клиенту право не свидетельствовать против себя.",
          ar: "يكون تصرفك قانونياً فقط إذا قمت مسبقاً بتنبيه الزبون إلى حقه في التزام الصمت.",
          fa: "اقدام شما تنها در صورتی قانونی است که قبلاً به مشتری درباره حق سکوت تذکر داده باشید."
        }
      }
    ]
  },
  {
    id: "fall_02",
    title: "Der freilaufende Hund",
    question: "Auf deiner Nachtstreife im Industriepark kommt plötzlich ein nicht angeleinter, großer Wachhund des Nachbargrundstücks durch eine Lücke im Zaun auf dich zugerannt. Der Hund knurrt furchterregend und setzt zum Sprung an. Du setzt deinen Abwehrspray/Schlagstock ein und verletzt den Hund. Auf welche Rechtfertigungsgrundlage stützt du deine Handlung rechtlich korrekt?",
    correct: 2,
    explanation: "Notwehr gilt im Gesetz NUR gegen menschliche Angriffe. Tiere gelten zivilrechtlich als Sachen – da die Gefahr vom Hund selbst ausging, greift der Defensivnotstand (§ 228 BGB).",
    translations: {
      en: {
        title: "The Free-Roaming Guard Dog",
        question: "During your night patrol in an industrial park, an unleashed large guard dog from an adjacent property charges at you through a gap in the fence. The dog growls ferociously and leaps. You deploy your defensive spray/baton, injuring the dog. On which legal justification do you correctly base your defense?",
        explanation: "Self-defense in German law applies ONLY against human attacks. Animals are treated civilly as property—since the danger stemmed from the dog itself, defensive necessity (§ 228 BGB) applies."
      },
      ru: {
        title: "Свободно бегущая сторожевая собака",
        question: "Во время ночного патрулирования в промзоне крупная сторожевая собака с соседнего участка выбегает через дыру в заборе и бросается на вас с рычанием. Вы применяете баллончик/дубинку и раните собаку. Каково правильное правовое основание для ваших действий?",
        explanation: "Необходимая оборона возможна ТОЛЬКО против человека. Животные приравниваются к вещам — применяется оборонительная крайняя необходимость (§ 228 BGB)."
      },
      ar: {
        title: "كلب الحراسة الطليق",
        question: "أثناء دوريتك الليلية في منطقة صناعية، يركض نحوك فجأة كلب حراسة ضخم غير مربوط من العقار المجاور عبر ثغرة في السياج ويستعد للهجوم. تستخدم رذاذ الدفاع/الهراوة وتصيب الكلب. ما هو السند القانوني الصحيح لتبرير تصرفك؟",
        explanation: "الدفاع الشرعي في القانون يسري فقط ضد اعتداء الإنسان. تعامل الحيوانات كأشياء — تطبق حالة الضرورة الدفاعية (§ 228 BGB)."
      },
      fa: {
        title: "سگ نگهبان رها شده",
        question: "در گشت شبانه در شهرک صنعتی، ناگهان یک سگ نگهبان بزرگ بدون قلاده از طریق شکاف فنس به سمت شما هجوم می‌آورد و آماده پرش می‌شود. شما با اسپری دفاعی/باتوم به سگ آسیب می‌زنید. مبنای توجیه‌کننده اقدام شما از نظر حقوقی چیست؟",
        explanation: "دفاع مشروع در قانون صرفاً علیه حملات انسانی است. حیوانات در حقوق مدنی در حکم اشیاء هستند؛ لذا اضطرار تدافعی (§ 228 BGB) حاکم است."
      }
    },
    options: [
      "A) Notwehr nach § 32 StGB, da ein Notstand gegen Tiere nicht existiert.",
      "B) Notwehr nach § 227 BGB, da Angriffe von Tieren immer als menschliche Angriffe gewertet werden.",
      "C) Defensivnotstand nach § 228 BGB, da die Gefahr von einer fremden Sache (dem Tier) ausging und das Mittel zur Abwehr erforderlich war.",
      "D) Aggressivnotstand nach § 904 BGB, da eine unbeteiligte Sache beschädigt wurde."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Notwehr nach § 32 StGB, da ein Notstand gegen Tiere nicht existiert.",
        translations: {
          en: "Self-defense under § 32 StGB, because emergency necessity against animals does not exist.",
          ru: "Необходимая оборона по § 32 StGB, так как крайней необходимости против животных не существует.",
          ar: "دفاع شرعي بموجب المادة 32 StGB، لعدم وجود حالة ضرورة ضد الحيوانات.",
          fa: "دفاع مشروع طبق ماده ۳۲، زیرا اضطرار در برابر حیوانات وجود ندارد."
        }
      },
      {
        id: "b",
        text: "Notwehr nach § 227 BGB, da Angriffe von Tieren immer als menschliche Angriffe gewertet werden.",
        translations: {
          en: "Self-defense under § 227 BGB, because animal attacks are always deemed human attacks.",
          ru: "Необходимая оборона по § 227 BGB, так как нападение животных приравнивается к нападению человека.",
          ar: "دفاع شرعي بموجب المادة 227 BGB، لأن هجوم الحيوانات يعامل كهجوم بشري دائماً.",
          fa: "دفاع مشروع مدنی، زیرا حمله حیوانات همیشه حمله انسانی تلقی می‌شود."
        }
      },
      {
        id: "c",
        text: "Defensivnotstand nach § 228 BGB, da die Gefahr von einer fremden Sache (dem Tier) ausging und das Mittel zur Abwehr erforderlich war.",
        translations: {
          en: "Defensive necessity under § 228 BGB, since danger originated from another's property (the animal) and the measure was necessary for defense.",
          ru: "Оборонительная крайняя необходимость по § 228 BGB, так как опасность исходила от чужой вещи (животного) и меры были необходимы.",
          ar: "حالة ضرورة دفاعية بموجب المادة 228 BGB، لأن الخطر نبع من مال الغير (الحيوان) وكانت الوسيلة لازمة لدفع الخطر.",
          fa: "اضطرار تدافعی طبق ماده ۲۲۸، زیرا خطر از خود شیء متعلق به غیر (حیوان) ناشی شده و اقدام برای دفع آن لازم بوده است."
        }
      },
      {
        id: "d",
        text: "Aggressivnotstand nach § 904 BGB, da eine unbeteiligte Sache beschädigt wurde.",
        translations: {
          en: "Aggressive necessity under § 904 BGB, because uninvolved property was damaged.",
          ru: "Агрессивная крайняя необходимость по § 904 BGB, так как повреждена непричастная вещь.",
          ar: "حالة ضرورة هجومية بموجب المادة 904 BGB، لأن مالاً غير متورط تعرض للإتلاف.",
          fa: "اضطرار تهاجمی طبق ماده ۹۰۴، زیرا به شیء بی‌طرف آسیب وارد شده است."
        }
      }
    ]
  },
  {
    id: "fall_03",
    title: "Der uneinsichtige Diskogast",
    question: "Vor einer Diskothek erteilt der Türsteher (im Auftrag des Betreibers) einem stark alkoholisierten Gast ein mündliches Hausverbot. Der Gast lacht, schubst den Türsteher zur Seite und geht einfach an ihm vorbei in den Eingangsbereich. Welche Handlung der Sicherheitskraft ist rechtlich gedeckt?",
    correct: 0,
    explanation: "Das Betreten trotz Hausverbots ist verbotene Eigenmacht. Die Sicherheitskraft darf den Gast im Wege der Besitzwehr (§ 859 BGB) verdrängen.",
    translations: {
      en: {
        title: "The Intoxicated Club Guest",
        question: "In front of a nightclub, the bouncer (on behalf of the operator) issues a verbal trespass ban to a heavily intoxicated guest. The guest laughs, shoves the bouncer aside, and walks past into the entrance. Which action by security is legally covered?",
        explanation: "Entering despite a trespass ban constitutes unlawful interference. Security may repel the guest using defense of possession (§ 859 BGB)."
      },
      ru: {
        title: "Упрямый гость клуба",
        question: "Перед клубом охранник устно запрещает вход сильно пьяному гостю. Гость смеется, отталкивает охранника и проходит внутрь. Какое действие службы охраны законно?",
        explanation: "Вход вопреки запрету является самоуправством. Охранник вправе выдворить нарушителя в порядке защиты владения (§ 859 BGB)."
      },
      ar: {
        title: "زبون الملهى المتعنت",
        question: "أمام ملهى ليلي، يصدر الحارس حظر دخول شفهي لزبون مخمور جداً. يضحك الزبون، ويدفع الحارس جانباً ويدخل المدخل. ما هو التصرف المبرر قانوناً لحارس الأمن؟",
        explanation: "الدخول رغم الحظر يعد عملاً غير مشروع. يحق للحارس إخراج الزبون بالدفاع عن الحيازة (§ 859 BGB)."
      },
      fa: {
        title: "مشتری سرکش کلوب",
        question: "جلوی ورودی کلوب، نگهبان به یک مهمان بسیار مست دستور شفاهی ممنوعیت ورود می‌دهد. مهمان می‌خندد، نگهبان را هل می‌دهد و وارد سالن ورودی می‌شود. کدام اقدام نگهبان از نظر قانونی مجاز است؟",
        explanation: "ورود با وجود ممنوعیت، تصرف غیرقانونی است. نگهبان مجاز است با دفاع از تصرف (§ 859 BGB) او را به بیرون هدایت کند."
      }
    },
    options: [
      "A) Der Türsteher darf den Gast im Rahmen der Besitzwehr (§ 859 Abs. 1 BGB) mit angemessener körperlicher Gewalt daran hindern, weiter einzudringen, und ihn vom Grundstück verdrängen.",
      "B) Der Türsteher darf den Gast nur dann anfassend verdrängen, wenn der Gast zuvor eine Sachbeschädigung begangen hat.",
      "C) Der Türsteher darf den Gast nur im Rahmen des Notwehrrechts nach § 32 StGB abwehren, wenn der Gast ihn zuvor körperlich verletzt hat.",
      "D) Der Türsteher hat keinerlei Rechte und muss zwingend auf das Eintreffen der Polizei warten."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Der Türsteher darf den Gast im Rahmen der Besitzwehr (§ 859 Abs. 1 BGB) mit angemessener körperlicher Gewalt daran hindern, weiter einzudringen, und ihn vom Grundstück verdrängen.",
        translations: {
          en: "The bouncer may prevent the guest from penetrating further using reasonable physical force under defense of possession (§ 859 (1) BGB) and expel him from premises.",
          ru: "Охранник вправе применить соразмерную силу для защиты владения (§ 859 ч. 1 BGB) и выдворить гостя с территории.",
          ar: "يجوز للحارس منع الزبون بالقوة الجسدية المناسبة في إطار الدفاع عن الحيازة (§ 859 الفقرة 1 BGB) وطرده من المكان.",
          fa: "نگهبان مجاز است در چارچوب دفاع از تصرف (§ 859 بند ۱ BGB) با اعمال زور فیزیکی متناسب مانع از ورود او شده و وی را به بیرون براند."
        }
      },
      {
        id: "b",
        text: "Der Türsteher darf den Gast nur dann anfassend verdrängen, wenn der Gast zuvor eine Sachbeschädigung begangen hat.",
        translations: {
          en: "The bouncer may only touch and push the guest if property damage was committed beforehand.",
          ru: "Охранник может применить силу, только если гость совершил повреждение имущества.",
          ar: "لا يجوز للحارس لمس الزبون إلا إذا ارتكب إتلافاً للممتلكات مسبقاً.",
          fa: "نگهبان تنها در صورتی مجاز به مداخله فیزیکی است که قبلاً تخریب مالی صورت گرفته باشد."
        }
      },
      {
        id: "c",
        text: "Der Türsteher darf den Gast nur im Rahmen des Notwehrrechts nach § 32 StGB abwehren, wenn der Gast ihn zuvor körperlich verletzt hat.",
        translations: {
          en: "The bouncer may only defend under self-defense (§ 32 StGB) if physical injury already occurred.",
          ru: "Охранник может действовать только по самообороне (§ 32 StGB), если ему уже нанесены травмы.",
          ar: "يجوز للحارس الدفاع فقط وفقاً للدفاع الشرعي إذا أصيب جسدياً مسبقاً.",
          fa: "نگهبان تنها در چارچوب دفاع مشروع در صورت آسیب بدنی مجاز به اقدام است."
        }
      },
      {
        id: "d",
        text: "Der Türsteher hat keinerlei Rechte und muss zwingend auf das Eintreffen der Polizei warten.",
        translations: {
          en: "The bouncer has no rights whatsoever and must wait exclusively for police arrival.",
          ru: "Охранник не имеет никаких прав и обязан ждать полицию.",
          ar: "لا يملك الحارس أي حقوق ويجب عليه انتظار الشرطة.",
          fa: "نگهبان هیچ اختیاری ندارد و باید منتظر پلیس بماند."
        }
      }
    ]
  },
  {
    id: "fall_04",
    title: "Die verweigerte Taschendurchsuchung",
    question: "Bei einer Einlasskontrolle zu einem Konzert steht in den AGB: 'Taschenkontrollen sind Pflicht'. Ein Besucher weigert sich, seine Tasche zu öffnen. Der Sicherheitsmitarbeiter greift nach der Tasche, reißt sie dem Besucher aus der Hand und durchsucht sie gegen dessen Willen. Wie ist das Verhalten des Sicherheitsmitarbeiters rechtlich zu bewerten?",
    correct: 1,
    explanation: "Private Sicherheitskräfte haben KEIN Zwangsdurchsuchungsrecht. Wenn ein Gast die Kontrolle verweigert, darf ihm nur der Zutritt verwehrt werden.",
    translations: {
      en: {
        title: "The Refused Bag Search",
        question: "At concert entry control, terms state: 'Bag searches are mandatory'. A visitor refuses to open his bag. The security guard grabs the bag, snatches it from the visitor's hands, and searches it against his will. How is the security guard's conduct assessed under the law?",
        explanation: "Private security personnel have NO right of involuntary physical search. If a guest refuses search, security may only deny entry."
      },
      ru: {
        title: "Отказ от досмотра сумки",
        question: "На входе на концерт в правилах указано: 'Досмотр сумок обязателен'. Посетитель отказывается открыть сумку. Охранник вырывает сумку из рук и обыскивает против воли. Как оценить действия охранника с точки зрения права?",
        explanation: "Частная охрана НЕ имеет права принудительного обыска. При отказе разрешено лишь отказать во входе."
      },
      ar: {
        title: "رفض تفتيش الحقيبة",
        question: "عند مدخل حفل موسيقي تنص الشروط على إلزامية تفتيش الحقائب. يرفض زائر فتح حقيبته. ينتزع الحارس الحقيبة من يده ويفتشها رغماً عنه. كيف يقيم تصرف الحارس قانوناً؟",
        explanation: "لا يملك حراس الأمن حق التفتيش الإجباري. في حال الرفض يحق لهم فقط منع الدخول."
      },
      fa: {
        title: "امتناع از بازرسی کیف",
        question: "در گیت ورودی کنسرت درج شده: 'بازرسی کیف الزامی است'. تماشاگری از گشودن کیف خودداری می‌کند. نگهبان کیف را به زور از دست وی کشیده و تفتیش می‌کند. ارزیابی حقوقی رفتار نگهبان چیست؟",
        explanation: "نیروهای حراست حق تفتیش اجباری ندارند. در صورت امتناع، تنها می‌توان از ورود فرد ممانعت کرد."
      }
    },
    options: [
      "A) Das Handeln war rechtmäßig, da die AGB das Zwangsdurchsuchungsrecht auf das Sicherheitspersonal übertragen.",
      "B) Das Handeln war rechtswidrig und stellt eine strafbare Nötigung (§ 240 StGB) bzw. verbotene Eigenmacht dar; das Personal hätte lediglich den Zutritt verweigern dürfen.",
      "C) Das Handeln war nach § 127 StPO gedeckt, da das Weigern automatisch einen Diebstahlsverdacht begründet.",
      "D) Das Handeln war nach § 34 StGB (Notstand) gedeckt, um die Sicherheit der Veranstaltung zu gewährleisten."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Das Handeln war rechtmäßig, da die AGB das Zwangsdurchsuchungsrecht auf das Sicherheitspersonal übertragen.",
        translations: {
          en: "The action was lawful because the terms transfer coercive search powers to security.",
          ru: "Действие законно, так как правила передают право принудительного обыска охране.",
          ar: "التصرف قانوني لأن شروط الحفل تنقل حق التفتيش الإجباري لحراس الأمن.",
          fa: "اقدام قانونی بوده زیرا شرایط عمومی حق تفتیش اجباری را به حراست منتقل می‌کند."
        }
      },
      {
        id: "b",
        text: "Das Handeln war rechtswidrig und stellt eine strafbare Nötigung (§ 240 StGB) bzw. verbotene Eigenmacht dar; das Personal hätte lediglich den Zutritt verweigern dürfen.",
        translations: {
          en: "The action was unlawful and constitutes criminal coercion (§ 240 StGB) and unlawful self-assertion; staff could only deny entry.",
          ru: "Действие незаконно и является принуждением (§ 240 StGB) и самоуправством; персонал вправе лишь отказать во входе.",
          ar: "التصرف غير مشروع ويشكل إكراهاً جنائياً وعملاً محظوراً؛ وكان الواجب فقط منع دخوله.",
          fa: "اقدام غیرقانونی و مصداق اجبار و زورگویی و تصرف عدوانی است؛ پرسنل صرفاً مجاز به جلوگیری از ورود بودند."
        }
      },
      {
        id: "c",
        text: "Das Handeln war nach § 127 StPO gedeckt, da das Weigern automatisch einen Diebstahlsverdacht begründet.",
        translations: {
          en: "The action was covered under § 127 StPO as refusal automatically creates suspicion of theft.",
          ru: "Действие законно по § 127 StPO, так как отказ создает подозрение в краже.",
          ar: "التصرف مبرر بالمادة 127 StPO لأن الرفض ينشئ اشتباهاً تلقائياً بالسرقة.",
          fa: "اقدام طبق ماده ۱۲۷ موجه است زیرا امتناع نشان‌دهنده ظن به سرقت است."
        }
      },
      {
        id: "d",
        text: "Das Handeln war nach § 34 StGB (Notstand) gedeckt, um die Sicherheit der Veranstaltung zu gewährleisten.",
        translations: {
          en: "The action was covered under necessity (§ 34 StGB) to ensure event safety.",
          ru: "Действие оправдано крайней необходимостью (§ 34 StGB) для безопасности мероприятия.",
          ar: "التصرف مبرر بحالة الضرورة (§ 34 StGB) لضمان أمان الفعالية.",
          fa: "اقدام طبق حالت اضطرار برای تضمین امنیت مراسم مجاز بوده است."
        }
      }
    ]
  },
  {
    id: "fall_05",
    title: "Sachbeschädigung am Zaun",
    question: "Während eines Fußballspiels zieht ein Fan eine Sprühdose und beginnt, das Vereinslogo des Gegners auf die Trennwand im Stadion zu sprühen. Du siehst das aus 5 Metern Entfernung. Der Fan bemerkt dich, lässt die Dose fallen und rennt in Richtung Ausgang. Du sprintest hinterher und hältst ihn fest. Ist das Festhalten rechtmäßig?",
    correct: 0,
    explanation: "Sachbeschädigung ist eine Straftat (§ 303 StGB). Da der Täter flüchte, greift das Festnahmerecht nach § 127 Abs. 1 StPO.",
    translations: {
      en: {
        title: "Property Damage on the Stadium Wall",
        question: "During a football match, a supporter pulls out a spray can and begins spraying graffiti on a stadium barrier wall. You observe this from 5 meters away. The fan notices you, drops the can, and bolts toward the exit. You sprint after him and hold him. Is this physical detention lawful?",
        explanation: "Property damage is a criminal offense (§ 303 StGB). Since the perpetrator fled, citizen's arrest (§ 127 (1) StPO) applies."
      },
      ru: {
        title: "Повреждение стены стадиона",
        question: "Во время футбольного матча фанат начинает распылять граффити на перегородку стадиона. Вы видите это с 5 метров. Заметив вас, он бросает баллончик и бежит к выходу. Вы догоняете и удерживаете его. Законно ли задержание?",
        explanation: "Повреждение имущества — уголовное преступление (§ 303 StGB). Из-за побега применяется задержание по § 127 ч. 1 StPO."
      },
      ar: {
        title: "إتلاف جدار الملعب",
        question: "أثناء مباراة كرة قدم، يخرج أحد المشجعين بخاخ طلاء ويبدأ في رش رسومات على الجدار الفاصل. تشاهد ذلك من مسافة 5 أمتار. يراك المشجع، فيرمي البخاخ ويركض نحو المخرج. تركض خلفه وتمسكه. هل احتجازه قانوني؟",
        explanation: "إتلاف الممتلكات جريمة جنائية (§ 303 StGB). وبسبب فراره، ينطبق حق التوقيف بموجب المادة 127 الفقرة 1 StPO."
      },
      fa: {
        title: "تخریب دیوار استادیوم",
        question: "در حین مسابقه فوتبال، تماشاگری با اسپری شروع به رنگ‌آمیزی دیوار حائل می‌کند. شما از فاصله ۵ متری مشاهده می‌کنید. وی با دیدن شما قوطی را انداخته و به سمت خروجی فرار می‌کند. شما او را تعقیب کرده و متوقف می‌کنید. آیا بازداشت وی قانونی است؟",
        explanation: "تخریب اموال جرم است (§ 303 StGB). به دلیل فرار متهم، حق بازداشت موقت طبق ماده ۱۲۷ بند ۱ آیین دادرسی حاکم است."
      }
    },
    options: [
      "A) Ja, nach § 127 Abs. 1 StPO, da der Fan bei einer Straftat (Sachbeschädigung § 303 StGB) auf frischer Tat betroffen wurde und Fluchtverdacht besteht.",
      "B) Nein, da eine Sachbeschädigung nur eine Ordnungswidrigkeit ist und Festhalten erst ab schweren Verbrechensdelikten erlaubt ist.",
      "C) Ja, aber nur wenn der Sicherheitsmitarbeiter gleichzeitig Polizeibeamter im Nebenamt ist.",
      "D) Nein, da der Fan die Tat abgebrochen hat und somit Straffreiheit genießt."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Ja, nach § 127 Abs. 1 StPO, da der Fan bei einer Straftat (Sachbeschädigung § 303 StGB) auf frischer Tat betroffen wurde und Fluchtverdacht besteht.",
        translations: {
          en: "Yes, under § 127 (1) StPO, since the fan was caught in the act of committing a crime (property damage § 303 StGB) and flight risk exists.",
          ru: "Да, по § 127 ч. 1 StPO, так как фанат застигнут на месте преступления (§ 303 StGB) и есть риск побега.",
          ar: "نعم، بموجب المادة 127 الفقرة 1 StPO، لضبطه متلبساً بجريمة إتلاف ممتلكات (§ 303 StGB) مع وجود خطر الفرار.",
          fa: "بله، طبق بند ۱ ماده ۱۲۷، زیرا فرد در حین ارتکاب جرم تخریب اموال (§ 303 StGB) مشاهده شده و خطر فرار وجود دارد."
        }
      },
      {
        id: "b",
        text: "Nein, da eine Sachbeschädigung nur eine Ordnungswidrigkeit ist und Festhalten erst ab schweren Verbrechensdelikten erlaubt ist.",
        translations: {
          en: "No, because property damage is only a minor administrative offense and detention is only allowed for felonies.",
          ru: "Нет, так как это лишь административное правонарушение.",
          ar: "لا، لأن إتلاف الممتلكات مجرد مخالفة إدارية.",
          fa: "خیر، زیرا تخریب اموال صرفاً یک تخلف اداری است."
        }
      },
      {
        id: "c",
        text: "Ja, aber nur wenn der Sicherheitsmitarbeiter gleichzeitig Polizeibeamter im Nebenamt ist.",
        translations: {
          en: "Yes, but only if the security guard is simultaneously an auxiliary police officer.",
          ru: "Да, но только если охранник одновременно является полицейским.",
          ar: "نعم، ولكن فقط إذا كان الحارس رجل شرطة إضافي.",
          fa: "بله، اما فقط در صورتی که نگهبان همزمان افسر پلیس باشد."
        }
      },
      {
        id: "d",
        text: "Nein, da der Fan die Tat abgebrochen hat und somit Straffreiheit genießt.",
        translations: {
          en: "No, because the fan aborted the act and therefore enjoys immunity.",
          ru: "Нет, так как фанат прекратил действие и освобождается от ответственности.",
          ar: "لا، لأن المشجع أوقف الفعل وبالتالي يعفى من العقوبة.",
          fa: "خیر، زیرا فرد از ادامه جرم منصرف شده و معاف است."
        }
      }
    ]
  },
  {
    id: "fall_06",
    title: "Die gefundene Geldbörse",
    question: "Bei der Nachtstreife im Bürogebäude findest du auf einem Gang eine Geldbörse mit 500 € Bargeld. Du nimmst sie an dich, steckst sie in deine Dienstkleidung und beschließt, das Geld zu behalten. Welchen Straftatbestand hast du vollendet?",
    correct: 1,
    explanation: "Achtung Prüfungsfalle! Eine verlorene Sache steht nicht mehr unter fremdem Gewahrsam. Deshalb ist es KEIN Diebstahl, sondern eine Unterschlagung (§ 246 StGB).",
    translations: {
      en: {
        title: "The Found Wallet",
        question: "During a night patrol in an office building, you find a wallet with €500 cash in a hallway. You pick it up, put it in your uniform pocket, and decide to keep the money. Which criminal offense have you consummated?",
        explanation: "Exam trap! A lost item is no longer in someone else's direct custody. Therefore it is NOT theft, but embezzlement/misappropriation (§ 246 StGB)."
      },
      ru: {
        title: "Найденный кошелек",
        question: "Во время ночного обхода в офисном здании вы находите в коридоре кошелек с 500 евро. Вы кладете его в карман и решаете оставить деньги себе. Какой состав преступления вы окончили?",
        explanation: "Экзаменационная ловушка! Потерянная вещь не находится в чужом непосредственном ведении. Это НЕ кража, а присвоение (§ 246 StGB)."
      },
      ar: {
        title: "المحفظة المعثور عليها",
        question: "أثناء دوريتك الليلية في مبنى مكاتب، تجد في الممر محفظة بها 500 يورو نقداً. تأخذها وتضعها في جيبك وتقرر الاحتفاظ بالمال. ما هي الجريمة المكتملة في هذا التصرف؟",
        explanation: "فخ امتحاني! الشيء المفقود لم يعد في حيازة الغير المباشرة، لذا فالجريمة ليست سرقة بل خيانة أمانة واختلاس (§ 246 StGB)."
      },
      fa: {
        title: "کیف پول پیدا شده",
        question: "در گشت شبانه در ساختمان اداری، در راهرو کیف پولی با ۵۰۰ یورو پیدا می‌کنید. آن را برداشته در جیب می‌گذارید و تصمیم به تصاحب آن می‌گیرید. کدام جرم کیفری محقق شده است؟",
        explanation: "نکته امتحانی! مال گم‌شده در تصرف مستقیم دیگری نیست؛ بنابراین سرقت نبوده بلکه خیانت در امانت و تصاحب غیرقانونی (§ 246 StGB) است."
      }
    },
    options: [
      "A) Diebstahl (§ 242 StGB), da du die Börse entwendet hast.",
      "B) Unterschlagung (§ 246 StGB), da die Sache verloren war und somit fremder Gewahrsam bereits aufgehoben war.",
      "C) Raub (§ 249 StGB), weil du im Dienst gehandelt hast.",
      "D) Betrug (§ 263 StGB) gegenüber deinem Arbeitgeber."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Diebstahl (§ 242 StGB), da du die Börse entwendet hast.",
        translations: {
          en: "Theft (§ 242 StGB), because you took away the wallet.",
          ru: "Кража (§ 242 StGB), так как вы похитили кошелек.",
          ar: "سرقة (§ 242 StGB) لأنك أخذت المحفظة.",
          fa: "سرقت (§ 242 StGB) زیرا کیف را تصاحب کردید."
        }
      },
      {
        id: "b",
        text: "Unterschlagung (§ 246 StGB), da die Sache verloren war und somit fremder Gewahrsam bereits aufgehoben war.",
        translations: {
          en: "Embezzlement / Misappropriation (§ 246 StGB), because the item was lost and prior custody was already broken.",
          ru: "Присвоение имущества (§ 246 StGB), так как вещь была потеряна и чужое владение прекратилось.",
          ar: "خيانة أمانة / اختلاس (§ 246 StGB) لأن الشيء كان مفقوداً والحيازة السابقة كانت قد زالت.",
          fa: "خیانت در امانت و تصاحب مال (§ 246 StGB) زیرا مال گم شده بود و تصرف قبلی قطع شده بود."
        }
      },
      {
        id: "c",
        text: "Raub (§ 249 StGB), weil du im Dienst gehandelt hast.",
        translations: {
          en: "Robbery (§ 249 StGB), because you acted on duty.",
          ru: "Разбой (§ 249 StGB), так как вы были при исполнении.",
          ar: "سطو (§ 249 StGB) لأنك تصرفت أثناء الخدمة.",
          fa: "سرقت با خشونت زیرا در حین خدمت بودید."
        }
      },
      {
        id: "d",
        text: "Betrug (§ 263 StGB) gegenüber deinem Arbeitgeber.",
        translations: {
          en: "Fraud (§ 263 StGB) against your employer.",
          ru: "Мошенничество (§ 263 StGB) в отношении работодателя.",
          ar: "احتيال (§ 263 StGB) ضد صاحب العمل.",
          fa: "کلاهبرداری در برابر کارفرما."
        }
      }
    ]
  },
  {
    id: "fall_07",
    title: "Flucht mit dem Auto",
    question: "Du beobachtest, wie ein Mann nachts die Scheibe eines parkenden Autos einschlägt und ein Navigationsgerät entwendet. Als du auf ihn zukommst, springt er in sein Fluchtfahrzeug. Du stellst dich vor die Stoßstange. Der Täter gibt Vollgas und fährt direkt auf dich zu. Du ziehst deine zugelassene Dienstpistole und schießt auf die Reifen des Autos. Wie ist der Schusswaffengebrauch rechtlich zu werten?",
    correct: 0,
    explanation: "Da das Auto gezielt auf die Sicherheitskraft zufährt, liegt ein lebensbedrohlicher Angriff vor. Der gezielte Schuss auf die Reifen ist als Notwehr (§ 32 StGB) gedeckt.",
    translations: {
      en: {
        title: "Escape by Vehicle",
        question: "You observe a man smashing a car window at night and stealing a GPS unit. As you approach, he jumps into his getaway vehicle. You stand in front of the bumper. The perpetrator accelerates directly toward you. You draw your licensed service firearm and shoot at the car tires. How is this firearm use evaluated under the law?",
        explanation: "As the vehicle accelerates directly at security staff, a life-threatening attack exists. The targeted shot at tires is lawful self-defense (§ 32 StGB)."
      },
      ru: {
        title: "Побег на автомобиле",
        question: "Ночью вы видите, как мужчина разбивает окно автомобиля и крадет навигатор. При вашем приближении он садится в машину. Вы встаете перед бампером. Нарушитель газует прямо на вас. Вы стреляете из табельного оружия по колесам. Как оценить применение оружия?",
        explanation: "Движение машины на охранника создает угрозу для жизни. Выстрел по колесам правомерен как необходимая оборона (§ 32 StGB)."
      },
      ar: {
        title: "الفرار بالسيارة",
        question: "تشاهد رجلاً يكسر زجاج سيارة ليلاً ويسرق جهاز الملاحة. يقفز في سيارته للفرار. تقف أمام السيارة فيقودها الجاني مباشرة نحوك بسرعة. تسحب سلاحك المرخص وتطلق النار على إطارات السيارة. كيف يقيم استخدام السلاح قانوناً؟",
        explanation: "اندفاع السيارة نحو الحارس يشكل اعتداءً يهدد الحياة، وإطلاق النار على الإطارات مبرر كدفاع شرعي (§ 32 StGB)."
      },
      fa: {
        title: "فرار با خودرو",
        question: "مردی را می‌بینید که شیشه خودرویی را شکسته و مسیریاب را می‌دزدد. با نزدیک شدن شما سوار خودروی فرار می‌شود. شما جلوی خودرو می‌ایستید. متهم با گاز کامل مستقیماً به سمت شما می‌راند. شما با اسلحه سازمانی به لاستیک‌ها شلیک می‌کنید. ارزیابی این اقدام چیست؟",
        explanation: "حرکت خودرو به سوی نگهبان حمله جانی تلقی می‌شود و شلیک به لاستیک‌ها مصداق دفاع مشروع (§ 32 StGB) است."
      }
    },
    options: [
      "A) Rechtmäßig als Notwehr (§ 32 StGB), da ein gegenwärtiger, rechtswidriger Angriff auf dein Leben vorlag und der Schuss auf die Reifen das erforderliche, mildeste Mittel war.",
      "B) Rechtswidrig, da Schusswaffen von privaten Sicherheitskräften niemals gegen Fahrzeuge eingesetzt werden dürfen.",
      "C) Rechtmäßig als Notstand nach § 34 StGB, da das Eigentum am Navigationsgerät höher wiegt als die Verkehrssicherheit.",
      "D) Rechtswidrig wegen Notwehrexzess, da man Geldwerte nicht mit Waffen verteidigen darf."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Rechtmäßig als Notwehr (§ 32 StGB), da ein gegenwärtiger, rechtswidriger Angriff auf dein Leben vorlag und der Schuss auf die Reifen das erforderliche, mildeste Mittel war.",
        translations: {
          en: "Lawful as self-defense (§ 32 StGB), as an imminent unlawful attack on life was occurring and shooting the tires was the necessary mildest means.",
          ru: "Правомерно как необходимая оборона (§ 32 StGB), так как была угроза жизни, а выстрел по колесам был наименее опасным эффективным средством.",
          ar: "مشروع كدفاع شرعي (§ 32 StGB) لوجود اعتداء حال يهدد الحياة وكان إطلاق النار على الإطارات الوسيلة الضرورية الأقل ضرراً.",
          fa: "قانونی به عنوان دفاع مشروع (§ 32 StGB)، زیرا حمله جانی در حال وقوع بوده و شلیک به لاستیک ملایم‌ترین وسیله مؤثر بوده است."
        }
      },
      {
        id: "b",
        text: "Rechtswidrig, da Schusswaffen von privaten Sicherheitskräften niemals gegen Fahrzeuge eingesetzt werden dürfen.",
        translations: {
          en: "Unlawful because firearms may never be used against vehicles by private security.",
          ru: "Незаконно, так как охране запрещено стрелять по автомобилям.",
          ar: "غير مشروع لأن حراس الأمن لا يجوز لهم إطلاق النار على المركبات مطلقاً.",
          fa: "غیرقانونی زیرا حراست حق شلیک به خودرو را ندارد."
        }
      },
      {
        id: "c",
        text: "Rechtmäßig als Notstand nach § 34 StGB, da das Eigentum am Navigationsgerät höher wiegt als die Verkehrssicherheit.",
        translations: {
          en: "Lawful under necessity (§ 34 StGB) as property in the GPS outweighs road safety.",
          ru: "Правомерно по § 34 StGB, так как ценность навигатора выше безопасности движения.",
          ar: "مشروع بحالة الضرورة لأن قيمة الجهاز أعلى من السلامة المرورية.",
          fa: "مشروع بر مبنای اضطرار زیرا مالیت دستگاه بالاتر از ایمنی تردد است."
        }
      },
      {
        id: "d",
        text: "Rechtswidrig wegen Notwehrexzess, da man Geldwerte nicht mit Waffen verteidigen darf.",
        translations: {
          en: "Unlawful due to excessive defense as monetary values cannot be defended with weapons.",
          ru: "Незаконно из-за превышения обороны, так как имущество нельзя защищать оружием.",
          ar: "غير مشروع لتجاوز حدود الدفاع الشرعي.",
          fa: "غیرقانونی به دلیل افراط در دفاع مشروع."
        }
      }
    ]
  },
  {
    id: "fall_08",
    title: "Der stumme Einbrecher",
    question: "Du überraschst nachts auf einem Firmengelände einen Einbrecher. Du rufst: 'Halt, Sicherheitsdienst!'. Der Einbrecher dreht sich um, zieht ein langes Küchenmesser und rennt schweigend, mit erhobenem Messer direkt auf dich zu. Du setzt deinen Pfefferspray-Strahl gezielt gegen sein Gesicht ein. Welche rechtliche Prüfung trifft zu?",
    correct: 1,
    explanation: "Ein Angriff mit einem Messer bedroht Leben und Gesundheit. Der Einsatz von Pfefferspray zur Abwehr ist reine Notwehr nach § 32 StGB.",
    translations: {
      en: {
        title: "The Silent Burglar",
        question: "You surprise a burglar at night on commercial premises. You call out: 'Halt, security!'. The burglar turns around, pulls out a long kitchen knife, and charges directly at you in silence with the knife raised. You direct a stream of pepper spray at his face. Which legal analysis applies?",
        explanation: "An attack with a knife threatens life and health. Deploying pepper spray for defense is pure lawful self-defense under § 32 StGB."
      },
      ru: {
        title: "Безмолвный взломщик",
        question: "Ночью на территории компании вы застаете взломщика. Вы кричите: 'Стой, охрана!'. Взломщик достает длинный нож и молча бежит прямо на вас с поднятым ножом. Вы распыляете перцовый спрей ему в лицо. Какова правовая оценка?",
        explanation: "Нападение с ножом угрожает жизни. Применение перцового спрея является чистой необходимой обороной по § 32 StGB."
      },
      ar: {
        title: "اللص الصامت",
        question: "تفاجئ لصاً ليلاً داخل منشأة تجارية. تنادي: 'توقف، خدمة الأمن!'. يستدير اللص، ويسحب سكيناً كبيراً ويركض بصمت نحوك رافعاً السكين. ترش رذاذ الفلفل مباشرة على وجهه. ما هو التكييف القانوني؟",
        explanation: "الاعتداء بالسكين يهدد الحياة والسلامة، واستخدام رذاذ الفلفل لصد الهجوم هو دفاع شرعي صريح (§ 32 StGB)."
      },
      fa: {
        title: "سارق خاموش",
        question: "شب‌هنگام در محوطه شرکتی با سارقی مواجه می‌شوید و فریاد می‌زنید: 'ایست، حراست!'. سارق چاقوی بلندی کشیده و بدون صدا با چاقوی بالا برده به سمت شما می‌دود. شما با اسپری فلفل به صورت وی شلیک می‌کنید. تحلیل حقوقی چیست؟",
        explanation: "حمله با چاقو خطری مستقیم برای جان است. استفاده از اسپری فلفل برای دفاع، مصداق قطعی دفاع مشروع (§ 32 StGB) است."
      }
    },
    options: [
      "A) Es liegt ein Notstand nach § 228 BGB vor, da das Messer eine Sache ist.",
      "B) Es liegt eine rechtmäßige Notwehrhandlung (§ 32 StGB) vor, da ein gegenwärtiger, rechtswidriger Angriff auf die körperliche Unversehrtheit/das Leben vorliegt.",
      "C) Es liegt ein Notwehrexzess (§ 33 StGB) vor, da Pfefferspray gegen Messer wirkungslos ist.",
      "D) Es liegt eine Amtsanmaßung (§ 132 StGB) vor, da nur die Polizei Pfefferspray einsetzen darf."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Es liegt ein Notstand nach § 228 BGB vor, da das Messer eine Sache ist.",
        translations: {
          en: "It is necessity under § 228 BGB because the knife is an object.",
          ru: "Это крайняя необходимость по § 228 BGB, так как нож — вещь.",
          ar: "تعتبر حالة ضرورة لأن السكين شيء مادي.",
          fa: "حالت اضطرار است زیرا چاقو یک شیء است."
        }
      },
      {
        id: "b",
        text: "Es liegt eine rechtmäßige Notwehrhandlung (§ 32 StGB) vor, da ein gegenwärtiger, rechtswidriger Angriff auf die körperliche Unversehrtheit/das Leben vorliegt.",
        translations: {
          en: "It is a lawful act of self-defense (§ 32 StGB), as an imminent unlawful attack on life and physical integrity is present.",
          ru: "Это правомерная необходимая оборона (§ 32 StGB), так как имеется наличное нападение на жизнь и здоровье.",
          ar: "تصرف دفاع شرعي مشروع (§ 32 StGB) لوجود اعتداء حال وغير مشروع على الحياة والسلامة الجسدية.",
          fa: "اقدام دفاع مشروع قانونی (§ 32 StGB) است زیرا حمله در حال وقوع و غیرقانونی علیه جان و سلامت وجود دارد."
        }
      },
      {
        id: "c",
        text: "Es liegt ein Notwehrexzess (§ 33 StGB) vor, da Pfefferspray gegen Messer wirkungslos ist.",
        translations: {
          en: "It is excessive defense (§ 33 StGB) because pepper spray is ineffective against knives.",
          ru: "Это превышение пределов обороны, так как спрей неэффективен.",
          ar: "تجاوز لحدود الدفاع لعدم فاعلية الرذاذ.",
          fa: "افراط در دفاع است زیرا اسپری بی‌اثر است."
        }
      },
      {
        id: "d",
        text: "Es liegt eine Amtsanmaßung (§ 132 StGB) vor, da nur die Polizei Pfefferspray einsetzen darf.",
        translations: {
          en: "It is usurping authority (§ 132 StGB) as only police may use pepper spray.",
          ru: "Это присвоение полномочий, так как только полиция может использовать спрей.",
          ar: "انتحال صفة لأن الشرطة وحدها تستخدم الرذاذ.",
          fa: "غصب مشاغل دولتی است زیرا فقط پلیس حق استفاده از اسپری دارد."
        }
      }
    ]
  },
  {
    id: "fall_09",
    title: "Der Ausweis am Werkstor",
    question: "Ein Lkw-Fahrer möchte auf das Werksgelände deines Auftraggebers fahren. Du verlangst seinen Personalausweis zur Einlassregistrierung. Der Fahrer weigert sich und fordert die Einfahrt. Du verweigerst ihm daraufhin die Einfahrt und das Öffnen der Schranke. Ist deine Verweigerung der Einfahrt rechtmäßig?",
    correct: 1,
    explanation: "Das Bewachungspersonal übt das Hausrecht des Auftraggebers aus. Wer die Einlassbedingungen (Ausweis zeigen) nicht erfüllt, darf abgewiesen werden.",
    translations: {
      en: {
        title: "ID Check at the Factory Gate",
        question: "A truck driver wishes to enter your client's factory premises. You request his identity card for entry logging. The driver refuses and demands immediate entry. You then deny entry and keep the barrier closed. Is your refusal of entry lawful?",
        explanation: "Security personnel exercise the client's domiciliary rights. Anyone who does not fulfill entry criteria (showing ID) may be refused entry."
      },
      ru: {
        title: "Пропуск на заводских воротах",
        question: "Водитель грузовика хочет въехать на территорию завода. Вы требуете удостоверение личности для регистрации. Водитель отказывается и требует открыть шлагбаум. Вы отказываете во въезде. Законны ли ваши действия?",
        explanation: "Охрана осуществляет право распоряжения помещением заказчика. Лица, не выполнившие правила допуска, не пропускаются."
      },
      ar: {
        title: "الهوية عند بوابة المصنع",
        question: "يرغب سائق شاحنة في الدخول إلى منشأة موكلك. تطلب هويته لتسجيل الدخول. يرفض السائق ويطالب بفتح البوابة فوراً. ترفض دخوله وتبقي الحاجز مغلقاً. هل رفض الدخول قانوني؟",
        explanation: "يمارس حراس الأمن حق صاحب المنشأة. ومن لا يستوفي شروط الدخول (إبراز الهوية) يجوز منعه من الدخول."
      },
      fa: {
        title: "کارت شناسایی در گیت کارخانه",
        question: "راننده کامیونی قصد ورود به کارخانه کارفرمای شما را دارد. شما برای ثبت ورود کارت شناسایی وی را مطالبه می‌کنید. راننده امتناع کرده و اصرار به ورود دارد. شما مانع ورود شده و راهبند را باز نمی‌کنید. آیا اقدام شما قانونی است؟",
        explanation: "پرسنل حراست حق مدیریت مکان کارفرما را اعمال می‌کنند. کسی که شرایط ورود را رعایت نکند مجاز به ورود نیست."
      }
    },
    options: [
      "A) Nein, da Bürger im öffentlichen Leben ein Recht auf freien Zugang zu allen Betriebsgeländen haben.",
      "B) Ja, das Verweigern der Einfahrt basiert auf der Ausübung des Hausrechts (§ 903 / § 858 BGB) des Auftraggebers durch das Bewachungspersonal.",
      "C) Ja, aber nur, weil die Gewerbeordnung dem Sicherheitsdienst ein hoheitliches Ausweisprüfungsrecht überträgt.",
      "D) Nein, du hättest den Fahrer vorläufig festnehmen müssen (§ 127 StPO)."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Nein, da Bürger im öffentlichen Leben ein Recht auf freien Zugang zu allen Betriebsgeländen haben.",
        translations: {
          en: "No, because citizens have a right of free access to all commercial facilities.",
          ru: "Нет, так как граждане имеют право свободного доступа.",
          ar: "لا، لأن للمواطنين الحق في الدخول الحر لجميع المنشآت.",
          fa: "خیر، زیرا شهروندان حق دسترسی آزاد به محوطه‌ها دارند."
        }
      },
      {
        id: "b",
        text: "Ja, das Verweigern der Einfahrt basiert auf der Ausübung des Hausrechts (§ 903 / § 858 BGB) des Auftraggebers durch das Bewachungspersonal.",
        translations: {
          en: "Yes, denying entry is based on the lawful exercise of the client's domiciliary rights (§ 903 / § 858 BGB) by security personnel.",
          ru: "Да, отказ во въезде основан на законном осуществлении права распоряжения помещением (§ 903 / § 858 BGB) заказчика охраной.",
          ar: "نعم، منع الدخول يستند إلى ممارسة حراس الأمن لحق صاحب المكان (§ 903 / § 858 BGB) نيابة عن الموكل.",
          fa: "بله، ممانعت از ورود بر مبنای اعمال حق مدیریت مکان (§ 903 / § 858 BGB) کارفرما توسط پرسنل حراست کاملاً مجاز است."
        }
      },
      {
        id: "c",
        text: "Ja, aber nur, weil die Gewerbeordnung dem Sicherheitsdienst ein hoheitliches Ausweisprüfungsrecht überträgt.",
        translations: {
          en: "Yes, but only because the Trade Code grants security sovereign ID inspection rights.",
          ru: "Да, но только потому, что закон наделяет охрану властными полномочиями проверки документов.",
          ar: "نعم، ولكن فقط لأن قانون تنظيم الحرف يمنح صلاحيات سيادية لفحص الهويات.",
          fa: "بله، اما فقط به این دلیل که قانون تجارت اختیارات حاکمیتی بازرسی مدارک اعطا کرده است."
        }
      },
      {
        id: "d",
        text: "Nein, du hättest den Fahrer vorläufig festnehmen müssen (§ 127 StPO).",
        translations: {
          en: "No, you should have provisionally arrested the driver (§ 127 StPO).",
          ru: "Нет, вы должны были временно задержать водителя.",
          ar: "لا، كان يجب عليك توقيف السائق مؤقتاً.",
          fa: "خیر، باید راننده را موقتاً بازداشت می‌کردید."
        }
      }
    ]
  },
  {
    id: "fall_10",
    title: "Notwehrüberschreitung aus Angst",
    question: "Ein randalierender Mann stößt dich auf einer Streife heftig an der Schulter und beleidigt dich. Du gerätst in Panik und Todesangst und schlägst mit deinem Einsatzstock mehrfach auf den Kopf des Randalierers ein, bis dieser schwer verletzt zusammenbricht. Wie ist deine Handlung strafrechtlich zu bewerten?",
    correct: 1,
    explanation: "Der Schlag war massiv unverhältnismäßig. Da die Überschreitung aber aus Verwirrung, Furcht oder Schrecken (asthenische Affekte) geschah, entfällt nach § 33 StGB die Strafe.",
    translations: {
      en: {
        title: "Exceeding Self-Defense out of Fear",
        question: "A rioting individual shoves your shoulder hard during a patrol and insults you. You panic in fear of death and strike the rioter's head multiple times with your baton until he collapses severely injured. How is your conduct evaluated under criminal law?",
        explanation: "The strikes were disproportionate. However, because the limits of self-defense were exceeded due to fear, terror, or panic (asthenic affect), punishment is remitted under § 33 StGB."
      },
      ru: {
        title: "Превышение пределов обороны из страха",
        question: "Хулиган сильно толкает вас в плечо и оскорбляет. Охваченный паникой и смертельным страхом, вы наносите ему дубинкой множественные удары по голове, тяжело травмируя его. Как квалифицируются ваши действия?",
        explanation: "Удары несоразмерны. Но поскольку превышение вызвано страхом и паникой (§ 33 StGB), лицо освобождается от наказания."
      },
      ar: {
        title: "تجاوز حدود الدفاع الشرعي بدافع الخوف",
        question: "يدفعك شخص مشتت بعنف في كتفك ويوجه لك شتائم أثناء الدورية. تصاب بالهلع والخوف الشديد وتضربه بهراوتك عدة مرات على رأسه حتى يسقط مصاباً بجروح بالغة. ما هو التكييف الجنائي لفعلك؟",
        explanation: "الضرب كان غير متناسب إطلاقاً، ولكن نظراً لأن التجاوز حدث بدافع الفزع والخوف الشديد والارتباك، يعفى الفاعل من العقوبة بموجب المادة 33 StGB."
      },
      fa: {
        title: "افراط در دفاع مشروع از روی وحشت",
        question: "شخصی در گشت‌زنی به شانه شما ضربه زده و توهین می‌کند. شما دچار وحشت شدید و ترس از مرگ شده و با باتوم ضربات متعددی به سر وی می‌زنید که منجر به جراحت شدید می‌شود. ارزیابی کیفری این اقدام چیست؟",
        explanation: "ضربات نامتناسب بوده اما به دلیل اینکه عبور از حد دفاع ناشی از وحشت، ترس و شوک روانی بوده طبق ماده ۳۳ قانون مجازات، مجازات ساقط می‌شود."
      }
    },
    options: [
      "A) Die Handlung ist als vollendete Notwehr nach § 32 StGB gerechtfertigt.",
      "B) Es liegt ein Notwehrexzess (§ 33 StGB) vor. Die Grenzen der Notwehr wurden aus Furcht oder Schrecken überschritten; der Schlagende wird strafrechtlich nicht bestraft.",
      "C) Es liegt eine vorsätzliche Notwehr nach § 227 BGB vor.",
      "D) Die Handlung ist nach § 34 StGB als rechtfertigender Notstand vollständig abgedeckt."
    ],
    detailedOptions: [
      {
        id: "a",
        text: "Die Handlung ist als vollendete Notwehr nach § 32 StGB gerechtfertigt.",
        translations: {
          en: "The action is fully justified as complete self-defense under § 32 StGB.",
          ru: "Действие полностью оправдано необходимой обороной по § 32 StGB.",
          ar: "الفعل مبرر كدفاع شرعي تام بموجب المادة 32 StGB.",
          fa: "اقدام به عنوان دفاع مشروع کامل توجیه می‌شود."
        }
      },
      {
        id: "b",
        text: "Es liegt ein Notwehrexzess (§ 33 StGB) vor. Die Grenzen der Notwehr wurden aus Furcht oder Schrecken überschritten; der Schlagende wird strafrechtlich nicht bestraft.",
        translations: {
          en: "It is an excess of self-defense (§ 33 StGB). Limits of defense were exceeded out of fear or terror; the striker is not criminally punished.",
          ru: "Имеет место превышение пределов обороны (§ 33 StGB). Пределы превышены из-за страха или паники; лицо освобождается от наказания.",
          ar: "تجاوز لحدود الدفاع الشرعي (§ 33 StGB) بسبب الخوف أو الفزع الشديد؛ ولا يعاقب الفاعل جنائياً.",
          fa: "افراط در دفاع مشروع (§ 33 StGB) رخ داده است. مرزهای دفاع بر اثر ترس و وحشت شکسته شده و مرتکب مجازات کیفری نمی‌شود."
        }
      },
      {
        id: "c",
        text: "Es liegt eine vorsätzliche Notwehr nach § 227 BGB vor.",
        translations: {
          en: "It is intentional civil self-defense under § 227 BGB.",
          ru: "Это умышленная гражданская оборона по § 227 BGB.",
          ar: "دفاع شرعي مدني متعمد بموجب المادة 227 BGB.",
          fa: "دفاع مشروع مدنی عمدی است."
        }
      },
      {
        id: "d",
        text: "Die Handlung ist nach § 34 StGB als rechtfertigender Notstand vollständig abgedeckt.",
        translations: {
          en: "The action is completely covered under justifying necessity (§ 34 StGB).",
          ru: "Действие полностью охватывается крайней необходимостью (§ 34 StGB).",
          ar: "الفعل مغطى بالكامل بحالة الضرورة المبررة (§ 34 StGB).",
          fa: "اقدام کاملاً با حالت اضطرار توجیه‌کننده پوشش داده می‌شود."
        }
      }
    ]
  }
];

const fallbeispieleFileContent = `/**
 * @file initialFallbeispiele.ts
 * Fallbeispiele für § 34a GewO mit voll gekoppelten Antwort-Übersetzungen (en, ru, ar, fa).
 */

export interface FallbeispielOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  text: string;
  translations: {
    en: string;
    ru: string;
    ar: string;
    fa: string;
  };
}

export interface FallbeispielTranslations {
  en: { title: string; question: string; explanation: string };
  ru: { title: string; question: string; explanation: string };
  ar: { title: string; question: string; explanation: string };
  fa: { title: string; question: string; explanation: string };
}

export interface Fallbeispiel {
  id: string;
  title: string;
  question: string;
  options: string[];
  detailedOptions?: FallbeispielOption[];
  translations: FallbeispielTranslations;
  correct: number;
  explanation: string;
}

export const INITIAL_FALLBEISPIELE: Fallbeispiel[] = ${JSON.stringify(fallbeispieleData, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/initialFallbeispiele.ts'), fallbeispieleFileContent, 'utf-8');
console.log('src/initialFallbeispiele.ts generated successfully!');
