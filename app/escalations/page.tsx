"use client";

import { useEscalations } from "@/hooks/useEscalations";

export default function EscalationsPage() {
  const { escalations, loading } = useEscalations();

  if (loading) return <div>Loading escalations…</div>;
  if (!escalations.length) return <div>No escalations to show</div>;

  return (
    <ul>
      {escalations.map((e) => (
        <li key={e.id}>
          {e.id} — {e.status} — {new Date(e.created_at).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
