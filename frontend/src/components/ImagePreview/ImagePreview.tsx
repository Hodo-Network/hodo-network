export interface IImagePreviewProps {
  src?: string;
}

export const ImagePreview = ({ src }: IImagePreviewProps) => {
  if (!src) {
    return (
      <div className='rounded-box overflow-hidden max-w-xs flex justify-center items-center p-6 border-2 border-bc-muted border-dashed'>
        <span className='text-bc-muted'>Preview</span>
      </div>
    );
  }

  return (
    <div className='rounded-box overflow-hidden max-w-xs'>
      <img src={src} alt='Preview' />
    </div>
  );
};
