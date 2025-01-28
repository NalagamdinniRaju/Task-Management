
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TaskProvider } from './context/TaskContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
      <ToastContainer position="bottom-right" />
    </TaskProvider>
  </React.StrictMode>
);