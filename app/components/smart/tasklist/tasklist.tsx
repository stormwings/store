import { useEffect, useState } from "react";
import { Card } from "../../dumb/card/card";
import { Button } from "../../dumb/button/button";
import { TaskModal } from "../modal/taskmodal";

interface ITask {
  title: string;
  id: number;
}

const ITEMS_PER_PAGE = 5;

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        const filteredTasks = json
          .filter(({ completed }: { completed: boolean }) => !completed)
          .slice(0, 3);
        setTasks(filteredTasks);
      });
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleTasks = tasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(tasks.length / ITEMS_PER_PAGE);

  const handleDeleteTask = (idToDelete: number) => {
    setTasks((prevTasks) => prevTasks.filter(({ id }) => id !== idToDelete));
  };

  const handleAddTask = (title: string) => {
    if (title.trim()) {
      const newTask = { title, id: tasks.length + 1 };
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div
      className="container mx-auto px-1 py-4 font-sans relative min-h-screen"
      data-cy="task-list"
    >
      <h2
        className="text-xl font-bold text-gray-600 mb-4"
        data-cy="task-list-title"
      >
        Mis tareas
      </h2>

      <div className="space-y-4 mb-4" data-cy="task-list-container">
        {visibleTasks.map(({ title, id }) => (
          <Card key={id} title={title} onDelete={() => handleDeleteTask(id)} />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-center items-center space-x-4">
        <Button onClick={() => setIsModalOpen(true)}>
          <div className="text-[16px] font-[300]">Añadir tarea</div>
        </Button>
      </div>

      {tasks.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Anterior
          </button>
          <span className="text-gray-700 font-medium">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Siguiente
          </button>
        </div>
      )}

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default TaskList;
