import { CourseIncludeTeacherIncludeUser } from "@/lib/types";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useCart } from "react-use-cart";

const CourseItem = ({
  course,
}: {
  course: CourseIncludeTeacherIncludeUser;
}) => {
  const { removeItem } = useCart();
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
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
          </Grid>
          <Grid item xs={2} className="flex justify-end">
            <Button
              onClick={() => {
                removeItem(course.id);
              }}
              className="h-fit w-fit normal-case"
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CourseItem;
