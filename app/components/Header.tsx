"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Volver
        </button>

        <Link href="/" className="font-bold text-xl text-gray-800">
           Fake Store
        </Link>
      </div>

      <nav className="flex gap-4">
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
        <Link href="/register" className="text-blue-600 hover:underline">
          Registro
        </Link>
      </nav>
    </header>
  );
}
