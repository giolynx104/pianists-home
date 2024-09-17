import { Button, Stack } from "@mui/material";

export const IdentityButtonGroup = () => {
  return (
    <Stack direction="row" spacing={3} className="flex justify-center">
      <Button variant="contained" className="normal-case bg-black text-white">
        I&apos;m a Student
      </Button>
      <Button variant="contained" className="normal-case bg-white text-black">
        I&apos;m a Teacher
      </Button>
    </Stack>
  );
};
