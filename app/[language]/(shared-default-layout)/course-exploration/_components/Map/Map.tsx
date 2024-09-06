"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { RecenteredMap } from "./RecenteredMap";

const Map = ({ position }: { position: [number, number] }) => {
  return (
    <MapContainer
      className="w-[400px] h-80"
      center={position}
      zoom={0}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RecenteredMap position={position} />
      {position ? <Marker position={position}></Marker> : null}
    </MapContainer>
  );
};

export default Map;
