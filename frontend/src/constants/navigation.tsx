import {
  GlobeIcon,
  CreditCardIcon,
  CollectionIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  MapIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import {
  ROUTE_COLLECTIONS,
  ROUTE_CREATE,
  ROUTE_DEFAULT,
  ROUTE_EXPLORE,
  ROUTE_FAQ,
  ROUTE_ROADMAP,
  ROUTE_WALLET,
} from "./routes";

export const navigation = [
  { name: "Home", href: ROUTE_DEFAULT, icon: HomeIcon, exact: true },
  {
    name: "Collections",
    href: ROUTE_COLLECTIONS,
    icon: CollectionIcon,
    exact: false,
  },
  { name: "Explore", href: ROUTE_EXPLORE, icon: GlobeIcon, exact: false },
  { name: "Create", href: ROUTE_CREATE, icon: PhotographIcon, exact: false },
  { name: "Wallet", href: ROUTE_WALLET, icon: CreditCardIcon, exact: true },
  {
    name: "Roadmap",
    href: ROUTE_ROADMAP,
    icon: MapIcon,
    exact: false,
  },
  { name: "FAQ", href: ROUTE_FAQ, icon: QuestionMarkCircleIcon, exact: true },
];
