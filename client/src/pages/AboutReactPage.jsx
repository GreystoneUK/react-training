import TrainingPanel from '../components/TrainingPanel.jsx';

const AboutReactPage = () => {
  return (
    <>
      <section className="card space-y-4 p-8">
        <h2 className="text-2xl font-bold text-slate-900">React + Redux refresher</h2>
        <p className="text-slate-700">
          React builds UI from small, reusable components. Data flows down through props, and user interactions trigger
          state updates. Hooks like <code className="rounded bg-slate-100 px-1">useState</code> manage local state while
          <code className="rounded bg-slate-100 px-1">useEffect</code> handles side effects such as fetching data.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Redux Toolkit in this project</h3>
            <p className="mt-2 text-slate-700">
              Redux Toolkit simplifies state management with sensible defaults. We define a slice for tasks that creates
              actions and reducers automatically. Components read state with <code className="rounded bg-slate-100 px-1">useSelector</code>
              and send updates with <code className="rounded bg-slate-100 px-1">useDispatch</code>.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-slate-900">Unidirectional data flow</h3>
            <p className="mt-2 text-slate-700">
              Data starts in the Redux store, flows into UI components through selectors, and user actions dispatch new
              events that update the store. The UI re-renders automatically when the store changes.
            </p>
          </div>
        </div>
      </section>

      <TrainingPanel
        concepts={[
          'Components receive props and render JSX.',
          'Hooks (useState, useEffect) manage state and effects.',
          'Redux Toolkit slices bundle reducers, actions, and initial state.',
          'React Router matches URLs to page components.'
        ]}
        files={[
          'client/src/main.jsx (entry point + Provider)',
          'client/src/app/store.js (Redux store configuration)',
          'client/src/features/tasks/taskSlice.js (slice definition)',
          'client/src/features/tasks/TasksPage.jsx (real-world hooks and dispatch)'
        ]}
        tips={[
          'Add a new paragraph explaining a concept you recently learned.',
          'Find a component and add a small UI tweak to see how JSX maps to DOM.',
          'Trace the data flow from the Tasks page form submit into the Redux slice.'
        ]}
      />
    </>
  );
};

export default AboutReactPage;
