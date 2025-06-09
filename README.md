## 🧩 React Dashboard (Kanban + Charts + Calendar)
This is a modern, interactive dashboard built using React, Vite, Tailwind CSS, styled-components, framer-motion, recharts, and `react-beautiful-dnd` for drag-and-drop functionality. It features Kanban boards, charts, a calendar, and more.

## 🚀 Features

📊 Dynamic Charts using Recharts
🗓️ Calendar Integration
✅ Kanban Board with Drag-and-Drop using `react-beautiful-dnd`
🎨 Theme customization
⚡ Fast performance with Vite
💡 Framer Motion animations
🧩 Modular component-based architecture

## 📦 Tech Stack

**React 19**
**Vite**
**Tailwind CSS 4**
**styled-components**
**Framer Motion**
**Recharts**
**React Beautiful DnD**
**Ant Design**
**React Router v7**
**Radix UI**

## 🛠️ Installation

Follow these steps to run this project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dashboard.git
cd dashboard
```

### 2. Install Dependencies

Before installing, make sure you have **Node.js** and **npm** installed.

> ⚠️ Use legacy peer deps to avoid dependency conflicts (especially with `react-beautiful-dnd` and `date-fns`).

```bash
npm install --legacy-peer-deps
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Preview or Build

* Preview production build:

  ```bash
  npm run preview
  ```

* Build for production:

  ```bash
  npm run build
  ```

## ⚠️ Note About Page Load

> This dashboard uses APIs for data rendering, which may take a few seconds to load.
> **If the page appears blank initially**, please **refresh the page once** to load the content correctly.

## 📁 Project Structure

```
dashboard/
├── public/                  # Static assets
├── src/
│   ├── components/          # All UI components (Kanban, Charts, Navbar, etc.)
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React DOM entry
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration
```

## 📮 Feedback

If you run into any issues or have suggestions, feel free to open an issue or contribute to the project.
