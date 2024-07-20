import { useState, useEffect } from "react";
import { auth } from "@/auth";
import Image from "next/image";
import { AccountCircle } from "@mui/icons-material";

export default function UserAvatar() {
  const [userImage, setUserImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await auth();
      if (session && session.user) {
        setUserImage(session.user.image ?? null);
        alert(session.user);
      }
    };

    fetchSession();
  }, []);

  return userImage ? (
    <Image src={userImage} alt="User Avatar" />
  ) : (
    <AccountCircle />
  );
}
