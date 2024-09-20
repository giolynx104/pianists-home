"use client";

import { Box, Container, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, TabProps } from "@mui/material";
import { useState } from "react";
import { EnrollmentIncludeCourse } from "@/lib/types";
import Link from "next/link";

const CustomTab: React.FC<TabProps> = (props) => (
  <Tab
    {...props}
    sx={{
      textTransform: "none",
      border: "1px solid #ccc",
      borderRadius: "8px",
      minWidth: 100,
      marginRight: "8px",
      "&.Mui-selected": {
        backgroundColor: "#1976d2",
        color: "#fff",
        borderColor: "#1976d2",
      },
      "&:hover": {
        backgroundColor: "#63a4ff",
      },
      ...props.sx,
    }}
  />
);

export const DetailedInfoSection = ({
  enrollments,
}: {
  enrollments: EnrollmentIncludeCourse[];
}) => {
  const [value, setValue] = useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box className="w-full border border-solid border-gray-300 rounded-2xl p-10">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="dashboard tabs">
              <CustomTab label="Recent" value="0" />
              <CustomTab label="My Courses" value="1" />
              <CustomTab label="Schedule" value="2" />
              <CustomTab label="Message" value="3" />
            </TabList>
          </Box>
          <TabPanel value="0">
            <Typography>Recent content goes here</Typography>
          </TabPanel>
          <TabPanel value="1">
            <Typography>
              {enrollments.map((enrollment) => (
                <Box
                  key={enrollment.id}
                  mb={2}
                  p={2}
                  border="1px solid #ccc"
                  borderRadius="8px"
                >
                  <Typography variant="h6" color="primary">
                    <Link
                      href={`/courses/${enrollment.course.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {enrollment.course.name}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Start Date:{" "}
                    {new Date(enrollment.startDate).toLocaleDateString()}
                  </Typography>
                </Box>
              ))}
            </Typography>
          </TabPanel>
          <TabPanel value="2">
            <Typography>Schedule content goes here</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography>Message content goes here</Typography>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
