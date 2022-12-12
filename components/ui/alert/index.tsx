import { InformationCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { IAlert } from '../../../types';

interface IAlertComponent {
  alertObject: IAlert | undefined;
}
const AlertComponent: React.FC<IAlertComponent> = ({ alertObject }) => {
  return (
    <div
      className={`flex space-x-1 my-4 ${
        alertObject?.severity === 'error' ? 'text-red-500' : 'text-green-500'
      }`}
    >
      <InformationCircleIcon className="h-5" />
      <span>{alertObject?.message}</span>
    </div>
  );
};

export default AlertComponent;
