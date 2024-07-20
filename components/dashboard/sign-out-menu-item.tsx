"use client";
import { Button, 
  fabClasses, MenuItem } from "@mui/material";
import signOutAction from "./sign-out-action";
import React, { useEffect } from "react";

const SignOutMenuItem = () => {
  const [clicked, setClicked] = React.useState(false);

  useEffect(() => {
    if (clicked) {
      signOutAction();
      setClicked(false);
    }
  }, [clicked]);

  return (
    <MenuItem
      onClick={() => {
        setClicked(true);
      }}
    >
      Sign out
    </MenuItem>
  );
};

export default SignOutMenuItem;
