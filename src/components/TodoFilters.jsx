const TodoFilters = ({ currentFilter, onFilterChange, activeCount, completedCount }) => {
    return (
      <div className="flex items-center justify-between gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-200">
        <div className="flex gap-1">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium capitalize transition-colors ${
                currentFilter === f
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f}
              {f === "active" && activeCount > 0 && (
                <span className="text-xs bg-gray-600 text-white rounded-full px-1.5 py-0.5">{activeCount}</span>
              )}
              {f === "completed" && completedCount > 0 && (
                <span className="text-xs bg-gray-600 text-white rounded-full px-1.5 py-0.5">{completedCount}</span>
              )}
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-400">
          {activeCount} {activeCount === 1 ? "task" : "tasks"} left
        </span>
      </div>
    );
  };
  
  export { TodoFilters };