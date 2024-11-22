import React from 'react';

type TaskProps = {
  task: { id: string; title: string };
};

const TaskCard: React.FC<TaskProps> = ({ task }) => {
  return (
    <section className="single-task-container">
      <h4>{task.title}</h4>
    </section>
  );
};

export default TaskCard;
