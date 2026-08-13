
function TaskCard({ task, deleteTask, editTask }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleEdit = () => {
    const newTitle = prompt("Edit title", task.title);

    const newDescription = prompt("Edit description", task.description);

    if (!newTitle.trim()) {
      return;
    }

    editTask({
      ...task,
      title: newTitle,
      description: newDescription,
    });
  };

  return (
    <div
      className={`task ${task.priority}`}
      draggable
      onDragStart={handleDragStart}
    >
      <h4 className={task.status === "done" ? "completed-task" : ""}>
        {task.title}
      </h4>

      <p>{task.description}</p>

      <small>Priority: {task.priority}</small>

      {task.status === "done" && (
        <p className="completed-badge">✅ Completed</p>
      )}

      <div className="task-buttons">
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
