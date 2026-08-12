"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

/**
 * MVP: abre WhatsApp. Reemplazar el body por un WebSocket al Worker
 * `agente-soluciones-online` (ConversationAgent) cuando se conecte el
 * chat embebido — ver plan de proyecto.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-border bg-white p-4 shadow-xl">
          <p className="text-sm font-semibold text-brand-dark">
            ¿En qué te podemos ayudar?
          </p>
          <p className="mt-1 text-sm text-neutral-600">
            Un asesor (o nuestro agente IA) te responde al instante por WhatsApp.
          </p>
          <a
            href={waLink("Hola! Vengo de la web y quiero hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Abrir WhatsApp
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Abrir chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition hover:brightness-110"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </div>
  );
}
