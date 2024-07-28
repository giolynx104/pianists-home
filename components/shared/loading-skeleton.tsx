import { Box, CircularProgress } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Box className="flex w-full h-screen items-center justify-center">
      <CircularProgress />
    </Box>
  );
};

export default LoadingSkeleton;
