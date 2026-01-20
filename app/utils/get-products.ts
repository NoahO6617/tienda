import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  return res.json();
}
