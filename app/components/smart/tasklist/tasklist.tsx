import { useEffect, useState } from "react";
import { Card } from "../../dumb/card/card";
import { Button } from "../../dumb/button/button";
import { TaskModal } from "../modal/taskmodal";

interface ITask {
  title: string;
  id: number;
}

interface ITaskListProps {}

export const TaskList: React.FC<ITaskListProps> = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        const firstThreeTasksNotCompleted = json
          .slice(0, 3)
          .filter(({ completed }: { completed: boolean }) => !completed);

        setTasks(firstThreeTasksNotCompleted);
      });
  }, []);

  const handleDeleteTask = (idToDelete: number) => {
    setTasks((prevTasks) => prevTasks.filter(({ id }) => id !== idToDelete));
  };

  const handleAddTask = (title: string) => {
    if (title.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { title, id: prevTasks.length + 1 },
      ]);
    }
  };

  return (
    <div data-cy="task-list">
      <h2 className="text-xl font-bold" data-cy="task-list-title">
        Mis tareas
      </h2>

      <div className="mt-4 space-y-4" data-cy="task-list-container">
        {tasks.map(({ title, id }) => (
          <Card
            key={id}
            title={title}
            onDelete={() => handleDeleteTask(id)}
            data-cy={`task-card-${id}`}
          />
        ))}
      </div>

      <Button onClick={() => setIsModalOpen(true)} data-cy="add-task-button">
        Añadir tarea
      </Button>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default TaskList;
