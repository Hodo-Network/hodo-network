import React from "react";

export interface NetworkErrorMessageProps {
  message: string;
  dismiss: any;
}

export const NetworkErrorMessage: React.FC<NetworkErrorMessageProps> = ({
  message,
  dismiss,
}) => {
  return (
    <div className='alert alert-danger' role='alert'>
      {message}
      <button
        type='button'
        className='close'
        data-dismiss='alert'
        aria-label='Close'
        onClick={dismiss}>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};
