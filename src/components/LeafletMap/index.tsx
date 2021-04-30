import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
  FeatureGroup,
} from "react-leaflet";
import { NFTProps } from "../../typings/nft";
import { NATIVE_CURRENCY } from "../../constants";
import { ROUTE_ASSETS } from "../../constants/routes";

function LocationMarker({ selected }: { selected: NFTProps }) {
  const [position, setPosition] = useState<any>(null);
  const { chainId } = useWeb3React<Web3Provider>();
  const map = useMap();
  var icon = L.icon({
    iconUrl: selected.img,
    iconSize: [60, 60],
    iconAnchor: [0, 0],
    popupAnchor: [30, -8],
    shadowUrl: undefined,
  });

  useEffect(() => {
    const latlng = new L.LatLng(selected.location.lat, selected.location.lng);
    setPosition(latlng);
    map.flyTo(latlng, selected.location.zoom);
  }, [selected]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        <div className='font-semibold text-base'>{selected.name}</div>
        <div>
          <span className='font-semibold'>Cost:</span> {selected.cost}{" "}
          {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]}
        </div>
        <div>
          <NavLink to={`${ROUTE_ASSETS}/${selected.id}`}>View NFT</NavLink>
        </div>
      </Popup>
    </Marker>
  );
}

function ItemMarker({ item }: { item: NFTProps }) {
  const { chainId } = useWeb3React<Web3Provider>();
  const center = new L.LatLng(item.location.lat, item.location.lng);
  const radiusInner = 5000;
  const radiusOuter = 25000;
  var icon = L.icon({
    iconUrl: item.img,
    iconSize: [48, 48],
    iconAnchor: [0, 0],
    popupAnchor: [30, -8],
    shadowUrl: undefined,
  });

  return (
    <FeatureGroup pathOptions={{ color: "purple" }}>
      <Marker position={center} icon={icon}>
        <Popup>
          <div className='font-semibold text-base'>{item.name}</div>
          <div>
            <span className='font-semibold'>Cost:</span> {item.cost}{" "}
            {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]}
          </div>
          <div>
            <NavLink to={`${ROUTE_ASSETS}/${item.id}`}>View NFT</NavLink>
          </div>
        </Popup>
      </Marker>
      <Circle
        center={center}
        pathOptions={{ color: "blue", fillColor: "blue" }}
        radius={radiusOuter}
      />
      <Circle
        center={center}
        pathOptions={{ color: "red", fillColor: "red" }}
        radius={radiusInner}
        stroke={false}
      />
    </FeatureGroup>
  );
}

export default function LeafletMap({
  collectibles,
  selected,
  className,
}: {
  collectibles: Array<NFTProps>;
  selected: NFTProps;
  className?: string;
}) {
  const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  // const tileLayerUrl = "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
  // const tileLayerUrl = "https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png";

  return (
    <MapContainer
      className={className}
      center={[54.525963, 15.255119]}
      zoom={3}
      scrollWheelZoom={true}>
      <TileLayer url={tileLayerUrl} />
      <LocationMarker selected={selected} />
      {collectibles?.map((item) => (
        <ItemMarker item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}
