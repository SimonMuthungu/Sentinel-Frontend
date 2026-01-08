import { api } from "./client";
import { Vendor } from "./types/vendor";

export function fetchVendors() {
  return api<Vendor[]>("/vendors");
}
