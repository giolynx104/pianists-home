import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import prisma from "@/lib/db";

//TODO: Implement edit course function

const Page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const course = await prisma.course.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return (
    course && (
      <Container className="mt-10">
        <Stack spacing={2}>
          <Typography variant="h4">Edit course</Typography>
          <TextField
            label="Name"
            variant="outlined"
            defaultValue={course.name}
          />
          <TextField
            multiline
            label="Description"
            variant="outlined"
            defaultValue={course.description}
          />
          <TextField
            label="Price"
            variant="outlined"
            defaultValue={course.price}
            InputProps={{
              startAdornment: "$",
            }}
          />
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Save changes</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Stack>
      </Container>
    )
  );
};

export default Page;
