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
import { motion, Variants } from "framer-motion";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { TeacherWithUserandImages } from "@/lib/types";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const TeacherInfoSection = ({ data }: { data: TeacherWithUserandImages[] }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [variants, setVariants] = React.useState<Variants>(appearAnimation);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
    setVariants(slideInRight);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
    setVariants(slideInLeft);
  };

  const teacher = data[currentIndex];
  for (const image of teacher.teacherImages) {
    console.log(image.url);
  }
  return (
    <Box className="flex justify-center w-full">
      <Grid
        container
        spacing={2}
        className="flex justify-center items-center w-full"
      >
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
                      <Button
                        onClick={() => {
                          router.push(`/teacher/${teacher.id}`);
                        }}
                        className="normal-case"
                      >
                        Discover more
                      </Button>

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
                <Image
                  src={teacher.teacherImages[0].url}
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

export default TeacherInfoSection;
