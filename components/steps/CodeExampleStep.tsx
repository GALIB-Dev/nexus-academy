import type { CodeExampleStep } from '@/types/mission.types';
import { Terminal } from 'lucide-react';
export function CodeExampleStepComponent({ step }: { step: CodeExampleStep }) {
  return (
    <div className="w-full max-w-3xl space-y-6 animate-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-2xl font-bold font-bangla-ui text-foreground">{step.title}</h2>
      <p className="font-bangla text-muted-foreground">{step.explanation}</p>
      
      <div className="rounded-xl overflow-hidden border border-border shadow-2xl bg-[#0d1117]">
        <div className="bg-[#161b22] px-4 py-2 flex items-center gap-2 border-b border-border/50">
          <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
          <div className="w-3 h-3 rounded-full bg-warning/80"></div>
          <div className="w-3 h-3 rounded-full bg-success/80"></div>
          <span className="ml-2 text-xs font-mono text-muted-foreground flex-1 text-center">example.py</span>
        </div>
        <div className="p-6 font-mono text-sm text-blue-300 relative group">
          <pre><code>{step.code}</code></pre>
          {step.annotations && step.annotations.map(a => (
            <div key={a.lineNumber} className="absolute right-4 top-4 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-bangla text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {a.explanation}
            </div>
          ))}
        </div>
        <div className="bg-[#05070a] p-4 font-mono text-sm border-t border-border/50 text-green-400">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 uppercase">
            <Terminal className="w-3 h-3" /> Output
          </div>
          {step.output}
        </div>
      </div>

      {step.postExplanation && <p className="font-bangla text-sm text-info/90 bg-info/10 p-4 rounded-lg border border-info/20">{step.postExplanation}</p>}
    </div>
  );
}
