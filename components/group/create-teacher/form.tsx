"use client";

import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { createTeacher, getSignedUrlConfigured } from "./actions";
import SubmitButton from "./submit-button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Teacher } from "@prisma/client";
import { useRouter } from "next/navigation";
import { teacherFormSchema, TeacherFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
const Form = () => {
  const router = useRouter();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
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
        <CardContent className="flex justify-center items-center ">
          <form
            onSubmit={handleSubmit(async (data) => {
              console.log(data);
              if (file) {
                const signedUrlResult = await getSignedUrlConfigured(file.type);
                const remoteUrl = signedUrlResult.success!.url;
                await fetch(remoteUrl, {
                  method: "PUT",
                  body: file,
                  headers: {
                    "Content-Type": file.type,
                  },
                });
                await createTeacher(data, remoteUrl);
                router.push("/profile");
              }
            })}
            className="flex justify-center items-center w-full"
          >
            <Stack spacing={2} className="w-full">
              <TextField
                multiline
                rows={5}
                label="Description"
                className="w-full"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <TextField
                className="w-full"
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
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
                className="w-full normal-case"
              >
                Upload Image
                <input
                  hidden
                  type="file"
                  accept="images/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFile(file);
                      const url = URL.createObjectURL(file);
                      setFileUrl(url);
                    } else {
                      setFileUrl(null);
                    }
                  }}
                />
              </Button>
              {file && fileUrl && (
                <Image
                  src={fileUrl}
                  alt="Selected file"
                  width={300}
                  height={300}
                />
              )}
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
