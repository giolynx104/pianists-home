"use client";

import { useEffect, useState } from "react";
import Map from "./Map";

export const NearbyOfflineCourseList = () => {
  const [position, setPosition] = useState<[number, number] | undefined>();

  useEffect(() => {
    console.log("Trying to get location...");
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => {
        console.log(
          "Got location" +
            currentPosition.coords.longitude +
            " " +
            currentPosition.coords.latitude
        );
        const { longitude, latitude } = currentPosition.coords;
        setPosition([longitude, latitude]);
      },
      (err) => {
        console.error("Error fetching geolocation:", err); // Check if there is an error
      }
    );
  }, [position]);

  useEffect(() => {
    console.log("Position state updated:", position); // Check if this gets logged after geolocation
  }, [position]);

  if (!position) {
    return <p>Fetching your location, please allow access...</p>;
  }

  return <Map position={position} />;
};
