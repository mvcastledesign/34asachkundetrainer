export interface ScenarioAnswer {
  id: string;
  text: string;
  is_correct: boolean;
  response_video: string;
  feedback: string;
  legal_basis?: string;
  next_scene_id: number | null;
}

export interface ScenarioScene {
  id: number;
  title: string;
  intro_video: string | null;
  idle_loop_video: string;
  question: string;
  topic?: string;
  answers: ScenarioAnswer[];
}

export interface InteractiveScenarioData {
  id?: string;
  title: string;
  scenes: ScenarioScene[];
}
