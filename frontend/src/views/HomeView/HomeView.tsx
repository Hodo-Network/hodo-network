
import { Collection } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import Hero from "../../components/Hero";
import CollectionGrid from '../../components/CollectionGrid';

export interface IHomeViewProps {
  items: Array<Collection>;
}

export const PureHomeView = ({ items }: IHomeViewProps) => {
  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='px-4 sm:px-8 max-w-8xl'>
        <h1 id='primary-heading' className='sr-only'>
          Home
        </h1>

        <Hero />

        <h2 className='text-xl font-semibold text-primary-focus mb-4'>Featured Collections</h2>
        <CollectionGrid items={items} />
      </section>
    </ContentWrapper>
  );
};
