export interface ScenarioAnswerTranslations {
  en?: { text: string; feedback: string };
  ru?: { text: string; feedback: string };
  ar?: { text: string; feedback: string };
  fa?: { text: string; feedback: string };
}

export interface ScenarioAnswer {
  id: string;
  text: string;
  is_correct: boolean;
  response_video: string;
  feedback: string;
  legal_basis?: string;
  next_scene_id: number | null;
  translations?: ScenarioAnswerTranslations;
}

export interface ScenarioSceneTranslations {
  en?: { title: string; question: string };
  ru?: { title: string; question: string };
  ar?: { title: string; question: string };
  fa?: { title: string; question: string };
}

export interface ScenarioScene {
  id: number;
  title: string;
  intro_video: string | null;
  idle_loop_video: string;
  question: string;
  topic?: string;
  answers: ScenarioAnswer[];
  translations?: ScenarioSceneTranslations;
}

export interface InteractiveScenarioData {
  id?: string;
  title: string;
  translations?: {
    en?: { title: string };
    ru?: { title: string };
    ar?: { title: string };
    fa?: { title: string };
  };
  scenes: ScenarioScene[];
}
