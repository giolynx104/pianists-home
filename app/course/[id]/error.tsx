"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { MdError } from "react-icons/md";

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
    <Container className="h-screen flex justify-center items-center">
      <Stack
        spacing={2}
        className="h-screen flex justify-center items-center text-red-400"
      >
        <MdError />
        <Typography variant="body1" className="text-center">
          {error.message}
        </Typography>
        <Button variant="outlined" onClick={() => reset()}>
          Try again
        </Button>
      </Stack>
    </Container>
  );
}
