// engines/curiosity/CuriosityEngine.ts
import type { CuriosityBlock } from '@/types/mission.types';
import { type FormattedCuriosityContent, CuriosityContentError } from './curiosity.types';

export class CuriosityEngine {
  formatForDisplay(block: CuriosityBlock): FormattedCuriosityContent {
    const requiredFields: (keyof CuriosityBlock)[] = ['didYouKnow', 'realWorldApplication', 'aiApplication', 'eeeApplication', 'historicalFact', 'nextMissionPreview'];
    for (const field of requiredFields) {
      if (!block[field] || typeof block[field] !== 'string') throw new CuriosityContentError(field);
    }
    return { didYouKnow: block.didYouKnow, realWorldApplication: block.realWorldApplication, aiApplication: block.aiApplication, eeeApplication: block.eeeApplication, historicalFact: block.historicalFact, nextMissionPreview: block.nextMissionPreview };
  }
}
