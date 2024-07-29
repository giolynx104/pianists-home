import { CiCirclePlus } from "react-icons/ci";
import { createTeacher } from "@/components/group/create-teacher/actions";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import SubmitButton from "@/components/group/create-teacher/submit-button";

const Page = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex text-center" title="Create Teacher" />
        <CardContent className="flex justify-center items-center">
          <form
            action={createTeacher}
            className="flex justify-center items-center"
          >
            <Stack spacing={2}>
              <TextField label="Description" name="description" required />
              <TextField label="Demo Link" name="demoLink" required />
              <Button
                variant="outlined"
                className="normal-case"
                startIcon={<CiCirclePlus />}
              >
                Add an image
              </Button>
              <SubmitButton />
            </Stack>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Page;
