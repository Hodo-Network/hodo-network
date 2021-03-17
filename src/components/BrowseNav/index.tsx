import React from "react";
import {
  BROWSE_ALL_ROUTE,
  BROWSE_CAPITALS_ROUTE,
  BROWSE_COUNTRIES_ROUTE,
  BROWSE_MONUMENTS_ROUTE,
} from "../../constants/routes";
import BrowseNavLink from "./link";

export default function BrowseNav() {
  return (
    <nav className='space-y-1' aria-label='Sidebar'>
      <BrowseNavLink to={BROWSE_ALL_ROUTE} text='All' />
      <BrowseNavLink to={BROWSE_COUNTRIES_ROUTE} text='Countries' />
      <BrowseNavLink to={BROWSE_CAPITALS_ROUTE} text='Capitals' />
      <BrowseNavLink to={BROWSE_MONUMENTS_ROUTE} text='Monuments' />
    </nav>
  );
}
