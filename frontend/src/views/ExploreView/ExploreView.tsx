import { useState } from "react";
import LeafletMap from "../../components/LeafletMap";
import { NFT } from "../../typings/nft";
import ContentWrapper from "../../ContentWrapper";
import AssetListCompact from "../../components/AssetListCompact";

export interface PureExploreViewProps {
  items: Array<any>;
}

export const PureExploreView = ({ items }: PureExploreViewProps) => {
  const [selected, setSelected] = useState<NFT>();

  const onSelectItem = (item: NFT) => {
    setSelected(item);
  };

  return (
    <ContentWrapper>
      <div className='flex h-full'>
        <section
          aria-labelledby='primary-heading'
          className='min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last'>
          <h1 id='primary-heading' className='sr-only'>
            Map
          </h1>
          <LeafletMap
            className='h-full w-full object-cover z-10'
            collectibles={items}
            // @ts-ignore
            selected={selected}
          />
        </section>

        <aside className='h-full overflow-hidden hidden lg:block lg:flex-shrink-0 lg:order-first border-r border-neutral'>
          <AssetListCompact items={items} selected={selected} onSelectItem={onSelectItem} />
        </aside>
      </div>
    </ContentWrapper>
  );
};
