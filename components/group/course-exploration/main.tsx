"use client";

import {
  Stack,
  Typography,
  Tabs,
  Tab,
  Grid,
  CardHeader,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { Course, Teacher, User } from "@prisma/client";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomTab from "./custom-tab";

const Main = ({
  courses,
}: {
  courses: (Course & { Teacher: Teacher & { user: User } })[];
}) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box className="p-20">
      <Stack spacing={2}>
        <Typography variant="h4">Course Exploration</Typography>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <CustomTab label="Most popular" value="1" />
            <CustomTab label="New" value="2" />
            <CustomTab label="Beginner Favourites" value="3" />
          </TabList>
          <TabPanel value="1">
            <Grid container spacing={2}>
              {courses.map((course) => (
                <Grid item key={course.id} xs={4}>
                  <Card>
                    <CardContent>
                      <Stack spacing={1}>
                        <Typography variant="h5">{course.name}</Typography>
                        <Typography variant="subtitle2">
                          {course.Teacher.user.name}
                        </Typography>
                        <Typography variant="subtitle1">
                          {course.description}
                        </Typography>
                        <Typography variant="body2">${course.price}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </TabContext>
      </Stack>
    </Box>
  );
};

export default Main;
