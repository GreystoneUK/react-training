const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Seed data resets on each server start
let tasks = [
  {
    id: 1,
    title: 'Read the TasksPage component',
    description: 'Open client/src/features/tasks/TasksPage.jsx to see routing, hooks, and Redux usage.',
    status: 'in progress',
    priority: 'medium'
  },
  {
    id: 2,
    title: 'Understand useSelector and useDispatch',
    description: 'Look at client/src/features/tasks/taskSlice.js to see how state is read and updated.',
    status: 'not started',
    priority: 'high'
  },
  {
    id: 3,
    title: 'Add a new field to the Redux store',
    description: 'Try extending the task state and updating UI components.',
    status: 'not started',
    priority: 'low'
  }
];

app.use(cors());
app.use(express.json());

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title, description, status = 'not started', priority = 'medium' } = req.body;
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title,
    description,
    status,
    priority
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.patch('/api/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  res.json(tasks[taskIndex]);
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  const removedTask = tasks.splice(taskIndex, 1)[0];
  res.json(removedTask);
});

app.get('/', (_req, res) => {
  res.send('Learning Dashboard API is running. Use /api/tasks for data.');
});

app.listen(PORT, () => {
  console.log(`Learning Dashboard API listening on port ${PORT}`);
});
