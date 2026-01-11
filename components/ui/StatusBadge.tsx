// components/ui/StatusBadge.tsx
export function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const color =
    normalized === "active"
      ? "bg-green-100 text-green-800"
      : normalized === "inactive"
      ? "bg-gray-100 text-gray-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${color}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
    </span>
  );
}