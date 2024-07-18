"use client";

import Header from "@/components/home/header";
import Main from "@/components/home/main";
import Footer from "@/components/home/footer";
import {
  createTheme,
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
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
