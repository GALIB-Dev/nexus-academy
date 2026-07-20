// types/dictionary.types.ts
// NEXUS Academy — Dictionary and Achievement Types
// Source of truth: DATA_SCHEMA.md Sections 8–9

import type { DictionaryCategory, AchievementConditionType } from './common.types';

// ============================================================
// 8. Dictionary Schema — data/dictionary.json
// ============================================================

export interface DictionaryEntry {
  id: string;                        // e.g. "variable", "function", "data_type"
  term: string;                      // English term: "Variable"
  banglaTerm: string;                // Bangla transliteration: "ভেরিয়েবল"
  banglaDefinition: string;          // Simple Bangla definition
  englishDefinition: string;         // Simple English definition
  category: DictionaryCategory;
  exampleCode?: string;              // Short Python example
  relatedTermIds: string[];          // Cross-references to other DictionaryEntry.id values
  introducedInMissionId: string;     // First mission where this term appears
  tags: string[];
}

// ============================================================
// 9. Achievement Schema — data/achievements.json
// ============================================================

export interface Achievement {
  id: string;                        // e.g. "first_mission", "perfect_quiz"
  title: string;                     // English title
  banglaTitle: string;               // Bangla title
  description: string;               // Bangla description
  icon: string;                      // Lucide icon name
  xpBonus: number;
  condition: AchievementCondition;
}

export interface AchievementCondition {
  type: AchievementConditionType;
  threshold?: number;                // For numeric conditions
  missionId?: string;                // For mission-specific achievements
}
