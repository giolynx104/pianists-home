import Form from "@/components/group/create-course/form";
import { Box, Card, CardContent, CardHeader, Container } from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";

const Page = () => {
  return (
    <Box className="w-full flex justify-center">
      <Card className="flex flex-col items-center">
        <CardHeader title="Create Course" avatar={<GiGrandPiano />} />
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Page;
