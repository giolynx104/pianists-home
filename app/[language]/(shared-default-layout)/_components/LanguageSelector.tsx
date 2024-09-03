"use client";

import { LanguageContext } from "@/app/i18n/LanguageContext";
import { MenuItem, Select } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
export const LanguageSelector = () => {
  const language = useContext(LanguageContext);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      value={language}
      onChange={(e) => {
        router.push(pathname.replace(`${language}`, e.target.value));
      }}
      className="text-white"
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="vi">Tiếng Việt</MenuItem>
    </Select>
  );
};
