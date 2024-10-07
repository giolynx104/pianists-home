"use client";

import { Button } from "@mui/material";
import { handleGetStarted } from "./actions";

export const GetStartedButton = () => {
  return (
    <Button
      size="large"
      variant="contained"
      className="w-fit normal-case text-white bg-black"
      onClick={() => handleGetStarted()}
    >
      Get Started
    </Button>
  );
};
