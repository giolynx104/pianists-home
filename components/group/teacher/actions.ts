import prisma from "@/lib/db";

export const getTeacher = async (id: string) => {
  return await prisma.teacher.findUnique({
    where: {
      id: id,
    },
  });
};
