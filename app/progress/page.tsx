import type { Metadata } from 'next';
import { Target, Star, Flame, Trophy, Activity, Brain, Code, TerminalSquare } from 'lucide-react';

export const metadata: Metadata = { title: 'Progress' };

export default function ProgressPage() {
  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Your Journey</h1>
        <p className="text-muted-foreground">Track your learning progress and mastery.</p>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Overall Progress", value: "0%", icon: Target, color: "text-primary", bg: "bg-primary/10" },
          { label: "Total XP", value: "0", icon: Star, color: "text-xp", bg: "bg-xp/10" },
          { label: "Current Level", value: "Learner", icon: Trophy, color: "text-level", bg: "bg-level/10" },
          { label: "Day Streak", value: "0", icon: Flame, color: "text-warning", bg: "bg-warning/10" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 p-5 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <div className={`p-1.5 rounded-md ${stat.bg}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              {stat.label}
            </div>
            <div className="text-3xl font-bold text-foreground mt-2">{stat.value}</div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" /> Analytics Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-border bg-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Brain className="w-4 h-4 text-success" /> Quiz Accuracy
                </span>
                <span className="text-sm font-bold text-success">--%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-success rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
            
            <div className="p-5 rounded-xl border border-border bg-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <TerminalSquare className="w-4 h-4 text-info" /> Debug Success
                </span>
                <span className="text-sm font-bold text-info">--%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-info rounded-full" style={{ width: '0%' }} />
              </div>
            </div>

            <div className="p-5 rounded-xl border border-border bg-card space-y-3 sm:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" /> Practice Completion
                </span>
                <span className="text-sm font-bold text-primary">--%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-elevated overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" /> Mission Progress
          </h2>
          <div className="p-5 rounded-xl border border-border bg-card h-[220px] flex flex-col items-center justify-center text-center">
            <Trophy className="w-12 h-12 text-muted-foreground opacity-20 mb-3" />
            <p className="text-sm text-muted-foreground">Complete a mission to unlock detailed performance insights.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
