// app/utils/get-product-by-id.ts
export async function getProductById(id: string) {
  try {
    if (!id) {
      console.error("⚠️ ID vacío en getProductById");
      return null;
    }

    const url = `https://fakestoreapi.com/products/${id}`;
    console.log("🌐 Fetching:", url);

    const res = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    console.log("📡 HTTP status:", res.status);

    const text = await res.text();
    if (!text || text.trim().length === 0) {
      console.error("⚠️ Respuesta vacía del servidor");
      return null;
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("💥 Error en getProductById:", error);
    return null;
  }
}

