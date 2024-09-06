"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const RecenteredMap = ({ position }: { position: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [position, map]);

  return null;
};
