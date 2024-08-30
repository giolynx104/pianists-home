"use client";

import { Stack } from "@mui/material";
import CourseItem from "./CourseItem";
import { CourseIncludeTeacherIncludeUser } from "@/lib/types";

export const CartItems = ({ courses }: { courses: CourseIncludeTeacherIncludeUser[] }) => {
  return (
    <Stack spacing={2}>
      {courses.map((course: CourseIncludeTeacherIncludeUser) => {
        return <CourseItem course={course} key={course.id} />;
      })}
    </Stack>
  );
};
