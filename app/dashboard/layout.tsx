import UserAvatar from "@/components/dashboard/user-avatar";
import Header from "@/components/dashboard/header";
import { Box, Stack } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack direction="column">
      <Header>
        <UserAvatar />
      </Header>
      {children}
    </Stack>
  );
};

export default Layout;
