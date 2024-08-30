"use client";

import { Box, Stack, Typography } from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Box
      color="inherit"
      onClick={() => {
        router.push("/home");
      }}
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Stack
        spacing={1}
        direction="row"
        className="flex items-center flex-grow"
      >
        <GiGrandPiano className="items-center" />
        <Typography variant="subtitle1">Home of Pianists</Typography>
      </Stack>
    </Box>
  );
};

export default Logo;
