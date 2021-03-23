import L from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";
// https://www.latlong.net/

function LocationMarker() {
  const [position, setPosition] = useState<any>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here.</Popup>
    </Marker>
  );
}

export default function LeafletMap({ className }: { className?: string }) {
  return (
    <MapContainer
      className={className}
      center={[54.525963, 15.255119]}
      zoom={4}
      scrollWheelZoom={false}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <LocationMarker />
      <Marker position={[46.227638, 2.213749]}>
        <Popup>France</Popup>
      </Marker>
      <Marker position={[51.165691, 10.451526]}>
        <Popup>Germany</Popup>
      </Marker>
      <Marker position={[40.463669, -3.74922]}>
        <Popup>Spain</Popup>
      </Marker>
    </MapContainer>
  );
}
