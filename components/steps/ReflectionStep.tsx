'use client';
import type { ReflectionStep } from '@/types/mission.types';
import { useState } from 'react';
import { PenTool, CheckCircle } from 'lucide-react';

export function ReflectionStepComponent({ step }: { step: ReflectionStep }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="w-full max-w-2xl space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center border border-primary/20">
          <PenTool className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold font-bangla-ui text-foreground">{step.title}</h2>
        <p className="text-muted-foreground font-bangla">{step.instruction}</p>
      </div>

      <div className="space-y-4">
        {step.prompts.map((p, i) => (
          <div key={i} className={`p-6 rounded-xl border transition-all ${isDone ? 'bg-surface opacity-50' : 'bg-card border-border shadow-sm'}`}>
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Prompt {i+1}</span>
            <p className="font-bangla font-medium text-foreground text-lg">{p}</p>
          </div>
        ))}
      </div>

      {!isDone ? (
        <button onClick={() => setIsDone(true)} className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-sm text-lg">
          Complete Reflection
        </button>
      ) : (
        <div className="w-full p-4 text-center text-success font-semibold flex items-center justify-center gap-2 bg-success/10 rounded-xl border border-success/30">
          <CheckCircle className="w-5 h-5" /> Reflection Recorded
        </div>
      )}
    </div>
  );
}
