import React from 'react'
import AreaChart from './AreaChart'
import Calendars from './Calendars'

function Charts({ darkMode }) {
    return (
      <div className="chart-wrapper mt-2 rounded-lg mb-5 gap-[40px]">
        <div className={`shadow-lg p-4 rounded-lg ${darkMode ? "bg-zinc-700":"bg-gray-500"}`}>
          <h2 className={`font-bold text-[50px] mb-5 ${darkMode ? "text-white" : "text-black"}`}>
            Area Chart
          </h2>
          <AreaChart darkMode={darkMode} />
        </div>
        <div className={`shadow-lg p-4 rounded-lg ${darkMode ? "bg-zinc-700":"bg-gray-500"}`}>
          <h2 className={`font-bold text-[50px] mb-5 ${darkMode ? "text-white" : "text-black"}`}>
            Calendar
          </h2>
          <Calendars/>
        </div>
      </div>
    );
  }
  

export default Charts
