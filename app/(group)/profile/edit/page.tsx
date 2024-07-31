import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Form from "@/components/group/profile/edit/form";

const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email!,
    },
  });
  return <Form user={user!} />;
};

export default Page;
