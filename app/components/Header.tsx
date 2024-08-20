"use client";

import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import React from "react";
import SignInButton from "./SignInButton";
import UserAvatar from "./UserAvatar";
import Logo from "./Logo";
import { Session } from "next-auth";
const Header = ({ session }: { session: Session | null }) => {
  const pages = ["dashboard", "courses"];
  return (
    <AppBar position="sticky" className="top-0 left-0">
      <Toolbar className="flex justify-between items-center">
        <Stack spacing={2} direction="row" className="flex items-center">
          <Logo />
          {pages.map((page) => (
            <Button key={page}>{page}</Button>
          ))}
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
