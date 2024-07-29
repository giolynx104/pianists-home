import { createTeacher } from "@/components/group/create-teacher/actions";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";

const Page = () => {
  return (
    <>
      <Card>
        <CardHeader title="Create Teacher" />
        <CardContent className="flex justify-center items-center">
          <form
            action={createTeacher}
            className="flex justify-center items-center"
          >
            <Stack spacing={2}>
              <TextField label="Description" name="description" required />
              <TextField label="Demo Link" name="demoLink" required />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Page;
