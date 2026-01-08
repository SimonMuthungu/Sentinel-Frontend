// export type VendorStatus = 'approved' | 'pending' | 'rejected';

export interface Vendor {
  id: string;
  name: string;
  risk_score: number;
  status: "low" | "medium" | "high";
}

