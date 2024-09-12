import Grid from "@mui/material/Grid2";
import CourseCard from "./CourseCard";
import NoTeachingCourseBox from "./NoTeachingCourseBox";
import { Course, Teacher } from "@prisma/client";
import { CreateTeacherAccountButton } from "./CreateTeacherAccountButton";
const CourseList = ({
  teacher,
  courses,
}: {
  teacher: Teacher;
  courses: Course[];
}) => {
  if (!teacher) {
    return <CreateTeacherAccountButton />;
  }

  return courses.length !== 0 ? (
    <Grid container spacing={2} className="w-full h-full">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Grid>
  ) : (
    <NoTeachingCourseBox />
  );
};

export default CourseList;
