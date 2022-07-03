const ROUTE_ACCOUNT = "/account";
const ROUTE_COLLECTIONS = "/collections";
const ROUTE_COLLECTION = "/assets/:contractAddress";
const ROUTE_COLLECTIBLE = "/assets/:contractAddress/:tokenId";
const ROUTE_CREATE_COLLECTION = "/collection/create";
const ROUTE_CREATOR_DASHBOARD = "/creator-dashboard";
const ROUTE_DEFAULT = "/";
const ROUTE_EXPLORE = "/explore";
const ROUTE_FAQ = "/faq";
const ROUTE_MARKETPLACE = "/assets";
const ROUTE_ROADMAP = "/roadmap";

// Used to pull a convenient name for analytics tracking events. The key must
// be react-router ready path, and can include params such as :id for popup windows
// const PATH_NAME_MAP = {
//   [ROUTE_ACCOUNT]: "Account View",
//   [ROUTE_COLLECTIONS]: "Collections View",
//   [ROUTE_COLLECTION]: "Collection View",
//   [ROUTE_COLLECTIBLE]: "Collectible View",
//   [ROUTE_CREATE_COLLECTION]: "Create Collection View",
//   [ROUTE_CREATOR_DASHBOARD]: "Create View",
//   [ROUTE_DEFAULT]: "Home",
//   [ROUTE_EXPLORE]: "Explore View",
//   [ROUTE_FAQ]: "FAQ View",
//   [ROUTE_MARKETPLACE]: "Marketplace View",
//   [ROUTE_ROADMAP]: "Roadmap View",
// };

export {
  ROUTE_ACCOUNT,
  ROUTE_COLLECTIONS,
  ROUTE_COLLECTION,
  ROUTE_COLLECTIBLE,
  ROUTE_CREATE_COLLECTION,
  ROUTE_CREATOR_DASHBOARD,
  ROUTE_DEFAULT,
  ROUTE_EXPLORE,
  ROUTE_FAQ,
  ROUTE_MARKETPLACE,
  ROUTE_ROADMAP,
};
