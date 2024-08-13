import { Grid, Stack, Typography } from "@mui/material";
import { EnrollmentWithCourse } from "@/lib/types";
import EnrolledCourseCard from "./enrolled-course-card";
import { PiCalendarBlank } from "react-icons/pi";

//TODO: Make empty course list better UI

const EnrolledCourseList = ({
  enrollments,
}: {
  enrollments: EnrollmentWithCourse[];
}) => {
  return enrollments.length > 0 ? (
    <Grid container spacing={2}>
      {enrollments.map((enrollment) => (
        <EnrolledCourseCard
          key={enrollment.course.id}
          course={enrollment.course}
        />
      ))}
    </Grid>
  ) : (
    <Stack
      spacing={2}
      className="flex justify-center items-center w-full h-full border-2 border-dashed border-gray-400"
    >
      <PiCalendarBlank />
      <Typography>You haven&apos;t enrolled any courses yet</Typography>
    </Stack>
  );
};

export default EnrolledCourseList;
