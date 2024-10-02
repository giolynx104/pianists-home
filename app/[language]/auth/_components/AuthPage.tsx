"use client";

import * as React from "react";
import { useState, useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { handleSignIn } from "./actions";
import { LanguageContext } from "@/app/i18n/LanguageContext";
import { useTranslation } from "@/app/i18n/client";
import { LanguageSelector } from "@/components/LanguageSelector";

export const AuthPage = () => {
  const [userType, setUserType] = useState("student");
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
            className="text-center mb-2 text-blue-900"
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
            <Tab label={t("sign-in")} />
            <Tab label={t("sign-up")} />
          </Tabs>

          {tabValue === 0 && (
            <Box className="space-y-4">
              <TextField
                fullWidth
                label={t("email")}
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                label={t("password")}
                type="password"
                variant="outlined"
              />
              <Button fullWidth variant="contained" color="primary">
                {t("sign-in")}
              </Button>
              <Divider className="my-4">
                <Typography variant="body2" color="text.secondary">
                  {t("or-continue-with")}
                </Typography>
              </Divider>
              <Box className="grid grid-cols-2 gap-4">
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  fullWidth
                  onClick={() => handleSignIn("google")}
                >
                  {t("google")}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  fullWidth
                  onClick={() => handleSignIn("github")}
                >
                  {t("github")}
                </Button>
              </Box>
            </Box>
          )}

          {tabValue === 1 && (
            <Box className="space-y-4">
              <RadioGroup
                row
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label={t("im-a-student")}
                />
                <FormControlLabel
                  value="teacher"
                  control={<Radio />}
                  label={t("im-a-teacher")}
                />
              </RadioGroup>
              <TextField fullWidth label={t("full-name")} variant="outlined" />
              <TextField
                fullWidth
                label={t("email")}
                type="email"
                variant="outlined"
              />
              <TextField
                fullWidth
                label={t("password")}
                type="password"
                variant="outlined"
              />
              {userType === "teacher" && (
                <TextField
                  fullWidth
                  label={t("years-of-experience")}
                  type="number"
                  variant="outlined"
                />
              )}
              <Button fullWidth variant="contained" color="primary">
                {t("sign-up")}
              </Button>
              <Typography variant="body2" align="center" className="my-2">
                {t("or-continue-with")}
              </Typography>
              <Box className="grid grid-cols-2 gap-4">
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  fullWidth
                  onClick={() => handleSignIn("google")}
                >
                  {t("google")}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  fullWidth
                  onClick={() => handleSignIn("github")}
                >
                  {t("github")}
                </Button>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
