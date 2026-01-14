export interface Escalation {
  id: string;
  vendor_id?: string;
  run_id?: string;
  created_at: string;
  decision?: string;
  confidence?: number;
  final_assessment?: string;
  recommended_actions?: string;
  policy_violations?: any; // refine if you know JSON shape
  status: string;
}