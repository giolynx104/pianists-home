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
import UserAvatar from "./dashboard/user-avatar";
import SignInButton from "./sign-in-button";
import Link from "next/link";

const Header = async () => {
  const session = await auth();

  // const [isUserAvatarClicked, setIsUserAvatarClicked] = React.useState(false);
  // const [isSignOutClicked, setIsSignOutClicked] = React.useState(false);

  // useEffect(() => {
  //   if (isSignOutClicked) {
  //     setOpen(false);
  //     signOutAction();
  //   }
  // }, [isSignOutClicked]);

  // useEffect(() => {
  //   const handleUserAvatarClick = async () => {
  //     const isLoggedIn = await getLogInState();
  //     if (isLoggedIn) {
  //       setOpen(true);
  //     } else {
  //       router.push("/api/auth/signin");
  //     }
  //   };

  //   if (isUserAvatarClicked) {
  //     handleUserAvatarClick();
  //   }
  // }, [isUserAvatarClicked, router]);

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
          <UserAvatar userAvatar={session?.user?.image || ""} />
        ) : (
          <SignInButton />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
