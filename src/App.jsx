import KanbanBoard from "./components/KanbanBoard";
import React, { useState , useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
// import Cards from "./components/Card_Section";
// import Headers  from "./components/Headers";
import Layout from "./components/Layout";

function App() {  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`App flex w-screen h-screen ${darkMode ? 'bg-zinc-700 text-white' : 'bg-gray-300 text-gray-900'}`}>
    <Layout />
    </div>
   
  )
}

export default App;