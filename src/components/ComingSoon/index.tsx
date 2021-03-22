import { TEXT_COMING_SOON } from "../../constants/text";

export default function ComingSoon() {
  return (
    <div className='overflow-hidden'>
      <div className='px-4 py-5 sm:p-6'>
        <p className='text-xl font-medium dark:text-white'>
          {TEXT_COMING_SOON}
        </p>
      </div>
    </div>
  );
}
