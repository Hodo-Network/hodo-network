const ROUTE_COLLECTIONS = "/assets";
const ROUTE_COLLECTION = "/assets/:name";
const ROUTE_COLLECTIBLE = "/assets/:name/:id";
const ROUTE_DEFAULT = "/";
const ROUTE_EXPLORE = "/explore";
const ROUTE_FAQ = "/faq";
const ROUTE_ROADMAP = "/roadmap";
const ROUTE_WALLET = "/wallet";

// Used to pull a convenient name for analytics tracking events. The key must
// be react-router ready path, and can include params such as :id for popup windows
// const PATH_NAME_MAP = {
//   [ROUTE_COLLECTIONS]: "Collections Page",
//   [ROUTE_COLLECTION]: "Collection Page",
//   [ROUTE_COLLECTIBLE]: "Collectible Page",
//   [ROUTE_DEFAULT]: "Home",
//   [ROUTE_EXPLORE]: "Map Page",
//   [ROUTE_FAQ]: "Info Page",
//   [ROUTE_ROADMAP]: "Roadmap",
//   [ROUTE_WALLET]: "Wallet Page",
// };

export {
  ROUTE_COLLECTIONS,
  ROUTE_COLLECTION,
  ROUTE_COLLECTIBLE,
  ROUTE_DEFAULT,
  ROUTE_EXPLORE,
  ROUTE_FAQ,
  ROUTE_ROADMAP,
  ROUTE_WALLET,
};
