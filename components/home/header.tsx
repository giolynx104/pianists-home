"use client";

import { AppBar, Button, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../logo";
import { getAuthState } from "./nav-button";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isAuth, setIsAuth] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    getAuthState().then((res) => setIsAuth(res));
  }, []);

  return (
    <AppBar>
      <Toolbar className="flex justify-between">
        <Logo />
        {isAuth ? (
          <Button variant="contained"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to Dashboard
          </Button>
        ) : (
          <Button variant="contained"
            onClick={() => {
              router.push("/signin");
            }}
          >
            Đăng nhập
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
