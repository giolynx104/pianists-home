import prisma from "@/lib/db";
import { EditCourseForm } from "./_components/EditCourseForm";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!course) {
    throw new Error("Course not found");
  }

  return <EditCourseForm course={course} />;
};

export default Page;
