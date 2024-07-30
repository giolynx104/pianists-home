"use client";

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      aria-disabled={pending}
      className="normal-case"
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default SubmitButton;
