import { apiFetch } from "./api";
import { Product } from "../types/product";

export function getProductById(id: string) {
  return apiFetch<Product>(`/products/${id}`);
}
