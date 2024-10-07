import prisma from "@/lib/db";

export const getTeacher = async (id: string) => {
  return await prisma.teacher.findUnique({
    where: {
      id: id,
    },
    include: {
      courses: true,
      reviews: {
        include: {
          author: true,
        },
      },
      user: true,
      teacherImages: true,
    },
  });
};
