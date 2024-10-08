import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { EnrollmentWithCourse } from "@/lib/types";
import EnrolledCourseCard from "./EnrolledCourseCard";
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
      className="flex justify-center items-center p-10 border-2 border-solid border-gray-400 rounded-2xl"
    >
      <PiCalendarBlank />
      <Typography>You haven&apos;t enrolled any courses yet</Typography>
    </Stack>
  );
};

export default EnrolledCourseList;
