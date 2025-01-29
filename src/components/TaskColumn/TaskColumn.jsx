
import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../DropArea/DropArea";
import "./TaskColumn.css";

const TaskColumn = ({ title, icon, status }) => {
  const { tasks, handleDelete, setActiveCard, onDrop, handleEdit,isDarkMode } = useTaskContext();
  
//   const backgroundColors = {
//     "To Do": isDarkMode ? "#1c1c1c" : "#f1f9fc",
//     "In Progress": isDarkMode ? "#1c1c1c" : "#fff3e0",
//     "Completed": isDarkMode ? "#1c1c1c" : "#e8f5e9",
//   };
const backgroundColors = {
    "To Do": isDarkMode ? "#1c1c1c" : "#f1f9fc",
    "In Progress": isDarkMode ? "#1c1c1c" : "#fff3e0",
    "Completed": isDarkMode ? "#1c1c1c" : "#e8f5e9",
  };

  const columnStyle = {
    backgroundColor: backgroundColors[title],
    color: isDarkMode ? '#fff' : '#000',
    boxShadow: isDarkMode ? '0 2px 10px 1px #ffffff' : '0 2px 10px 1px rgba(0, 0, 0, 0.1)'
  };
  console.log("Dark mode is ", isDarkMode);

  const taskCount = tasks.filter((task) => task.status === status).length;

//   const handleSaveEdit = (index, updatedTask) => {
//     handleEdit(index, updatedTask, status);
//   };

  return (
    <section className="task_column"  style={columnStyle}
>
      <div className="task_column_header">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={icon} alt="" /> {title}
        </h2>
        <span className="task_count">{taskCount}</span>
      </div>

      <DropArea onDrop={() => onDrop(status, 0)} />

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
             <TaskCard
                title={task.task}
                priority={task.priority}
                dueDate={task.dueDate} 
                description={task.description} 
                index={index}
               
{/*                 handleDelete={() => handleDelete(index)}
                setActiveCard={setActiveCard}
                handleEdit={() => handleEdit(index)}  */}
              />

              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
