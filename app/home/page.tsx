import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "/public/playing-piano-background.webp";
import Link from "next/link";
export default function Page() {
  return (
    <Grid container className="relative">
      <Grid item xs={6} className="flex items-center justify-center">
        <Stack
          spacing={4}
          flexDirection="column"
          className="flex justify-center items-center"
        >
          <Typography variant="h2" className="text-center">
            Connect, Learn, Play
          </Typography>
          <Link href="/dashboard">
            <Button variant="contained" className="normal-case">
              Go to Dashboard
            </Button>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={6} className="flex justify-center">
        <Image src={image} alt="Piano" className="h-lvh w-auto" />
      </Grid>
    </Grid>
  );
}
