import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  formatUsd,
  getProductBySlug,
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-2xl border border-border bg-surface text-sm text-neutral-400">
          Foto próximamente
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-light">
            {product.brand} · {product.category}
          </span>
          <h1 className="mt-2 text-2xl font-bold text-brand-dark sm:text-3xl">
            {product.name}
          </h1>

          {product.entregaInmediata && (
            <span className="mt-3 inline-block rounded-full bg-deal/10 px-3 py-1 text-xs font-semibold text-deal">
              Entrega inmediata
            </span>
          )}

          <div className="mt-6 rounded-2xl border border-border p-5">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-neutral-500">Precio unitario</span>
              <span className="text-3xl font-bold text-brand-dark">
                {formatUsd(product.priceX1)}
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between border-t border-border pt-2">
              <span className="text-sm text-neutral-500">
                Mayorista (3 o más unidades)
              </span>
              <span className="text-lg font-semibold text-accent">
                {formatUsd(product.priceX5)} c/u
              </span>
            </div>
            <p className="mt-3 text-xs text-neutral-500">
              Precio en dólares. Pagando en pesos se toma la cotización del
              dólar blue del día vigente al momento del retiro/entrega, más
              Mercado Pago disponible en cuotas.
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
            <li>🛡 Garantía de 3 meses por fallas de fábrica</li>
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
