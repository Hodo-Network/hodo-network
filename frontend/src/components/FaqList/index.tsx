import React from "react";
import ReactHtmlParser from "react-html-parser";
import { FAQ } from "../../typings/faq";

export default function FaqList({ items }: { items: Array<FAQ> }) {
  return (
    <dl className='space-y-8 divide-y divide-gray-200 dark:divide-gray-800'>
      {items.map((item) => (
        <div key={item.id} className='pt-6 md:grid md:grid-cols-12 md:gap-8'>
          <dt className='text-base font-medium text-gray-800 dark:text-gray-100 md:col-span-5'>
            {item.question}
          </dt>
          <dd className='mt-2 md:mt-0 md:col-span-7 prose-blue'>
            <p className='text-base text-gray-700 dark:text-gray-200'>
              {ReactHtmlParser(item.answer)}
            </p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
