export function Card({ title, children }: any) {
  return (
    <div className="bg-white border rounded p-4">
      <h3 className="font-medium mb-2">{title}</h3>
      {children}
    </div>
  );
}
