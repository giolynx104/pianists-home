"use server";

import { Session } from "next-auth";
import { auth } from "../auth";

export const verifySession = async (
  callback: () => never
): Promise<Session> => {
  const session = await auth();
  if (session == null) {
    callback();
  }
  return session!;
};
