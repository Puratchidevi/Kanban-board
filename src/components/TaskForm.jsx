

import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Task title required");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status: "todo",
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low Priority</option>

        <option value="medium">Medium Priority</option>

        <option value="high">High Priority</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
