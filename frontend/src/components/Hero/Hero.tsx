import Button from "../Button";

export interface PureHeroProps {
  onClick?: () => void;
}

export const PureHero = ({ onClick }: PureHeroProps) => {
  return (
    <div className="max-w-6xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className='tracking-tight font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl'>
        <span>Hodo </span>
        <span className='text-blue-600 dark:text-white'>Network</span>
      </h2>

      <p className='mt-4 text-gray-600 dark:text-gray-400 text-lg sm:text-xl'>
        Welcome to the first marketplace for Georeferenced Non-Fungible Tokens (gNFTs).
      </p>

      <div className='mt-6'>
        <Button primary={true} size='large' onClick={onClick}>
          Start Browsing
        </Button>
      </div>
    </div>
  );
};
