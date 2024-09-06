"use client";

import { Stack, Typography, Box, CircularProgress } from "@mui/material";
import React, { Suspense, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Search, CustomTab, Table } from "./_components";
import { NearbyOfflineCourseList } from "./_components/NearbyOfflineCourseList";

const Page = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const [value, setValue] = useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className="p-20" color={"inherit"}>
      <Stack spacing={2}>
        <Typography variant="h4">Course Exploration</Typography>
        <Search placeholder="Search for courses..." />
        <TabContext value={value}>
          <TabList onChange={handleTabChange}>
            <CustomTab label="Most popular" value="1" />
            <CustomTab label="New" value="2" />
            <CustomTab label="Nearby Offline Courses" value="3" />
            <CustomTab label="Beginner Favourites" value="4" />
          </TabList>
          <TabPanel value="1" className="p-0">
            <Stack spacing={2}>
              <Suspense
                key={query + currentPage}
                fallback={<CircularProgress />}
              >
                <Table query={query} currentPage={currentPage} />
              </Suspense>
            </Stack>
          </TabPanel>
          <TabPanel value="2">
            <Typography variant="subtitle1">Coming Soon</Typography>
          </TabPanel>
          <TabPanel value="3">
            <NearbyOfflineCourseList />
          </TabPanel>
          <TabPanel value="4">
            <Typography variant="subtitle1">Coming Soon</Typography>
          </TabPanel>
        </TabContext>
      </Stack>
    </Box>
  );
};

export default Page;
