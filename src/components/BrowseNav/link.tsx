import React from "react";
import { NavLink } from "react-router-dom";
import { BrowseLink } from "./types";

export default function BrowseNavLink({ to, text }: BrowseLink) {
  return (
    <NavLink
      to={to}
      exact={true}
      className='text-gray-600 hover:bg-gray-200 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md'
      activeClassName='bg-gray-300 text-gray-900 hover:bg-gray-300 hover: text-gray-900'>
      <span className='truncate'>{text}</span>
    </NavLink>
  );
}
