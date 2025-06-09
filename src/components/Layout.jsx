import React, { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';


const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='flex'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Dashboard darkMode={darkMode} /> 
    </div>
  );
};

export default Layout;