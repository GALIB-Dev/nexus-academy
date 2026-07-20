// services/MigrationService.ts
// NEXUS Academy — Schema Migration Service
// Source of truth: ARCHITECTURE.md Section 5
//
// Runs on app startup. Detects schema version of stored data.
// Applies sequential migration functions to bring data up to current version.
// Migration functions are append-only — never delete old migrations.
//
// Sprint 01: Structure and V1 baseline. Full migration logic in Sprint 08.

import type { LearnerProgress } from '@/types/progress.types';
import { createDefaultProgress } from '@/types/progress.types';

const CURRENT_PROGRESS_SCHEMA_VERSION = 1;

export class MigrationService {
  /**
   * Migrate a LearnerProgress object from any past schema version to current.
   * If data is from a future version (shouldn't happen in V1), returns it unchanged.
   * If data is corrupt/invalid, returns a fresh default.
   */
  migrateProgress(raw: LearnerProgress): LearnerProgress {
    const version = raw._schemaVersion ?? 0;

    if (version === CURRENT_PROGRESS_SCHEMA_VERSION) {
      return raw;
    }

    if (version > CURRENT_PROGRESS_SCHEMA_VERSION) {
      console.warn(
        `[MigrationService] Data schema version ${version} is newer than app version ${CURRENT_PROGRESS_SCHEMA_VERSION}. Using data as-is.`
      );
      return raw;
    }

    // Apply sequential migrations
    let migrated: LearnerProgress = raw;

    // V0 → V1 migration (V0 = data written before schema versioning was introduced)
    if (version < 1) {
      migrated = this.migrateV0ToV1(migrated);
    }

    // Future migrations:
    // if (version < 2) { migrated = this.migrateV1ToV2(migrated); }
    // if (version < 3) { migrated = this.migrateV2ToV3(migrated); }

    return migrated;
  }

  private migrateV0ToV1(data: LearnerProgress): LearnerProgress {
    // V0 → V1: First version. Set schema version and ensure all required fields exist.
    const defaults = createDefaultProgress();
    return {
      ...defaults,
      ...data,
      _schemaVersion: 1,
      // Ensure new fields added in V1 have defaults if missing
      unlockedAchievements: data.unlockedAchievements ?? [],
      recentSessions: data.recentSessions ?? [],
    };
  }
}
