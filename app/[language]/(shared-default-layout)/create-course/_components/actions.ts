"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { CourseFormSchema } from "@/lib/types";

export const createCourse = async (
  data: CourseFormSchema,
  remoteUrls: string[]
) => {
  await prisma.course.create({
    data: {
      ...data,
      courseImages: {
        create: remoteUrls.map((url) => ({
          url: url.split("?")[0],
        })),
      },
    },
  });

  revalidatePath("/profile");
  redirect("/profile");
};
