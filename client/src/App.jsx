import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutReactPage from './pages/AboutReactPage.jsx';
import TasksPage from './features/tasks/TasksPage.jsx';

// App wires up routes and shared layout. Each page shows a training panel.
const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/about-react" element={<AboutReactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Layout>
);

export default App;
