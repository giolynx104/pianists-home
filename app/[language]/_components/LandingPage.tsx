import { Box, Container, Stack, Typography } from "@mui/material";
import { Footer } from "./Footer";
import { StudentFunctionsCard } from "./StudentFunctionsCard";
import { TeacherFunctionsCard } from "./TeacherFunctionsCard";
import { GetStartedButton } from "./GetStartedButton";

export const LandingPage = () => {
  return (
    <Box>
      <Container className="flex justify-center pt-8">
        <Stack className="flex justify-center" spacing={3}>
          <Typography
            variant="h4"
            className="text-blue-600 font-bold text-center"
          >
            Home of Pianists
          </Typography>
          <Typography variant="h3" className="text-center">
            Connecting Piano Teachers and Students
          </Typography>
          <Typography variant="h5" className="text-center">
            Find the perfect piano lesson or share your musical expertise
          </Typography>
          <Box className="flex justify-center">
            <GetStartedButton />
          </Box>
          <StudentFunctionsCard />
          <TeacherFunctionsCard />
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
};
