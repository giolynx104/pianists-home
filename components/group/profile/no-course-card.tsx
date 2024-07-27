import { Box, Stack, Typography } from "@mui/material";
import { PiCalendarBlank } from "react-icons/pi";
const NoCourseCard = () => {
  return (
    <Stack spacing={2}>
      <PiCalendarBlank />
      <Typography>You don&apos;t have any public courses yet</Typography>
    </Stack>
  );
};

export default NoCourseCard;