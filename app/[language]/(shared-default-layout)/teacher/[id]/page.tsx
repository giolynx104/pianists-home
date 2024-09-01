import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FeaturedVideos from "@/app/[language]/(shared-default-layout)/teacher/[id]/_components/featured-videos";
import About from "@/app/[language]/(shared-default-layout)/teacher/[id]/_components/about";
import CourseList from "@/app/[language]/(shared-default-layout)/teacher/[id]/_components/course-list";
import { getTeacher } from "@/app/[language]/(shared-default-layout)/teacher/[id]/_components/actions";
import Link from "next/link";

const Page = async ({ params }: { params: { id: string } }) => {
  const teacher = await getTeacher(params.id);

  if (!teacher) {
    throw new Error("Invalid Teacher ID");
  }

  return (
    <Stack>
      <Box
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${teacher.teacherImages[0].url})`,
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
            {teacher.user.facebookLink && (
              <Link href={teacher.user.facebookLink}>
                <FacebookIcon />
              </Link>
            )}
            {teacher.user.youtubeChannelLink && (
              <Link href={teacher.user.youtubeChannelLink}>
                <YouTubeIcon />
              </Link>
            )}
            {teacher.user.instagramLink && (
              <Link href={teacher.user.instagramLink}>
                <InstagramIcon />
              </Link>
            )}
            {teacher.user.xLink && (
              <Link href={teacher.user.xLink}>
                <XIcon />
              </Link>
            )}
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
