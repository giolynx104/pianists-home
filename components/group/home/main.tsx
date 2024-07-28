import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import image from "/public/playing-piano-background.webp";
import { useRouter } from "next/navigation";
export default function Main() {
  const router = useRouter();
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
          <Button
            onClick={() => {
              router.push("/api/auth/signin");
            }}
            variant="contained"
            className="w-fit"
          >
            Start now
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={6} className="flex justify-center">
        <Image src={image} alt="Piano" className="h-lvh w-auto" />
      </Grid>
    </Grid>
  );
}
