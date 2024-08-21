"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const CourseExplorationButton = () => {
  const router = useRouter();
  return (
    <Button
      endIcon={<FaArrowAltCircleRight />}
      className="normal-case text-white"
      variant="outlined"
      size="small"
      onClick={() => {
        router.push("/course-exploration");
      }}
    >
      Nhấn vào đây để bắt đầu kết nối
    </Button>
  );
};
