"use client";

import { Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
const CreateCourseButton = () => {
  const router = useRouter();
  return (
    <Button variant="contained"
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
