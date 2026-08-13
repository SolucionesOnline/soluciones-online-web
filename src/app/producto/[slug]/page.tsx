import Image from "next/image";
import { notFound } from "next/navigation";
import ArsPrice from "@/components/ArsPrice";
import PriceTag from "@/components/PriceTag";
import ProductCard from "@/components/ProductCard";
import {
  formatUsd,
  getProductBySlug,
  getProductImage,
  products,
  relatedProducts,
} from "@/lib/products";
import { waLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Soluciones Online`,
    description: `${product.name} a ${formatUsd(product.priceX1)}. Envío a todo el país y garantía.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = relatedProducts(product);
  const image = getProductImage(product.slug);
  const mayoristaDiff = Math.round(product.priceX1 - product.priceX5);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 sm:grid-cols-2">
        {image ? (
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-white">
            <Image
              src={image}
              alt={product.name}
              fill
              className="object-contain p-6"
              sizes="(min-width: 640px) 50vw, 100vw"
              priority
            />
          </div>
        ) : (
          <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-surface text-sm text-neutral-400">
            Foto próximamente
          </div>
        )}

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-light">
            {product.brand} · {product.category}
          </span>
          <h1
            className={`mt-2 text-2xl text-brand-dark sm:text-3xl ${
              product.isPromo ? "font-extrabold" : "font-bold"
            }`}
          >
            {product.isPromo && "🔥 "}
            {product.name}
          </h1>

          {product.isPromo && (
            <span className="mt-3 inline-block rounded-full bg-deal px-3 py-1 text-xs font-bold text-white">
              🔥 {product.promoLabel ?? "OFERTA"}
            </span>
          )}

          <div className="mt-6 rounded-2xl border border-border p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-neutral-500">Precio unitario</span>
              <PriceTag value={product.priceX1} className="text-3xl font-bold" />
            </div>
            <ArsPrice
              usd={product.priceX1}
              className="block text-right text-xs text-neutral-500"
            />
            <p className="mt-3 border-t border-border pt-3 text-sm font-bold text-brand-dark">
              Mayorista x5 equipos {mayoristaDiff} dólares menos c/u
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Precio en dólares. Pagando en pesos se toma la cotización del
              dólar blue (precio de venta) + $15 ARS, vigente al momento de
              reservar, más Mercado Pago disponible en cuotas.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(`Hola! Quiero consultar por ${product.name} (${formatUsd(product.priceX1)}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Consultar por WhatsApp
            </a>
            <a
              href={waLink(`Hola! Quiero comprar ${product.name}. ¿Cómo sigo?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
            >
              Comprar ahora
            </a>
          </div>

          <ul className="mt-8 space-y-1 text-sm text-neutral-600">
            <li>🛡️ Garantía Oficial</li>
            <li>📦 Envío gratis a partir de 2 unidades</li>
            <li>🔢 Compra mínima mayorista: 3 unidades (no aplica a productos menores a USD 50)</li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-brand-dark">
            Más de {product.brand}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
