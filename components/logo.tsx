import { GiGrandPiano } from "react-icons/gi";
import { Box, Stack, Typography } from "@mui/material";

//TODO: Add redirection to home page for the logo

const Logo = () => {
  return (
    <Stack spacing={1} direction="row" className="flex items-center">
      <GiGrandPiano className="items-center" />
      <Typography variant="subtitle1">Home of Pianists</Typography>
    </Stack>
  );
};

export default Logo;
