import TaskItem from './TaskItem.jsx';

const TaskList = ({ tasks, onToggleStatus, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-sm text-slate-600">No tasks yet. Add one to start practicing!</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
