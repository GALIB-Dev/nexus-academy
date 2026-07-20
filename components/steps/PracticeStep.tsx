'use client';
import type { PracticeStep } from '@/types/mission.types';
import { useState } from 'react';
import { HelpCircle, Check } from 'lucide-react';

export function PracticeStepComponent({ step }: { step: PracticeStep }) {
  const [hintIndex, setHintIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="w-full max-w-3xl space-y-6 animate-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold font-bangla-ui text-foreground">{step.title}</h2>
      <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl font-bangla text-lg font-medium text-foreground">
        {step.prompt}
      </div>

      {!isDone ? (
        <div className="space-y-4">
          <div className="space-y-2">
            {step.hints.slice(0, hintIndex).map((hint, i) => (
              <div key={i} className="p-4 bg-surface rounded-lg border border-border font-bangla text-muted-foreground text-sm flex gap-3">
                <HelpCircle className="w-5 h-5 shrink-0 text-info" /> {hint}
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            {hintIndex < step.hints.length && (
              <button onClick={() => setHintIndex(prev => prev + 1)} className="px-4 py-2 text-sm font-medium text-info bg-info/10 hover:bg-info/20 rounded-lg transition-colors border border-info/20">
                Show Hint ({step.hints.length - hintIndex} left)
              </button>
            )}
            <button onClick={() => setIsDone(true)} className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-lg transition-colors">
              I completed this
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="p-6 rounded-xl border border-success/30 bg-success/10 text-success text-center">
            <Check className="w-12 h-12 mx-auto mb-2" />
            <span className="font-bangla font-bold text-xl">দারুণ কাজ!</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-border font-mono text-sm">
            <div className="bg-[#0d1117] p-6 text-blue-300"><pre><code>{step.solution}</code></pre></div>
            <div className="bg-[#05070a] p-4 text-green-400 border-t border-border/50"><span className="text-xs text-muted-foreground uppercase mr-2">Output</span>{step.expectedOutput}</div>
          </div>
          <p className="font-bangla text-muted-foreground bg-surface p-4 rounded-lg border border-border">{step.solutionExplanation}</p>
        </div>
      )}
    </div>
  );
}
