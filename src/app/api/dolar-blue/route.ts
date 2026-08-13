const ARS_MARGIN = 15;

export async function GET() {
  try {
    const res = await fetch("https://api.bluelytics.com.ar/v2/latest", {
      next: { revalidate: 300 },
    });
    const data = await res.json();
    const venta = data?.blue?.value_sell;
    if (typeof venta !== "number") throw new Error("sin cotización");

    return Response.json({
      venta,
      margen: ARS_MARGIN,
      total: venta + ARS_MARGIN,
    });
  } catch {
    return Response.json({ error: "Cotización no disponible" }, { status: 502 });
  }
}
