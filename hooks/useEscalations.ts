import { useEffect, useState } from "react";
import { fetchEscalations, Escalation } from "@/lib/api/escalations";

export function useEscalations() {
  const [escalations, setEscalations] = useState<Escalation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEscalations()
      .then((data) => setEscalations(data ?? []))
      .finally(() => setLoading(false));
  }, []);

  return { escalations, loading };
}