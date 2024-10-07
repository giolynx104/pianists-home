"use server";

import { signIn } from "@/auth";

export async function handleGetStarted() {
  await signIn();
}
