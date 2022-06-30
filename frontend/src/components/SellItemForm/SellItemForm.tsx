import ContentWrapper from "../../ContentWrapper";
import Loader from "../../base/Loader";

export interface PureSellItemFormProps {
  loading?: boolean;
  onUpdateFormInput: (T: any) => void;
  onCreateItem: (T: any) => void;
}

export const PureSellItemForm = ({
  loading = false,
  onUpdateFormInput,
  onCreateItem,
}: PureSellItemFormProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>
        {loading ? (
          <Loader />
        ) : (
          "Insert form here"
        )}
      </div>
    </ContentWrapper>
  );
};
