import L from 'leaflet';
import { useEffect } from 'react';
import {
  // Circle,
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import { NavLink } from 'react-router-dom';
import { ROUTE_MARKETPLACE } from '../../constants/routes';
import { NFT } from '../../typings/nft';

// const getTraitValue = (attributes: Array<Attribute>, trait: string) => {
//   return attributes?.find((attr) => attr.trait_type === trait)?.value;
// };

function LocationMarker({ selected }: { selected: any }) {
  // const [position, setPosition] = useState<any>(null);
  const map = useMap();
  // var icon = L.icon({
  //   iconUrl: selected.image,
  //   iconSize: [60, 60],
  //   iconAnchor: [0, 0],
  //   popupAnchor: [30, -8],
  //   shadowUrl: undefined,
  // });

  useEffect(() => {
    // const lat = getTraitValue(selected.attributes, "Latitude");
    // const lng = getTraitValue(selected.attributes, "Longitude");
    const latlng = new L.LatLng(Number(selected.lat), Number(selected.lng));
    // setPosition(latlng);
    map.flyTo(latlng, 3);
  }, [selected]);

  return null;
  // return position === null ? null : (
  //   <Marker position={position} icon={icon}>
  //     <Popup>
  //       <div className='font-semibold text-base'>{selected.name}</div>
  //       <div>
  //         <NavLink
  //           to={`${ROUTE_MARKETPLACE}/${selected.contractAddress}/${selected.tokenId}`}>
  //           View NFT
  //         </NavLink>
  //       </div>
  //     </Popup>
  //   </Marker>
  // );
}

function ItemMarker({ item }: { item: any }) {
  // const lat = getTraitValue(item.attributes, "Latitude");
  // const lng = getTraitValue(item.attributes, "Longitude");
  const center = new L.LatLng(Number(item.lat), Number(item.lng));
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
    <FeatureGroup pathOptions={{ color: 'purple' }}>
      {center && (
        <Marker position={center} icon={icon}>
          <Popup>
            <div className='font-semibold text-base'>{item.name}</div>
            <div>{item.description}</div>
            <div>
              <NavLink
                to={`${ROUTE_MARKETPLACE}/${item.contractAddress}/${item.tokenId}`}>
                View NFT
              </NavLink>
            </div>
          </Popup>
        </Marker>
      )}
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
    'https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png';

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
