import { Container, Typography } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Container className="flex h-screen items-center justify-center">
      <Typography>Loading...</Typography>
    </Container>
  );
};

export default LoadingSkeleton;