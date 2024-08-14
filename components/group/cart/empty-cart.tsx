import { Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { FaDropbox } from "react-icons/fa";

const EmptyCart = () => {
  return (
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
  );
};

export default EmptyCart;
