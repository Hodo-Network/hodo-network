import {
  CollectiblePage,
  CollectionPage,
  CollectionsPage,
  // ExplorePage,
  FaqPage,
  HomePage,
  RoadmapPage,
  WalletPage,
} from "./components";
import * as paths from "./constants/routes";

const routes = [
  {
    path: paths.ROUTE_DEFAULT,
    name: "Home",
    Component: HomePage,
    exact: true,
  },
  {
    path: paths.ROUTE_COLLECTIONS,
    name: "Collections",
    Component: CollectionsPage,
    exact: false,
  },
  {
    path: paths.ROUTE_COLLECTION,
    name: ":name",
    Component: CollectionPage,
    exact: false,
  },
  {
    path: paths.ROUTE_COLLECTIBLE,
    name: ":id",
    Component: CollectiblePage,
    exact: false,
  },
  // {
  //   path: paths.ROUTE_EXPLORE,
  //   name: "Explore",
  //   Component: ExplorePage,
  //   exact: true,
  // },
  {
    path: paths.ROUTE_WALLET,
    name: "Wallet",
    Component: WalletPage,
    exact: true,
  },
  {
    path: paths.ROUTE_ROADMAP,
    name: "Roadmap",
    Component: RoadmapPage,
    exact: true,
  },
  { path: paths.ROUTE_FAQ, name: "FAQ", Component: FaqPage, exact: true },
];

export default routes;
