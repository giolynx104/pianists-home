"use client";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../logo";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { signOutAction } from "@/actions";

const Header = ({ children: userAvatar }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const [isSignOutClicked, setIsSignOutClicked] = React.useState(false);

  useEffect(() => {
    if (isSignOutClicked) {
      signOutAction();
    }
  }, [isSignOutClicked]);

  const toggleDrawer = (value: boolean) => () => {
    setIsDrawerOpen(value);
  };

  const DrawerList = (
    <Box role="presentation">
      <List>
        <ListItem className="flex pl-0">
          <ListItemButton className="flex pl-0  items-center">
            <ListItemIcon className="flex justify-center items-center">
              <CgProfile />
            </ListItemIcon>
            <ListItemText>Your profile</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className="flex pl-0">
          <ListItemButton
            onClick={() => {
              setIsSignOutClicked(true);
            }}
            className="pl-0"
          >
            <ListItemIcon className="flex justify-center items-center">
              <FaSignOutAlt />
            </ListItemIcon>
            <ListItemText>Sign out</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className="fixed">
      <Toolbar className="flex justify-between">
        <Logo />
        <IconButton onClick={toggleDrawer(true)}>{userAvatar}</IconButton>
        <Drawer
          open={isDrawerOpen}
          anchor="right"
          onClose={toggleDrawer(false)}
          sx={{
            width: "22",
            "& .MuiDrawer-paper": { width: "22%", borderRadius: "1rem" },
          }}
        >
          {DrawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
function useCallBack(arg0: () => void, arg1: boolean[]) {
  throw new Error("Function not implemented.");
}
