"use client";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import pianistImage from "@/public/maxresdefault.jpg";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Main() {
  return (
    <Grid container spacing={4} className="h-auto w-screen flex justify-center items-center">
      <Grid item xs={12} className="h-auto">
        <Typography variant="h5" className="text-center">
          Các nghệ sĩ nổi bật
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Stack
              spacing={3}
              className="flex flex-col justify-center items-center"
            >
              <Typography className="text-center" variant="h5">
                Lê Xuân Hải
              </Typography>
              <Typography variant="subtitle1">
                Nhà soạn nhạc, nghệ sĩ dương cầm, giáo sư dạy dương cầm vĩ đại
                của dân tộc Việt Nam.
              </Typography>
              <Button className="normal-case">Xem thêm</Button>
              <ReactPlayer
                controls
                width="600px"
                url="https://www.youtube.com/watch?v=tyMe9Eko4RQ"
              />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Image
          objectFit="contained"
          src={pianistImage}
          alt="Lê Xuân Hải"
        />
      </Grid>
    </Grid>
  );
}
