import React from 'react'
import { Link } from 'react-router-dom'
import { motion, spring } from 'framer-motion'
{/* Ready, Set, Quiz! Uncover Your Hidden Knowledge */}

function Home() {
  return (
    <main className='flex justify-start items-center h-screen bg-[#170a19] text-white gap-48 overflow-hidden'>

        <motion.div 
          initial= {{x:"-40vw"}}
          animate={{x:100}}
          transition={{type: "spring", stiffness: 110, duration:'1.2s', delay:1}}
        className='font-[Inter] uppercase font-extrabold flex flex-col ml-10 text-9xl'>
          <div>Ready</div>
          <div>Set</div>
          <div>Quiz!</div>
        </motion.div>
        <div className='font-[Inter] capitalize mb-8'>
          <motion.div
            initial={{x:"40vw", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{type: "spring", delay:1.6, stiffness:70 }}
           className='font-bold text-7xl '>Uncover Your Hidden Knowledge
           </motion.div><br />
          <motion.div
          initial={{opacity:0, position: 0}}
          animate={{opacity: 1, position:0}}
          transition={{duration:0.5, delay:1.8}}
          >
          <Link to={"quiz"}>
          <button 
          className='bg-yellow-200 text-black p-6 rounded-full text-xl hover:shadow-md hover:shadow-yellow-100 hover:-translate-y-2 transition-all'>Take a Quiz <i className="fa-solid fa-arrow-right fa-bounce"></i></button>
          </Link>
          </motion.div>
        </div>

    </main>
  )
}

export default Home