import Image from "next/image";
import Link from "next/link";
import ArsPrice from "@/components/ArsPrice";
import PriceTag from "@/components/PriceTag";
import { Product, getProductImage } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const image = getProductImage(product.slug);
  const mayoristaDiff = Math.round(product.priceX1 - product.priceX5);

  return (
    <Link
      href={`/producto/${product.slug}`}
      className={`group flex flex-col rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-md ${
        product.isPromo
          ? "border-deal bg-deal/5 shadow-sm shadow-deal/20"
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
        <PriceTag
          value={product.priceX1}
          className={`font-bold ${product.isPromo ? "text-2xl" : "text-xl"}`}
        />
        <ArsPrice usd={product.priceX1} className="block text-xs text-neutral-500" />
        <p className="mt-1 text-xs font-bold text-neutral-500">
          Mayorista x5 equipos {mayoristaDiff} dólares menos c/u
        </p>
      </div>
    </Link>
  );
}
