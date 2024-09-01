"use client";

import { Button } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import { handleSignIn } from "./actions";

export const SignInOptionButton = ({
  language,
  text,
  provider,
}: {
  language: string;
  text: string;
  provider: string;
}) => {
  const { t } = useTranslation(language, "signin");
  return (
    <Button
      className="normal-case"
      variant="outlined"
      onClick={() => {
        handleSignIn(provider);
      }}
    >
      {t(text)}
    </Button>
  );
};
