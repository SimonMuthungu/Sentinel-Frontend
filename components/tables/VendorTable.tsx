import Link from "next/link";
import { Vendor } from "@/lib/types/vendor";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { reviewVendor, uploadVendorDoc } from "@/lib/api/vendors"; // add upload API call

export function VendorTable({ vendors }: { vendors: Vendor[] }) {
  const handleUpload = async (vendorId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    await uploadVendorDoc(vendorId, file);
    alert(`Uploaded ${file.name} for vendor ${vendorId}`);
  };

  return (
    <table className="w-full text-sm text-left border-collapse">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 font-semibold text-gray-700">Name</th>
          <th className="px-4 py-2 font-semibold text-gray-700">Risk</th>
          <th className="px-4 py-2 font-semibold text-gray-700">Status</th>
          <th className="px-4 py-2 font-semibold text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {(vendors ?? []).map((v) => (
          <tr key={v.id} className="border-b hover:bg-gray-50">
            <td className="px-4 py-2">
              <Link
                href={`/vendors/${v.id}`}
                className="text-blue-600 hover:underline"
              >
                {v.name}
              </Link>
            </td>
            <td className="px-4 py-2">{v.risk_score}</td>
            <td className="px-4 py-2">
              <StatusBadge status={v.status} />
            </td>
            <td className="px-4 py-2 space-x-2">
              <button
                onClick={() => reviewVendor(v.id)}
                className="px-2 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Review
              </button>
              <label className="cursor-pointer text-indigo-600 hover:underline">
                Upload PDF
                <input
                  type="file"
                  accept="application/pdf"
                  hidden
                  onChange={(e) => handleUpload(v.id, e)}
                />
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}