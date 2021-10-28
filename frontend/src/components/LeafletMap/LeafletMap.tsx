import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useWeb3React } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  // Circle,
  FeatureGroup,
} from "react-leaflet";
import { NFT, Attribute } from "../../typings/nft";
// import { NATIVE_CURRENCY } from "../../constants";
import { ROUTE_MARKETPLACE } from "../../constants/routes";

const getTraitValue = (attributes: Array<Attribute>, trait: string) => {
  return attributes.find((attr) => attr.trait_type === trait)?.value;
};

function LocationMarker({ selected }: { selected: NFT }) {
  // const { chainId } = useWeb3React<Web3Provider>();
  const [position, setPosition] = useState<any>(null);
  const map = useMap();
  var icon = L.icon({
    iconUrl: selected.image,
    iconSize: [60, 60],
    iconAnchor: [0, 0],
    popupAnchor: [30, -8],
    shadowUrl: undefined,
  });

  useEffect(() => {
    let lat = getTraitValue(selected.attributes, "Latitude");
    let lng = getTraitValue(selected.attributes, "Longitude");
    const latlng = new L.LatLng(Number(lat), Number(lng));
    setPosition(latlng);
    map.flyTo(latlng, 3);
  }, [selected]);

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        <div className='font-semibold text-base'>{selected.name}</div>
        <div>
          {/* <span className='font-semibold'>Cost:</span> {selected.price} */}
          {/* {selected.price.units} */}
          {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
        </div>
        <div>
          <NavLink
            to={`${ROUTE_MARKETPLACE}/${selected.contractAddress}/${selected.tokenId}`}>
            View NFT
          </NavLink>
        </div>
      </Popup>
    </Marker>
  );
}

function ItemMarker({ item }: { item: NFT }) {
  // const { chainId } = useWeb3React<Web3Provider>();
  let lat = getTraitValue(item.attributes, "Latitude");
  let lng = getTraitValue(item.attributes, "Longitude");
  const center = new L.LatLng(Number(lat), Number(lng));
  // const radiusInner = 5000;
  // const radiusOuter = 25000;
  var icon = L.icon({
    iconUrl: item.image,
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
            {item.description}
            {/* <span className='font-semibold'>Cost:</span> {item.price} */}
            {/* {item.price} */}
            {/* {(chainId && NATIVE_CURRENCY[chainId]) || NATIVE_CURRENCY[0]} */}
          </div>
          <div>
            <NavLink
              to={`${ROUTE_MARKETPLACE}/${item.contractAddress}/${item.tokenId}`}>
              View NFT
            </NavLink>
          </div>
        </Popup>
      </Marker>
      {/* <Circle
        center={center}
        pathOptions={{ color: "blue", fillColor: "blue" }}
        radius={radiusOuter}
      /> */}
      {/* <Circle
        center={center}
        pathOptions={{ color: "red", fillColor: "red" }}
        radius={radiusInner}
        stroke={false}
      /> */}
    </FeatureGroup>
  );
}

export interface LeafletMapProps {
  collectibles: Array<NFT>;
  selected: NFT;
  className?: string;
}

export const LeafletMap = ({
  collectibles,
  selected,
  className,
}: LeafletMapProps) => {
  // const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  // const tileLayerUrl = "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
  const tileLayerUrl =
    "https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png";

  return (
    <MapContainer
      className={className}
      center={[54.525963, 15.255119]}
      zoom={3}
      scrollWheelZoom={true}>
      <TileLayer url={tileLayerUrl} />
      {selected && <LocationMarker selected={selected} />}
      {collectibles?.map((item) => (
        <ItemMarker item={item} key={item.tokenId} />
      ))}
    </MapContainer>
  );
};
