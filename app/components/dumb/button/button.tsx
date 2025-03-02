import React from "react";

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-sm bg-[#639605] text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-green-700"
      data-cy="button"
    >
      {children}
    </button>
  );
};

export default Button;
