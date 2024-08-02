import { auth } from "@/auth";
import CourseList from "@/components/group/profile/course-list";
import CreateCourseButton from "@/components/group/profile/create-course-button";
import RegisterAsTeacherButton from "@/components/group/profile/register-as-teacher-button";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

//TODO: Fix profile image having low quality from Google

const Page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const user = session.user!;
  const userImage = user.image!;
  const currentUser = await prisma.user.findUnique({
    where: {
      email: user.email!,
    },
  });
  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: currentUser?.id,
    },
  });
  return (
    <Box className="mt-10 flex w-full h-full justify-center pl-16 pr-16">
      <Grid container spacing={2}>
        <Grid item xs={3} className="flex justify-center items-center">
          <Stack spacing={2} className="flex justify-center items-center">
            <Box className="w-[260px] h-[260px] rounded-full overflow-hidden mb-5 flex justify-center items-center">
              <Image
                src={userImage}
                alt="User Avatar"
                width={260}
                height={260}
              />
            </Box>
            <Box>
              <Typography variant="h5" className="font-bold">
                {user.name}
              </Typography>
              <Typography variant="h5" className="text-[#8d96a0]">
                {user.email}
              </Typography>
            </Box>
            <Link className="w-full" href="/profile/edit">
              <Button variant="outlined" className="normal-case w-full">
                Edit profile
              </Button>
            </Link>
            {teacher ? <CreateCourseButton /> : <RegisterAsTeacherButton />}
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <CourseList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
