"use client";

import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import signInWithGitHubAction from "./server-signin";
import { useEffect, useState } from "react";

export default function SignInWithGitHubButton() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      signInWithGitHubAction();
      setClicked(false);
    }
  }, [clicked]);

  return (
    <Button
      onClick={() => setClicked(true)}
      variant="contained"
      startIcon={<GitHubIcon />}
    >
      Continue with GitHub
    </Button>
  );
}
