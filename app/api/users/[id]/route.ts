import { User } from "@/lib/definitions";
import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const res = await sql<User>`
    SELECT * FROM users WHERE id = ${id}
  `;

  if (res.rows.length === 0) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(res.rows), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
