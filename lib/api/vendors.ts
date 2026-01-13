import { api } from "./client";
import { Vendor } from "@/lib/types/vendor";
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";


export const fetchVendors = async (): Promise<Vendor[]> => {
  return api<Vendor[]>("/vendors/");
};

export const fetchVendor = (id: string) =>
  api(`/vendors/${id}`);

export const reviewVendor = (id: string) =>
  api(`/vendors/${id}/review`, { method: "POST" });

export const uploadVendorDoc = async (id: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/vendors/${id}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Upload failed");
  return res.json();
};

export const getVendorRuns = async (vendorId: string) => {
  const res = await fetch(`${API_BASE}/vendors/${vendorId}/reports`);
  if (!res.ok) throw new Error("Failed to fetch vendor reports");
  return res.json();
};