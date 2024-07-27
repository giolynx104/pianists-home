"use client";

import {
  Box,
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
import dynamic from "next/dynamic";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { data, images } from "@/data";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import backgroundImage from "@/public/dashboard-background.jpg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const appearAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0 },
};

const slideInLeft = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "static",
      stiffness: 100,
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const slideInRight = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "static",
      stiffness: 100,
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

//TODO: Implement start connecting

export default function Main() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const [variants, setVariants] = React.useState<any>(appearAnimation);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setVariants(slideInRight);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setVariants(slideInLeft);
  };

  const artist = data[currentIndex];

  return (
    <Stack spacing={10} className="flex items-center">
      <Box
        className="relative w-full h-full flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("dashboard-background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Stack spacing={2} className="flex pt-20">
          <Typography variant="h3" className="text-center w-auto text-white">
            Khám phá thế giới âm nhạc cùng chúng tôi
          </Typography>
          <Typography variant="h5" className="text-center w-auto text-white">
            Nền tảng học Piano hàng đầu Việt Nam
          </Typography>
          <Box className="flex justify-center">
            <Button
              endIcon={<FaArrowAltCircleRight />}
              className="normal-case text-white"
              variant="outlined"
              size="small"
            >
              Nhấn để bắt đầu kết nối
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box className="flex justify-center h-screen">
        <Grid
          container
          spacing={2}
          className="flex justify-center items-center"
        >
          <Grid item xs={12} className="h-auto">
            <Box className="flex justify-center items-center bg-gray-400 h-20">
              <Typography variant="h5" className="w-auto text-center ">
                Các nghệ sĩ nổi bật
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={handlePrev}>
              <BsArrowLeftCircle />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <motion.div
              key={artist.id}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <Stack spacing={2} direction="row">
                <Box className="w-1/2 flex justify-center items-center">
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
                        <ReactPlayer
                          controls
                          url={artist.demoLink}
                          width="100%"
                        />
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
                <Box className="w-1/2 flex justify-center items-center">
                  <Image
                    objectFit="contained"
                    src={images[artist.imageKey]}
                    alt="An image of the pianist"
                  />
                </Box>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={handleNext}>
              <BsArrowRightCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
