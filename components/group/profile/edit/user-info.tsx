"use client";

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

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { userFormSchema, UserFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

const UserInfo = ({ user }: { user: User }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserFormSchema>({ resolver: zodResolver(userFormSchema) });

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
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Facebook"
                defaultValue={user.facebookLink}
                {...register("facebookLink")}
                InputProps={{
                  startAdornment: <FacebookIcon />,
                }}
                error={!!errors.facebookLink}
                helperText={errors.facebookLink?.message}
              />
              <TextField
                label="Instagram"
                defaultValue={user.instagramLink}
                {...register("instagramLink")}
                InputProps={{
                  startAdornment: <InstagramIcon />,
                }}
                error={!!errors.instagramLink}
                helperText={errors.instagramLink?.message}
              />
              <TextField
                label="X"
                defaultValue={user.xLink}
                {...register("xLink")}
                InputProps={{
                  startAdornment: <XIcon />,
                }}
                error={!!errors.xLink}
                helperText={errors.xLink?.message}
              />
              <TextField
                label="Youtube"
                defaultValue={
                  user.youtubeChannelLink
                }
                {...register("youtubeChannelLink")}
                InputProps={{
                  startAdornment: <YouTubeIcon />,
                }}
                error={!!errors.youtubeChannelLink}
                helperText={errors.youtubeChannelLink?.message}
              />
              <TextField
                label="Location"
                defaultValue={user.location}
                {...register("location")}
                error={!!errors.location}
                helperText={errors.location?.message}
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
