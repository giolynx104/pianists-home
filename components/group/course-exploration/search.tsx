"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <TextField
      className=" w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        ),
      }}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default Search;
