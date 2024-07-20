import OAuthSignInButton from "./oauth-button";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignInWithGoogleButton() {
  return (
    <OAuthSignInButton
      provider="google"
      startIcon={<GoogleIcon />}
      textContent="Continue with Google"
    />
  );
}
