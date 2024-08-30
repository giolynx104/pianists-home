"use server";

import prisma from "@/lib/db";
import { TeacherFormSchema, UserFormSchema } from "@/lib/types";

export const updateUserInfo = (userId: string, data: UserFormSchema) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: { ...data },
  });
};

export const updateTeacherInfo = (userId: string, data: TeacherFormSchema) => {
  return prisma.teacher.update({
    where: {
      userId: userId,
    },
    data: { ...data },
  });
};
