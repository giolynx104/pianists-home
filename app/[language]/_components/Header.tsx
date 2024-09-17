"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/signin");
  };

  return (
    <Box className="flex justify-between py-10">
      <Typography variant="h4" className="text-blue-600 font-bold">Home of Pianists</Typography>
      <Stack direction="row" spacing={2}>
        <Button 
          variant="contained" 
          className="normal-case text-black bg-white"
          onClick={handleLogin}
        >
          Log in
        </Button>
        <Button variant="contained" className="normal-case text-white bg-black">
          Sign up
        </Button>
      </Stack>
    </Box>
  );
};
