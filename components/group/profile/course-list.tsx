import { auth } from "@/auth";
import { Grid } from "@mui/material";
import CourseCard from "./course-card";
import prisma from "@/lib/db";
import NoCourseCard from "./no-course-card";

const CourseList = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }
  const user = session.user;
  const currentUser = await prisma.user.findUnique({
    where: {
      email: user?.email ?? "",
    },
  });
  const teacher = await prisma.teacher.findUnique({
    where: {
      userId: currentUser?.id,
    },
  });
  const courses = await prisma.course.findMany({
    where: {
      teacherId: teacher?.id,
    },
  });
  return courses.length !== 0 ? (
    <Grid container spacing={2} className="w-full h-full">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Grid>
  ) : (
    <NoCourseCard />
  );
};

export default CourseList;
