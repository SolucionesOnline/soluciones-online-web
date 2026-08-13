"use client";

import { createContext, useContext, useEffect, useState } from "react";

type DolarBlue = { venta: number; total: number } | null;

const DolarBlueContext = createContext<DolarBlue>(null);

export function DolarBlueProvider({ children }: { children: React.ReactNode }) {
  const [dolar, setDolar] = useState<DolarBlue>(null);

  useEffect(() => {
    fetch("/api/dolar-blue")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.total === "number") setDolar({ venta: d.venta, total: d.total });
      })
      .catch(() => {});
  }, []);

  return (
    <DolarBlueContext.Provider value={dolar}>{children}</DolarBlueContext.Provider>
  );
}

export function useDolarBlue() {
  return useContext(DolarBlueContext);
}
