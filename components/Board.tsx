import React, { useState } from 'react';
import Column from './Column';

const Board: React.FC = () => {
  type Task = { id: string; title: string };
  type Column = { id: string; title: string; tasks: Task[] };

  const [columns, setColumns] = useState<Column[]>([
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'doing', title: 'Doing', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
  ]);

  const addTask = (columnId: string, taskTitle: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              tasks: [
                ...col.tasks,
                { id: Date.now().toString(), title: taskTitle },
              ],
            }
          : col
      )
    );
  };

  return (
    <section className="colum-container">
      {columns.map((col) => (
        <Column key={col.id} column={col} addTask={addTask} />
      ))}
    </section>
  );
};

export default Board;
