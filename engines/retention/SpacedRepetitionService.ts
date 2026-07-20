// engines/retention/SpacedRepetitionService.ts
import type { DataService } from '@/services/DataService';
import { SM2_MIN_EF, SPACED_REPETITION_INTERVALS } from '@/types/progress.types';

export class SpacedRepetitionService {
  constructor(private dataService: DataService) {}
  init(): void {}
  destroy(): void {}

  computeNextInterval(currentInterval: number, easinessFactor: number, repetitions: number, quality: number) {
    if (quality < 3) return { intervalDays: 1, easinessFactor, repetitions: 0 };
    let nextInterval: number;
    if (repetitions === 0) nextInterval = 1;
    else if (repetitions === 1) nextInterval = 6;
    else nextInterval = Math.round(currentInterval * easinessFactor);
    const newEF = Math.max(SM2_MIN_EF, easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    return { intervalDays: nextInterval, easinessFactor: newEF, repetitions: repetitions + 1 };
  }

  getV1Interval(reviewNumber: number): number {
    const index = Math.min(reviewNumber, SPACED_REPETITION_INTERVALS.length - 1);
    return SPACED_REPETITION_INTERVALS[index];
  }
}
