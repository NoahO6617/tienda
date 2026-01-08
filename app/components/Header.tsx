"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Volver
        </button>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Fake Store
        </Link>

        {/* Auth links */}
        <div className="flex gap-4">
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-gray-900"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Registro
          </Link>
        </div>
      </nav>
    </header>
  );
}
