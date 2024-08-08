"use server";
import { auth } from "../auth";
export const verifySession = async ({ callback }: { callback: () => void }) => {
  const session = await auth();
  if (!session) {
    callback();
  }
  return session!;
};
