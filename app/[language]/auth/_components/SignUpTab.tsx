import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { handleOAuthSignIn } from "./actions";
import { useTranslation } from "@/app/i18n/client";

interface SignUpTabProps {
  language: string;
}

export const SignUpTab: React.FC<SignUpTabProps> = ({ language }) => {
  const [userType, setUserType] = useState("student");
  const { t } = useTranslation(language, "auth-page");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCredentialSignUp = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
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
      <TextField fullWidth label={t("email")} type="email" variant="outlined" />
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
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleCredentialSignUp}
      >
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
          onClick={() => handleOAuthSignIn("google")}
        >
          {t("google")}
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          fullWidth
          onClick={() => handleOAuthSignIn("github")}
        >
          {t("github")}
        </Button>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: "100%" }}
        >
          {t("credential-auth-not-supported")}
        </Alert>
      </Snackbar>
    </Box>
  );
};
