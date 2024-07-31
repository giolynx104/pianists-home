"use client";

import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";

const Form = ({ user }: { user: User }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(() => {})}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                {...register("name")}
                defaultValue={user.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                defaultValue={user.location ? user.location : ""}
                {...register("location")}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1} className="flex">
                <Button
                  variant="contained"
                  type="submit"
                  className="normal-case"
                >
                  Save
                </Button>
                <Button variant="outlined" className="normal-case">
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
