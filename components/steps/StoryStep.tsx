import type { StoryStep } from '@/types/mission.types';
import { BookOpen } from 'lucide-react';
export function StoryStepComponent({ step }: { step: StoryStep }) {
  return (
    <div className="w-full max-w-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 text-muted-foreground mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <span className="text-sm font-semibold uppercase tracking-wider">{step.setting}</span>
      </div>
      <h2 className="text-3xl font-bold font-bangla-ui text-foreground">{step.title}</h2>
      <div className="prose prose-invert prose-lg font-bangla text-foreground-muted leading-relaxed">
        <p>{step.content}</p>
      </div>
      <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
        <p className="text-lg font-bangla font-semibold text-primary">💡 {step.moral}</p>
      </div>
    </div>
  );
}
