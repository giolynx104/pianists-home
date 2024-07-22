import { auth } from "@/auth";
import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Page = async () => {
  const sesion = await auth();
  const user = sesion?.user;

  return (
    <Container className="w-3/4 pt-10">
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Stack spacing={3}>
            <Typography variant="h5">Public profile</Typography>
            <Divider variant="middle" />
            <TextField
              fullWidth
              label="Name"
              variant="filled"
              value={user?.name}
            />
            <TextField
              fullWidth
              label="Email"
              variant="filled"
              value={user?.email}
            />
          </Stack>
        </Grid>
        <Grid item xs={3} className="flex justify-center items-center">
          <Stack spacing={2} className="flex justify-center items-center">
            <Typography variant="subtitle1">Profile picture</Typography>
            {user?.image ? (
              <Box className="rounded-full overflow-hidden">
                <Image
                  src={user?.image}
                  alt="Profile picture"
                  width={200}
                  height={200}
                />
              </Box>
            ) : (
              <AccountCircle />
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
