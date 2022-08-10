import Button from '../../base/Button';

export interface PureHeroProps {
  onClick?: () => void;
}

export const PureHero = ({ onClick }: PureHeroProps) => {
  return (
    <div className='max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8 text-center'>
      <h2 className='tracking-tight font-extrabold text-4xl sm:text-5xl lg:text-6xl'>
        Hodo <span className='text-primary'>Network</span>
      </h2>

      <p className='mt-4 text-lg sm:text-xl'>
        Welcome to the first marketplace for Georeferenced Non-Fungible Tokens
        (gNFTs).
      </p>

      <div className='mt-6'>
        <Button color='primary' size='lg' onClick={onClick}>
          Start Browsing
        </Button>
      </div>
    </div>
  );
};
