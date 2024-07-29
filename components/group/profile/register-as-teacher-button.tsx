import { Button } from "@mui/material";
import Link from "next/link";

const RegisterAsTeacherButton = () => {
  return (
    <Link href="/create-teacher">
      <Button className="normal-case" variant="contained" color="primary">
        Register as Teacher
      </Button>
    </Link>
  );
};

export default RegisterAsTeacherButton;
