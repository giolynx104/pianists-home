"use server";
import { signOut } from "@/auth";
const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};

export default signOutAction;
