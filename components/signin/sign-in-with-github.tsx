"use client";

import { signIn } from "@/auth";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignInWithGitHubButton() {
  const handleSignIn = async () => {
    try {
      "use server";
      await signIn("github");
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      variant="contained"
      startIcon={<GitHubIcon />}
    >
      Continue with GitHub
    </Button>
  );
}
