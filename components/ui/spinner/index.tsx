import React from 'react';

interface ISpinner {
  color?: string;
}

const Spinner: React.FC<ISpinner> = ({ color }) => {
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`w-16 h-16 border-b-4 ${
          color ? `border-${color}` : 'border-gray-500'
        } rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
