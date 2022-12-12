import React from 'react';

interface IPrimaryButton {
  label: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
