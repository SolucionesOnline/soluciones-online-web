import { site, waLink } from "@/lib/site";

export const metadata = {
  title: "Preguntas frecuentes — Soluciones Online",
};

const faqs = [
  {
    q: "¿Cómo hago mi pedido?",
    a: "Escribinos por WhatsApp y un representante (o nuestro agente IA) te toma la reserva al instante, confirmando stock.",
  },
  {
    q: "¿Qué significa \"Entrega inmediata\"?",
    a: "Si el producto tiene esa etiqueta, podés retirarlo o te lo enviamos en el día, desde que confirmás la reserva.",
  },
  {
    q: "¿Cuándo puedo retirar mi pedido?",
    a: "Pedidos antes de las 13:00 hs se retiran ese mismo día desde las 16:45 hs. Después de las 13:00 hs, se retiran al día siguiente desde las 16:45 hs. Una vez confirmada la reserva, implica compromiso de compra.",
  },
  {
    q: "¿Hay compra mínima?",
    a: "Para acceder al precio mayorista, la primera compra requiere un mínimo de 3 unidades (podés combinar modelos distintos). No aplica a productos de menos de USD 50.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Efectivo, cripto (USDT red TRX) y Mercado Pago (tarjeta, en cuotas). Pagando en pesos, se toma el dólar blue del día + $20 ARS, con la cotización vigente al momento del retiro.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Sí, a todo el país. Envío gratis a partir de 2 unidades; para el resto, coordinamos el costo por WhatsApp según tu dirección.",
  },
  {
    q: "¿Qué garantía tienen los productos?",
    a: "3 meses por fallas de fábrica (no cubre daños físicos, manipulación ni sobrecargas). El producto debe estar completo, con caja y accesorios originales. Los celulares deben restablecerse de fábrica y estar sin cuentas ni bloqueos activos. Los productos Apple cuentan con garantía oficial de 1 año en locales de la marca.",
  },
  {
    q: "¿Qué pasa si mi equipo falla dentro de la garantía?",
    a: "Lo enviamos a servicio técnico para diagnóstico y, si corresponde, se repara o reemplaza. El proceso puede demorar hasta 20 días hábiles.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold text-brand-dark">Preguntas frecuentes</h1>
      <p className="mt-2 text-neutral-600">
        Atendemos {site.hours.map((h) => `${h.days} ${h.time}`).join(" · ")}.
      </p>

      <div className="mt-8 divide-y divide-border rounded-2xl border border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5 open:bg-surface">
            <summary className="cursor-pointer list-none font-semibold text-brand-dark">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-surface p-6 text-center">
        <p className="font-semibold text-brand-dark">¿No encontraste tu respuesta?</p>
        <a
          href={waLink("Hola! Tengo una consulta que no está en las preguntas frecuentes.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Escribinos por WhatsApp
        </a>
      </div>
    </div>
  );
}
