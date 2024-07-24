import { auth } from "@/auth";
import {
  Box,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

//TODO: Fix profile image having low quality from Google

const Page = async () => {
  const sesion = await auth();
  const user = sesion?.user;

  return (
    <Box className="flex justify-center w-screen">
      <Card className="w-1/2 flex justify-center relative">
        <Box className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 z-0" />
        <Stack spacing={1} className="w-1/2 flex flex-column items-center bg-inherit relative z-10">
          <Typography variant="h5">Profile</Typography>
          <Image
            src={user?.image || ""}
            alt="User avatar"
            width={200}
            height={200}
            className="rounded-full overflow-hidden"
          />
          <Typography variant="h6">{user?.name}</Typography>
          <Typography variant="subtitle1">{user?.email}</Typography>
        </Stack>
      </Card>
    </Box>
  );
};

export default Page;
