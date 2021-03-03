import React, { FC } from "react";
import { Props } from "./types";

const ProfileLink: FC<Props> = ({ img, name }) => (
  <a href='#none' className='flex-shrink-0 w-full group block'>
    <div className='flex items-center'>
      <div>
        <img
          data-testid='image'
          className='inline-block h-9 w-9 rounded-full'
          src={img}
          alt={name}
        />
      </div>
      {/* <div className='ml-3'>
        <p
          className='text-sm leading-5 font-medium text-white'
          data-testid='name'>
          {name}
        </p>
        <p
          className='text-xs leading-4 font-medium text-gray-300 group-hover:text-gray-200 transition ease-in-out duration-150'
          data-testid='view-profile'>
          View profile
        </p>
      </div> */}
    </div>
  </a>
);

export default ProfileLink;
