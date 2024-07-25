import UserAvatar from "@/components/group/dashboard/user-avatar";
import Footer from "@/components/group/footer";
import Header from "@/components/group/header";
import { Box, Stack } from "@mui/material";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header>
        <UserAvatar />
      </Header>
      {children}
    </Box>
  );
}
