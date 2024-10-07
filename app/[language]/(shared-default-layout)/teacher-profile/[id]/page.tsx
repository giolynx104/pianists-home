import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Star,
  Mail,
  CalendarToday,
  LocationOn,
  AccessTime,
  Group,
  EmojiEvents,
} from "@mui/icons-material";
import { getTeacher } from "./_components/actions";
import { Course } from "@prisma/client";
import { TeacherWithCoursesAndReviews } from "@/lib/types";

const Page = async ({ params }: { params: { id: string } }) => {
  const teacher = await getTeacher(params.id) as TeacherWithCoursesAndReviews;

  if (!teacher) {
    throw new Error("Invalid Teacher ID");
  }

  const averageRating = teacher.reviews.length > 0
    ? teacher.reviews.reduce((sum, review) => sum + review.rating, 0) / teacher.reviews.length
    : 0;

  return (
    <Box className="container mx-auto py-8">
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box flex={1}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  src={teacher.teacherImages[0]?.url}
                  alt={teacher.user.name || ""}
                  sx={{ width: 80, height: 80 }}
                />
              }
              title={<Typography variant="h5">{teacher.user.name}</Typography>}
              subheader={
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn fontSize="small" />
                  <Typography variant="body2">
                    {teacher.user.location || "Location not specified"}
                  </Typography>
                </Stack>
              }
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {teacher.description}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <Star sx={{ color: "gold" }} />
                <Typography variant="body1" fontWeight="bold">
                  {averageRating.toFixed(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({teacher.reviews.length} reviews)
                </Typography>
              </Stack>
              <Button
                variant="contained"
                startIcon={<Mail />}
                fullWidth
                sx={{ mb: 1 }}
              >
                Contact Teacher
              </Button>
              <Button
                variant="outlined"
                startIcon={<CalendarToday />}
                fullWidth
              >
                Book a Lesson
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardHeader title="Achievements" />
            <CardContent>
              <Stack spacing={1}>
                {teacher.achievements?.map((achievement, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <EmojiEvents color="primary" fontSize="small" />
                    <Typography variant="body2">{achievement}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box flex={2}>
          <TeacherTabs teacher={teacher} />
        </Box>
      </Stack>
    </Box>
  );
};

const TeacherTabs = ({
  teacher,
}: {
  teacher: TeacherWithCoursesAndReviews;
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="teacher tabs">
          <Tab label="Courses" />
          <Tab label="Reviews" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack spacing={3}>
          {teacher.courses.map((course: Course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={3}>
          {teacher.reviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Stack>
      </TabPanel>
    </Box>
  );
};

const TabPanel = (props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const CourseCard = ({ course }: { course: Course }) => (
  <Card>
    <CardHeader
      title={course.title}
      subheader={
        <Typography
          variant="body2"
          sx={{
            display: "inline-block",
            px: 1,
            py: 0.5,
            borderRadius: 1,
            bgcolor: course.courseType === "online" ? "secondary.light" : "grey.200",
            color: course.courseType === "online" ? "secondary.main" : "text.primary",
          }}
        >
          {course.courseType === "online" ? "Online" : "In-person"}
        </Typography>
      }
    />
    <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <AccessTime fontSize="small" />
            <Typography variant="body2">{course.durationInWeeks} weeks</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Group fontSize="small" />
            <Typography variant="body2">{course.students} students</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">${course.price}</Typography>
          <Button variant="contained">Enroll Now</Button>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

const ReviewCard = ({ review }: { review: TeacherWithCoursesAndReviews['reviews'][0] }) => (
  <Card>
    <CardHeader
      title={review.author.name}
      action={
        <Stack direction="row">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              sx={{ color: i < review.rating ? "gold" : "grey.300" }}
            />
          ))}
        </Stack>
      }
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {review.comment}
      </Typography>
    </CardContent>
  </Card>
);

export default Page;
