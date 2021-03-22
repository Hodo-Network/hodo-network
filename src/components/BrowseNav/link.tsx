import { NavLink } from "react-router-dom";

export default function BrowseNavLink({
  to,
  text,
}: {
  to: string;
  text: string;
}) {
  return (
    <NavLink
      to={to}
      exact={true}
      className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center px-3 py-2 text-sm font-medium rounded-md'
      activeClassName='text-gray-900 hover:text-gray-900 bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700'>
      <span className='truncate'>{text}</span>
    </NavLink>
  );
}
