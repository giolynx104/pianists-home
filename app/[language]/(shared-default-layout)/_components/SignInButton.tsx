import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "@/app/i18n";
import { redirect } from "next/navigation";

const SignInButton = async ({ language }: { language: string }) => {
  const { t } = await useTranslation(language, "layout");
  return (
    <form
      action={async () => {
        "use server";
        redirect("/signin");
      }}
    >
      <Button
        variant="outlined"
        startIcon={<FaUserCircle />}
        type="submit"
        className="border-white text-white hover:border-white hover:bg-slate-600 normal-case w-full h-full"
        color="inherit"
        sx={{
          textTransform: "none",
        }}
      >
        {t("sign-in-button")}
      </Button>
    </form>
  );
};

export default SignInButton;
