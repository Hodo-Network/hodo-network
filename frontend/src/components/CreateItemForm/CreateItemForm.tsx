import FileUpload from "../FileUpload";
import ImagePreview from "../ImagePreview";
import LocationButton from "../LocationButton";

export interface PureCreateItemFormProps {
  onSubmitForm: (T: any) => void;
  onUpdateInput: (T: any, X: any) => void;
  onUploadFile: (T: any) => void;
  file: any;
  disabled?: boolean;
}

export const PureCreateItemForm = ({
  onSubmitForm,
  onUpdateInput,
  onUploadFile,
  file,
  disabled,
}: PureCreateItemFormProps) => {
  return (
    <form onSubmit={(e) => onSubmitForm(e)}>
      <div className='shadow sm:rounded-md sm:overflow-hidden'>
        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
          <div className="space-y-2">
            <label
              htmlFor='asset-name'
              className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              name='asset-name'
              id='asset-name'
              className='focus:ring-primary-focus focus:border-primary-focus block w-full shadow-sm sm:text-sm border-bc-muted rounded-md'
              onChange={(e) => onUpdateInput("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              rows={3}
              className='shadow-sm focus:ring-primary-focus focus:border-primary-focus mt-1 block w-full sm:text-sm border border-bc-muted rounded-md'
              onChange={(e) => onUpdateInput("description", e.target.value)}
            />
            <p className='text-sm text-gray-500'>
              Brief description of the asset.
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor='asset-geolocation'
              className='block text-sm font-medium text-gray-700'>
              Coordinates
            </label>

            <LocationButton />
          </div>

          <div className="space-y-2">
            <label className='block text-sm font-medium text-gray-700'>
              Image
            </label>
            <div className='grid grid-cols-4 gap-2'>
              <ImagePreview src={file} />
              <FileUpload onUploadFile={onUploadFile} />
            </div>
          </div>

          {/* onChange={(e) => onUpdateInput("attributes", e.target.value)} */}
          {/* <div>
            <p className='block text-sm font-medium text-gray-700'>
              Attributes
            </p>

            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='attribute-type'
                  className='block text-sm font-medium text-gray-700'>
                  Type
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='attribute-type'
                    id='attribute-type'
                    className='shadow-sm focus:ring-primary-focus focus:border-primary-focus block w-full sm:text-sm border-bc-muted rounded-md'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='attribute-value'
                  className='block text-sm font-medium text-gray-700'>
                  Value
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='attribute-value'
                    id='attribute-value'
                    className='shadow-sm focus:ring-primary-focus focus:border-primary-focus block w-full sm:text-sm border-bc-muted rounded-md'
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className='px-4 py-3 bg-gray-50 flex justify-between items-center sm:px-6'>
          <div className='text-gray-600'>Coming Soon</div>
          <button
            type='submit'
            disabled={disabled}
            className='btn btn-primary'>
            Create Digital Asset
          </button>
        </div>
      </div>
    </form>
  );
};
