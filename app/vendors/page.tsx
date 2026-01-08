"use client";

import { useVendors } from "@/hooks/useVendors";
import { VendorTable } from "@/components/tables/VendorTable";

export default function VendorsPage() {
  const { vendors, loading } = useVendors();

  if (loading) return <div>Loading vendors…</div>;

  return <VendorTable vendors={vendors} />;
}
