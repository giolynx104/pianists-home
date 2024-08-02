"use client";

import { Stack, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomTab from "./custom-tab";
import { CourseWithUser } from "@/app/(group)/course-exploration/page";

const Main = ({ courses }: { courses: CourseWithUser[] }) => {
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
                          {course.teacher.user.name}
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
