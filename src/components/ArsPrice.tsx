"use client";

import { useDolarBlue } from "@/components/DolarBlueProvider";

export default function ArsPrice({
  usd,
  className = "",
}: {
  usd: number;
  className?: string;
}) {
  const dolar = useDolarBlue();
  if (!dolar) return null;

  const ars = Math.round(usd * dolar.total);
  return (
    <span className={className}>
      ≈ ${ars.toLocaleString("es-AR")} ARS
    </span>
  );
}
