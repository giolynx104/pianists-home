"use client";

import { Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
const CreateCourseButton = () => {
  const router = useRouter();
  return (
    <Button variant="outlined"
      onClick={() => {
        router.push("/create-course");
      }}
      className="normal-case"
    >
      Create Course
    </Button>
  );
};

export default CreateCourseButton;
