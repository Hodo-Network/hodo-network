import { faqs } from "../../data/faqs";
import ContentWrapper from "../../ContentWrapper";
import FaqList from "../FaqList";

export const FaqPage = () => {
  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='p-4 sm:p-8 max-w-8xl divide-y-2 divide-gray-200 dark:divide-gray-800'>
        <h1 id='primary-heading' className='text-2xl font-bold'>
          Frequently Asked Questions
        </h1>

        <div className='mt-6'>
          <FaqList items={faqs} />
        </div>
      </section>
    </ContentWrapper>
  );
};
