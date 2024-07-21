"use client";

import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import React from "react";
import Link from "next/link";
import Logo from "../logo";

export default function Header() {
  return (
    <AppBar>
      <Toolbar className="flex justify-between">
        <Logo />
        <Link href="/signin">
          <Button variant="contained">Đăng nhập</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
