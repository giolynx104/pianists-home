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
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";

const CourseList = ({ courses }: { courses: Course[] }) => {
  return (
    <Box>
      <Typography variant="h5" className="p-10 text-center bg-slate-400">
        Course List
      </Typography>
      <Grid container>
        <Grid item xs={2} className="flex justify-center">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FilterAltIcon />
                </InputAdornment>
              ),
            }}
            defaultValue="Upload Year"
          />
        </Grid>
        <Grid item xs={10} className="flex items-center justify-center">
          <Stack spacing={2}>
            {courses.map((course) => (
              <Card key={course.id}>
                <CardContent className="flex items-center justify-between">
                  <Stack spacing={1} className="w-3/4">
                    <Typography variant="h6" className="font-bold">
                      {course.name}
                    </Typography>
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

export default CourseList;
