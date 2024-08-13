"use client";

import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import { teacherFormSchema, TeacherFormSchema, TeacherIncludeAll } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const TeacherInfoCard = ({ teacher }: { teacher: TeacherIncludeAll }) => {
  const { register, handleSubmit } = useForm<TeacherFormSchema>({ resolver: zodResolver(teacherFormSchema) });
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit((data) => console.log(data))}></form>
        <Stack spacing={2}>
          <TextField
            multiline
            rows={5}
            defaultValue={teacher.description}
            label="Description"
            variant="filled"
            {...register("description")}
          />
          <TextField
            defaultValue={teacher.demoLink}
            label="Location"
            variant="filled"
            {...register("demoLink")}
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
