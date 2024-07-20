"use server";

import { signIn } from "@/auth";

export default async function signInWithProvider(provider: string) {
  "use server";
  await signIn(provider);
}
