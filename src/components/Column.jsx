// // 

// import TaskCard from "./TaskCard";

// function Column({
//   title,
//   status,
//   tasks,
//   deleteTask,
//   editTask,
//   moveTask
// }) {

//   const handleDrop = (e) => {

//     e.preventDefault();

//     const taskId = Number(
//       e.dataTransfer.getData("taskId")
//     );

//     moveTask(taskId, status);

//   };

//   return (

//     <div
//       className="column"
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={handleDrop}
//     >

//       <h2>{title}</h2>

//       {
//         tasks
//           .filter(task => task.status === status)
//           .map(task => (

//             <TaskCard
//               key={task.id}
//               task={task}
//               deleteTask={deleteTask}
//               editTask={editTask}
//             />

//           ))
//       }

//     </div>

//   );
// }

// export default Column;


//

import TaskCard from "./TaskCard";

function Column({ title, status, tasks, deleteTask, editTask, moveTask }) {
  const handleDrop = (e) => {
    e.preventDefault();

    const taskId = Number(e.dataTransfer.getData("taskId"));

    moveTask(taskId, status);
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>

      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
    </div>
  );
}

export default Column;
