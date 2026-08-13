import fs from "node:fs";
import path from "node:path";
import productsData from "../../data/products.json";

const PRODUCT_IMAGE_EXTS = ["jpg", "jpeg", "png", "webp"];
const productsImageDir = path.join(process.cwd(), "public", "products");

export type Product = {
  id: number;
  slug: string;
  brand: string;
  name: string;
  category: string;
  priceX1: number;
  priceX5: number;
  color: string | null;
  isPromo: boolean;
  promoLabel: string | null;
  stock: boolean;
};

export const products = productsData as Product[];

export const brands = Array.from(new Set(products.map((p) => p.brand)));
export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

/**
 * Convención por slug: si existe public/products/<slug>.(jpg|jpeg|png|webp)
 * se usa esa foto; si no, el caller muestra el placeholder.
 */
export function getProductImage(slug: string): string | null {
  for (const ext of PRODUCT_IMAGE_EXTS) {
    if (fs.existsSync(path.join(productsImageDir, `${slug}.${ext}`))) {
      return `/products/${slug}.${ext}`;
    }
  }
  return null;
}

export function formatUsd(n: number) {
  return `USD ${n.toLocaleString("en-US")}`;
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, limit);
}

export function featuredProducts(limit = 8) {
  return [...products].filter((p) => p.isPromo).slice(0, limit);
}
