"use server";

import { signIn } from "@/auth";

export default async function signInWithGitHubAction() {
  "use server";
  await signIn("github");
}
