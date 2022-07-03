import ReactHtmlParser from "react-html-parser";
import { FAQ } from "../../typings/faq";

export interface FaqListProps {
  items: Array<FAQ>;
}

export const FaqList = ({ items }: FaqListProps) => {
  return (
    <dl className='space-y-8 divide-y divide-base-300'>
      {items.map((item) => (
        <div key={item.id} className='pt-6 md:grid md:grid-cols-12 md:gap-8'>
          <dt className='text-base font-medium md:col-span-5'>
            {item.question}
          </dt>
          <dd className='mt-2 md:mt-0 md:col-span-7 prose-primary'>
            <p>
              {ReactHtmlParser(item.answer)}
            </p>
          </dd>
        </div>
      ))}
    </dl>
  );
};
