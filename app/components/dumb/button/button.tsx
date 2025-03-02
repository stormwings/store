import React from "react";

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <div className="mt-6 flex justify-center" data-cy="button-container">
      <button
        data-cy="button"
        className="bg-green-600 text-white py-3 px-6 rounded-md font-semibold"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
