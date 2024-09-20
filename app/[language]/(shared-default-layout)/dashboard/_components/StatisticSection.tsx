import { Card, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { School, CheckCircle, AccessTime, EmojiEvents } from "@mui/icons-material";

export const StatisticSection = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={3}>
          <Card elevation={3} className="m-2 p-4 rounded-lg">
            <Box display="flex" alignItems="center" mb={2}>
              <School color="primary" fontSize="large" />
              <Typography variant="h6" color="primary" ml={1}>
                Enrolled Courses
              </Typography>
            </Box>
            <Typography variant="h4">5</Typography>
          </Card>
        </Grid>
        <Grid size={3}>
          <Card elevation={3} className="m-2 p-4 rounded-lg">
            <Box display="flex" alignItems="center" mb={2}>
              <CheckCircle color="primary" fontSize="large" />
              <Typography variant="h6" color="primary" ml={1}>
                Completed Courses
              </Typography>
            </Box>
            <Typography variant="h4">3</Typography>
          </Card>
        </Grid>
        <Grid size={3}>
          <Card elevation={3} className="m-2 p-4 rounded-lg">
            <Box display="flex" alignItems="center" mb={2}>
              <AccessTime color="primary" fontSize="large" />
              <Typography variant="h6" color="primary" ml={1}>
                Hours Studied
              </Typography>
            </Box>
            <Typography variant="h4">120</Typography>
          </Card>
        </Grid>
        <Grid size={3}>
          <Card elevation={3} className="m-2 p-4 rounded-lg">
            <Box display="flex" alignItems="center" mb={2}>
              <EmojiEvents color="primary" fontSize="large" />
              <Typography variant="h6" color="primary" ml={1}>
                Achievements
              </Typography>
            </Box>
            <Typography variant="h4">7</Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
