import Header from "@/components/dashboard/header";
import UserAvatar from "@/components/dashboard/user-avatar";
import { Stack } from "@mui/material";

//TODO: Fix hydration issue

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack direction="column" spacing={10}>
      <Header>
        <UserAvatar />
      </Header>
      {children}
    </Stack>
  );
};

export default Layout;
