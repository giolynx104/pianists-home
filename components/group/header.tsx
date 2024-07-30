import {
  AppBar,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import Logo from "../logo";
import { auth } from "@/auth";
import UserAvatar from "./user-avatar";
import SignInButton from "./sign-in-button";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between items-center">
        <Stack spacing={2} direction="row" className="flex items-center">
          <Logo />
          <List>
            <ListItem>
              <Link href="/dashboard">Dashboard</Link>
            </ListItem>
          </List>
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
