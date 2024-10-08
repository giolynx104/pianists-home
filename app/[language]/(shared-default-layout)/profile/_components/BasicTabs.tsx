"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { EnrollmentWithCourse, TeacherWithCourses } from "@/lib/types";
import { Button } from "@mui/material";
import CourseList from "./CourseList";
import EnrolledCourseList from "./EnrolledCourseList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs({
  enrollments,
  teacher,
}: {
  enrollments: EnrollmentWithCourse[];
  teacher: TeacherWithCourses | null;
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="normal-case text-lg" label="My Courses" {...allyProps(0)} />
          <Tab className="normal-case text-lg" label="My Classes" {...allyProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EnrolledCourseList enrollments={enrollments} />
      </CustomTabPanel>
      {teacher != null ? (
        <CustomTabPanel value={value} index={1}>
          <CourseList courses={teacher.courses} teacher={teacher} />
        </CustomTabPanel>
      ) : (
        <CustomTabPanel value={value} index={1}>
          <Button variant="contained">Create Teacher Account</Button>
        </CustomTabPanel>
      )}
    </Box>
  );
}
