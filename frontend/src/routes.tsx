import AccountPage from "./pages/AccountPage";
import AssetPage from "./pages/AssetPage";
import CollectionsPage from "./pages/CollectionsPage";
import CollectionPage from "./pages/CollectionPage";
import CreatorPage from "./pages/CreatorPage";
import ExplorePage from "./pages/ExplorePage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import RoadmapPage from "./pages/RoadmapPage";
import * as paths from "./constants/routes";

const routes = [
  {
    path: paths.ROUTE_DEFAULT,
    name: "Home",
    Component: HomePage,
    exact: true,
  },
  {
    path: paths.ROUTE_MARKETPLACE,
    name: "Marketplace",
    Component: MarketplacePage,
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
    Component: AssetPage,
    exact: true,
  },
  {
    path: paths.ROUTE_EXPLORE,
    name: "Explore",
    Component: ExplorePage,
    exact: true,
  },
  {
    path: paths.ROUTE_ACCOUNT,
    name: "Account",
    Component: AccountPage,
    exact: true,
  },
  {
    path: paths.ROUTE_CREATOR_DASHBOARD,
    name: "Create",
    Component: CreatorPage,
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
