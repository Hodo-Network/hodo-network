export interface IFileUploadProps {
  onUploadFile?: (T: any) => void;
}

export const FileUpload = ({ onUploadFile }: IFileUploadProps) => {
  return (

    <div className='col-span-3 flex flex-1 justify-center items-center p-6 border-2 border-bc-muted border-dashed rounded-box'>
      <div className='space-y-1 text-center'>
        <svg
          className='mx-auto h-12 w-12 text-bc-muted'
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
  );
};
