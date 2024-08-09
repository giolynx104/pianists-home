import { Grid } from "@mui/material";
import { EnrollmentWithCourse } from "@/lib/types";
import EnrolledCourseCard from "./enrolled-course-card";

const EnrolledCourseList = ({
  enrollments,
}: {
  enrollments: EnrollmentWithCourse[];
}) => {
  console.log(enrollments);
  return (
    <Grid container spacing={2}>
      {enrollments.map((enrollment) => (
        <EnrolledCourseCard
          key={enrollment.course.id}
          course={enrollment.course}
        />
      ))}
    </Grid>
  );
};

export default EnrolledCourseList;
