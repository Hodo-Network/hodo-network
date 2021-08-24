import React from "react";
import ContentWrapper from "../../ContentWrapper";
import RoadmapItems from "../RoadmapItems";
import { roadmap } from "../../data/roadmap";

export const RoadmapPage = () => {
  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='p-4 sm:p-8 max-w-8xl'>
        <h1 id='primary-heading' className='sr-only'>
          Roadmap
        </h1>

        <RoadmapItems items={roadmap} />
      </section>
    </ContentWrapper>
  );
};
