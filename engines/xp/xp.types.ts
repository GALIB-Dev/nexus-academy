// engines/xp/xp.types.ts
export interface XPState {
  total: number;
  level: number;
  levelName: string;
  levelNameBangla: string;
  xpToNextLevel: number;
  xpInCurrentLevel: number;
  percentToNextLevel: number;
}

export interface LevelDefinition {
  level: number;
  xpRequired: number;
  title: string;
  banglaTitle: string;
}

export const LEVEL_DEFINITIONS: LevelDefinition[] = [
  { level: 1, xpRequired: 0, title: 'Learner', banglaTitle: '\u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0' },
  { level: 2, xpRequired: 100, title: 'Explorer', banglaTitle: '\u0985\u09a8\u09cd\u09ac\u09c7\u09b7\u09c0' },
  { level: 3, xpRequired: 300, title: 'Coder', banglaTitle: '\u0995\u09cb\u09a1\u09be\u09b0' },
  { level: 4, xpRequired: 600, title: 'Developer', banglaTitle: '\u09a1\u09c7\u09ad\u09c7\u09b2\u09aa\u09be\u09b0' },
  { level: 5, xpRequired: 1000, title: 'Builder', banglaTitle: '\u09a8\u09bf\u09b0\u09cd\u09ae\u09be\u09a4\u09be' },
  { level: 6, xpRequired: 1500, title: 'Engineer', banglaTitle: '\u09aa\u09cd\u09b0\u0995\u09cc\u09b6\u09b2\u09c0' },
  { level: 7, xpRequired: 2100, title: 'Architect', banglaTitle: '\u09b8\u09cd\u09a5\u09aa\u09a4\u09bf' },
  { level: 8, xpRequired: 2800, title: 'Expert', banglaTitle: '\u09ac\u09bf\u09b6\u09c7\u09b7\u099c\u09cd\u099e' },
  { level: 9, xpRequired: 3600, title: 'Master', banglaTitle: '\u09ae\u09be\u09b8\u09cd\u099f\u09be\u09b0' },
  { level: 10, xpRequired: 4500, title: 'Guru', banglaTitle: '\u0997\u09c1\u09b0\u09c1' },
];

export const MAX_LEVEL = 10;
