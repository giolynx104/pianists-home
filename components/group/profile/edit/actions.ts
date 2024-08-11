"use server";

import prisma from "@/lib/db";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export const updateUserInfo = (userId: string, data: User) => {
  const { id, ...rest } = data;
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: { ...rest },
  });
};
