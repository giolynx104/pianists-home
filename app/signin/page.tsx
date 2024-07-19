import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import icon from "../favicon.ico";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import pianoImage from "/public/login-background.jpg";
import { SignIn } from "@/components/signin/sign-in";
import SignInWithGitHubButton from "@/components/signin/sign-in-with-github";
export default function LoginPage() {
  return (
    <Container className="flex flex-row justify-center items-center h-screen">
      <Card className="rounded-3xl flex flex-row justify-center items-center">
        <CardContent className="flex flex-col p-12">
          <Stack spacing={4}>
            <Stack
              spacing={1}
              direction="row"
              className="flex flex-row justify-center items-center"
            >
              <Image src={icon} alt="icon" width={20} />
              <Typography variant="h6" className="text-center">
                Home of Pianists
              </Typography>
            </Stack>
            <Typography variant="h3" className="text-center">
              Welcome Back!
            </Typography>
            <SignInWithGitHubButton />
            <Divider variant="middle">or</Divider>
            <Typography variant="subtitle2" className="text-center">
              Please enter your details
            </Typography>
            <TextField
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained">Sign In</Button>
          </Stack>
        </CardContent>
        <CardMedia>
          <Image
            src={pianoImage}
            alt="background"
            objectFit="contain"
            width={500}
          />
        </CardMedia>
      </Card>
    </Container>
  );
}
