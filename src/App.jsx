
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
    setIsModalOpen,
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
            <h1>TaskTrek</h1>
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
        <TaskForm />
      )}

      <main className={`app_main ${isDarkMode ? "dark" : "light"}`}>
        <TaskColumn
          title="To Do"
          icon={todoIcon}
          status="todo"
        />
        <TaskColumn
          title="In Progress"
          icon={doingIcon}
          status="doing"
        />
        <TaskColumn
          title="Completed"
          icon={doneIcon}
          status="done"
        />
      </main>
    </div>
    </>
  );
};

export default App;
