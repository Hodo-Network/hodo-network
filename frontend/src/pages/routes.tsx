import {
  Collectible,
  Collection,
  Collections,
  Explore,
  Home,
  Faq,
  Onboarding,
  Roadmap,
  Wallet,
} from "./index";
import * as paths from "../constants/routes";

const routes = [
  {
    path: paths.ROUTE_DEFAULT,
    name: "Onboarding",
    Component: Onboarding,
    exact: true,
  },
  { path: paths.ROUTE_HOME, name: "Home", Component: Home, exact: true },
  {
    path: paths.ROUTE_COLLECTIONS,
    name: "Collections",
    Component: Collections,
    exact: false,
  },
  {
    path: paths.ROUTE_COLLECTION,
    name: ":name",
    Component: Collection,
    exact: false,
  },
  {
    path: paths.ROUTE_COLLECTIBLE,
    name: ":id",
    Component: Collectible,
    exact: false,
  },

  {
    path: paths.ROUTE_EXPLORE,
    name: "Explore",
    Component: Explore,
    exact: true,
  },
  { path: paths.ROUTE_WALLET, name: "Wallet", Component: Wallet, exact: true },
  {
    path: paths.ROUTE_ROADMAP,
    name: "Roadmap",
    Component: Roadmap,
    exact: true,
  },
  { path: paths.ROUTE_FAQ, name: "FAQ", Component: Faq, exact: true },
];

export default routes;
