import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const NavigationButton = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  const router = useRouter();

  return (
    <Button
      color="inherit"
      className="normal-case text-base"
      onClick={() => {
        router.push(link);
      }}
    >
      {text}
    </Button>
  );
};

export default NavigationButton;