import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { getTeachers } from "./components/actions";
import TeacherInfoSection from "./components/teacher-info-section";
import { CourseExplorationButton } from "./components";

const Page = async () => {
  const teacherData = await getTeachers();

  return (
    <Stack spacing={10} className="flex items-center">
      <Box
        className="relative w-full h-screen flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("dashboard-background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Stack spacing={2} className="flex pt-20">
          <Typography variant="h3" className="text-center w-auto text-white">
            Khám phá thế giới âm nhạc cùng chúng tôi
          </Typography>
          <Typography variant="h5" className="text-center w-auto text-white">
            Nền tảng học Piano hàng đầu Việt Nam
          </Typography>
          <Box className="flex justify-center">
            <CourseExplorationButton/>
          </Box>
        </Stack>
      </Box>
      {teacherData.length > 0 && <TeacherInfoSection data={teacherData} />}
    </Stack>
  );
}

export default Page;