"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import { updateUserInfo } from "./actions";
import { useRouter } from "next/navigation";

const UserInfo = ({ user }: { user: User }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const router = useRouter();

  return (
    <Box className="w-full justify-center flex">
      <Card className="rounded-3xl w-3/4">
        <CardHeader title="Profile" className="text-center" />
        <CardContent>
          <form
            onSubmit={handleSubmit(async (data) => {
              await updateUserInfo(user.id, data);
              router.push("/profile");
            })}
          >
            <Stack spacing={2}>
              <TextField
                label="Name"
                {...register("name")}
                defaultValue={user.name}
                required
              />
              <TextField
                label="Facebook"
                defaultValue={user.facebookLink ? user.facebookLink : ""}
                {...register("facebookLink")}
                InputProps={{
                  startAdornment: <FacebookIcon />,
                }}
              />
              <TextField
                label="Instagram"
                defaultValue={user.instagramLink ? user.instagramLink : ""}
                {...register("instagramLink")}
                InputProps={{
                  startAdornment: <FacebookIcon />,
                }}
              />
              <TextField
                label="Facebook"
                defaultValue={user.xLink ? user.xLink : ""}
                {...register("xLink")}
                InputProps={{
                  startAdornment: <FacebookIcon />,
                }}
              />
              <TextField
                label="Youtube"
                defaultValue={
                  user.youtubeChannelLink ? user.youtubeChannelLink : ""
                }
                {...register("youtubeChannelLink")}
                InputProps={{
                  startAdornment: <FacebookIcon />,
                }}
              />
              <TextField
                label="Location"
                defaultValue={user.location ? user.location : ""}
                {...register("location")}
              />
              <Stack
                direction="row"
                spacing={2}
                className="flex justify-center"
              >
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
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserInfo;
