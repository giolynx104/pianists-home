import prisma from "@/lib/db";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },
  });
};

export default Page;
