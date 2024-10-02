// Start of Selection
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { getUserBySessionAndRedirectIfNoSessionExist } from "@/lib/actions";
import {
  getEnrollmentByUserId,
  getTeacherWithCoursesByUserId,
} from "./_components/actions";
import {
  CreateTeacherAccountButton,
  BasicTabs,
  CreateCourseButton,
  EditProfileButton,
} from "./_components";

const Page = async () => {
  const user = await getUserBySessionAndRedirectIfNoSessionExist();

  const [enrollments, teacher] = await Promise.all([
    getEnrollmentByUserId(user.id),
    getTeacherWithCoursesByUserId(user.id),
  ]);

  return (
    <Container>
      <Grid container spacing={4} className="pt-10">
        {/* Profile Sidebar */}
        <Grid size={3} className="flex justify-center items-start">
          <Stack spacing={3} className="w-full items-center">
            <Box className="w-64 h-64 rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src={user.image || "/default-avatar.png"}
                alt={`${user.name}'s Avatar`}
                width={256}
                height={256}
                className="object-cover"
                priority
              />
            </Box>
            <Box className="text-center">
              <Typography variant="h5" className="font-bold">
                {user.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {user.email}
              </Typography>
            </Box>
            <EditProfileButton />
            {teacher ? <CreateCourseButton /> : <CreateTeacherAccountButton />}
          </Stack>
        </Grid>

        {/* Main Content */}
        <Grid size={9}>
          <BasicTabs enrollments={enrollments} teacher={teacher} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
