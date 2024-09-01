"use client";

import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const NavigatingButton = ({ text, link }: { text: string; link: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const language = pathname.split("/")[1];
  const newLink = `/${language}${link}`;

  return (
    <Button
      color="inherit"
      className="normal-case text-base"
      onClick={() => {
        router.push(newLink);
      }}
    >
      {text}
    </Button>
  );
};

export default NavigatingButton;
