"use client";

import {
  Stack,
  Pagination,
} from "@mui/material";
import Grid from "@mui/material/Grid2"
import { useEffect, useState } from "react";
import { CourseWithUser, getCoursesContainQuery } from "./actions";
import React from "react";
import CourseCard from "./course-card";

export const ITEMS_PER_PAGE = 3;
export const Table = ({
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
    newValue: number,
  ) => {
    setPage(newValue);
  };

  return (
    <Stack spacing={4}>
      <Grid container spacing={2}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Grid>
      <Pagination page={page} count={totalPages} onChange={handlePageChange} className="flex justify-center"/>
    </Stack>
  );
};
