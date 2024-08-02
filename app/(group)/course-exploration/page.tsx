import Main from "@/components/group/course-exploration/main";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/db";

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

const Page = async () => {
  const courses = await prisma.course.findMany({
    include: {
      teacher: {
        include: {
          user: true,
        },
      },
    },
  });
  return <Main courses={courses} />;
};

export default Page;
