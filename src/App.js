import { useState } from "react";
import Input from "./components/Input";
import Task from "./components/Task";
import { TodoFilters } from "./components/TodoFilters";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTaskList([...taskList, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTaskList(taskList.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const filteredList = taskList.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = taskList.filter((t) => !t.completed).length;
  const completedCount = taskList.filter((t) => t.completed).length;

  return (
    <div className="flex flex-col items-center py-8 gap-4">

      {/* Header */}
      <div className="flex items-center gap-4 w-2/5">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f52c0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Tasks</h1>
          <p className="text-sm text-gray-400 mt-0.5">Organize your day, one task at a time</p>
        </div>
      </div>

      {/* Input */}
      <div className="w-2/5">
        <Input addTask={addTask} />
      </div>

      {/* Filters */}
      <div className="w-2/5">
        <TodoFilters
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
        />
      </div>

      {/* Task list */}
      <div className="flex flex-col gap-3 w-2/5">
        {filteredList.map((task) => (
          <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
        ))}
      </div>

    </div>
  );
};

export default App;