import { Stack } from "@mui/material";
import React from "react";
import { getTeachers} from "./_components/actions";
import {
  DetailedInfoSection,
  StatisticSection,
  TeacherInfoSection,
} from "./_components";
import { getEnrollmentsWithCoursesByUserId, getUserBySessionAndRedirectIfNoSessionExist } from "@/lib/actions";

const Page = async () => {
  const teacherData = await getTeachers();
  const user = await getUserBySessionAndRedirectIfNoSessionExist();
  const enrollments = await getEnrollmentsWithCoursesByUserId(user.id);
  return (
    <Stack spacing={10} className="flex items-center">
      <StatisticSection />
      <DetailedInfoSection enrollments={enrollments} />
      {teacherData.length > 0 && <TeacherInfoSection data={teacherData} />}
    </Stack>
  );
};

export default Page;
