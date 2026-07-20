// engines/understanding/UnderstandingEngine.ts
import type { DataService } from '@/services/DataService';
import { UNDERSTANDING_WEIGHTS, type UnderstandingScoreComponents } from './understanding.types';

export class UnderstandingEngine {
  constructor(private dataService: DataService) {}
  init(): void {}
  destroy(): void {}
  computeScore(c: UnderstandingScoreComponents): number {
    return Math.round((c.quizComponent * UNDERSTANDING_WEIGHTS.quiz + c.debugComponent * UNDERSTANDING_WEIGHTS.debug + c.practiceComponent * UNDERSTANDING_WEIGHTS.practice + c.reflectionComponent * UNDERSTANDING_WEIGHTS.reflection + c.hintComponent * UNDERSTANDING_WEIGHTS.hints) * 100);
  }
}
