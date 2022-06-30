export const CardEmpty = () => {
  return (
    <div className='card card-compact shadow-md bg-neutral-focus text-neutral-content border border-dashed border-neutral-content'>
      <div className='flex-shrink-0 w-full h-60'></div>
      <div className='card-body bg-neutral'>
        <p className='font-semibold'>
          Nothing to display
        </p>
      </div>
    </div>
  );
};
