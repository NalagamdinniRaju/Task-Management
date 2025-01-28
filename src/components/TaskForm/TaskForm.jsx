
import React from "react";
import { useTaskContext } from "../../context/TaskContext";
import "./TaskForm.css";

const TaskForm = () => {
  const {
    taskData,
    handleChange,
    handleSubmit,
    setIsModalOpen,
    editIndex,
    // setTaskData,
  } = useTaskContext();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{editIndex !== null ? "Edit Task" : "Add New Task"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            placeholder="Enter your task"
            onChange={handleChange}
            className="modal-input"
          />
          <textarea
            name="description"
            value={taskData.description}
            placeholder="Enter task description"
            onChange={handleChange}
            className="modal-input"
          />
          <input
            type="date"
            name="dueDate"
            value={taskData.dueDate}
            onChange={handleChange}
            className="modal-input"
          />
          <div className="priority-group">
            {["LOW", "MEDIUM", "HIGH"].map((priority) => (
              <label key={priority} className="priority-label">
                <input
                  type="radio"
                  name="priority"
                  value={priority}
                  checked={taskData.priority === priority}
                  onChange={handleChange}
                />
                <span>{priority}</span>
              </label>
            ))}
          </div>
          <select
            name="status"
            value={taskData.status}
            onChange={handleChange}
            className="status-select"
          >
            <option value="todo">To Do</option>
            <option value="doing">In Progress</option>
            <option value="done">Completed</option>
          </select>
          <div className="modal-actions">
            <button type="submit" className="submit-btn">
              {editIndex !== null ? "Update Task" : "Add Task"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
