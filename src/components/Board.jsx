// //

import Column from "./Column";

function Board({ tasks, deleteTask, editTask, moveTask }) {
  return (
    <div className="board">
      <Column
        title="TODO"
        status="todo"
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        moveTask={moveTask}
      />

      <Column
        title="IN PROGRESS"
        status="inprogress"
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        moveTask={moveTask}
      />

      <Column
        title="DONE"
        status="done"
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        moveTask={moveTask}
      />
    </div>
  );
}

export default Board;
