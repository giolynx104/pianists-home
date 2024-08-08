"use client";

import { Button } from "@mui/material";
import { createEnrollment } from "./actions";
import { useEffect, useState } from "react";

const FinishPaymentButton = ({
  courseId,
  userId,
}: {
  courseId: string;
  userId: string;
}) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const doSomethingFunny = async () => {
      createEnrollment(courseId, userId);
    };

    doSomethingFunny();
  }, [clicked]);

  return (
    <Button
      onClick={() => {
        setClicked(true);
      }}
      variant="contained"
    >
      Finish simulated payment
    </Button>
  );
};

export default FinishPaymentButton;
