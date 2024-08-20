"use server";

import { signIn, signOut } from "@/auth";

export async function signOutAction() {
  await signOut({ redirectTo: "/home" });
}

export const handleSignIn = async () => {
  await signIn();
};
