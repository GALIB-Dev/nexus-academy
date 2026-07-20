import { notFound } from 'next/navigation';
import { getMissionData } from '@/services/ContentService';
import { StepRegistry } from '@/components/steps/StepRegistry';
import { MissionFooter } from '@/components/mission/MissionFooter';

interface Props { params: Promise<{ missionId: string; stepIndex: string }> }

export default async function StepPage({ params }: Props) {
  const { missionId, stepIndex } = await params;
  const index = parseInt(stepIndex, 10);

  if (isNaN(index) || index < 0) {
    notFound();
  }

  let missionData;
  try {
    missionData = await getMissionData(missionId);
  } catch {
    notFound();
  }

  // Guard: use actual steps length, not hardcoded 13
  if (index >= missionData.steps.length) {
    notFound();
  }

  const step = missionData.steps[index];
  if (!step) {
    notFound();
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col pb-32">
        <StepRegistry step={step} missionData={missionData} />
      </div>
      <MissionFooter missionData={missionData} currentIndex={index} />
    </>
  );
}
