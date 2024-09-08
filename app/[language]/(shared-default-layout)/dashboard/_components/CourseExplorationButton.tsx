"use client";

import { useTranslation } from "@/app/i18n/client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const CourseExplorationButton = ({ language }: { language: string }) => {
  const router = useRouter();
  const { t } = useTranslation(language, "dashboard");
  return (
    <Button
      endIcon={<FaArrowAltCircleRight />}
      className="normal-case text-blue-300"
      variant="outlined"
      size="small"
      onClick={() => {
        router.push("/course-exploration");
      }}
    >
      {t("course-exploration-button")}
    </Button>
  );
};
