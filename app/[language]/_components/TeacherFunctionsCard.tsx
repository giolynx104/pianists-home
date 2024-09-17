import { Card, CardHeader, CardContent, Stack } from "@mui/material";
import { FaUserPlus, FaBookOpen, FaMapMarkerAlt, FaComments } from "react-icons/fa";
import { CardLine } from "./CardLine";

export const TeacherFunctionsCard = () => {
  return (
    <Card className="rounded-2xl">
      <CardHeader
        title="For Teachers"
        titleTypographyProps={{
          fontWeight: "700",
          color: "primary",
        }}
      />
      <CardContent>
        <Stack spacing={2}>
          <CardLine icon={<FaUserPlus />} text="Register as a teacher" />
          <CardLine icon={<FaBookOpen />} text="Design and publish your courses" />
          <CardLine icon={<FaMapMarkerAlt />} text="Manage course locations" />
          <CardLine icon={<FaComments />} text="Communicate with your students" />
        </Stack>
      </CardContent>
    </Card>
  );
};
