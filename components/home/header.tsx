"use client";

import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";
import Logo from "../logo";

export default function Header() {
  return (
    <AppBar>
      <Toolbar className="flex justify-between">
        <Logo />
        <Stack spacing={1} direction="row">
          <Link href="/signin">
            <Button variant="contained">Đăng nhập</Button>
          </Link>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
