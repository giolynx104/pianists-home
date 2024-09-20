import { Stack } from "@mui/material";
import React from "react";
import { getTeachers } from "./_components/actions";
import {
  DetailedInfoSection,
  StatisticSection,
  TeacherInfoSection,
} from "./_components";

const Page = async () => {
  const teacherData = await getTeachers();
  return (
    <Stack spacing={10} className="flex items-center">
      <StatisticSection />
      <DetailedInfoSection/>
      {teacherData.length > 0 && <TeacherInfoSection data={teacherData} />}
    </Stack>
  );
};

export default Page;
