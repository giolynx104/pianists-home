import {
  Stack,
  FormLabel,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { createCourse } from "./actions";

//TODO: Using react-hook-form for this one

const Form = () => {
  return (
    <form action={createCourse}>
      <Stack spacing={2}>
        <FormLabel>Course Information</FormLabel>
        <TextField name="name" label="Course name" required />
        <TextField label="Description" name="description" multiline required />
        <TextField
          name="price"
          label="Price"
          required
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
        <Button className="normal-case" variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
