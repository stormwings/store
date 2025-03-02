import React, { useState } from "react";
import Modal from "react-modal";

interface ITaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (title: string, description: string) => void;
}

export const TaskModal: React.FC<ITaskModalProps> = ({
  isOpen,
  onClose,
  onAddTask,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSave = () => {
    if (title.trim() && description.trim()) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto"
      overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center px-4"
      data-cy="task-modal"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        data-cy="task-modal-close"
      >
        ✕
      </button>

      <h2
        className="text-xl text-gray-700 font-bold mb-4"
        data-cy="task-modal-title"
      >
        Añadir tarea
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Nombre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          data-cy="task-modal-input-title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Descripción
        </label>
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
          data-cy="task-modal-input-description"
        />
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
          data-cy="task-modal-cancel"
        >
          Cancelar
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          data-cy="task-modal-save"
        >
          Guardar
        </button>
      </div>
    </Modal>
  );
};

export default TaskModal;
