"use client";

import {
  Container,
  Stack,
  TextField,
  Button,
  InputAdornment,
  CardHeader,
  CardContent,
  Card,
  Switch,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { courseFormSchema, CourseFormSchema } from "@/lib/types";
import { Course } from "@prisma/client";
import { useRouter } from "next/navigation";
import { updateCourse } from "./actions";

export const EditCourseForm = ({ course }: { course: Course }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormSchema>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      name: course.name,
      description: course.description!,
      price: course.price,
    },
  });

  const router = useRouter();

  return (
    <Container className="mt-10">
      <Card>
        <CardHeader title="Edit course" />
        <CardContent>
          <form
            onSubmit={handleSubmit(async (data) => {
              await updateCourse(data, course.id);
              router.push("/profile");
            })}
          >
            <Stack spacing={2}>
              <TextField
                {...register("name")}
                label="Name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                {...register("description")}
                label="Description"
                variant="outlined"
                multiline
                minRows={10}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <TextField
                {...register("price")}
                label="Price"
                variant="outlined"
                type="number"
                error={!!errors.price}
                helperText={errors.price?.message}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  },
                }}
              />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>Offline</Typography>
                <Switch
                  {...register("offline")}
                  checked={Boolean(course.offline)}
                />
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" type="submit">
                Save changes
              </Button>
              <Button variant="outlined" onClick={() => router.back()}>
                Cancel
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};
