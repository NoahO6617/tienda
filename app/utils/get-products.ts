export async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Error cargando productos");
  }

  return res.json();
}
