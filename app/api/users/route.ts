import { auth } from "@/auth";
import { User } from "@/lib/definitions";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  const res = await sql<User[]>`
  SELECT * FROM users`;
  console.log("fuck");
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
  redirect("/dashboard");
  return Response.json({ message: "User created successfully", res });
}

export async function GET_USER_BY_EMAIL(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  console.log(email);
  if (!email) {
    return new Response(
      JSON.stringify({ error: "Email parameter is missing" }),
      { status: 400 }
    );
  }

  const res = await sql<User[]>`
    SELECT * FROM users WHERE email = ${email}
  `;

  if (res.rows.length === 0) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(res.rows[0]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
