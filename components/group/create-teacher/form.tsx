"use client";

import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { createTeacher, getSignedUrlConfigured } from "./actions";
import SubmitButton from "./submit-button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Teacher } from "@prisma/client";

//TODO: File type when upload image

const Form = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit, setError } = useForm<Teacher>();
  return (
    <Card>
      <CardHeader className="flex text-center" title="Create Teacher" />
      <CardContent className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(async (data) => {
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
              createTeacher(data, remoteUrl);
            }
          })}
          className="flex justify-center items-center"
        >
          <Stack spacing={2} className="w-full">
            <TextField
              multiline
              label="Description"
              required
              className="w-full"
              {...register("description")}
            />
            <TextField
              className="w-full"
              label="Demo Link"
              {...register("demoLink", { required: true })}
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
            <SubmitButton />
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
