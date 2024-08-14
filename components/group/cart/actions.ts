"use server";

import prisma from "@/lib/db";
import { Item } from "react-use-cart";
import { Course } from "@prisma/client";
import { getUserOfVerifiedSessionAndRedirectIfNotSignedIn } from "@/lib/actions";
import { redirect } from "next/navigation";

export const getCourses = async (items: Item[]) => {
  return await prisma.course.findMany({
    where: {
      id: {
        in: items.map((item) => item.id),
      },
    },
    include: {
      teacher: {
        include: {
          user: true,
        },
      },
      courseImages: true,
    },
  });
};

export const checkout = async (courses: Course[]) => {
  const user = await getUserOfVerifiedSessionAndRedirectIfNotSignedIn();

  try {
    await prisma.enrollment.createMany({
      data: courses.map((course: Course) => {
        return {
          userId: user.id,
          courseId: course.id,
        };
      }),
    });
  } catch (error) {
    console.error(error);
  }

  redirect("/profile");
};
