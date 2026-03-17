import { useState } from "react";

const Task = ({ task, onToggle, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
    className="flex items-center gap-4 bg-white border border-gray-400 rounded-2xl px-5 py-4 hover:shadow-sm transition-shadow"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
          task.completed ? "bg-gray-900" : "border-2 border-gray-300 bg-white"
        }`}
      >
        {task.completed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="2 6 5 9 10 3" />
          </svg>
        )}
      </button>

      {/* Task text */}
      <span className={`flex-1 text-sm ${task.completed ? "line-through text-gray-500" : "text-gray-1200"}`}>
        {task.text}
      </span>

      {/* Delete on hover */}
      {hovered && (
        <button onClick={() => onDelete(task.id)} className="text-gray-300 hover:text-gray-500 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Task;