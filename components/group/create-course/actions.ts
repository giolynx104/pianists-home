"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { CourseFormSchema } from "@/lib/types";
import { getUserBySession, verifySession } from "@/lib/actions";

export const createCourse = async (
  data: CourseFormSchema,
  remoteUrls: string[]
) => {
  const session = await verifySession(() => {
    redirect("api/auth/signin");
  });

  const user = await getUserBySession(session);

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
