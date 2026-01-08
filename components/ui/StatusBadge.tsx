export function StatusBadge({ status }: { status: string }) {
  const color =
    status === "high" ? "bg-red-100" : status === "medium" ? "bg-yellow-100" : "bg-green-100";

  return <span className={`px-2 py-1 rounded text-xs ${color}`}>{status}</span>;
}
