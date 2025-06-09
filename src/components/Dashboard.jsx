import React from 'react'
import Headers from './Headers'
import Cards from './Card_Section'
import Charts from './Charts'
import Tables from './Tables'
import KanbanBoard from './KanbanBoard'

function Dashboard({darkMode}) {
  return (
    <div className={`flex-1 w-screen overflow-auto h-screen p-4 ${darkMode? "bg-zinc-600":"bg-gray-400"}`}>
      <div className='w-auto flex flex-col mx-auto'>
        <Headers darkMode={darkMode} />
        <Cards darkMode={darkMode}/>
        <Charts darkMode={darkMode}/>
        <div className={`flex flex-col w-[1200px] mb-5 justify-center items-center ${darkMode ? "bg-zinc-800":"bg-gray-800/40"} p-3 rounded-2xl shadow-2xl`}>
            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}>Tables</h1>
            <Tables darkMode={darkMode}/>
        </div>
        <div className={`flex flex-col justify-center w-[900px]  items-center ${darkMode ? "bg-zinc-800":"bg-gray-800/40"} p-4 rounded-2xl shadow-2xl`}>
            <h1 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}>Kanban Board</h1>
            <KanbanBoard darkMode={darkMode}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard