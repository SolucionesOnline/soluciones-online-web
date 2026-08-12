import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { brands, featuredProducts, products } from "@/lib/products";
import { waLink } from "@/lib/site";

const brandBlurb: Record<string, string> = {
  Xiaomi: "Redmi, Poco y Note",
  Motorola: "Moto G y Edge",
  iPhone: "Todos los modelos",
  Samsung: "Galaxy A, S y tablets",
};

export default function Home() {
  const deals = featuredProducts(8);

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:grid-cols-2">
          <div>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              +{products.length} equipos en stock
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
              Celulares al mejor precio, con ofertas 🔥 todas las semanas.
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Xiaomi, Motorola, iPhone y Samsung. Venta minorista y mayorista,
              con precios en dólares y atención inmediata por WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Ver catálogo completo
              </Link>
              <a
                href={waLink("Hola! Quiero cotizar un equipo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-3xl shadow-xl sm:max-w-sm">
            <Image
              src="/promo/whatsapp-promo.jpeg"
              alt="Atención personalizada por WhatsApp — cotizamos tu celular al mejor precio"
              width={816}
              height={1296}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ¿Por qué comprar acá? */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="rounded-2xl border-2 border-accent bg-white p-8 shadow-xl shadow-accent/10">
          <p className="text-center text-xl font-bold text-brand-dark sm:text-2xl">
            ¿Por qué comprar en Soluciones Online?
          </p>
          <ul className="mt-6 grid gap-4 text-base font-semibold text-brand-dark sm:grid-cols-2 sm:text-lg lg:grid-cols-4">
            <li className="flex items-center gap-3">
              <span className="text-2xl">💵</span> Precios en dólares, sin sorpresas
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">📦</span> Envío gratis a partir de 2 unidades
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🛡</span> Garantía de 3 meses por fallas de fábrica
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🤖</span> Atención inmediata por WhatsApp e IA
            </li>
          </ul>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-dark">Comprá por marca</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/catalogo?brand=${encodeURIComponent(brand)}`}
              className="rounded-2xl border border-border bg-white p-6 text-center transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-lg font-bold text-brand-dark">{brand}</p>
              <p className="mt-1 text-xs text-neutral-500">{brandBlurb[brand]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ofertas / entrega inmediata */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-brand-dark">🔥 Ofertas destacadas</h2>
          <Link href="/catalogo" className="text-sm font-semibold text-brand hover:text-accent">
            Ver todo →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {deals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Confianza */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 rounded-2xl bg-brand-dark px-8 py-10 text-white sm:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">📦</p>
            <p className="mt-2 text-sm font-semibold">Envíos a todo el país</p>
            <p className="mt-1 text-xs text-white/70">
              Gratis desde 2 unidades, resto a coordinar por chat.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">💳</p>
            <p className="mt-2 text-sm font-semibold">Varios medios de pago</p>
            <p className="mt-1 text-xs text-white/70">
              Mercado Pago, transferencia, efectivo y cripto (USDT).
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">🛡</p>
            <p className="mt-2 text-sm font-semibold">Garantía real</p>
            <p className="mt-1 text-xs text-white/70">
              3 meses por fallas de fábrica. iPhone con garantía oficial Apple.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold">🏷️</p>
            <p className="mt-2 text-sm font-semibold">Precio mayorista</p>
            <p className="mt-1 text-xs text-white/70">
              Desde 3 unidades accedé a precio por volumen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
