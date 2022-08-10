import ContentWrapper from '../../ContentWrapper';

export interface PureSellItemFormProps {
  onUpdateFormInput: (T: any) => void;
  onCreateItem: (T: any) => void;
}

export const PureSellItemForm = ({
  onUpdateFormInput,
  onCreateItem,
}: PureSellItemFormProps) => {
  return (
    <ContentWrapper>
      <div className='p-4 sm:p-8 max-w-8xl'>Insert form here</div>
    </ContentWrapper>
  );
};
