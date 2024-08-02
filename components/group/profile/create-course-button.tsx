"use client";

import { Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const CreateCourseButton = () => {
  return (
    <Link href="/create-course" className="w-full">
      <Button variant="outlined" className="normal-case w-full">
        Create Course
      </Button>
    </Link>
  );
};

export default CreateCourseButton;
