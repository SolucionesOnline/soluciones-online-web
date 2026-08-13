import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold text-brand-dark">{site.name}</h3>
          <p className="mt-2 text-sm text-neutral-600">{site.tagline}</p>
          <Image
            src="/brand/logo.jpeg"
            alt={site.name}
            width={112}
            height={112}
            className="mt-4 rounded-full"
          />
        </div>

        <div>
          <h3 className="font-semibold text-brand-dark">Contacto</h3>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                WhatsApp: {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-brand-dark">Horario de atención</h3>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600">
            {site.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
          <Link
            href="/preguntas-frecuentes"
            className="mt-3 inline-block text-sm font-medium text-brand hover:text-accent"
          >
            Preguntas frecuentes y garantía →
          </Link>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
