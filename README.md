
# 🎯 Modern Task Management System (TaskTrek)



## 🌟 Overview
A powerful, modern task management application built with React that transforms your workflow with Kanban-style organization and seamless drag-and-drop functionality.


## 🎥 Project Demo

Watch the demo of the project to see it in action:

<a href="https://drive.google.com/file/d/13OWsVpqMikQMKqXGPZj6R6LsvjgSKOGL/view?usp=sharing" target="_blank">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_748_k9dqsc.png" alt="Project Demo" width="400" height="200" />
</a>

*Click the image above or [here](https://drive.google.com/file/d/13OWsVpqMikQMKqXGPZj6R6LsvjgSKOGL/view?usp=sharing) to watch the full video.*

## 🌐 Live Project

Check out the live version of the project here:  
🔗 **[Live Project Link](https://task-management-nrs.vercel.app/)**


## ✨ Features

### 📊 Task Organization
- 📋 Kanban board with three columns
- 🔄 Drag-and-drop functionality
- 📈 Visual task progress tracking
- 🔢 Real-time task counting

### 🎨 Visual Elements
- 🎭 Dark/Light theme toggle
- 🌈 Priority color coding
- 💫 Smooth animations
- 🖼️ Modern UI design

### 📝 Task Management
- ➕ Create new tasks
- 📝 Edit existing tasks
- 🗑️ Delete tasks
- 🏷️ Priority labels
- 📅 Due date scheduling
- 📋 Detailed descriptions

### 🔔 Notifications
- ✅ Success alerts
- ❌ Error messages
- 💭 Toast notifications
- ⚡ Real-time updates

### 💾 Data Features
- 💽 Local storage persistence
- 🔄 Auto-save functionality
- 📱 Responsive design
- 🔒 Secure data handling

## 🛠️ Tech Stack

### 📚 Core Technologies
- ⚛️ React.js
- 📦 Context API
- 🎨 CSS Modules
- 💫 Framer Motion

### 🧰 Additional Tools
- 📱 React Hot Toast
- 🎯 React Icons
- 💾 LocalStorage API
- 🎨 CSS Custom Properties

## ⚡ Quick Start

### 📥 Installation

```bash
# 🔍 Clone repository
git clone https://github.com/NalagamdinniRaju/Task-Management.git

# 📂 Navigate to directory
cd task-management

# 📦 Install dependencies
npm install

# 🚀 Start development server
npm start
```

# 📸 Screenshots


## 🌞 Light Mode

### 📋 Main Dashboard
![Main Dashboard Light](https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_748_k9dqsc.png)
*Main dashboard view showing Kanban board with tasks in light mode*

### ➕ Task Creation
![Add Task Light](https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104623/Screenshot_755_g8mnhz.png)
*Task creation modal with priority selection and due date*

### 📝 Update Task
![Task Details  Updation Light](https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_754_lmkve1.png)
*Updating the task details with new description and due date*

## 🌙 Dark Mode

### 📋 Main Dashboard
![Main Dashboard Dark](https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104173/Screenshot_749_e7jz8r.png)
*Dark mode version of the main dashboard*

### ➕ Task Creation
![Add Task Dark](https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_751_xwyiy8.png)
*Task creation modal in dark theme*

### 📝 Update Task
![Task Details Updation Dark](./screenshots/task-details-dark.png)
*Task details updating view in dark mode*

## 📱 Mobile Views
### 📱 Mobile Dashboard and Task Management (Light & Dark Mode)

#### Light Mode
<div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_2025-01-29_041050_gggfk7.png" alt="Light Mode Dashboard" width="30%">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738105082/Screenshot_2025-01-29_042714_f8erh3.png" alt="Light Mode Task Creation" width="30%">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738105148/Screenshot_2025-01-29_042852_eqd3vg.png" alt="Light Mode Task Updation" width="30%">
</div>

#### Dark Mode
<div style="display: flex; gap: 10px; justify-content: center; align-items: center;">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_2025-01-29_041059_fids02.png" alt="Dark Mode Dashboard" width="30%">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738104172/Screenshot_2025-01-29_041107_jjxgzm.png" alt="Dark Mode Task Creation" width="30%">
  <img src="https://res.cloudinary.com/dwiq4s5ut/image/upload/v1738105231/Screenshot_2025-01-29_043015_pvt290.png" alt="Dark Mode Task Updation" width="30%">
</div>


## 🏗️ Project Structure

```
📁 src/
📁 components/
│   ├── 📑 DropArea/
│   │   ├── 📘 DropArea.jsx
│   │   └── 🎨 DropArea.css
│   │
│   ├── 🏷️ PriorityBadge/
│   │   ├── 📘 PriorityBadge.jsx
│   │   └── 🎨 PriorityBadge.css
│   │
│   ├── 📇 TaskCard/
│   │   ├── 📘 TaskCard.jsx
│   │   └── 🎨 TaskCard.css
│   │
│   ├── 📊 TaskColumn/
│   │   ├── 📘 TaskColumn.jsx
│   │   └── 🎨 TaskColumn.css
│   │
│   └── 📝 TaskForm/
│       ├── 📘 TaskForm.jsx
│       └── 🎨 TaskForm.css
├── 📁 context/
│   └── 🔄 TaskContext.js
├── 📁 assets/
├── 🎯 App.js
└── 📍 index.js
```



### 🎛️ Customization Options
- 🎯 Priority levels
- 🎨 Color schemes
- 📱 Layout options

## 📱 Usage

### 💫 Basic Operations
1. 📝 Create a new task
2. 🎯 Set priority and due date
3. 🔄 Drag tasks between columns
4. ✏️ Edit task details
5. 🗑️ Delete completed tasks

### 🎨 Theme Customization
1. 🌓 Toggle dark/light mode
2. 🎯 Choose priority colors
3. 📱 Adjust layout preferences
