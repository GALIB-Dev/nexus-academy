import type { Metadata } from 'next';
import { Zap, Code, Shield, Cpu, Database } from 'lucide-react';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto space-y-12 pb-24">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-8 pb-12 border-b border-border">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
          <Zap className="w-10 h-10 text-primary" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground tracking-tight">NEXUS Academy</h1>
          <p className="text-xl text-muted-foreground font-bangla-ui">গভীরভাবে বোঝো, মুখস্ত নয়।</p>
        </div>
        <p className="max-w-2xl mx-auto text-foreground-muted leading-relaxed">
          NEXUS Academy is a next-generation Python learning platform. It is designed to teach programming through conceptual understanding, mental models, and adaptive spaced repetition, replacing rote memorization with true engineering intuition.
        </p>
      </section>

      {/* Overview Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BrainCircuitIcon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Cognitive First</h3>
          <p className="text-sm text-muted-foreground">Built around cognitive load theory. Concepts are introduced with analogies, stories, and visual mental models before syntax.</p>
        </div>
        
        <div className="p-6 rounded-xl border border-border bg-card space-y-3">
          <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
            <TargetIcon className="w-5 h-5 text-info" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Adaptive Mastery</h3>
          <p className="text-sm text-muted-foreground">The platform adapts to your understanding score. Missed concepts resurface automatically through intelligent spaced repetition.</p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Technology Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: 'Next.js', desc: 'App Router', icon: Code },
            { name: 'TypeScript', desc: 'Type Safety', icon: Shield },
            { name: 'Tailwind CSS', desc: 'v4 Styling', icon: Cpu },
            { name: 'Local-First', desc: 'Zero Latency', icon: Database },
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl border border-border bg-surface">
              <tech.icon className="w-6 h-6 text-foreground-faint mb-3" />
              <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Details */}
      <section className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">Version:</span> 1.0.0 (Foundation)
        </div>
        <div>
          Built for <span className="text-foreground font-medium">EEE Students</span>
        </div>
      </section>
    </div>
  );
}

// Local icons to keep imports clean
function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-5.224 5.224A4 4 0 0 0 4 18c1.5 0 2.8-1 3.5-2.5.5.6 1.2 1 2 1h1"/><path d="M16 11V6a4 4 0 1 0-6 3.92M20 10c0-1.1-.9-2-2-2h-1.5M20 18c-1.1 0-2-.9-2-2M20 14c-1.1 0-2-.9-2-2M21 16v-2"/><path d="M21 12v-2"/><path d="M22 18v-2"/></svg>;
}
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}
