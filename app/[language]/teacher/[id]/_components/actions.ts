import prisma from "@/lib/db";
import { teacherIncludeAll } from "@/lib/types";

export const getTeacher = async (id: string) => {
  return await prisma.teacher.findUnique({
    where: {
      id: id,
    },
    include: teacherIncludeAll,
  });
};
