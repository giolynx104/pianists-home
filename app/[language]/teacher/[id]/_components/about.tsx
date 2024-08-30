import { Box, Stack, Typography } from "@mui/material";

const About = ({ description }: { description: string }) => {
  return (
    <Box className="bg-white text-black uppercase">
      <Stack spacing={2} className="flex items-center justify-center">
        <Typography variant="h4" className="uppercase p-10 pb-5">
          About me
        </Typography>
        <Typography
          paragraph
          variant="subtitle1"
          className="p-10 pt-5 normal-case"
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
