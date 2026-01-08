type Props = { params: { vendorId: string } };

export default function VendorDetailPage({ params }: Props) {
  return <div>Vendor {params.vendorId}</div>;
}

