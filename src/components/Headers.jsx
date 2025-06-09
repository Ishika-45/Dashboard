import React from 'react'

function Headers({darkMode}) {
  return (
    <div className={`${darkMode ? "text-white":"text-black"} m-4`}>
        <h1 className='text-5xl font-bold'>Hello Ishika</h1>
    </div>
  )
}

export default Headers
