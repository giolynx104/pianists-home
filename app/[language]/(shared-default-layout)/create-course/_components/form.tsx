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
  Typography,
  FormGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, Controller, FieldErrors } from "react-hook-form";
import { courseFormSchema, CourseFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { CiBadgeDollar } from "react-icons/ci";
import Dropzone from "react-dropzone";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getSignedUrlConfigured } from "@/app/[language]/(shared-default-layout)/create-teacher/_components/actions";
import { createCourse } from "./actions";
import { LatLng } from "leaflet";
import Map from "@/components/Map";

export const Form = ({ teacherId }: { teacherId: string }) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<CourseFormSchema>({ resolver: zodResolver(courseFormSchema) });

  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    setValue("teacherId", teacherId);
  }, [teacherId, setValue]);

  const handlePositionChange = (newPosition: LatLng) => {
    setValue("latitude", newPosition.lat);
    setValue("longitude", newPosition.lng);
  };

  const onSubmit = async (data: CourseFormSchema) => {
    const remoteUrls: string[] = [];
    try {
      for (const image of images) {
        const signedUrlResult = await getSignedUrlConfigured(image.type);
        const remoteUrl = signedUrlResult.success!.url;
        remoteUrls.push(remoteUrl);
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onError = (formErrors: FieldErrors<CourseFormSchema>) => {
    console.log("Form Errors:", formErrors);
  };

  return (
    <Stack spacing={2}>
      <form id="create-course-form" onSubmit={handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <FormLabel>Course Information</FormLabel>

          <TextField
            variant="filled"
            {...register("name")}
            label="Name"
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
            {...register("price", { valueAsNumber: true })}
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
              htmlInput: { step: "0.01" },
            }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch {...register("offline")} defaultChecked />}
              label="Offline"
            />
          </FormGroup>
          <Controller
            name="skillLevel"
            control={control}
            defaultValue="Beginner"
            render={({ field }) => (
              <FormControl
                variant="filled"
                error={!!errors.skillLevel}
                className="w-full"
              >
                <InputLabel>Skill Level</InputLabel>
                <Select {...field} label="Skill Level">
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <TextField
            {...register("address")}
            label="Address"
            variant="filled"
            className="w-full"
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            {...register("startDate", { valueAsDate: true })}
            label="Start Date"
            type="date"
            variant="filled"
            className="w-full"
            slotProps={{
              inputLabel: { shrink: true },
            }}
            error={!!errors.startDate}
            helperText={errors.startDate?.message}
          />
          <TextField
            {...register("durationInWeeks", { valueAsNumber: true })}
            label="Duration (in weeks)"
            type="number"
            variant="filled"
            className="w-full"
            error={!!errors.durationInWeeks}
            helperText={errors.durationInWeeks?.message}
          />
          <TextField
            {...register("maxStudents", { valueAsNumber: true })}
            label="Maximum Students"
            type="number"
            variant="filled"
            className="w-full"
            error={!!errors.maxStudents}
            helperText={errors.maxStudents?.message}
          />
          <FormLabel>Location</FormLabel>
          <Map onPositionChange={handlePositionChange} />
        </Stack>
      </form>

      {Object.keys(errors).length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="error">
            Please fix the following errors:
          </Typography>
          <ul>
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>
                <Typography variant="body2" color="error">
                  {field}: {error.message as string}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}

      <Stack
        spacing={2}
        direction="row"
        className="border border-[primary] flex justify-center items-center bg-gray-400 rounded-lg p-2"
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
                <Grid size={4} key={image.name} className="p-2 relative">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Grid>
              ))}
            <Grid size={4} {...getRootProps()} className="p-2">
              <Card
                className="border border-[secondary]"
                sx={{
                  minHeight: "20rem",
                }}
              >
                <CardContent
                  className="flex justify-center items-center hover:bg-gray-700"
                  sx={{
                    minHeight: "20rem",
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
          />
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
    </Stack>
  );
};