


import { useEffect, useState } from "react";
import Board from "./components/Board";
import TaskForm from "./components/TaskForm";

function App() {

  // LOAD TASKS FROM LOCAL STORAGE
  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });

  // FILTER STATE
  const [filter, setFilter] =
    useState("all");

  // SAVE TASKS
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  // ADD TASK
  const addTask = (task) => {

    const alreadyExists = tasks.some(
      existingTask =>

        existingTask.title
          .trim()
          .toLowerCase()

        ===

        task.title
          .trim()
          .toLowerCase()
    );

    if(alreadyExists){

      alert("Task already exists");
      return;

    }

    setTasks([...tasks, task]);

  };

  // DELETE TASK
  const deleteTask = (id) => {

    const updatedTasks = tasks.filter(
      task => task.id !== id
    );

    setTasks(updatedTasks);

  };

  // EDIT TASK
  const editTask = (updatedTask) => {

    const updatedTasks = tasks.map(task =>

      task.id === updatedTask.id
      ? updatedTask
      : task

    );

    setTasks(updatedTasks);

  };

  // MOVE TASK
  const moveTask = (id, newStatus) => {

    const updatedTasks = tasks.map(task => {

      if(task.id === id){

        return {
          ...task,
          status:newStatus
        };

      }

      return task;

    });

    setTasks(updatedTasks);

  };

  // FILTERED TASKS
  const filteredTasks =

    filter === "all"
    ? tasks
    : tasks.filter(
        task =>
          task.status === filter
      );

  return (

    <div>

      <h1 className="app-title">
         Mini Kanban Board
      </h1>

      <TaskForm addTask={addTask} />

      {/* FILTER */}

      <div className="filter-container">

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <option value="all">
            All Tasks
          </option>

          <option value="todo">
            Todo
          </option>

          <option value="inprogress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>

        </select>

      </div>

      <Board
        tasks={filteredTasks}
        deleteTask={deleteTask}
        editTask={editTask}
        moveTask={moveTask}
      />

    </div>

  );
}

export default App;


