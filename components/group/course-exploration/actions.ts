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
  console.log(`The query was: ${query}`);
  for (const course of courses) {
    console.log(course.name);
  }
  return courses;
};
