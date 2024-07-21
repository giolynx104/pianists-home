import UserAvatar from "@/components/dashboard/user-avatar";
import Header from "@/components/dashboard/header";
import { Box, Stack } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack direction="column">
      <Box className="mb-20">
        <Header>
          <UserAvatar />
        </Header>
      </Box>
      {children}
    </Stack>
  );
};

export default Layout;
