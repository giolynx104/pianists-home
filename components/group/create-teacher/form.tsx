"use client";

import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { createTeacher } from "./actions";
import SubmitButton from "./submit-button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useState } from "react";
import { User } from "next-auth";
import Image from "next/image";

const Form = ({ user }: { user: User }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else {
      setFileUrl(null);
    }
    setFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // setLoading(true);
    // try {
    //   let fileId: number | undefined = undefined;
    //   if (file) {
    //     setStatusMessage("Uploading...");
    //     fileId = await handleFileUpload(file);
    //   }
    //   setStatusMessage("Posting post...");
    //   await createPost({
    //     content,
    //     fileId: fileId,
    //   });
    //   setStatusMessage("Post Successful");
    // } catch (error) {
    //   console.error(error);
    //   setStatusMessage("Post failed");
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <Card>
      <CardHeader className="flex text-center" title="Create Teacher" />
      <CardContent className="flex justify-center items-center ">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center"
        >
          <Stack className="flex justify-normal items-center" spacing={2}>
            <TextField
              multiline
              label="Description"
              name="description"
              required
              className="w-full"
            />
            <TextField
              className="w-full"
              label="Demo Link"
              name="demoLink"
              required
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
                name="file"
                accept="images/*"
                onChange={handleChange}
              />
            </Button>
            {fileUrl && file && (
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
