import { signIn } from "@/auth";
import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(undefined, { redirectTo: "/dashboard" });
      }}
    >
      <Button variant="outlined" startIcon={<FaUserCircle />} type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default SignInButton;
