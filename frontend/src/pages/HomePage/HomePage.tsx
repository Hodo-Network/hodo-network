import ContentWrapper from "../../ContentWrapper";
import Hero from "../../components/Hero";
import CollectionGrid from '../../components/CollectionGrid';

export const HomePage = () => {
  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='px-4 sm:px-8 max-w-8xl'>
        <h1 id='primary-heading' className='sr-only'>
          Home
        </h1>

        <Hero />

        <h2 className='text-2xl font-semibold tracking-tight mb-4'>Upcoming Collections</h2>
        <CollectionGrid status={"upcoming"} />
      </section>
    </ContentWrapper>
  );
};
