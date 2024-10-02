"use client";

import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StudentFunctionsCard } from "./StudentFunctionsCard";
import { TeacherFunctionsCard } from "./TeacherFunctionsCard";
import { useRouter } from "next/navigation";

export const LandingPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/auth");
  };

  return (
    <Box>
      <Container className="flex justify-center">
        <Stack className="flex justify-center" spacing={3}>
          <Header />
          <Typography variant="h3" className="text-center">
            Connecting Piano Teachers and Students
          </Typography>
          <Typography variant="h5" className="text-center">
            Find the perfect piano lesson or share your musical expertise
          </Typography>
          <Box className="flex justify-center">
            <Button
              variant="contained"
              className="w-fit normal-case text-white bg-black"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Box>
          <StudentFunctionsCard />
          <TeacherFunctionsCard />
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
};
