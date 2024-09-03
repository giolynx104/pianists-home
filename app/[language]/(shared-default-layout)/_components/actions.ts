"use server";

import { signIn, signOut } from "@/auth";


export async function signOutAction() {
  await signOut();
}

export const handleSignIn = async () => {
  await signIn();
};
