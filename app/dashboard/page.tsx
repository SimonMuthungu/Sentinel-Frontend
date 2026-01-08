import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card title="Vendors">Tracked vendors overview</Card>
      <Card title="Escalations">Pending reviews</Card>
      <Card title="Risk Events">Recent activity</Card>
    </div>
  );
}
