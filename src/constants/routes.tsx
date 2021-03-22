const ROUTE_DEFAULT = "/home";
const ROUTE_BROWSE_ALL = "/browse";
const ROUTE_BROWSE_REGION = "/browse/region";
const ROUTE_BROWSE_COUNTRIES = "/browse/countries";
const ROUTE_BROWSE_CAPITALS = "/browse/capitals";
const ROUTE_BROWSE_MONUMENTS = "/browse/monuments";
const ROUTE_ASSET = "/view";
const ROUTE_COMING_SOON = "/";

// Used to pull a convenient name for analytics tracking events. The key must
// be react-router ready path, and can include params such as :id for popup windows
// const PATH_NAME_MAP = {
//   [ROUTE_DEFAULT]: "Home",
//   [ROUTE_BROWSE_ALL]: "Browse All",
//   [ROUTE_BROWSE_REGION]: "Browse Region",
//   [ROUTE_BROWSE_COUNTRIES]: "Browse Countries",
//   [ROUTE_BROWSE_CAPITALS]: "Browse Capitals",
//   [ROUTE_BROWSE_MONUMENTS]: "Browse Monuments",
//   [`${ROUTE_ASSET}/:id`]: `Asset Page`,
//   [ROUTE_COMING_SOON]: "Coming Soon",
// };

export {
  ROUTE_DEFAULT,
  ROUTE_BROWSE_ALL,
  ROUTE_BROWSE_REGION,
  ROUTE_BROWSE_COUNTRIES,
  ROUTE_BROWSE_CAPITALS,
  ROUTE_BROWSE_MONUMENTS,
  ROUTE_ASSET,
  ROUTE_COMING_SOON,
};
