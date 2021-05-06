import { ExclamationIcon, XIcon } from "@heroicons/react/solid";
import React from "react";

export default function SiteAlert() {
  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <div
      className={`bg-yellow-50 border-b-2 border-yellow-400 p-4 ${
        isHidden && "hidden"
      }`}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <ExclamationIcon className='h-5 w-5 text-yellow-400' />
        </div>
        <div className='ml-3'>
          <p className='text-sm text-yellow-700'>
            Site is coming soon. You're currently viewing an early prototype.
          </p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              className='inline-flex bg-yellow-50 rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 focus:ring-yellow-600'
              onClick={() => setIsHidden(true)}>
              <span className='sr-only'>Dismiss</span>
              <XIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
