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

const CourseList = ({ courses }: { courses: Course[] }) => {
  return (
    <Box>
      <Typography variant="h5" className="p-10 text-center bg-slate-400">
        Course List
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
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
        <Grid item xs={10}>
          {courses.map((course) => (
            <Card key={course.id}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" className="font-bold">
                    {course.name}
                  </Typography>
                  <Typography variant="subtitle1" className="text-slate-500">
                    {course.description}
                  </Typography>
                  <Typography variant="subtitle1" className="font-bold">
                    ${course.price}
                  </Typography>
                  <Divider />
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseList;
