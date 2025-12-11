import TrainingPanel from '../components/TrainingPanel.jsx';

const HomePage = () => {
  return (
    <>
      <section className="card p-8">
        <h2 className="text-2xl font-bold text-slate-900">Welcome to the Learning Dashboard</h2>
        <p className="mt-3 text-lg text-slate-700">
          This project is a safe sandbox for practicing React and Redux Toolkit. Explore the UI, read the comments, and
          open the suggested files. The right-side panel is always visible to guide you.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">What you can try</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Follow the navigation links to see routing in action.</li>
              <li>Use the Tasks page to add, complete, and remove learning tasks.</li>
              <li>Inspect Redux state changes using the comments in the slice file.</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">How to run locally</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Open two terminals.</li>
              <li>In one, run <code className="rounded bg-slate-100 px-2">cd server &amp;&amp; npm install &amp;&amp; npm start</code>.</li>
              <li>In another, run <code className="rounded bg-slate-100 px-2">cd client &amp;&amp; npm install &amp;&amp; npm run dev</code>.</li>
            </ol>
          </div>
        </div>
      </section>

      <TrainingPanel
        concepts={[
          'React Router controls which page component renders based on the URL.',
          'Layout.jsx creates the common navigation bar and two-column grid.',
          'Redux store is provided globally via <Provider> in src/main.jsx.',
          'Tailwind utility classes create spacing, borders, and colors without custom CSS.'
        ]}
        files={['client/src/main.jsx', 'client/src/App.jsx', 'client/src/components/Layout.jsx', 'client/tailwind.config.js']}
        tips={[
          'Update the welcome text and see the page hot-reload.',
          'Change a Tailwind class in Layout.jsx to practice styling tweaks.',
          'Add a new navigation link and a placeholder page to learn routing.'
        ]}
      />
    </>
  );
};

export default HomePage;
