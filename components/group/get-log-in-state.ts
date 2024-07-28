"use server";

import { auth } from "@/auth";

const getLogInState = async () => {
  const session = await auth();
  return session ? true : false;
};

export default getLogInState;
