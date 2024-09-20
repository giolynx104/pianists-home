import {
  getTeacherByUserId,
  getUserBySessionAndRedirectIfNoSessionExist,
} from "@/lib/actions";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";
import Form from "./_components/Form";

const Page = async () => {
  const user = await getUserBySessionAndRedirectIfNoSessionExist();
  const teacher = await getTeacherByUserId(user.id);
  if (!teacher) {
    throw new Error(
      "You ain't a teacher, please register yourself as teacher first"
    );
  }
  return (
    <Box className="flex justify-center pt-10">
      <Card className="flex flex-col items-center rounded-3xl w-3/4 p-10">
        <CardHeader
          title="Create a New Course"
          avatar={<GiGrandPiano />}
          sx={{
            fontSize: "2.5rem",
            "& .MuiCardHeader-title": {
              fontSize: "2.5rem",
            },
          }}
        />
        <CardContent className="w-full">
          <Form teacherId={teacher.id} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Page;
