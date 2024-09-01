import { Course } from "@prisma/client";
import BuyButton from "./buy-button";
import AddToCartButton from "./add-to-cart-button";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

const Buttons = ({ course }: { course: Course }) => {
  return (
    <Stack spacing={2}>
      <Typography
        variant="body1"
        className="text-lg"
        component="h2"
        sx={{ mb: 2 }}
      >
        {course.price}$ / month
      </Typography>
      <Link href={`/course/${course.id}/payment`} className="w-full">
        <BuyButton course={course} />
      </Link>
      <AddToCartButton course={course} />
    </Stack>
  );
};

export default Buttons;
