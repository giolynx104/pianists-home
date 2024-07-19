import { Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "/public/playing-piano-background.webp";
export default function Main() {
  return (
    <Grid container spacing={5} className="relative">
      <Grid item xs={6} className="flex items-center justify-center">
        <Stack spacing={4} flexDirection="column" className="flex justify-center items-center" >
          <Typography variant="h2" className="text-center">
            Kết nối những niềm đam mê âm nhạc
          </Typography>
          <Button variant="contained" className="w-fit">
            Đăng ký ngay
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={6} className="flex justify-center">
        <Image src={image} alt="Piano" className="h-lvh w-auto" />
      </Grid>
    </Grid>
  );
}
