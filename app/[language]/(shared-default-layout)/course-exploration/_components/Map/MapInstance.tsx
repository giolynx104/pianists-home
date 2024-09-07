"use client";

import L, { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

export const MapInstance = () => {
  const map = useMap();

  const [position, setPosition] = useState<LatLng | undefined>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currentPosition) => {
      setPosition(
        L.latLng(
          currentPosition.coords.latitude,
          currentPosition.coords.longitude
        )
      );
    });
  }, []);

  useEffect(() => {
    if (position) {
      map.setView(position);
      L.marker(position)
        .addTo(map)
        .bindPopup(`Your position: ${position.lng}, ${position.lat}`)
        .openPopup();
    }
  }, [position, map]);

  return null;
};
