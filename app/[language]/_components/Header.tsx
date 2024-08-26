import { AppBar, Stack, Toolbar } from "@mui/material";
import React from "react";
import SignInButton from "./SignInButton";
import UserAvatar from "./UserAvatar";
import Logo from "./Logo";
import { Session } from "next-auth";
import NavigationButton from "./NavigationButton";
import { useTranslation } from "@/app/i18n";
const Header = async ({
  session,
  language,
}: {
  session: Session | null;
  language: string;
}) => {
  const { t } = await useTranslation(language, "layout");
  return (
    <AppBar position="sticky" className="top-0 left-0">
      <Toolbar className="flex justify-between items-center">
        <Stack spacing={2} direction="row" className="flex items-center">
          <Logo />
          <NavigationButton text={t("dashboard-button")} link="/dashboard" />
          <NavigationButton
            text={t("courses-button")}
            link="/course-exploration"
          />
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
