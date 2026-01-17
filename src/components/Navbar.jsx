import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-10 bg-(--c2)'>
        <h2 className='text-2xl font-semibold'>Media Search</h2>
        <div className='flex gap-5 items-center text-xl'>
          <Link className='text-base font-semibold active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to="/">Search</Link>
          <Link className='text-base font-semibold active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to="/collection">Collection</Link>
        </div>
    </div>
  )
}

export default Navbar