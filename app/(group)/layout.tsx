import Footer from "@/components/group/footer";
import { Divider, Stack } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack spacing={2}>
      {children}
      <Divider variant="fullWidth" />
      <Footer />
    </Stack>
  );
}
