const statusStyles = {
  'not started': 'bg-slate-100 text-slate-700',
  'in progress': 'bg-amber-100 text-amber-800',
  done: 'bg-emerald-100 text-emerald-700'
};

const TaskItem = ({ task, onToggleStatus, onDelete }) => {
  return (
    <li className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-start md:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-slate-900">{task.title}</p>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[task.status] || statusStyles['not started']}`}>
            {task.status}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-700">{task.description}</p>
        <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Priority: {task.priority}</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="button-primary" onClick={() => onToggleStatus(task)}>
          {task.status === 'done' ? 'Mark in progress' : 'Mark done'}
        </button>
        <button className="button-ghost" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
