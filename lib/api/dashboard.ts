// frontend/lib/api/dashboard.ts
import { api } from "./client";

export type DashboardSummary = {
  total_vendors: number;
  active_escalations: number;
  recent_risk_events: number;
};

export const fetchDashboardSummary = (): Promise<DashboardSummary> =>
  api<DashboardSummary>("/dashboard/summary");