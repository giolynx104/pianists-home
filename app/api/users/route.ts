import { User } from "@/lib/definitions";
import { sql } from "@vercel/postgres";

export async function GET(request: Request, response: Response) {
  const res = await sql<User[]>`
  SELECT * FROM users`;
  return Response.json(res, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const userData = await request.json();

  const user = {
    name: userData.name,
    email: userData.email,
    role: userData.role,
  };
  const res = await sql<User[]>`
  INSERT INTO users (name, email, role)
  VALUES (${user.name}, ${user.email}, ${user.role})
`;
  return Response.json({ message: "User created successfully", res });
}
