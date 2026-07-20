// engines/analytics/analytics.types.ts
export interface AnalyticsSummary {
  totalStudyTimeMs: number;
  sessionCount: number;
  averageSessionTimeMs: number;
  missionsCompleted: number;
  missionsInProgress: number;
  averageUnderstandingScore: number;
  quizAccuracyPercent: number;
  debugSuccessRate: number;
  practiceCompletionRate: number;
  reflectionCompletionRate: number;
  totalXP: number;
  currentLevel: number;
}
