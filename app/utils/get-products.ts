export async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];
  return res.json();
}
