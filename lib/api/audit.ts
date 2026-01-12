import { api } from "./client";

export type AuditLog = {
  id: string;
  vendor_id: string;
  decision: string;
  confidence: number;
  created_at: string;
  action: string;
};

export const fetchAuditLogs = () =>
  api<AuditLog[]>("/audit");
