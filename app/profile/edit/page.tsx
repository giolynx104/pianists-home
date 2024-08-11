import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Form from "@/components/group/profile/edit/form";
import {
  getUserBySession,
  getTeacherIncludeAllByUserId,
  verifySession,
} from "@/lib/actions";

const Page = async () => {
  const session = await verifySession(() => {
    redirect("/api/auth/signin");
  });

  const user = await getUserBySession(session);
  const teacher = await getTeacherIncludeAllByUserId(user.id);
  return <Form user={user} teacher={teacher} />;
};

export default Page;
