"use client";

import { Button } from "@mui/material";
import signInWithProvider from "./oauth-sign-in";
import { useEffect, useState } from "react";

export default function OAuthSignInButton({
  startIcon,
  provider,
  textContent,
}: {
  startIcon: React.ReactNode;
  provider: string;
  textContent: string;
}) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      signInWithProvider(provider);
      setClicked(false);
    }
  }, [clicked, provider]);

  return (
    <Button
      onClick={() => setClicked(true)}
      variant="contained"
      startIcon={startIcon}
      className="normal-case text-base"
    >
      {textContent}
    </Button>
  );
}
