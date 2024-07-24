"use server"

import React, { useEffect, useState } from "react";
import { auth } from "@/auth";
import Button from "@mui/material/Button";

export const getAuthState = async () => {
  const session = await auth();
  return session !== null;
};
