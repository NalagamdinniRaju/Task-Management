
import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import PriorityBadge from "../PriorityBadge/PriorityBadge";
import "./TaskCard.css";

const TaskCard = ({ title, description, dueDate, priority, index }) => {
    const { handleDelete, handleEdit, setActiveCard } = useTaskContext();

  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      <p className="task_description">{description}</p>
      <div className="task_card_bottom_line">
        <PriorityBadge priority={priority} selected />

        <p className="task_dueDate">Due: {dueDate || "No Due Date"}</p>

        <div className="task_actions">
          <button
            className="edit_button"
            onClick={() => handleEdit(index)}
            aria-label="Edit Task"
          >
            <FaEdit className="edit_icon" />
          </button>
          <button
            className="delete_button"
            onClick={() => handleDelete(index)}
            aria-label="Delete Task"
          >
            <FaTrash className="delete_icon" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
