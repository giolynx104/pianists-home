"use client";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import pianistImage from "@/public/maxresdefault.jpg";
import dynamic from "next/dynamic";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { data, images } from "@/data";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Main() {
  return (
    <Grid
      container
      spacing={4}
      className="h-auto w-screen flex justify-center items-center"
    >
      <Grid item xs={12} className="h-auto">
        <Typography variant="h5" className="text-center">
          Các nghệ sĩ nổi bật
        </Typography>
      </Grid>
      {data.map((artist) => (
        <>
          <Grid item xs={1}>
            <IconButton>
              <BsArrowLeftCircle />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Card>
              <CardContent>
                <Stack
                  spacing={3}
                  className="flex flex-col justify-center items-center"
                >
                  <Typography className="text-center" variant="h5">
                    {artist.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    {artist.description}
                  </Typography>
                  <Button className="normal-case">Xem thêm</Button>
                  <ReactPlayer controls url={artist.demoLink} width="100%" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Image
              objectFit="contained"
              src={images[artist.imageKey]}
              alt="An image of the pianist"
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <BsArrowRightCircle />
            </IconButton>
          </Grid>
        </>
      ))}
    </Grid>
  );
}
