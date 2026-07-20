'use client';
import type { DebugChallengeStep } from '@/types/mission.types';
import { useState } from 'react';
import { Bug, Search, Check, AlertOctagon } from 'lucide-react';

export function DebugChallengeStepComponent({ step }: { step: DebugChallengeStep }) {
  const [hintIndex, setHintIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  return (
    <div className="w-full max-w-3xl space-y-6 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold font-bangla-ui text-foreground">{step.title}</h2>
        <span className="px-3 py-1 bg-destructive/10 text-destructive border border-destructive/20 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
          <Bug className="w-3 h-3" /> {step.bugType}
        </span>
      </div>
      
      <p className="font-bangla text-muted-foreground p-4 bg-surface rounded-lg border border-border">{step.scenario}</p>

      {!isFixed ? (
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-destructive/30 font-mono text-sm shadow-md shadow-destructive/5 relative">
            <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none"><Bug className="w-24 h-24 text-destructive" /></div>
            <div className="bg-[#0d1117] p-6 text-red-300">
              <pre><code>{step.buggyCode.split('\n').map((line, i) => (
                <div key={i} className={i + 1 === step.bugLine ? "bg-destructive/20 -mx-6 px-6 py-1 border-l-4 border-destructive" : ""}>
                  <span className="text-muted-foreground mr-4 opacity-50">{i + 1}</span>{line}
                </div>
              ))}</code></pre>
            </div>
            <div className="bg-destructive/10 p-4 text-destructive border-t border-destructive/30 flex items-center gap-2 font-medium">
              <AlertOctagon className="w-4 h-4 shrink-0" /> {step.errorMessage}
            </div>
          </div>
          
          <div className="space-y-2">
            {step.hints.slice(0, hintIndex).map((hint, i) => (
              <div key={i} className="p-4 bg-info/10 rounded-lg border border-info/20 font-bangla text-info text-sm flex gap-3">
                <Search className="w-5 h-5 shrink-0" /> {hint}
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {hintIndex < step.hints.length && (
              <button onClick={() => setHintIndex(prev => prev + 1)} className="px-4 py-2 text-sm font-medium text-info bg-info/10 hover:bg-info/20 rounded-lg transition-colors border border-info/20">
                Reveal Hint ({step.hints.length - hintIndex})
              </button>
            )}
            <button onClick={() => setIsFixed(true)} className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-lg transition-colors">
              I found and fixed it
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="p-6 rounded-xl border border-success/30 bg-success/10 text-success text-center">
            <Check className="w-12 h-12 mx-auto mb-2" />
            <span className="font-bangla font-bold text-xl">বাগ ফিক্সড!</span>
          </div>
          <div className="rounded-xl overflow-hidden border border-success/30 font-mono text-sm shadow-md">
            <div className="bg-[#0d1117] p-6 text-blue-300"><pre><code>{step.fixedCode}</code></pre></div>
            <div className="bg-[#05070a] p-4 text-success border-t border-success/30">✓ Executed successfully</div>
          </div>
          <p className="font-bangla text-foreground bg-surface p-4 rounded-lg border border-border font-medium">{step.explanation}</p>
        </div>
      )}
    </div>
  );
}
