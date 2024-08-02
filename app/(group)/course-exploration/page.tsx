"use client";

import { Stack, Typography, Box, CircularProgress } from "@mui/material";
import React, { Suspense, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Search from "@/components/group/course-exploration/search";
import CustomTab from "@/components/group/course-exploration/custom-tab";
import Table from "@/components/group/course-exploration/table";

const Page = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  console.log(`The query was: ${searchParams?.query}`);
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const [value, setValue] = useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    //TODO: Implement tab change
    setValue(newValue);
  };

  return (
    <Box className="p-20">
      <Stack spacing={2}>
        <Typography variant="h4">Course Exploration</Typography>
        <Search placeholder="Search for courses..." />
        <TabContext value={value}>
          <TabList onChange={handleTabChange}>
            <CustomTab label="Most popular" value="1" />
            <CustomTab label="New" value="2" />
            <CustomTab label="Beginner Favourites" value="3" />
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
            <Typography variant="subtitle1">Coming Soon</Typography>
          </TabPanel>
        </TabContext>
      </Stack>
    </Box>
  );
};

export default Page;
