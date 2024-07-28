import CourseForm from "@/components/group/create-course/course-form";
import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";

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
