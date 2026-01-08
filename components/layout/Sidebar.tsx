import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/vendors", label: "Vendors" },
  { href: "/escalations", label: "Escalations" },
  { href: "/audit", label: "Audit Log" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h1 className="font-bold text-xl mb-6">Sentinel</h1>
      <nav className="space-y-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="block text-sm hover:underline">
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
