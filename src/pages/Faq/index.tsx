import React from "react";

const headline = "Frequently Asked Questions";
const faqs = [
  {
    id: 1,
    question: "Which blockchain does the marketplace use?",
    answer:
      "The marketplace was built using the Avalanche blockchain. Assets are minted on the C-Chain.",
  },
  {
    id: 2,
    question:
      "Why were the assets minted on the C-Chain instead of the X-Chain?",
    answer:
      "The C-Chain is EVM compatible which will allow interoperability with other EVM chains in the future. Using the C-Chain also allows us to enable wallets like MetaMask for a better user experience.",
  },
];

export default function Faq() {
  return (
    <div className='p-4 sm:p-8 lg:p-12 max-w-8xl divide-y-2 divide-gray-200 dark:divide-gray-600'>
      <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white'>
        {headline}
      </h2>
      <div className='mt-6'>
        <dl className='space-y-8 divide-y divide-gray-200 dark:divide-gray-700'>
          {faqs.map((faq) => (
            <div key={faq.id} className='pt-6 md:grid md:grid-cols-12 md:gap-8'>
              <dt className='text-base font-medium text-gray-800 dark:text-gray-100 md:col-span-5'>
                {faq.question}
              </dt>
              <dd className='mt-2 md:mt-0 md:col-span-7'>
                <p className='text-base text-gray-700 dark:text-gray-200'>
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
