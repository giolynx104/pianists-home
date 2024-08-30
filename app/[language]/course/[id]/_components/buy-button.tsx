import { Button } from "@mui/material";
import { Course } from "@prisma/client";
import Link from "next/link";

//TODO: Implement this button
const BuyButton = ({ course }: { course: Course }) => {
  return (
    <Link href={`/course/${course.id}/payment`}>
      <Button
        variant="contained"
        color="primary"
        className="w-full normal-case text-lg"
      >
        Buy now
      </Button>
    </Link>
  );
};

export default BuyButton;
