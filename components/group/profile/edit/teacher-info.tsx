import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { TeacherIncludeAll } from "@/lib/types";
const TeacherInfoCard = ({ teacher }: { teacher: TeacherIncludeAll }) => {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <TextField
            multiline
            rows={5}
            defaultValue={teacher.description}
            label="Description"
            variant="filled"
          />
          <TextField
            defaultValue={teacher.demoLink}
            label="Location"
            variant="filled"
          />
          <Stack className="flex justify-center" direction="row" spacing={2}>
            <Button variant="contained" type="submit" className="normal-case">
              Save
            </Button>
            <Button variant="outlined" className="normal-case">
              Cancel
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TeacherInfoCard;
