"use client";

import React, { useContext } from "react";
import { appearAnimation, slideInLeft, slideInRight } from "./animation";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { TeacherWithUserandImages } from "@/lib/types";
import { useTranslation } from "@/app/i18n/client";
import { LanguageContext } from "@/app/i18n/LanguageContext";
import Grid from "@mui/material/Grid2";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

export const TeacherInfoSection = ({
  data,
}: {
  data: TeacherWithUserandImages[];
}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [variants, setVariants] = React.useState<Variants>(appearAnimation);
  const language = useContext(LanguageContext);
  const { t } = useTranslation(language, "dashboard");

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
  for (const image of teacher.teacherImages) {
    console.log(image.url);
  }
  return (
    <Container>
      <Box className="w-full border border-solid border-gray-300 rounded-2xl p-10">
        <Grid container spacing={2} alignItems="center">
          <Grid size={12}>
            <Typography variant="h5" className="text-center text-black bg-gray-300 w-full p-6 rounded-t-2xl">
              {t("notable-teachers")}
            </Typography>
          </Grid>
          <Grid size={1} className="flex justify-center items-center">
            <IconButton onClick={handlePrev}>
              <BsArrowLeftCircle />
            </IconButton>
          </Grid>
          <Grid size={10}>
            <motion.div
              key={teacher.id}
              variants={variants}
              initial="initial"
              animate="animate"
            >
              <Stack spacing={2} direction="row">
                <Box className="w-1/2 flex justify-center items-center">
                  <Card className="w-full" elevation={6}>
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

                        <ReactPlayer controls url={teacher.demoLink} width="100%" />
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
                <Box className="w-1/2 relative">
                  <Image
                    src={teacher.teacherImages[0].url}
                    alt="An image of the pianist"
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </Box>
              </Stack>
            </motion.div>
          </Grid>
          <Grid size={1} className="flex justify-center items-center">
            <IconButton onClick={handleNext}>
              <BsArrowRightCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
