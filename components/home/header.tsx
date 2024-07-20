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
        <Stack spacing={1} direction="row" className="flex items-center">
          <Piano className="items-center" />
          <Typography variant="subtitle1">Home of Pianists</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          {auth ? (
            <IconButton onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
          ) : (
            <Link href="/signin">
              <Button variant="contained">Đăng nhập</Button>
            </Link>
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
