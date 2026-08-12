import productsData from "../../data/products.json";

export type Product = {
  id: number;
  slug: string;
  brand: string;
  name: string;
  category: string;
  priceX1: number;
  priceX5: number;
  color: string | null;
  entregaInmediata: boolean;
  stock: boolean;
};

export const products = productsData as Product[];

export const brands = Array.from(new Set(products.map((p) => p.brand)));
export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatUsd(n: number) {
  return `US$${n.toLocaleString("en-US")}`;
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, limit);
}

export function featuredProducts(limit = 8) {
  return [...products]
    .filter((p) => p.entregaInmediata)
    .sort((a, b) => a.priceX1 - b.priceX1)
    .slice(0, limit);
}
