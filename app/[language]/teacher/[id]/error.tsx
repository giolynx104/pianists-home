"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box className="h-screen w-screen flex justify-center items-center">
      <Stack spacing={2}>
        <Typography variant="h4">{error.message}</Typography>
        <Button variant="outlined" onClick={() => reset()}>
          Try again
        </Button>
      </Stack>
    </Box>
  );
}
