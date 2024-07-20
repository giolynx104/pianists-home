"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Piano } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
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
