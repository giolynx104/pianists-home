import { Button } from "@mui/material";
import Link from "next/link";

export const CreateTeacherAccountButton = () => {
  return (
    <Link href="/create-teacher" className="w-full">
      <Button className="normal-case w-full" variant="outlined" color="primary">
        Register as Teacher
      </Button>
    </Link>
  );
};