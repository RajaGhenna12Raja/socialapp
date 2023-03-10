import { SparklesIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import {Input} from "./Input"
import Post from '../components/Post'
import { useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'
import { AnimatePresence, motion } from 'framer-motion'

export const Feed = () => {
  const [posts, setPosts] = useState([ ])
   useEffect(
    () =>
     onSnapshot(
      query(collection(db, "posts"), orderBy ("timestamp", "desc")),  
         (snapshot) => {
          setPosts (snapshot.docs);
           }
      ),
     [ ]
);
  return (
    <div className='ml-0 xl:ml-[300px] border-l border-r border-gray-200  xl:min-w-[400px] sm:ml-[43px] flex-grow max-w-xl'>
        <div className=' flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 '>
            <h2 className='ml-1  text-lg sm:text-xl font-bold cursor-pointer '>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 py-0 ml-auto w-9 h-9 '>
                <SparklesIcon className='h-5' />
            </div>
        </div>
        <Input />
        <AnimatePresence>
         {posts.map((post) =>(
          <motion.div key={post.id} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          >
          <Post key={post.id} post={post}/>
          </motion.div> 
          ))}
        </AnimatePresence>
    </div>
  )
}