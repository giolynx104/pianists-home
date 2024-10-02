"use client";

import { LanguageContext } from "@/app/i18n/LanguageContext";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Language as LanguageIcon } from "@mui/icons-material";
import { useTranslation } from "@/app/i18n/client";

export const LanguageSelector = () => {
  const language = useContext(LanguageContext);
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation(language, "language-selector");

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="language-select-label">{t("language")}</InputLabel>
      <Select
        labelId="language-select-label"
        value={language}
        onChange={(e) => {
          router.push(pathname.replace(`${language}`, e.target.value));
        }}
        label="Language"
        startAdornment={<LanguageIcon sx={{ mr: 1 }} />}
        sx={{
          minWidth: 120,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
          },
          "& .MuiSelect-select": {
            paddingRight: "32px", // Ensure there's enough space for the dropdown icon
          },
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="vi">Tiếng Việt</MenuItem>
      </Select>
    </FormControl>
  );
};
