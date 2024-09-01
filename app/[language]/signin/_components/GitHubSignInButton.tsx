import { SignInOptionButton } from "./SignInOptionButton";

export const GitHubSignInButton = ({ language }: { language: string }) => {
  return (
    <SignInOptionButton
      text="sign-in-with-github"
      language={language}
      provider="github"
    />
  );
};
