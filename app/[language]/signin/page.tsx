import { useTranslation } from "@/app/i18n";
import { Box, Card, CardContent, CardHeader, Stack } from "@mui/material";
import { GitHubSignInButton, GoogleSignInButton } from "./_components";

const Page = async ({
  params: { language },
}: {
  params: { language: string };
}) => {
  const { t } = await useTranslation(language, "signin");
  return (
    <Box className="flex w-full h-screen justify-center items-center">
      <Card>
        <CardHeader
          sx={{
            "& .MuiTypography-root": {
              textAlign: "center",
            },
          }}
          title={t("sign-in")}
        />
        <CardContent className="flex justify-center">
          <Stack spacing={2}>
            <GoogleSignInButton />
            <GitHubSignInButton />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Page;
