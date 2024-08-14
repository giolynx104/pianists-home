"use client";

import { Stack } from "@mui/material";
import { CourseWithUser } from "../course-exploration/actions";
import CourseItem from "./course-item";

const CartItems = ({ courses }: { courses: CourseWithUser[] }) => {
  return (
    <Stack spacing={2}>
      {courses.map((course: CourseWithUser) => {
        return <CourseItem course={course} key={course.id} />;
      })}
    </Stack>
  );
};

export default CartItems;
