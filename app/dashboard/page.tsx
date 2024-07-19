"use client";

import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Dashboard</h1>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
