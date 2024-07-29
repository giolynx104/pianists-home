"use server";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const createTeacher = async (formData: FormData) => {
  const session = await auth();
  const user = session?.user;
  const currentUser = await prisma.user.findUnique({
    where: {
      email: user?.email ?? "",
    },
  });
  await prisma.teacher.create({
    data: {
      user: {
        connect: {
          id: currentUser?.id,
        },
      },
      description: formData.get("description") as string,
      demoLink: formData.get("demoLink") as string,
    },
  });
  revalidatePath("/profile");
  redirect("/profile");
};
