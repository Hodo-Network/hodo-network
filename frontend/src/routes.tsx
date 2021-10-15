import CollectiblePage from "./components/CollectiblePage";
import CollectionPage from "./components/CollectionPage";
import CollectionsPage from "./components/CollectionsPage";
import CreatePage from "./components/CreatePage";
import ExplorePage from "./components/ExplorePage";
import FaqPage from "./components/FaqPage";
import HomePage from "./components/HomePage";
import RoadmapPage from "./components/RoadmapPage";
import WalletPage from "./components/WalletPage";
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
    exact: true,
  },
  {
    path: paths.ROUTE_COLLECTION,
    name: ":contractAddress",
    Component: CollectionPage,
    exact: true,
  },
  {
    path: paths.ROUTE_COLLECTIBLE,
    name: ":tokenId",
    Component: CollectiblePage,
    exact: true,
  },
  {
    path: paths.ROUTE_EXPLORE,
    name: "Explore",
    Component: ExplorePage,
    exact: true,
  },
  {
    path: paths.ROUTE_CREATE,
    name: "Create",
    Component: CreatePage,
    exact: false,
  },
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
