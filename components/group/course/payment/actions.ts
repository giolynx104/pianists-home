"use server";
import prisma from "@/lib/db";
export const createEnrollment = async (courseId: string, userId: string) => {
  await prisma.enrollment.create({
    data: {
      user: {
        connect: {
          id: userId,
        },
      },
      course: {
        connect: {
          id: courseId,
        },
      },
    },
  });
};
