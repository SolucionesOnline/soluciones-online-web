import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  cleanPromoLabel,
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
    description: `${product.name}. Consultá precio y stock por WhatsApp. Envío a todo el país y garantía.`,
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
  const promoLabel = cleanPromoLabel(product.promoLabel);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 sm:grid-cols-2">
        {image ? (
          <div
            className={`relative aspect-square overflow-hidden rounded-2xl border bg-white ${
              product.isPromo ? "border-2 border-deal" : "border-border"
            }`}
          >
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
            <span className="mt-3 inline-block animate-pulse rounded-full bg-deal px-4 py-1.5 text-sm font-extrabold text-white">
              🔥 {promoLabel ?? "¡Oferta imperdible!"}
            </span>
          )}

          <div
            className={`mt-6 rounded-2xl border p-5 ${
              product.isPromo
                ? "border-2 border-deal bg-deal/5"
                : "border-border"
            }`}
          >
            <p
              className={`text-lg font-extrabold ${
                product.isPromo ? "text-deal" : "text-brand-dark"
              }`}
            >
              {product.isPromo
                ? "🔥 Precio especial — Consultá ya"
                : "Consultá precio y stock al instante"}
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Te respondemos al instante por WhatsApp, con precio en unidad y
              precio mayorista (5 o más equipos).
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(`Hola! Quiero consultar precio y stock de ${product.name}.`)}
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
            <li>🔢 Compra mínima mayorista: 5 unidades (no aplica a productos de bajo valor)</li>
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
