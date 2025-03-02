import React from "react";

interface ICardProps {
  title: string;
  onDelete: () => void;
}

export const Card: React.FC<ICardProps> = ({ title, onDelete }) => {
  return (
    <div
      className="flex justify-between items-start bg-white p-4 rounded-lg shadow-md border border-gray-200"
      data-cy="card-container"
    >
      <div>
        <h3
          className="text-[16px] font-[500] text-gray-700 leading-[21.79px]"
          data-cy="card-title"
        >
          {title}
        </h3>
        <p
          className="text-[12px] font-[400] text-gray-400 leading-[16.34px]"
          data-cy="card-description"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac
          elementum ultrices mauris. Cursus urna.
        </p>
      </div>

      <button
        className="text-gray-400 hover:text-red-600"
        onClick={onDelete}
        data-cy="card-delete-button"
      >
        🗑
      </button>
    </div>
  );
};

export default Card;
