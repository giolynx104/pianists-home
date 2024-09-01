"use client";

import { Button } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import { handleSignIn } from "./actions";
import { LanguageContext } from "@/app/i18n/LanguageContext";
import { useContext } from "react";

export const SignInOptionButton = ({
  text,
  provider,
}: {
  text: string;
  provider: string;
}) => {
  const language = useContext(LanguageContext);
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
