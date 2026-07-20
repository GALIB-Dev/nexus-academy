// engines/adaptive/adaptive.types.ts
export interface AdaptiveSignal {
  missionId: string;
  signalType: 'quiz_struggle' | 'debug_struggle' | 'practice_skip' | 'review_fail';
  timestamp: string;
}
