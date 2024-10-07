import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Course } from "@prisma/client";
import Grid from "@mui/material/Grid2";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import Link from "next/link";

const CourseList = ({ courses }: { courses: Course[] }) => {
  return (
    <Box>
      <Typography variant="h5" className="p-10 text-center bg-slate-400">
        Course List
      </Typography>
      <Grid container className="ps-10">
        <Grid size={2} className="flex justify-center">
          <TextField
            defaultValue="Upload Year"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FilterAltIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={10} className="flex items-center justify-center">
          <Stack spacing={2}>
            {courses.map((course) => (
              <Card key={course.id}>
                <CardContent className="flex items-center justify-between">
                  <Stack spacing={1} className="w-3/4">
                    <Link href={`/course/${course.id}`}>
                      <Typography
                        variant="h6"
                        className="font-bold hover:underline"
                      >
                        {course.title}
                      </Typography>
                    </Link>
                    <Typography variant="subtitle1" className="text-slate-500">
                      {course.description}
                    </Typography>
                    <Typography variant="subtitle1" className="font-bold">
                      ${course.price}
                    </Typography>
                  </Stack>
                  <Stack spacing={2}>
                    <Button variant="contained">Buy now</Button>
                    <Button variant="outlined">Add to Card</Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export { CourseList };
