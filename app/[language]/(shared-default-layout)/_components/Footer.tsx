import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box className="flex justify-center items-center bg-blue-600 mt-10">
      <Typography variant="body1" className="p-10">
        &copy; 2024 Home of Pianists. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

