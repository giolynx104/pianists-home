"use client";

import { List, Divider, Drawer } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/navigation";
import DrawerListItem from "./DrawerListItems";
import { FaListAlt } from "react-icons/fa";
import { signOutAction } from "../actions";

export default function UserAvatar({ userAvatar }: { userAvatar: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const DrawerList = (
    <List className="flex justify-start flex-col">
      <DrawerListItem
        setOpen={setOpen}
        icon={<CgProfile />}
        text="Your Profile"
        onClick={() => {
          router.push("/profile");
        }}
      />
      <Divider variant="middle" />
      <DrawerListItem
        setOpen={setOpen}
        icon={<FaListAlt />}
        text="Your Courses"
        onClick={() => {
          router.push("/profile");
        }}
      />
      <Divider variant="middle" />
      <DrawerListItem
        setOpen={setOpen}
        icon={<FiShoppingCart />}
        text="My Cart"
        onClick={() => {
          router.push("/cart");
        }}
      />
      <Divider variant="middle" />
      <DrawerListItem
        setOpen={setOpen}
        icon={<FaSignOutAlt />}
        text="Sign Out"
        onClick={async () => {
          await signOutAction();
        }}
      />
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
