"use client";

import { Button } from "@mui/material";
import { createEnrollment } from "./actions";

const FinishPaymentButton = ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  return (
    <Button
      onClick={() => {
        createEnrollment(courseId, userId);
      }}
      variant="contained"
    >
      Finish simulated payment
    </Button>
  );
};

export default FinishPaymentButton;
