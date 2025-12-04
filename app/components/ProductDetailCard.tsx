// app/components/ProductDetailCard.tsx
"use client";
import Image from "next/image";

export default function ProductDetailCard({ product }: { product: any }) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Imagen */}
      <div className="flex justify-center items-center">
        <div className="w-64 h-64 relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Información */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {product.title}
        </h1>
        <p className="text-gray-500 mb-4">Categoría: {product.category}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ${product.price}
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Añadir al carrito 🛒
        </button>
      </div>
    </section>
  );
}
