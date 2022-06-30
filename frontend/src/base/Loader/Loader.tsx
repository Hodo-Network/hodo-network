import ReactLoading from 'react-loading';

export const Loader = () => {
  return (
    <ReactLoading
      type='bubbles'
      color='currentColor'
      className='text-primary'
    />
  );
};