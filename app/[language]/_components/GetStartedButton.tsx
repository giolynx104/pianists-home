"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export const GetStartedButton = () => {
  const router = useRouter();

  return (
    <Button
      size="large"
      variant="contained"
      className="w-fit normal-case text-white bg-black"
      onClick={() => {
        router.push("/home");
      }}
    >
      Get Started
    </Button>
  );
};
