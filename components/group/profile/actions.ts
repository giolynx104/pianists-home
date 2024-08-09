"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteCourse = async (courseId: string) => {
  await prisma.course.delete({
    where: {
      id: courseId,
    },
  });

  revalidatePath("/profile");
};

export const getEnrollmentByUserId = async (userId: string) => {
  return await prisma.enrollment.findMany({
    where: {
      userId: userId,
    },
    include: {
      course: true,
    }
  });
};

export const getCoursesByTeacherId = async (teacherId: string) => {
  return await prisma.course.findMany({
    where: {
      teacherId: teacherId,
    },
  });
};