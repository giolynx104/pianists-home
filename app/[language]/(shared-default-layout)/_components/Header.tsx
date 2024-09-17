import { AppBar, Stack, Toolbar } from "@mui/material";
import React from "react";
import SignInButton from "./SignInButton";
import UserAvatar from "./UserAvatar";
import Logo from "./Logo";
import { Session } from "next-auth";
import NavigatingButton from "./NavigatingButton";
import { useTranslation } from "@/app/i18n";
import { LanguageSelector } from "./LanguageSelector";
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
          <NavigatingButton text={t("dashboard-button")} link="/dashboard" />
          <NavigatingButton
            text={t("courses-button")}
            link="/course-exploration"
          />
        </Stack>
        <Stack direction={"row"} spacing={2} className="flex items-center">
          <LanguageSelector />
          {session ? (
            <UserAvatar userAvatar={session.user!.image!} />
          ) : (
            <SignInButton language={language}/>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
