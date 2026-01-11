import { api } from "./client";
import { Vendor } from "@/lib/types/vendor";

export const fetchVendors = async (): Promise<Vendor[]> => {
  return api<Vendor[]>("/vendors/");
};

export const fetchVendor = (id: string) =>
  api(`/vendors/${id}`);

