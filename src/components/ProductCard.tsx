import Link from "next/link";
import { Product, formatUsd } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className={`group flex flex-col rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-md ${
        product.isPromo
          ? "border-deal bg-deal/5 shadow-sm shadow-deal/20"
          : "border-border bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-light">
          {product.brand}
        </span>
        {product.isPromo && (
          <span className="rounded-full bg-deal px-2 py-0.5 text-[11px] font-bold text-white">
            🔥 OFERTA
          </span>
        )}
      </div>

      <h3
        className={`mt-2 line-clamp-2 min-h-[2.5rem] text-brand-dark ${
          product.isPromo ? "text-base font-extrabold" : "text-sm font-semibold"
        }`}
      >
        {product.isPromo && "🔥 "}
        {product.name}
      </h3>

      <div className="mt-auto pt-3">
        <p
          className={`font-bold text-brand-dark ${
            product.isPromo ? "text-2xl text-deal" : "text-xl"
          }`}
        >
          {formatUsd(product.priceX1)}
        </p>
        <p className="text-xs text-neutral-500">
          Mayorista 5+: {formatUsd(product.priceX5)}
        </p>
      </div>
    </Link>
  );
}
