export const site = {
  name: "Soluciones Online",
  tagline: "¡Todo lo que necesites cotizar!",
  cuit: "20-24897015-5",
  whatsapp: "5491160333772",
  whatsappDisplay: "11 6033 3772",
  instagram: "https://instagram.com/solucionesonline",
  facebook: "https://facebook.com/solucionesonline",
  hours: [
    { days: "Lunes a viernes", time: "10 a 18 hs" },
    { days: "Sábados", time: "10 a 13 hs" },
  ],
  domain: "solucionesonline.xyz",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
