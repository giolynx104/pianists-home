import { sql } from "@vercel/postgres";
import { User } from "./definitions";
import { revalidatePath } from "next/cache";

export async function createUser(user: User) {
  await sql`INSERT INTO users (name, email, role)
    VALUES (${user.name}, ${user.email}, ${user.role})`;

  revalidatePath("/dashboard");
}
