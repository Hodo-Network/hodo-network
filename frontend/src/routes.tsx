import AccountView from "./views/AccountView";
import AssetView from "./views/AssetView";
import CollectionsView from "./views/CollectionsView";
import CollectionView from "./views/CollectionView";
import CreatorView from "./views/CreatorView";
import ExploreView from "./views/ExploreView";
import FaqView from "./views/FaqView";
import HomeView from "./views/HomeView";
import MarketplaceView from "./views/MarketplaceView";
import RoadmapView from "./views/RoadmapView";
import * as paths from "./constants/routes";

const routes = [
  {
    path: paths.ROUTE_DEFAULT,
    name: "Home",
    Component: HomeView,
    exact: true,
  },
  {
    path: paths.ROUTE_MARKETPLACE,
    name: "Marketplace",
    Component: MarketplaceView,
    exact: true,
  },
  {
    path: paths.ROUTE_COLLECTIONS,
    name: "Collections",
    Component: CollectionsView,
    exact: true,
  },
  {
    path: paths.ROUTE_COLLECTION,
    name: ":contractAddress",
    Component: CollectionView,
    exact: true,
  },
  {
    path: paths.ROUTE_COLLECTIBLE,
    name: ":tokenId",
    Component: AssetView,
    exact: true,
  },
  {
    path: paths.ROUTE_EXPLORE,
    name: "Explore",
    Component: ExploreView,
    exact: true,
  },
  {
    path: paths.ROUTE_ACCOUNT,
    name: "Account",
    Component: AccountView,
    exact: true,
  },
  {
    path: paths.ROUTE_CREATOR_DASHBOARD,
    name: "Create",
    Component: CreatorView,
    exact: true,
  },
  {
    path: paths.ROUTE_ROADMAP,
    name: "Roadmap",
    Component: RoadmapView,
    exact: true,
  },
  { path: paths.ROUTE_FAQ, name: "FAQ", Component: FaqView, exact: true },
];

export default routes;
