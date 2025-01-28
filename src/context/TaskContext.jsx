
import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [taskData, setTaskData] = useState({
    task: "",
    description: "",
    dueDate: "",
    status: "todo",
    priority: "LOW",
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = taskData;
        setTasks(updatedTasks);
        setEditIndex(null);
        toast.success('Task updated successfully!');
      } else {
        setTasks((prev) => [...prev, taskData]);
        toast.success('New task added successfully!');
      }
      setTaskData({ task: "", description: "", dueDate: "", status: "todo", priority: "LOW" });
      setIsModalOpen(false);
    } else {
      toast.error('Please enter a task title');
    }
  };

  const handleDelete = (taskIndex) => {
    try {
      setTasks(tasks.filter((_, index) => index !== taskIndex));
      toast.success('Task deleted successfully!');
    } catch (error) {
      toast.error('Error deleting task');
    }
  };

  const handleEdit = (taskIndex) => {
    try {
      setEditIndex(taskIndex);
      setTaskData({...tasks[taskIndex]});
      setIsModalOpen(true);
    } catch (error) {
      toast.error('Error editing task');
    }
  };

  const onDrop = (status, position) => {
    try {
      if (activeCard === null) return;
      const taskToMove = tasks[activeCard];
      const updatedTasks = tasks.filter((_, index) => index !== activeCard);
      updatedTasks.splice(position, 0, {
        ...taskToMove,
        status: status,
      });
      setTasks(updatedTasks);
      toast.success('Task moved successfully!');
    } catch (error) {
      toast.error('Error moving task');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toast.success(`Switched to ${!isDarkMode ? 'dark' : 'light'} mode`);
  };

  const resetForm = () => {
    setTaskData({
      task: "",
      description: "",
      dueDate: "",
      status: "todo",
      priority: "LOW",
    });
    setEditIndex(null);
  };

  const value = {
    tasks,
    activeCard,
    isModalOpen,
    isDarkMode,
    taskData,
    editIndex,
    setActiveCard,
    setIsModalOpen,
    setTaskData,
    handleChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    onDrop,
    toggleDarkMode,
    resetForm
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
