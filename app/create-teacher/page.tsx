import { redirect } from "next/navigation";
import Form from "@/components/group/create-teacher/form";
import prisma from "@/lib/db";
import { getUserBySessionAndRedirectIfNoSessionExist } from "@/lib/actions";

const Page = async () => {
  const user = await getUserBySessionAndRedirectIfNoSessionExist();
  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: user!.id,
    },
  });
  if (teacher) {
    redirect("/profile");
  }
  return <Form />;
};

export default Page;
