import { Grid, Card, CardContent, Stack, Typography } from "@mui/material";
import { CourseWithUser } from "./actions";
import Link from "next/link";

const CourseCard = ({ course }: { course: CourseWithUser }) => {
  return (
    <Grid item key={course.id} xs={4}>
      <Card className="w-full h-full">
        <CardContent>
          <Stack spacing={1}>
            <Link href={`/course/${course.id}`}>
              <Typography className="font-bold hover:underline" variant="h5">
                {course.name}
              </Typography>
            </Link>
            <Typography variant="subtitle2">
              {course.teacher.user.name}
            </Typography>
            <Typography variant="subtitle1">{course.description}</Typography>
            <Typography variant="body2">${course.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CourseCard;
