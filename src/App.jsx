
import React from "react";
import "./App.css";
import "./theme.css";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import TaskForm from "./components/TaskForm/TaskForm";
import { useTaskContext } from "./context/TaskContext";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const {
    isDarkMode,
    isModalOpen,
    taskData,
    handleChange,
    handleSubmit,
    setIsModalOpen,
    editIndex,
    setTaskData,
    handleDelete,
    handleEdit,
    setActiveCard,
    onDrop,
    tasks,
    toggleDarkMode,
    resetForm,
  } = useTaskContext();

  return (
    <>
    <Toaster/>

    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <div className="animated-bg glass-effect header-content">
          <div className="header-group">
            <h1>Task Management</h1>
            <div className="header-controls">
              <button
                className="add-task-btn"
                onClick={() => {
                  resetForm();
                  setIsModalOpen(true);
                }}
              >
                + Add Task
              </button>
              <button
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <TaskForm
          taskData={taskData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setIsModalOpen={setIsModalOpen}
          editIndex={editIndex}
          setTaskData={setTaskData}
        />
      )}

      <main className={`app_main ${isDarkMode ? "dark" : "light"}`}>
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="In Progress"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Completed"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
    </>
  );
};

export default App;
