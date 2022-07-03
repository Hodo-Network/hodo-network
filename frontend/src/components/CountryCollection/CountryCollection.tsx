// TODO: test component. remove or create a purpose
import { formatUnits } from "@ethersproject/units";

export interface PureCountryCollectionProps {
  balance: number;
  address: string;
}

export const PureCountryCollection = ({
  balance,
  address,
}: PureCountryCollectionProps) => {
  return (
    <div className="space-x-6">
      <span className="font-semibold">
        {parseFloat(formatUnits(balance))}
      </span>
      <span>{address}</span>
    </div>
  );
};
