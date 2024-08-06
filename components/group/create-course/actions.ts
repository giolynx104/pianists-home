"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { CourseFormSchema } from "@/lib/types";

export const createCourse = async (data: CourseFormSchema) => {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const user = session.user;

  if (!user) {
    throw new Error("User not authenticated");
  }

  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: user.id,
    },
  });

  await prisma.course.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      teacher: {
        connect: {
          id: teacher!.id,
        },
      },
    },
  });

  revalidatePath("/profile");
  redirect("/profile");
};
