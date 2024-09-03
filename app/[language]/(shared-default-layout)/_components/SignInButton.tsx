"use client";

import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LanguageContext } from "@/app/i18n/LanguageContext";
import { useTranslation } from "@/app/i18n/client";

const SignInButton = () => {
  const language = useContext(LanguageContext);
  const { t } = useTranslation(language, "layout");
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
      {t("sign-in-button")}
    </Button>
  );
};

export default SignInButton;
