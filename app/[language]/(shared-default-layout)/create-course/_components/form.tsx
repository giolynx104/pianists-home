"use client";

import {
  Stack,
  FormLabel,
  TextField,
  InputAdornment,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";
import { courseFormSchema, CourseFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { CiBadgeDollar } from "react-icons/ci";
import Dropzone from "react-dropzone";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getSignedUrlConfigured } from "@/app/[language]/(shared-default-layout)/create-teacher/_components/actions";
import { createCourse } from "./actions";

const Form = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<CourseFormSchema>({ resolver: zodResolver(courseFormSchema) });

  const [images, setImages] = useState<File[]>([]);

  return (
    (<Stack spacing={2}>
      <form
        id="create-course-form"
        onSubmit={handleSubmit(async (data) => {
          let remoteUrls: string[] = [];
          for (const image of images) {
            const signedUrlResult = await getSignedUrlConfigured(image.type);
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
          await createCourse(data, remoteUrls);
          router.push("/profile");
        })}
      >
        <Stack spacing={2}>
          <FormLabel>Course Information</FormLabel>
          <TextField
            variant="filled"
            {...register("name")}
            label="Course name"
            className="w-full"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Description"
            variant="filled"
            {...register("description")}
            multiline
            rows={4}
            className="w-full"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <TextField
            {...register("price")}
            label="Price"
            variant="filled"
            type="number"
            className="w-full"
            error={!!errors.price}
            helperText={errors.price?.message}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="start">
                    <CiBadgeDollar className="text-3xl" />
                  </InputAdornment>
                ),
              },

              htmlInput: { step: "0.01" }
            }} />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox {...register("offline")} defaultChecked />}
              label="Offline"
            />
          </FormGroup>
        </Stack>
      </form>
      <Stack
        spacing={2}
        direction="row"
        className="border border-[primary] flex justify-center items-center"
      >
        <CloudUploadIcon />
        <Typography variant="subtitle2">Upload images</Typography>
      </Stack>
      <Typography variant="subtitle2" className="text-gray-600">
        *Your first image will be used as thumbnail for the course.
      </Typography>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setImages([...images, ...acceptedFiles]);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <Grid container spacing={2}>
            {images.length > 0 &&
              images.map((image) => (
                <Grid item xs={4} key={image.name} className="p-2 relative">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    fill
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
          <LoadingButton
            endIcon={<SendIcon />}
            loading={isSubmitting || isSubmitted}
            loadingPosition="end"
            variant="contained"
          ></LoadingButton>
        ) : (
          <Button
            className="normal-case"
            variant="contained"
            type="submit"
            form="create-course-form"
          >
            Submit
          </Button>
        )}
      </Box>
    </Stack>)
  );
};

export default Form;
