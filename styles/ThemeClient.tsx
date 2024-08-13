"use client";

import {
  createTheme,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo((): Theme => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? "dark" : "light",
      },
    });
  }, [prefersDarkMode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
