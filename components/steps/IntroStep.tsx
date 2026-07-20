import type { IntroStep } from '@/types/mission.types';
export function IntroStepComponent({ step }: { step: IntroStep }) {
  return (
    <div className="w-full space-y-6 text-center animate-in slide-in-from-bottom-4 duration-700">
      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">Mission {step.missionNumber}</span>
      <h1 className="text-4xl lg:text-5xl font-bold font-bangla-ui text-foreground tracking-tight">{step.banglaTitle}</h1>
      <h2 className="text-xl text-primary font-bangla font-medium">{step.tagline}</h2>
      <p className="text-lg text-muted-foreground font-bangla max-w-2xl mx-auto leading-relaxed">{step.description}</p>
      
      <div className="mt-12 bg-card border border-border rounded-xl p-8 max-w-md mx-auto text-left shadow-sm">
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">What You&apos;ll Learn</h3>
        <ul className="space-y-3">
          {step.learningObjectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 font-bangla text-muted-foreground">
              <span className="flex shrink-0 w-6 h-6 items-center justify-center rounded-full bg-surface-elevated text-primary text-xs font-bold">{i+1}</span>
              <span className="pt-0.5">{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
