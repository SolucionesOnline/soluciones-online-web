import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo.jpeg"
              alt={site.name}
              width={64}
              height={64}
              className="rounded-full"
              priority
            />
            <span className="hidden text-2xl font-extrabold text-brand-dark sm:block">
              {site.name}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-dark md:flex">
          <Link href="/catalogo" className="hover:text-accent">
            Catálogo
          </Link>
          <Link href="/catalogo?brand=Xiaomi" className="hover:text-accent">
            Xiaomi
          </Link>
          <Link href="/catalogo?brand=Motorola" className="hover:text-accent">
            Motorola
          </Link>
          <Link href="/catalogo?brand=iPhone" className="hover:text-accent">
            iPhone
          </Link>
          <Link href="/catalogo?brand=Samsung" className="hover:text-accent">
            Samsung
          </Link>
          <Link href="/mayoristas" className="hover:text-accent">
            Mayoristas
          </Link>
          <Link href="/preguntas-frecuentes" className="hover:text-accent">
            Ayuda
          </Link>
        </nav>

        <a
          href={waLink("Hola! Quiero hablar con un asesor de Soluciones Online.")}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Hablar con un asesor
        </a>
      </div>
    </header>
  );
}
