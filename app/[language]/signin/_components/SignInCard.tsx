"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";
import { handleSignIn } from "./actions";
import { LanguageContext } from "@/app/i18n/LanguageContext";
import { useContext } from "react";
import { useTranslation } from "@/app/i18n/client";

export default function SignInCard() {
  const language = useContext(LanguageContext);
  const { t } = useTranslation(language, "signin");

  return (
    <Box className="flex justify-center items-center h-screen">
      <Card className="w-96 shadow-lg mx-auto mt-10">
        <CardContent className="p-8">
          <Typography variant="h5" component="div" className="text-center mb-6">
            {t("sign-in")}
          </Typography>

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            className="mb-4 border border-gray-300 hover:bg-gray-100"
            onClick={() => {
              handleSignIn("google");
            }}
          >
            {t("sign-in-with-google")}
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            fullWidth
            className="border border-gray-300 hover:bg-gray-100"
            onClick={() => {
              handleSignIn("github");
            }}
          >
            {t("sign-in-with-github")}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
