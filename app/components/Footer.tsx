import {
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { GiGrandPiano } from "react-icons/gi";

export default function Footer() {
  return (
    <Stack className="flex items-center justify-center">
      <List className="flex flex-row p-0">
        <ListItemButton>
          <Typography variant="body2">Term</Typography>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body2">Privacy</Typography>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body2">Security</Typography>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body2">Status</Typography>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body2">Docs</Typography>
        </ListItemButton>
        <ListItemButton>
          <Typography variant="body2">Contacts</Typography>
        </ListItemButton>
      </List>
      <Typography variant="body2">
        Do not share my personal information
      </Typography>
      <Stack
        direction="row"
        className="mt-3 flex justify-center items-center"
        spacing={1}
      >
        <GiGrandPiano />
        <Typography>&copy; 2024 GiaoLe, Inc.</Typography>
      </Stack>
    </Stack>
  );
}
