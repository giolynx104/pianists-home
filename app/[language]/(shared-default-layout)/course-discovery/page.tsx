"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Switch,
  FormControlLabel,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OnlineIcon from "@mui/icons-material/Laptop";
import OfflineIcon from "@mui/icons-material/School";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Grid from "@mui/material/Grid2";
import { courses } from "./_components/mock-data";
import { calculateDistance } from "@/lib/geoUtils";
import { Course } from "@prisma/client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {course.title}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          by {course.teacherId}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          {course.courseType === "online" ? (
            <OnlineIcon sx={{ mr: 1 }} />
          ) : (
            <OfflineIcon sx={{ mr: 1 }} />
          )}
          <Typography>
            {course.courseType === "online"
              ? "Online Course"
              : "Offline Course"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <LocationOnIcon sx={{ mr: 1 }} />
          <Typography>
            {course.courseType === "offline" ? course.address : "N/A"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <PeopleIcon sx={{ mr: 1 }} />
          <Typography>{course.maxStudents} max students</Typography>
        </Box>
        <Typography variant="body2">
          Skill Level: {course.skillLevel}
        </Typography>
      </Box>
      <Box sx={{ p: 2, backgroundColor: "#f5f5f5", mt: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">${course.price}</Typography>
          <Button variant="contained">Enroll Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseType, setCourseType] = useState("all");
  const [skillLevel, setSkillLevel] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [showNearbyOnly, setShowNearbyOnly] = useState(false);
  const [maxDistance, setMaxDistance] = useState(10);
  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(
    null
  );
  const [page, setPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    if (showNearbyOnly) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setUserLocation(null);
        }
      );
    }
  }, [showNearbyOnly]);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (courseType === "all" || course.courseType === courseType) &&
      (skillLevel === "all" || course.skillLevel === skillLevel) &&
      course.price >= priceRange[0] &&
      course.price <= priceRange[1] &&
      (!showNearbyOnly ||
        (course.courseType === "offline" &&
          userLocation &&
          Array.isArray(userLocation) &&
          course.latitude !== undefined &&
          course.longitude !== undefined &&
          calculateDistance(
            userLocation[0],
            userLocation[1],
            course.latitude,
            course.longitude
          ) <= maxDistance))
  );

  const pageCount = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (page - 1) * coursesPerPage,
    page * coursesPerPage
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Explore Piano Courses
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="contained" startIcon={<SearchIcon />}>
            Search
          </Button>
        </Box>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel id="course-type-label">Course Type</InputLabel>
              <Select
                labelId="course-type-label"
                value={courseType}
                label="Course Type"
                onChange={(e) => setCourseType(e.target.value)}
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="offline">Offline</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel id="skill-level-label">Skill Level</InputLabel>
              <Select
                labelId="skill-level-label"
                value={skillLevel}
                label="Skill Level"
                onChange={(e) => setSkillLevel(e.target.value)}
              >
                <MenuItem value="all">All Levels</MenuItem>
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={150}
              step={10}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="caption">${priceRange[0]}</Typography>
              <Typography variant="caption">${priceRange[1]}</Typography>
            </Box>
          </Grid>
        </Grid>

        <FormControlLabel
          control={
            <Switch
              checked={showNearbyOnly}
              onChange={(e) => setShowNearbyOnly(e.target.checked)}
            />
          }
          label="Show nearby offline courses only"
        />

        {showNearbyOnly && (
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid size={6}>
              <Typography gutterBottom>Maximum Distance (miles)</Typography>
              <Slider
                value={maxDistance}
                onChange={(_, newValue) => setMaxDistance(newValue as number)}
                valueLabelDisplay="auto"
                min={1}
                max={50}
                step={1}
              />
              <Typography variant="caption">{maxDistance} miles</Typography>
            </Grid>
          </Grid>
        )}
      </Box>

      {showNearbyOnly && userLocation && (
        <Box sx={{ height: "400px", mb: 4 }}>
          <MapContainer
            center={userLocation}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredCourses.map(
              (course) =>
                course.latitude &&
                course.longitude && (
                  <Marker
                    key={course.id}
                    position={[course.latitude, course.longitude]}
                  >
                    <Popup>
                      <Typography variant="subtitle1">
                        {course.title}
                      </Typography>
                      <Typography variant="body2">{course.address}</Typography>
                    </Popup>
                  </Marker>
                )
            )}
          </MapContainer>
        </Box>
      )}

      <Grid container spacing={3}>
        {paginatedCourses.map((course) => (
          <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={pageCount}
          color="primary"
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default Page;
