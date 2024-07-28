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
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Logo from "../logo";
import { signOutAction } from "./sign-out-action";
import getLogInState from "./get-log-in-state";

const Header = ({ children: userAvatar }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [isUserAvatarClicked, setIsUserAvatarClicked] = React.useState(false);
  const [isSignOutClicked, setIsSignOutClicked] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isSignOutClicked) {
      setOpen(false);
      signOutAction();
    }
  }, [isSignOutClicked]);

  useEffect(() => {
    const handleUserAvatarClick = async () => {
      const isLoggedIn = await getLogInState();
      if (isLoggedIn) {
        setOpen(true);
      } else {
        router.push("/api/auth/signin");
      }
    };

    if (isUserAvatarClicked) {
      handleUserAvatarClick();
    }
  }, [isUserAvatarClicked, router]);

  const DrawerList = (
    <Box role="presentation">
      <List>
        <ListItem className="flex pl-0">
          <ListItemButton
            onClick={() => {
              router.push("/profile");
            }}
            className="flex pl-0 items-center"
          >
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
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Stack spacing={2} direction="row" className="flex items-center">
          <Logo />
          <List>
            <ListItemButton
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Dashboard
            </ListItemButton>
          </List>
        </Stack>
        <IconButton
          onClick={() => {
            setIsUserAvatarClicked(true);
          }}
        >
          {userAvatar}
        </IconButton>
        <Drawer
          open={open}
          anchor="right"
          onClose={() => {
            setOpen(false);
          }}
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
