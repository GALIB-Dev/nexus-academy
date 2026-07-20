// engines/knowledge-graph/knowledge-graph.types.ts
export interface KnowledgeGraphNode {
  missionId: string;
  topicSlug: string;
  prerequisiteIds: string[];
  enablesIds: string[];
  relatedIds: string[];
}
