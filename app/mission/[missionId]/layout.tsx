import type { Metadata } from 'next';
import { MissionHeader } from '@/components/mission/MissionHeader';

export const metadata: Metadata = { title: 'Mission' };

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <MissionHeader />
      <main className="flex-1 flex flex-col items-center p-6 lg:p-10 w-full max-w-4xl mx-auto box-border">
        {children}
        <div className="h-32 shrink-0 w-full" aria-hidden="true" />
      </main>
    </div>
  );
}
