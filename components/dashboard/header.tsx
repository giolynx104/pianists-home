"use client";

import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SignOutMenuItem from "./sign-out-menu-item";
import Logo from "../logo";
import UserAvatar from "./user-avatar";
import { AccountCircle } from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="fixed">
      <Toolbar className="flex justify-between">
        <Logo />
        <UserAvatar />
        <IconButton onClick={handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu color="inherit" open={Boolean(anchorEl)} anchorEl={anchorEl}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <SignOutMenuItem />
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
