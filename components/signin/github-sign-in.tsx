import OAuthSignInButton from "./oauth-button";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SignInWithGithubButton() {
  return (
    <OAuthSignInButton
      provider="github"
      startIcon={<GitHubIcon />}
      textContent="Continue with GitHub"
    />
  );
}
