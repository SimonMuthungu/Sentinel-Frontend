import Link from "next/link";
import { Vendor } from "@/lib/types/vendor";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function VendorTable({ vendors }: { vendors: Vendor[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b">
          <th>Name</th>
          <th>Risk</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {vendors.map((v) => (
          <tr key={v.id} className="border-b">
            <td>
              <Link href={`/vendors/${v.id}`} className="underline">
                {v.name}
              </Link>
            </td>
            <td>{v.risk_score}</td>
            <td>
              <StatusBadge status={v.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
