import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { MESSAGE_PROCESSING } from "../../constants/messages";

export default function Notification() {
  const [visible, setVisible] = useState(true);
  let status = MESSAGE_PROCESSING;

  const handleHide = () => {
    setVisible(false);
  };

  //   Notification panel, show/hide based on alert state.

  //   Entering: "transform ease-out duration-300 transition"
  //     From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
  //     To: "translate-y-0 opacity-100 sm:translate-x-0"
  //   Leaving: "transition ease-in duration-100"
  //     From: "opacity-100"
  //     To: "opacity-0"

  return (
    <div
      className={`${
        visible ? "visible" : "hidden"
      } z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end`}>
      <div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
        <div className='p-4'>
          <div className='flex items-center'>
            <div className='w-0 flex-1 flex justify-between'>
              <p className='w-0 flex-1 text-sm font-medium text-gray-900'>
                {status}
              </p>
              <button className='ml-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                Undo
              </button>
            </div>
            <div className='ml-4 flex-shrink-0 flex'>
              <button
                onClick={handleHide}
                className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                <span className='sr-only'>Close</span>
                <XIcon className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
