import { api } from "./client";

export type Escalation = {
  vendor_id: string;
  state: any;
  created_at: string;
};

export const fetchEscalations = () =>
  api<Escalation[]>("/escalations");
