import { Button } from "@mui/material";
import { Course } from "@prisma/client";

const BuyButton = ({ course }: { course: Course }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      href={`/course/${course?.id}/enroll`}
      className="normal-case text-lg"
    >
      Buy now
    </Button>
  );
};

export default BuyButton;