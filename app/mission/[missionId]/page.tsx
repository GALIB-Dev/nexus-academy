import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Mission' };
interface Props { params: Promise<{ missionId: string }> }
export default async function MissionPage({ params }: Props) {
  const { missionId } = await params;
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-semibold text-foreground mb-2">Mission {missionId}</h1>
      <p className="text-foreground-muted text-sm">Mission overview and step navigation.</p>
    </div>
  );
}
