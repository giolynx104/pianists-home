"use client";

import {
  Stack,
  FormLabel,
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { createCourse } from "./actions";
import { useForm } from "react-hook-form";
import { courseFormSchema, CourseFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<CourseFormSchema>({ resolver: zodResolver(courseFormSchema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        createCourse(data);
      })}
    >
      <Stack spacing={2} className="flex ">
        <FormLabel>Course Information</FormLabel>
        <TextField
          {...register("name")}
          label="Course name"
          className="w-full"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Description"
          {...register("description")}
          multiline
          className="w-full"
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TextField
          {...register("price")}
          label="Price"
          type="number"
          inputProps={{ step: "0.01" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
          className="w-full"
          error={!!errors.price}
          helperText={errors.price?.message}
        />
        <Box className="flex justify-center">
          {isValid && (isSubmitting || isSubmitted) ? (
            <LoadingButton
              endIcon={<SendIcon />}
              loading={isSubmitting || isSubmitted}
              loadingPosition="end"
              variant="contained"
            ></LoadingButton>
          ) : (
            <Button className="normal-case" variant="contained" type="submit">
              Submit
            </Button>
          )}
        </Box>
      </Stack>
    </form>
  );
};

export default Form;
