import { sql } from "@vercel/postgres";
import { User } from "./definitions";

export async function getUsers() {
  const users = await sql<User[]>`
    SELECT * FROM users
  `;
  return users;
}

export async function getUserByEmail(email: string) {
  const user = await sql<User>`
    SELECT * FROM users WHERE email=${email}
  `;
  return user;
}
