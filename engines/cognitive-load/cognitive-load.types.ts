// engines/cognitive-load/cognitive-load.types.ts
export interface CognitiveLoadSignal {
  missionId: string;
  estimatedLevel: 1 | 2 | 3 | 4 | 5;
  timestamp: string;
}
