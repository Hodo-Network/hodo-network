import Loader from "../../base/Loader";

export interface PureUserNftListProps {
  loading?: boolean;
  items: Array<any>;
}

export const PureUserNftList = ({
  loading = false,
  items,
}: PureUserNftListProps) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
      {items.length === 0 ? (
        <h1 className='text-2xl'>No assets owned</h1>
      ) : (
        items.map((item: any, idx: any) => (
          <div key={idx} className='border shadow rounded-xl overflow-hidden'>
            <img src={item.image} className='rounded' alt='' />
            <div className='p-4 bg-black'>
              <p className='text-2xl font-bold text-white'>
                Price - {item.price} Eth
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
