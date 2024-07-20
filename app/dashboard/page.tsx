import Header from "@/components/dashboard/header";
import Main from "@/components/dashboard/main";
import UserAvatar from "@/components/dashboard/user-avatar";
import { Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Stack spacing={10}>
      <Header><UserAvatar/></Header>
      <Main />
    </Stack>
  );
};

export default Dashboard;
