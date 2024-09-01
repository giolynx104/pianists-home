import { redirect } from "next/navigation";
import {
  getUserBySession,
  getTeacherIncludeAllByUserId,
  verifySession,
} from "@/lib/actions";
import Form from "./_components/form";

const Page = async () => {
  const session = await verifySession(() => {
    redirect("/api/auth/signin");
  });

  const user = await getUserBySession(session);
  const teacher = await getTeacherIncludeAllByUserId(user.id);
  return <Form user={user} teacher={teacher} />;
};

export default Page;
