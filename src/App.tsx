import type { ReactNode } from "react";
import { useState } from "react";
type Task = {
  id: number;
  title: string;
  completed: boolean;
  discription?: string;
  priority: "low" | "meduim" | "high";
};

const tasks: Task[] = [
  {
    id: 1,
    title: "Wake Up",
    completed: true,
    priority: "high",
  },
  {
    id: 2,
    title: "Study",
    completed: true,
    discription: "We have to do it compulsory",
    priority: "meduim",
  },
  {
    id: 3,
    title: "Cleaning",
    completed: true,
    priority: "meduim",
  },
  {
    id: 4,
    title: "Sleep",
    completed: true,
    priority: "meduim",
  },
];

const [task, setTask] = useState(tasks);



function getTaskTitle(task: Task): string {
  return task.title;
}
function App() {
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

export default App;
