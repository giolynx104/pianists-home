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