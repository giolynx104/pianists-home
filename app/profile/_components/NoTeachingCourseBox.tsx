import { Stack, Typography } from "@mui/material";
import { PiCalendarBlank } from "react-icons/pi";
const NoTeachingCourseBox = () => {
  return (
    <Stack
      spacing={2}
      className="flex justify-center items-center p-10 border-2 border-dashed border-gray-400"
    >
      <PiCalendarBlank />
      <Typography>You don&apos;t have any public courses yet</Typography>
    </Stack>
  );
};

export default NoTeachingCourseBox;
