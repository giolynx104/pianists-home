import { Box, Stack, Typography } from "@mui/material";
import { PiCalendarBlank } from "react-icons/pi";
const NoCourseCard = () => {
  return (
    <Stack
      spacing={2}
      className="flex justify-center items-center w-full h-full border-2 border-solid border-gray-500"
    >
      <PiCalendarBlank />
      <Typography>You don&apos;t have any public courses yet</Typography>
    </Stack>
  );
};

export default NoCourseCard;
