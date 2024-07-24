import { GiGrandPiano } from "react-icons/gi";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/home">
      <Stack spacing={1} direction="row" className="flex items-center">
        <GiGrandPiano className="items-center" />
        <Typography variant="subtitle1">Home of Pianists</Typography>
      </Stack>
    </Link>
  );
};

export default Logo;
