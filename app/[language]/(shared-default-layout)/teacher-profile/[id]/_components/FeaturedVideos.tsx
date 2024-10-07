"use client";

import { Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
const FeaturedVideos = ({ url }: { url: string }) => {
  return (
    <Stack className="bg-black flex items-center justify-center">
      <Typography
        variant="h4"
        className="text-center p-10 text-white uppercase"
      >
        Featured Videos
      </Typography>
      <ReactPlayer url={url} />
    </Stack>
  );
};

export { FeaturedVideos };
