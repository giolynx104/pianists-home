import UserAvatar from "@/components/group/dashboard/user-avatar";
import Footer from "@/components/group/footer";
import Header from "@/components/group/header";
import { Stack } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack spacing={2}>
      <Header>
        <UserAvatar />
      </Header>
      {children}
      <Footer />
    </Stack>
  );
}
