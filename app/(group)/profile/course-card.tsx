import { Grid, Typography } from "@mui/material";
import { Course } from "@prisma/client";
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h5" className="font-bold">
        {course.name}
      </Typography>
      <Typography variant="body1" className="text-[#8d96a0]">
        {course.description}
      </Typography>
      <Typography variant="body1">{course.price}$</Typography>
    </Grid>
  );
};

export default CourseCard;
