import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import router from "next/router";
import { Dispatch, SetStateAction } from "react";

const DrawerListItem = ({
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

export default DrawerListItem;
