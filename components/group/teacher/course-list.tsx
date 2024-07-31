import { Box, Stack, Typography } from "@mui/material";
import { Course } from "@prisma/client";

const CourseList = ({ courses }: { courses: Course[] }) => {
  return (
    <Box>
      <Typography variant="h5" className="uppercase p-10 text-center">
        Course List
      </Typography>
      {courses.map((course) => {
        return (
          <Stack key={course.id} spacing={2}>
            <Typography variant="h6">{course.name}</Typography>
            <Typography variant="subtitle1">{course.description}</Typography>
            <Typography variant="subtitle1">{course.price}</Typography>
          </Stack>
        );
      })}
    </Box>
  );
};

export default CourseList;
