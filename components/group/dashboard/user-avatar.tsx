"use client";

import { List, ListItem, Divider, Drawer, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { signOutAction } from "../sign-out-action";

export default function UserAvatar({ userAvatar }: { userAvatar: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const DrawerList = (
    <List>
      <ListItem>
        <Button
          onClick={() => {
            router.push("/profile");
          }}
          type="submit"
          className="w-full"
          startIcon={<CgProfile />}
        >
          Your Profile
        </Button>
      </ListItem>
      <Divider variant="middle" />
      <ListItem>
        <form action={signOutAction} className="w-full">
          <Button type="submit" startIcon={<FaSignOutAlt />} className="w-full">
            Sign out
          </Button>
        </form>
      </ListItem>
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
          width: "22",
          "& .MuiDrawer-paper": { width: "22%", borderRadius: "1rem" },
        }}
      >
        {DrawerList}
      </Drawer>
    </>
  );
}
