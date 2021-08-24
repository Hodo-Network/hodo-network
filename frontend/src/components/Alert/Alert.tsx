import React from "react";
import { ExclamationIcon, XIcon } from "@heroicons/react/solid";

export interface PureAlertProps {
  message: string;
  status: "success" | "warning" | "error";
  hidden?: boolean;
  onDismiss?: () => void;
}

export const PureAlert: React.FC<PureAlertProps> = ({
  message,
  status = "warning",
  hidden = false,
  onDismiss,
}) => {
  let classStyles = {
    container: "",
    icon: "",
    message: "",
    button: "",
  };

  switch (status) {
    case "success":
      classStyles = {
        container: "bg-green-50 border-green-400",
        icon: "text-green-400",
        message: "text-green-700",
        button:
          "bg-green-50 text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600",
      };
      break;
    case "error":
      classStyles = {
        container: "bg-red-50 border-red-400",
        icon: "text-red-400",
        message: "text-red-700",
        button:
          "bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600",
      };
      break;
    default:
      // case "warning"
      classStyles = {
        container: "bg-yellow-50 border-yellow-400",
        icon: "text-yellow-400",
        message: "text-yellow-700",
        button:
          "bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600",
      };
      break;
  }

  return (
    <div
      className={`border-b-2 p-4 ${classStyles.container} ${
        hidden && "hidden"
      }`}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <ExclamationIcon className={`h-5 w-5  ${classStyles.icon}`} />
        </div>
        <div className='ml-3'>
          <p className={`text-sm ${classStyles.message}`}>{message}</p>
        </div>
        <div className='ml-auto pl-3'>
          <div className='-mx-1.5 -my-1.5'>
            <button
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${classStyles.message}`}
              onClick={onDismiss}>
              <span className='sr-only'>Dismiss</span>
              <XIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
