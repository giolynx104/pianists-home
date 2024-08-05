"use client";

import {
  Stack,
  FormLabel,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@mui/material";
import { createCourse } from "./actions";
import { useForm } from "react-hook-form";

//TODO: Add form validation

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => createCourse(data))}>
      <Stack spacing={2} className="flex justify-center items-center">
        <FormLabel>Course Information</FormLabel>
        <TextField
          {...register("name", { required: true, maxLength: 100 })}
          label="Course name"
          required
          className="w-full"
        />
        <TextField
          label="Description"
          {...register("description", { required: true, maxLength: 1000 })}
          multiline
          required
          className="w-full"
        />
        <TextField
          {...register("price", { required: true, pattern: /^\d+(?:\.\d{1,2})?$/ })}
          label="Price"
          required
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
        {isSubmitting || isSubmitted ? (
          <CircularProgress />
        ) : (
          <Button className="normal-case" variant="contained" type="submit">
            Submit
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default Form;
