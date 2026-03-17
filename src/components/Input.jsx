import {useState} from "react"

const Input = ({taskList, setTaskList, addTask}) => { 

    const [input, setInput] = useState("")
    const handleAddTask = (e) => {
        e.preventDefault();
        if (input.trim()) {
          addTask(input.trim());
          setInput("");
        }
      };

  return (
    <>
       <div className="flex gap-3 w-full">
       <input
            className="flex-1 bg-gray-100 rounded-xl px-5 py-3.5 text-sm text-gray-1000 placeholder-gray-400 outline-none"
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask(e)}
        />

            <button
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors shrink-0"
                onClick={handleAddTask}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </div>
    </>
  )
}

export default Input
