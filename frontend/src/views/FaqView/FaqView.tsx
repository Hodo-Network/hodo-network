import { faqs } from "../../data/faqs";
import ContentWrapper from "../../ContentWrapper";
import FaqList from "../../components/FaqList";

export const FaqView = () => {
  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='p-4 sm:p-8 max-w-8xl divide-y-2 divide-base-content'>
        <h1 id='primary-heading' className='text-2xl font-bold mb-6'>
          Frequently Asked Questions
        </h1>

        <FaqList items={faqs} />
      </section>
    </ContentWrapper>
  );
};
