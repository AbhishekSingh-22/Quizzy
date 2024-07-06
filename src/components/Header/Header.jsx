import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <header className='bg-[#170a19] text-yellow-200 h-24 w-screen font-[Inter] font-bold fixed z-50'>
      <div className='flex flex-row justify-between'>
        <motion.ul
          initial={{y:"-60vh"}}
          animate={{y:0}}
          transition={{type:"spring", stiffness:120}}
        >
          <NavLink to={"/"}><li className='p-4 text-6xl'>QUIZZY! <i className="fa-solid fa-gamepad"></i></li></NavLink>
        </motion.ul>
      </div>
    </header>
  )
}

export default Header