import { Stack, Tab, Tabs, Typography } from "@mui/material";
import prisma from "@/lib/db";
import Main from "@/components/group/course-exploration/main";

const Page = async () => {
  const courses = await prisma.course.findMany({
    include: {
      Teacher: {
        include: {
          user: true,
        },
      },
    },
  });
  return <Main courses={courses} />;
};

export default Page;
