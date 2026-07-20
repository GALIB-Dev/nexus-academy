// engines/curiosity/curiosity.types.ts
export interface FormattedCuriosityContent {
  didYouKnow: string;
  realWorldApplication: string;
  aiApplication: string;
  eeeApplication: string;
  historicalFact: string;
  nextMissionPreview: string;
}
export class CuriosityContentError extends Error {
  constructor(field: string) {
    super(`[CuriosityEngine] Missing required curiosity field: ${field}`);
    this.name = 'CuriosityContentError';
  }
}
