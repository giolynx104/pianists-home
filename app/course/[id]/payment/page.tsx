import { auth } from "@/auth";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/actions";
const Page = async ({ params }: { params: { id: string } }) => {
  const session = await verifySession(redirect("/api/auth/signin"));
  const user = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  });

  const isEnrolled = await prisma.enrollment.findFirst({
    where: {
      userId: user?.id,
      courseId: params.id,
    },
  });

  if (isEnrolled) {
    redirect(`/learn/course/${params.id}/home/welcome`);
  }

  return (
    <Box className="h-screen flex justify-center items-center">
      <Link href={`/learn/course/${params.id}/home/welcome`}>
        <Button
          onClick={async () => {
            "use server";
            const course = await prisma.course.findUnique({
              where: {
                id: params.id,
              },
            });

            await prisma.enrollment.create({
              data: {
                user: {
                  connect: {
                    id: user?.id,
                  },
                },
                course: {
                  connect: {
                    id: course?.id,
                  },
                },
              },
            });
          }}
          variant="contained"
        >
          Finish simulated payment
        </Button>
      </Link>
    </Box>
  );
};

export default Page;
