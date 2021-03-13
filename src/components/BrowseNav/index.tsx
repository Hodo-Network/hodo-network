import React from "react";
import BrowseNavLink from "./link";

export default function BrowseNav() {
  return (
    <nav className='space-y-1' aria-label='Sidebar'>
      <BrowseNavLink to='/browse' text='All' />
      <BrowseNavLink to='/browse/countries' text='Countries' />
      <BrowseNavLink to='/browse/capitals' text='Capitals' />
      <BrowseNavLink to='/browse/monuments' text='Monuments' />
    </nav>
  );
}
