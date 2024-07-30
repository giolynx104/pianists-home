"use server";

import prisma from "@/prisma/prisma";

export const getTeachers = async () => {
  const teachers = await prisma.teacher.findMany({
    include: {
      user: true,
      images: true,
    },
  });
  return teachers;
};
