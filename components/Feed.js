import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import {Input} from "./Input"
import Post from '../components/Post'

export const Feed = () => {
  const posts = [
    {
       id: "1",
       name: "RajaGhenna",
      username: "bhatti@Raja",
       userImg: "/images/profile.jpg",
       img: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
       text: "nice view",
       timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "RajaGhenna",
      username: "bhatti@Raja",
      userImg: "/images/ginny.jpg",
      img: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
      text: "beauty lips",
      timestamp: "1 hours ago"
   },
  ]
  return (
    <div className='lg:ml-[70px]  border-l border-r border-gray-300  lg:min-w-[430px]  sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-300 '>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer '>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 '>
                <SparklesIcon className='h-5' />
            </div>
        </div>
        <Input />
        {posts.map((post) =>(
          <Post key={post.id} post={post}/>
          ))}
    </div>
  )
}