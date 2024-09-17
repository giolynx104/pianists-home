import {
  Card,
  CardHeader,
  CardContent,
  Stack,
} from "@mui/material";
import { FaUserPlus, FaSearch, FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { CardLine } from "./CardLine";

export const StudentFunctionsCard = () => {
  return (
    <Card className="rounded-2xl">
      <CardHeader
        title="For Students"
        titleTypographyProps={{ fontWeight: "700", color: "primary" }}
      />
      <CardContent>
        <Stack spacing={2}>
          <CardLine
            icon={<FaUserPlus />}
            text="Create a personalized profile"
          />
          <CardLine icon={<FaSearch />} text="Find the right teacher for you" />
          <CardLine
            icon={<FaBookOpen />}
            text="Browse online and offline piano courses"
          />
          <CardLine icon={<FaGraduationCap />} text="Enroll in courses seamlessly" />
        </Stack>
      </CardContent>
    </Card>
  );
};
