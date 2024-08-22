"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { CourseFormSchema } from "@/lib/types";
import { getUserBySessionAndRedirectIfNoSessionExist } from "@/lib/actions";

export const createCourse = async (
  data: CourseFormSchema,
  remoteUrls: string[]
) => {
  const user = await getUserBySessionAndRedirectIfNoSessionExist();

  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: user.id,
    },
  });

  await prisma.course.create({
    data: {
      ...data,
      teacher: {
        connect: {
          id: teacher!.id,
        },
      },
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
