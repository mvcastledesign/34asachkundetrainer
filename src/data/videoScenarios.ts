import { InteractiveScenarioData } from '../types/videoScenario.ts';

const BASE_URL = 'https://tfkwxkpbnklwauljauta.supabase.co/storage/v1/object/public/trainer_videos/';

export const ALL_SCENARIOS: InteractiveScenarioData[] = [
  {
    id: "club_aura_1",
    title: "Einlasskontrolle Club Aura (§ 34a GewO)",
    translations: {
      en: { title: "Entry Access Control Club Aura (§ 34a GewO)" },
      ru: { title: "Контроль доступа в клуб Аура (§ 34a GewO)" },
      ar: { title: "مراقبة الدخول لنادي أورا (§ 34a GewO)" },
      fa: { title: "کنترل ورود کلوب آئورا (§ 34a GewO)" }
    },
    scenes: [
      {
        id: 1,
        title: "Erstkontakt & Begrüßung",
        translations: {
          en: {
            title: "Initial Contact & Greeting",
            question: "A guest approaches the club entrance. How do you behave professionally under § 34a GewO?"
          },
          ru: {
            title: "Первый контакт и приветствие",
            question: "Гость подходит ко входу в клуб. Как вести себя профессионально по § 34a GewO?"
          },
          ar: {
            title: "الاستقبال والتواصل الأولي",
            question: "يقترب زائر من مدخل النادي. كيف تتصرف بمهنية وفقاً للمادة 34a GewO؟"
          },
          fa: {
            title: "برخورد اولیه و خوش‌آمدگویی",
            question: "مهمانی به درب ورودی کلوب نزدیک می‌شود. رفتار حرفه‌ای طبق ماده 34a قانون تجارت چگونه است؟"
          }
        },
        intro_video: `${BASE_URL}01_intro_gast_kommt.mp4`,
        idle_loop_video: `${BASE_URL}02_loop_szene1_warten.mp4`,
        question: "Ein Gast nähert sich dem Clubeingang. Wie verhältst du dich professionell nach § 34a GewO?",
        answers: [
          {
            id: "1_correct",
            text: "Freundlich begrüßen und höflich um Vorlage des Lichtbildausweises bitten.",
            is_correct: true,
            response_video: `${BASE_URL}03_action_ausweis_zeigen.richtigeantwort.mp4`,
            feedback: "Richtig: Sachlich, deeskalierend und professionell im Erstkontakt.",
            next_scene_id: 2,
            translations: {
              en: {
                text: "Greet warmly and politely ask for a valid photo ID.",
                feedback: "Correct: Objective, de-escalating, and professional during initial contact."
              },
              ru: {
                text: "Вежливо поприветствовать и вежливо попросить предъявить удостоверение личности с фотографией.",
                feedback: "Правильно: сдержанно, профессионально и направлено на деэскалацию."
              },
              ar: {
                text: "الترحيب بلطف وطلب إبراز بطاقة الهوية التي تحمل صورة بأدب.",
                feedback: "صحيح: أسلوب مهني وموضوعي يساعد على خفض التوتر."
              },
              fa: {
                text: "احوال‌پرسی محترمانه و تقاضای مؤدبانه جهت ارائه مدرک شناسایی عکس‌دار.",
                feedback: "صحیح: برخوردی متین، تنش‌زدا و حرفه‌ای در مواجهه اولیه."
              }
            }
          },
          {
            id: "1_wrong",
            text: "Den Gast aggressiv anstarren, Macht demonstrieren und grundlos einschüchtern.",
            is_correct: false,
            response_video: `${BASE_URL}03_falsch_szene1_abweisungfalsch.mp4`,
            feedback: "Unprofessionelles Auftreten. Sicherheitskräfte treten deeskalierend und kundenorientiert auf.",
            next_scene_id: null,
            translations: {
              en: {
                text: "Stare at the guest aggressively, demonstrate dominance, and intimidate without cause.",
                feedback: "Unprofessional demeanor. Security personnel must act in a de-escalating and service-oriented manner."
              },
              ru: {
                text: "Агрессивно смотреть на гостя, демонстрировать силу и запугивать без причины.",
                feedback: "Непрофессиональное поведение. Охранники должны действовать спокойно и клиентоориентированно."
              },
              ar: {
                text: "التحديق بعدوانية في الزبون واستعراض القوة وترهيبه بلا مبرر.",
                feedback: "سلوك غير مهني. يجب على حراس الأمن التصرف بهدوء ولباقة وخدمة العملاء."
              },
              fa: {
                text: "نگاه پرخاشگرانه به مهمان، نمایش قدرت و ارعاب بی‌دلیل.",
                feedback: "رفتار غیرحرفه‌ای. پرسنل حراست باید همواره تنش‌زدا و مشتری‌مدار عمل کنند."
              }
            }
          }
        ]
      },
      {
        id: 2,
        title: "Ausweiskontrolle",
        translations: {
          en: {
            title: "Identity Document Check",
            question: "The guest hands you the document. How do you act in a legally compliant manner?"
          },
          ru: {
            title: "Проверка документов",
            question: "Гость передает вам документ. Как поступить юридически грамотно?"
          },
          ar: {
            title: "فحص الهوية",
            question: "يسلمك الزبون وثيقة الهوية. كيف تتصرف بطريقة قانونية سليمة؟"
          },
          fa: {
            title: "بررسی کارت شناسایی",
            question: "مهمان مدرک شناسایی را تحویل می‌دهد. رفتار منطبق بر قانون چگونه است؟"
          }
        },
        intro_video: null,
        idle_loop_video: `${BASE_URL}04_loop_szene2_ausweis_halten.mp4`,
        question: "Der Gast händigt dir das Dokument aus. Wie verhältst du dich jetzt rechtssicher?",
        answers: [
          {
            id: "2_correct",
            text: "Ausweis auf Echtheit und Volljährigkeit prüfen, höflich zurückgeben und nach der Taschenkontrolle fragen.",
            is_correct: true,
            response_video: `${BASE_URL}05_action_ausweis_rueckgabe.richtig.mp4`,
            feedback: "Richtig: Gewissenhafte Prüfung des Ausweisdokuments und Weiterführung des Einlassprozesses.",
            next_scene_id: 3,
            translations: {
              en: {
                text: "Verify document authenticity and legal age, return it politely, and ask for consent for bag check.",
                feedback: "Correct: Diligent verification of identification and orderly admission process."
              },
              ru: {
                text: "Проверить подлинность и совершеннолетие, вежливо вернуть и запросить осмотр сумки.",
                feedback: "Правильно: тщательная проверка документов и продолжение контроля."
              },
              ar: {
                text: "فحص صحة الهوية وبلوغ السن القانونية، وإعادتها بأدب وطلب الموافقة على فحص الحقيبة.",
                feedback: "صحيح: تدقيق مهني في الهوية ومواصلة إجراءات الدخول."
              },
              fa: {
                text: "بررسی اصالت مدرک و سن قانونی، بازگرداندن مؤدبانه و تقاضای اجازه بازرسی کیف.",
                feedback: "صحیح: بازرسی دقیق مدارک و ادامه منظم فرآیند پذیرش."
              }
            }
          },
          {
            id: "2_wrong",
            text: "Das Dokument ohne genaue Sichtprüfung ignorieren und die Person sofort durchwinken.",
            is_correct: false,
            response_video: `${BASE_URL}05_falsch_szene2_durchwinken.falsch.mp4`,
            feedback: "Verletzung der Kontrollpflicht. Einlasskriterien (z. B. Jugendschutzgesetz) müssen sorgfältig geprüft werden.",
            next_scene_id: null,
            translations: {
              en: {
                text: "Ignore the document without visual check and wave the person through immediately.",
                feedback: "Violation of inspection duty. Admission criteria (e.g. youth protection laws) must be verified."
              },
              ru: {
                text: "Игнорировать документ без проверки и сразу пропустить человека.",
                feedback: "Нарушение обязанностей контроля. Требования (например, защита несовершеннолетних) обязательны к проверке."
              },
              ar: {
                text: "تجاهل الوثيقة دون فحص والسماح للشخص بالدخول فوراً.",
                feedback: "إخلال بواجب التفتيش. يجب التحقق بدقة من معايير الدخول وقوانين حماية القاصرين."
              },
              fa: {
                text: "نادیده گرفتن مدرک بدون بازبینی بصری و اجازه ورود سریع به شخص.",
                feedback: "تخلف از وظیفه کنترل. معیارهای پذیرش (از جمله قانون حمایت از نوجوانان) باید به دقت بررسی شوند."
              }
            }
          }
        ]
      },
      {
        id: 3,
        title: "Taschenkontrolle",
        translations: {
          en: {
            title: "Bag Inspection",
            question: "Under domiciliary rights (§ 903 BGB), a bag check is to take place. How do you proceed?"
          },
          ru: {
            title: "Осмотр сумок",
            question: "В рамках права распоряжения помещением (§ 903 BGB) требуется осмотр сумки. Ваши действия?"
          },
          ar: {
            title: "فحص الحقائب",
            question: "وفقاً لحق صاحب المكان (§ 903 BGB) يتعين فحص الحقيبة. كيف تبدأ الإجراء؟"
          },
          fa: {
            title: "بازرسی کیف",
            question: "در چارچوب حق مدیریت مکان (§ 903 BGB) باید بازرسی کیف انجام شود. چگونه اقدام می‌کنید؟"
          }
        },
        intro_video: null,
        idle_loop_video: `${BASE_URL}06_loop_szene3_vor_taschencheck.mp4`,
        question: "Im Rahmen des Hausrechts (§ 903 BGB) soll eine Taschenkontrolle erfolgen. Wie gehst du vor?",
        answers: [
          {
            id: "3_correct",
            text: "Den Gast bitten, die Tasche selbst zu öffnen und den Inhalt vorzuzeigen.",
            is_correct: true,
            response_video: `${BASE_URL}07_action_taschen_selbst_leeren.mp4richtig.mp4`,
            feedback: "Richtig: Taschenkontrollen an der Tür basieren auf freiwilligem Vorzeigen (Hausrecht nach § 903 BGB).",
            next_scene_id: 4,
            translations: {
              en: {
                text: "Politely request that the guest open the bag themselves and show its contents.",
                feedback: "Correct: Bag inspections at entrance doors are based on voluntary demonstration (domiciliary rights § 903 BGB)."
              },
              ru: {
                text: "Попросить гостя самостоятельно открыть сумку и показать содержимое.",
                feedback: "Правильно: осмотр сумок на входе основан на добровольном показе (§ 903 BGB)."
              },
              ar: {
                text: "الطلب من الزبون فتح حقيبته بنفسه وعرض محتوياتها طواعية.",
                feedback: "صحيح: فحص الحقائب يعتمد على العرض الطوعي بموجب حق صاحب المنشأة (§ 903 BGB)."
              },
              fa: {
                text: "تقاضا از مهمان جهت گشودن کیف توسط خودش و نمایش محتویات آن.",
                feedback: "صحیح: بازرسی کیف در ورودی بر مبنای ارائه داوطلبانه است (حق مدیریت مکان طبق ماده ۹۰۳)."
              }
            }
          },
          {
            id: "3_wrong",
            text: "Eigenmächtig und ohne Einwilligung direkt in die Tasche des Gastes greifen.",
            is_correct: false,
            response_video: `${BASE_URL}07_falsch_taschen_selbst_reingreifen.mp4falsch.mp4`,
            feedback: "Verbotene Eigenmacht (§ 858 BGB). Sicherheitskräfte haben keine hoheitlichen Durchsuchungsrechte und dürfen Taschen nur mit Zustimmung einsehen.",
            next_scene_id: null,
            translations: {
              en: {
                text: "Reach directly into the guest's bag without explicit consent.",
                feedback: "Unlawful self-assertion (§ 858 BGB). Private security has no sovereign search powers and may only inspect bags with consent."
              },
              ru: {
                text: "Самовольно и без согласия залезть руками в сумку гостя.",
                feedback: "Самоуправство (§ 858 BGB). Охрана не имеет властных полномочий обыска без согласия."
              },
              ar: {
                text: "الوصول باليد مباشرة داخل حقيبة الزبون دون موافقته الصريحة.",
                feedback: "تعدٍ محظور (§ 858 BGB). لا يملك حراس الأمن صلاحيات تفتيش سيادية جبرية."
              },
              fa: {
                text: "دست بردن مستقیم در کیف مهمان به صورت خودسرانه و بدون رضایت.",
                feedback: "تصرف غیرقانونی (§ 858 BGB). پرسنل حراست اختیارات حاکمیتی تفتیش اجباری ندارند."
              }
            }
          }
        ]
      },
      {
        id: 4,
        title: "Einlassentscheidung",
        translations: {
          en: {
            title: "Admission Decision",
            question: "All security checks were completed without issues. What is the final step?"
          },
          ru: {
            title: "Решение о допуске",
            question: "Все проверки прошли без замечаний. Каков финальный шаг?"
          },
          ar: {
            title: "قرار السماح بالدخول",
            question: "مرت جميع الفحوصات بسلام ودون أي ملاحظات. ما هي الخطوة الختامية؟"
          },
          fa: {
            title: "تصمیم نهایی برای ورود",
            question: "تمام مراحل بررسی بدون هیچ مشکلی پایان یافت. اقدام نهایی چیست؟"
          }
        },
        intro_video: null,
        idle_loop_video: `${BASE_URL}08_loop_szene4_taschen_offen.mp4.mp4`,
        question: "Alle Kontrollen verliefen beanstandungsfrei. Was ist der finale Schritt?",
        answers: [
          {
            id: "4_correct",
            text: "Einlass gewähren und dem Gast einen angenehmen und sicheren Abend wünschen.",
            is_correct: true,
            response_video: `${BASE_URL}09_action_einlass_gewaehren.mp4%20(RICHTIGE%20Antwort).mp4`,
            feedback: "Richtig: Alle Einlasskriterien erfüllt – der Gast wird freundlich eingelassen.",
            next_scene_id: null,
            translations: {
              en: {
                text: "Grant entry and wish the guest a pleasant and safe evening.",
                feedback: "Correct: All admission criteria fulfilled – guest is admitted politely."
              },
              ru: {
                text: "Разрешить вход и пожелать гостю приятного и безопасного вечера.",
                feedback: "Правильно: все условия выполнены — гость вежливо допускается в заведение."
              },
              ar: {
                text: "السماح بالدخول وتمني أمسية آمنة وممتعة للزبون.",
                feedback: "صحيح: تم استيفاء كافة الشروط — يتم الترحيب بالزبون للدخول."
              },
              fa: {
                text: "اجازه ورود دادن و آرزوی شبی امن و خوش برای مهمان.",
                feedback: "صحیح: تمامی شرایط ورود احراز شد — با احترام اجازه ورود داده می‌شود."
              }
            }
          },
          {
            id: "4_wrong",
            text: "Den Gast grundlos abweisen und sich vor anderen Gästen über ihn lustig machen.",
            is_correct: false,
            response_video: `${BASE_URL}9_falsch_szene4_schmiergeld_oder_willkuer.mp4%20(FALSCHE%20Antwort).mp4`,
            feedback: "Verstoß gegen die Dienstordnung und das Schikaneverbot (§ 226 BGB).",
            next_scene_id: null,
            translations: {
              en: {
                text: "Reject the guest without justification and mock them in front of other visitors.",
                feedback: "Violation of service instructions and prohibition of harassment (§ 226 BGB)."
              },
              ru: {
                text: "Безосновательно отказать во входе и насмехаться перед другими гостями.",
                feedback: "Нарушение служебных инструкций и запрета на злоупотребление правом (§ 226 BGB)."
              },
              ar: {
                text: "رفض دخول الزبون بلا سبب والسخرية منه أمام الحاضرين.",
                feedback: "مخالفة لتعليمات الخدمة وانتهاك لحظر التعسف والإيذاء (§ 226 BGB)."
              },
              fa: {
                text: "ممانعت بی‌دلیل از ورود مهمان و تمسخر وی در برابر سایرین.",
                feedback: "نقض مقررات شغلی و ممنوعیت ایذاء و سوء‌استفاده از حق (§ 226 BGB)."
              }
            }
          }
        ]
      }
    ]
  }
];

export const SCENARIO_DATA: InteractiveScenarioData = ALL_SCENARIOS[0];
