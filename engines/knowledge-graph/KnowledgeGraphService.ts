// engines/knowledge-graph/KnowledgeGraphService.ts
import type { DataService } from '@/services/DataService';
export class KnowledgeGraphService {
  constructor(private dataService: DataService) {}
  init(): void {}
  destroy(): void {}
}
