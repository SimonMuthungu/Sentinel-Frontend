// type Props = { params: { vendorId: string } };

// export default function VendorDetailPage({ params }: Props) {
//   return <div>Vendor {params.vendorId}</div>;
// }

import Link from "next/link";

type Props = { params: { vendorId: string } };

export default function VendorDetailPage({ params }: Props) {
  const { vendorId } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Vendor {vendorId}</h1>

      {/* ✅ Vendor-specific Reports link */}
      <Link
        href={`/vendors/${vendorId}/reports`}
        className="text-blue-600 hover:underline"
      >
        View Reports
      </Link>
    </div>
  );
}