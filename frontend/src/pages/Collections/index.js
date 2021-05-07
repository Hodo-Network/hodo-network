import React from "react";
import { NavLink } from "react-router-dom";
import { collectibles } from "../../data";
import ContentWrapper from "../ContentWrapper";
import { ROUTE_COLLECTIONS } from "../../constants/routes";

const collections = collectibles
  ?.map((item) => item.category)
  .filter((value, index, _arr) => _arr.indexOf(value) === index)
  .sort();

export default function Collections() {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        <div className='grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {collections.map((item) => (
            <NavLink
              key={item}
              to={`${ROUTE_COLLECTIONS}/${item}`}
              className='text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 capitalize'>
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
