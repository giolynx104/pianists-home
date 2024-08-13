import Form from "@/components/group/create-course/form";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";

const Page = () => {
  return (
    <Box className="w-full flex justify-center items-center pt-10">
      <Card className="flex flex-col items-center rounded-3xl w-3/4 p-10">
        <CardHeader
          title="Create Course"
          avatar={<GiGrandPiano />}
          sx={{
            fontSize: "2.5rem",
            "& .MuiCardHeader-title": {
              fontSize: "2.5rem",
            },
          }}
        />
        <CardContent className="w-full">
          <Form />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Page;
