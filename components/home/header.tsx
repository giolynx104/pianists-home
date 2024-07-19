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
} from "@mui/material";
import { Piano } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import React from "react";
import Link from "next/link";

export default function Header() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setAuth(false);
  };

  return (
    <AppBar>
      <Toolbar className="flex justify-between">
        <Piano className="items-center" />
        <Stack spacing={1} direction="row">
          {auth ? (
            <IconButton onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
          ) : (
            <Link href="/login"><Button variant="outlined">Đăng nhập</Button></Link>
          )}
          <Menu color="inherit" open={Boolean(anchorEl)} anchorEl={anchorEl}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
