import { signIn } from "@/auth";
import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server"; 
        await signIn(undefined, { redirectTo: "/" });
      }}
    >
      <Button
        variant="outlined"
        startIcon={<FaUserCircle />}
        type="submit"
        className="border-white text-white hover:border-white hover:bg-slate-600 normal-case"
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignInButton;
