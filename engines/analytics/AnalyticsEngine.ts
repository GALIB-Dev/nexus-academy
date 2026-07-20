// engines/analytics/AnalyticsEngine.ts
import type { DataService } from '@/services/DataService';
export class AnalyticsEngine {
  constructor(private dataService: DataService) {}
  init(): void {}
  destroy(): void {}
}
