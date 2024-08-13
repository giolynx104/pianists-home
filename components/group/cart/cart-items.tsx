"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import { CourseWithUser } from "../course-exploration/actions";
import { useEffect, useState } from "react";
import { getCourses } from "./actions";
import { FaDropbox } from "react-icons/fa";
import Link from "next/link";
import CourseItem from "./course-item";

const CartItems = () => {
  const { isEmpty, items } = useCart();
  const [courses, setCourses] = useState<CourseWithUser[]>([]);

  useEffect(() => {
    const initializeCourses = async () => {
      const courses = await getCourses(items);
      setCourses(courses);
    };
    initializeCourses();
  });

  if (isEmpty) {
    return (
      <Container className="h-80 flex justify-center items-center">
        <Stack spacing={4} className="flex justify-center items-center">
          <FaDropbox />
          <Typography variant="body1">
            Your cart is empty. Keep shopping to find a course!
          </Typography>
          <Link href="/course-exploration">
            <Button variant="contained" className="normal-case">
              Explore Courses
            </Button>
          </Link>
        </Stack>
      </Container>
    );
  }

  return (
    <Stack spacing={2}>
      {courses.map((course: CourseWithUser) => {
        return <CourseItem course={course} key={course.id} />;
      })}
    </Stack>
  );
};

export default CartItems;
