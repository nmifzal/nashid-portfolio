import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center md:justify-end lg:py-16 lg:px-16 py-16 shadow-md'>
      <ul className='flex justify-center lg:text-xl text-sm font-semibold uppercase'>
        <li className='px-8'>About</li>
        <li className='px-8'>Projects</li>
        <li className='px-8'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar