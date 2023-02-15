import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import {News} from './News'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const Widgets = ({newsResults, randomUsersResults}) => {
    const [articleNum, setArticleNum] = useState(3);
    const [randomUserNum, setRandomUserNum] = useState(3);
  return (
    <div className='lg:w-[600px] hidden lg:inline ml-8 space-y-5 '>
      <div className='w-[90%] lg:w-[75%] sticky top-0 bg-white py-1.5  z-50 '>
        <div className='flex items-center p-3 rounded-full bg-red-600 relative'>
          <SearchIcon className='h-5 z-50 text-gray-500'/>
          <input className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-red-200 ' type='text' placeholder='Search Twitter'/>
        </div>
      </div>
        
        <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%] '>
            <h4 className='font-bold text-xl px-4'>What's Happening</h4>
             <AnimatePresence>
              {newsResults.slice(0, articleNum).map((article) =>(
                <motion.div key={article.title}
                    initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    >
                    <News  key={article.title} article={article}/>
                     </motion.div>
                     ))}
             </AnimatePresence>
         <button onClick={() =>setArticleNum(articleNum + 3)} className='text-red-300 pl-4 pb-3 hover:text-red-600 transition duration-500 ease-out'>Show More</button>
        </div>
        <div className='sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%] ml-1'> 
            <h4 className='font-bold text-xl px-4 items-end justify-center'>Who to Follow</h4>
            <AnimatePresence>
              {randomUsersResults.slice(0,  randomUserNum).map((randomUser) =>(
                <motion.div key={randomUser.login.username}
                    initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    >
                  <div key={randomUser.login.username}className='cursor-pointer hover:bg-gray-300 '>
                   <img className='rounded-full' src={randomUser.picture.thumbnail} alt="userImage" width={40} height={40}/>
                   <div className='truncate ml-4 leading-5 items-center justify-center'>
                        <h4 className='font-bold hover:underline text-[14px] truncate'>{randomUser.login.username}</h4>
                        <h5 className='text-[13px] text-gray-500 truncate'>{randomUser.name.first + "  " + randomUser.name.last}</h5>
                   </div>
                   <button  className='px-3.5  hover:bg-black ml-auto bg-red-600 text-white rounded-full text-sm font-bold '>Follow</button> 
                   </div>
                  </motion.div>
                 ))}
             </AnimatePresence>
            <button onClick={() => setRandomUserNum(randomUserNum + 3)} className='text-red-300 pl-4 pb-3 hover:text-red-600'>Show More</button>
        </div>
    </div>
  );
}

export default Widgets