import fs from 'fs';
import path from 'path';

const riddleQuestionsData = [
  {
    id: 1,
    riddle: "Ich trete in Kraft, wenn ein gegenwärtiger, rechtswidriger Angriff auf dich oder einen anderen stattfindet. Du darfst das mildeste, aber sicher wirksame Mittel einsetzen, um den Angriff sofort zu beenden.",
    explanation: "Notwehr rechtfertigt die erforderliche Verteidigung gegen einen gegenwärtigen, rechtswidrigen Angriff.",
    correct: "Notwehr / Nothilfe",
    translations: {
      en: {
        question: "I take effect when an imminent, unlawful attack occurs against you or another person. You may use the mildest yet certainly effective means to end the attack immediately.",
        explanation: "Self-defense justifies the necessary defense against an imminent, unlawful attack."
      },
      ru: {
        question: "Я вступаю в силу при наличном противоправном нападении на вас или другое лицо. Вы можете применить наименее опасное, но гарантированно эффективное средство для пресечения нападения.",
        explanation: "Необходимая оборона оправдывает соразмерную защиту от наличного противоправного нападения."
      },
      ar: {
        question: "أصبح سارياً عند وقوع اعتداء حال وغير مشروع عليك أو على شخص آخر. يجوز لك استخدام الوسيلة الأقل ضرراً والفعالة بالتأكيد لإنهاء الاعتداء فوراً.",
        explanation: "الدفاع الشرعي يبرر الدفاع الضروري لصد اعتداء حال وغير مشروع."
      },
      fa: {
        question: "من زمانی وارد عمل می‌شوم که یک حمله در حال وقوع و غیرقانونی علیه شما یا شخص دیگری رخ دهد. شما مجازید از ملایم‌ترین و در عین حال مؤثرترین وسیله برای پایان دادن فوری به حمله استفاده کنید.",
        explanation: "دفاع مشروع، اقدام لازم جهت دفاع در برابر حمله در حال وقوع و غیرقانونی را توجیه می‌کند."
      }
    },
    options: [
      {
        id: "a",
        text: "Notwehr / Nothilfe",
        translations: {
          en: "Self-defense / Emergency aid for others",
          ru: "Необходимая оборона / Помощь в обороне",
          ar: "الدفاع الشرعي / مساعدة الغير في الدفاع",
          fa: "دفاع مشروع / دفاع از دیگری"
        }
      },
      {
        id: "b",
        text: "Notstand",
        translations: {
          en: "State of emergency / Necessity",
          ru: "Крайняя необходимость",
          ar: "حالة الضرورة",
          fa: "حالت اضطرار"
        }
      },
      {
        id: "c",
        text: "Vorläufige Festnahme",
        translations: {
          en: "Provisional apprehension",
          ru: "Временное задержание",
          ar: "التوقيف المؤقت",
          fa: "بازداشت موقت"
        }
      },
      {
        id: "d",
        text: "Selbsthilfe",
        translations: {
          en: "Civil self-help",
          ru: "Гражданская самопомощь",
          ar: "المساعدة الذاتية المدنية",
          fa: "خود‌یاری مدنی"
        }
      }
    ]
  },
  {
    id: 2,
    riddle: "Ich erlaube dir, eine fremde Sache zu beschädigen oder zu zerstören, wenn von dieser Sache selbst eine drohende Gefahr für ein Rechtsgut ausgeht – vorausgesetzt, der Schaden ist nicht unverhältnismäßig.",
    explanation: "Beim Defensivnotstand geht die Gefahr von der Sache selbst aus, die beschädigt wird.",
    correct: "Defensiver Notstand",
    translations: {
      en: {
        question: "I allow you to damage or destroy another person's property if an imminent danger originates from that property itself, provided the damage is not disproportionate.",
        explanation: "In defensive necessity (§ 228 BGB), danger originates from the object that is damaged."
      },
      ru: {
        question: "Я позволяю повредить или уничтожить чужую вещь, если угроза исходит от самой этой вещи, при условии, что причиненный вред не является несоразмерным.",
        explanation: "При оборонительной крайней необходимости опасность исходит от самого предмета."
      },
      ar: {
        question: "أسمح لك بإتلاف أو تدمير مال مملوك للغير إذا كان الخطر الوشيك صادراً من هذا الشيء نفسه، بشرط ألا يكون الضرر غير متناسب.",
        explanation: "في حالة الضرورة الدفاعية ينبع الخطر من الشيء نفسه الذي يتعرض للإتلاف."
      },
      fa: {
        question: "من به شما اجازه می‌دهم یک شیء متعلق به دیگری را تخریب یا آسیب بزنید اگر خطر مستقیماً از خود آن شیء ناشی شود، مشروط بر اینکه خسارت نامتناسب نباشد.",
        explanation: "در اضطرار تدافعی، منشأ خطر خود همان شیء آسیب‌دیده است."
      }
    },
    options: [
      {
        id: "a",
        text: "Defensiver Notstand",
        translations: {
          en: "Defensive necessity (§ 228 BGB)",
          ru: "Оборонительная крайняя необходимость",
          ar: "حالة الضرورة الدفاعية",
          fa: "اضطرار تدافعی"
        }
      },
      {
        id: "b",
        text: "Aggressiver Notstand",
        translations: {
          en: "Aggressive necessity (§ 904 BGB)",
          ru: "Агрессивная крайняя необходимость",
          ar: "حالة الضرورة الهجومية",
          fa: "اضطرار تهاجمی"
        }
      },
      {
        id: "c",
        text: "Notwehr",
        translations: {
          en: "Self-defense",
          ru: "Необходимая оборона",
          ar: "الدفاع الشرعي",
          fa: "دفاع مشروع"
        }
      },
      {
        id: "d",
        text: "Verbotene Eigenmacht",
        translations: {
          en: "Unlawful self-assertion / Trespass",
          ru: "Самоуправное действие",
          ar: "العمل الفردي المحظور",
          fa: "تصرف غیرقانونی"
        }
      }
    ]
  },
  {
    id: 3,
    riddle: "Ich greife, wenn du jemanden auf frischer Tat bei einer Straftat erwischst und die Identität nicht sofort feststellbar ist oder Fluchtgefahr besteht. Du darfst die Person festhalten, bis die Polizei eintrifft.",
    explanation: "Das Jedermanns-Festnahmerecht sichert die Strafverfolgung bei frischer Tat und unklarer Identität.",
    correct: "Vorläufige Festnahme",
    translations: {
      en: {
        question: "I apply when you catch someone in the act of committing a crime and their identity cannot be immediately verified or there is a flight risk. You may hold the person until police arrive.",
        explanation: "The citizen's arrest right secures criminal prosecution upon fresh act and unverified identity."
      },
      ru: {
        question: "Я применяюсь, когда нарушитель застигнут на месте преступления, а его личность не может быть установлена или есть риск побега. Вы вправе удерживать его до прибытия полиции.",
        explanation: "Право на задержание обеспечивает привлечение к ответственности на месте преступления."
      },
      ar: {
        question: "أطبق عندما تضبط شخصاً متلبساً بجريمة ولا يمكن التحقق من هويته فوراً أو يخشى فراره. يجوز لك احتجازه حتى وصول الشرطة.",
        explanation: "حق التوقيف المؤقت يضمن الملاحقة الجنائية عند التلبس وعدم معرفة الهوية."
      },
      fa: {
        question: "من زمانی کاربرد دارم که فردی را در حین ارتکاب جرم دستگیر کنید و هویت وی بلافاصله مشخص نباشد یا خطر فرار وجود داشته باشد. شما مجازید وی را تا رسیدن پلیس نگه دارید.",
        explanation: "حق بازداشت موقت همگانی، امکان پیگرد قانونی متهم را در صورت احراز جرم مشهود تضمین می‌کند."
      }
    },
    options: [
      {
        id: "a",
        text: "Vorläufige Festnahme",
        translations: {
          en: "Provisional apprehension (§ 127 StPO)",
          ru: "Временное задержание",
          ar: "التوقيف المؤقت",
          fa: "بازداشت موقت"
        }
      },
      {
        id: "b",
        text: "Besitzkehr",
        translations: {
          en: "Recovery of possession",
          ru: "Возврат владения",
          ar: "استرداد الحيازة",
          fa: "بازپس‌گیری تصرف"
        }
      },
      {
        id: "c",
        text: "Notwehr",
        translations: {
          en: "Self-defense",
          ru: "Необходимая оборона",
          ar: "الدفاع الشرعي",
          fa: "دفاع مشروع"
        }
      },
      {
        id: "d",
        text: "Hausverbot",
        translations: {
          en: "Premises ban / Trespass notice",
          ru: "Запрет на вход в помещение",
          ar: "حظر دخول المنشأة",
          fa: "ممنوعیت ورود به مکان"
        }
      }
    ]
  },
  {
    id: 4,
    riddle: "Ich beschreibe deinen rechtlichen Status an der Tür oder im Objekt: Du bist nicht der Eigentümer, übst aber die Weisungsgewalt und die tatsächliche Kontrolle für deinen Auftraggeber aus.",
    explanation: "Als Sicherheitsmitarbeiter bist du Besitzdiener und setzt die Rechte des Besitzers weisungsgebunden durch.",
    correct: "Besitzdiener",
    translations: {
      en: {
        question: "I describe your legal status at the door or facility: You are not the owner, but you exercise actual control under the orders of your employer/client.",
        explanation: "As security staff you are an agent of possession acting on behalf of the possessor."
      },
      ru: {
        question: "Я определяю ваш правовой статус на объекте: вы не собственник, но осуществляете фактический контроль по указанию заказчика.",
        explanation: "Охранник является слугой владения и исполняет распоряжения владельца."
      },
      ar: {
        question: "أصف صفتك القانونية عند المدخل أو في المنشأة: أنت لست المالك، لكنك تمارس السيطرة الفعلية بتوجيهات صاحب العمل.",
        explanation: "حارس الأمن هو خادم الحيازة وينفذ حقوق المالك والحائز وفقاً للتعليمات."
      },
      fa: {
        question: "من موقعیت حقوقی شما را در ورودی یا ساختمان توصیف می‌کنم: شما مالک نیستید، اما تسلط و کنترل فیزیکی را به دستور کارفرما اعمال می‌کنید.",
        explanation: "نیروی حراست به عنوان خادم تصرف، حقوق صاحب ملک را اجرا می‌کند."
      }
    },
    options: [
      {
        id: "a",
        text: "Besitzdiener",
        translations: {
          en: "Agent of possession (§ 855 BGB)",
          ru: "Слуга владения",
          ar: "خادم الحيازة",
          fa: "خادم تصرف"
        }
      },
      {
        id: "b",
        text: "Unmittelbarer Besitzer",
        translations: {
          en: "Direct possessor",
          ru: "Непосредственный владелец",
          ar: "الحائز المباشر",
          fa: "متصرف مستقیم"
        }
      },
      {
        id: "c",
        text: "Eigentümer",
        translations: {
          en: "Owner",
          ru: "Собственник",
          ar: "المالك",
          fa: "مالک"
        }
      },
      {
        id: "d",
        text: "Amtsträger",
        translations: {
          en: "Public official",
          ru: "Должностное лицо",
          ar: "موظف حكومي رسمي",
          fa: "مقام رسمی دولتی"
        }
      }
    ]
  },
  {
    id: 5,
    riddle: "Ich bin das Recht des Eigentümers oder Besitzers, fremde Personen vom Grundstück zu verweisen oder ihnen den Zutritt von vornherein zu untersagen.",
    explanation: "Das Hausrecht beruht auf dem Hausrechtsinhaber-Status und schützt das Hausrecht aus BGB & StGB.",
    correct: "Hausrecht",
    translations: {
      en: {
        question: "I am the right of the owner or possessor to expel unauthorized persons from the premises or deny them access from the outset.",
        explanation: "Domiciliary right allows controlling access and issuing trespass bans."
      },
      ru: {
        question: "Я право собственника или владельца выдворять посторонних лиц с территории или запрещать им доступ.",
        explanation: "Право распоряжения помещением защищает право определять правила доступа."
      },
      ar: {
        question: "أنا حق المالك أو الحائز في إخراج الأشخاص غير المرغوب فيهم من العقار أو منع دخولهم مسبقاً.",
        explanation: "حق صاحب المكان يسمح بالتحكم في الدخول وفرض حظر التواجد."
      },
      fa: {
        question: "من حق مالک یا متصرف در اخراج افراد از ملک یا ممنوع کردن ورود آن‌ها از ابتدا هستم.",
        explanation: "حق مدیریت مکان به صاحب ملک اجازه تعیین ضوابط ورود و اخراج افراد را می‌دهد."
      }
    },
    options: [
      {
        id: "a",
        text: "Hausrecht",
        translations: {
          en: "Domiciliary right",
          ru: "Право распоряжения помещением",
          ar: "حق صاحب المكان",
          fa: "حق مدیریت مکان"
        }
      },
      {
        id: "b",
        text: "Hausfriedensbruch",
        translations: {
          en: "Trespassing",
          ru: "Нарушение неприкосновенности владения",
          ar: "انتهاك حرمة المكان",
          fa: "ورود غیرمجاز به ملک"
        }
      },
      {
        id: "c",
        text: "Besitzwehr",
        translations: {
          en: "Defense of possession",
          ru: "Защита владения",
          ar: "الدفاع عن الحيازة",
          fa: "دفاع از تصرف"
        }
      },
      {
        id: "d",
        text: "Garantenstellung",
        translations: {
          en: "Guarantor status",
          ru: "Статус гаранта",
          ar: "صفة الضامن القانوني",
          fa: "موقعیت ضامن"
        }
      }
    ]
  },
  {
    id: 6,
    riddle: "Ich liege vor, wenn jemand unbefugt in das befriedete Besitztum eines anderen eindringt oder trotz Aufforderung des Hausrechtsinhabers den Raum nicht unverzüglich verlässt.",
    explanation: "Hausfriedensbruch ist nach § 123 StGB eine Straftat gegen die Unverletzlichkeit der Wohnung/des Besitztums.",
    correct: "Hausfriedensbruch",
    translations: {
      en: {
        question: "I occur when someone enters enclosed premises unauthorized or fails to leave immediately upon being told to do so by the premises holder.",
        explanation: "Trespassing (§ 123 StGB) is a criminal offense against the domestic peace of enclosed premises."
      },
      ru: {
        question: "Я имею место, когда кто-то незаконно проникает на огороженную территорию или не покидает ее по требованию владельца.",
        explanation: "Нарушение неприкосновенности владения (§ 123 StGB) является уголовным преступлением."
      },
      ar: {
        question: "أتحقق عندما يدخل شخص بدون إذن إلى ملكية مسيجة أو يرفض مغادرتها فوراً بعد مطالبته بذلك من صاحب المكان.",
        explanation: "انتهاك حرمة المسكن والملكية (§ 123 StGB) جريمة جنائية يعاقب عليها القانون."
      },
      fa: {
        question: "من زمانی محقق می‌شوم که فردی غیرقانونی وارد ملک محصور شود یا علی‌رغم اخطار صاحب مکان، فوراً آنجا را ترک نکند.",
        explanation: "ورود غیرمجاز به ملک (§ 123 StGB) جرمی علیه آرامش و حریم خصوصی است."
      }
    },
    options: [
      {
        id: "a",
        text: "Hausfriedensbruch",
        translations: {
          en: "Trespassing (§ 123 StGB)",
          ru: "Нарушение неприкосновенности владения",
          ar: "انتهاك حرمة المكان",
          fa: "ورود غیرمجاز به ملک"
        }
      },
      {
        id: "b",
        text: "Besitzstörung",
        translations: {
          en: "Disturbance of possession",
          ru: "Нарушение владения",
          ar: "تعكير صفو الحيازة",
          fa: "ایجاد اختلال در تصرف"
        }
      },
      {
        id: "c",
        text: "Landfriedensbruch",
        translations: {
          en: "Breach of public peace / Riot",
          ru: "Массовые беспорядки",
          ar: "الإخلال بالسلم العام والشغب",
          fa: "اخلال در نظم عمومی و شورش"
        }
      },
      {
        id: "d",
        text: "Nötigung",
        translations: {
          en: "Coercion",
          ru: "Принуждение",
          ar: "الإكراه",
          fa: "اجبار و تهدید"
        }
      }
    ]
  },
  {
    id: 7,
    riddle: "Ich bin ein Rechtfertigungsgrund, bei dem du in die Rechte einer unbeteiligten dritten Person eingreifst, um eine gegenwärtige, nicht anders abwendbare Gefahr für Leib oder Leben abzuwehren.",
    explanation: "Beim Aggressivnotstand (§ 904 BGB) richtet sich die Einwirkung gegen Rechtsgüter Unbeteiligter.",
    correct: "Aggressiver Notstand",
    translations: {
      en: {
        question: "I am a legal justification where you interfere with the rights of an uninvolved third party to avert an imminent, otherwise unavoidable danger to life or limb.",
        explanation: "In aggressive necessity (§ 904 BGB), action is taken against property of innocent third parties."
      },
      ru: {
        question: "Я обстоятельство, исключающее противоправность, когда вы воздействуете на имущество непричастного лица для устранения опасности для жизни.",
        explanation: "При агрессивной крайней необходимости (§ 904 BGB) вред причиняется имуществу третьих лиц."
      },
      ar: {
        question: "أنا سبب إباحة يسمح بالمساس بحقوق شخص ثالث بريء لدفع خطر حال لا يمكن تفاديه يهدد النفس أو الحياة.",
        explanation: "في حالة الضرورة الهجومية (§ 904 BGB) يقع الفعل على ممتلكات طرف ثالث غير متورط."
      },
      fa: {
        question: "من دلیل توجیه‌کننده‌ای هستم که در آن برای دفع خطر جانی در حال وقوع، به اموال یک شخص ثالث بی‌طرف تعرض می‌شود.",
        explanation: "در اضطرار تهاجمی (§ 904 BGB)، اقدام علیه اموال شخص بی‌طرف برای دفع خطری بزرگتر صورت می‌گیرد."
      }
    },
    options: [
      {
        id: "a",
        text: "Aggressiver Notstand",
        translations: {
          en: "Aggressive necessity (§ 904 BGB)",
          ru: "Агрессивная крайняя необходимость",
          ar: "حالة الضرورة الهجومية",
          fa: "اضطرار تهاجمی"
        }
      },
      {
        id: "b",
        text: "Defensiver Notstand",
        translations: {
          en: "Defensive necessity (§ 228 BGB)",
          ru: "Оборонительная крайняя необходимость",
          ar: "حالة الضرورة الدفاعية",
          fa: "اضطرار تدافعی"
        }
      },
      {
        id: "c",
        text: "Notwehr",
        translations: {
          en: "Self-defense",
          ru: "Необходимая оборона",
          ar: "الدفاع الشرعي",
          fa: "دفاع مشروع"
        }
      },
      {
        id: "d",
        text: "Selbsthilfe",
        translations: {
          en: "Civil self-help",
          ru: "Самопомощь",
          ar: "المساعدة الذاتية",
          fa: "خود‌یاری"
        }
      }
    ]
  },
  {
    id: 8,
    riddle: "Ich bin das Recht des Besitzers oder Besitzdieners, sich einer verbotenen Eigenmacht auf frischer Tat mit Gewalt zu erwehren (Wegnahme oder Störung verhindern).",
    explanation: "Besitzwehr (§ 859 Abs. 1 BGB) erlaubt die aktive Abwehr verbotener Eigenmacht am Besitz.",
    correct: "Besitzwehr",
    translations: {
      en: {
        question: "I am the right of the possessor or agent of possession to defend against unlawful interference in the act using proportional force.",
        explanation: "Defense of possession (§ 859 (1) BGB) allows resisting unlawful interference."
      },
      ru: {
        question: "Я право владельца или слуги владения силой защищаться от самоуправных действий на месте нарушения.",
        explanation: "Защита владения (§ 859 ч. 1 BGB) разрешает активную оборону владения."
      },
      ar: {
        question: "أنا حق الحائز أو خادم الحيازة في مقاومة أي عمل غير مشروع بالقوة المناسبة عند التلبس.",
        explanation: "الدفاع عن الحيازة (§ 859 الفقرة 1 BGB) يسمح بصد التعدي على الحيازة بالقوة."
      },
      fa: {
        question: "من حق متصرف یا خادم تصرف هستم که با زور متناسب مانع از تصرف غیرقانونی در لحظه وقوع شود.",
        explanation: "دفاع از تصرف (§ 859 بند ۱ BGB) اجازه دفع اقدامات غیرقانونی متجاوز را می‌دهد."
      }
    },
    options: [
      {
        id: "a",
        text: "Besitzwehr",
        translations: {
          en: "Defense of possession (§ 859 (1) BGB)",
          ru: "Защита владения",
          ar: "الدفاع عن الحيازة",
          fa: "دفاع از تصرف"
        }
      },
      {
        id: "b",
        text: "Besitzkehr",
        translations: {
          en: "Recovery of possession",
          ru: "Возврат владения",
          ar: "استرداد الحيازة",
          fa: "بازپس‌گیری تصرف"
        }
      },
      {
        id: "c",
        text: "Notwehr",
        translations: {
          en: "Self-defense",
          ru: "Необходимая оборона",
          ar: "الدفاع الشرعي",
          fa: "دفاع مشروع"
        }
      },
      {
        id: "d",
        text: "Selbsthilfe",
        translations: {
          en: "Civil self-help",
          ru: "Самопомощь",
          ar: "المساعدة الذاتية",
          fa: "خود‌یاری"
        }
      }
    ]
  },
  {
    id: 9,
    riddle: "Ich erlaube dir, eine bewegliche Sache, die dir oder deinem Auftraggeber durch verbotene Eigenmacht entwendet wurde, dem Täter auf frischer Tat sofort wieder mit verhältnismäßiger Gewalt abzunehmen.",
    explanation: "Besitzkehr (§ 859 Abs. 2 BGB) gestattet die frische Nacheile und Wiedererlangung des Besitzes.",
    correct: "Besitzkehr",
    translations: {
      en: {
        question: "I allow you to retake a movable object taken by unlawful interference immediately upon fresh pursuit using proportionate force.",
        explanation: "Recovery of possession (§ 859 (2) BGB) permits immediate fresh pursuit and repossession."
      },
      ru: {
        question: "Я позволяю немедленно силой отобрать у нарушителя по горячим следам движимую вещь, похищенную с нарушением владения.",
        explanation: "Возврат владения (§ 859 ч. 2 BGB) разрешает преследование по горячим следам."
      },
      ar: {
        question: "أسمح لك باستعادة مال منقول سُلب منك أو من موكلك بالقوة المناسبة فوراً في إطار المطاردة الساخنة.",
        explanation: "استرداد الحيازة (§ 859 الفقرة 2 BGB) يجيز الملاحقة الفورية واسترجاع المال."
      },
      fa: {
        question: "من به شما اجازه می‌دهم مالی را که غیرقانونی به سرقت رفته در تعقیب فوری و در صحنه با زور متناسب پس بگیرید.",
        explanation: "بازپس‌گیری تصرف (§ 859 بند ۲ BGB) تعقیب فوری و بازپس‌گیری مال را مجاز می‌کند."
      }
    },
    options: [
      {
        id: "a",
        text: "Besitzkehr",
        translations: {
          en: "Recovery of possession (§ 859 (2) BGB)",
          ru: "Возврат владения по горячим следам",
          ar: "استرداد الحيازة الفوري",
          fa: "بازپس‌گیری تصرف"
        }
      },
      {
        id: "b",
        text: "Besitzwehr",
        translations: {
          en: "Defense of possession",
          ru: "Защита владения",
          ar: "الدفاع عن الحيازة",
          fa: "دفاع از تصرف"
        }
      },
      {
        id: "c",
        text: "Notstand",
        translations: {
          en: "State of emergency",
          ru: "Крайняя необходимость",
          ar: "حالة الضرورة",
          fa: "حالت اضطرار"
        }
      },
      {
        id: "d",
        text: "Sicherstellung",
        translations: {
          en: "Police impoundment",
          ru: "Изъятие вещей",
          ar: "التحفظ والحجز الإداري",
          fa: "توقیف اموال"
        }
      }
    ]
  },
  {
    id: 10,
    riddle: "Ich trete ein, wenn du durch Vertrag, Gesetz oder tatsächliche Übernahme die rechtliche Pflicht hast, dafür einzustehen, dass ein drohender Schaden von einer Person oder Sache abgewendet wird.",
    explanation: "Sicherheitskräfte sind als Beschützergaranten vertraglich verpflichtet, Schäden vom Schutzobjekt abzuwenden.",
    correct: "Garantenstellung / Garantenpflicht",
    translations: {
      en: {
        question: "I arise when you have a legal obligation by contract, law, or assumption of responsibility to avert harm from a protected person or asset.",
        explanation: "Security guards have a legal guarantor duty by contract to protect their assigned assets."
      },
      ru: {
        question: "Я наступаю, когда по договору или закону на вас лежит юридическая обязанность предотвратить ущерб объекту или человеку.",
        explanation: "Сотрудники охраны являются гарантами защиты доверенных им объектов."
      },
      ar: {
        question: "أنشأ عندما يكون عليك واجب قانوني بموجب عقد أو قانون لمنع وقوع ضرر على شخص أو منشأة.",
        explanation: "حراس الأمن ملتزمون تعاقدياً كضامنين بحماية المنشأة ودفع الأخطار عنها."
      },
      fa: {
        question: "من زمانی پدید می‌آیم که طبق قرارداد یا قانون، وظیفه حقوقی داشته باشید از ورود خسارت به شخص یا مال جلوگیری کنید.",
        explanation: "نیروهای حراست طبق قرارداد موظف به تضمین امنیت و دفع خطرات از مورد حفاظت هستند."
      }
    },
    options: [
      {
        id: "a",
        text: "Garantenstellung / Garantenpflicht",
        translations: {
          en: "Guarantor status / Legal duty of care",
          ru: "Статус и обязанность гаранта",
          ar: "صفة وواجب الضامن القانوني",
          fa: "موقعیت و مسئولیت ضامن"
        }
      },
      {
        id: "b",
        text: "Amtspflicht",
        translations: {
          en: "Official duty of public officers",
          ru: "Служебная обязанность чиновника",
          ar: "الواجب الوظيفي الرسمي",
          fa: "وظیفه اداری دولتی"
        }
      },
      {
        id: "c",
        text: "Sorgfaltspflicht",
        translations: {
          en: "General duty of diligence",
          ru: "Общая обязанность осмотрительности",
          ar: "واجب العناية والحرص",
          fa: "وظیفه دقت و احتیاط"
        }
      },
      {
        id: "d",
        text: "Treuepflicht",
        translations: {
          en: "Duty of loyalty",
          ru: "Обязанность верности",
          ar: "واجب الأمانة والولاء",
          fa: "وظیفه وفاداری"
        }
      }
    ]
  },
  {
    id: 11,
    riddle: "Ich liege vor, wenn du zur Durchsetzung eines zivilrechtlichen Anspruchs einen Schuldner festnimmst oder eine Sache beschlagnamst, weil obrigkeitliche Hilfe nicht rechtzeitig erreichbar ist und Gefahr im Verzug ist.",
    explanation: "Die zivilrechtliche Selbsthilfe nach § 229 BGB sichert Ansprüche, wenn staatliche Hilfe zu spät käme.",
    correct: "Selbsthilfe",
    translations: {
      en: {
        question: "I exist when you apprehend a debtor or seize property to secure a civil claim because timely police help cannot be obtained.",
        explanation: "Civil self-help (§ 229 BGB) secures civil claims when official aid arrives too late."
      },
      ru: {
        question: "Я применяюсь для обеспечения гражданского иска путем задержания должника или вещи, если помощь властей вовремя недоступна.",
        explanation: "Гражданская самопомощь (§ 229 BGB) обеспечивает требования при опоздании властей."
      },
      ar: {
        question: "أطبق عند توقيف مدين أو حجز مال لضمان حق مدني بسبب تعذر وصول مساعدة السلطات في الوقت المناسب.",
        explanation: "المساعدة الذاتية المدنية (§ 229 BGB) تضمن الحقوق عندما تتأخر مساعدة الدولة."
      },
      fa: {
        question: "من برای تضمین یک ادعای حقوقی از طریق بازداشت بدهکار یا ضبط مال، به دلیل عدم دسترسی به موقع به پلیس اجرا می‌شوم.",
        explanation: "خود‌یاری مدنی (§ 229 BGB) وصول مطالبات را در زمان عدم دسترسی به مراجع دولتی تضمین می‌کند."
      }
    },
    options: [
      {
        id: "a",
        text: "Selbsthilfe",
        translations: {
          en: "Civil self-help (§ 229 BGB)",
          ru: "Гражданская самопомощь",
          ar: "المساعدة الذاتية المدنية",
          fa: "خود‌یاری مدنی"
        }
      },
      {
        id: "b",
        text: "Vorläufige Festnahme",
        translations: {
          en: "Provisional apprehension",
          ru: "Временное задержание",
          ar: "التوقيف المؤقت",
          fa: "بازداشت موقت"
        }
      },
      {
        id: "c",
        text: "Notwehr",
        translations: {
          en: "Self-defense",
          ru: "Необходимая оборона",
          ar: "الدفاع الشرعي",
          fa: "دفاع مشروع"
        }
      },
      {
        id: "d",
        text: "Besitzkehr",
        translations: {
          en: "Recovery of possession",
          ru: "Возврат владения",
          ar: "استرداد الحيازة",
          fa: "بازپس‌گیری تصرف"
        }
      }
    ]
  },
  {
    id: 12,
    riddle: "Ich beschreibe das Merkmal, dass eine Straftat genau in diesem Moment abläuft oder der Täter unmittelbar am Tatort bzw. auf der frischen Flucht verfolgt wird.",
    explanation: "Frische Tat bedeutet zeitliche und räumliche Unmittelbarkeit zum Tatgeschehen.",
    correct: "Auf frischer Tat",
    translations: {
      en: {
        question: "I describe the condition where an offense is occurring at that very moment or the perpetrator is pursued immediately at the scene or in fresh flight.",
        explanation: "Caught in the act means immediate temporal and spatial connection to the crime."
      },
      ru: {
        question: "Я означаю, что преступление происходит прямо сейчас либо нарушитель преследуется непосредственно на месте или по горячим следам.",
        explanation: "На месте преступления означает непосредственную временную и пространственную связь."
      },
      ar: {
        question: "أصف حالة وقوع الجريمة في هذه اللحظة بالذات أو ملاحقة الجاني مباشرة في مسرح الجريمة أثناء فراره.",
        explanation: "التلبس بالجريمة يعني التزامن الزمني والمكاني المباشر مع وقوع الفعل."
      },
      fa: {
        question: "من وضعیتی را توصیف می‌کنم که جرم دقیقاً در همان لحظه در حال وقوع است یا مجرم در صحنه و در حال فرار تعقیب می‌شود.",
        explanation: "جرم مشهود به معنای ارتباط زمانی و مکانی بی‌واسطه با وقوع جرم است."
      }
    },
    options: [
      {
        id: "a",
        text: "Auf frischer Tat",
        translations: {
          en: "In flagrante delicto / Caught in the act",
          ru: "По горячим следам / На месте преступления",
          ar: "متلبساً بالجريمة / في مسرح الجرم",
          fa: "در حین ارتکاب جرم / جرم مشهود"
        }
      },
      {
        id: "b",
        text: "Gegenwärtiger Angriff",
        translations: {
          en: "Imminent attack",
          ru: "Наличное нападение",
          ar: "اعتداء حال",
          fa: "حمله در حال وقوع"
        }
      },
      {
        id: "c",
        text: "Gefahr im Verzug",
        translations: {
          en: "Exigent circumstances / Danger in delay",
          ru: "Опасность промедления",
          ar: "الخطر الداهم في التأخير",
          fa: "خطر ناشی از تأخیر"
        }
      },
      {
        id: "d",
        text: "Rechtswidrigkeit",
        translations: {
          en: "Unlawfulness",
          ru: "Противоправность",
          ar: "عدم المشروعية",
          fa: "غیرقانونی بودن"
        }
      }
    ]
  },
  {
    id: 13,
    riddle: "Ich bin das rechtliche Verbot, ohne richterlichen Beschluss oder ausdrückliche Rechtsgrundlage fremde Personen oder deren mitgeführte Taschen gegen deren Willen zu durchsuchen.",
    explanation: "Private Sicherheitskräfte dürfen Taschen nur mit freiwilliger Einwilligung der Person kontrollieren.",
    correct: "Verbot der Durchsuchung (Jedermann)",
    translations: {
      en: {
        question: "I am the legal ban against searching individuals or their bags against their will without judicial warrant or statutory authorization.",
        explanation: "Private security personnel may inspect bags only with the voluntary consent of the individual."
      },
      ru: {
        question: "Я правовой запрет на обыск людей или их сумок против их воли без судебного ордера.",
        explanation: "Частные охранники могут осматривать сумки только с добровольного согласия."
      },
      ar: {
        question: "أنا الحظر القانوني لتفتيش الأشخاص أو حقائبهم رغماً عنهم دون إذن قضائي أو سند قانوني صريح.",
        explanation: "لا يجوز لحراس الأمن فحص الحقائب إلا بموافقة طوعية من الشخص."
      },
      fa: {
        question: "من ممنوعیت قانونی بازرسی بدنی یا تفتیش کیف افراد بر خلاف میل آن‌ها بدون حکم قضایی هستم.",
        explanation: "نیروهای امنیتی تنها با رضایت داوطلبانه فرد مجاز به بازرسی کیف هستند."
      }
    },
    options: [
      {
        id: "a",
        text: "Verbot der Durchsuchung (Jedermann)",
        translations: {
          en: "Ban on involuntary searches by private persons",
          ru: "Запрет на принудительный обыск гражданами",
          ar: "حظر التفتيش الإجباري لغير رجال السلطة",
          fa: "ممنوعیت تفتیش اجباری توسط افراد عادی"
        }
      },
      {
        id: "b",
        text: "Hausrecht",
        translations: {
          en: "Domiciliary right",
          ru: "Право распоряжения помещением",
          ar: "حق صاحب المكان",
          fa: "حق مدیریت مکان"
        }
      },
      {
        id: "c",
        text: "Gefahrenabwehr",
        translations: {
          en: "Danger prevention",
          ru: "Предотвращение опасности",
          ar: "درء الأخطار",
          fa: "دفع خطر"
        }
      },
      {
        id: "d",
        text: "Gewaltmonopol",
        translations: {
          en: "Monopoly on the use of force",
          ru: "Монополия на силу",
          ar: "احتكار استخدام القوة",
          fa: "انحصار قوه قهریه"
        }
      }
    ]
  },
  {
    id: 14,
    riddle: "Ich bin das Vorrecht des Staates, über Polizei und Justiz als einzige Instanz physische Zwangsgewalt zur Rechtsdurchsetzung auszuüben, außer bei Jedermannsrechten.",
    explanation: "Das staatliche Gewaltmonopol verbietet Selbstjustiz; Jedermannsrechte sind enge Ausnahmen.",
    correct: "Staatliches Gewaltmonopol",
    translations: {
      en: {
        question: "I am the exclusive prerogative of the state to use physical coercive force via police and judiciary to enforce the law, except for narrow citizen's rights.",
        explanation: "The state monopoly on force prohibits vigilantism; citizen rights are strictly limited exceptions."
      },
      ru: {
        question: "Я исключительное право государства применять физическое принуждение через полицию и суд для исполнения закона.",
        explanation: "Монополия государства запрещает самосуд; права граждан являются узкими исключениями."
      },
      ar: {
        question: "أنا الامتياز الحصري للدولة في ممارسة القوة الجبرية عبر الشرطة والقضاء لتطبيق القانون باستثناء حقوق الكافة المحددة.",
        explanation: "احتكار الدولة للقوة يحظر القصاص الفردي؛ وتعتبر حقوق الكافة استثناءات ضيقة."
      },
      fa: {
        question: "من امتیاز انحصاری دولت برای اعمال زور فیزیکی از طریق پلیس و دادگستری هستم، به جز در موارد استثنایی حقوق همگانی.",
        explanation: "انحصار قوه قهریه دولتی، خود‌اجرایی و انتقام شخصی را ممنوع می‌سازد."
      }
    },
    options: [
      {
        id: "a",
        text: "Staatliches Gewaltmonopol",
        translations: {
          en: "State monopoly on physical force",
          ru: "Государственная монополия на применение силы",
          ar: "احتكار الدولة لاستخدام القوة الجبرية",
          fa: "انحصار قوه قهریه دولتی"
        }
      },
      {
        id: "b",
        text: "Hoheitsrecht",
        translations: {
          en: "Sovereign power",
          ru: "Суверенное полномочие",
          ar: "السلطة السيادية",
          fa: "اختیار حاکمیتی"
        }
      },
      {
        id: "c",
        text: "Amtsgewalt",
        translations: {
          en: "Official administrative power",
          ru: "Власть должностного лица",
          ar: "السلطة الإدارية الرسمية",
          fa: "قدرت سازمانی دولتی"
        }
      },
      {
        id: "d",
        text: "Rechtsstaatsprinzip",
        translations: {
          en: "Rule of law principle",
          ru: "Принцип правового государства",
          ar: "مبدأ دولة القانون",
          fa: "اصل حاکمیت قانون"
        }
      }
    ]
  },
  {
    id: 15,
    riddle: "Ich bezeichne jede Handlung, durch die jemand dem Besitzer ohne dessen Willen den Besitz entzieht oder ihn im Besitz stört, ohne dass ein gesetzlicher Erlaubnisgrund vorliegt.",
    explanation: "Verbotene Eigenmacht (§ 858 BGB) ist die widerrechtliche Beeinträchtigung der tatsächlichen Sachherrschaft.",
    correct: "Verbotene Eigenmacht",
    translations: {
      en: {
        question: "I designate any act by which someone deprives the possessor of possession or disturbs possession against their will without statutory justification.",
        explanation: "Unlawful self-assertion (§ 858 BGB) is the unlawful infringement upon actual possession."
      },
      ru: {
        question: "Я обозначаю любое действие, которым нарушитель вопреки воле владельца лишает его владения или мешает владению без законных оснований.",
        explanation: "Самоуправное нарушение владения (§ 858 BGB) является незаконным вмешательством."
      },
      ar: {
        question: "أشير إلى أي تصرف يسلب به شخص الحيازة من صاحبها أو يعكر صفوها بدون رضاه ودون مبرر قانوني.",
        explanation: "العمل الفردي المحظور (§ 858 BGB) هو التعدي غير المشروع على السيطرة الفعلية."
      },
      fa: {
        question: "من هر اقدامی را توصیف می‌کنم که طی آن فردی بدون رضایت متصرف و بدون مجوز قانونی، مال را تصرف کرده یا در آن اخلال ایجاد کند.",
        explanation: "تصرف غیرقانونی (§ 858 BGB) به معنای نقض غیرقانونی تسلط عملی بر مال است."
      }
    },
    options: [
      {
        id: "a",
        text: "Verbotene Eigenmacht",
        translations: {
          en: "Unlawful self-assertion (§ 858 BGB)",
          ru: "Самоуправное нарушение владения",
          ar: "العمل الفردي المحظور",
          fa: "تصرف غیرقانونی"
        }
      },
      {
        id: "b",
        text: "Besitzentziehung",
        translations: {
          en: "Deprivation of possession",
          ru: "Лишение владения",
          ar: "سلب الحيازة",
          fa: "سلب تصرف"
        }
      },
      {
        id: "c",
        text: "Besitzstörung",
        translations: {
          en: "Disturbance of possession",
          ru: "Препятствование владению",
          ar: "إزعاج الحيازة",
          fa: "مزاحمت در تصرف"
        }
      },
      {
        id: "d",
        text: "Diebstahl",
        translations: {
          en: "Theft",
          ru: "Кража",
          ar: "السرقة",
          fa: "سرقت"
        }
      }
    ]
  },
  {
    id: 16,
    riddle: "Ich erfülle den Straftatbestand, wenn du einen Menschen rechtswidrig mit Gewalt oder durch Drohung mit einem empfindlichen Übel zu einer Handlung, Duldung oder Unterlassung zwingst.",
    explanation: "Nötigung liegt vor, wenn der freie Wille einer Person durch Drohung oder Zwang gebeugt wird.",
    correct: "Nötigung",
    translations: {
      en: {
        question: "I fulfill the statutory offense when you unlawfully compel a person by force or threat of significant evil to an act, acquiescence, or omission.",
        explanation: "Coercion occurs when a person's free will is overcome by threat or force."
      },
      ru: {
        question: "Я образую состав преступления, когда вы незаконно принуждаете человека силой или угрозой к действию, бездействию или согласию.",
        explanation: "Принуждение имеет место, когда воля лица подавляется насилием или угрозой."
      },
      ar: {
        question: "أشكل جريمة جنائية عندما تجبر شخصاً بطريقة غير مشروعة بالعنف أو بالتهديد بضرر جسيم على فعل أو امتناع أو تحمل شيء.",
        explanation: "الإكراه يتحقق عندما تُسلب إرادة الشخص الحرة بالتهديد أو القوة."
      },
      fa: {
        question: "من زمانی تحقق می‌یابم که فردی را به طور غیرقانونی با اعمال زور یا تهدید به آسیبی سنگین به انجام یا تحمل کاری مجبور کنید.",
        explanation: "اجبار و تهدید زمانی واقع می‌شود که اراده آزاد فرد سلب گردد."
      }
    },
    options: [
      {
        id: "a",
        text: "Nötigung",
        translations: {
          en: "Coercion (§ 240 StGB)",
          ru: "Принуждение",
          ar: "الإكراه غير المشروع",
          fa: "اجبار و زورگویی"
        }
      },
      {
        id: "b",
        text: "Freiheitsberaubung",
        translations: {
          en: "Deprivation of liberty",
          ru: "Незаконное лишение свободы",
          ar: "حرمان من الحرية",
          fa: "سلب آزادی"
        }
      },
      {
        id: "c",
        text: "Körperverletzung",
        translations: {
          en: "Assault and battery",
          ru: "Причинение вреда здоровью",
          ar: "الإيذاء الجسدي",
          fa: "ضرب و جرح"
        }
      },
      {
        id: "d",
        text: "Erpressung",
        translations: {
          en: "Extortion",
          ru: "Вымогательство",
          ar: "الابتزاز المالي",
          fa: "اخاذی و باج‌گیری"
        }
      }
    ]
  },
  {
    id: 17,
    riddle: "Ich liege vor, wenn du jemanden widerrechtlich einsperrst oder auf andere Weise daran hinderst, seinen Aufenthaltsort nach eigenem Willen zu verlassen, ohne dass ein Festnahmerecht greift.",
    explanation: "Freiheitsberaubung entzieht einer Person für eine gewisse Dauer unrechtmäßig die persönliche Bewegungsfreiheit.",
    correct: "Freiheitsberaubung",
    translations: {
      en: {
        question: "I exist when you unlawfully lock someone in or otherwise prevent them from leaving their location according to their will without a legal arrest right.",
        explanation: "Deprivation of liberty unlawfully strips a person of physical mobility for a period of time."
      },
      ru: {
        question: "Я налицо, когда вы незаконно запираете кого-то или препятствуете уходу без законного права на задержание.",
        explanation: "Незаконное лишение свободы лишает человека свободы передвижения."
      },
      ar: {
        question: "أتحقق عندما تحتجز شخصاً بدون وجه حق أو تمنعه من مغادرة مكانه بإرادته دون وجود حق توقيف قانوني.",
        explanation: "حرمان الحرية غير المشروع يسلب الشخص حرية التنقل لفترة من الزمن."
      },
      fa: {
        question: "من زمانی محقق می‌شوم که فردی را به طور غیرقانونی حبس کنید یا بدون داشتن حق بازداشت مانع ترک محل توسط او شوید.",
        explanation: "سلب آزادی غیرقانونی، آزادی تردد و تحرک فرد را برای مدتی سلب می‌کند."
      }
    },
    options: [
      {
        id: "a",
        text: "Freiheitsberaubung",
        translations: {
          en: "Deprivation of liberty (§ 239 StGB)",
          ru: "Незаконное лишение свободы",
          ar: "حرمان من الحرية والاحتجاز",
          fa: "سلب غیرقانونی آزادی"
        }
      },
      {
        id: "b",
        text: "Nötigung",
        translations: {
          en: "Coercion",
          ru: "Принуждение",
          ar: "الإكراه",
          fa: "اجبار و تهدید"
        }
      },
      {
        id: "c",
        text: "Hausfriedensbruch",
        translations: {
          en: "Trespassing",
          ru: "Нарушение неприкосновенности владения",
          ar: "انتهاك حرمة المكان",
          fa: "ورود غیرمجاز به ملک"
        }
      },
      {
        id: "d",
        text: "Verbotene Eigenmacht",
        translations: {
          en: "Unlawful self-assertion",
          ru: "Самоуправное действие",
          ar: "العمل الفردي المحظور",
          fa: "تصرف غیرقانونی"
        }
      }
    ]
  },
  {
    id: 18,
    riddle: "Ich bin ein rechtlicher Grundsatz, der verlangt, dass jede Maßnahme und Gewalteinwirkung geeignet, erforderlich und angemessen zum Erreichen des Ziels sein muss.",
    explanation: "Die Verhältnismäßigkeit prüft immer das mildeste, aber wirksame Mittel zur Zielerreichung.",
    correct: "Grundsatz der Verhältnismäßigkeit",
    translations: {
      en: {
        question: "I am a legal principle requiring that every measure and use of force must be suitable, necessary, and appropriate to achieve the legitimate aim.",
        explanation: "Proportionality always checks for the mildest yet effective means to reach the goal."
      },
      ru: {
        question: "Я правовой принцип, требующий, чтобы любая мера и применение силы были пригодными, необходимыми и соразмерными.",
        explanation: "Принцип соразмерности всегда требует наименее обременительного средства."
      },
      ar: {
        question: "أنا مبدأ قانوني يشترط أن يكون كل إجراء واستخدام للقوة مناسباً، وضرورياً، ومعتدلاً لتحقيق الهدف المشروع.",
        explanation: "مبدأ التناسب يفحص دائماً الوسيلة الأقل ضرراً والفعالة لتحقيق الغاية."
      },
      fa: {
        question: "من یک اصل حقوقی هستم که الزام می‌کند هر اقدام و اعمال زوری باید مناسب، ضروری و متناسب با هدف مشروع باشد.",
        explanation: "اصل تناسب همواره به دنبال ملایم‌ترین و در عین حال مؤثرترین راهکار است."
      }
    },
    options: [
      {
        id: "a",
        text: "Grundsatz der Verhältnismäßigkeit",
        translations: {
          en: "Principle of proportionality",
          ru: "Принцип соразмерности",
          ar: "مبدأ التناسب والاعتدال",
          fa: "اصل تناسب"
        }
      },
      {
        id: "b",
        text: "Garantenpflicht",
        translations: {
          en: "Guarantor's duty",
          ru: "Обязанность гаранта",
          ar: "واجب الضامن القانوني",
          fa: "وظیفه ضامن"
        }
      },
      {
        id: "c",
        text: "Hausrecht",
        translations: {
          en: "Domiciliary right",
          ru: "Право распоряжения помещением",
          ar: "حق صاحب المكان",
          fa: "حق مدیریت مکان"
        }
      },
      {
        id: "d",
        text: "Bestimmtheitsgebot",
        translations: {
          en: "Definiteness requirement",
          ru: "Принцип правовой определенности",
          ar: "مبدأ الوضوح واليقين القانوني",
          fa: "اصل شفافیت و قطعیت قانونی"
        }
      }
    ]
  },
  {
    id: 19,
    riddle: "Ich bin eine Straftat, die begangen wird, wenn sich eine Person öffentlich als Polizist oder Behördenvertreter ausgibt und Handlungen vornimmt, die nur echten Staatsorganen zustehen.",
    explanation: "Amtsanmaßung begeht, wer unbefugt hoheitliche Amtsbefugnisse vortäuscht oder ausübt.",
    correct: "Amtsanmaßung",
    translations: {
      en: {
        question: "I am a criminal offense committed when someone publicly pretends to be a police officer or official and performs acts reserved for state authorities.",
        explanation: "Usurping authority (§ 132 StGB) is committed by pretending to hold official sovereign powers."
      },
      ru: {
        question: "Я преступление, совершаемое, когда лицо выдает себя за полицейского или должностное лицо и совершает действия властей.",
        explanation: "Присвоение полномочий должностного лица (§ 132 StGB) наказуемо по закону."
      },
      ar: {
        question: "أنا جريمة ترتكب عندما ينتحل شخص صفة رجل شرطة أو مسؤول حكومي ويمارس أفعالاً مقتصرة على أجهزة الدولة الرسمية.",
        explanation: "انتحال صفة موظف عام (§ 132 StGB) جريمة يعاقب عليها القانون."
      },
      fa: {
        question: "من جرمی هستم که در صورت جعل عنوان پلیس یا مقام دولتی و انجام اقداماتی که منحصراً در اختیار دولت است، محقق می‌شوم.",
        explanation: "جعل عنوان و غصب مشاغل دولتی (§ 132 StGB) جرمی بر خلاف نظم اداری است."
      }
    },
    options: [
      {
        id: "a",
        text: "Amtsanmaßung",
        translations: {
          en: "Usurping public authority (§ 132 StGB)",
          ru: "Присвоение полномочий должностного лица",
          ar: "انتحال صفة موظف عام",
          fa: "جعل عنوان و غصب مشاغل دولتی"
        }
      },
      {
        id: "b",
        text: "Nötigung",
        translations: {
          en: "Coercion",
          ru: "Принуждение",
          ar: "الإكراه",
          fa: "اجبار و تهدید"
        }
      },
      {
        id: "c",
        text: "Urkundenfälschung",
        translations: {
          en: "Forgery of documents",
          ru: "Подделка документов",
          ar: "تزوير الوثائق والمستندات",
          fa: "جعل اسناد"
        }
      },
      {
        id: "d",
        text: "Täuschung",
        translations: {
          en: "Deception / Misleading",
          ru: "Введение в заблуждение",
          ar: "التضليل والخداع",
          fa: "فریب و گمراه‌سازی"
        }
      }
    ]
  },
  {
    id: 20,
    riddle: "Ich liege vor, wenn du jemanden rechtswidrig körperlich misshandelst oder an der Gesundheit schädigst, ohne dass ein gesetzlicher Rechtfertigungsgrund wie Notwehr vorliegt.",
    explanation: "Jede unbefugte Beeinträchtigung des körperlichen Wohlbefindens stellt eine Körperverletzung dar.",
    correct: "Körperverletzung",
    translations: {
      en: {
        question: "I occur when you unlawfully mistreat someone physically or damage their health without justification such as self-defense.",
        explanation: "Any unauthorized impairment of physical well-being constitutes battery/assault."
      },
      ru: {
        question: "Я налицо, когда вы незаконно причиняете физический вред или ущерб здоровью человека без оснований защиты.",
        explanation: "Любое незаконное причинение вреда физическому благополучию образует состав телесного повреждения."
      },
      ar: {
        question: "أتحقق عندما تعتدي جسدياً على شخص أو تلحق ضرراً بصحته دون وجود مبرر قانوني مثل الدفاع الشرعي.",
        explanation: "أي مساس غير مشروع بالسلامة الجسدية يشكل جريمة إيذاء بدني."
      },
      fa: {
        question: "من زمانی محقق می‌شوم که فردی را بدون دلیل توجیه‌کننده مانند دفاع مشروع، مورد آزار بدنی قرار دهید یا به سلامت او آسیب بزنید.",
        explanation: "هرگونه وارد کردن آسیب غیرقانونی به تمامیت جسمانی، ضرب و جرح محسوب می‌شود."
      }
    },
    options: [
      {
        id: "a",
        text: "Körperverletzung",
        translations: {
          en: "Bodily harm / Assault and battery (§ 223 StGB)",
          ru: "Причинение вреда здоровью",
          ar: "الإيذاء البدني والجسدي",
          fa: "ایراد ضرب و جرح و آسیب بدنی"
        }
      },
      {
        id: "b",
        text: "Nötigung",
        translations: {
          en: "Coercion",
          ru: "Принуждение",
          ar: "الإكراه",
          fa: "اجبار"
        }
      },
      {
        id: "c",
        text: "Beleidigung",
        translations: {
          en: "Insult / Defamation",
          ru: "Оскорбление",
          ar: "السب والقذف والإهانة",
          fa: "توهین"
        }
      },
      {
        id: "d",
        text: "Notstand",
        translations: {
          en: "Necessity",
          ru: "Крайняя необходимость",
          ar: "حالة الضرورة",
          fa: "اضطرار"
        }
      }
    ]
  }
];

const riddleFileContent = `/**
 * @file riddleQuestions.ts
 * Die 20 Rechtsbegriffe-Rätsel ("Was bin ich?") für die § 34a GewO Sachkundeprüfung.
 * Jede Antwortoption trägt fest gekoppelte, semantisch exakte Übersetzungen (en, ru, ar, fa).
 */

export interface RiddleQuestionOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  text: string;
  translations: {
    en: string;
    ru: string;
    ar: string;
    fa: string;
  };
}

export interface RiddleQuestion {
  id: number;
  riddle: string;
  correct: string;
  explanation: string;
  translations: {
    en: { question: string; explanation: string };
    ru: { question: string; explanation: string };
    ar: { question: string; explanation: string };
    fa: { question: string; explanation: string };
  };
  options: RiddleQuestionOption[];
}

export const RIDDLE_QUESTIONS: RiddleQuestion[] = ${JSON.stringify(riddleQuestionsData, null, 2)};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/riddleQuestions.ts'), riddleFileContent, 'utf-8');
console.log('src/data/riddleQuestions.ts generated successfully!');
