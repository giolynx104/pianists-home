"use client";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Course } from "@prisma/client";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteCourse } from "./actions";
import { IoPricetagsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import OfflineStatus from "./offline-status";
import OnlineStatus from "./online-status";

//TODO: Improving card design

const CourseCard = ({ course }: { course: Course }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  return (
    <>
      <Grid item xs={12}>
        <Box className="justify-between flex items-center border-gray-400 border-solid border-2 m-2 p-4">
          <Stack spacing={2}>
            <Typography variant="h5" className="font-bold text-blue-500">
              {course.name}
            </Typography>
            {course.offline ? <OfflineStatus /> : <OnlineStatus />}
            <Typography variant="body1" className="text-[#8d96a0]">
              {course.description}
            </Typography>
            <Stack direction="row" spacing={1} className="flex items-center">
              <IoPricetagsOutline />
              <Typography variant="body1">{course.price}$</Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Tooltip title="Edit">
              <IconButton
                onClick={() => {
                  router.push(`/edit-course/${course.id}`);
                }}
              >
                <CiEdit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  setOpen(true);
                  setSelectedCourseId(course.id);
                }}
              >
                <MdDelete />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Grid>
      <Dialog
        open={open}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "1.5rem",
          },
        }}
      >
        <DialogTitle className="text-center">Delete Course</DialogTitle>
        <DialogContent className="flex justify-center">
          <Stack spacing={2}>
            <Typography variant="body1">
              Are you sure you want to delete this course?
            </Typography>
            <Stack direction="row" className="flex justify-center" spacing={2}>
              <Button
                onClick={() => {
                  deleteCourse(selectedCourseId);
                }}
                variant="outlined"
                className="text-red-500 border-red-500 normal-case hover:border-red-800 hover:bg-red-800"
              >
                Yes
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                variant="contained"
                className="normal-case"
              >
                No
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CourseCard;
