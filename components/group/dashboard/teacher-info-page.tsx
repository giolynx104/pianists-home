"use client";

import React from "react";
import { appearAnimation, slideInLeft, slideInRight } from "./animation";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Stack,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import NextImage from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const TeacherInfoPage = ({
  data,
}: {
  data: ({
    user: {
      id: string;
      name: string | null;
      email: string | null;
      password: string | null;
      emailVerified: Date | null;
      image: string | null;
    };
    images: {
      id: string;
      url: string;
      teacherId: string;
      createdAt: Date;
    }[];
  } & {
    id: string;
    userId: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    demoLink: string;
  })[];
}) => {
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

  const teacher = data[currentIndex];
  console.log(teacher);
  return (
    <Box className="flex justify-center h-screen w-full">
      <Grid container spacing={2} className="flex justify-center items-center w-full">
        <Grid item xs={12} className="h-auto">
          <Box className="flex justify-center items-center bg-gray-400 h-20">
            <Typography variant="h5" className="w-full text-center ">
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
            key={teacher.id}
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <Stack spacing={2} direction="row">
              <Box className="w-1/2 flex justify-center items-center">
                <Card className="w-full">
                  <CardContent>
                    <Stack
                      spacing={3}
                      className="flex flex-col justify-center items-center"
                    >
                      <Typography className="text-center" variant="h5">
                        {teacher.user.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        {teacher.description}
                      </Typography>
                      <Button className="normal-case">Xem thêm</Button>
                      <ReactPlayer
                        controls
                        url={teacher.demoLink}
                        width="100%"
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
              <Box className="w-1/2 flex justify-center items-center">
                <NextImage
                  objectFit="contained"
                  src={teacher.images[0].url}
                  alt="An image of the pianist"
                  width={400}
                  height={400}
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
  );
};

export default TeacherInfoPage;
