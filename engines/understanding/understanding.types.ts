// engines/understanding/understanding.types.ts
export interface UnderstandingScoreComponents {
  quizComponent: number;
  debugComponent: number;
  practiceComponent: number;
  reflectionComponent: number;
  hintComponent: number;
}
export const UNDERSTANDING_WEIGHTS = { quiz: 0.40, debug: 0.25, practice: 0.20, reflection: 0.10, hints: 0.05 } as const;
export const UNDERSTANDING_THRESHOLDS = { DEEP: 90, SOLID: 70, PARTIAL: 50, INSUFFICIENT: 0 } as const;
export const WEAK_TOPIC_THRESHOLD = 60;
