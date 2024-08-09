"use server";

import { getCurrentUser, verifySession } from "@/lib/actions";
import prisma from "@/lib/db";
import { Course } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
    },
  });
};

export const getCoursesByTeacherId = async (teacherId: string) => {
  return await prisma.course.findMany({
    where: {
      teacherId: teacherId,
    },
  });
};

export const removeEnrollment = async (course: Course) => {
  const user = await getCurrentUser(
    await verifySession(() => {
      redirect("api/auth/signin");
    })
  );

  await prisma.enrollment.deleteMany({
    where: {
      userId: user.id,
      courseId: course.id,
    },
  });

  revalidatePath("/profile");
};
