import { auth } from "@/auth";
import CreateCourseButton from "@/components/group/profile/create-course-button";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CourseList from "./course-list";

//TODO: Fix profile image having low quality from Google

const Page = async () => {
  const session = await auth();

  if (session === null || !session.user) return null;
  const user = session.user;
  const userImage = user?.image || "no-avatar.png";
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Box className="w-[260px] h-[260px] rounded-full overflow-hidden mb-5">
              <Image
                src={userImage}
                alt="User Avatar"
                width={260}
                height={260}
              />
            </Box>
            <Box>
              {" "}
              <Typography variant="h5" className="font-bold">
                {user.name}
              </Typography>
              <Typography variant="h5" className="text-[#8d96a0]">
                {user.email}
              </Typography>
            </Box>
            <CreateCourseButton />
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <CourseList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
