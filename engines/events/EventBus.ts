// engines/events/EventBus.ts
// NEXUS Academy — Domain Event Bus
// Source of truth: ARCHITECTURE.md Section 4
//
// DESIGN:
// - Synchronous pub/sub in V1 (simplicity, easy tracing)
// - Async upgrade path: replace the dispatch loop with queueMicrotask() — no subscriber changes
// - Module-level singleton (NOT stored in React state — survives re-renders)
// - Every subscribe() returns an unsubscribe() function — MUST be called in useEffect cleanup
// - Debug mode logs all events in development
//
// RULES (ARCHITECTURE.md Section 4 Design Principles):
// 1. The EventBus has NO business logic. It is pure pub/sub.
// 2. Maximum event chain depth: 3 levels.
// 3. AchievementService must NOT subscribe to ACHIEVEMENT_UNLOCKED (self-referential loop).
// 4. Only UnderstandingEngine may emit MISSION_COMPLETED.

import type { DomainEvent, EventType } from './events.types';

type Handler<T extends DomainEvent> = (event: T) => void;
type AnyHandler = Handler<DomainEvent>;

const DEBUG = process.env.NODE_ENV === 'development';

class EventBusImpl {
  private listeners: Map<EventType, Set<AnyHandler>> = new Map();

  /**
   * Subscribe to an event type.
   * Returns an unsubscribe function — MUST be called in useEffect cleanup to prevent memory leaks.
   *
   * @example
   * useEffect(() => {
   *   const unsub = EventBus.subscribe('QUIZ_PASSED', handler);
   *   return unsub; // React cleanup
   * }, []);
   */
  subscribe<T extends DomainEvent>(
    type: T['type'],
    handler: Handler<T>
  ): () => void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    this.listeners.get(type)!.add(handler as AnyHandler);

    return () => {
      this.listeners.get(type)?.delete(handler as AnyHandler);
    };
  }

  /**
   * Emit an event synchronously.
   * All registered handlers for this event type are called immediately.
   *
   * Note on async upgrade path (V2):
   * To make emission async, replace the forEach body with:
   *   queueMicrotask(() => { try { handler(event); } catch ... })
   * The interface does not change — only the dispatch mechanism.
   */
  emit<T extends DomainEvent>(event: T): void {
    if (DEBUG) {
      console.debug(`[EventBus] ${event.type}`, event.payload);
    }

    const handlers = this.listeners.get(event.type as EventType);
    if (!handlers || handlers.size === 0) return;

    handlers.forEach((handler) => {
      try {
        handler(event);
      } catch (err) {
        console.error(`[EventBus] Handler threw for event "${event.type}":`, err);
      }
    });
  }

  /**
   * Remove all listeners for a specific event type.
   * Used for testing only — never call in production code.
   */
  clearListeners(type: EventType): void {
    this.listeners.delete(type);
  }

  /**
   * Remove all listeners for all event types.
   * Used for testing only — never call in production code.
   */
  clearAllListeners(): void {
    this.listeners.clear();
  }

  /**
   * Returns the number of registered listeners for a given event type.
   * Useful for debugging.
   */
  listenerCount(type: EventType): number {
    return this.listeners.get(type)?.size ?? 0;
  }
}

/**
 * The singleton EventBus instance.
 * Import and use directly — do NOT store in React state or useRef.
 *
 * @example
 * import { EventBus } from '@/engines/events/EventBus';
 * EventBus.emit({ type: 'QUIZ_PASSED', payload: { ... } });
 */
export const EventBus = new EventBusImpl();
