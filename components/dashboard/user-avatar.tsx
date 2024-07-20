import { useState, useEffect } from "react";
import { auth } from "@/auth";
import Image from "next/image";
import { AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";

//TODO: Fix the user image

export default function UserAvatar() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await auth();
      if (session && session.user) {
        setUsername(session.user.name ?? null);
        alert(session.user.name);
      }
    };

    fetchSession();
  }, []);

  return <Typography variant="subtitle1">{username}</Typography>;
}
