import { useState } from "react";
// import { LeafletMap } from "../../components";
import { collectibles } from "../../data";
import classNames from "../../utils/classNames";
import ContentWrapper from "../../ContentWrapper";

export const ExplorePage = () => {
  const [selected, setSelected] = useState(null);
  // TODO: replace with API data
  const items = collectibles || [];

  return (
    <ContentWrapper>
      <div className='flex h-full'>
        <section
          aria-labelledby='primary-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last'>
          <h1 id='primary-heading' className='sr-only'>
            Map
          </h1>
          {/* <LeafletMap
            className='h-full w-full object-cover z-10'
            collectibles={items}
            // @ts-ignore
            selected={selected}
          /> */}
        </section>

        <aside className='h-full overflow-hidden hidden lg:block lg:flex-shrink-0 lg:order-first'>
          <nav
            aria-label='Sections'
            className='w-96 h-full bg-white dark:bg-gray-900 border-r border-gray-200 relative hidden lg:flex lg:flex-col'>
            <div className='flex-shrink-0 p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center'>
              <p className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                Collectibles
              </p>
            </div>
            <div className='min-h-0 overflow-y-auto flex-1'>
              {items.length ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    // onClick={() => setSelected(item)}
                    tabIndex={0}
                    className={classNames(
                      item === selected
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800",
                      "cursor-pointer flex p-4 border-b border-gray-200 dark:border-gray-800 items-center"
                    )}>
                    <img
                      className='flex-shrink-0 -mt-0.5 h-14 w-14'
                      src={item.image}
                      alt={item.name}
                    />
                    <div className='ml-3 text-sm overflow-hidden'>
                      <p className='text-base font-semibold text-gray-900 dark:text-gray-100 truncate'>
                        {item.name}
                      </p>
                      <p className='mt-1 text-sm text-gray-600 dark:text-gray-300 truncate'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className='flex p-4 border-b border-gray-200 dark:border-gray-800 items-center'>
                  <div className='ml-3 text-sm overflow-hidden'>
                    <p className='text-base font-semibold text-gray-900 dark:text-gray-100 truncate'>
                      Empty
                    </p>
                    <p className='mt-1 text-sm text-gray-600 dark:text-gray-300 truncate'>
                      No items to display.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </aside>
      </div>
    </ContentWrapper>
  );
};
