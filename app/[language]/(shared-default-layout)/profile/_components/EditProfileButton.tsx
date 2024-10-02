"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const EditProfileButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      fullWidth
      className="normal-case"
      onClick={() => router.push("/profile/edit")}
    >
      Edit Profile
    </Button>
  );
};
