// engines/xp/XPEngine.ts
import type { DataService } from '@/services/DataService';
import { LEVEL_DEFINITIONS, MAX_LEVEL } from './xp.types';
import type { XPState } from './xp.types';

export class XPEngine {
  private dataService: DataService;
  private unsubscribers: Array<() => void> = [];

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  init(): void {}
  destroy(): void {}

  computeXPState(totalXP: number): XPState {
    let level = 1;
    for (let i = LEVEL_DEFINITIONS.length - 1; i >= 0; i--) {
      if (totalXP >= LEVEL_DEFINITIONS[i].xpRequired) {
        level = LEVEL_DEFINITIONS[i].level;
        break;
      }
    }
    level = Math.min(level, MAX_LEVEL);
    const levelDef = LEVEL_DEFINITIONS[level - 1];
    const nextLevelDef = LEVEL_DEFINITIONS[Math.min(level, MAX_LEVEL - 1)];
    const xpInCurrentLevel = totalXP - levelDef.xpRequired;
    const xpToNextLevel = level === MAX_LEVEL ? 0 : nextLevelDef.xpRequired - levelDef.xpRequired;
    const percentToNextLevel = level === MAX_LEVEL ? 100 : Math.min(100, Math.round((xpInCurrentLevel / xpToNextLevel) * 100));
    return { total: totalXP, level, levelName: levelDef.title, levelNameBangla: levelDef.banglaTitle, xpToNextLevel, xpInCurrentLevel, percentToNextLevel };
  }
}
