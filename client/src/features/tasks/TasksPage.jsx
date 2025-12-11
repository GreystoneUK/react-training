import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrainingPanel from '../../components/TrainingPanel.jsx';
import TaskList from './TaskList.jsx';
import { addTask, deleteTask, setError, setLoading, setTasks, updateTask } from './taskSlice.js';

const apiBase = '/api/tasks';

const TasksPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.tasks);
  const [formState, setFormState] = useState({ title: '', description: '', priority: 'medium' });

  // Fetch tasks on first render
  useEffect(() => {
    const loadTasks = async () => {
      dispatch(setLoading());
      try {
        const response = await fetch(apiBase);
        const data = await response.json();
        dispatch(setTasks(data));
      } catch (err) {
        dispatch(setError('Unable to load tasks. Is the server running on port 4000?'));
      }
    };

    loadTasks();
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formState.title.trim()) return;

    try {
      const response = await fetch(apiBase, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, status: 'not started' })
      });
      const created = await response.json();
      dispatch(addTask(created));
      setFormState({ title: '', description: '', priority: 'medium' });
    } catch (err) {
      dispatch(setError('Could not create the task. Check the server logs.'));
    }
  };

  const handleToggleStatus = async (task) => {
    const nextStatus = task.status === 'done' ? 'in progress' : 'done';
    try {
      const response = await fetch(`${apiBase}/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
      const updated = await response.json();
      dispatch(updateTask(updated));
    } catch (err) {
      dispatch(setError('Could not update the task.'));
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${apiBase}/${id}`, { method: 'DELETE' });
      dispatch(deleteTask(id));
    } catch (err) {
      dispatch(setError('Could not delete the task.'));
    }
  };

  return (
    <>
      <section className="card space-y-6 p-8">
        <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-blue-600">Practice zone</p>
            <h2 className="text-2xl font-bold text-slate-900">Tasks and notes trainer</h2>
          </div>
          <div className="text-sm text-slate-600">
            {status === 'loading' && 'Loading tasks...'}
            {status === 'failed' && error}
            {status === 'succeeded' && `${items.length} tasks loaded`}
          </div>
        </header>

        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="title">
              Task title
            </label>
            <input
              id="title"
              type="text"
              value={formState.title}
              onChange={(e) => setFormState((prev) => ({ ...prev, title: e.target.value }))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="e.g. Practice useSelector"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="priority">
              Priority
            </label>
            <select
              id="priority"
              value={formState.priority}
              onChange={(e) => setFormState((prev) => ({ ...prev, priority: e.target.value }))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-semibold text-slate-800" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              value={formState.description}
              onChange={(e) => setFormState((prev) => ({ ...prev, description: e.target.value }))}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="Explain what you will practice"
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="button-primary">
              Add task
            </button>
          </div>
        </form>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Current tasks</h3>
          <TaskList tasks={items} onToggleStatus={handleToggleStatus} onDelete={handleDelete} />
        </div>
      </section>

      <TrainingPanel
        concepts={[
          'useEffect triggers a fetch on first render to load tasks from the Express API.',
          'useSelector reads Redux state, while useDispatch sends actions to the slice.',
          'Controlled inputs keep form values in local component state.',
          'Pure presentational components (TaskList, TaskItem) receive data via props.'
        ]}
        files={[
          'client/src/features/tasks/TasksPage.jsx',
          'client/src/features/tasks/taskSlice.js',
          'client/src/features/tasks/TaskList.jsx',
          'client/src/features/tasks/TaskItem.jsx'
        ]}
        tips={[
          'Add a new status option and update the styling map in TaskItem.jsx.',
          'Log the Redux state with console.log inside TasksPage to see how it changes.',
          'Switch to RTK Query later by creating an API slice if you want more practice.'
        ]}
      />
    </>
  );
};

export default TasksPage;
