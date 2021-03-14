import React from "react";
import { Footer, Navbar, RarityBadge } from "../../components";

const props = {
  id: "BZTDWRaK6rQmnSLrrq4PANBeueYfDRFkpHV9KcMtjxL19wsJ5",
  img:
    "https://images.unsplash.com/photo-1592161461911-fe78a33235a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  name: "Jamestown",
  rarity: "Common",
  desc: "Capital City of Saint Helena.",
  cost: 5,
};

export default function Collectible() {
  const { id, img, name, rarity, desc, cost } = props;

  return (
    <div className='bg-gray-100 dark:bg-gray-900'>
      <Navbar />
      <div>
        <div className='p-4 sm:p-8 bg-gray-700'>
          <div className='mx-auto max-w-md sm:max-w-lg lg:max-w-7xl h-60 flex items-center'>
            <img className='max-h-full' src={img} alt={name} />
          </div>
        </div>

        <div className='p-4 sm:p-8'>
          <div className='mx-auto max-w-md sm:max-w-lg lg:max-w-7xl'>
            <div className='flex flex-wrap items-center'>
              <h3 className='text-3xl uppercase font-medium text-gray-900'>
                {name}
              </h3>

              <RarityBadge rarity={rarity} className='mt-1 ml-4' />
            </div>

            <div className='mt-8'>
              <h1 className='text-sm uppercase font-medium text-gray-500'>Description</h1>
              <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                {desc}
              </p>
            </div>

            <div className='mt-8'>
              <h1 className='text-sm uppercase font-medium text-gray-500'>Cost</h1>
              <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                {cost}
              </p>
            </div>

            <div className='mt-8'>
              <h1 className='text-sm uppercase font-medium text-gray-500'>ID</h1>
              <p className='mt-2 font-medium text-gray-900 overflow-hidden overflow-ellipsis'>
                {id}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
