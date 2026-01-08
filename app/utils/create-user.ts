import { CreateUser } from "../types/user";

export async function createUser(user: CreateUser) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );

  if (!res.ok) {
    throw new Error("Error creating user");
  }

  return res.json();
}
