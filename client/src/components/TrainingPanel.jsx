const TrainingPanel = ({ title = 'How this page works', concepts = [], files = [], tips = [] }) => {
  return (
    <aside className="card h-full border-l-4 border-blue-500 bg-blue-50 p-6">
      <h2 className="text-xl font-bold text-blue-800">{title}</h2>
      <p className="mt-2 text-sm text-blue-900/80">
        This always-visible coach sidebar explains what you are seeing so you can learn by exploring the code.
      </p>

      {concepts.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">Concepts in play</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900/90">
            {concepts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">Files to open</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900/90">
            {files.map((path) => (
              <li key={path}>{path}</li>
            ))}
          </ul>
        </div>
      )}

      {tips.length > 0 && (
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">Try this</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900/90">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default TrainingPanel;
