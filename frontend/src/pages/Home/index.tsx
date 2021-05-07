import React from "react";
import { Hero } from "../../components";
import ContentWrapper from "../ContentWrapper";

export default function Home() {
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
}
