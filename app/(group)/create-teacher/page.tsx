import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Form from "@/components/group/create-teacher/form";

const Page = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  return <Form user={session.user} />;
};

export default Page;
