"use client";

import {
  List,
  ListItem,
  Divider,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { signOutAction } from "./actions";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function UserAvatar({ userAvatar }: { userAvatar: string }) {
  const [open, setOpen] = useState(false);
  const DrawerList = (
    <List className="flex justify-start flex-col">
      <ListItem>
        <Link href="/profile" className="w-full">
          <ListItemButton
            component="button"
            className="w-full normal-case text-base"
          >
            <ListItemIcon>
              <CgProfile />
            </ListItemIcon>
            <ListItemText primary="Your Profile" />
          </ListItemButton>
        </Link>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <Link href="/cart" className="w-full">
          <ListItemButton
            component="button"
            className="w-full normal-case text-base"
          >
            <ListItemIcon>
              <FiShoppingCart />
            </ListItemIcon>
            <ListItemText primary="My Cart" />
          </ListItemButton>
        </Link>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <ListItemButton
          component="button"
          onClick={async () => {
            await signOutAction();
          }}
          className="w-full normal-case text-base"
        >
          <ListItemIcon>
            <FaSignOutAlt />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </ListItem>
      <Divider variant="middle" />
    </List>
  );
  return (
    <>
      <button onClick={() => setOpen(true)}>
        {userAvatar !== "" ? (
          <Image
            src={userAvatar}
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <CiUser />
        )}
      </button>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: "20%",
          "& .MuiDrawer-paper": {
            width: "20%",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
