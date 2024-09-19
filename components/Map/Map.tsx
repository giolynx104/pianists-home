"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapInstance } from "./MapInstance";
import { LatLng } from "leaflet";

interface MapProps {
  onPositionChange: (position: LatLng) => void;
}

const Map: React.FC<MapProps> = ({ onPositionChange }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <MapInstance onPositionChange={onPositionChange} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>  
 contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
export default Map;
