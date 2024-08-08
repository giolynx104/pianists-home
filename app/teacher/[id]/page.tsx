import { Box, Stack, Typography } from "@mui/material";
import prisma from "@/lib/db";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FeaturedVideos from "@/components/group/teacher/featured-videos";
import About from "@/components/group/teacher/about";
import CourseList from "@/components/group/teacher/course-list";

const Page = async ({ params }: { params: { id: string } }) => {
  const teacher = (await prisma.teacher.findUnique({
    where: {
      id: params.id,
    },
    include: {
      user: true,
      images: true,
      courses: true,
    },
  }))!;
  if (!teacher) {
    throw new Error("Invalid Teacher ID");
  }
  return (
    <Stack>
      <Box
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${teacher.images[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
        className="flex justify-center items-center"
      >
        <Stack spacing={2} className="flex justify-center items-center">
          <Typography variant="h6" className="text-center m-10">
            Contact me
          </Typography>
          <Stack spacing={1} direction="row">
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Stack>
        </Stack>
      </Box>
      <About description={teacher.description} />
      <FeaturedVideos url={teacher.demoLink} />
      <CourseList courses={teacher.courses} />
    </Stack>
  );
};
export default Page;
