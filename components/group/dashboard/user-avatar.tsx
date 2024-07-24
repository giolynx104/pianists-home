import { auth } from "@/auth";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import { FaSignInAlt } from "react-icons/fa";

export default async function UserAvatar() {
  const session = await auth();
  const userAvatar = session?.user?.image || null;

  return userAvatar ? (
    <Image
      src={userAvatar}
      alt="User avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  ) : (
    <Tooltip title="Sign in">
      <FaSignInAlt />
    </Tooltip>
  );
}
