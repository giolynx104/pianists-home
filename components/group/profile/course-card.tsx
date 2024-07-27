"use client";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
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
//TODO: Improving card design

const CourseCard = ({ course }: { course: Course }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number>(-1);
  return (
    <>
      <Grid item xs={12} className=" border-gray-400 border-solid border-2 m-2">
        <Box className="justify-between flex items-start">
          <Stack spacing={2}>
            <Typography variant="h5" className="font-bold text-blue-500">
              {course.name}
            </Typography>
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
              <IconButton onClick={() => {
                router.push(`/course/${course.id}`);
              }}>
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
      <Dialog open={open}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Stack>
            <Button
              onClick={() => {
                deleteCourse(selectedCourseId);
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              No
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CourseCard;
