import { auth } from "@/auth";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Tooltip } from "@mui/material";

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
    <Tooltip title="Đăng nhập">
      <AccountCircleIcon />
    </Tooltip>
  );
}
