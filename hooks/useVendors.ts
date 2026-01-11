// hooks/useVendors.ts
import { useEffect, useState } from "react";
import { fetchVendors } from "@/lib/api/vendors";
import { Vendor } from "@/lib/types/vendor";

export function useVendors() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVendors()
      .then((data) => {
        setVendors(data ?? []);
      })
      .finally(() => setLoading(false));
  }, []);

  return { vendors, loading }; // ← return object
}