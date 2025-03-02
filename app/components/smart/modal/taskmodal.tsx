import React, { useState } from "react";
import Modal from "react-modal";

interface ITaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (title: string, description: string) => void;
}

const useTaskForm = (
  onAddTask: (title: string, description: string) => void,
  onClose: () => void
) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState<{
    title?: string;
    description?: string;
  }>({});

  const validate = () => {
    let newErrors: { title?: string; description?: string } = {};
    if (!title.trim()) newErrors.title = "El título es obligatorio";
    if (!description.trim())
      newErrors.description = "La descripción es obligatoria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    errors,
    handleSave,
  };
};

export const TaskModal: React.FC<ITaskModalProps> = ({
  isOpen,
  onClose,
  onAddTask,
}) => {
  const { title, setTitle, description, setDescription, errors, handleSave } =
    useTaskForm(onAddTask, onClose);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="relative bg-white p-6 rounded-sm shadow-lg w-full max-w-md mx-auto font-sans"
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
        className="text-lg font-bold text-gray-700 mb-8"
        data-cy="task-modal-title"
      >
        Añadir tarea
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-light mb-1">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Nombre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-2 border rounded-md text-[14px] text-gray-400 leading-[19.07px] focus:outline-none focus:ring-2 ${
            errors.title
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-500"
          }`}
          data-cy="task-modal-input-title"
        />
        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-light mb-1">
          Descripción
        </label>
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full p-2 border rounded-md resize-none h-24 text-[14px] text-gray-400 leading-[19.07px] focus:outline-none focus:ring-2 ${
            errors.description
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-500"
          }`}
          data-cy="task-modal-input-description"
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">{errors.description}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md text-[14px] font-medium hover:bg-gray-300"
          data-cy="task-modal-cancel"
        >
          Cancelar
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-[#639605] text-white rounded-md text-[14px] font-medium hover:bg-green-700"
          data-cy="task-modal-save"
        >
          Guardar
        </button>
      </div>
    </Modal>
  );
};

export default TaskModal;
