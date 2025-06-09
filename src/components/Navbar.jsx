import React, { useState, useEffect } from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiChart } from 'react-icons/bi';
import { FaChevronRight, FaGears, FaChevronDown } from 'react-icons/fa6';
import { FiTable } from 'react-icons/fi';
import { TiCalendar } from 'react-icons/ti';
import {TbLayoutKanban,TbLayoutSidebarLeftCollapse,TbLayoutSidebarLeftExpand} from 'react-icons/tb';
import { FaSun, FaMoon } from 'react-icons/fa6';

const Navbar = ({darkMode,setDarkMode}) => {
  const [open, setOpen] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const toggleSubMenu = (key) => {
    setActiveSubMenu((prevKey) => (prevKey === key ? null : key));
  };

  const Menus = [
    { key: 'dashboard', title: 'Dashboard', icon: <MdSpaceDashboard />, link: '/dashboard', subMenu: false },
    {
      key: 'calendar',
      title: 'Calendar',
      icon: <TiCalendar />,
      link: '/calendar',
      subMenu: true,
      subMenuItems: ['Events', 'Reminders'],
    },
    {
      key: 'kanban',
      title: 'Kanban',
      icon: <TbLayoutKanban />,
      link: '/kanban',
      subMenu: true,
      subMenuItems: ['Tasks', 'Projects'],
    },
    {
      key: 'charts',
      title: 'Charts',
      icon: <BiChart />,
      link: '/charts',
      subMenu: true,
      subMenuItems: ['Sales', 'Analytics'],
    },
    {
      key: 'tables',
      title: 'Tables',
      icon: <FiTable />,
      link: '/tables',
      subMenu: true,
      subMenuItems: ['Data', 'Reports'],
    },
    {
      key: 'settings',
      title: 'Settings',
      icon: <FaGears />,
      link: '/settings',
      subMenu: true,
      subMenuItems: ['Profile', 'Theme'],
    },
  ];

  return (
    <div className="flex-shrink-0">
      <div
        className={`${
          darkMode ? 'bg-zinc-900 text-white' : 'bg-gray-100 text-gray-900'
        } ${open ? 'w-72 p-5' : 'w-20 p-4'} h-screen pt-8 relative duration-300 ease-in-out`}
      >
        <div
          className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 ${
            darkMode ? 'bg-zinc-500 border-zinc-200' : 'bg-gray-300'
          } border-2 rounded-full text-xl flex items-center justify-center ${
            !open && 'rotate-180'
          } transition-all duration-300 ease-in-out`}
          onClick={() => setOpen(!open)}
        >
          {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
        </div>

        <div className="flex items-center gap-x-4">
          <img
            src="./icon.png"
            alt="logo"
            className="w-10 h-10 rounded-full object-cover object-center cursor-pointer"
          />
          <h1
            className={`${
              darkMode ? 'text-white' : 'text-gray-600'
            } font-semibold origin-left text-xl duration-200 ease-in-out ${!open && 'scale-0'}`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6 space-y-0.5">
          {Menus.map((menu, index) => (
            <li
              key={menu.key}
              className={`flex flex-col rounded-md py-3 px-4 cursor-pointer ${
                darkMode
                  ? 'hover:text-zinc-100 hover:bg-gray-800/50'
                  : 'hover:text-black hover:bg-gray-900/40'
              } transition-all ease-in-out duration-300 ${
                menu.gap ? 'mt-9' : 'mt-2'
              } ${
                index === 0
                  ? darkMode
                    ? 'bg-zinc-800 text-white'
                    : 'bg-gray-900 text-zinc-100'
                  : ''
              }`}
            >
              <div
                className="flex items-center justify-between gap-x-4"
                onClick={() => menu.subMenu && toggleSubMenu(menu.key)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{menu.icon}</span>
                  <span className={`${!open && 'hidden'} origin-left ease-in-out duration-300`}>
                    {menu.title}
                  </span>
                </div>
                {menu.subMenu && open && (
                  <span className={`ml-auto transition-transform duration-300 ease-in-out`}>
                    {activeSubMenu === menu.key ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
              {menu.subMenu && activeSubMenu === menu.key && open && (
                <ul className={`pl-3 pt-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-'}`}>
                  {menu.subMenuItems.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-sm flex items-center justify-between gap-x-2 py-2 px-3 mt-1 ${
                        darkMode ? 'bg-zinc-800 text-white' : 'bg-gray-700 text-zinc-50'
                      } rounded-lg`}
                    >
                      <div className="flex items-center gap-2">
                        <FaChevronRight className="text-xs" />
                        {item}
                      </div>
                      {menu.key === 'settings' && item === 'Theme' && (
                        <button
                          onClick={() => setDarkMode((prev) => !prev)}
                          className={`px-2 py-0.5 rounded text-xs font-medium cursor-pointer ${
                            darkMode ? 'bg-white text-black' : 'bg-black text-white'
                          }`}
                        >
                          {darkMode ? <FaSun/> : <FaMoon/>}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;