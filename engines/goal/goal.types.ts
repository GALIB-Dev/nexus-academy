// engines/goal/goal.types.ts
export interface DailyGoal {
  target: number;
  completed: number;
  percentage: number;
  isAchieved: boolean;
}
export const DEFAULT_DAILY_GOAL = 3;
