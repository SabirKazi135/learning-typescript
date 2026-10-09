import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [title, setTitle] = useState("");

  // Temporary UI data only
  const [todos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 2,
      title: "Build Express API",
      completed: true,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold">Todo App</h1>
        <p className="mb-8 text-gray-400">Manage your tasks</p>

        {/* Add Todo */}
        <div className="mb-8 flex gap-3">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
          />

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500">
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900 p-4"
            >
              <div>
                <p
                  className={`font-medium ${
                    todo.completed
                      ? "text-gray-500 line-through"
                      : "text-gray-100"
                  }`}
                >
                  {todo.title}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {todo.completed ? "Completed" : "Pending"}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="rounded-md bg-green-500/10 px-3 py-2 text-sm text-green-400 hover:bg-green-500/20">
                  Complete
                </button>

                <button className="rounded-md bg-red-500/10 px-3 py-2 text-sm text-red-400 hover:bg-red-500/20">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
