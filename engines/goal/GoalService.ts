// engines/goal/GoalService.ts
import type { DataService } from '@/services/DataService';
import { type DailyGoal, DEFAULT_DAILY_GOAL } from './goal.types';
export class GoalService {
  constructor(private dataService: DataService) {}
  getTodaysGoal(): DailyGoal {
    return { target: DEFAULT_DAILY_GOAL, completed: 0, percentage: 0, isAchieved: false };
  }
}
