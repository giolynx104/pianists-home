"use client";

import React from "react";
import { Box, TextField, Button, Divider, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { handleOAuthSignIn } from "./actions";
import { useTranslation } from "@/app/i18n/client";
import { signIn } from "@/auth";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/lib/types";

interface SignInTabProps {
  language: string;
}

type FormData = {
  email: string;
  password: string;
};

export const SignInTab: React.FC<SignInTabProps> = ({ language }) => {
  const { t } = useTranslation(language, "auth-page");
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError("root", {
          type: "manual",
          message: t("invalid-credentials"),
        });
      }
    } catch (error) {
      console.error(error);
      setError("root", {
        type: "manual",
        message: t("sign-in-error"),
      });
    }
  };

  return (
    <Box className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={t("email")}
              type="email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              className="mb-4"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={t("password")}
              type="password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
              className="mb-4"
            />
          )}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          {t("sign-in")}
        </Button>
      </form>
      {errors.root && (
        <Typography color="error" variant="body2">
          {errors.root.message}
        </Typography>
      )}
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
    </Box>
  );
};
