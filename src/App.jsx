import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Hello there",
      day: "Feb 25th",
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks"
      )}
    </div>
  );
}

export default App;
