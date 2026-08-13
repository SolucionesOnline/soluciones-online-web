import Image from "next/image";
import Link from "next/link";
import { Product, cleanPromoLabel, getProductImage } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const image = getProductImage(product.slug);
  const promoLabel = cleanPromoLabel(product.promoLabel);

  return (
    <Link
      href={`/producto/${product.slug}`}
      className={`group flex flex-col rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-lg ${
        product.isPromo
          ? "border-2 border-deal bg-deal/5 shadow-md shadow-deal/20"
          : "border-border bg-white"
      }`}
    >
      {image && (
        <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-white">
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-contain p-2"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-brand-light">
          {product.brand}
        </span>
        {product.isPromo && (
          <span className="animate-pulse rounded-full bg-deal px-3 py-1 text-xs font-extrabold text-white">
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
        {product.isPromo ? (
          <p className="text-sm font-extrabold text-deal">
            🔥 {promoLabel ?? "¡Oferta imperdible!"} — Consultá ya
          </p>
        ) : (
          <p className="text-sm font-semibold text-brand">Consultar precio →</p>
        )}
      </div>
    </Link>
  );
}
