import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/db";
import { getUserBySessionAndRedirectIfNoSessionExist } from "@/lib/actions";
import { getEnrollmentByUserId } from "./_components/actions";
import {
  CreateTeacherAccountButton,
  BasicTabs,
  CreateCourseButton,
} from "./_components";

//TODO: Fix profile image having low quality from Google
//TODO: Keeping the same tab opened when going back and forth
//TODO: Find course

const Page = async () => {
  const user = await getUserBySessionAndRedirectIfNoSessionExist();

  const enrollments = await getEnrollmentByUserId(user.id);

  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: user.id,
    },
    include: {
      courses: true,
    },
  });

  return (
    <Container>
      <Grid container spacing={2} className="pt-10">
        <Grid size={3} className="flex justify-center items-start">
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
            {teacher ? <CreateCourseButton /> : <CreateTeacherAccountButton />}
          </Stack>
        </Grid>
        <Grid size={9}>
          <BasicTabs enrollments={enrollments} teacher={teacher} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
