import { InteractiveScenarioData } from '../types/videoScenario.ts';

const BASE_URL = 'https://tfkwxkpbnklwauljauta.supabase.co/storage/v1/object/public/trainer_videos/';

export const ALL_SCENARIOS: InteractiveScenarioData[] = [
  {
    id: "club_aura_1",
    title: "Einlasskontrolle Club Aura (§ 34a GewO)",
    scenes: [
      {
        id: 1,
        title: "Erstkontakt & Begrüßung",
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
            next_scene_id: 2
          },
          {
            id: "1_wrong",
            text: "Den Gast aggressiv anstarren, Macht demonstrieren und grundlos einschüchtern.",
            is_correct: false,
            response_video: `${BASE_URL}03_falsch_szene1_abweisungfalsch.mp4`,
            feedback: "Unprofessionelles Auftreten. Sicherheitskräfte treten deeskalierend und kundenorientiert auf.",
            next_scene_id: null
          }
        ]
      },
      {
        id: 2,
        title: "Ausweiskontrolle",
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
            next_scene_id: 3
          },
          {
            id: "2_wrong",
            text: "Das Dokument ohne genaue Sichtprüfung ignorieren und die Person sofort durchwinken.",
            is_correct: false,
            response_video: `${BASE_URL}05_falsch_szene2_durchwinken.falsch.mp4`,
            feedback: "Verletzung der Kontrollpflicht. Einlasskriterien (z. B. Jugendschutzgesetz) müssen sorgfältig geprüft werden.",
            next_scene_id: null
          }
        ]
      },
      {
        id: 3,
        title: "Taschenkontrolle",
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
            next_scene_id: 4
          },
          {
            id: "3_wrong",
            text: "Eigenmächtig und ohne Einwilligung direkt in die Tasche des Gastes greifen.",
            is_correct: false,
            response_video: `${BASE_URL}07_falsch_taschen_selbst_reingreifen.mp4falsch.mp4`,
            feedback: "Verbotene Eigenmacht (§ 858 BGB). Sicherheitskräfte haben keine hoheitlichen Durchsuchungsrechte und dürfen Taschen nur mit Zustimmung einsehen.",
            next_scene_id: null
          }
        ]
      },
      {
        id: 4,
        title: "Einlassentscheidung",
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
            next_scene_id: null
          },
          {
            id: "4_wrong",
            text: "Den Gast grundlos abweisen und sich vor anderen Gästen über ihn lustig machen.",
            is_correct: false,
            response_video: `${BASE_URL}9_falsch_szene4_schmiergeld_oder_willkuer.mp4%20(FALSCHE%20Antwort).mp4`,
            feedback: "Verstoß gegen die Dienstordnung und das Schikaneverbot (§ 226 BGB).",
            next_scene_id: null
          }
        ]
      }
    ]
  }
];

export const SCENARIO_DATA: InteractiveScenarioData = ALL_SCENARIOS[0];
