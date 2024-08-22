"use client";

import { CourseWithUser } from "@/components/group/course-exploration/actions";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { handleCheckout, getCourses } from "./_components/actions";
import { CartItems, EmptyCart } from "./_components";

const Page = () => {
  const { isEmpty, items, emptyCart } = useCart();
  const [courses, setCourses] = useState<CourseWithUser[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initializeCourses = async () => {
      const courses = await getCourses(items);
      setCourses(courses);
      let total = 0;
      for (const course of courses) {
        total += course.price;
      }
      setTotal(total);
    };
    initializeCourses();
  }, [items]);

  return (
    <Container className="mt-10 flex justify-center">
      <Stack spacing={2}>
        <Typography variant="h4" className="text-center">
          Shopping Cart
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            emptyCart();
            handleCheckout(courses);
          }}
        >
          {isEmpty ? (
            <EmptyCart />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <CartItems courses={courses} />
              </Grid>
              <Grid item xs={3}>
                <Stack
                  spacing={2}
                  className="rounded-2xl flex justify-center bg-gray-500 border border-[primary] p-4"
                >
                  <Typography variant="h5">Total: </Typography>
                  <Typography variant="h2">{total}$</Typography>
                  <Button
                    variant="contained"
                    className="normal-case text-lg"
                    type="submit"
                  >
                    Checkout
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          )}
        </form>
      </Stack>
    </Container>
  );
};

export default Page;
