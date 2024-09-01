"use client";

import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignInButton = ({ language }: { language: string }) => {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      startIcon={<FaUserCircle />}
      type="submit"
      className="border-white text-white hover:border-white hover:bg-slate-600 normal-case"
      color="inherit"
      sx={{
        textTransform: "none",
      }}
      onClick={() => {
        router.push(`/${language}/signin`);
      }}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
