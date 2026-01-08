"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
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
        <p className="text-lg font-bold text-blue-600">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
