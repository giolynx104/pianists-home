"use server";

import { signIn } from "@/auth";

export const handleOAuthSignIn = async (provider: string) => {
  try {
    await signIn(provider, { redirectTo: "/dashboard" });
  } catch (error) {
    console.error("OAuth sign-in error:", error);
    throw error;
  }
};
