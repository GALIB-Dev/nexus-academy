import type { ConceptStep } from '@/types/mission.types';
import { Lightbulb } from 'lucide-react';
export function ConceptStepComponent({ step }: { step: ConceptStep }) {
  return (
    <div className="w-full max-w-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold font-bangla-ui text-foreground">{step.title}</h2>
      <p className="text-lg font-bangla text-muted-foreground leading-relaxed">{step.content}</p>
      
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground border-b border-border pb-2">Key Points</h3>
        <ul className="space-y-2 list-disc list-inside font-bangla text-muted-foreground">
          {step.keyPoints.map((kp, i) => <li key={i}>{kp}</li>)}
        </ul>
      </div>

      <div className="p-6 rounded-xl bg-info/10 border border-info/20 flex gap-4">
        <Lightbulb className="w-6 h-6 text-info shrink-0" />
        <div>
          <h4 className="font-semibold text-info mb-1">Why this exists</h4>
          <p className="font-bangla text-info/90 text-sm">{step.whyCallout}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm font-bangla">
        <div className="p-4 rounded-lg bg-success/5 border border-success/20">
          <span className="font-semibold text-success block mb-1">When to use:</span>
          <span className="text-muted-foreground">{step.whenToUse}</span>
        </div>
        <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
          <span className="font-semibold text-destructive block mb-1">When NOT to use:</span>
          <span className="text-muted-foreground">{step.whenNotToUse}</span>
        </div>
      </div>
    </div>
  );
}
