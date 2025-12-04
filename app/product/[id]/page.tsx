// app/product/[id]/page.tsx
import { getProductById } from "@/app/utils/get-product-by-id";
import ProductDetailCard from "@/app/components/ProductDetailCard";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const {id}= await params;
  const product = await getProductById(id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-600">
          Producto no encontrado 😢
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <ProductDetailCard product={product} />
    </main>
  );
}
