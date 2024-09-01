import { Divider, Stack } from "@mui/material";
import { Footer, Header } from "./_components";
import { ReactNode } from "react";
import { auth } from "@/auth";

const Layout = async ({
  params: { language },
  children,
}: {
  params: { language: string };
  children: ReactNode;
}) => {
  const session = await auth();
  return (
    <Stack>
      <Header session={session} language={language} />
      {children}
      <Divider variant="fullWidth" className="pt-10" />
      <Footer />
    </Stack>
  );
};

export default Layout;
