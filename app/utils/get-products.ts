// app/utils/get-products.ts
export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error al obtener los productos");
    return await res.json();
  } catch (error) {
    console.error("💥 Error en getProducts:", error);
    return [];
  }
}
