"use client";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Tab,
  TextField,
} from "@mui/material";
import { User } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TeacherIncludeAll } from "@/lib/types";
import TeacherInfoCard from "./teacher-info";
import UserInfo from "./user-info";

//TODO: Implement user location

const Form = ({
  user,
  teacher,
}: {
  user: User;
  teacher: TeacherIncludeAll | null;
}) => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab className="normal-case" label="Profile" value="1" />
          <Tab label="Teacher" value="2" className="normal-case" />
        </TabList>
        <TabPanel value="1">
          <UserInfo user={user} />
        </TabPanel>
        <TabPanel value="2">
          {!teacher ? (
            <Button variant="contained">Register as Teacher</Button>
          ) : (
            <TeacherInfoCard teacher={teacher} />
          )}
        </TabPanel>
      </TabContext>
    </>
  );
};

export default Form;
