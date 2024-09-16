"use server";

import prisma from "@/lib/db";
import { CourseFormSchema } from "@/lib/types";

export const updateCourse = async (data: CourseFormSchema, id: string) => {
  await prisma.course.update({
    where: {
      id: id,
    },
    data: data,
  });
};
