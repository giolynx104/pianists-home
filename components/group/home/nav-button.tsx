"use server";

import { auth } from "@/auth";

export const getAuthState = async () => {
  const session = await auth();
  return session !== null;
};
