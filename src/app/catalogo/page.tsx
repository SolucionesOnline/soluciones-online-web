import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { brands, products } from "@/lib/products";

type SearchParams = {
  brand?: string;
  promo?: string;
  q?: string;
};

export const metadata = {
  title: "Catálogo — Soluciones Online",
};

export default async function Catalogo({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { brand, promo, q } = await searchParams;

  const filtered = products.filter((p) => {
    if (brand && p.brand !== brand) return false;
    if (promo && !p.isPromo) return false;
    if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  function chipHref(params: SearchParams) {
    const sp = new URLSearchParams();
    if (params.brand) sp.set("brand", params.brand);
    if (params.promo) sp.set("promo", params.promo);
    const s = sp.toString();
    return s ? `/catalogo?${s}` : "/catalogo";
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-brand-dark">Catálogo</h1>
      <p className="mt-1 text-sm text-neutral-600">
        {filtered.length} producto{filtered.length !== 1 ? "s" : ""} · precios en USD, unidad / mayorista 5+
      </p>

      <form className="mt-6 max-w-sm" action="/catalogo" method="get">
        {brand && <input type="hidden" name="brand" value={brand} />}
        {promo && <input type="hidden" name="promo" value={promo} />}
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Buscar modelo..."
          className="w-full rounded-full border border-border px-4 py-2 text-sm focus:border-brand focus:outline-none"
        />
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href="/catalogo"
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            !brand && !promo ? "bg-brand text-white" : "bg-surface text-brand-dark"
          }`}
        >
          Todos
        </Link>
        <Link
          href={chipHref({ promo: "1" })}
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            promo ? "bg-deal text-white" : "bg-deal/10 text-deal"
          }`}
        >
          🔥 Ofertas
        </Link>
        {brands.map((b) => (
          <Link
            key={b}
            href={chipHref({ brand: b })}
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              brand === b ? "bg-brand text-white" : "bg-surface text-brand-dark"
            }`}
          >
            {b}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-neutral-500">
          No encontramos productos con ese filtro. Consultanos por WhatsApp, seguro te ayudamos.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
