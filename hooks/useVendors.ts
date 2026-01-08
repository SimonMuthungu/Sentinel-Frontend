import { useEffect, useState } from "react";
import { fetchVendors } from "@/lib/vendors";
import { Vendor } from "@/lib/types/vendor";

export function useVendors() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVendors()
      .then(setVendors)
      .finally(() => setLoading(false));
  }, []);

  return { vendors, loading };
}
