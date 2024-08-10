"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

const courseWithUser = Prisma.validator<Prisma.CourseDefaultArgs>()({
  include: {
    teacher: {
      include: {
        user: true,
      },
    },
    courseImages: true,
  },
});

export type CourseWithUser = Prisma.CourseGetPayload<typeof courseWithUser>;

export const getCoursesContainQuery = async (query: string) => {
  const courses = await prisma.course.findMany({
    where: {
      name: {
        contains: query,
      },
    },
    ...courseWithUser,
  });
  return courses;
};
