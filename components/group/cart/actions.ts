"use server";

import prisma from "@/lib/db";
import { Item } from "react-use-cart";
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
    },
  });
};
