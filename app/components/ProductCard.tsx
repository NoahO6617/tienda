"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg cursor-pointer">
        <div className="w-32 h-32 relative mb-4 mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-center font-semibold mb-2">
          {product.title}
        </h3>
        <p className="text-center font-bold text-blue-600">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
