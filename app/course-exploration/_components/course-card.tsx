import { Grid, Card, CardContent, Stack, Typography, Box } from "@mui/material";
import { CourseWithUser } from "./actions";
import Link from "next/link";
import Image from "next/image";

//TODO: Haven't understood why h-full is not working with Box in

const CourseCard = ({ course }: { course: CourseWithUser }) => {
  return (
    <Grid item key={course.id} xs={4}>
      <Card className="w-full h-full">
        <CardContent>
          <Stack spacing={1}>
            <Box className="w-full h-52 relative">
              <Image
                src={`${course.courseImages[0].url}`}
                alt="Course image"
                fill
                objectFit="contained"
              />
            </Box>
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
