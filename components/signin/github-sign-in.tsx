import OAuthSignInButton from "./oauth-button";
import { FaGithub } from "react-icons/fa";

export default function SignInWithGithubButton() {
  return (
    <OAuthSignInButton
      provider="github"
      startIcon={<FaGithub />}
      textContent="Continue with GitHub"
    />
  );
}
