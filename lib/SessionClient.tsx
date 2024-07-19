"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const SessionClient = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionClient;
