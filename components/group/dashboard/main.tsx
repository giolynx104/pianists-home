import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { getTeachers } from "./actions";
import TeacherInfoPage from "./teacher-info-page";

//TODO: Implement start connecting
//TODO: Create network boundary

export default async function Main() {
  const data = await getTeachers();

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
            <Button
              endIcon={<FaArrowAltCircleRight />}
              className="normal-case text-white"
              variant="outlined"
              size="small"
            >
              Nhấn để bắt đầu kết nối
            </Button>
          </Box>
        </Stack>
      </Box>
      <TeacherInfoPage data={data} />
    </Stack>
  );
}
