import prisma from "@/lib/db";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";

const Page = async ({ params }: { params: { id: string } }) => {
  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },
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
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Stack spacing={2}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            {course.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {course.description}
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            {course.price} per month
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={`/course/${course?.id}/enroll`}
          >
            Enroll
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Typography className="text-center">
          Intructor: {teacher.user.name}
        </Typography>
      </Grid>
    </Grid>
  );
  return;
};

export default Page;
