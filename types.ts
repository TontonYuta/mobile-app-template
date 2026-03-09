export interface SyllabusItem {
  id: string;
  chapter: number;
  title: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface EssayQuestion {
  question: string;
  answer: string;
}

export interface Example {
  problem: string;
  solution: string;
}

export interface LessonContent {
  title: string;
  objectives: string[];
  theory: string;
  examples: Example[];
  quiz: QuizQuestion[];
  essay: EssayQuestion[];
  keyTakeaways: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}