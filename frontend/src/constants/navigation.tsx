import {
  // CreditCardIcon,
  CollectionIcon,
  GlobeIcon,
  HomeIcon,
  MapIcon,
  PhotographIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import * as routes from './routes';

export const navigation = [
  { name: 'Home', href: routes.ROUTE_DEFAULT, icon: HomeIcon, exact: true },
  {
    name: 'Collections',
    href: routes.ROUTE_COLLECTIONS,
    icon: CollectionIcon,
    exact: false,
  },
  {
    name: 'Marketplace',
    href: routes.ROUTE_MARKETPLACE,
    icon: CollectionIcon,
    exact: false,
  },
  {
    name: 'Account',
    href: routes.ROUTE_ACCOUNT,
    icon: UserCircleIcon,
    exact: true,
  },
  {
    name: 'Create',
    href: routes.ROUTE_CREATOR_DASHBOARD,
    icon: PhotographIcon,
    exact: true,
  },
  {
    name: 'Explore',
    href: routes.ROUTE_EXPLORE,
    icon: GlobeIcon,
    exact: false,
  },
  {
    name: 'Roadmap',
    href: routes.ROUTE_ROADMAP,
    icon: MapIcon,
    exact: true,
  },
  {
    name: 'FAQ',
    href: routes.ROUTE_FAQ,
    icon: QuestionMarkCircleIcon,
    exact: true,
  },
];
