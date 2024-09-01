import { SignInOptionButton } from "./SignInOptionButton";

export const GoogleSignInButton = ({ language }: { language: string }) => {
  return (
    <SignInOptionButton
      text="sign-in-with-google"
      provider="google"
      language={language}
    />
  );
};
