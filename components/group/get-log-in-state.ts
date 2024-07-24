"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

const getLogInState = async () => {
  const session = await auth();
  return session ? true : false;
};

export default getLogInState;
