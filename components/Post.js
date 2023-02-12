import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/solid'
import React from 'react'

function Post({post}) {
  return (
    <div className='flex p-3  cursor-pointer border-b border-gray-300'>
      {/*User  image */}
    <img className='h-11 w-11 rounded-full mr-4 ' src={post.userImg} alt="user-img"/>

      {/* right side */}
      <div className=''>
        {/* header */}

        <div className='flex items-center justify-between'>
          {/* post user info */}
          <div className='flex items-center space-x-1 whitespace-nowrap'>
         <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
         <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
         <span className='text-sm sm:text-[15px] hover:underline'>{post.timestamp}</span>
          </div>
         {/* dotIcons */}
         <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-red-600 hover:text-white p-2'/>
        </div>
        {/* post text */}
       <p className='text-gray-900 text-[15px] sm:text-[16px] mb-2 '>{post.text}</p>
       {/* postImage */}
       <img className='rounded-2xl mr-2' src={post.img} alt="image"/>
       {/* icons */}
       <div className='flex justify-between text-gray-500 p-2  '>
       <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600 '/>
       <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600  '/>
       <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600 '/>
       <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-white hover:bg-red-600  '/>
       <ChartBarIcon className='h-9 w-9 hoverEffect p-2  hover:text-white hover:bg-red-600  '/>
       </div>
      </div>

    </div>
  )
}

export default Post