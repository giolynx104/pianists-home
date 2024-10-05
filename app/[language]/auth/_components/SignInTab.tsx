"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Divider,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { handleSignIn } from "./actions";
import { useTranslation } from "@/app/i18n/client";

interface SignInTabProps {
  language: string;
}

export const SignInTab: React.FC<SignInTabProps> = ({ language }) => {
  const { t } = useTranslation(language, "auth-page");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCredentialSignIn = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
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
      <Button fullWidth variant="contained" color="primary" onClick={handleCredentialSignIn}>
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
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {t("credential-auth-not-supported")}
        </Alert>
      </Snackbar>
    </Box>
  );
};
