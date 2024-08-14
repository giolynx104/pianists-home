import Buttons from "@/components/group/course/buttons";
import prisma from "@/lib/db";
import { Box, Typography, Grid, Stack, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },
    include: {
      courseImages: true
    }
  });

  if (!course) {
    throw new Error("Invalid Course ID");
  }

  const teacher = await prisma.teacher.findUnique({
    where: {
      id: course.teacherId,
    },
    include: {
      user: true,
    },
  });

  if (!teacher) {
    throw new Error("Can't find the teacher of this course");
  }

  return (
    <Container className="my-10">
      <Grid container className="p-4 border-solid border-gray-400 border">
        <Grid item lg={9} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              {course.name}
            </Typography>
            <Image src={course.courseImages[0].url} alt="Course Image" width={200} height={200} />
            <Stack
              direction="row"
              spacing={2}
              className="w-fit rounded-full p-4 bg-gray-400"
            >
              <Box className="rounded-full overflow-hidden">
                <Image
                  src={teacher.user.image!}
                  alt="User Avatar"
                  width={25}
                  height={25}
                />
              </Box>
              <Link href={`/teacher/${teacher.id}`}>
                <Typography className="text-center hover:underline">
                  Intructor: {teacher.user.name}
                </Typography>
              </Link>
            </Stack>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {course.description}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          className="lg:sticky lg:flex lg:justify-center lg:items-center"
        >
          <Buttons course={course} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
