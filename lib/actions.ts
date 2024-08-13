"use server";

import { Session } from "next-auth";
import { auth } from "../auth";
import prisma from "./db";
import { teacherIncludeAll } from "./types";

export const verifySession = async (
  callback: () => never,
): Promise<Session> => {
  const session = await auth();
  if (session == null) {
    callback();
  }
  return session!;
};

export const getUserBySession = async (session: Session) => {
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email!,
    },
  });
  return user!;
};

export const getTeacherIncludeAllByUserId = async (userId: string) => {
  return await prisma.teacher.findUnique({
    where: {
      userId: userId,
    },
    include: teacherIncludeAll,
  });
};
