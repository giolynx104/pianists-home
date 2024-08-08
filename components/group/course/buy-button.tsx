import { Button } from "@mui/material";
import { Course } from "@prisma/client";

const BuyButton = ({ course }: { course: Course }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      className="w-full normal-case text-lg"
    >
      Buy now
    </Button>
  );
};

export default BuyButton;
