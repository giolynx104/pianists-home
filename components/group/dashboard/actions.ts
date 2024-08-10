"use server";

import prisma from "@/prisma/prisma";
import { Prisma } from "@prisma/client";

const teacherWithUserandImages =
  Prisma.validator<Prisma.TeacherDefaultArgs>()({
    include: {
      user: true,
      teacherImages: true,
    },
  });

export type TeacherWithUserandImages = Prisma.TeacherGetPayload<
  typeof teacherWithUserandImages
>;

export const getTeachers = async () => {
  const teachers = await prisma.teacher.findMany({
    include: {
      user: true,
      teacherImages: true,
    },
  });
  return teachers;
};
