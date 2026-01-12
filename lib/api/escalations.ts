import { api } from "./client";

export type Escalation = {
  id: string;  
  vendor_id: string;
  status: string;
  created_at: string;
};

export const fetchEscalations = () =>
  api<Escalation[]>("/escalations");
