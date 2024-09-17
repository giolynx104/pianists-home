import { Box, Button, Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box className="flex justify-between py-10">
      <Typography variant="h4" className="text-blue-600 font-bold">Home of Pianists</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" className="normal-case text-black bg-white">
          Log in
        </Button>
        <Button variant="contained" className="normal-case text-white bg-black">
          Sign up
        </Button>
      </Stack>
    </Box>
  );
};
