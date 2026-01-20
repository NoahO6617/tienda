export async function getProductById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}
