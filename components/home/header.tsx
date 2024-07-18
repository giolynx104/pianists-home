"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Piano } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import React from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="">
      <Toolbar className="flex justify-between">
        <Piano className="items-center" />
        <Box>
          <IconButton onClick={handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu color="inherit" open={Boolean(anchorEl)} anchorEl={anchorEl}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Menu>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
