import React, { useState } from 'react';
import TaskCard from './TaskCard';

type ColumnProps = {
  column: { id: string; title: string; tasks: { id: string; title: string }[] };
  addTask: (columnId: string, taskTitle: string) => void;
};

const Column: React.FC<ColumnProps> = ({ column, addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(column.id, taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <section>
      <h2>{column.title}</h2>
      <input
        type="text"
        placeholder="New task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div className="task-container">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default Column;
