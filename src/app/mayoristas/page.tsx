import Link from "next/link";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "Venta mayorista — Soluciones Online",
};

const conditions = [
  {
    title: "Mínimo de compra",
    text: "3 unidades en tu primera compra para acceder al precio mayorista. No aplica a productos de menos de USD 50.",
  },
  {
    title: "Podés combinar modelos",
    text: "No hace falta llevar 3 unidades iguales: podés combinar celulares, auriculares u otros accesorios.",
  },
  {
    title: "Precio en dólares",
    text: "Los precios se cotizan en USD. Pagando en pesos, se toma la cotización del dólar blue (precio de venta) + $15 ARS, vigente al momento de reservar.",
  },
  {
    title: "Pago",
    text: "Efectivo, cripto (USDT-TRX) o Mercado Pago.",
  },
];

export default function MayoristasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold text-brand-dark">Venta mayorista</h1>
      <p className="mt-3 text-neutral-600">
        Si revendés o comprás en volumen, accedé a precio por unidad más bajo
        en todo nuestro catálogo.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {conditions.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border p-5">
            <p className="font-semibold text-brand-dark">{c.title}</p>
            <p className="mt-2 text-sm text-neutral-600">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/catalogo"
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Ver catálogo mayorista
        </Link>
        <a
          href={waLink("Hola! Quiero comprar mayorista, ¿me pasás la lista completa?")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand hover:text-white"
        >
          Hablar con un asesor
        </a>
      </div>
    </div>
  );
}
