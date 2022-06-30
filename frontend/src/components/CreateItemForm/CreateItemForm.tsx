import LocationButton from "../LocationButton";

export interface PureCreateItemFormProps {
  loading?: boolean;
  onSubmitForm: (T: any) => void;
  onUpdateInput: (T: any, X: any) => void;
  onUploadFile: (T: any) => void;
  file: any;
  disabled?: boolean;
}

export const PureCreateItemForm = ({
  loading = false,
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
          <div>
            <label
              htmlFor='asset-name'
              className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              name='asset-name'
              id='asset-name'
              className='mt-1 focus:ring-primary-focus focus:border-primary-focus block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              onChange={(e) => onUpdateInput("name", e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <div className='mt-1'>
              <textarea
                id='description'
                name='description'
                rows={3}
                className='shadow-sm focus:ring-primary-focus focus:border-primary-focus mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                onChange={(e) => onUpdateInput("description", e.target.value)}
              />
            </div>
            <p className='mt-2 text-sm text-gray-500'>
              Brief description of the asset.
            </p>
          </div>

          <div>
            <label
              htmlFor='asset-geolocation'
              className='block text-sm font-medium text-gray-700'>
              Coordinates
            </label>
            <div className='mt-1'>
              <LocationButton />
            </div>
            {/* <input
              type='text'
              name='asset-geolocation'
              id='asset-geolocation'
              className='mt-1 focus:ring-primary-focus focus:border-primary-focus block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              onChange={(e) => onUpdateInput("name", e.target.value)}
            /> */}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Image
            </label>
            <div className='flex mt-4'>
              {file ? (
                <div className='rounded mr-2 w-80 overflow-hidden'>
                  <img src={file} alt='' />
                </div>
              ) : (
                <div className='rounded mr-2 w-80 flex justify-center items-center p-6 border-2 border-gray-300 border-dashed'>
                  <span className='text-gray-400'>Preview</span>
                </div>
              )}
              <div className='flex flex-1 justify-center items-center p-6 border-2 border-gray-300 border-dashed rounded'>
                <div className='space-y-1 text-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 48 48'
                    aria-hidden='true'>
                    <path
                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='flex text-sm justify-center'>
                    <label
                      htmlFor='file-upload'
                      className='relative cursor-pointer rounded-md font-medium text-primary hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-focus'>
                      <span>Upload a file</span>
                      <input
                        id='file-upload'
                        name='file-upload'
                        type='file'
                        className='sr-only'
                        onChange={onUploadFile}
                      />
                    </label>
                    {/* <p className='pl-1'>or drag and drop</p> */}
                  </div>
                  {/* TODO: update accepted filetypes */}
                  <p className='text-xs text-gray-500'>
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
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
                    className='shadow-sm focus:ring-primary-focus focus:border-primary-focus block w-full sm:text-sm border-gray-300 rounded-md'
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
                    className='shadow-sm focus:ring-primary-focus focus:border-primary-focus block w-full sm:text-sm border-gray-300 rounded-md'
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
