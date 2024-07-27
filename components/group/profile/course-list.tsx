import { auth } from "@/auth";
import { Grid } from "@mui/material";
import CourseCard from "./course-card";
import prisma from "@/lib/db";
import NoCourseCard from "./no-course-card";

const CourseList = async () => {
  const session = await auth();
  const user = session?.user;
  const currentUser = await prisma.user.findUnique({
    where: {
      email: user?.email ?? "",
    },
  });
  const courses = await prisma.course.findMany({
    where: {
      userId: currentUser?.id,
    },
  });
  return (
    <Grid container spacing={2}>
      {courses ? (
        courses.map((course) => <CourseCard key={course.id} course={course} />)
      ) : (
        <NoCourseCard />
      )}
    </Grid>
  );
};

export default CourseList;
