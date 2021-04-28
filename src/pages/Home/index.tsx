import React from "react";
import { Hero } from "../../components";

export default function Home() {
  return (
    <section
      aria-labelledby='primary-heading'
      className='px-4 sm:px-8 lg:px-12'>
      <h1 id='primary-heading' className='sr-only'>
        Home
      </h1>

      <Hero />
    </section>
  );
}
