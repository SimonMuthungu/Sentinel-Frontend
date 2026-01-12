"use client";

import { useAudit } from "@/hooks/useAuditLogs";

export default function AuditPage() {
  const { auditLogs, loading } = useAudit();

  if (loading) return <div>Loading audit logs…</div>;
  if (!auditLogs.length) return <div>No audits to show</div>;

  return (
    <ul>
      {auditLogs.map((a) => (
        <li key={a.id}>
          {a.id} — {a.action} — {new Date(a.created_at).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
