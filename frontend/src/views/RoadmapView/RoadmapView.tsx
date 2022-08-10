import RoadmapItems from '../../components/RoadmapItems';
import ContentWrapper from '../../ContentWrapper';
import { roadmap } from '../../data/roadmap';

export const RoadmapView = () => {
  return (
    <ContentWrapper>
      <section
        aria-labelledby='primary-heading'
        className='p-4 sm:p-8 max-w-8xl divide-y divide-base-content'>
        <h1 id='primary-heading' className='text-2xl font-bold'>
          Roadmap
        </h1>

        <div className='mt-6 pt-6'>
          <RoadmapItems items={roadmap} />
        </div>
      </section>
    </ContentWrapper>
  );
};
