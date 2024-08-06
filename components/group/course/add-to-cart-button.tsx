"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { Alert, Button } from "@mui/material";
import { Course } from "@prisma/client";
import { useState } from "react";
import { useCart } from "react-use-cart";

const AddToCartButton = ({ course }: { course: Course }) => {
  const { addItem } = useCart();
  const [isAlertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          addItem(course);
          setAlertVisibility(true);
          setTimeout(() => setAlertVisibility(false), 3000);
        }}
        variant="outlined"
        className="normal-case text-lg"
      >
        Add to cart
      </Button>
      {isAlertVisible && (
        <Alert
          variant="filled"
          severity="success"
          className="absolute bottom-0 left-0"
        >
          Here is a gentle confirmation that your action was successful.
        </Alert>
      )}
    </>
  );
};

export default AddToCartButton;
