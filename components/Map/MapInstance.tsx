"use client";

import React, { useEffect, useState, useRef } from "react";
import L, { LatLng } from "leaflet";
import { useMap, useMapEvents, Marker, Popup } from "react-leaflet";

interface MapInstanceProps {
  onPositionChange: (position: LatLng) => void;
}

export const MapInstance: React.FC<MapInstanceProps> = ({
  onPositionChange,
}) => {
  const map = useMap();
  const [position, setPosition] = useState<LatLng | undefined>();
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (currentPosition) => {
          const initialPosition = L.latLng(
            currentPosition.coords.latitude,
            currentPosition.coords.longitude
          );
          setPosition(initialPosition);
          onPositionChange(initialPosition);
          map.setView(initialPosition);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [map, onPositionChange]);

  useMapEvents({
    click(e) {
      const clickedPosition = e.latlng;
      setPosition(clickedPosition);
      onPositionChange(clickedPosition);
      map.setView(clickedPosition);
    },
  });

  return position ? (
    <Marker position={position} ref={markerRef}>
      <Popup>
        {`Selected position: ${position.lng.toFixed(4)}, ${position.lat.toFixed(4)}`}
      </Popup>
    </Marker>
  ) : null;
};
