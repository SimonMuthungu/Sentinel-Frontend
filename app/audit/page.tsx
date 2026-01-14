"use client";

import { useAudit } from "@/hooks/useAuditLogs";

export default function AuditPage() {
  const { auditLogs, loading } = useAudit();

  if (loading) return <div>Loading audit logs…</div>;
  if (!auditLogs.length) return <div>No audits to show</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>
      <table className="min-w-full border border-gray-300 rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Vendor ID</th>
            <th className="px-4 py-2 border">Trigger</th>
            <th className="px-4 py-2 border">Decision</th>
            <th className="px-4 py-2 border">Confidence</th>
            <th className="px-4 py-2 border">Created At</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((a) => (
            <tr key={a.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{a.id}</td>
              <td className="px-4 py-2 border">{a.vendor_id}</td>
              <td className="px-4 py-2 border">{a.trigger}</td>
              <td className="px-4 py-2 border">{a.decision}</td>
              <td className="px-4 py-2 border">{a.confidence}</td>
              <td className="px-4 py-2 border">
                {new Date(a.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}