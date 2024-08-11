"use client";

import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Box,
  CircularProgress,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { createTeacher, getSignedUrlConfigured } from "./actions";
import SubmitButton from "./submit-button";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { teacherFormSchema, TeacherFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Dropzone from "react-dropzone";
import { CiCirclePlus } from "react-icons/ci";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Form = () => {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<TeacherFormSchema>({ resolver: zodResolver(teacherFormSchema) });
  return (
    <Box className="w-full flex justify-center items-center">
      <Card className="w-3/4 m-10 rounded-3xl">
        <CardHeader
          className="flex text-center"
          title="Enter your infomation"
        />
        <CardContent className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(async (data) => {
              let remoteUrls: string[] = [];
              for (const image of images) {
                const signedUrlResult = await getSignedUrlConfigured(
                  image.type
                );
                const remoteUrl = signedUrlResult.success!.url;
                remoteUrls = [...remoteUrls, remoteUrl];
                await fetch(remoteUrl, {
                  method: "PUT",
                  body: image,
                  headers: {
                    "Content-Type": image.type,
                  },
                });
              }
              await createTeacher(data, remoteUrls);
              router.push("/profile");
            })}
            className="flex justify-center items-center w-full"
          >
            <Stack spacing={2} className="w-full">
              <TextField
                required
                multiline
                rows={5}
                label="Description"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <TextField
                required
                label="Demo Link"
                {...register("demoLink", {
                  required: {
                    value: true,
                    message: "Demo link is required",
                  },
                })}
                error={!!errors.demoLink}
                helperText={errors.demoLink?.message}
              />
              <TextField
                label="Facebook"
                {...register("facebookLink")}
                error={!!errors.facebookLink}
                helperText={errors.facebookLink?.message}
              />
              <TextField
                label="Instagram"
                {...register("instagramLink")}
                error={!!errors.instagramLink}
                helperText={errors.instagramLink?.message}
              />
              <TextField
                label="Youtube"
                {...register("youtubeChannelLink")}
                error={!!errors.youtubeChannelLink}
                helperText={errors.youtubeChannelLink?.message}
              />
              <TextField
                label="X"
                {...register("xLink")}
                error={!!errors.xLink}
                helperText={errors.xLink?.message}
              />
              <Stack
                spacing={2}
                direction="row"
                className="border border-[primary] flex justify-center items-center"
              >
                <CloudUploadIcon />
                <Typography variant="subtitle2">Upload images</Typography>
              </Stack>
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setImages([...images, ...acceptedFiles]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <Grid container>
                    {images.length > 0 &&
                      images.map((image) => (
                        <Grid item xs={4} key={image.name} className="p-2">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={image.name}
                          />
                        </Grid>
                      ))}
                    <Grid item xs={4} {...getRootProps()} className="p-2">
                      <Card
                        className="border border-[secondary]"
                        sx={{
                          "&.MuiPaper-root": {
                            minHeight: "20rem",
                          },
                        }}
                      >
                        <CardContent
                          className="flex justify-center items-center hover:bg-gray-700"
                          sx={{
                            "&.MuiCardContent-root": {
                              minHeight: "20rem",
                            },
                          }}
                        >
                          <CiCirclePlus className="text-3xl" />
                          <input {...getInputProps()} hidden />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                )}
              </Dropzone>
              <Box className="flex justify-center">
                {isValid && (isSubmitting || isSubmitted) ? (
                  <CircularProgress />
                ) : (
                  <SubmitButton />
                )}
              </Box>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Form;
