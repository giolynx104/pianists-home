import OAuthSignInButton from "./oauth-button";
import { FcGoogle } from "react-icons/fc";

export default function SignInWithGoogleButton() {
  return (
    <OAuthSignInButton
      provider="google"
      startIcon={<FcGoogle />}
      textContent="Continue with Google"
    />
  );
}
