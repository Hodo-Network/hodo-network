import ContentWrapper from "../../ContentWrapper";
import { Hero } from "../../components";

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
      </section>
    </ContentWrapper>
  );
};
