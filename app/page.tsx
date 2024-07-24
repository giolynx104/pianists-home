"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "@/components/home/header";
import Main from "@/components/home/main";
import Footer from "@/components/home/footer";
import { Stack } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Header />
      <Main />
      <Footer />
    </Stack>
  );
}
