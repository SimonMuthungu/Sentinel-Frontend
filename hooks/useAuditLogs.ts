import { useEffect, useState } from "react";
import { fetchAuditLogs, AuditLog } from "@/lib/api/audit";

export function useAudit() {
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuditLogs()
      .then((data) => setAuditLogs(data ?? []))
      .finally(() => setLoading(false));
  }, []);

  return { auditLogs, loading };
}
