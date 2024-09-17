import { Stack, Typography } from "@mui/material";

export const CardLine = ({
  icon,
  text,
}: {
  icon: JSX.Element;
  text: string;
}) => {
  return (
    <Stack direction="row" className="flex items-center" spacing={2}>
      {icon}
      <Typography variant="h6">{text}</Typography>
    </Stack>
  );
};
