import type { Metadata } from 'next';
import { Moon, Sun, Monitor, Type, BrainCircuit, RotateCcw, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = { title: 'Settings' };

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your app preferences and learning environment.</p>
      </section>

      <div className="space-y-6">
        
        {/* Theme Settings */}
        <section className="p-6 rounded-xl border border-border bg-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary" /> Appearance
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg border-2 border-primary bg-primary/5 text-primary">
              <Moon className="w-6 h-6" />
              <span className="text-sm font-medium">Dark Mode</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg border border-border bg-surface hover:bg-surface-hover text-muted-foreground">
              <Sun className="w-6 h-6" />
              <span className="text-sm font-medium">Light Mode</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg border border-border bg-surface hover:bg-surface-hover text-muted-foreground">
              <Monitor className="w-6 h-6" />
              <span className="text-sm font-medium">System</span>
            </button>
          </div>
        </section>

        {/* Font Settings */}
        <section className="p-6 rounded-xl border border-border bg-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Type className="w-5 h-5 text-primary" /> Typography
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-surface">
              <div>
                <h3 className="font-medium text-foreground">Font Size</h3>
                <p className="text-sm text-muted-foreground">Adjust text size for reading comfort.</p>
              </div>
              <div className="flex bg-surface-elevated rounded-lg p-1 border border-border">
                <button className="px-4 py-1.5 rounded-md bg-card shadow-sm border border-border text-sm font-medium text-foreground">Standard</button>
                <button className="px-4 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground">Large</button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Preferences */}
        <section className="p-6 rounded-xl border border-border bg-card space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-primary" /> Learning
          </h2>
          <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-surface">
            <div>
              <h3 className="font-medium text-foreground">Strict Scoring</h3>
              <p className="text-sm text-muted-foreground max-w-md">Require higher accuracy in quizzes and debug challenges to pass a mission.</p>
            </div>
            <div className="w-11 h-6 bg-surface-elevated rounded-full border border-border relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-muted-foreground"></div>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="p-6 rounded-xl border border-destructive/20 bg-destructive/5 space-y-4">
          <h2 className="text-lg font-semibold text-destructive flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Danger Zone
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">Reset Progress</h3>
              <p className="text-sm text-muted-foreground">Permanently delete all your XP, levels, and mission progress.</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-destructive hover:bg-destructive/90 text-white font-medium text-sm flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Reset Data
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
