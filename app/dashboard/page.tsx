import Header from "@/components/dashboard/header";
import Main from "@/components/dashboard/main";
import { Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Stack spacing={10}>
      <Header />
      <Main />
    </Stack>
  );
};

export default Dashboard;
