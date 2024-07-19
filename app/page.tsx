"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "@/components/home/header";
import Main from "@/components/home/main";
import Footer from "@/components/home/footer";
import {
  createTheme,
  Stack,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export default function Home() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo((): Theme => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
    });
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Header />
        <Main />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
