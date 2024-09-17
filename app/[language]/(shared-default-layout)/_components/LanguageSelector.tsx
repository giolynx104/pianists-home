"use client";

import { LanguageContext } from "@/app/i18n/LanguageContext";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Language as LanguageIcon } from "@mui/icons-material";

export const LanguageSelector = () => {
  const language = useContext(LanguageContext);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="language-select-label" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Language</InputLabel>
      <Select
        labelId="language-select-label"
        value={language}
        onChange={(e) => {
          router.push(pathname.replace(`${language}`, e.target.value));
        }}
        label="Language"
        startAdornment={<LanguageIcon sx={{ mr: 1, color: 'white' }} />}
        sx={{
          minWidth: 120,
          color: 'white',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
          '&.Mui-focused .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiSelect-select': {
            paddingRight: '32px', // Ensure there's enough space for the dropdown icon
          },
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="vi">Tiếng Việt</MenuItem>
      </Select>
    </FormControl>
  );
};
