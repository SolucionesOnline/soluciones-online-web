import Link from "next/link";
import { Product, formatUsd } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-light">
          {product.brand}
        </span>
        {product.entregaInmediata && (
          <span className="rounded-full bg-deal/10 px-2 py-0.5 text-[11px] font-semibold text-deal">
            Entrega inmediata
          </span>
        )}
      </div>

      <h3 className="mt-2 line-clamp-2 min-h-[2.5rem] text-sm font-semibold text-brand-dark">
        {product.name}
      </h3>

      <div className="mt-auto pt-3">
        <p className="text-xl font-bold text-brand-dark">
          {formatUsd(product.priceX1)}
        </p>
        <p className="text-xs text-neutral-500">
          Mayorista 5+: {formatUsd(product.priceX5)}
        </p>
      </div>
    </Link>
  );
}
