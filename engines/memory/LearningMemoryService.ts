// engines/memory/LearningMemoryService.ts
import type { DataService } from '@/services/DataService';
export class LearningMemoryService {
  constructor(private dataService: DataService) {}
  init(): void {}
  destroy(): void {}
}
