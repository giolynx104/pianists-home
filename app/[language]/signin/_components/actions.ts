"use server";

import { signIn } from "@/auth";

export const handleSignIn = async (provider: string) => {
  await signIn(provider);
}