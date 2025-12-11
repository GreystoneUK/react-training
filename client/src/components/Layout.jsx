import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-600">React Training Playground</p>
            <h1 className="text-xl font-bold text-slate-900">Learning Dashboard</h1>
          </div>
          <nav className="flex items-center gap-4 text-sm font-semibold text-slate-600">
            {['/', '/tasks', '/about-react'].map((path) => {
              const label = path === '/' ? 'Home' : path === '/tasks' ? 'Tasks' : 'About React';
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 transition ${
                      isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-slate-100 hover:text-slate-900'
                    }`
                  }
                >
                  {label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
