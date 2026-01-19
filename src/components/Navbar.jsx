import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 sm:py-6 px-4 sm:px-10 bg-(--c2)'>
        <h2 className='text-lg sm:text-2xl font-semibold'>Media Search</h2>
        <div className='flex gap-2 sm:gap-5 items-center text-sm sm:text-xl'>
          <Link className='text-xs sm:text-base font-semibold active:scale-95 bg-(--c4) text-(--c1) rounded px-3 sm:px-4 py-2 transition-transform duration-200' to="/">Search</Link>
          <Link className='text-xs sm:text-base font-semibold active:scale-95 bg-(--c4) text-(--c1) rounded px-3 sm:px-4 py-2 transition-transform duration-200' to="/collection">Collection</Link>
        </div>
    </div>
  )
}

export default Navbar