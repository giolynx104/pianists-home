import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { getTeachers } from "./_components/actions";
import TeacherInfoSection from "./_components/teacher-info-section";
import { CourseExplorationButton } from "./_components";
import { useTranslation } from "@/app/i18n";

const Page = async ({
  params: { language },
}: {
  params: { language: string };
}) => {
  const teacherData = await getTeachers();
  const { t } = await useTranslation(language, "dashboard");
  return (
    <Stack spacing={10} className="flex items-center">
      <Box
        className="relative w-full h-screen flex justify-center items-center bg-transparent"
        style={{
          backgroundImage: `url(${"/dashboard-background.jpg"})`,
        }}
      >
        <Stack spacing={2} className="flex pt-20">
          <Typography variant="h3" className="text-center w-auto text-white">
            {t("motto")}
          </Typography>
          <Typography variant="h5" className="text-center w-auto text-white">
            {t("platform-intro")}
          </Typography>
          <Box className="flex justify-center">
            <CourseExplorationButton language={language} />
          </Box>
        </Stack>
      </Box>
      {teacherData.length > 0 && <TeacherInfoSection data={teacherData} />}
    </Stack>
  );
};

export default Page;
