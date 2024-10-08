import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const DrawerListItem = ({
  setOpen,
  icon,
  text,
  onClick,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}) => {
  return (
    <ListItem>
      <ListItemButton
        component="button"
        className="w-full normal-case text-base"
        onClick={() => {
          onClick();
          setOpen(false);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};