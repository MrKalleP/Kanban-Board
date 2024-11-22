import React, { useState } from 'react';
import Column from './Column';

const Board: React.FC = () => {
  type Task = { id: string; title: string };
  type Column = { id: string; title: string; tasks: Task[] };

  const [columns, setColumns] = useState<Column[]>([
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'doing', title: 'Doing', tasks: [] },
    { id: 'codeReview', title: 'Code review', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
  ]);

  const addTask = (columnId: string, taskTitle: string) => {
    setColumns((showColums) =>
      showColums.map((singleColumn) =>
        singleColumn.id === columnId
          ? {
              ...singleColumn,
              tasks: [
                ...singleColumn.tasks,
                { id: Date.now().toString(), title: taskTitle },
              ],
            }
          : singleColumn
      )
    );
  };

  return (
    <section className="colum-container">
      {columns.map((singleColumn) => (
        <Column key={singleColumn.id} column={singleColumn} addTask={addTask} />
      ))}
    </section>
  );
};

export default Board;
