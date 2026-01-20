"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error();

      alert("Cuenta creada correctamente ✅");
    } catch {
      alert("Error al crear la cuenta ❌");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow">
        <h1 className="text-xl mb-4">Registro</h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="block mb-3 p-2 border w-full"
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
          className="block mb-3 p-2 border w-full"
        />

        <button className="bg-blue-600 text-white p-2 w-full">
          Registrarse
        </button>
      </form>
    </main>
  );
}
