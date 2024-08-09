import {
  Grid,
  Box,
  Stack,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import { useState } from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { deleteCourse } from "./actions";
import { Course } from "@prisma/client";
import { TiThMenu } from "react-icons/ti";
const EnrolledCourseCard = ({ course }: { course: Course }) => {
  const [open, setOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid item xs={12}>
        <Box className="justify-between flex items-center border-gray-400 border-solid border-2 m-2 p-4">
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
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(event) => {
              handleClick(event);
            }}
          >
            <TiThMenu />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Unenroll</MenuItem>
            <MenuItem onClick={handleClose}>Rate</MenuItem>
            <MenuItem onClick={handleClose}>Share</MenuItem>
          </Menu>
        </Box>
      </Grid>
      <Dialog className="rounded-3xl" open={open}>
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

export default EnrolledCourseCard;
