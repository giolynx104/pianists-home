"use client";

import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Header } from "./Header";
import { IdentityButtonGroup } from "./IdentityButtonsGroup";
import { Footer } from "./Footer";
import { StudentFunctionsCard } from "./StudentFunctionsCard";
import { TeacherFunctionsCard } from "./TeacherFunctionsCard";
import { useRouter } from 'next/navigation';

export const LandingPage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signin');
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
          <IdentityButtonGroup />
          <StudentFunctionsCard />
          <TeacherFunctionsCard />
          <Typography variant="h3" className="text-center">
            Start Your Musical Journey Today
          </Typography>
          <Typography variant="h5" className="text-center">
            Join our community of piano enthusiasts
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
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
};
