import { Grid } from "@mui/material";
import CourseCard from "./course-card";
import NoCourseCard from "./no-course-card";
import RegisterAsTeacherButton from "./register-as-teacher-button";
import { Course, Teacher } from "@prisma/client";

const CourseList = ({
  teacher,
  courses,
}: {
  teacher: Teacher;
  courses: Course[];
}) => {
  if (!teacher) {
    return <RegisterAsTeacherButton />;
  }

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
