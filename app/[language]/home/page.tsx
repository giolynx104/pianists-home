import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "/public/playing-piano-background.webp";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
const Page = async ({params : {language}} : {params: {language: string}}) => {
  const { t } =  await useTranslation(language, "home");
  return (
    <Grid container className="relative">
      <Grid item xs={6} className="flex items-center justify-center">
        <Stack
          spacing={4}
          flexDirection="column"
          className="flex justify-center items-center"
        >
          <Typography variant="h2" className="text-center">{t("motto")}</Typography>
          <Link href="/dashboard">
            <Button variant="contained" size="large" sx={{
              textTransform: "none",
            }}>{t("go-to-dashboard")}</Button>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={6} className="flex justify-center">
        <Image src={image} alt="Piano" className="h-lvh w-auto" />
      </Grid>
    </Grid>
  );
}

export default Page;