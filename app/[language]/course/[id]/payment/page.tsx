import { Box } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import { verifySession } from "@/lib/actions";
import FinishPaymentButton from "./_components/finish-payment-button";
const Page = async ({ params }: { params: { id: string } }) => {
  const session = await verifySession(() => {
    redirect("/api/auth/signin");
  });

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
        <FinishPaymentButton courseId={params.id} userId={user!.id} />
      </Link>
    </Box>
  );
};

export default Page;
