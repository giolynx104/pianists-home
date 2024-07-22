"use client";

import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "../logo";
import { auth } from "@/auth";
import { getAuthState } from "./nav-button";

export default function Header() {
  const [isAuth, setIsAuth] = React.useState(false);

  useEffect(() => {
    getAuthState().then((res) => setIsAuth(res));
  }, []);

  return (
    <AppBar>
      <Toolbar className="flex justify-between">
        <Logo />

        {isAuth ? (
          <Link href="/dashboard">
            <Button className="normal-case">Go to Dashboard</Button>
          </Link>
        ) : (
          <Link href="/signin">
            <Button className="normal-case">Đăng nhập</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
