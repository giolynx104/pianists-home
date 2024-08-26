import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { handleSignIn } from "./actions";

const SignInButton = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<FaUserCircle />}
      type="submit"
      className="border-white text-white hover:border-white hover:bg-slate-600 normal-case"
      color="inherit"
      sx={{
        textTransform: "none",
      }}
      onClick={() => handleSignIn()}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
