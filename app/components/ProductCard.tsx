// app/components/ProductCard.tsx
"use client";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="w-32 h-32 relative mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-gray-800 text-center font-semibold line-clamp-2 mb-2">
        {product.title}
      </h3>
      <p className="text-lg font-bold text-blue-600">${product.price}</p>
    </div>
  );
}

