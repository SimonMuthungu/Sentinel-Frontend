"use client";

import { useEscalations } from "@/hooks/useEscalations";

export default function EscalationsPage() {
  const { escalations, loading } = useEscalations();

  if (loading) return <div>Loading escalations…</div>;
  if (!escalations.length) return <div>No escalations to show</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Escalations</h1>
      <table className="min-w-full border border-gray-300 rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Vendor</th>
            <th className="px-4 py-2 border">Decision</th>
            <th className="px-4 py-2 border">Confidence</th>
            <th className="px-4 py-2 border">Assessment</th>
            <th className="px-4 py-2 border">Actions</th>
            <th className="px-4 py-2 border">Violations</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Created At</th>
          </tr>
        </thead>
        <tbody>
          {escalations.map((e) => (
            <tr key={e.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{e.id}</td>
              <td className="px-4 py-2 border">{e.vendor_id}</td>
              <td className="px-4 py-2 border">{e.decision}</td>
              <td className="px-4 py-2 border">{e.confidence}</td>
              <td className="px-4 py-2 border">{e.final_assessment}</td>
              <td className="px-4 py-2 border">{e.recommended_actions}</td>
              <td className="px-4 py-2 border">
                {JSON.stringify(e.policy_violations)}
              </td>
              <td className="px-4 py-2 border">{e.status}</td>
              <td className="px-4 py-2 border">
                {new Date(e.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}