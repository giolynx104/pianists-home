import { auth } from "@/auth";
import CreateCourseButton from "@/components/group/profile/create-course-button";
import RegisterAsTeacherButton from "@/components/group/profile/register-as-teacher-button";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import BasicTabs from "@/components/group/profile/basic-tabs";
import {
  getCoursesByTeacherId,
  getEnrollmentByUserId,
} from "@/components/group/profile/actions";
import { verifySession, getCurrentUser } from "@/lib/actions";
import { PiCalendarBlank } from "react-icons/pi";

//TODO: Fix profile image having low quality from Google

const Page = async () => {
  const session = await verifySession(() => {
    redirect("api/auth/signin");
  });

  const user = await getCurrentUser(session);

  const enrollments = await getEnrollmentByUserId(user.id);

  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (enrollments.length === 0) {
    return (
      <Stack
        spacing={2}
        className="flex justify-center items-center w-full h-full border-2 border-dashed border-gray-400"
      >
        <PiCalendarBlank />
        <Typography>You haven't enrolled any courses yet</Typography>
      </Stack>
    );
  }

  if (teacher == null) {
    //TODO: handle null teacher
    return;
  }

  const courses = await getCoursesByTeacherId(teacher.id);

  return (
    <Box className="mt-10 flex w-full h-full justify-center pl-16 pr-16">
      <Grid container spacing={2}>
        <Grid item xs={3} className="flex justify-center items-start">
          <Stack spacing={2} className="flex justify-center items-center">
            <Box className="w-[260px] h-[260px] rounded-full overflow-hidden mb-5 flex justify-center items-center">
              <Image
                src={user.image!}
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
          <BasicTabs
            enrollments={enrollments}
            teacher={teacher}
            courses={courses}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
