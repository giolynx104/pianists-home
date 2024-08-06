"use client";

import {
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CourseWithUser, getCoursesContainQuery } from "./actions";
import React from "react";
import CourseCard from "./course-card";

export const ITEMS_PER_PAGE = 3;
const Table = ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const [courses, setCourses] = useState<CourseWithUser[]>([]);
  const [page, setPage] = useState(currentPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const initializeCourses = async () => {
      const courses = await getCoursesContainQuery(query);
      setTotalPages(Math.ceil(courses.length / ITEMS_PER_PAGE));
      setCourses(courses.slice(3 * (page - 1), 3 * page));
    };
    initializeCourses();
  }, [query, page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setPage(newValue);
  };

  return (
    <Stack spacing={4} className="flex flex-col justify-center items-center">
      <Grid container spacing={2}>
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </Grid>
      <Pagination page={page} count={totalPages} onChange={handlePageChange} />
    </Stack>
  );
};

export default Table;
