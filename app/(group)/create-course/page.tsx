import {
  Card,
  CardContent,
  CardHeader,
  Container,
} from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";
import CourseForm from "./course-form";
const Page = () => {
  return (
    <Container>
      <Card className="flex flex-col items-center">
        <CardHeader title="Create Course" avatar={<GiGrandPiano />} />
        <CardContent>
          <CourseForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Page;
