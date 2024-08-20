"use client";

import { AppBar, Stack, Toolbar } from "@mui/material";
import React from "react";
import SignInButton from "./SignInButton";
import UserAvatar from "./UserAvatar";
import Logo from "./Logo";
import { Session } from "next-auth";
import NavigationButton from "./NavigationButton";
const Header = ({ session }: { session: Session | null }) => {
  return (
    <AppBar position="sticky" className="top-0 left-0">
      <Toolbar className="flex justify-between items-center">
        <Stack spacing={2} direction="row" className="flex items-center">
          <Logo />
          <NavigationButton text="Dashboard" link="/dashboard" />
          <NavigationButton text="Courses" link="/course-exploration" />
        </Stack>
        {session ? (
          <UserAvatar userAvatar={session.user!.image!} />
        ) : (
          <SignInButton />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
