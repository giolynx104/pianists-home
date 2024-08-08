import {
  AppBar,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { auth } from "@/auth";
import UserAvatar from "./user-avatar";
import SignInButton from "./sign-in-button";
import Link from "next/link";
import { GiGrandPiano } from "react-icons/gi";

const Header = async () => {
  const session = await auth();
  return (
    <AppBar position="sticky" className="top-0 left-0 ">
      <Toolbar className="flex justify-between items-center">
        <Stack spacing={2} direction="row" className="flex items-center">
          <Link href="/home">
            <Stack
              spacing={1}
              direction="row"
              className="flex items-center flex-grow"
            >
              <GiGrandPiano className="items-center" />
              <Typography variant="subtitle1">Home of Pianists</Typography>
            </Stack>
          </Link>
          <List>
            <Stack direction="row">
              <ListItem>
                <Link href="/dashboard">Dashboard</Link>
              </ListItem>
              <ListItem>
                <Link href="/course-exploration">Courses</Link>
              </ListItem>
            </Stack>
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
