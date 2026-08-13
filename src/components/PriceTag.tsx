export default function PriceTag({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  return (
    <span className={className}>
      <span className="text-brand-dark">USD </span>
      <span className="text-red-600">{value.toLocaleString("en-US")}</span>
    </span>
  );
}
