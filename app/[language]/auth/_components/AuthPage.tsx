"use client";

import * as React from "react";
import { useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { LanguageContext } from "@/app/i18n/LanguageContext";
import { useTranslation } from "@/app/i18n/client";
import { LanguageSelector } from "@/components/LanguageSelector";
import { SignInTab } from "./SignInTab";
import { SignUpTab } from "./SignUpTab";

export const AuthPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const language = useContext(LanguageContext);
  const { t } = useTranslation(language, "auth-page");

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-8">
          <Box className="flex justify-end mb-4">
            <LanguageSelector />
          </Box>
          <Typography
            variant="h4"
            component="h1"
            className="text-center mb-2 text-blue-400"
          >
            {t("home-of-pianists")}
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-center mb-6 text-blue-600"
          >
            {t("connecting-teachers-students")}
          </Typography>

          <Tabs value={tabValue} onChange={handleTabChange} className="mb-4">
            <Tab label={t("sign-in")} sx={{ textTransform: 'none' }} />
            <Tab label={t("sign-up")} sx={{ textTransform: 'none' }} />
          </Tabs>

          {tabValue === 0 && <SignInTab language={language} />}
          {tabValue === 1 && <SignUpTab language={language} />}
        </CardContent>
      </Card>
    </Box>
  );
};
