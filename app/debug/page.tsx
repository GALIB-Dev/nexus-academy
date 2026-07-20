'use client';
import { useState, useEffect } from 'react';
import { ProgressEngine } from '@/engines/progress/ProgressEngine';
import { storage } from '@/services/LocalStorageDataService';
import mission001 from '@/data/missions/mission-001.json';

export default function DebugPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const [progressState, setProgressState] = useState<any>(null);

  const log = (msg: string) => setLogs(prev => [...prev, msg]);

  useEffect(() => {
    async function runTest() {
      try {
        log("1. Starting test...");
        
        // Clear storage to ensure a clean slate
        localStorage.removeItem('nexus_progress');
        log("2. Cleared localStorage");
        
        // Initial get
        const p1 = storage.getProgress();
        log(`3. Initial progress loaded. XP: ${p1.xp}, Missions: ${Object.keys(p1.missions).length}`);
        
        // Run completeMission
        log("4. Calling ProgressEngine.completeMission(mission001)...");
        // @ts-ignore
        ProgressEngine.completeMission(mission001);
        
        // Load again
        const p2 = storage.getProgress();
        log(`5. After complete. XP: ${p2.xp}, Level: ${p2.level}`);
        log(`6. Mission 001 status: ${p2.missions['001']?.status}`);
        log(`7. Mission 002 status: ${p2.missions['002']?.status}`);
        log(`8. Activity History length: ${p2.activityHistory?.length}`);
        
        setProgressState(p2);
      } catch (e: any) {
        log(`ERROR: ${e.message}`);
      }
    }
    
    runTest();
  }, []);

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Debug Runner</h1>
      <div className="bg-black text-green-400 p-4 rounded font-mono text-sm whitespace-pre-wrap">
        {logs.join('\n')}
      </div>
      <div className="bg-gray-100 p-4 rounded text-xs overflow-auto max-h-96">
        <pre>{JSON.stringify(progressState, null, 2)}</pre>
      </div>
    </div>
  );
}
