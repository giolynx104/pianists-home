"use server";

import { Session } from "next-auth";
import { auth } from "../auth";
import prisma from "./db";
import { teacherIncludeAll } from "./types";
import { redirect } from "next/navigation";

export const verifySession = async (
  callback: () => never
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

export const getUserBySessionAndRedirectIfNoSessionExist = async () => {
  const session = await verifySession(() => {
    redirect("/api/auth/signin");
  });
  const user = await getUserBySession(session);
  return user!;
};

export const getTeacherByUserId = async (userId: string) => {
  return await prisma.teacher.findUnique({
    where: {
      userId: userId,
    },
  });
};

export const verifySessionToken = async (token: string) => {
  const session = await prisma.session.findUnique({
    where: {
      sessionToken: token,
    },
  });
  return session != null;
};

export const getCoursesByUserId = async (userId: string) => {
  return await prisma.course.findMany({
    where: {
      Enrollment: {
        some: {
          userId: userId,
        },
      },
    },
  });
};

export const getEnrollmentsWithCoursesByUserId = async (userId: string) => {
  return await prisma.enrollment.findMany({
    where: {
      userId: userId,
    },
    include: {
      course: true,
    },
  });
};
