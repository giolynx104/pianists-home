"use server";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export const createCourse = async (formData: FormData) => {
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

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);

  if (!name || !description || isNaN(price)) {
    throw new Error("Invalid form data");
  }

  await prisma.course.create({
    data: {
      name: name,
      description: description,
      price: price,
      teacherId: teacher?.id,
    },
  });

  revalidatePath("/profile");
  redirect("/profile");
};
