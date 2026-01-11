import Link from "next/link";
import { Vendor } from "@/lib/types/vendor";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function VendorTable({ vendors }: { vendors: Vendor[] }) {
  return (
    <table className="w-full text-sm text-left border-collapse">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 font-semibold text-gray-700">Name</th>
          <th className="px-4 py-2 font-semibold text-gray-700">Risk</th>
          <th className="px-4 py-2 font-semibold text-gray-700">Status</th>
        </tr>
      </thead>
      <tbody>
        {(vendors ?? []).map((v) => (
          <tr key={v.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2">
              <Link href={`/vendors/${v.id}`} className="text-blue-600 hover:underline">
                {v.name}
              </Link>
            </td>
            <td className="px-4 py-2">{v.risk_score}</td>
            <td className="px-4 py-2">
              <StatusBadge status={v.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}