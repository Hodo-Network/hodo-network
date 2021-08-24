import { Collection } from "../../typings/nft";
import SelectBox from "../SelectBox";

export interface PureCollectionSelectProps {
  collections: Array<Collection>;
  onChange?: () => void;
}

export const PureCollectionSelect = ({
  collections,
  onChange,
}: PureCollectionSelectProps) => {
  return (
    <div>
      <SelectBox label={"Collection"} items={collections} onChange={onChange} />
    </div>
  );
};
