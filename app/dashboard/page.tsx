"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { fetchDashboardSummary, DashboardSummary } from "@/lib/api/dashboard";

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    fetchDashboardSummary()
      .then(setSummary)
      .catch((err) => console.error("Failed to fetch dashboard summary:", err));
  }, []);

  if (!summary) return <div>Loading dashboard…</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
      <Card title="Vendors">{summary.total_vendors}</Card>
      <Card title="Escalations (Human Review Required)">{summary.active_escalations}</Card>
      <Card title="Risk Events">{summary.recent_risk_events}</Card>
    </div>
  );
}