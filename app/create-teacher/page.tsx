import { redirect } from "next/navigation";
import Form from "@/components/group/create-teacher/form";
import prisma from "@/lib/db";
import { getUser } from "@/components/group/create-teacher/actions";

const Page = async () => {
  const user = await getUser();
  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: user!.id,
    },
  });
  // if (teacher) {
  //   redirect("/profile");
  // }
  return <Form />;
};

export default Page;
