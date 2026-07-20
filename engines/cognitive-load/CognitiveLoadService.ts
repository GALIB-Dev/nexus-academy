// engines/cognitive-load/CognitiveLoadService.ts
import type { DataService } from '@/services/DataService';
export class CognitiveLoadService {
  constructor(private dataService: DataService) {}
  init(): void {}
  destroy(): void {}
}
