"use client";

import {
  Alert,
  Backdrop,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import icon from "../favicon.ico";
import EmailIcon from "@mui/icons-material/Email";
import pianoImage from "/public/login-background.jpg";
import SignInWithGithubButton from "@/components/signin/github-sign-in";
import SignInWithGoogleButton from "@/components/signin/google-sign-in";
import KeyIcon from "@mui/icons-material/Key";
import Link from "next/link";
import { useState } from "react";
import NotImplementedBackdrop from "./not-implemented-backdrop";

export default function LoginPage() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container className="flex flex-row justify-center items-center h-screen">
        <Card className="rounded-3xl flex flex-row justify-center items-center w-[90%] h-auto">
          <Grid container>
            <Grid item xs={6}>
              <CardContent className="flex flex-col p-12">
                <Stack spacing={4}>
                  <Typography variant="h3" className="text-center">
                    Welcome back!
                  </Typography>
                  <Stack
                    spacing={1}
                    direction="row"
                    className="flex flex-row justify-center items-center"
                  >
                    <Image src={icon} alt="icon" width={20} />
                    <Typography variant="h6" className="text-center">
                      Home of Pianists
                    </Typography>
                  </Stack>
                  <Stack spacing={2} direction="column">
                    <SignInWithGoogleButton />
                    <SignInWithGithubButton />
                  </Stack>
                  <Divider variant="middle">or</Divider>
                  <Typography variant="subtitle2" className="text-center">
                    Please enter your details
                  </Typography>
                  <TextField
                    label="Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="normal-case font-bold"
                    variant="contained"
                  >
                    Sign in
                  </Button>
                  <Link
                    onClick={() => {
                      setOpen(true);
                    }}
                    href="/signup"
                    className="text-center hover:text-blue-500 hover:underline"
                  >
                    Don&apos;t have an account?
                  </Link>
                </Stack>
              </CardContent>
            </Grid>
            <Grid item xs={6}>
              <CardMedia>
                <Image src={pianoImage} alt="background" objectFit="contain" />
              </CardMedia>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <NotImplementedBackdrop open={open} handleClose={handleClose} />
    </>
  );
}
