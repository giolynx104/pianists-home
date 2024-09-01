"use client";

import { Button } from "@mui/material";
import React from "react";
import Link from "next/link";
export const CreateCourseButton = () => {
  return (
    <Link href="/create-course" className="w-full">
      <Button variant="outlined" className="normal-case w-full">
        Create Course
      </Button>
    </Link>
  );
};
