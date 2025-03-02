import React from "react";

interface ICardProps {
  title: string;
  onDelete: () => void;
}

export const Card: React.FC<ICardProps> = ({ title, onDelete }) => {
  return (
    <div
      className="flex justify-between items-start bg-white p-4 rounded-lg shadow-sm border"
      data-cy="card-container"
    >
      <div>
        <h3 className="text-lg font-semibold" data-cy="card-title">
          {title}
        </h3>
        <p className="text-sm text-gray-600" data-cy="card-description">
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
