"use client";

import { MenuItem, Select } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSelector = ({ language }: { language: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      value={language}
      onChange={(e) => {
        router.push(pathname.replace(`${language}`, e.target.value));
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="vi">Tiếng Việt</MenuItem>
    </Select>
  );
};
