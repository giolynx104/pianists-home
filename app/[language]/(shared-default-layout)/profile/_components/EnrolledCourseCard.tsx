import {
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
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { removeEnrollment } from "./actions";
import { Course } from "@prisma/client";
import { TiThMenu } from "react-icons/ti";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `2px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

const EnrolledCourseCard = ({ course }: { course: Course }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleUnenrollClick = () => {
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleUnenrollConfirm = async () => {
    await removeEnrollment(course);
    setDialogOpen(false);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Grid size={12}>
        <StyledBox>
          <Stack spacing={1}>
            <Typography variant="h6" color="primary">
              {course.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <IoPricetagsOutline color="#1976d2" />
              <Typography variant="body2" color="text.primary">
                {course.price}$
              </Typography>
            </Stack>
          </Stack>
          <IconButton
            aria-label="course options"
            aria-controls={isMenuOpen ? "course-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isMenuOpen ? "true" : undefined}
            onClick={handleMenuOpen}
          >
            <TiThMenu />
          </IconButton>
          <Menu
            id="course-menu"
            anchorEl={menuAnchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleUnenrollClick}>Unenroll</MenuItem>
            <MenuItem onClick={handleMenuClose}>Rate</MenuItem>
            <MenuItem onClick={handleMenuClose}>Share</MenuItem>
          </Menu>
        </StyledBox>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="unenroll-dialog-title"
        classes={{ paper: "rounded-3xl" }}
      >
        <DialogTitle id="unenroll-dialog-title" className="text-center">
          Unenroll
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} alignItems="center">
            <Typography variant="body1">
              Are you sure you want to unenroll from this course?
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={handleUnenrollConfirm}
                variant="outlined"
                color="error"
                className="normal-case rounded-xl"
              >
                Yes
              </Button>
              <Button
                onClick={handleDialogClose}
                variant="contained"
                className="normal-case rounded-xl"
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
