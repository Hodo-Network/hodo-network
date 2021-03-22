import {
  ROUTE_BROWSE_ALL,
  ROUTE_BROWSE_CAPITALS,
  ROUTE_BROWSE_COUNTRIES,
  ROUTE_BROWSE_MONUMENTS,
  ROUTE_BROWSE_REGION,
} from "../../constants/routes";
import {
  TEXT_ALL,
  TEXT_CAPITAL_CITIES,
  TEXT_COUNTRIES,
  TEXT_MONUMENTS,
  TEXT_REGION,
} from "../../constants/text";
import BrowseNavLink from "./link";

export default function BrowseNav() {
  return (
    <nav className='space-y-1' aria-label='Sidebar'>
      <BrowseNavLink to={ROUTE_BROWSE_ALL} text={TEXT_ALL} />
      <BrowseNavLink to={ROUTE_BROWSE_REGION} text={TEXT_REGION} />
      <BrowseNavLink to={ROUTE_BROWSE_COUNTRIES} text={TEXT_COUNTRIES} />
      <BrowseNavLink to={ROUTE_BROWSE_CAPITALS} text={TEXT_CAPITAL_CITIES} />
      <BrowseNavLink to={ROUTE_BROWSE_MONUMENTS} text={TEXT_MONUMENTS} />
    </nav>
  );
}
